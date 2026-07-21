export const siteConfig = {
  name: "Wye Design",
  url: "https://wyedesign.co.uk",
  email: "hello@wyedesign.co.uk",
  location: "Hereford and Herefordshire",
  description:
    "Custom, fully managed websites for trades and small businesses in Hereford and Herefordshire.",
} as const;

export const primaryNavigation = [
  { href: "/web-design-hereford", label: "Web design" },
  { href: "/websites-for-trades", label: "For trades" },
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Work" },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function pageMetadata(title: string, description: string, path: string) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
    },
    twitter: {
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}
