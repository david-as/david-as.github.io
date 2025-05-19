"use client"

import { usePathname, useRouter } from "next/navigation"
import { i18n } from "@/i18n.config"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const pathName = usePathname()
  const router = useRouter()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return `/${locale}`

    const segments = pathName.split("/").filter(Boolean)

    // Check if the first segment is a locale
    const isFirstSegmentLocale = i18n.locales.some((loc) => segments[0] === loc)

    if (isFirstSegmentLocale) {
      // Replace the locale
      segments[0] = locale
    } else {
      // If the current path doesn't have a locale, add it
      segments.unshift(locale)
    }

    return `/${segments.join("/")}`
  }

  const localeNames = {
    en: "English",
    pt: "Português",
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => {
              const newPath = redirectedPathName(locale)
              router.push(newPath)
            }}
          >
            {localeNames[locale as keyof typeof localeNames]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
