"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n.config";

export default function HtmlLangSetter({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
