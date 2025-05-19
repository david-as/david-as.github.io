"use client"

import { useEffect } from "react"
import type { Locale } from "@/i18n.config"

export default function HtmlLangSetter({ lang }: { lang: Locale }) {
  useEffect(() => {
    try {
      // Set the HTML lang attribute
      document.documentElement.lang = lang
      console.log(`Set HTML lang attribute to: ${lang}`)
    } catch (error) {
      console.error("Error setting HTML lang attribute:", error)
    }
  }, [lang])

  return null
}
