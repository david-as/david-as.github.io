import type { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { Calendar, Clock, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


// This would typically come from a database or CMS
const getBlogPosts = (lang: Locale) => {
  const posts = {
    en: [
      {
        id: 1,
        title: "Building a Full-Stack App with Next.js 14",
        excerpt:
          "Learn how to leverage the latest features in Next.js 14 to build modern web applications.",
        coverImage: "/placeholder.svg?height=400&width=600",
        date: "April 15, 2024",
        readTime: "8 min read",
        author: {
          name: "Your Name",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "YN",
        },
        categories: ["Next.js", "React", "Tutorial"],
      },
      {
        id: 2,
        title: "React Native Best Practices in 2024",
        excerpt:
          "Discover the most effective patterns and practices for building performant mobile apps.",
        coverImage: "/placeholder.svg?height=400&width=600",
        date: "March 28, 2024",
        readTime: "12 min read",
        author: {
          name: "Your Name",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "YN",
        },
        categories: ["React Native", "Mobile", "Performance"],
      },
      {
        id: 3,
        title: "Setting Up a Node.js Microservice Architecture",
        excerpt:
          "A comprehensive guide to designing and implementing microservices with Node.js.",
        coverImage: "/placeholder.svg?height=400&width=600",
        date: "February 10, 2024",
        readTime: "15 min read",
        author: {
          name: "Your Name",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "YN",
        },
        categories: ["Node.js", "Microservices", "Architecture"],
      },
      {
        id: 4,
        title: "TypeScript Tips for React Developers",
        excerpt:
          "Improve your React codebase with these TypeScript patterns and best practices.",
        coverImage: "/placeholder.svg?height=400&width=600",
        date: "January 22, 2024",
        readTime: "10 min read",
        author: {
          name: "Your Name",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "YN",
        },
        categories: ["TypeScript", "React", "Tips"],
      },
    ],
    es: [
      {
        id: 1,
        title: "Construyendo una Aplicación Full-Stack con Next.js 14",
        excerpt:
          "Aprende a aprovechar las últimas características de Next.js 14 para crear aplicaciones web modernas.",
        coverImage: "/placeholder.svg?height=400&width=600",
        date: "15 de abril, 2024",
        readTime: "8 min de lectura",
        author: {
          name: "Tu Nombre",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "TN",
        },
        categories: ["Next.js", "React", "Tutorial"],
      },
      {
        id: 2,
        title: "Mejores Prácticas de React Native en 2024",
        excerpt:
          "Descubre los patrones y prácticas más efectivos para crear aplicaciones móviles de alto rendimiento.",
        coverImage: "/placeholder.svg?height=400&width=600",
        date: "28 de marzo, 2024",
        readTime: "12 min de lectura",
        author: {
          name: "Tu Nombre",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "TN",
        },
        categories: ["React Native", "Móvil", "Rendimiento"],
      },
    ],
    pt: [
      {
        id: 1,
        title: "Construindo um Aplicativo Full-Stack com Next.js 14",
        excerpt:
          "Aprenda a aproveitar os recursos mais recentes do Next.js 14 para criar aplicativos web modernos.",
        coverImage: "/placeholder.svg?height=400&width=600",
        date: "15 de abril, 2024",
        readTime: "8 min de leitura",
        author: {
          name: "Seu Nome",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "SN",
        },
        categories: ["Next.js", "React", "Tutorial"],
      },
      {
        id: 2,
        title: "Melhores Práticas de React Native em 2024",
        excerpt:
          "Descubra os padrões e práticas mais eficazes para criar aplicativos móveis de alto desempenho.",
        coverImage: "/placeholder.svg?height=400&width=600",
        date: "28 de março, 2024",
        readTime: "12 min de leitura",
        author: {
          name: "Seu Nome",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "SN",
        },
        categories: ["React Native", "Mobile", "Desempenho"],
      },
    ],
    fr: [
      {
        id: 1,
        title: "Création d'une Application Full-Stack avec Next.js 14",
        excerpt:
          "Apprenez à tirer parti des dernières fonctionnalités de Next.js 14 pour créer des applications web modernes.",
        coverImage: "/placeholder.svg?height=400&width=600",
        date: "15 avril 2024",
        readTime: "8 min de lecture",
        author: {
          name: "Votre Nom",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "VN",
        },
        categories: ["Next.js", "React", "Tutoriel"],
      },
      {
        id: 2,
        title: "Meilleures Pratiques React Native en 2024",
        excerpt:
          "Découvrez les modèles et pratiques les plus efficaces pour créer des applications mobiles performantes.",
        coverImage: "/placeholder.svg?height=400&width=600",
        date: "28 mars 2024",
        readTime: "12 min de lecture",
        author: {
          name: "Votre Nom",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "VN",
        },
        categories: ["React Native", "Mobile", "Performance"],
      },
    ],
  };

  return posts[lang] || posts.en;
};

export default async function BlogPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { blog } = await getDictionary(lang);
  const blogPosts = getBlogPosts(lang);

  // Get all unique categories
  const allCategories = Array.from(
    new Set(blogPosts.flatMap((post) => post.categories))
  );

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 m-auto">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            {blog.title}
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {blog.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="md:w-3/4">
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder={blog.search}
                className="w-full appearance-none bg-background pl-8 shadow-none"
              />
            </div>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="w-full justify-start overflow-auto py-1">
              <TabsTrigger value="all">{blog.all}</TabsTrigger>
              {allCategories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {blogPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/${lang}/blog/${post.id}`}
                    className="group"
                  >
                    <Card className="h-full overflow-hidden transition-all hover:border-primary">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={post.coverImage || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <div className="space-y-1">
                          <div className="flex flex-wrap gap-2">
                            {post.categories.map((category) => (
                              <Badge
                                key={category}
                                variant="secondary"
                                className="text-xs"
                              >
                                {category}
                              </Badge>
                            ))}
                          </div>
                          <CardTitle className="line-clamp-2 text-xl">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {post.excerpt}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardFooter className="p-4 pt-0 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={post.author.avatar || "/placeholder.svg"}
                              alt={post.author.name}
                            />
                            <AvatarFallback>
                              {post.author.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-sm font-medium">
                            {post.author.name}
                          </div>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          {post.date}
                          <Clock className="ml-2 mr-1 h-3 w-3" />
                          {post.readTime}
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
            {allCategories.map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                  {blogPosts
                    .filter((post) => post.categories.includes(category))
                    .map((post) => (
                      <Link
                        key={post.id}
                        href={`/${lang}/blog/${post.id}`}
                        className="group"
                      >
                        <Card className="h-full overflow-hidden transition-all hover:border-primary">
                          <div className="relative aspect-video overflow-hidden">
                            <Image
                              src={post.coverImage || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <CardHeader className="p-4">
                            <div className="space-y-1">
                              <div className="flex flex-wrap gap-2">
                                {post.categories.map((cat) => (
                                  <Badge
                                    key={cat}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {cat}
                                  </Badge>
                                ))}
                              </div>
                              <CardTitle className="line-clamp-2 text-xl">
                                {post.title}
                              </CardTitle>
                              <CardDescription className="line-clamp-2">
                                {post.excerpt}
                              </CardDescription>
                            </div>
                          </CardHeader>
                          <CardFooter className="p-4 pt-0 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Avatar className="h-8 w-8">
                                <AvatarImage
                                  src={post.author.avatar || "/placeholder.svg"}
                                  alt={post.author.name}
                                />
                                <AvatarFallback>
                                  {post.author.initials}
                                </AvatarFallback>
                              </Avatar>
                              <div className="text-sm font-medium">
                                {post.author.name}
                              </div>
                            </div>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Calendar className="mr-1 h-3 w-3" />
                              {post.date}
                              <Clock className="ml-2 mr-1 h-3 w-3" />
                              {post.readTime}
                            </div>
                          </CardFooter>
                        </Card>
                      </Link>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="flex justify-center mt-8">
            <Button variant="outline">{blog.loadMore}</Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:w-1/4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{blog.categories}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {allCategories.map((category) => (
                  <Badge
                    key={category}
                    variant="outline"
                    className="cursor-pointer hover:bg-muted"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{blog.popularPosts}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {blogPosts.slice(0, 2).map((post) => (
                <Link
                  key={post.id}
                  href={`/${lang}/blog/${post.id}`}
                  className="flex gap-2 group"
                >
                  <div className="relative h-16 w-16 flex-none overflow-hidden rounded-md">
                    <Image
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="font-medium leading-tight group-hover:text-primary line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{blog.newsletter}</CardTitle>
              <CardDescription>{blog.getNotified}</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-2">
                <Input placeholder="Enter your email" type="email" required />
                <Button className="w-full">{blog.subscribe}</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
