import type { Locale } from "@/i18n.config";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// This would typically come from a database or CMS
const featuredPosts = {
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
    {
      id: 3,
      title: "Configurando uma Arquitetura de Microsserviços com Node.js",
      excerpt:
        "Um guia abrangente para projetar e implementar microsserviços com Node.js.",
      coverImage: "/placeholder.svg?height=400&width=600",
      date: "10 de fevereiro, 2024",
      readTime: "15 min de leitura",
      author: {
        name: "Seu Nome",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SN",
      },
      categories: ["Node.js", "Microsserviços", "Arquitetura"],
    },
  ],
} as const;

export default function FeaturedPosts({ lang }: { lang: Locale }) {
  const posts = featuredPosts[lang] || featuredPosts.en;

  return (
    <>
      {posts.map((post) => (
        <Link key={post.id} href={`/${lang}/blog/${post.id}`} className="group">
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
                  <AvatarFallback>{post.author.initials}</AvatarFallback>
                </Avatar>
                <div className="text-sm font-medium">{post.author.name}</div>
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
    </>
  );
}
