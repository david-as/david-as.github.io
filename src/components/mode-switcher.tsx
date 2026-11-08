"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { META_THEME_COLORS } from "@/config/site";
import { useMetaColor } from "@/hooks/use-meta-colors";

export function ModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const { setMetaColor } = useMetaColor();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setMetaColor(resolvedTheme === "dark" ? META_THEME_COLORS.light : META_THEME_COLORS.dark);
  }, [resolvedTheme, setTheme, setMetaColor]);

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full hover:bg-primary/10"
      onClick={toggleTheme}
    >
      <SunIcon className="hidden [html.light_&]:block" />
      <MoonIcon className="hidden [html.dark_&]:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
