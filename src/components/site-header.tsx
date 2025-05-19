import { ModeSwitcher } from "@/components/mode-switcher";
import { MyLogo } from "@/components/my-logo";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/dictionary";
import { cn } from "@/lib/utils";
import Link from "next/link";
import LanguageSwitcher from "./language-switcher";

export async function SiteHeader({ lang }: { lang: "en" | "pt" }) {
  const { navigation } = await getDictionary(lang);

  return (
    <div className="fixed inset-x-0 top-10 z-50 flex justify-center">
      <nav className="flex items-center gap-0.5 p-2 rounded-xl border-b border-border/40 bg-transparent  backdrop-blur-sm supports-[backdrop-filter]:bg-blue-500/10 dark:border-border w-80 justify-between">
        {/* <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
          <Link
            href={"https://github.com/david-as/"}
            target="_blank"
            rel="noreferrer"
          >
            <Icons.gitHub className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
        </Button> */}
        <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
          <Link href={`/${lang}`}>
            <MyLogo className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
        </Button>
        <div className="space-x-1">
          <Button
            variant="ghost"
            className={cn(
              "backdrop-blur-sm supports-[backdrop-filter]:bg-blue-500/20 bg-accent/80 text-accent-foreground rounded-full px-6 h-fit py-2"
            )}
          >
            <Link
              href={`/${lang}`}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {navigation.home}
            </Link>
          </Button>
          {/* <Link
          href={`/${lang}/blog`}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {navigation.blog}
        </Link> */}
          <Button
            variant="ghost"
            className="backdrop-blur-sm supports-[backdrop-filter]:bg-blue-500/20 bg-accent/80 text-accent-foreground rounded-full px-6 h-fit py-2"
          >
            <Link
              href={`/${lang}/about`}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {navigation.about}
            </Link>
          </Button>
        </div>
        <div className="space-x-1">
          <ModeSwitcher />
          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  );
}
