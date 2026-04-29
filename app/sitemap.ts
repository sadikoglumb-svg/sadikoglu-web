import { MetadataRoute } from "next";
import { getGuncelProjeler } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sadikoglu.com.tr";

  const guncelDetaylar = getGuncelProjeler()
    .filter((p) => p.yayinda)
    .map((p) => ({
      url: `${base}/projeler/guncel/${p.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }));

  return [
    { url: base,                              lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/projeler/guncel`,         lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    ...guncelDetaylar,
    { url: `${base}/projeler/tamamlanan`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/hakkimizda`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/iletisim`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
