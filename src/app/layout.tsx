import LanguageRedirect from "@/components/language-redirect";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Developer Portfolio & Tech Blog",
  description: "A personal blog and portfolio for a fullstack developer",
  icons: {
    icon: "/logo.svg",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
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
