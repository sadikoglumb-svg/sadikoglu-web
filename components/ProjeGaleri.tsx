"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  fotograflar: string[];
  ad: string;
}

export default function ProjeGaleri({ fotograflar, ad }: Props) {
  const [aktif, setAktif] = useState(0);

  if (fotograflar.length === 0) return null;

  return (
    <div className="mb-8">
      {/* Ana fotoğraf */}
      <div className="relative aspect-[4/3] bg-gray-100 mb-3 flex items-center justify-center overflow-hidden">
        <Image
          key={aktif}
          src={fotograflar[aktif]}
          alt={`${ad} - Fotoğraf ${aktif + 1}`}
          fill
          className="object-contain transition-opacity duration-300"
          priority={aktif === 0}
        />
        {/* Sayaç */}
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {aktif + 1} / {fotograflar.length}
        </div>
      </div>

      {/* Thumbnail'ler */}
      {fotograflar.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {fotograflar.map((foto, i) => (
            <button
              key={i}
              onClick={() => setAktif(i)}
              className={`relative shrink-0 w-20 h-14 overflow-hidden border-2 transition-all bg-gray-100 flex items-center justify-center ${
                i === aktif
                  ? "border-gold opacity-100"
                  : "border-transparent opacity-60 hover:opacity-90"
              }`}
            >
              <Image
                src={foto}
                alt={`${ad} - ${i + 1}`}
                width={80}
                height={56}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
