import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "İletişim | Sadıkoğlu İnşaat",
  description:
    "Sadıkoğlu İnşaat ile iletişime geçin. Kadıköy'de kat karşılığı inşaat için teklif alın.",
};

const MAPS_EMBED =
  "https://maps.google.com/maps?q=Ba%C4%9Fdat+Caddesi+No+161+Feneryolu+Kad%C4%B1k%C3%B6y+%C4%B0stanbul&output=embed&hl=tr&z=16";

export default function IletisimPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-navy py-14 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Bize Ulaşın
          </p>
          <h1 className="font-serif text-4xl text-white font-bold">İletişim</h1>
          <div className="w-16 h-0.5 bg-gold mt-4" />
        </div>
      </section>

      {/* İçerik */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sol: İletişim Bilgileri + Harita */}
            <div className="space-y-8">
              {/* Bilgi Kartları */}
              <div className="bg-white border border-gray-100 p-8">
                <h2 className="font-serif text-2xl text-navy font-bold mb-2">
                  İletişim Bilgileri
                </h2>
                <div className="w-10 h-0.5 bg-gold mb-7" />

                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                        Adres
                      </p>
                      <p className="text-navy font-medium">
                        Feneryolu Mah. Bağdat Cd. No 141 D:8
                      </p>
                      <p className="text-navy font-medium">Kadıköy, İstanbul</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/905337856161"
                        className="text-navy hover:text-gold font-medium transition-colors"
                      >
                        +90 533 785 61 61
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                        E-posta
                      </p>
                      <a
                        href="mailto:burak@sadikoglu.com.tr"
                        className="text-navy hover:text-gold font-medium transition-colors"
                      >
                        burak@sadikoglu.com.tr
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-gold">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                        Instagram
                      </p>
                      <a
                        href="https://instagram.com/sadikoglu1965"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy hover:text-gold font-medium transition-colors"
                      >
                        @sadikoglu1965
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                        Çalışma Saatleri
                      </p>
                      <p className="text-navy font-medium">Pazartesi – Cuma: 09:00 – 18:00</p>
                      <p className="text-gray-500 text-sm">Cumartesi: Randevuyla</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* WhatsApp Butonu */}
              <a
                href="https://wa.me/905337856161?text=Merhaba%2C%20Sad%C4%B1ko%C4%9Flu%20%C4%B0n%C5%9Faat%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold py-4 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.120 1.523 5.85L.057 23.5l5.78-1.517C7.623 22.944 9.779 23.5 12 23.5c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.5c-1.966 0-3.794-.533-5.364-1.458l-.384-.228-3.43.9.916-3.35-.25-.393C2.536 15.5 2 13.82 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp ile Hemen Yazın
              </a>

              {/* Google Maps */}
              <div className="border border-gray-200 overflow-hidden">
                <iframe
                  src={MAPS_EMBED}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sadıkoğlu İnşaat Ofis Konumu"
                />
              </div>
            </div>

            {/* Sağ: İletişim Formu */}
            <div className="bg-white border border-gray-100 p-8">
              <h2 className="font-serif text-2xl text-navy font-bold mb-2">
                Mesaj Gönderin
              </h2>
              <div className="w-10 h-0.5 bg-gold mb-7" />
              <p className="text-gray-500 text-sm mb-7">
                Arsanız veya projeniz hakkında bilgi almak için formu doldurun.
                En kısa sürede size dönüş yapacağız.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
