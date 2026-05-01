import Image from "next/image";
import Link from "next/link";
import { Building2, Award, MapPin, ChevronRight, ArrowRight } from "lucide-react";
import { getGuncelProjeler } from "@/lib/projects";
import ProjectSlideshow from "@/components/ProjectSlideshow";

export default function AnaSayfa() {
  const guncelProjeler = getGuncelProjeler().filter((p) => p.yayinda);

  return (
    <div className="bg-dark">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">

        {/* Architectural grid lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(201,168,71,0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(201,168,71,0.04) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
          {/* Radial glow center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(201,168,71,0.06) 0%, transparent 70%)" }}
          />
        </div>

        {/* Gold left bar */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">

          {/* Logo */}
          <div className="mb-10">
            <Image
              src="/logo-light.png"
              alt="Sadıkoğlu İnşaat"
              width={280}
              height={77}
              className="object-contain mx-auto opacity-95"
              priority
            />
          </div>

          {/* Label */}
          <span className="section-label">Kadıköy · İstanbul · Est. 1965</span>

          {/* Heading */}
          <h1 className="font-serif text-5xl md:text-7xl text-offwhite font-bold mb-6 leading-[1.1] tracking-tight">
            Kadıköy'de{" "}
            <span className="text-gold italic">60 Yıllık</span>
            <br />Güven
          </h1>

          {/* Divider */}
          <div className="w-16 h-px bg-gold/50 mx-auto mb-8" />

          <p className="text-muted text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            1965'ten bu yana Kadıköy ve çevresinde kat karşılığı inşaat
            projelerinde güvenilir ortağınız. 120'nin üzerinde tamamlanan
            proje ile İstanbul'un köklü müteahhitlik firması.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projeler/guncel" className="btn-primary">
              Projelerimizi İnceleyin <ArrowRight size={15} />
            </Link>
            <Link href="/iletisim" className="btn-outline">
              Bize Ulaşın
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-muted text-xs tracking-[0.2em] uppercase">Keşfet</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section className="border-y border-dark-border">
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

      {/* ── GÜNCEL PROJELER ──────────────────────────────────── */}
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

          <div className="max-w-sm mx-auto md:max-w-xl">
            <ProjectSlideshow projeler={guncelProjeler} />
          </div>
        </div>
      </section>

      {/* ── HAKKIMIZDA TEASER ────────────────────────────────── */}
      <section className="py-24 bg-dark-mid border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Sol — Metin */}
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

            {/* Sağ — Stat kartları */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "90+",           label: "Tamamlanan Proje" },
                { value: "60+",           label: "Yıl Deneyim" },
                { value: "Kadıköy",       label: "Faaliyet Bölgesi" },
                { value: "Kat Karşılığı", label: "Uzmanlık Alanı" },
              ].map(({ value, label }) => (
                <div key={label} className="stat-card group">
                  {/* Gold left accent */}
                  <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-gold/60 rounded-full" />
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
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center bottom, rgba(201,168,71,0.07) 0%, transparent 65%)" }}
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
