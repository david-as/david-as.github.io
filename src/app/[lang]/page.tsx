import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Check,
  GraduationCap,
  Languages,
  Lock,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type React from "react";
import { Github, Linkedin } from "@/components/brand-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getContent, links, stack } from "@/content/profile";
import { hasLocale } from "@/i18n.config";
import { cn } from "@/lib/utils";

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
        {label}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? <p className="text-pretty text-muted-foreground">{description}</p> : null}
    </div>
  );
}

function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 px-4 py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const c = getContent(lang);

  return (
    <div className="relative overflow-x-clip">
      {/* Fundo decorativo */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[52rem]">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute left-1/2 top-[-12rem] h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl dark:bg-primary/15" />
      </div>

      <main>
        {/* Hero */}
        <section className="px-4 pt-32 pb-16 sm:pt-40">
          <div className="mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                {c.hero.eyebrow}
              </span>

              <div className="space-y-4">
                <p className="font-mono text-sm text-muted-foreground">{c.hero.greeting}</p>
                <h1 className="bg-linear-to-br from-foreground via-foreground to-primary bg-clip-text text-5xl font-semibold tracking-tighter text-transparent sm:text-7xl">
                  David Amorim
                </h1>
                <p className="text-balance text-xl font-medium tracking-tight sm:text-2xl">
                  {c.hero.title}
                </p>
                <p className="max-w-xl text-pretty text-muted-foreground">{c.hero.description}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button size="lg" className="rounded-full" asChild>
                  <a href="#contact">
                    {c.hero.ctaContact}
                    <ArrowUpRight />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-background/60"
                  asChild
                >
                  <a href="#experience">
                    {c.hero.ctaExperience}
                    <ArrowDown />
                  </a>
                </Button>
                <div className="flex items-center gap-1 pl-1">
                  <Button size="icon" variant="ghost" className="rounded-full" asChild>
                    <a href={links.github} target="_blank" rel="noopener noreferrer">
                      <Github />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <Button size="icon" variant="ghost" className="rounded-full" asChild>
                    <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xs animate-in lg:max-w-sm fade-in zoom-in-95 duration-1000">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-tr from-primary/30 via-sky-400/20 to-transparent blur-2xl" />
              <div className="group relative overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-2xl shadow-primary/10">
                <Image
                  src="/myself.png"
                  alt="David Amorim"
                  width={1024}
                  height={1536}
                  priority
                  className="aspect-[4/5] w-full object-cover object-top transition-opacity duration-500 group-hover:opacity-0"
                />
                <Image
                  src="/myself-real.jpeg"
                  alt=""
                  aria-hidden
                  width={800}
                  height={800}
                  className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <div className="absolute -bottom-4 left-3 flex sm:-left-4 items-center gap-2 rounded-2xl border border-border/70 bg-background/80 px-4 py-2.5 shadow-lg backdrop-blur-xl">
                <MapPin className="size-4 text-primary" />
                <span className="text-sm font-medium">Paulista, PE</span>
              </div>
            </div>
          </div>

          <dl className="mx-auto mt-20 grid w-full max-w-5xl gap-3 sm:grid-cols-3">
            {c.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse rounded-2xl border border-border/70 bg-card/60 p-5 backdrop-blur"
              >
                <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="mb-1 text-2xl font-semibold tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Sobre */}
        <Section id="about">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading label={c.about.label} title={c.about.title} />
            <div className="space-y-6">
              {c.about.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="text-pretty leading-relaxed text-muted-foreground"
                >
                  {p}
                </p>
              ))}
              <dl className="grid gap-3 pt-2 sm:grid-cols-3">
                {c.about.facts.map((fact) => (
                  <div key={fact.label} className="rounded-xl border bg-card p-4">
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>

        {/* Projetos */}
        <Section id="projects">
          <SectionHeading
            label={c.projects.label}
            title={c.projects.title}
            description={c.projects.description}
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {c.projects.items.map((project, index) => (
              <article
                key={project.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-6 transition-colors hover:border-primary/40 sm:p-8"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 size-56 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-primary">
                    {project.context}
                  </p>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 text-balance text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <ul className="mt-5 space-y-2.5 text-sm">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-pretty">{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="size-3.5" />
            {c.projects.note}
          </p>
        </Section>

        {/* Experiência */}
        <Section id="experience" className="bg-muted/40">
          <SectionHeading label={c.experience.label} title={c.experience.title} />
          <ol className="relative mt-12 space-y-6 border-l border-border pl-6 sm:pl-10">
            {c.experience.jobs.map((job) => (
              <li key={`${job.company}-${job.period}`} className="relative">
                <span
                  className={cn(
                    "absolute -left-[1.94rem] top-6 grid size-3 place-items-center rounded-full border-2 border-background bg-muted-foreground/50 ring-4 ring-background sm:-left-[2.94rem]",
                    job.current && "bg-primary ring-primary/20",
                  )}
                />
                <article
                  className={cn(
                    "rounded-2xl border bg-card p-6 transition-colors hover:border-primary/40",
                    job.current && "border-primary/40 shadow-lg shadow-primary/5",
                  )}
                >
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                    <div>
                      <h3 className="flex flex-wrap items-center gap-2 text-lg font-semibold">
                        {job.role}
                        {job.current ? (
                          <Badge className="rounded-full bg-primary/10 text-primary hover:bg-primary/10">
                            {c.experience.current}
                          </Badge>
                        ) : null}
                      </h3>
                      <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Briefcase className="size-3.5" />
                        {job.company}
                        <span aria-hidden>·</span>
                        {job.location}
                      </p>
                    </div>
                    <p className="font-mono text-xs text-muted-foreground">{job.period}</p>
                  </div>

                  {job.highlights.length > 0 ? (
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </Section>

        {/* Stack */}
        <Section id="stack">
          <SectionHeading
            label={c.stack.label}
            title={c.stack.title}
            description={c.stack.description}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((group) => (
              <div
                key={group.key}
                className="group rounded-2xl border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {c.stack.groups[group.key]}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border bg-background px-3 py-1.5 text-sm font-medium transition-colors group-hover:border-primary/30"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Formação */}
        <Section id="education" className="bg-muted/40">
          <SectionHeading label={c.education.label} title={c.education.title} />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <GraduationCap className="size-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{c.education.degree.course}</h3>
                    <p className="text-sm text-muted-foreground">{c.education.degree.school}</p>
                    <p className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-muted-foreground">
                      {c.education.degree.period}
                      <Badge variant="outline" className="rounded-full font-sans">
                        {c.education.degree.status}
                      </Badge>
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <h3 className="flex items-center gap-2 font-semibold">
                  <Languages className="size-4 text-primary" />
                  {c.education.languagesTitle}
                </h3>
                <ul className="mt-4 space-y-3">
                  {c.education.languages.map((l) => (
                    <li key={l.name} className="flex items-center justify-between text-sm">
                      <span className="font-medium">{l.name}</span>
                      <span className="text-muted-foreground">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="flex items-center gap-2 font-semibold">
                <BadgeCheck className="size-4 text-primary" />
                {c.education.certificationsTitle}
              </h3>
              <ul className="mt-4 divide-y">
                {c.education.certifications.map((cert) => (
                  <li key={cert} className="py-3 text-sm first:pt-0 last:pb-0">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Contato */}
        <Section id="contact">
          <div className="relative overflow-hidden rounded-[2rem] border bg-card px-6 py-14 text-center sm:px-14">
            <div
              aria-hidden
              className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,var(--color-primary)_0%,transparent_60%)] opacity-15"
            />
            <div className="relative mx-auto max-w-2xl space-y-6">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
                {c.contact.label}
              </p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                {c.contact.title}
              </h2>
              <p className="text-pretty text-muted-foreground">{c.contact.description}</p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Button size="lg" className="rounded-full" asChild>
                  <a href={`mailto:${links.email}`}>
                    <Mail />
                    {c.contact.email}
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin />
                    LinkedIn
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <a href={links.github} target="_blank" rel="noopener noreferrer">
                    <Github />
                    GitHub
                  </a>
                </Button>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                {links.email} · {c.contact.location}
              </p>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t px-4 py-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} David Amorim. {c.footer.rights}
          </p>
          <p>{c.footer.built}</p>
        </div>
      </footer>
    </div>
  );
}
