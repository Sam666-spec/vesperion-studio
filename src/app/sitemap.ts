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

    // 🔥 Главная продающая страница
    {
      url: `${siteUrl}/tvorba-webu`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // 🔥 Services (самые важные для SEO)
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

    // 📄 Служебные страницы
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