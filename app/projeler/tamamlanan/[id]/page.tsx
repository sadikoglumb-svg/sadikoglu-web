import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Building2, ArrowLeft, Home } from "lucide-react";
import { getTamamlananProjeler } from "@/lib/projects";

export async function generateStaticParams() {
  const projeler = getTamamlananProjeler();
  return projeler.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const projeler = getTamamlananProjeler();
  const proje = projeler.find((p) => p.id === params.id);
  if (!proje) return {};
  return {
    title: `${proje.ad} | Tamamlanan Projeler | Sadıkoğlu İnşaat`,
    description: `${proje.adres} — ${proje.bagimsizBolum} bağımsız bölüm, ${proje.insaatM2.toLocaleString("tr-TR")} m² inşaat alanı. Sadıkoğlu İnşaat referans projesi.`,
  };
}

function formatTarih(tarih: string) {
  if (!tarih) return "—";
  const [yil, ay] = tarih.split("-");
  const aylar = [
    "", "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
  ];
  return `${aylar[parseInt(ay)]} ${yil}`;
}

export default function TamamlananProjeDetay({ params }: { params: { id: string } }) {
  const projeler = getTamamlananProjeler();
  const proje = projeler.find((p) => p.id === params.id);
  if (!proje) notFound();

  const yil = proje.iskanTarihi?.split("-")[0] ?? "—";
  const anaFotograf = proje.fotograflar[0] ?? null;
  const digerFotograflar = proje.fotograflar.slice(1);

  // Adres araması olarak embed — koordinat yerine adres string kullan (daha doğru)
  const mapQuery = encodeURIComponent(`${proje.ad}, ${proje.adres}, İstanbul`);
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const specs = [
    { label: "Konum", value: proje.adres },
    { label: "Bağımsız Bölüm", value: `${proje.bagimsizBolum} adet` },
    { label: "İnşaat Alanı", value: `${proje.insaatM2.toLocaleString("tr-TR")} m²` },
    { label: "İnşaat Başlangıcı", value: formatTarih(proje.baslangicTarihi) },
    { label: "İskan Tarihi", value: formatTarih(proje.iskanTarihi) },
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
          <Link href="/projeler/tamamlanan" className="hover:text-gold transition-colors">
            Tamamlanan Projeler
          </Link>
          <span>/</span>
          <span className="text-offwhite/50 truncate max-w-[200px]">{proje.ad}</span>
        </div>
      </div>

      {/* ── HERO SPLIT ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-dark-border min-h-[560px]">

          {/* Sol: Ana Fotoğraf */}
          <div className="lg:col-span-3 relative bg-dark-border min-h-[300px] lg:min-h-0">
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
            {/* gradient overlay bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Sağ: Bilgi Paneli */}
          <div className="lg:col-span-2 bg-dark-mid flex flex-col p-8 lg:p-10 gap-6 border-l border-dark-border">

            {/* Yıl etiketi */}
            <div>
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
                Tamamlandı · {yil}
              </span>
            </div>

            {/* Proje Adı */}
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl text-offwhite font-bold leading-snug mb-3">
                {proje.ad}
              </h1>
              <div className="w-10 h-px bg-gold/50" />
            </div>

            {/* Konum */}
            <div className="flex items-start gap-2 text-muted text-sm">
              <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
              <span>{proje.adres}</span>
            </div>

            {/* Hızlı sayılar */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-dark border border-dark-border rounded-xl p-4">
                <p className="font-serif text-2xl font-bold text-offwhite">{proje.bagimsizBolum}</p>
                <p className="text-muted text-xs mt-1 uppercase tracking-wide">Bağımsız Bölüm</p>
              </div>
              <div className="bg-dark border border-dark-border rounded-xl p-4">
                <p className="font-serif text-2xl font-bold text-offwhite">
                  {proje.insaatM2.toLocaleString("tr-TR")}
                </p>
                <p className="text-muted text-xs mt-1 uppercase tracking-wide">İnşaat m²</p>
              </div>
            </div>

            {/* Harita */}
            <div className="flex-1 min-h-[200px] rounded-xl overflow-hidden border border-dark-border">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "200px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Geri Link */}
            <Link
              href="/projeler/tamamlanan"
              className="flex items-center gap-2 text-muted hover:text-gold text-sm transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Tüm tamamlanan projeler
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
              <div
                key={label}
                className="flex items-start gap-4 py-4 border-b border-dark-border"
              >
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

      {/* ── DİĞER FOTOĞRAFLAR ────────────────────────────── */}
      {digerFotograflar.length > 0 && (
        <section className="py-16 border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-10">
              <span className="section-label">Galeri</span>
              <h2 className="section-title">Fotoğraflar</h2>
              <div className="gold-divider" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {digerFotograflar.map((foto, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-dark-border">
                  <Image
                    src={foto}
                    alt={`${proje.ad} — Fotoğraf ${i + 2}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
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
