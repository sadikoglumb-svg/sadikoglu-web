import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Building2, ArrowLeft, Home, Maximize2 } from "lucide-react";
import { getGuncelProjeler } from "@/lib/projects";
import ProjeGaleri from "@/components/ProjeGaleri";

const ASAMA_COLORS: Record<string, string> = {
  "Temel Aşaması":    "bg-blue-900/60 text-blue-300 border-blue-700",
  "Kaba İnşaat":      "bg-orange-900/60 text-orange-300 border-orange-700",
  "İnce İşler":       "bg-yellow-900/60 text-yellow-300 border-yellow-700",
  "Bitmek Üzere":     "bg-green-900/60 text-green-300 border-green-700",
  "Proje Aşamasında": "bg-purple-900/60 text-purple-300 border-purple-700",
};

export async function generateStaticParams() {
  const projeler = getGuncelProjeler();
  return projeler.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const proje = getGuncelProjeler().find((p) => p.id === params.slug);
  if (!proje) return {};
  return {
    title: `${proje.ad} | Güncel Projeler | Sadıkoğlu İnşaat`,
    description: proje.aciklama,
  };
}

export default function ProjeDetayPage({ params }: { params: { slug: string } }) {
  const proje = getGuncelProjeler().find((p) => p.id === params.slug);
  if (!proje) notFound();

  const anaFotograf = proje.fotograflar[0] ?? null;
  const digerFotograflar = proje.fotograflar.slice(1);

  const specs = [
    { label: "Konum", value: `${proje.mahalle}, ${proje.ilce}` },
    { label: "İnşaat Aşaması", value: proje.asama },
    { label: "Tahmini Teslim", value: proje.tahminiTeslim },
    ...(proje.bagimsizBolum ? [{ label: "Bağımsız Bölüm", value: `${proje.bagimsizBolum} adet` }] : []),
    ...(proje.insaatM2 ? [{ label: "İnşaat Alanı", value: `${proje.insaatM2.toLocaleString("tr-TR")} m²` }] : []),
  ];

  return (
    <div className="bg-dark min-h-screen">

      {/* ── Breadcrumb ──────────────────────────────────── */}
      <div className="pt-24 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-muted">
          <Link href="/" className="hover:text-gold transition-colors flex items-center gap-1">
            <Home size={11} /> Ana Sayfa
          </Link>
          <span>/</span>
          <Link href="/projeler/guncel" className="hover:text-gold transition-colors">
            Güncel Projeler
          </Link>
          <span>/</span>
          <span className="text-offwhite/50 truncate max-w-[200px]">{proje.ad}</span>
        </div>
      </div>

      {/* ── HERO SPLIT ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-dark-border min-h-[520px]">

          {/* Sol: Ana Fotoğraf */}
          <div className="lg:col-span-3 relative bg-dark-border min-h-[280px] lg:min-h-0">
            {anaFotograf ? (
              <Image
                src={anaFotograf}
                alt={proje.ad}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Building2 size={64} className="text-muted/20" />
              </div>
            )}
          </div>

          {/* Sağ: Bilgi Paneli */}
          <div className="lg:col-span-2 bg-dark-mid flex flex-col p-8 lg:p-10 gap-5 border-l border-dark-border">

            {/* Aşama badge */}
            <div>
              <span className={`text-xs px-3 py-1 border rounded-full font-medium ${ASAMA_COLORS[proje.asama] || "bg-dark/60 text-offwhite/70 border-dark-border"}`}>
                {proje.asama}
              </span>
            </div>

            {/* Proje Adı */}
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl text-offwhite font-bold leading-snug mb-3">
                {proje.ad}
              </h1>
              <div className="w-10 h-px bg-gold/50" />
            </div>

            {/* Konum + Teslim */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted text-sm">
                <MapPin size={13} className="text-gold shrink-0" />
                {proje.mahalle}, {proje.ilce}
              </div>
              <div className="flex items-center gap-2 text-muted text-sm">
                <Clock size={13} className="text-gold shrink-0" />
                Tahmini Teslim: <strong className="text-offwhite/80">{proje.tahminiTeslim}</strong>
              </div>
            </div>

            {/* Sayı kutuları */}
            {(proje.bagimsizBolum || proje.insaatM2) && (
              <div className="grid grid-cols-2 gap-3">
                {proje.bagimsizBolum && (
                  <div className="bg-dark border border-dark-border rounded-xl p-4">
                    <p className="font-serif text-2xl font-bold text-offwhite">{proje.bagimsizBolum}</p>
                    <p className="text-muted text-xs mt-1 uppercase tracking-wide">Bağımsız Bölüm</p>
                  </div>
                )}
                {proje.insaatM2 && (
                  <div className="bg-dark border border-dark-border rounded-xl p-4">
                    <p className="font-serif text-2xl font-bold text-offwhite">
                      {proje.insaatM2.toLocaleString("tr-TR")}
                    </p>
                    <p className="text-muted text-xs mt-1 uppercase tracking-wide">İnşaat m²</p>
                  </div>
                )}
              </div>
            )}

            {/* Açıklama */}
            {proje.aciklama && (
              <p className="text-muted text-sm leading-relaxed flex-1">
                {proje.aciklama}
              </p>
            )}

            {/* CTA */}
            <div className="space-y-2 pt-2">
              <a
                href={`https://wa.me/905337856161?text=Merhaba%2C%20${encodeURIComponent(proje.ad)}%20projesi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                WhatsApp ile Yazın
              </a>
              <Link href="/iletisim" className="btn-outline w-full justify-center">
                İletişim Formu
              </Link>
            </div>

            {/* Geri */}
            <Link
              href="/projeler/guncel"
              className="flex items-center gap-2 text-muted hover:text-gold text-sm transition-colors group pt-1"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Tüm güncel projeler
            </Link>
          </div>
        </div>
      </section>

      {/* ── ÖZELLİKLER ──────────────────────────────────── */}
      <section className="py-16 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="section-label">Proje Detayları</span>
            <h2 className="section-title">Özellikler</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            {specs.map(({ label, value }) => (
              <div key={label} className="flex items-start gap-4 py-4 border-b border-dark-border">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-offwhite font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERİ ───────────────────────────────────────── */}
      {digerFotograflar.length > 0 && (
        <section className="py-16 border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="section-label">Galeri</span>
              <h2 className="section-title">Fotoğraflar</h2>
              <div className="gold-divider" />
            </div>
            <ProjeGaleri fotograflar={proje.fotograflar} ad={proje.ad} />
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 border-t border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Sıradaki Adım</span>
          <h2 className="font-serif text-3xl md:text-4xl text-offwhite font-bold mb-4">
            Arsanız İçin<br />
            <span className="text-gold italic">Ücretsiz Değerleme</span>
          </h2>
          <div className="w-10 h-px bg-gold/50 mx-auto mb-6" />
          <p className="text-muted mb-8 max-w-lg mx-auto text-sm leading-relaxed">
            Kadıköy'deki arsanız için kat karşılığı teklif almak ister misiniz?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim" className="btn-primary">
              İletişim Formu
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
