import nodemailer from "nodemailer";
import { promises as fs } from "fs";
import path from "path";

export type ContactEmailBody = {
  name: string;
  email: string;
  preferredContactTime?: string;
  phoneNumber?: string;
  message?: string;
};

const validateBody = (body: unknown): body is ContactEmailBody => {
  return (
    typeof body === "object" &&
    body !== null &&
    "name" in body &&
    "email" in body &&
    typeof (body as ContactEmailBody).name === "string" &&
    typeof (body as ContactEmailBody).email === "string" &&
    (!("preferredContactTime" in body) ||
      typeof (body as ContactEmailBody).preferredContactTime ===
        "string") &&
    (!("phoneNumber" in body) ||
      typeof (body as ContactEmailBody).phoneNumber === "string") &&
    (!("message" in body) ||
      typeof (body as ContactEmailBody).message === "string")
  );
};

export async function POST(req: Request) {
  if (!process.env.ZOHO_USER || !process.env.ZOHO_PASSWORD) {
    return Response.json(
      {
        error: "Email service not configured",
      },
      { status: 500 },
    );
  }
  const transporter = nodemailer.createTransport({
    host: "smtp.zohocloud.ca",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_PASSWORD,
    },
  });
  const body = await req.json();
  if (!validateBody(body)) {
    return Response.json(
      {
        error: "Invalid request body",
      },
      { status: 400 },
    );
  }

  const confirmHtml = await fs.readFile(
    path.join(
      process.cwd(),
      "src/app/api/email/contact/confirm.html",
    ),
    "utf-8",
  );

  // Send a confirmation email to the user
  await transporter.sendMail({
    from: "Danmar Software Solutions <info@danmarsolutions.ca>",
    to: body.email,
    subject:
      "We've received your message – thank you for reaching out!",
    html: confirmHtml
      .replaceAll("{{name}}", body.name)
      .replaceAll("{{email}}", body.email)
      .replaceAll("{{phone}}", body.phoneNumber || "Not provided")
      .replaceAll(
        "{{preferredContactTime}}",
        body.preferredContactTime || "Not provided",
      )
      .replaceAll(
        "{{message}}",
        body.message || "No message provided",
      ),
  });

  // Send an email to us
  await transporter.sendMail({
    from: "Danmar Software Solutions <info@danmarsolutions.ca>",
    to: "info@danmarsolutions.ca",
    subject: `New contact form submission from ${body.name}`,
    text: `New contact form submission.\n\nName: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phoneNumber || "Not provided"}\nPreferred Contact Time: ${body.preferredContactTime || "Not provided"}\nMessage: ${body.message || "No message provided"}`,
  });

  return Response.json({
    message: "Email sent successfully",
  });
}
