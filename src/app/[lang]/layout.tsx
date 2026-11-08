import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type React from "react";
import HtmlLangSetter from "@/components/html-lang-setter";
import { SiteHeader } from "@/components/site-header";
import { getContent } from "@/content/profile";
import { hasLocale, i18n } from "@/i18n.config";

type Params = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getContent(lang);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(i18n.locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "profile",
      locale: lang === "pt" ? "pt_BR" : "en_US",
      images: [{ url: `/${lang}/og.png`, width: 1200, height: 630, alt: meta.title }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Params & { children: React.ReactNode }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <HtmlLangSetter lang={lang} />
      <SiteHeader lang={lang} />
      {children}
    </>
  );
}
