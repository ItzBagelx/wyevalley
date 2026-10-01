import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/site";

const originalLastModified = "2026-08-11T00:00:00.000Z";
const contentUpdate = "2026-10-01T00:00:00.000Z";

const pages = [
  { path: "", changeFrequency: "weekly", priority: 1, lastModified: contentUpdate },
  { path: "/web-design-hereford", changeFrequency: "monthly", priority: 0.9, lastModified: contentUpdate },
  { path: "/websites-for-trades", changeFrequency: "monthly", priority: 0.8 },
  { path: "/small-business-web-design", changeFrequency: "monthly", priority: 0.8 },
  { path: "/website-hosting-maintenance", changeFrequency: "monthly", priority: 0.8 },
  { path: "/work", changeFrequency: "monthly", priority: 0.8 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.8, lastModified: contentUpdate },
  { path: "/website-cost-guide", changeFrequency: "monthly", priority: 0.7, lastModified: contentUpdate },
  { path: "/about", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: new Date("lastModified" in page ? page.lastModified : originalLastModified),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
