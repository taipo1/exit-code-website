import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST(req: Request) {
  try {
    const { name, email, message, number, subject } = await req.json();

    const resendResp = await resend.emails.send({
      from: "ramsey@exitcode0.nl",
      to: "ramsey.zdiri@gmail.com",
      subject: "New Form Submission",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <p><strong>Number:</strong> ${number}</p>
        <p><strong>Subject:</strong> ${subject}</p>
      `,
    });

    console.log("Email sent successfully:", resendResp);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      { error: "Email failed to send" },
      { status: 500 },
    );
  }
}
