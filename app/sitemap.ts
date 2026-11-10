import { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { hubs } from "@/data/hubs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://spotgeto.com";

  const cityEntries: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/city/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: city.status === "live" ? 0.9 : 0.6,
  }));

  const hubEntries: MetadataRoute.Sitemap = hubs.map((hub) => ({
    url: `${baseUrl}/hub/${hub.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...cityEntries,
    ...hubEntries,
  ];
}

