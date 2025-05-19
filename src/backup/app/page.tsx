import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh flex justify-center items-center w-full">
      <Card className="w-fit">
        {/* <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader> */}
        <CardContent className="text-center flex flex-col justify-center items-center pt-6 gap-3">
          <div className="relative aspect-[3/4] w-72 rounded-xl overflow-hidden">
            <Image
              src="/profile-2d.webp"
              alt="Foto de perfil de David Amorim"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="font-bold text-2xl">David Amorim</h1>
          <p className="max-w-72">
            Software Developer crafting innovative and efficient solutions.
          </p>
        </CardContent>
        {/* <CardFooter className="flex justify-center gap-3">
          <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
            <Link
              href={"https://github.com/david-as/"}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.gitHub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
            <Link
              href={"https://github.com/david-as/"}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.gitHub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
            <Link
              href={"https://github.com/david-as/"}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.gitHub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
        </CardFooter> */}
      </Card>
    </main>
  );
}
