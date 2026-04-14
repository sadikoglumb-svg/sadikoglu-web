import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sadıkoğlu İnşaat | Kadıköy'de 60 Yıllık Güven",
  description:
    "Kadıköy'ün köklü müteahhidi Sadıkoğlu İnşaat. 60 yıllık deneyim, 120'den fazla tamamlanan proje. Kat karşılığı inşaat, arsa değerlendirme ve konut projeleri.",
  keywords:
    "sadıkoğlu inşaat, kadıköy müteahhit, kat karşılığı inşaat, kadıköy inşaat, istanbul müteahhit, arsa değerlendirme kadıköy, konut projesi kadıköy, mehmet sadıkoğlu inşaat",
  metadataBase: new URL("https://sadikoglu.com.tr"),
  alternates: { canonical: "https://sadikoglu.com.tr" },
  openGraph: {
    title: "Sadıkoğlu İnşaat | Kadıköy'de 60 Yıllık Güven",
    description:
      "Kadıköy'ün köklü müteahhidi. 60 yıllık deneyim, 120+ tamamlanan proje. Kat karşılığı inşaat için hemen iletişime geçin.",
    type: "website",
    url: "https://sadikoglu.com.tr",
    siteName: "Sadıkoğlu İnşaat",
    locale: "tr_TR",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sadikoglu.com.tr",
  "name": "Sadıkoğlu İnşaat Müteahhitlik Ltd. Şti.",
  "alternateName": "Sadıkoğlu İnşaat",
  "description": "Kadıköy'de 60 yıllık deneyimle kat karşılığı inşaat ve konut projeleri.",
  "url": "https://sadikoglu.com.tr",
  "telephone": "+90-533-785-61-61",
  "email": "info@sadikoglu.com.tr",
  "foundingDate": "1965",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Feneryolu Mah. Bağdat Cd. No 141 D:8",
    "addressLocality": "Kadıköy",
    "addressRegion": "İstanbul",
    "addressCountry": "TR",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.9719,
    "longitude": 29.0563,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00",
    },
  ],
  "sameAs": ["https://instagram.com/sadikoglu1965"],
  "areaServed": {
    "@type": "City",
    "name": "Kadıköy, İstanbul",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
