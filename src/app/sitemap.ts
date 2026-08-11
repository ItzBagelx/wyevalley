import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/site";

const lastModified = new Date("2026-08-11T00:00:00.000Z");

const pages = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/web-design-hereford", changeFrequency: "monthly", priority: 0.9 },
  { path: "/websites-for-trades", changeFrequency: "monthly", priority: 0.8 },
  { path: "/small-business-web-design", changeFrequency: "monthly", priority: 0.8 },
  { path: "/website-hosting-maintenance", changeFrequency: "monthly", priority: 0.8 },
  { path: "/work", changeFrequency: "monthly", priority: 0.8 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
