import type { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const techs = [
  {
    name: "React",
    url: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  },
  {
    name: "Next.js",
    url: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
  },
  {
    name: "NestJS",
    url: "https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white",
  },
  {
    name: "TypeScript",
    url: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
  },
  {
    name: "Tailwind CSS",
    url: "https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white",
  },
  {
    name: "Node.js",
    url: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
  },
  {
    name: "PostgreSQL",
    url: "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white",
  },
  {
    name: "GraphQL",
    url: "https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white",
  },
  {
    name: "Jest",
    url: "https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white",
  },
  {
    name: "Docker",
    url: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
  },
  {
    name: "Styled Components",
    url: "https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
  },
  {
    name: "GitLab CI",
    url: "https://img.shields.io/badge/GitLab_CI-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white",
  },
];

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { about, country } = await getDictionary(lang);

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 m-auto">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          {/* Profile Section */}
          <div className="space-y-6">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src="/myseft-real.jpeg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-bold">David Amorim</h1>
              <p className="text-muted-foreground">Fullstack Developer</p>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://github.com/david-as/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              {/* <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button> */}
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/david-as/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:damorim.dev@outlook.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{about.contact}</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="font-medium">{about.email}</span>{" "}
                  damorim.dev@outlook.com
                </li>
                <li>
                  <span className="font-medium">{about.location}</span> Recife,
                  {country.brazil}
                </li>
                {/* <li>
                  <span className="font-medium">{about.availability}</span> Open
                  to opportunities
                </li> */}
              </ul>
            </div>
            <section className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
              <div className="gap-2 flex flex-wrap">
                {techs.map((tech) => (
                  <div key={tech.name} className="relative w-auto h-[32px]">
                    <Image
                      src={tech.url}
                      alt={tech.name}
                      width={132}
                      height={32}
                      className="rounded-md object-cover h-full"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </section>
            {/* <div className="space-y-2">
              <h2 className="text-xl font-semibold">{about.skills}</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>React & Next.js</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Node.js</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>TypeScript</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>React Native</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </div>
            </div> */}
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{about.title}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{about.intro1}</p>
                <p>{about.intro2}</p>
                <p>{about.intro3}</p>
              </div>
            </div>

            {/* <Tabs defaultValue="experience">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="experience">{about.experience}</TabsTrigger>
                <TabsTrigger value="education">{about.education}</TabsTrigger>
                <TabsTrigger value="projects">{about.projects}</TabsTrigger>
              </TabsList>
              <TabsContent value="experience" className="space-y-4 pt-4"> */}
            <div>
              <h3 className="text-3xl font-bold">{about.experience}</h3>
            </div>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Senior Frontend Developer</CardTitle>
                    <CardDescription>Tech Company Inc.</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    2021 - Present
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    Led the development of the company's flagship web
                    application using Next.js and TypeScript
                  </li>
                  <li>
                    Implemented CI/CD pipelines that reduced deployment time by
                    40%
                  </li>
                  <li>Mentored junior developers and conducted code reviews</li>
                  <li>
                    Collaborated with design and product teams to create
                    intuitive user experiences
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Fullstack Developer</CardTitle>
                    <CardDescription>Digital Agency XYZ</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    2018 - 2021
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    Developed and maintained multiple client websites and web
                    applications
                  </li>
                  <li>Built RESTful APIs using Node.js and Express</li>
                  <li>
                    Implemented responsive designs and ensured cross-browser
                    compatibility
                  </li>
                  <li>
                    Worked in an agile environment with two-week sprint cycles
                  </li>
                </ul>
              </CardContent>
            </Card>
            {/* </TabsContent>
              <TabsContent value="education" className="space-y-4 pt-4"> */}
            <div>
              <h3 className="text-3xl font-bold">{about.education}</h3>
            </div>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Master's in Computer Science</CardTitle>
                    <CardDescription>
                      UFRPE - Universidade Federal Rural de Pernambuco
                    </CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    2019 - 2025
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Specialized in Software Engineering with a focus on web
                  technologies and distributed systems. Graduated with honors.
                </p>
              </CardContent>
            </Card>
            {/* <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Bachelor's in Computer Engineering</CardTitle>
                    <CardDescription>University Name</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    2012 - 2016
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Completed coursework in algorithms, data structures, computer
                  architecture, and software development. Participated in
                  various hackathons and coding competitions.
                </p>
              </CardContent>
            </Card> */}
            {/* </TabsContent>
              <TabsContent value="projects" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>E-commerce Platform</CardTitle>
                        <CardDescription>
                          Next.js, Node.js, MongoDB
                        </CardDescription>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      A full-featured e-commerce platform with product
                      management, cart functionality, payment processing, and
                      order tracking. Implemented server-side rendering for SEO
                      optimization.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Task Management App</CardTitle>
                        <CardDescription>
                          React Native, Firebase
                        </CardDescription>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      A cross-platform mobile application for task management
                      with features like task creation, categorization,
                      reminders, and collaboration. Available on both iOS and
                      Android.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Developer Blog</CardTitle>
                        <CardDescription>
                          Next.js, MDX, Tailwind CSS
                        </CardDescription>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      A personal blog built with Next.js and MDX for sharing
                      technical articles and tutorials. Features syntax
                      highlighting, responsive design, and a custom CMS for
                      content management.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs> */}

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{about.getInTouch}</h2>
              <p className="text-muted-foreground">{about.getInTouchDesc}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Button asChild>
                  <Link href="mailto:damorim.dev@outlook.com">
                    <Mail className="mr-2 h-4 w-4" />
                    {about.sendEmail}
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={`/${lang}/contact`}>{about.contactForm}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
