"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projeclerOpen, setProjelerOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProjelerOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setProjelerOpen(false), 200);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-lg" : "bg-navy/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-light.png"
              alt="Sadıkoğlu İnşaat"
              width={160}
              height={44}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white hover:text-gold transition-colors text-sm font-medium tracking-wide"
            >
              ANA SAYFA
            </Link>
            <Link
              href="/hakkimizda"
              className="text-white hover:text-gold transition-colors text-sm font-medium tracking-wide"
            >
              HAKKIMIZDA
            </Link>

            {/* Projeler Dropdown */}
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
                className="flex items-center gap-1 text-white hover:text-gold transition-colors text-sm font-medium tracking-wide pb-1"
              >
                PROJELERİMİZ <ChevronDown size={16} className={`transition-transform duration-200 ${projeclerOpen ? "rotate-180" : ""}`} />
              </button>
              {projeclerOpen && (
                <div
                  className="absolute top-full left-0 pt-1 w-52"
                >
                <div className="bg-white shadow-xl border-t-2 border-gold">
                  <Link
                    href="/projeler/guncel"
                    className="block px-5 py-3 text-navy hover:bg-gray-50 hover:text-gold text-sm font-medium transition-colors border-b border-gray-100"
                    onClick={() => setProjelerOpen(false)}
                  >
                    Güncel Projelerimiz
                  </Link>
                  <Link
                    href="/projeler/tamamlanan"
                    className="block px-5 py-3 text-navy hover:bg-gray-50 hover:text-gold text-sm font-medium transition-colors"
                    onClick={() => setProjelerOpen(false)}
                  >
                    Tamamlanan Projeler
                  </Link>
                </div>
                </div>
              )}
            </div>

            <Link
              href="/iletisim"
              className="text-white hover:text-gold transition-colors text-sm font-medium tracking-wide"
            >
              İLETİŞİM
            </Link>

            <Link
              href="/iletisim"
              className="bg-gold hover:bg-gold-dark text-navy font-semibold text-sm px-5 py-2.5 transition-colors"
            >
              TEKLİF AL
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy border-t border-navy-light">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-white hover:text-gold py-2 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/hakkimizda"
              className="block text-white hover:text-gold py-2 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Hakkımızda
            </Link>
            <div className="border-t border-navy-light pt-2">
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">
                Projelerimiz
              </p>
              <Link
                href="/projeler/guncel"
                className="block text-white hover:text-gold py-2 pl-3 text-sm"
                onClick={() => setIsOpen(false)}
              >
                Güncel Projelerimiz
              </Link>
              <Link
                href="/projeler/tamamlanan"
                className="block text-white hover:text-gold py-2 pl-3 text-sm"
                onClick={() => setIsOpen(false)}
              >
                Tamamlanan Projeler
              </Link>
            </div>
            <Link
              href="/iletisim"
              className="block text-white hover:text-gold py-2 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>
            <Link
              href="/iletisim"
              className="block bg-gold text-navy font-semibold text-sm px-4 py-2.5 text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Teklif Al
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
