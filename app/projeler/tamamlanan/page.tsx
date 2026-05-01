import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Building2, Maximize2, ArrowRight } from "lucide-react";
import { getTamamlananProjeler } from "@/lib/projects";

export const metadata = {
  title: "90+ Tamamlanan Proje | Kadıköy Müteahhit Referansları | Sadıkoğlu İnşaat",
  description:
    "Sadıkoğlu İnşaat'ın Kadıköy, Fenerbahçe, Göztepe ve çevresinde tamamladığı 90+ kat karşılığı inşaat projesini inceleyin.",
};

function formatYil(tarih: string) {
  return tarih?.split("-")[0] ?? "—";
}

export default function TamamlananProjelerPage() {
  const projeler = getTamamlananProjeler().sort((a, b) => {
    const tarihA = a.iskanTarihi || "0000-00";
    const tarihB = b.iskanTarihi || "0000-00";
    return tarihB.localeCompare(tarihA);
  });

  return (
    <div className="bg-dark min-h-screen">

      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-dark-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(201,168,71,0.06) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label">60 Yıllık Birikim</span>
          <h1 className="font-serif text-4xl md:text-5xl text-offwhite font-bold leading-tight mb-4">
            Tamamlanan<br />
            <span className="text-gold italic">Projelerimiz</span>
          </h1>
          <div className="gold-divider" />
          <p className="text-muted mt-2 text-sm">
            {projeler.length} referans proje · Kadıköy ve çevresi
          </p>
        </div>
      </section>

      {/* ── PROJE GRİD ──────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {projeler.map((proje) => (
              <Link
                key={proje.id}
                href={`/projeler/tamamlanan/${proje.id}`}
                className="group bg-dark-mid border border-dark-border rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/5 flex flex-col"
              >
                {/* Fotoğraf */}
                <div className="relative aspect-[4/3] bg-dark-border overflow-hidden">
                  {proje.fotograflar.length > 0 ? (
                    <Image
                      src={proje.fotograflar[0]}
                      alt={proje.ad}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2 size={32} className="text-muted/20" />
                    </div>
                  )}
                  {/* Yıl badge */}
                  <span className="absolute top-3 right-3 bg-dark/80 backdrop-blur-sm text-gold text-xs font-semibold px-2.5 py-1 rounded-full border border-gold/30">
                    {formatYil(proje.iskanTarihi)}
                  </span>
                </div>

                {/* Gold accent */}
                <div className="h-px bg-gold/30 group-hover:bg-gold/70 transition-colors duration-300" />

                {/* İçerik */}
                <div className="flex-1 p-5 flex flex-col gap-3">
                  <h3 className="font-serif text-sm font-bold text-offwhite group-hover:text-gold transition-colors duration-300 leading-snug">
                    {proje.ad}
                  </h3>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-muted text-xs">
                      <MapPin size={11} className="text-gold shrink-0" />
                      <span className="truncate">{proje.adres}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted text-xs">
                      <Building2 size={11} className="text-gold shrink-0" />
                      <span>{proje.bagimsizBolum} bağımsız bölüm</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted text-xs">
                      <Maximize2 size={11} className="text-gold shrink-0" />
                      <span>{proje.insaatM2.toLocaleString("tr-TR")} m²</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-3 flex items-center justify-between border-t border-dark-border">
                    <span className="text-gold text-xs font-medium uppercase tracking-wider">Detayları Gör</span>
                    <ArrowRight size={13} className="text-gold group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
