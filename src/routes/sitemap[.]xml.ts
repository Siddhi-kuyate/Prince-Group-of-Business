import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://www.princegroupbusiness.in";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/",           changefreq: "weekly",  priority: "1.0" },
          { path: "/industries", changefreq: "monthly", priority: "0.8" },
          { path: "/solutions",  changefreq: "monthly", priority: "0.8" },
          { path: "/products",   changefreq: "monthly", priority: "0.8" },
          { path: "/blogs",      changefreq: "weekly",  priority: "0.7" },
          { path: "/about",      changefreq: "monthly", priority: "0.7" },
          { path: "/contact",    changefreq: "yearly",  priority: "0.6" },
        ];

        const now = new Date().toISOString().split("T")[0];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              `    <lastmod>${now}</lastmod>`,
              `    <changefreq>${e.changefreq}</changefreq>`,
              `    <priority>${e.priority}</priority>`,
              `  </url>`,
            ].join("\n"),
          ),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
