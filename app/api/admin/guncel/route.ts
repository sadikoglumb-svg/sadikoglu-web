import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getGuncelProjeler, saveGuncelProjeler, slugify, type GuncelProje } from "@/lib/projects";

function isAuth(): boolean {
  const cookieStore = cookies();
  return cookieStore.get("admin_session")?.value === "authenticated";
}

export async function GET() {
  if (!isAuth()) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  return NextResponse.json(getGuncelProjeler());
}

export async function POST(req: NextRequest) {
  if (!isAuth()) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });

  const data = await req.json();
  const projeler = getGuncelProjeler();

  const yeniProje: GuncelProje = {
    id: data.id || slugify(data.ad),
    ad: data.ad,
    ilce: data.ilce || "Kadıköy",
    mahalle: data.mahalle || "",
    asama: data.asama,
    tahminiTeslim: data.tahminiTeslim,
    aciklama: data.aciklama || "",
    fotograflar: data.fotograflar || [],
    koordinat: data.koordinat || { lat: 40.976, lng: 29.055 },
    yayinda: data.yayinda !== undefined ? data.yayinda : true,
  };

  projeler.push(yeniProje);
  saveGuncelProjeler(projeler);

  return NextResponse.json(yeniProje, { status: 201 });
}

export async function PUT(req: NextRequest) {
  if (!isAuth()) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });

  const data = await req.json();
  const projeler = getGuncelProjeler();
  const idx = projeler.findIndex((p) => p.id === data.id);

  if (idx === -1) return NextResponse.json({ error: "Proje bulunamadı" }, { status: 404 });

  projeler[idx] = { ...projeler[idx], ...data };
  saveGuncelProjeler(projeler);

  return NextResponse.json(projeler[idx]);
}

export async function DELETE(req: NextRequest) {
  if (!isAuth()) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });

  const { id } = await req.json();
  const projeler = getGuncelProjeler().filter((p) => p.id !== id);
  saveGuncelProjeler(projeler);

  return NextResponse.json({ success: true });
}
