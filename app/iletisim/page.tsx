import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "İletişim | Kadıköy Kat Karşılığı İnşaat Teklifi | Sadıkoğlu İnşaat",
  description:
    "Kadıköy'de kat karşılığı inşaat teklifi için Sadıkoğlu İnşaat ile iletişime geçin. Feneryolu Mah., Bağdat Cad. No:141.",
};

const MAPS_EMBED =
  "https://maps.google.com/maps?q=Ba%C4%9Fdat+Caddesi+No+141+Feneryolu+Kad%C4%B1k%C3%B6y+%C4%B0stanbul&output=embed&hl=tr&z=16";

const bilgiler = [
  {
    icon: MapPin,
    baslik: "Adres",
    icerik: "Feneryolu Mah. Bağdat Cd. No 141 D:8",
    alt: "Kadıköy, İstanbul",
    href: null,
  },
  {
    icon: Phone,
    baslik: "WhatsApp",
    icerik: "+90 533 785 61 61",
    alt: null,
    href: "https://wa.me/905337856161",
  },
  {
    icon: Mail,
    baslik: "E-posta",
    icerik: "info@sadikoglu.com.tr",
    alt: null,
    href: "mailto:info@sadikoglu.com.tr",
  },
  {
    icon: Clock,
    baslik: "Çalışma Saatleri",
    icerik: "Pazartesi – Cuma: 09:00 – 18:00",
    alt: "Cumartesi: Randevuyla",
    href: null,
  },
];

export default function IletisimPage() {
  return (
    <div className="bg-dark min-h-screen">

      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-dark-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(201,168,71,0.06) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">Bize Ulaşın</span>
          <h1 className="font-serif text-4xl md:text-5xl text-offwhite font-bold leading-tight mb-4">
            İletişim
          </h1>
          <div className="gold-divider" />
          <p className="text-muted mt-2 text-sm max-w-md">
            Arsanız veya projeniz hakkında bilgi almak için formu doldurun
            ya da doğrudan WhatsApp'tan yazın.
          </p>
        </div>
      </section>

      {/* ── İÇERİK ──────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Sol: Bilgiler + Harita ── 2 kolon */}
            <div className="lg:col-span-2 space-y-5">

              {/* Bilgi kartları */}
              <div className="bg-dark-mid border border-dark-border rounded-2xl overflow-hidden">
                {bilgiler.map(({ icon: Icon, baslik, icerik, alt, href }, i) => (
                  <div
                    key={baslik}
                    className={`flex items-start gap-4 p-5 ${
                      i < bilgiler.length - 1 ? "border-b border-dark-border" : ""
                    }`}
                  >
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-muted text-xs uppercase tracking-wider mb-1">{baslik}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-offwhite font-medium text-sm hover:text-gold transition-colors"
                        >
                          {icerik}
                        </a>
                      ) : (
                        <p className="text-offwhite font-medium text-sm">{icerik}</p>
                      )}
                      {alt && <p className="text-muted text-xs mt-0.5">{alt}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Instagram */}
              <div className="bg-dark-mid border border-dark-border rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-gold">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider mb-1">Instagram</p>
                  <a
                    href="https://instagram.com/sadikoglu1965"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-offwhite font-medium text-sm hover:text-gold transition-colors"
                  >
                    @sadikoglu1965
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/905337856161?text=Merhaba%2C%20Sad%C4%B1ko%C4%9Flu%20%C4%B0n%C5%9Faat%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold py-4 rounded-xl transition-colors text-sm"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.12 1.523 5.85L.057 23.5l5.78-1.517C7.623 22.944 9.779 23.5 12 23.5c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.5c-1.966 0-3.794-.533-5.364-1.458l-.384-.228-3.43.9.916-3.35-.25-.393C2.536 15.5 2 13.82 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                WhatsApp ile Hemen Yazın
              </a>

              {/* Harita */}
              <div className="rounded-2xl overflow-hidden border border-dark-border h-64">
                <iframe
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sadıkoğlu İnşaat Ofis Konumu"
                />
              </div>
            </div>

            {/* Sağ: Form ── 3 kolon */}
            <div className="lg:col-span-3 bg-dark-mid border border-dark-border rounded-2xl p-8 lg:p-10">
              <span className="section-label">Mesaj Gönderin</span>
              <h2 className="font-serif text-2xl text-offwhite font-bold mb-2">
                Size Geri Döneceğiz
              </h2>
              <div className="gold-divider" />
              <p className="text-muted text-sm mb-8 mt-2">
                Arsanız veya projeniz hakkında bilgi almak için formu doldurun.
                En kısa sürede dönüş yapacağız.
              </p>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
