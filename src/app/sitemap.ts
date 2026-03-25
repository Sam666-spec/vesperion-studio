import type { MetadataRoute } from "next";

const siteUrl = "https://vesperionstudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    // 🔥 Главная
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    // 🔥 Основная продающая
    {
      url: `${siteUrl}/tvorba-webu`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // 🔥 Локальные страницы (ВАЖНО)
    {
      url: `${siteUrl}/tvorba-webu-praha`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/tvorba-webu-tabor`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // 🔥 Services
    {
      url: `${siteUrl}/services/web-design`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/web-development`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/seo`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // 📄 Служебные
    {
      url: `${siteUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/cookies`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}