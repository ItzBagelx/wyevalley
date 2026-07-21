import { NextRequest, NextResponse } from "next/server";

const preferredHost = "wyedesign.co.uk";
const alternateHost = `www.${preferredHost}`;

export function middleware(request: NextRequest) {
  const host = (request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "")
    .split(":")[0]
    .toLowerCase();

  if (host !== alternateHost) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.protocol = "https:";
  destination.host = preferredHost;

  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
