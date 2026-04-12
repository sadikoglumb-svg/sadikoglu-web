import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Tanıtım */}
          <div>
            <Image
              src="/logo.png"
              alt="Sadıkoğlu İnşaat"
              width={130}
              height={65}
              className="object-contain mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              1965'ten bu yana Kadıköy'de güvenilir inşaat hizmetleri.
              90'dan fazla tamamlanan proje ile Kadıköy'ün köklü müteahhidi.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-5">
              Hızlı Erişim
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/projeler/guncel", label: "Güncel Projeler" },
                { href: "/projeler/tamamlanan", label: "Tamamlanan Projeler" },
                { href: "/iletisim", label: "İletişim" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-5">
              İletişim
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  Feneryolu Mah. Bağdat Cd. No 141 D:8<br />Kadıköy, İstanbul
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <a
                  href="https://wa.me/905337856161"
                  className="text-white/70 hover:text-gold text-sm transition-colors"
                >
                  +90 533 785 61 61
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <a
                  href="mailto:burak@sadikoglu.com.tr"
                  className="text-white/70 hover:text-gold text-sm transition-colors"
                >
                  burak@sadikoglu.com.tr
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-gold shrink-0">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                <a
                  href="https://instagram.com/sadikoglu1965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-gold text-sm transition-colors"
                >
                  @sadikoglu1965
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Sadıkoğlu İnşaat Müteahhitlik Ltd. Şti. Tüm hakları saklıdır.
          </p>
          <p className="text-white/40 text-xs">sadikoglu.com.tr</p>
        </div>
      </div>
    </footer>
  );
}
