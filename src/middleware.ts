import { NextRequest, NextResponse } from "next/server";

const preferredHost = "wyedesign.co.uk";
const alternateHost = `www.${preferredHost}`;
const cacheablePages = new Set([
  "/",
  "/about",
  "/contact",
  "/pricing",
  "/privacy-policy",
  "/small-business-web-design",
  "/terms",
  "/web-design-hereford",
  "/website-cost-guide",
  "/website-hosting-maintenance",
  "/websites-for-trades",
  "/work",
]);

export function middleware(request: NextRequest) {
  const host = (request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "")
    .split(":")[0]
    .toLowerCase();
  const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0].trim();
  const isHttp = forwardedProtocol ? forwardedProtocol === "http" : request.nextUrl.protocol === "http:";

  // Only canonicalize the site's own hosts: local previews must stay local.
  if (host === alternateHost || (host === preferredHost && isHttp)) {
    const destination = `https://${preferredHost}${request.nextUrl.pathname}${request.nextUrl.search}`;

    return NextResponse.redirect(destination, 301);
  }

  const response = NextResponse.next();

  if (
    (request.method === "GET" || request.method === "HEAD") &&
    cacheablePages.has(request.nextUrl.pathname)
  ) {
    response.headers.set(
      "Cache-Control",
      "public, max-age=0, no-cache, must-revalidate",
    );
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
