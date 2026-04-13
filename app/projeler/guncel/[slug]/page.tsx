import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Clock, ArrowLeft, Building2 } from "lucide-react";
import { getGuncelProjeler } from "@/lib/projects";
import ProjeGaleri from "@/components/ProjeGaleri";

const ASAMA_COLORS: Record<string, string> = {
  "Temel Aşaması": "bg-blue-100 text-blue-800",
  "Kaba İnşaat": "bg-orange-100 text-orange-800",
  "İnce İşler": "bg-yellow-100 text-yellow-800",
  "Bitmek Üzere":     "bg-green-100 text-green-800",
  "Proje Aşamasında": "bg-purple-100 text-purple-800",
};

export async function generateStaticParams() {
  const projeler = getGuncelProjeler();
  return projeler.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const proje = getGuncelProjeler().find((p) => p.id === params.slug);
  if (!proje) return {};
  return {
    title: `${proje.ad} | Sadıkoğlu İnşaat`,
    description: proje.aciklama,
  };
}

export default function ProjeDetayPage({ params }: { params: { slug: string } }) {
  const proje = getGuncelProjeler().find((p) => p.id === params.slug);
  if (!proje) notFound();

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-navy py-14 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projeler/guncel"
            className="inline-flex items-center gap-2 text-white/60 hover:text-gold text-sm mb-5 transition-colors"
          >
            <ArrowLeft size={16} /> Güncel Projeler
          </Link>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-serif text-4xl text-white font-bold">
                {proje.ad}
              </h1>
              <div className="w-16 h-0.5 bg-gold mt-4" />
            </div>
            <span
              className={`text-sm px-3 py-1.5 rounded-full font-medium ${
                ASAMA_COLORS[proje.asama] || "bg-gray-100 text-gray-700"
              }`}
            >
              {proje.asama}
            </span>
          </div>
        </div>
      </section>

      {/* İçerik */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ana İçerik */}
            <div className="lg:col-span-2">
              {/* Fotoğraf Galerisi */}
              {proje.fotograflar.length > 0 ? (
                <ProjeGaleri fotograflar={proje.fotograflar} ad={proje.ad} />
              ) : (
                <div className="aspect-video bg-navy/10 flex items-center justify-center mb-8 border border-gray-200">
                  <div className="text-center text-gray-400">
                    <Building2 size={48} className="mx-auto mb-3 opacity-30" />
                    <p className="text-sm">Fotoğraflar yakında eklenecek</p>
                  </div>
                </div>
              )}

              {/* Açıklama */}
              <div className="bg-white p-8 border border-gray-100">
                <h2 className="font-serif text-2xl text-navy font-bold mb-2">
                  Proje Hakkında
                </h2>
                <div className="w-10 h-0.5 bg-gold mb-5" />
                <p className="text-gray-600 leading-relaxed">{proje.aciklama}</p>
              </div>
            </div>

            {/* Bilgi Kartı */}
            <div className="space-y-4">
              <div className="bg-white p-6 border border-gray-100 border-t-4 border-t-gold">
                <h3 className="font-semibold text-navy mb-5 text-sm uppercase tracking-wider">
                  Proje Bilgileri
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Konum</p>
                      <p className="text-navy font-medium text-sm">
                        {proje.mahalle}, {proje.ilce}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Tahmini Teslim</p>
                      <p className="text-navy font-medium text-sm">
                        {proje.tahminiTeslim}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 size={18} className="text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">İnşaat Aşaması</p>
                      <p className="text-navy font-medium text-sm">{proje.asama}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* İletişim CTA */}
              <div className="bg-navy p-6">
                <p className="text-white font-medium mb-2">Bu Proje Hakkında Bilgi Al</p>
                <p className="text-white/60 text-sm mb-4">
                  Projeye ilişkin daha fazla bilgi için bizimle iletişime geçin.
                </p>
                <a
                  href="https://wa.me/905337856161"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gold hover:bg-gold-dark text-navy font-semibold text-sm py-3 text-center transition-colors"
                >
                  WhatsApp ile Yazın
                </a>
                <Link
                  href="/iletisim"
                  className="block border border-white/30 text-white/80 hover:border-gold hover:text-gold text-sm py-3 text-center mt-2 transition-colors"
                >
                  İletişim Formu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
