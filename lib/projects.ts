import fs from "fs";
import path from "path";

export interface GuncelProje {
  id: string;
  ad: string;
  ilce: string;
  mahalle: string;
  asama: string;
  tahminiTeslim: string;
  aciklama: string;
  fotograflar: string[];
  koordinat: { lat: number; lng: number };
  yayinda: boolean;
}

export interface TamamlananProje {
  id: string;
  ad: string;
  adres: string;
  koordinat: { lat: number; lng: number };
  baslangicTarihi: string;
  iskanTarihi: string;
  bagimsizBolum: number;
  insaatM2: number;
  fotograflar: string[];
}

const dataDir = path.join(process.cwd(), "data");

export function getGuncelProjeler(): GuncelProje[] {
  const filePath = path.join(dataDir, "guncel-projeler.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export function getTamamlananProjeler(): TamamlananProje[] {
  const filePath = path.join(dataDir, "tamamlanan-projeler.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export function saveGuncelProjeler(projeler: GuncelProje[]) {
  const filePath = path.join(dataDir, "guncel-projeler.json");
  fs.writeFileSync(filePath, JSON.stringify(projeler, null, 2), "utf-8");
}

export function saveTamamlananProjeler(projeler: TamamlananProje[]) {
  const filePath = path.join(dataDir, "tamamlanan-projeler.json");
  fs.writeFileSync(filePath, JSON.stringify(projeler, null, 2), "utf-8");
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
