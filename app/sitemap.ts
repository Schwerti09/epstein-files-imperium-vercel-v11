import { MetadataRoute } from "next";
import { people } from "@/lib/people";

// Next.js static export (output: 'export') requires explicit static hints
// for metadata routes.
export const dynamic = "force-static";
// Alternatively: export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com").replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/people",
    "/topics",
    "/methodik",
    "/quellen",
    "/angebote",
    "/support",
    "/kontakt",
    "/impressum",
    "/agb",
    "/datenschutz"
  ];

  return [
    ...staticRoutes.map((p) => ({
      url: `${base}${p}/`,
      lastModified: new Date("2026-02-06").toISOString()
    })),
    ...people.map((p) => ({
      url: `${base}/people/${p.slug}/`,
      lastModified: new Date("2026-02-06").toISOString()
    }))
  ];
}
