"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projelerOpen, setProjelerOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProjelerOpen(true);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setProjelerOpen(false), 150);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-dark/80 backdrop-blur-xl border-b border-dark-border shadow-2xl"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-light.png"
              alt="Sadıkoğlu İnşaat"
              width={150}
              height={41}
              className="object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { href: "/",            label: "Ana Sayfa" },
              { href: "/hakkimizda", label: "Hakkımızda" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-offwhite/70 hover:text-offwhite transition-colors text-sm font-medium tracking-wide"
              >
                {label}
              </Link>
            ))}

            {/* Projeler Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1.5 text-offwhite/70 hover:text-offwhite transition-colors text-sm font-medium tracking-wide">
                Projelerimiz
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${projelerOpen ? "rotate-180" : ""}`}
                />
              </button>

              {projelerOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-52">
                  <div className="bg-dark-mid border border-dark-border rounded-xl overflow-hidden shadow-2xl">
                    <Link
                      href="/projeler/guncel"
                      className="flex items-center gap-2 px-5 py-3.5 text-offwhite/80 hover:text-gold hover:bg-dark-border/20 text-sm transition-colors border-b border-dark-border"
                      onClick={() => setProjelerOpen(false)}
                    >
                      Güncel Projelerimiz
                    </Link>
                    <Link
                      href="/projeler/tamamlanan"
                      className="flex items-center gap-2 px-5 py-3.5 text-offwhite/80 hover:text-gold hover:bg-dark-border/20 text-sm transition-colors"
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
              className="text-offwhite/70 hover:text-offwhite transition-colors text-sm font-medium tracking-wide"
            >
              İletişim
            </Link>

            <Link
              href="/iletisim"
              className="bg-gold hover:bg-gold-light text-dark font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200"
            >
              Teklif Al
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-offwhite/80 hover:text-offwhite transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-mid/95 backdrop-blur-xl border-t border-dark-border">
          <div className="px-4 py-5 space-y-1">
            {[
              { href: "/",               label: "Ana Sayfa" },
              { href: "/hakkimizda",    label: "Hakkımızda" },
              { href: "/iletisim",      label: "İletişim" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block text-offwhite/80 hover:text-gold py-3 px-2 text-sm font-medium rounded-lg hover:bg-dark-border/20 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}

            <div className="pt-2 border-t border-dark-border">
              <p className="text-gold text-xs font-semibold uppercase tracking-wider px-2 py-2">
                Projelerimiz
              </p>
              <Link
                href="/projeler/guncel"
                className="block text-offwhite/80 hover:text-gold py-2.5 px-4 text-sm rounded-lg hover:bg-dark-border/20 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Güncel Projelerimiz
              </Link>
              <Link
                href="/projeler/tamamlanan"
                className="block text-offwhite/80 hover:text-gold py-2.5 px-4 text-sm rounded-lg hover:bg-dark-border/20 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tamamlanan Projeler
              </Link>
            </div>

            <div className="pt-3">
              <Link
                href="/iletisim"
                className="block bg-gold text-dark font-semibold text-sm px-4 py-3 text-center rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
