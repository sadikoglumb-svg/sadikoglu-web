import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/905337856161?text=Merhaba%2C%20Sad%C4%B1ko%C4%9Flu%20%C4%B0n%C5%9Faat%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-4 py-3 shadow-lg transition-all duration-200 hover:scale-105 rounded-full"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <MessageCircle size={22} fill="white" />
      <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
    </a>
  );
}
