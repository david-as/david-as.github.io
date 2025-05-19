import { i18n } from "@/i18n.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator to get preferred language
  let languages: string[] = [];
  try {
    languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  } catch (error) {
    console.error("Negotiator error:", error);
    // Fallback to default locale if negotiator fails
    return i18n.defaultLocale;
  }

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip Next.js internal paths and public files
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".ico") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".gif")
  ) {
    return;
  }

  // Special case: redirect /blog or /about to /{defaultLocale}/blog or /{defaultLocale}/about
  if (
    pathname === "/blog" ||
    pathname.startsWith("/blog/") ||
    pathname === "/about" ||
    pathname.startsWith("/about/")
  ) {
    const locale = getLocale(request);
    const newPath = pathname.replace(/^\/(blog|about)/, `/${locale}/$1`);
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // Check if the pathname already starts with a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  // If it already has a locale, don't redirect
  if (pathnameHasLocale) {
    return;
  }

  // Redirect if there is no locale
  const locale = getLocale(request);
  const newUrl = new URL(
    `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
    request.url
  );
  newUrl.search = request.nextUrl.search;

  return NextResponse.redirect(newUrl);
}

export const config = {
  // Matcher ignoring specific paths
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.gif).*)",
  ],
};
