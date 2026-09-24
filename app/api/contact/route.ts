import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "./schema";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_EMAIL;

    if (!apiKey || !recipient) {
      return NextResponse.json(
        { ok: false, error: "Contact service not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Nexora Digital <onboarding@resend.dev>",
      to: [recipient],
      subject: `New enquiry from ${data.name}`,
      replyTo: data.email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0B0F1A; color: #ffffff; border-radius: 12px;">
          <h2 style="color: #1E5EFF; margin: 0 0 20px;">New Project Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #7dd3fc; width: 140px;">Name</td><td style="padding: 8px 0; color: #ffffff;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #7dd3fc;">Email</td><td style="padding: 8px 0; color: #ffffff;">${data.email}</td></tr>
            <tr><td style="padding: 8px 0; color: #7dd3fc;">Phone / WhatsApp</td><td style="padding: 8px 0; color: #ffffff;">${data.phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #7dd3fc;">Company</td><td style="padding: 8px 0; color: #ffffff;">${data.company || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #7dd3fc;">Service</td><td style="padding: 8px 0; color: #ffffff;">${data.service}</td></tr>
          </table>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(56,189,248,0.2);">
            <p style="color: #7dd3fc; margin: 0 0 8px;">Message</p>
            <p style="color: #ffffff; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected server error" },
      { status: 500 }
    );
  }
}