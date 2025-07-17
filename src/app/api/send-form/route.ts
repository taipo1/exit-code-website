import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST(req: Request) {
  const { name, email, message, number, subject } = await req.json();

  const resendResp = await resend.emails.send({
    from: "ramsey@exitcode0.nl",
    to: "ramsey.zdiri@gmail.com",
    subject: `form submission : ${subject}`,
    html: `
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Number:</strong> ${number}</p>
      `,
  });

  // Send confirmation email to user
  await resend.emails.send({
    from: "ramsey@exitcode0.nl",
    to: email,
    subject: `je stelde Gericht een vraag over: ${subject}`,
    html: `
      <h1>Je bericht is in goede orde ontvangen</h1>
      <p>Je hoort zo snel mogelijk van ons</p>
      <br />
      <p>Groet,</p>
      <p>Ramsey</p>
      `,
  });

  if (resendResp.error) {
    return NextResponse.json(
      {
        error:
          "Er ging iets mis met het versturen van de e-mail, probeer het later opnieuw",
      },
      { status: 500 },
    );
  }
  return NextResponse.json({ success: true });
}
