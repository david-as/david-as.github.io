import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";
import LanguageRedirect from "@/components/language-redirect";
import { ThemeProvider } from "@/components/theme-provider";
import { META_THEME_COLORS, siteConfig } from "@/config/site";
import { i18n } from "@/i18n.config";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  icons: { icon: "/logo.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: META_THEME_COLORS.light },
    { media: "(prefers-color-scheme: dark)", color: META_THEME_COLORS.dark },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={i18n.defaultLocale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageRedirect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
