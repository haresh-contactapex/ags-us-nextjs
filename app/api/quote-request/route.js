import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { sendMail } from "@/lib/mailer";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { validateQuoteRequest } from "@/lib/validateQuoteRequest";
import { escapeHtml } from "@/lib/escapeHtml";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  const { data, errors } = validateQuoteRequest(body);
  const token =
    typeof body?.recaptcha_token === "string" ? body.recaptcha_token : "";

  if (!token) {
    errors.recaptcha = "Please verify you're not a robot.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { message: "Please fix the errors below.", data: { errors } },
      { status: 422 },
    );
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const remoteIp = forwardedFor ? forwardedFor.split(",")[0].trim() : null;

  let recaptchaOk = false;
  try {
    recaptchaOk = await verifyRecaptcha(token, remoteIp);
  } catch (error) {
    console.error("quote-request: recaptcha verification error", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }

  if (!recaptchaOk) {
    return NextResponse.json(
      {
        message: "reCAPTCHA verification failed. Please try again.",
        data: {
          errors: {
            recaptcha: "reCAPTCHA verification failed. Please try again.",
          },
        },
      },
      { status: 422 },
    );
  }

  try {
    const sql = getDb();
    await sql`
      INSERT INTO quote_requests
        (first_name, last_name, email, phone, service, ip_address, user_agent)
      VALUES
        (${data.first_name}, ${data.last_name}, ${data.email}, ${data.phone}, ${data.service}, ${remoteIp}, ${request.headers.get("user-agent")})
    `;
  } catch (error) {
    console.error("quote-request: failed to save to database", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }

  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;
  const emailTasks = [];

  if (adminEmail) {
    emailTasks.push(
      sendMail({
        to: adminEmail,
        subject: `New quote request from ${data.first_name} ${data.last_name}`,
        replyTo: data.email,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${escapeHtml(data.first_name)} ${escapeHtml(data.last_name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
          <p><strong>Service:</strong> ${escapeHtml(data.service)}</p>
        `,
      }),
    );
  }

  emailTasks.push(
    sendMail({
      to: data.email,
      subject: "We've received your quote request",
      html: `
        <p>Hi ${escapeHtml(data.first_name)},</p>
        <p>Thanks for reaching out to Apex Global Solutions. We've received your request for
        <strong>${escapeHtml(data.service)}</strong> and will get back to you shortly.</p>
        <p>Best regards,<br/>Apex Global Solutions</p>
      `,
    }),
  );

  const results = await Promise.allSettled(emailTasks);
  results.forEach((result) => {
    if (result.status === "rejected") {
      console.error("quote-request: failed to send email", result.reason);
    }
  });

  return NextResponse.json({
    message: "Thank you! Your request has been submitted successfully.",
  });
}
