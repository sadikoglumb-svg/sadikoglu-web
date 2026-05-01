import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Building2 } from "lucide-react";
import { getGuncelProjeler } from "@/lib/projects";

const ASAMA_COLORS: Record<string, string> = {
  "Temel Aşaması":    "bg-blue-900/60 text-blue-300 border-blue-700",
  "Kaba İnşaat":      "bg-orange-900/60 text-orange-300 border-orange-700",
  "İnce İşler":       "bg-yellow-900/60 text-yellow-300 border-yellow-700",
  "Bitmek Üzere":     "bg-green-900/60 text-green-300 border-green-700",
  "Proje Aşamasında": "bg-purple-900/60 text-purple-300 border-purple-700",
};

export default function AnaSayfa() {
  const guncelProjeler = getGuncelProjeler().filter((p) => p.yayinda);

  return (
    <div className="bg-dark">

      {/* ── HERO: Tam Ekran Bina Fotoğrafı ──────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">

        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Sadıkoğlu İnşaat — Fenerbahçe"
            fill
            className="object-cover"
            priority
          />
          {/* Dark gradient: transparent top → dark bottom */}
          <div className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(13,27,42,0.35) 0%, rgba(13,27,42,0.55) 50%, rgba(13,27,42,0.95) 100%)"
            }}
          />
        </div>

        {/* Content — bottom aligned like Sena */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40">
          <span className="section-label">Kadıköy · İstanbul · Est. 1965</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-offwhite font-bold leading-[1.05] tracking-tight mb-6 max-w-3xl">
            Kadıköy'de<br />
            <span className="text-gold italic">60 Yıllık</span><br />
            Güven
          </h1>
          <div className="w-16 h-px bg-gold/50 mb-8" />
          <p className="text-offwhite/60 text-lg max-w-xl mb-10 font-light leading-relaxed">
            1965'ten bu yana İstanbul'un köklü müteahhitlik firması.
            120'nin üzerinde tamamlanan proje.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/projeler/guncel" className="btn-primary">
              Projelerimizi İnceleyin <ArrowRight size={15} />
            </Link>
            <Link href="/iletisim" className="btn-outline">
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section className="border-y border-dark-border bg-dark-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-dark-border">
            {[
              { value: "60+",     label: "Yıllık Deneyim",    sub: "1965'ten bu yana" },
              { value: "120+",    label: "Tamamlanan Proje",  sub: "Kadıköy ve çevresi" },
              { value: "Kadıköy", label: "Bölge Uzmanlığı",   sub: "3. nesil müteahhit" },
            ].map(({ value, label, sub }) => (
              <div key={label} className="flex flex-col items-center py-10 px-4 text-center group">
                <p className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2 group-hover:scale-105 transition-transform duration-300">
                  {value}
                </p>
                <p className="text-offwhite font-medium text-sm mb-1">{label}</p>
                <p className="text-muted text-xs">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GÜNCEL PROJELER — Dikey Grid ─────────────────────── */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="section-label">Devam Eden Çalışmalarımız</span>
              <h2 className="section-title">Güncel Projelerimiz</h2>
              <div className="gold-divider" />
            </div>
            <Link
              href="/projeler/guncel"
              className="text-gold hover:text-gold-light text-sm font-medium flex items-center gap-2 transition-colors group whitespace-nowrap"
            >
              Tüm projeleri gör
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Dikey liste */}
          <div className="flex flex-col gap-5">
            {guncelProjeler.map((proje) => (
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
                    <h3 className="font-serif text-xl sm:text-2xl text-offwhite font-bold group-hover:text-gold transition-colors duration-300 mb-4">
                      {proje.ad}
                    </h3>
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
        </div>
      </section>

      {/* ── HAKKIMIZDA TEASER ────────────────────────────────── */}
      <section className="py-24 bg-dark-mid border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Biz Kimiz?</span>
              <h2 className="section-title mb-5">
                Kadıköy'ün<br />Köklü Müteahhidi
              </h2>
              <div className="gold-divider" />
              <p className="text-muted mt-6 leading-relaxed font-light">
                Mehmet Sadıkoğlu tarafından 1965 yılında kurulan firmamız,
                altmış yılı aşkın deneyimiyle Kadıköy ve çevresinde kat
                karşılığı inşaat alanında güvenilir çözümler sunmaktadır.
              </p>
              <p className="text-muted mt-4 leading-relaxed font-light">
                Her projede arsa sahiplerimizin beklentilerini en yüksek
                kalite standartlarıyla buluşturarak İstanbul'un siluetine
                değer katan yapılar inşa ediyoruz.
              </p>
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 mt-8 text-gold hover:text-gold-light font-medium text-sm transition-colors group"
              >
                Daha Fazla Bilgi
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "90+",           label: "Tamamlanan Proje" },
                { value: "60+",           label: "Yıl Deneyim" },
                { value: "Kadıköy",       label: "Faaliyet Bölgesi" },
                { value: "Kat Karşılığı", label: "Uzmanlık Alanı" },
              ].map(({ value, label }) => (
                <div key={label} className="stat-card group">
                  <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-gold/50 rounded-full" />
                  <p className="font-serif text-2xl md:text-3xl font-bold text-offwhite mb-1 group-hover:text-gold transition-colors duration-300">
                    {value}
                  </p>
                  <p className="text-muted text-xs font-medium uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(201,168,71,0.07) 0%, transparent 65%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Fırsatınızı Değerlendirin</span>
          <h2 className="font-serif text-4xl md:text-5xl text-offwhite font-bold mb-6 leading-tight">
            Arsanız İçin<br />
            <span className="text-gold italic">Ücretsiz Değerleme</span>
          </h2>
          <div className="w-12 h-px bg-gold/50 mx-auto mb-8" />
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed">
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
