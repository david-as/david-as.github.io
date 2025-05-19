import type { Locale } from "@/i18n.config";
import { i18n } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type React from "react";

import HtmlLangSetter from "@/components/html-lang-setter";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Developer Portfolio & Tech Blog",
  description: "A personal blog and portfolio for a fullstack developer",
};

// Generate static params for all supported locales
export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const respParams = await params;
  const paramsLang = respParams.lang;
  // Validate the locale
  const isValidLocale = i18n.locales.includes(paramsLang);

  // If the locale is not valid, show a 404 page
  if (!isValidLocale) {
    notFound();
  }

  const { navigation, footer } = await getDictionary(paramsLang);

  return (
    <>
      <HtmlLangSetter lang={paramsLang} />
      <SiteHeader lang={paramsLang}/>
      <div className="flex min-h-screen flex-col">
        {/* <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between m-auto">
            <div className="flex items-center gap-2 md:gap-4">
              <Link href={`/${paramsLang}`} className="font-bold text-xl">
                DevBlog
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link
                  href={`/${paramsLang}`}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {navigation.home}
                </Link>
                <Link
                  href={`/${paramsLang}/blog`}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {navigation.blog}
                </Link>
                <Link
                  href={`/${paramsLang}/about`}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {navigation.about}
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <ModeToggle />
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </header> */}
        <main className="flex-1">{children}</main>
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row m-auto">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} damorim.dev {footer.rights}
            </p>
            {/* <nav className="flex gap-4 md:gap-6">
              <Link
                href={`/${paramsLang}/blog`}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {navigation.blog}
              </Link>
              <Link
                href={`/${paramsLang}/about`}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {navigation.about}
              </Link>
              <Link
                href={`/${paramsLang}/contact`}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {footer.contact}
              </Link>
            </nav> */}
          </div>
        </footer>
      </div>
      {/* Debugger */}
      {/* <DebugInfo /> */}
    </>
  );
}
