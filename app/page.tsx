import Image from "next/image";
import Link from "next/link";
import { Building2, Award, MapPin, ChevronRight } from "lucide-react";
import { getGuncelProjeler } from "@/lib/projects";
import ProjectSlideshow from "@/components/ProjectSlideshow";

export default function AnaSayfa() {
  const guncelProjeler = getGuncelProjeler().filter((p) => p.yayinda);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
        {/* Arka plan desen */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #C9A847 0, #C9A847 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* Gold accent sol kenar */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <div className="mb-8">
            <Image
              src="/logo-light.png"
              alt="Sadıkoğlu İnşaat"
              width={320}
              height={88}
              className="object-contain mx-auto"
              priority
            />
          </div>

          <div className="w-20 h-0.5 bg-gold mx-auto mb-6" />

          <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-6 leading-tight">
            Kadıköy'de{" "}
            <span className="text-gold">60 Yıllık</span> Güven
          </h1>

          <p className="text-white/75 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            1965'ten bu yana Kadıköy'de kat karşılığı inşaat projelerinde
            güvenilir ortağınız. 120'nin üzerinde tamamlanan proje ile
            İstanbul'un köklü müteahhitlik firması.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projeler/guncel"
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-4 text-sm tracking-wide transition-colors inline-flex items-center gap-2"
            >
              PROJELERİMİZİ İNCELEYİN <ChevronRight size={16} />
            </Link>
            <Link
              href="/iletisim"
              className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 text-sm tracking-wide transition-colors"
            >
              BİZE ULAŞIN
            </Link>
          </div>
        </div>

        {/* Aşağı scroll indikatörü */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold" />
        </div>
      </section>

      {/* Sayılar Bandı */}
      <section className="bg-gold py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-navy/20">
            {[
              { sayı: "60+", etiket: "Yıllık Deneyim", icon: Award },
              { sayı: "120+", etiket: "Tamamlanan Proje", icon: Building2 },
              { sayı: "Kadıköy", etiket: "Bölge Uzmanlığı", icon: MapPin },
            ].map(({ sayı, etiket, icon: Icon }) => (
              <div key={etiket} className="flex flex-col items-center py-2 px-4">
                <Icon size={22} className="text-navy mb-2 opacity-70" />
                <p className="font-serif text-3xl font-bold text-navy">{sayı}</p>
                <p className="text-navy/70 text-sm font-medium mt-1">{etiket}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Güncel Projeler Slideshow */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
              Devam Eden Çalışmalarımız
            </p>
            <h2 className="section-title mb-4">Güncel Projelerimiz</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="max-w-lg mx-auto">
            <ProjectSlideshow projeler={guncelProjeler} />
          </div>

          <div className="text-center mt-10">
            <Link
              href="/projeler/guncel"
              className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 text-sm transition-colors"
            >
              Tüm Güncel Projeler <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Hakkımızda Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
                Kim Biz?
              </p>
              <h2 className="section-title mb-4">
                Kadıköy'ün Köklü Müteahhidi
              </h2>
              <div className="gold-divider" />
              <p className="text-gray-600 mt-6 leading-relaxed">
                Mehmet Sadıkoğlu tarafından 1965 yılında kurulan firmamız,
                altmış yılı aşkın deneyimiyle Kadıköy ve çevresinde kat
                karşılığı inşaat alanında güvenilir çözümler sunmaktadır.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Her projede arsa sahiplerimizin beklentilerini en yüksek kalite
                standartlarıyla buluşturarak İstanbul'un siluetine değer katan
                yapılar inşa ediyoruz.
              </p>
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 mt-8 text-navy font-semibold hover:text-gold transition-colors"
              >
                Daha Fazla Bilgi <ChevronRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { baslik: "Tamamlanan Proje", deger: "90+" },
                { baslik: "Yıl Deneyim", deger: "60+" },
                { baslik: "Bölge", deger: "Kadıköy" },
                { baslik: "Uzmanlik", deger: "Kat Karşılığı" },
              ].map(({ baslik, deger }) => (
                <div
                  key={baslik}
                  className="bg-gray-50 border-l-4 border-gold p-5"
                >
                  <p className="font-serif text-2xl font-bold text-navy">
                    {deger}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{baslik}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4">
            Arsanız İçin Ücretsiz Değerleme Yapın
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Kadıköy'deki arsanız için kat karşılığı teklif almak ister misiniz?
            Bize ulaşın, uzmanlarımız sizi bilgilendirsin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-4 text-sm tracking-wide transition-colors"
            >
              İLETİŞİM FORMU
            </Link>
            <a
              href="https://wa.me/905337856161?text=Merhaba%2C%20arsam%20i%C3%A7in%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 text-sm tracking-wide transition-colors"
            >
              WHATSAPP İLE YAZIN
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
