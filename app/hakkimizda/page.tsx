import Image from "next/image";
import Link from "next/link";
import { Award, Shield, Users, Building2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Hakkımızda | Kadıköy'de 60 Yıllık Müteahhit | Sadıkoğlu İnşaat",
  description:
    "1965'ten bu yana Kadıköy'de kat karşılığı inşaat. Mehmet Sadıkoğlu'nun kurduğu firma, üçüncü nesille 120+ projeyi tamamladı.",
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
      "Mehmet Sadıkoğlu, kardeşleriyle birlikte Bağdat Caddesi'nde ilk inşaatlarını yapar. Kadıköy'de bir ailenin inşaat serüveni başlar.",
  },
  {
    yil: "1985",
    baslik: "Sadıkoğlu İnşaat'ın Kuruluşu",
    aciklama:
      "Kendi firmasını kuran Mehmet Sadıkoğlu, Kadıköy'de kendi adıyla yoluna devam eder ve bölgenin güvenilir müteahhidi olarak anılmaya başlar.",
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
    <div className="bg-dark min-h-screen">

      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-dark-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 20% 60%, rgba(201,168,71,0.07) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Sol metin */}
            <div>
              <span className="section-label">Biz Kimiz?</span>
              <h1 className="font-serif text-5xl md:text-6xl text-offwhite font-bold leading-[1.05] mb-6">
                Üç Neslin<br />
                <span className="text-gold italic">Emekle Büyüttüğü</span><br />
                Bir Marka
              </h1>
              <div className="gold-divider" />
              <p className="text-muted leading-relaxed mt-6 font-light max-w-lg">
                Sadıkoğlu İnşaat'ın hikâyesi, 1945 yılında bir gencin
                Trabzon'dan İstanbul'a adım atmasıyla başlar. O günden bu yana
                Kadıköy'de 120'nin üzerinde inşaat tamamlandı.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/projeler/tamamlanan" className="btn-primary">
                  Tamamlanan Projeler <ArrowRight size={15} />
                </Link>
                <Link href="/iletisim" className="btn-outline">
                  İletişime Geçin
                </Link>
              </div>
            </div>

            {/* Sağ: istatistik grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "1965", label: "Kuruluş Yılı", sub: "Bağdat Caddesi" },
                { value: "60+",  label: "Yıllık Deneyim", sub: "Aralıksız faaliyet" },
                { value: "120+", label: "Tamamlanan Proje", sub: "Kadıköy ve çevresi" },
                { value: "3.",   label: "Nesil", sub: "Aile şirketi" },
              ].map(({ value, label, sub }) => (
                <div key={label} className="stat-card group">
                  <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-gold/50 rounded-full" />
                  <p className="font-serif text-3xl md:text-4xl font-bold text-offwhite mb-1 group-hover:text-gold transition-colors duration-300">
                    {value}
                  </p>
                  <p className="text-offwhite/80 text-sm font-medium">{label}</p>
                  <p className="text-muted text-xs mt-1">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ANA HİKAYE ──────────────────────────────────── */}
      <section className="py-24 bg-dark-mid border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Logo kutusu */}
            <div className="flex items-center justify-center bg-dark border border-dark-border rounded-2xl p-16 min-h-[320px]">
              <Image
                src="/logo-light.png"
                alt="Sadıkoğlu İnşaat"
                width={300}
                height={160}
                className="object-contain opacity-90"
              />
            </div>

            {/* Metin */}
            <div>
              <span className="section-label">Firmamız</span>
              <h2 className="section-title mb-4">Kadıköy'ün Köklü Müteahhidi</h2>
              <div className="gold-divider" />
              <div className="mt-6 space-y-4 text-muted leading-relaxed font-light">
                <p>
                  1945 yılında Trabzon'dan İstanbul'a gelen Mehmet Sadıkoğlu,
                  yirmi yıl boyunca inşaat sektörünü içten öğrenir.
                </p>
                <p>
                  1965'te Bağdat Caddesi'nde ilk projesini hayata geçirir.
                  Kadıköy ile kurulan bu derin bağ, o günden bu yana hiç kopmaz.
                </p>
                <p>
                  1985 yılında kendi firmasını kuran Mehmet Sadıkoğlu, bugüne
                  kadar Kadıköy'ün dört bir yanında{" "}
                  <span className="text-offwhite font-medium">120'nin üzerinde inşaat</span>{" "}
                  tamamlar. Her projede aynı ilke: arsa sahibine söz verilirse
                  o söz tutulur.
                </p>
                <p>
                  Bugün şirket; oğulları inşaat mühendisi{" "}
                  <span className="text-offwhite font-medium">Mustafa Nuri Sadıkoğlu</span>{" "}
                  ve{" "}
                  <span className="text-offwhite font-medium">Kadir Sadıkoğlu</span>{" "}
                  ile torunu{" "}
                  <span className="text-offwhite font-medium">Mustafa Burak Sadıkoğlu</span>{" "}
                  tarafından aynı değerler ve aynı bölge odağıyla yönetilmektedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TARİHÇE ─────────────────────────────────────── */}
      <section className="py-24 bg-dark border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Geçmişten Bugüne</span>
            <h2 className="section-title">Tarihçemiz</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="relative max-w-2xl mx-auto">
            {/* Dikey çizgi — sol kenar, yıl çemberlerinin ortasından geçer */}
            <div className="absolute left-6 top-4 bottom-4 w-px bg-gold/25" />

            <div className="space-y-6">
              {zaman_cizelgesi.map(({ yil, baslik, aciklama }) => (
                <div key={yil} className="flex items-start gap-6">

                  {/* Yıl çemberi (sabit w-12, çizgi üzerinde) */}
                  <div className="shrink-0 w-12 h-12 rounded-full bg-dark border-2 border-gold flex items-center justify-center z-10">
                    <span className="font-serif text-gold font-bold text-[10px] text-center leading-tight px-1">
                      {yil}
                    </span>
                  </div>

                  {/* Kart — her zaman sağda */}
                  <div className="flex-1 pb-2">
                    <div className="bg-dark-mid border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors duration-300">
                      <h3 className="font-serif text-lg font-bold text-offwhite mb-2">{baslik}</h3>
                      <p className="text-muted text-sm leading-relaxed">{aciklama}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DEĞERLERİMİZ ─────────────────────────────────── */}
      <section className="py-24 bg-dark-mid border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">İlkelerimiz</span>
            <h2 className="section-title">Değerlerimiz</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {degerler.map(({ icon: Icon, baslik, aciklama }) => (
              <div
                key={baslik}
                className="bg-dark border border-dark-border rounded-xl p-7 hover:border-gold/40 transition-all duration-300 group hover:shadow-xl hover:shadow-gold/5"
              >
                <div className="w-11 h-11 bg-gold/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-offwhite mb-3 group-hover:text-gold transition-colors">
                  {baslik}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(201,168,71,0.07) 0%, transparent 65%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Sıradaki Adım</span>
          <h2 className="font-serif text-4xl md:text-5xl text-offwhite font-bold mb-6 leading-tight">
            Tamamlanan Projelerimizi<br />
            <span className="text-gold italic">İnceleyin</span>
          </h2>
          <div className="w-12 h-px bg-gold/50 mx-auto mb-8" />
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto font-light">
            120'nin üzerinde tamamlanmış projemizi inceleyin, referanslarımızı görün.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projeler/tamamlanan" className="btn-primary">
              Tamamlanan Projeler <ArrowRight size={15} />
            </Link>
            <Link href="/iletisim" className="btn-ghost">
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
