"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { redirectToLocale } from "@/lib/language";

export default function LanguageRedirect() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      redirectToLocale(pathname);
    }
  }, [pathname]);

  return null;
}
