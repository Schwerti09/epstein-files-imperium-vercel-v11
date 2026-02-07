import { MetadataRoute } from "next";

// Next.js static export (output: 'export') requires explicit static hints
// for metadata routes.
export const dynamic = "force-static";
// Alternatively: export const revalidate = 86400;

export default function robots(): MetadataRoute.Robots {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com").replace(/\/$/, "");
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`
  };
}
