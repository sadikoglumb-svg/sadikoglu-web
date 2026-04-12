"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ ad: "", telefon: "", email: "", mesaj: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ ad: "", telefon: "", email: "", mesaj: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle size={48} className="text-green-500 mb-4" />
        <h3 className="font-serif text-2xl text-navy font-bold mb-2">
          Mesajınız İletildi!
        </h3>
        <p className="text-gray-500">En kısa sürede sizinle iletişime geçeceğiz.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-gold hover:underline text-sm"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">
            Adınız Soyadınız <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            required
            value={form.ad}
            onChange={(e) => setForm({ ...form, ad: e.target.value })}
            placeholder="Örn: Ahmet Yılmaz"
            className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1.5">
            Telefon Numaranız <span className="text-gold">*</span>
          </label>
          <input
            type="tel"
            required
            value={form.telefon}
            onChange={(e) => setForm({ ...form, telefon: e.target.value })}
            placeholder="0532 000 00 00"
            className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-navy mb-1.5">
          E-posta Adresiniz
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="ornek@email.com"
          className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-navy mb-1.5">
          Mesajınız <span className="text-gold">*</span>
        </label>
        <textarea
          required
          rows={5}
          value={form.mesaj}
          onChange={(e) => setForm({ ...form, mesaj: e.target.value })}
          placeholder="Arsanız veya projeniz hakkında bilgi veriniz..."
          className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3">
          <AlertCircle size={16} />
          <span>Bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp ile yazın.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 w-full bg-navy hover:bg-navy-dark text-white font-semibold py-4 transition-colors disabled:opacity-60"
      >
        {status === "loading" ? (
          <span>Gönderiliyor...</span>
        ) : (
          <>
            <Send size={18} />
            Mesaj Gönder
          </>
        )}
      </button>

      <p className="text-gray-400 text-xs text-center">
        Bilgileriniz yalnızca iletişim amaçlı kullanılacaktır.
      </p>
    </form>
  );
}
