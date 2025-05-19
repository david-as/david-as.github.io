import { i18n } from "../i18n.config"
import { match as matchLocale } from "@formatjs/intl-localematcher"

export function getPreferredLanguage(): string {
  // Default to browser language or fallback
  try {
    const languages = navigator.languages || [navigator.language]
    return matchLocale(languages, i18n.locales, i18n.defaultLocale)
  } catch {
    return i18n.defaultLocale
  }
}

export function redirectToLocale(pathname: string): void {
  // Check if already has locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (pathnameHasLocale) return

  const locale = getPreferredLanguage()
  const newPath = `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`
  window.location.href = newPath
}