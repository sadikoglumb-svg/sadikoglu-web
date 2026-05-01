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

  const inputClass =
    "w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-sm text-offwhite placeholder:text-muted/50 focus:outline-none focus:border-gold/60 transition-colors";

  const labelClass = "block text-xs font-medium text-muted uppercase tracking-wider mb-2";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-green-400" />
        </div>
        <h3 className="font-serif text-2xl text-offwhite font-bold mb-2">
          Mesajınız İletildi!
        </h3>
        <p className="text-muted text-sm">En kısa sürede sizinle iletişime geçeceğiz.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-gold hover:text-gold-light text-sm transition-colors"
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
          <label className={labelClass}>
            Adınız Soyadınız <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            required
            value={form.ad}
            onChange={(e) => setForm({ ...form, ad: e.target.value })}
            placeholder="Ahmet Yılmaz"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>
            Telefon <span className="text-gold">*</span>
          </label>
          <input
            type="tel"
            required
            value={form.telefon}
            onChange={(e) => setForm({ ...form, telefon: e.target.value })}
            placeholder="0532 000 00 00"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>E-posta</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="ornek@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          Mesajınız <span className="text-gold">*</span>
        </label>
        <textarea
          required
          rows={5}
          value={form.mesaj}
          onChange={(e) => setForm({ ...form, mesaj: e.target.value })}
          placeholder="Arsanız veya projeniz hakkında bilgi veriniz..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/20 border border-red-900/40 rounded-lg p-3">
          <AlertCircle size={16} className="shrink-0" />
          <span>Bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp ile yazın.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center disabled:opacity-60"
      >
        {status === "loading" ? (
          <span>Gönderiliyor...</span>
        ) : (
          <>
            <Send size={16} />
            Mesaj Gönder
          </>
        )}
      </button>

      <p className="text-muted/50 text-xs text-center">
        Bilgileriniz yalnızca iletişim amaçlı kullanılacaktır.
      </p>
    </form>
  );
}
