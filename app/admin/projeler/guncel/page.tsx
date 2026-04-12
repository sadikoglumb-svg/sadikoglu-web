"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye, EyeOff, ChevronLeft, Save, X, Upload } from "lucide-react";
import type { GuncelProje } from "@/lib/projects";

const ASAMA_OPTIONS = [
  "Temel Aşaması",
  "Kaba İnşaat",
  "Sıva / İnce İşler",
  "İnce İşler",
  "Bitmek Üzere",
];

const EMPTY_FORM: Partial<GuncelProje> = {
  ad: "",
  ilce: "Kadıköy",
  mahalle: "",
  asama: "Temel Aşaması",
  tahminiTeslim: "",
  aciklama: "",
  fotograflar: [],
  koordinat: { lat: 40.976, lng: 29.055 },
  yayinda: true,
};

export default function GuncelProjelerAdmin() {
  const router = useRouter();
  const [projeler, setProjeler] = useState<GuncelProje[]>([]);
  const [loading, setLoading] = useState(true);
  const [formAcik, setFormAcik] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("yeni") === "1") setFormAcik(true);
    }
  }, []);
  const [duzenle, setDuzenle] = useState<GuncelProje | null>(null);
  const [form, setForm] = useState<Partial<GuncelProje>>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [silKonfirm, setSilKonfirm] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/guncel")
      .then((r) => {
        if (r.status === 401) { router.push("/admin"); return null; }
        return r.json();
      })
      .then((data) => {
        if (data) { setProjeler(data); setLoading(false); }
      });
  }, [router]);

  const acikForm = (proje?: GuncelProje) => {
    setDuzenle(proje || null);
    setForm(proje ? { ...proje } : { ...EMPTY_FORM });
    setFormAcik(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const kapat = () => {
    setFormAcik(false);
    setDuzenle(null);
    setForm(EMPTY_FORM);
  };

  const kaydet = async () => {
    if (!form.ad || !form.asama || !form.tahminiTeslim) {
      alert("Proje adı, aşama ve tahmini teslim zorunludur.");
      return;
    }
    setSaving(true);
    const method = duzenle ? "PUT" : "POST";
    const res = await fetch("/api/admin/guncel", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      const updated = await res.json();
      if (duzenle) {
        setProjeler(projeler.map((p) => (p.id === updated.id ? updated : p)));
      } else {
        setProjeler([...projeler, updated]);
      }
      kapat();
    }
    setSaving(false);
  };

  const sil = async (id: string) => {
    const res = await fetch("/api/admin/guncel", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setProjeler(projeler.filter((p) => p.id !== id));
      setSilKonfirm(null);
    }
  };

  const yayinToggle = async (proje: GuncelProje) => {
    const updated = { ...proje, yayinda: !proje.yayinda };
    const res = await fetch("/api/admin/guncel", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
    if (res.ok) {
      setProjeler(projeler.map((p) => (p.id === proje.id ? updated : p)));
    }
  };

  const fotografYukle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !form.id && !form.ad) return;

    const projeId = form.id || form.ad!.toLowerCase().replace(/\s+/g, "-");
    const fd = new FormData();
    fd.append("file", file);
    fd.append("projeId", projeId);

    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    if (res.ok) {
      const { url } = await res.json();
      setForm({ ...form, fotograflar: [...(form.fotograflar || []), url] });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-navy text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/dashboard" className="text-white/60 hover:text-white">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="font-serif font-bold text-lg text-white">Güncel Projeler</h1>
        </div>
        <button
          onClick={() => acikForm()}
          className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-semibold text-sm px-4 py-2 transition-colors"
        >
          <Plus size={16} /> Yeni Proje
        </button>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Form */}
        {formAcik && (
          <div className="bg-white border border-gray-100 border-t-4 border-t-gold p-8 mb-8 shadow-sm">
            <div className="flex items-center justify-between mb-7">
              <h2 className="font-serif text-xl text-navy font-bold">
                {duzenle ? "Projeyi Düzenle" : "Yeni Proje Ekle"}
              </h2>
              <button onClick={kapat} className="text-gray-400 hover:text-navy">
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="label">Proje Adı *</label>
                <input
                  type="text"
                  value={form.ad || ""}
                  onChange={(e) => setForm({ ...form, ad: e.target.value })}
                  className="input"
                  placeholder="Örn: Lale Apartmanı"
                />
              </div>
              <div>
                <label className="label">Mahalle</label>
                <input
                  type="text"
                  value={form.mahalle || ""}
                  onChange={(e) => setForm({ ...form, mahalle: e.target.value })}
                  className="input"
                  placeholder="Zühtüpaşa, Feneryolu..."
                />
              </div>
              <div>
                <label className="label">Aşama *</label>
                <select
                  value={form.asama || ""}
                  onChange={(e) => setForm({ ...form, asama: e.target.value })}
                  className="input"
                >
                  {ASAMA_OPTIONS.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">Tahmini Teslim *</label>
                <input
                  type="text"
                  value={form.tahminiTeslim || ""}
                  onChange={(e) => setForm({ ...form, tahminiTeslim: e.target.value })}
                  className="input"
                  placeholder="Örn: 2026 Q3"
                />
              </div>
              <div>
                <label className="label">Enlem (Lat)</label>
                <input
                  type="number"
                  step="0.0001"
                  value={form.koordinat?.lat || ""}
                  onChange={(e) =>
                    setForm({ ...form, koordinat: { ...form.koordinat!, lat: parseFloat(e.target.value) } })
                  }
                  className="input"
                />
              </div>
              <div>
                <label className="label">Boylam (Lng)</label>
                <input
                  type="number"
                  step="0.0001"
                  value={form.koordinat?.lng || ""}
                  onChange={(e) =>
                    setForm({ ...form, koordinat: { ...form.koordinat!, lng: parseFloat(e.target.value) } })
                  }
                  className="input"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="label">Açıklama</label>
                <textarea
                  rows={4}
                  value={form.aciklama || ""}
                  onChange={(e) => setForm({ ...form, aciklama: e.target.value })}
                  className="input resize-none"
                  placeholder="Proje hakkında detaylı açıklama..."
                />
              </div>

              {/* Fotoğraf Yükleme */}
              <div className="sm:col-span-2">
                <label className="label">Fotoğraf Ekle</label>
                <label className="flex items-center gap-2 border border-dashed border-gray-300 p-4 cursor-pointer hover:border-gold transition-colors">
                  <Upload size={18} className="text-gold" />
                  <span className="text-sm text-gray-500">Fotoğraf seç (JPG/PNG, max 5MB)</span>
                  <input type="file" accept="image/*" className="hidden" onChange={fotografYukle} />
                </label>
                {(form.fotograflar || []).length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {form.fotograflar!.map((url, i) => (
                      <div key={i} className="relative">
                        <img src={url} alt="" className="w-16 h-16 object-cover border border-gray-200" />
                        <button
                          type="button"
                          onClick={() => setForm({ ...form, fotograflar: form.fotograflar!.filter((_, j) => j !== i) })}
                          className="absolute -top-1 -right-1 bg-red-500 text-white w-4 h-4 flex items-center justify-center text-xs"
                        >×</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="sm:col-span-2 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="yayinda"
                  checked={form.yayinda ?? true}
                  onChange={(e) => setForm({ ...form, yayinda: e.target.checked })}
                  className="w-4 h-4 accent-gold"
                />
                <label htmlFor="yayinda" className="text-sm text-navy font-medium">
                  Sitede yayınla
                </label>
              </div>
            </div>

            <div className="flex gap-3 mt-7 pt-6 border-t border-gray-100">
              <button
                onClick={kaydet}
                disabled={saving}
                className="flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 hover:bg-navy-dark transition-colors disabled:opacity-60"
              >
                <Save size={16} /> {saving ? "Kaydediliyor..." : "Kaydet"}
              </button>
              <button onClick={kapat} className="px-6 py-3 border border-gray-200 text-gray-500 hover:border-gray-400 transition-colors text-sm">
                İptal
              </button>
            </div>
          </div>
        )}

        {/* Liste */}
        {loading ? (
          <p className="text-gray-400 text-center py-10">Yükleniyor...</p>
        ) : projeler.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="mb-4">Henüz proje eklenmedi.</p>
            <button onClick={() => acikForm()} className="text-gold hover:underline text-sm">
              İlk projeyi ekle
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {projeler.map((proje) => (
              <div
                key={proje.id}
                className="bg-white border border-gray-100 p-5 flex items-center justify-between gap-4 hover:shadow-sm transition-shadow"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-navy truncate">{proje.ad}</h3>
                    <span
                      className={`shrink-0 text-xs px-2 py-0.5 rounded-full ${
                        proje.yayinda ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {proje.yayinda ? "Yayında" : "Gizli"}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">
                    {proje.mahalle} • {proje.asama} • Teslim: {proje.tahminiTeslim}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => yayinToggle(proje)}
                    title={proje.yayinda ? "Gizle" : "Yayınla"}
                    className="p-2 text-gray-400 hover:text-gold transition-colors"
                  >
                    {proje.yayinda ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                  <button
                    onClick={() => acikForm(proje)}
                    className="p-2 text-gray-400 hover:text-navy transition-colors"
                  >
                    <Edit size={18} />
                  </button>
                  {silKonfirm === proje.id ? (
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => sil(proje.id)}
                        className="text-xs bg-red-500 text-white px-2 py-1"
                      >
                        Evet, sil
                      </button>
                      <button
                        onClick={() => setSilKonfirm(null)}
                        className="text-xs bg-gray-200 px-2 py-1"
                      >
                        İptal
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setSilKonfirm(proje.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx global>{`
        .label { display: block; font-size: 0.875rem; font-weight: 500; color: #1B2F4E; margin-bottom: 0.375rem; }
        .input { width: 100%; border: 1px solid #e5e7eb; padding: 0.75rem 1rem; font-size: 0.875rem; outline: none; transition: border-color 0.15s; }
        .input:focus { border-color: #C9A847; }
      `}</style>
    </div>
  );
}
