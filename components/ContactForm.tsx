"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xgakkqja");

  const inputClass =
    "w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-sm text-offwhite placeholder:text-muted/50 focus:outline-none focus:border-gold/60 transition-colors";

  const labelClass = "block text-xs font-medium text-muted uppercase tracking-wider mb-2";

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-green-400" />
        </div>
        <h3 className="font-serif text-2xl text-offwhite font-bold mb-2">
          Mesajınız İletildi!
        </h3>
        <p className="text-muted text-sm">En kısa sürede sizinle iletişime geçeceğiz.</p>
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
            name="ad"
            required
            placeholder="Ahmet Yılmaz"
            className={inputClass}
          />
          <ValidationError field="ad" errors={state.errors} className="text-red-400 text-xs mt-1" />
        </div>
        <div>
          <label className={labelClass}>
            Telefon <span className="text-gold">*</span>
          </label>
          <input
            type="tel"
            name="telefon"
            required
            placeholder="0532 000 00 00"
            className={inputClass}
          />
          <ValidationError field="telefon" errors={state.errors} className="text-red-400 text-xs mt-1" />
        </div>
      </div>

      <div>
        <label className={labelClass}>E-posta</label>
        <input
          type="email"
          name="email"
          placeholder="ornek@email.com"
          className={inputClass}
        />
        <ValidationError field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>

      <div>
        <label className={labelClass}>
          Mesajınız <span className="text-gold">*</span>
        </label>
        <textarea
          name="mesaj"
          required
          rows={5}
          placeholder="Arsanız veya projeniz hakkında bilgi veriniz..."
          className={`${inputClass} resize-none`}
        />
        <ValidationError field="mesaj" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>

      {state.errors && !state.succeeded && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/20 border border-red-900/40 rounded-lg p-3">
          <AlertCircle size={16} className="shrink-0" />
          <span>Bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp ile yazın.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary w-full justify-center disabled:opacity-60"
      >
        {state.submitting ? (
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
