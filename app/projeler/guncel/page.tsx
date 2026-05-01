import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Building2 } from "lucide-react";
import { getGuncelProjeler } from "@/lib/projects";

export const metadata = {
  title: "Devam Eden Projeler | Kadıköy Kat Karşılığı İnşaat | Sadıkoğlu İnşaat",
  description:
    "Sadıkoğlu İnşaat'ın Kadıköy'de devam eden güncel inşaat projeleri. Kat karşılığı inşaat için aşama aşama takip edin.",
};

const ASAMA_COLORS: Record<string, string> = {
  "Temel Aşaması":    "bg-blue-900/60 text-blue-300 border-blue-700",
  "Kaba İnşaat":      "bg-orange-900/60 text-orange-300 border-orange-700",
  "İnce İşler":       "bg-yellow-900/60 text-yellow-300 border-yellow-700",
  "Bitmek Üzere":     "bg-green-900/60 text-green-300 border-green-700",
  "Proje Aşamasında": "bg-purple-900/60 text-purple-300 border-purple-700",
};

export default function GuncelProjelerPage() {
  const projeler = getGuncelProjeler().filter((p) => p.yayinda);

  return (
    <div className="bg-dark min-h-screen">

      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-dark-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(201,168,71,0.06) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">Devam Eden Çalışmalarımız</span>
          <h1 className="font-serif text-4xl md:text-5xl text-offwhite font-bold leading-tight mb-4">
            Güncel<br />
            <span className="text-gold italic">Projelerimiz</span>
          </h1>
          <div className="gold-divider" />
          <p className="text-muted mt-2 text-sm">
            {projeler.length} aktif proje · Kadıköy ve çevresi
          </p>
        </div>
      </section>

      {/* ── PROJELER ─────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {projeler.length === 0 ? (
            <div className="text-center py-20 text-muted">
              Şu anda aktif proje bulunmamaktadır.
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {projeler.map((proje) => (
                <Link
                  key={proje.id}
                  href={`/projeler/guncel/${proje.id}`}
                  className="group flex flex-col sm:flex-row gap-0 bg-dark-mid border border-dark-border rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/5"
                >
                  {/* Fotoğraf */}
                  {proje.fotograflar.length > 0 ? (
                    <div className="relative sm:w-72 shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden bg-dark-border">
                      <Image
                        src={proje.fotograflar[0]}
                        alt={proje.ad}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <span className={`absolute top-3 left-3 text-xs px-2.5 py-1 border rounded-full font-medium backdrop-blur-sm ${ASAMA_COLORS[proje.asama] || "bg-dark/60 text-offwhite/70 border-dark-border"}`}>
                        {proje.asama}
                      </span>
                    </div>
                  ) : (
                    <div className="sm:w-72 shrink-0 aspect-[4/3] sm:aspect-auto bg-dark-border flex items-center justify-center relative">
                      <Building2 size={32} className="text-muted/30" />
                      <span className={`absolute top-3 left-3 text-xs px-2.5 py-1 border rounded-full font-medium ${ASAMA_COLORS[proje.asama] || "bg-dark/60 text-offwhite/70 border-dark-border"}`}>
                        {proje.asama}
                      </span>
                    </div>
                  )}

                  {/* Gold accent line */}
                  <div className="w-full sm:w-0.5 h-0.5 sm:h-auto bg-gold/30 group-hover:bg-gold/70 transition-colors duration-300 shrink-0" />

                  {/* İçerik */}
                  <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="font-serif text-xl sm:text-2xl text-offwhite font-bold group-hover:text-gold transition-colors duration-300 mb-4">
                        {proje.ad}
                      </h2>
                      <div className="flex flex-wrap gap-5 text-sm text-muted">
                        <span className="flex items-center gap-2">
                          <MapPin size={13} className="text-gold shrink-0" />
                          {proje.mahalle}, {proje.ilce}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock size={13} className="text-gold shrink-0" />
                          Tahmini Teslim: <strong className="text-offwhite/70">{proje.tahminiTeslim}</strong>
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-gold text-xs font-medium uppercase tracking-wider">Detayları Gör</span>
                      <ArrowRight size={16} className="text-gold group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 border-t border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Fırsatınızı Değerlendirin</span>
          <h2 className="font-serif text-3xl md:text-4xl text-offwhite font-bold mb-4">
            Arsanız İçin<br />
            <span className="text-gold italic">Ücretsiz Değerleme</span>
          </h2>
          <div className="w-10 h-px bg-gold/50 mx-auto mb-6" />
          <p className="text-muted mb-8 max-w-lg mx-auto text-sm leading-relaxed">
            Kadıköy'deki arsanız için kat karşılığı teklif almak ister misiniz?
            Uzmanlarımız sizi bilgilendirsin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim" className="btn-primary">
              İletişim Formu <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/905337856161?text=Merhaba%2C%20arsam%20i%C3%A7in%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp ile Yazın
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
