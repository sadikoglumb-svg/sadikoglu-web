import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sadıkoğlu İnşaat | Kadıköy'de 40 Yıllık Güven",
  description:
    "Kadıköy'de 40 yılı aşkın deneyimiyle kat karşılığı inşaat projeleri. 90'dan fazla tamamlanan proje. Sadıkoğlu İnşaat Müteahhitlik Ltd. Şti.",
  keywords: "kat karşılığı inşaat, kadıköy, istanbul, müteahhit, sadıkoğlu inşaat",
  openGraph: {
    title: "Sadıkoğlu İnşaat | Kadıköy'de 40 Yıllık Güven",
    description: "Kadıköy'de 40 yılı aşkın deneyimle güvenilir inşaat hizmetleri.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
