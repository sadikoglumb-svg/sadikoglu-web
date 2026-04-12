import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getGuncelProjeler, getTamamlananProjeler } from "@/lib/projects";
import { Building2, CheckSquare, Plus, ArrowRight, LogOut } from "lucide-react";

export default function AdminDashboard() {
  const cookieStore = cookies();
  const session = cookieStore.get("admin_session");

  if (session?.value !== "authenticated") {
    redirect("/admin");
  }

  const guncelCount = getGuncelProjeler().length;
  const tamamlananCount = getTamamlananProjeler().length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-navy text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-2 h-8 bg-gold" />
          <div>
            <p className="text-xs text-white/50 uppercase tracking-wider">Admin Panel</p>
            <h1 className="font-serif font-bold text-lg">Sadıkoğlu İnşaat</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
            ← Siteye Git
          </Link>
          <form action="/api/auth" method="DELETE">
            <Link
              href="/api/auth"
              className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm transition-colors"
              onClick={async () => {
                await fetch("/api/auth", { method: "DELETE" });
                window.location.href = "/admin";
              }}
            >
              <LogOut size={15} /> Çıkış
            </Link>
          </form>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="font-serif text-3xl text-navy font-bold mb-2">Dashboard</h2>
        <p className="text-gray-500 mb-10">
          Proje bilgilerini buradan yönetebilirsiniz.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-white p-6 border border-gray-100 border-l-4 border-l-gold">
            <p className="text-gray-400 text-sm mb-1">Güncel Proje</p>
            <p className="font-serif text-4xl font-bold text-navy">{guncelCount}</p>
          </div>
          <div className="bg-white p-6 border border-gray-100 border-l-4 border-l-navy">
            <p className="text-gray-400 text-sm mb-1">Tamamlanan Proje</p>
            <p className="font-serif text-4xl font-bold text-navy">{tamamlananCount}</p>
          </div>
        </div>

        {/* Menü Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Güncel Projeler */}
          <div className="bg-white border border-gray-100 p-7 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gold/10 flex items-center justify-center">
                <Building2 size={20} className="text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy">Güncel Projeler</h3>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              Devam eden projeleri ekleyin, düzenleyin veya kaldırın.
              Site ana sayfasındaki slideshow buradan beslenir.
            </p>
            <div className="flex gap-3">
              <Link
                href="/admin/projeler/guncel"
                className="flex items-center gap-2 bg-navy text-white text-sm font-medium px-4 py-2.5 hover:bg-navy-dark transition-colors"
              >
                Yönet <ArrowRight size={15} />
              </Link>
              <Link
                href="/admin/projeler/guncel?yeni=1"
                className="flex items-center gap-2 border border-gold text-gold text-sm font-medium px-4 py-2.5 hover:bg-gold hover:text-navy transition-colors"
              >
                <Plus size={15} /> Yeni Ekle
              </Link>
            </div>
          </div>

          {/* Tamamlanan Projeler */}
          <div className="bg-white border border-gray-100 p-7 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-navy/5 flex items-center justify-center">
                <CheckSquare size={20} className="text-navy" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy">Tamamlanan Projeler</h3>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              Tamamlanmış projeleri ekleyin, düzenleyin veya kaldırın.
              Harita pinleri ve liste görünümü buradan yönetilir.
            </p>
            <div className="flex gap-3">
              <Link
                href="/admin/projeler/tamamlanan"
                className="flex items-center gap-2 bg-navy text-white text-sm font-medium px-4 py-2.5 hover:bg-navy-dark transition-colors"
              >
                Yönet <ArrowRight size={15} />
              </Link>
              <Link
                href="/admin/projeler/tamamlanan?yeni=1"
                className="flex items-center gap-2 border border-gold text-gold text-sm font-medium px-4 py-2.5 hover:bg-gold hover:text-navy transition-colors"
              >
                <Plus size={15} /> Yeni Ekle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
