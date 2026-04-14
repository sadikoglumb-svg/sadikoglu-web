import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ChevronRight, Building2 } from "lucide-react";
import { getGuncelProjeler } from "@/lib/projects";

const ASAMA_COLORS: Record<string, string> = {
  "Temel Aşaması":    "bg-blue-100 text-blue-800 border-blue-200",
  "Kaba İnşaat":      "bg-orange-100 text-orange-800 border-orange-200",
  "İnce İşler":       "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Bitmek Üzere":     "bg-green-100 text-green-800 border-green-200",
  "Proje Aşamasında": "bg-purple-100 text-purple-800 border-purple-200",
};

export const metadata = {
  title: "Güncel Projelerimiz | Sadıkoğlu İnşaat",
  description:
    "Sadıkoğlu İnşaat'ın devam eden güncel inşaat projeleri. Kadıköy'de aktif projelerimizi inceleyin.",
};

export default function GuncelProjelerPage() {
  const projeler = getGuncelProjeler().filter((p) => p.yayinda);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-navy py-14 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Devam Eden Çalışmalarımız
          </p>
          <h1 className="font-serif text-4xl text-white font-bold">
            Güncel Projelerimiz
          </h1>
          <div className="w-16 h-0.5 bg-gold mt-4" />
          <p className="text-white/60 mt-4 text-sm">
            Bir projeye tıklayarak detayları inceleyebilirsiniz.
          </p>
        </div>
      </section>

      {/* Projeler Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {projeler.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              Şu anda aktif proje bulunmamaktadır.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projeler.map((proje) => (
                <Link
                  key={proje.id}
                  href={`/projeler/guncel/${proje.id}`}
                  className="group bg-white border border-gray-100 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex flex-col overflow-hidden"
                >
                  {/* Fotoğraf */}
                  {proje.fotograflar.length > 0 ? (
                    <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center">
                      <Image
                        src={proje.fotograflar[0]}
                        alt={proje.ad}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className={`absolute top-3 right-3 text-xs px-2.5 py-1 border rounded-full font-medium ${ASAMA_COLORS[proje.asama] || "bg-gray-100 text-gray-700 border-gray-200"}`}>
                        {proje.asama}
                      </span>
                    </div>
                  ) : (
                    <div className="aspect-[4/3] bg-navy/5 flex items-center justify-center border-b border-gray-100 relative">
                      <Building2 size={36} className="text-navy/20" />
                      <span className={`absolute top-3 right-3 text-xs px-2.5 py-1 border rounded-full font-medium ${ASAMA_COLORS[proje.asama] || "bg-gray-100 text-gray-700 border-gray-200"}`}>
                        {proje.asama}
                      </span>
                    </div>
                  )}

                  {/* Gold çizgi */}
                  <div className="h-1 bg-gold" />

                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="font-serif text-xl text-navy font-bold group-hover:text-gold transition-colors leading-tight mb-4">
                      {proje.ad}
                    </h2>

                    <div className="space-y-2 mb-5">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <MapPin size={14} className="text-gold shrink-0" />
                        <span>{proje.mahalle}, {proje.ilce}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Clock size={14} className="text-gold shrink-0" />
                        <span>Tahmini Teslim: <strong>{proje.tahminiTeslim}</strong></span>
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-sm text-gold font-medium">Detayları Gör</span>
                      <ChevronRight size={18} className="text-gold group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
