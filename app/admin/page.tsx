"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      setError("Şifre hatalı. Lütfen tekrar deneyin.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Image
            src="/logo.png"
            alt="Sadıkoğlu İnşaat"
            width={140}
            height={70}
            className="object-contain mx-auto mb-4"
          />
          <p className="text-white/60 text-sm">Admin Paneli</p>
        </div>

        <form
          onSubmit={handleLogin}
          className="bg-white p-8 shadow-2xl border-t-4 border-gold"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-gold/10 rounded-full mx-auto mb-6">
            <Lock size={22} className="text-gold" />
          </div>

          <h1 className="text-navy font-serif text-2xl font-bold text-center mb-7">
            Giriş Yap
          </h1>

          <div className="mb-5">
            <label className="block text-sm font-medium text-navy mb-1.5">
              Şifre
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
                className="w-full border border-gray-200 px-4 py-3 pr-11 text-sm focus:outline-none focus:border-gold transition-colors"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm bg-red-50 p-3 mb-4">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-navy hover:bg-navy-dark text-white font-semibold py-3 transition-colors disabled:opacity-60"
          >
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </form>

        <p className="text-center text-white/30 text-xs mt-6">
          © Sadıkoğlu İnşaat — Admin Panel
        </p>
      </div>
    </div>
  );
}
