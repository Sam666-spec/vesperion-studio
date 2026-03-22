import type { MetadataRoute } from "next";

const siteUrl = "https://vesperionstudio.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },

      {
        userAgent: "Googlebot",
        allow: "/",
      },

      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],

    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}