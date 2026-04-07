import { NextRequest, NextResponse } from "next/server";
import { BUSINESS } from "@/lib/config";

// Basic input sanitization — strip HTML tags
function sanitize(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = sanitize(String(body.name ?? ""));
    const phone = sanitize(String(body.phone ?? ""));
    const message = sanitize(String(body.message ?? ""));

    // — Validation ———————————————————————————————————————————————
    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: "Geçerli bir ad-soyad giriniz." },
        { status: 400 }
      );
    }

    // Turkish mobile: starts with 05 and is 11 digits, or international +90...
    const phoneClean = phone.replace(/\s/g, "");
    const phoneValid =
      /^(0[5][0-9]{9})$/.test(phoneClean) ||
      /^\+90[5][0-9]{9}$/.test(phoneClean);
    if (!phoneValid) {
      return NextResponse.json(
        { error: "Geçerli bir telefon numarası giriniz (ör: 05XX XXX XX XX)." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "Lütfen en az 10 karakter içeren bir mesaj yazınız." },
        { status: 400 }
      );
    }

    // — Delivery options (configure one) ———————————————————————————
    //
    // Option 1 — Nodemailer / SMTP (recommended for production)
    //   Install: npm install nodemailer @types/nodemailer
    //   Set env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL
    //
    // import nodemailer from "nodemailer";
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT ?? 587),
    //   secure: false,
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // });
    // await transporter.sendMail({
    //   from: `"Web Formu" <${process.env.SMTP_USER}>`,
    //   to: process.env.CONTACT_EMAIL ?? BUSINESS.email,
    //   subject: `Yeni İletişim Formu Mesajı – ${name}`,
    //   text: `Ad Soyad: ${name}\nTelefon: ${phone}\n\nMesaj:\n${message}`,
    // });
    //
    // Option 2 — Resend (https://resend.com, free tier: 100 emails/day)
    //   Install: npm install resend
    //   Set env var: RESEND_API_KEY
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "onboarding@resend.dev",
    //   to: [BUSINESS.email],
    //   subject: `Yeni İletişim Mesajı – ${name}`,
    //   text: `Ad Soyad: ${name}\nTelefon: ${phone}\n\nMesaj:\n${message}`,
    // });

    // — Logging for development —————————————————————————————————
    if (process.env.NODE_ENV !== "production") {
      console.log("[Contact Form Submission]", {
        to: BUSINESS.email,
        name,
        phone,
        message,
      });
    }

    return NextResponse.json(
      { success: true, message: "Mesajınız başarıyla iletildi." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Bir hata oluştu. Lütfen tekrar deneyin veya bizi arayın." },
      { status: 500 }
    );
  }
}
