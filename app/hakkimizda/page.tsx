import Image from "next/image";
import Link from "next/link";
import { Award, Shield, Users, Building2, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Hakkımızda | Sadıkoğlu İnşaat",
  description:
    "Sadıkoğlu İnşaat hakkında bilgi edinin. 1965'ten bu yana Kadıköy'de güvenilir inşaat hizmetleri.",
};

const degerler = [
  {
    icon: Shield,
    baslik: "Güvenilirlik",
    aciklama:
      "60 yılı aşkın tecrübemizle arsa sahiplerimize verilen sözler her zaman tutulmuştur. Sözleşme şeffaflığı önceliğimizdir.",
  },
  {
    icon: Award,
    baslik: "Kalite",
    aciklama:
      "Kullanılan malzemelerden işçiliğe kadar her aşamada A+ kalite standardını benimseriz.",
  },
  {
    icon: Users,
    baslik: "Ortaklık Anlayışı",
    aciklama:
      "Arsa sahibini ortak olarak gören yaklaşımımızla her iki tarafın menfaatini dengeleriz.",
  },
  {
    icon: Building2,
    baslik: "Bölge Uzmanlığı",
    aciklama:
      "Kadıköy ve çevresindeki imar mevzuatı, piyasa değerleri ve bölge dinamikleri konusunda derin bilgiye sahibiz.",
  },
];

export default function HakkimizdaPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-navy py-14 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Biz Kimiz?
          </p>
          <h1 className="font-serif text-4xl text-white font-bold">Hakkımızda</h1>
          <div className="w-16 h-0.5 bg-gold mt-4" />
        </div>
      </section>

      {/* Ana İçerik */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
                Firmamız
              </p>
              <h2 className="section-title mb-4">
                60 Yılda Binlerce Aileye Ev Sahibi Olduk
              </h2>
              <div className="gold-divider" />

              {/* PLACEHOLDER — içerik sonra yazılacak */}
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  [Bu bölüm için Hakkımızda yazısını birlikte hazırlayacağız.
                  Firma tarihçesi, kuruluş hikayesi ve değerler buraya eklenecek.]
                </p>
                <p>
                  Mehmet Sadıkoğlu tarafından 1965 yılında kurulan firmamız,
                  Kadıköy'de altmış yılı aşkın bir deneyimle kat karşılığı
                  inşaat alanında hizmet vermektedir.
                </p>
                <p>
                  Bugüne kadar tamamladığımız 90'dan fazla projede,
                  Kadıköy'ün farklı mahallelerinde binlerce aileye modern
                  ve kaliteli yaşam alanları kazandırdık.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { sayi: "1965", etiket: "Kuruluş Yılı" },
                  { sayi: "60+", etiket: "Yıllık Deneyim" },
                  { sayi: "90+", etiket: "Tamamlanan Proje" },
                  { sayi: "Kadıköy", etiket: "Faaliyet Bölgesi" },
                ].map(({ sayi, etiket }) => (
                  <div key={etiket} className="text-center bg-gray-50 p-4 border border-gray-100">
                    <p className="font-serif text-2xl font-bold text-navy">{sayi}</p>
                    <p className="text-gray-500 text-xs mt-1">{etiket}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 mt-10 bg-gold hover:bg-gold-dark text-navy font-semibold px-6 py-3 text-sm transition-colors"
              >
                Bizimle İletişime Geçin <ChevronRight size={16} />
              </Link>
            </div>

            {/* Logo */}
            <div className="flex items-center justify-center bg-navy/5 p-12">
              <Image
                src="/logo.png"
                alt="Sadıkoğlu İnşaat Logo"
                width={280}
                height={140}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
              İlkelerimiz
            </p>
            <h2 className="section-title">Değerlerimiz</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {degerler.map(({ icon: Icon, baslik, aciklama }) => (
              <div
                key={baslik}
                className="bg-white p-7 border border-gray-100 border-t-4 border-t-gold hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-navy/5 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy mb-3">
                  {baslik}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-white font-bold mb-4">
            Tamamlanan Projelerimizi İnceleyin
          </h2>
          <p className="text-white/60 mb-8">
            90'dan fazla tamamlanmış projemizi harita üzerinde görüntüleyin.
          </p>
          <Link
            href="/projeler/tamamlanan"
            className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-4 text-sm transition-colors inline-flex items-center gap-2"
          >
            Tamamlanan Projeler <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
