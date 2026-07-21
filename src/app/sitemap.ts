import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/site";

const paths = [
  "",
  "/web-design-hereford",
  "/websites-for-trades",
  "/small-business-web-design",
  "/website-hosting-maintenance",
  "/work",
  "/pricing",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" || path === "/web-design-hereford" ? 0.9 : 0.7,
  }));
}
