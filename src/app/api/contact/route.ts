import { NextRequest, NextResponse } from "next/server";
import { ServerClient } from "postmark";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  consentAccepted?: boolean;
};

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => ({}))) as ContactPayload;

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const message = String(body.message ?? "").trim();
  const consentAccepted = Boolean(body.consentAccepted);

  if (!name || !email || !message || !consentAccepted) {
    return NextResponse.json({ error: "missing_required_fields" }, { status: 400 });
  }

  const postmarkToken = process.env.POSTMARK_SERVER_TOKEN ?? "";
  const emailFrom = process.env.EMAIL_FROM ?? "";
  const emailTo = process.env.CONTACT_EMAIL_TO ?? "";

  if (!postmarkToken || !emailFrom || !emailTo) {
    return NextResponse.json({ error: "email_not_configured" }, { status: 500 });
  }

  const client = new ServerClient(postmarkToken);
  const subject = `New Unmarked Goods inquiry from ${name}`;

  await client.sendEmail({
    From: emailFrom,
    To: emailTo,
    ReplyTo: email,
    Subject: subject,
    TextBody: [
      "New contact form submission",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "-"}`,
      "",
      "Message:",
      message,
      "",
      "Consent accepted: yes",
    ].join("\n"),
    HtmlBody: `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#0f172a;">
        <h2 style="margin:0 0 12px;">New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
        <p><strong>Consent accepted:</strong> yes</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
