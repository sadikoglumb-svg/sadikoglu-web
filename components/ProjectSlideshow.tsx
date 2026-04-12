"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin, Clock, Building2 } from "lucide-react";
import type { GuncelProje } from "@/lib/projects";

const ASAMA_COLORS: Record<string, string> = {
  "Temel Aşaması": "bg-blue-100 text-blue-800",
  "Kaba İnşaat": "bg-orange-100 text-orange-800",
  "İnce İşler": "bg-yellow-100 text-yellow-800",
  "Bitmek Üzere": "bg-green-100 text-green-800",
};

interface Props {
  projeler: GuncelProje[];
}

export default function ProjectSlideshow({ projeler }: Props) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % projeler.length);
  }, [projeler.length]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + projeler.length) % projeler.length);
  };

  useEffect(() => {
    if (paused || projeler.length <= 1) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next, projeler.length]);

  if (projeler.length === 0) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projeler.map((proje) => (
            <div key={proje.id} className="w-full shrink-0">
              <Link href={`/projeler/guncel/${proje.id}`}>
                <div className="bg-white border border-gray-100 hover:shadow-md transition-shadow p-6 mx-2 cursor-pointer group">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-xl text-navy font-bold group-hover:text-gold transition-colors">
                      {proje.ad}
                    </h3>
                    <span
                      className={`text-xs px-2.5 py-1 font-medium rounded-full ${
                        ASAMA_COLORS[proje.asama] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {proje.asama}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-2">
                    <MapPin size={14} className="text-gold" />
                    <span>{proje.mahalle}, {proje.ilce}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Clock size={14} className="text-gold" />
                    <span>Tahmini Teslim: {proje.tahminiTeslim}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-gold text-sm font-medium group-hover:underline">
                      Detayları Gör →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      {projeler.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-navy text-white w-8 h-8 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors shadow-md"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-navy text-white w-8 h-8 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors shadow-md"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {projeler.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-gold" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
