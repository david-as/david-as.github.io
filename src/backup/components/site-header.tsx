import Link from "next/link";
import { Icons } from "@/components/icons";
import { ModeSwitcher } from "@/components/mode-switcher";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <div className="fixed inset-x-0 bottom-10 z-50 flex justify-center">
      <nav className="flex items-center gap-0.5 p-2 rounded-xl border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
        <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
          <Link href={"https://github.com/david-as/"} target="_blank" rel="noreferrer">
            <Icons.gitHub className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
        </Button>
        <ModeSwitcher />
      </nav>
    </div>
  );
}
