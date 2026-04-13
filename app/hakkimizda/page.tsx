import Image from "next/image";
import Link from "next/link";
import { Award, Shield, Users, Building2, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Hakkımızda | Sadıkoğlu İnşaat",
  description:
    "1945'ten bu yana süregelen bir inşaat geleneği. Mehmet Sadıkoğlu'nun kurduğu firma, bugün üçüncü nesille Kadıköy'de hizmet vermeye devam ediyor.",
};

const degerler = [
  {
    icon: Shield,
    baslik: "Güvenilirlik",
    aciklama:
      "Üç nesildir süregelen iş anlayışımızda arsa sahiplerimize verilen sözler her zaman tutulmuştur. Sözleşme şeffaflığı önceliğimizdir.",
  },
  {
    icon: Award,
    baslik: "Kalite",
    aciklama:
      "Kullanılan malzemelerden işçiliğe kadar her aşamada yüksek kalite standardını benimseriz. Her proje, adımıza layık olmalıdır.",
  },
  {
    icon: Users,
    baslik: "Ortaklık Anlayışı",
    aciklama:
      "Arsa sahibini ortak olarak gören yaklaşımımızla her iki tarafın menfaatini dengeleriz. Kazanan taraf tek değil, iki taraftır.",
  },
  {
    icon: Building2,
    baslik: "Bölge Uzmanlığı",
    aciklama:
      "Kadıköy'ün her mahallesini, imar mevzuatını ve piyasa dinamiklerini 60 yıllık birikimle biliriz. Bu bölge bize yurt gibidir.",
  },
];

const zaman_cizelgesi = [
  {
    yil: "1945",
    baslik: "İstanbul'a İlk Adım",
    aciklama:
      "Mehmet Sadıkoğlu, Trabzon'dan İstanbul'a gelir ve inşaat sektöründe çalışmaya başlar. Şehrin yeniden şekillendiği bu yıllarda temelleri atılır.",
  },
  {
    yil: "1965",
    baslik: "Bağdat Caddesi'nde Kuruluş",
    aciklama:
      "Mehmet Sadıkoğlu, üç kardeşiyle birlikte Bağdat Caddesi'nde ilk inşaatlarını yapar. Kadıköy'de bir ailenin inşaat serüveni başlar.",
  },
  {
    yil: "1985",
    baslik: "Sadıkoğlu İnşaat'ın Kuruluşu",
    aciklama:
      "Kardeşlerinden bağımsızlaşan Mehmet Sadıkoğlu, bugünkü şirketimizin temellerini atar ve Kadıköy'de kendi adıyla yoluna devam eder.",
  },
  {
    yil: "Bugün",
    baslik: "Üçüncü Nesil",
    aciklama:
      "Oğulları Mustafa Nuri Sadıkoğlu (İnşaat Mühendisi) ve Kadir Sadıkoğlu ile torunu Mustafa Burak Sadıkoğlu, aynı değerlerle şirketi yaşatmaya devam ediyor.",
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

      {/* Ana Hikaye */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
                Firmamız
              </p>
              <h2 className="section-title mb-4">
                Üç Neslin Emekle Büyüttüğü Bir Marka
              </h2>
              <div className="gold-divider" />

              <div className="mt-6 space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Sadıkoğlu İnşaat'ın hikâyesi, 1945 yılında bir gencin
                  Trabzon'dan İstanbul'a adım atmasıyla başlar. Mehmet
                  Sadıkoğlu, bu şehirde inşaat sektörüne girer ve yirmi
                  yıl boyunca sektörü içten öğrenir.
                </p>
                <p>
                  1965'te iki kardeşiyle birlikte Bağdat Caddesi'nde ilk
                  projesini hayata geçirir. Kadıköy ile kurulan bu derin
                  bağ, o günden bu yana hiç kopmaz.
                </p>
                <p>
                  1985 yılında kendi firmasını kuran Mehmet Sadıkoğlu,
                  bugüne kadar Kadıköy'ün dört bir yanında <strong>120'nin
                  üzerinde inşaat</strong> tamamlar. Her projede aynı ilke:
                  arsa sahibine söz verilirse o söz tutulur.
                </p>
                <p>
                  Bugün şirket; oğulları inşaat mühendisi <strong>Mustafa
                  Nuri Sadıkoğlu</strong> ve <strong>Kadir Sadıkoğlu</strong> ile
                  torunu <strong>Mustafa Burak Sadıkoğlu</strong> tarafından
                  aynı değerler ve aynı bölge odağıyla yönetilmektedir.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { sayi: "1965", etiket: "Kuruluş Yılı" },
                  { sayi: "60+", etiket: "Yıllık Deneyim" },
                  { sayi: "120+", etiket: "Tamamlanan Proje" },
                  { sayi: "Kadıköy", etiket: "Faaliyet Bölgesi" },
                ].map(({ sayi, etiket }) => (
                  <div
                    key={etiket}
                    className="text-center bg-gray-50 p-4 border border-gray-100"
                  >
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

            {/* Logo / Görsel */}
            <div className="flex items-center justify-center bg-gray-50 border border-gray-100 p-16 h-full min-h-[320px]">
              <Image
                src="/logo.png"
                alt="Sadıkoğlu İnşaat Logo"
                width={340}
                height={180}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zaman Çizelgesi */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
              Geçmişten Bugüne
            </p>
            <h2 className="section-title">Tarihçemiz</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="relative">
            {/* Dikey çizgi */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 hidden lg:block -translate-x-1/2" />

            <div className="space-y-10">
              {zaman_cizelgesi.map(({ yil, baslik, aciklama }, i) => (
                <div
                  key={yil}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* İçerik kutusu */}
                  <div className="flex-1 bg-white border border-gray-100 p-7 shadow-sm">
                    <h3 className="font-serif text-xl font-bold text-navy mb-2">
                      {baslik}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{aciklama}</p>
                  </div>

                  {/* Yıl baloncuğu */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-navy flex items-center justify-center border-4 border-gold z-10">
                    <span className="font-serif text-gold font-bold text-sm text-center leading-tight">
                      {yil}
                    </span>
                  </div>

                  {/* Karşı taraf boşluk */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-16 bg-white">
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
            120'nin üzerinde tamamlanmış projemizi harita üzerinde görüntüleyin.
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
