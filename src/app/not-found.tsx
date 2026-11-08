import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden px-4 py-16">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <div className="overflow-hidden rounded-[2rem] border bg-card shadow-2xl shadow-primary/10">
          <Image
            src="/pixel-art.jpeg"
            alt="Pixel art de um desenvolvedor programando / Pixel art of a developer coding"
            width={1024}
            height={1024}
            priority
            className="size-64 object-cover [image-rendering:pixelated] sm:size-72"
          />
        </div>
        <p className="mt-8 font-mono text-sm text-primary">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Página não encontrada</h1>
        <p className="mt-1 text-muted-foreground">Page not found</p>
        <p className="mt-4 text-pretty text-sm text-muted-foreground">
          Ainda estou programando esta parte — ou ela nunca existiu.
          <br />
          Still coding this part — or it never existed.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button className="rounded-full" asChild>
            <Link href="/pt">
              <ArrowLeft />
              Voltar ao início
            </Link>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <Link href="/en">Back to home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
