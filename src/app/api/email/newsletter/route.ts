import nodemailer from "nodemailer";

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
  if (!body || !body.email) {
    return Response.json(
      {
        error: "Invalid request body",
      },
      { status: 400 },
    );
  }

  await transporter.sendMail({
    from: "info@danmarsolutions.ca",
    to: "info@danmarsolutions.ca",
    subject: "Newsletter Subscription from: " + body.email,
    text: `New subscription from: ${body.email}`,
  });

  return Response.json({
    message: "Email sent successfully",
  });
}
