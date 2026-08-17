import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { sendMail } from "@/lib/mailer";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { validatePartnerRequest } from "@/lib/validatePartnerRequest";
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

  const { data, errors } = validatePartnerRequest(body);
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
    console.error("partner-with-us: recaptcha verification error", error);
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
      INSERT INTO partner_requests
        (name, company_name, phone, city, country, email, website_url, partnership_info, ip_address, user_agent)
      VALUES
        (${data.name}, ${data.company_name}, ${data.phone}, ${data.city}, ${data.country}, ${data.email}, ${data.website_url}, ${data.partnership_info}, ${remoteIp}, ${request.headers.get("user-agent")})
    `;
  } catch (error) {
    console.error("partner-with-us: failed to save to database", error);
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
        subject: `New partnership inquiry from ${data.name}`,
        replyTo: data.email,
        html: `
          <h2>New Partnership Inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Company:</strong> ${escapeHtml(data.company_name)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
          <p><strong>City:</strong> ${escapeHtml(data.city)}</p>
          <p><strong>Country:</strong> ${escapeHtml(data.country)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Website:</strong> ${escapeHtml(data.website_url)}</p>
          <p><strong>Partnership Info:</strong><br/>${escapeHtml(data.partnership_info).replace(/\n/g, "<br/>")}</p>
        `,
      }),
    );
  }

  emailTasks.push(
    sendMail({
      to: data.email,
      subject: "We've received your partnership request",
      html: `
        <p>Hi ${escapeHtml(data.name)},</p>
        <p>Thanks for your interest in partnering with Apex Global Solutions. We've received your request and will get back to you within 24 hours.</p>
        <p>Best regards,<br/>Apex Global Solutions</p>
      `,
    }),
  );

  const results = await Promise.allSettled(emailTasks);
  results.forEach((result) => {
    if (result.status === "rejected") {
      console.error("partner-with-us: failed to send email", result.reason);
    }
  });

  return NextResponse.json({
    message: "Thanks! We'll be in touch within 24 hours.",
  });
}
