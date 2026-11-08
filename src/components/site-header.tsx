import Link from "next/link";
import { ModeSwitcher } from "@/components/mode-switcher";
import { MyLogo } from "@/components/my-logo";
import { getContent } from "@/content/profile";
import type { Locale } from "@/i18n.config";
import LanguageSwitcher from "./language-switcher";

export function SiteHeader({ lang }: { lang: Locale }) {
  const { nav } = getContent(lang);
  const items = [
    { href: "#about", label: nav.about },
    { href: "#projects", label: nav.projects },
    { href: "#experience", label: nav.experience },
    { href: "#stack", label: nav.stack },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-2xl items-center justify-between gap-2 rounded-full border border-border/60 bg-background/60 p-1.5 shadow-lg shadow-primary/5 backdrop-blur-xl supports-backdrop-filter:bg-background/50">
        <Link
          href={`/${lang}`}
          className="grid size-9 place-items-center rounded-full text-foreground transition-colors hover:bg-primary/10"
        >
          <MyLogo className="size-6 fill-current" />
          <span className="sr-only">David Amorim</span>
        </Link>

        <ul className="hidden items-center gap-1 sm:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3 py-2 text-sm md:px-4 font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-0.5">
          <LanguageSwitcher />
          <ModeSwitcher />
        </div>
      </nav>
    </header>
  );
}
