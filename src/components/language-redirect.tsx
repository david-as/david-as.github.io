'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { redirectToLocale } from '@/lib/language'

export default function LanguageRedirect() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname) {
      redirectToLocale(pathname)
    }
  }, [pathname])

  return null
}