import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { ad, telefon, email, mesaj } = body;

    if (!ad || !telefon || !mesaj) {
      return NextResponse.json({ error: "Zorunlu alanlar eksik" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey || resendKey === "your_resend_api_key_here") {
      // Dev modunda sadece log yaz
      console.log("İletişim Formu:", { ad, telefon, email, mesaj });
      return NextResponse.json({ success: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Sadıkoğlu İnşaat <onboarding@resend.dev>",
        to: ["burak@sadikoglu.com.tr"],
        reply_to: email || undefined,
        subject: `Yeni İletişim Formu: ${ad}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1B2F4E; padding: 20px; text-align: center;">
              <h2 style="color: #C9A847; margin: 0;">Sadıkoğlu İnşaat</h2>
              <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 14px;">Yeni İletişim Mesajı</p>
            </div>
            <div style="padding: 30px; background: #f9f9f9; border: 1px solid #e0e0e0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; width: 120px; font-weight: bold;">Ad Soyad:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #1B2F4E;">${ad}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">Telefon:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #1B2F4E;">${telefon}</td>
                </tr>
                ${email ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-weight: bold;">E-posta:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #1B2F4E;">${email}</td>
                </tr>
                ` : ""}
              </table>
              <div style="margin-top: 20px;">
                <p style="color: #666; font-weight: bold; margin-bottom: 8px;">Mesaj:</p>
                <div style="background: white; padding: 15px; border: 1px solid #ddd; color: #1B2F4E; line-height: 1.6;">
                  ${mesaj.replace(/\n/g, "<br>")}
                </div>
              </div>
            </div>
            <div style="padding: 15px; text-align: center; background: #1B2F4E;">
              <p style="color: #ffffff70; font-size: 12px; margin: 0;">sadikoglu.com.tr — İletişim Formu</p>
            </div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Mail gönderilemedi" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
