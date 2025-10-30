import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body || {};
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const useRealSmtp = !!process.env.SMTP_HOST;

    const transporter = useRealSmtp
      ? nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 587),
          secure: false,
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        })
      : nodemailer.createTransport({ jsonTransport: true });

    const to = process.env.CONTACT_TO || 'you@example.com';
    const from = process.env.CONTACT_FROM || 'no-reply@example.com';

    const info = await transporter.sendMail({
      from,
      to,
      subject: `Portfolio contact from ${name}`,
      replyTo: email,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    return NextResponse.json({ ok: true, info });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
