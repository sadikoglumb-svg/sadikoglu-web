import Image from "next/image";
import { MapPin, Calendar, Building2, Maximize2 } from "lucide-react";
import { getTamamlananProjeler } from "@/lib/projects";

export const metadata = {
  title: "Tamamlanan Projeler | Sadıkoğlu İnşaat",
  description:
    "Sadıkoğlu İnşaat'ın 90'dan fazla tamamlanmış inşaat projesini harita üzerinde ve liste olarak inceleyin.",
};

export default function TamamlananProjelerPage() {
  const projeler = getTamamlananProjeler().sort((a, b) => {
    const tarihA = a.iskanTarihi || "0000-00";
    const tarihB = b.iskanTarihi || "0000-00";
    return tarihB.localeCompare(tarihA);
  });

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-navy py-14 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Referanslarımız
          </p>
          <h1 className="font-serif text-4xl text-white font-bold">
            Tamamlanan Projeler
          </h1>
          <div className="w-16 h-0.5 bg-gold mt-4" />
          <p className="text-white/60 mt-4 text-sm">
            {projeler.length} tamamlanmış proje — Kadıköy ve çevresinde
          </p>
        </div>
      </section>

      {/* Proje Listesi */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-navy font-bold mb-8">
            Tüm Projeler
            <span className="text-gold ml-3 text-xl">({projeler.length})</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projeler.map((proje) => (
              <div
                key={proje.id}
                className="bg-white border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow"
              >
                {/* Fotoğraf veya Placeholder */}
                {proje.fotograflar.length > 0 ? (
                  <div className="relative bg-gray-100 overflow-hidden flex items-center justify-center">
                    <Image
                      src={proje.fotograflar[0]}
                      alt={proje.ad}
                      width={400}
                      height={350}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-navy/8 flex items-center justify-center border-b border-gray-100">
                    <Building2 size={36} className="text-navy/20" />
                  </div>
                )}

                {/* Üst gold çizgi */}
                <div className="h-1 bg-gold" />

                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-navy mb-3">
                    {proje.ad}
                  </h3>

                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin size={13} className="text-gold shrink-0" />
                      <span>{proje.adres}</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={13} className="text-gold shrink-0" />
                      <span>
                        {proje.baslangicTarihi} → {proje.iskanTarihi}
                      </span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-500 text-sm">
                      <Building2 size={13} className="text-gold shrink-0" />
                      <span>{proje.bagimsizBolum} bağımsız bölüm</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-500 text-sm">
                      <Maximize2 size={13} className="text-gold shrink-0" />
                      <span>{proje.insaatM2.toLocaleString("tr-TR")} m²</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
