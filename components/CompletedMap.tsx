"use client";

import { useEffect, useRef } from "react";
import type { TamamlananProje } from "@/lib/projects";

interface Props {
  projeler: TamamlananProje[];
}

export default function CompletedMap({ projeler }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return;
    if (mapInstance.current) return;

    import("leaflet").then((L) => {
      // Fix default icon path issue with webpack
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!, {
        center: [40.9760, 29.0555],
        zoom: 13,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      // Custom gold marker icon
      const goldIcon = L.divIcon({
        className: "",
        html: `<div style="
          width: 28px; height: 28px;
          background: #C9A847;
          border: 3px solid #1B2F4E;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        "></div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -30],
      });

      projeler.forEach((proje) => {
        if (!proje.koordinat) return;
        const marker = L.marker([proje.koordinat.lat, proje.koordinat.lng], {
          icon: goldIcon,
        }).addTo(map);

        marker.bindPopup(`
          <div style="font-family: Inter, sans-serif; min-width: 160px;">
            <p style="font-weight: 700; color: #1B2F4E; margin: 0 0 6px 0; font-size: 14px;">${proje.ad}</p>
            <p style="color: #666; font-size: 12px; margin: 0 0 4px 0;">${proje.adres}</p>
            <p style="color: #C9A847; font-size: 12px; font-weight: 600; margin: 0;">İskan: ${proje.iskanTarihi}</p>
          </div>
        `);
      });

      mapInstance.current = map;
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [projeler]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <div ref={mapRef} className="w-full h-[450px] z-0 rounded-none" />
    </>
  );
}
