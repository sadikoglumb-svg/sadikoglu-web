import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getTamamlananProjeler, saveTamamlananProjeler, slugify, type TamamlananProje } from "@/lib/projects";

function isAuth(): boolean {
  const cookieStore = cookies();
  return cookieStore.get("admin_session")?.value === "authenticated";
}

export async function GET() {
  if (!isAuth()) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  return NextResponse.json(getTamamlananProjeler());
}

export async function POST(req: NextRequest) {
  if (!isAuth()) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });

  const data = await req.json();
  const projeler = getTamamlananProjeler();

  const yeniProje: TamamlananProje = {
    id: data.id || slugify(data.ad),
    ad: data.ad,
    adres: data.adres || "",
    koordinat: data.koordinat || { lat: 40.976, lng: 29.055 },
    baslangicTarihi: data.baslangicTarihi || "",
    iskanTarihi: data.iskanTarihi || "",
    bagimsizBolum: Number(data.bagimsizBolum) || 0,
    insaatM2: Number(data.insaatM2) || 0,
    fotograflar: data.fotograflar || [],
  };

  projeler.push(yeniProje);
  saveTamamlananProjeler(projeler);

  return NextResponse.json(yeniProje, { status: 201 });
}

export async function PUT(req: NextRequest) {
  if (!isAuth()) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });

  const data = await req.json();
  const projeler = getTamamlananProjeler();
  const idx = projeler.findIndex((p) => p.id === data.id);

  if (idx === -1) return NextResponse.json({ error: "Proje bulunamadı" }, { status: 404 });

  projeler[idx] = { ...projeler[idx], ...data };
  saveTamamlananProjeler(projeler);

  return NextResponse.json(projeler[idx]);
}

export async function DELETE(req: NextRequest) {
  if (!isAuth()) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });

  const { id } = await req.json();
  const projeler = getTamamlananProjeler().filter((p) => p.id !== id);
  saveTamamlananProjeler(projeler);

  return NextResponse.json({ success: true });
}
