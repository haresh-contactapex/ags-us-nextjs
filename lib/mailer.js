import nodemailer from "nodemailer";

let transporter;

function getTransporter() {
  if (!transporter) {
    const host = process.env.BREVO_SMTP_HOST;
    const port = Number(process.env.BREVO_SMTP_PORT || 587);
    const user = process.env.BREVO_SMTP_USER;
    const pass = process.env.BREVO_SMTP_PASSWORD;

    if (!host || !user || !pass) {
      throw new Error(
        "BREVO_SMTP_HOST, BREVO_SMTP_USER and BREVO_SMTP_PASSWORD must be set",
      );
    }

    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }
  return transporter;
}

export async function sendMail({ to, subject, html, replyTo }) {
  const fromAddress = process.env.MAIL_FROM_ADDRESS;
  if (!fromAddress) {
    throw new Error("MAIL_FROM_ADDRESS is not set");
  }
  const fromName = process.env.MAIL_FROM_NAME || "Apex Global Solutions";

  await getTransporter().sendMail({
    from: `"${fromName}" <${fromAddress}>`,
    to,
    subject,
    html,
    ...(replyTo ? { replyTo } : {}),
  });
}
