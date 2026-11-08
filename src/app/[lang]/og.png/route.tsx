import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getContent } from "@/content/profile";
import { hasLocale, i18n } from "@/i18n.config";

export const dynamic = "force-static";
const size = { width: 1200, height: 630 };

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = getContent(hasLocale(lang) ? lang : i18n.defaultLocale);
  const portrait = await readFile(join(process.cwd(), "public/myself.png"));
  const portraitSrc = `data:image/png;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#020817",
        backgroundImage:
          "radial-gradient(circle at 20% 0%, rgba(59,130,246,0.35), transparent 55%), radial-gradient(circle at 100% 100%, rgba(56,189,248,0.18), transparent 50%)",
        color: "#f8fafc",
        fontFamily: "sans-serif",
        padding: 72,
        gap: 56,
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 24 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            color: "#94a3b8",
          }}
        >
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#10b981" }} />
          {c.hero.eyebrow}
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
          David Amorim
        </div>
        <div style={{ fontSize: 36, color: "#cbd5e1", lineHeight: 1.25 }}>{c.hero.title}</div>
        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          {["React", "Next.js", "TypeScript", "NestJS"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 22,
                padding: "8px 18px",
                borderRadius: 999,
                border: "1px solid rgba(148,163,184,0.35)",
                color: "#e2e8f0",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
      {/* biome-ignore lint/performance/noImgElement: ImageResponse renderiza apenas <img> */}
      <img
        src={portraitSrc}
        alt=""
        width={320}
        height={480}
        style={{ borderRadius: 32, objectFit: "cover", border: "2px solid rgba(148,163,184,0.3)" }}
      />
    </div>,
    size,
  );
}
