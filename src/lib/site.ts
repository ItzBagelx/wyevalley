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
  { href: "/about", label: "About" },
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
      type: "website",
      locale: "en_GB",
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: "Wye Design — Custom web design for Hereford businesses",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: ["/og.jpg"],
    },
  };
}
