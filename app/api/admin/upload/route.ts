import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

function isAuth(): boolean {
  const cookieStore = cookies();
  return cookieStore.get("admin_session")?.value === "authenticated";
}

export async function POST(req: NextRequest) {
  if (!isAuth()) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("file") as File;
  const projeId = formData.get("projeId") as string;

  if (!file || !projeId) {
    return NextResponse.json({ error: "Dosya veya proje ID eksik" }, { status: 400 });
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json({ error: "Sadece JPG, PNG veya WebP kabul edilir" }, { status: 400 });
  }

  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json({ error: "Dosya 5MB'dan büyük olamaz" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const fileName = `${Date.now()}.${ext}`;
  const dir = path.join(process.cwd(), "public", "images", "projeler", projeId);

  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, fileName), buffer);

  return NextResponse.json({ url: `/images/projeler/${projeId}/${fileName}` });
}
