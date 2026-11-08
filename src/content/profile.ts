import type { Locale } from "@/i18n.config";

export const links = {
  email: "damorim.dev@outlook.com",
  github: "https://github.com/david-as",
  linkedin: "https://www.linkedin.com/in/david-as/",
} as const;

export const stack = [
  {
    key: "frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Astro",
      "Tailwind CSS",
      "shadcn/ui",
      "SASS",
      "Ant Design",
    ],
  },
  {
    key: "backend",
    items: [
      "Node.js",
      "NestJS",
      "GraphQL",
      "gRPC",
      "tRPC",
      "REST",
      "Ruby on Rails",
      "Prisma",
      "PostgreSQL",
    ],
  },
  { key: "state", items: ["Redux", "Zustand", "Jotai", "TanStack Query", "Apollo Client"] },
  { key: "dataviz", items: ["ApexCharts", "Mapbox", "amCharts", "D3"] },
  { key: "mobile", items: ["React Native"] },
  {
    key: "tooling",
    items: [
      "Turborepo",
      "pnpm",
      "Changesets",
      "Storybook",
      "Vitest",
      "Jest",
      "Playwright",
      "Biome",
      "Docker",
      "GitLab CI",
      "Sentry",
    ],
  },
] as const;

export type StackKey = (typeof stack)[number]["key"];

type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: string[];
  tags: string[];
};

type Project = {
  context: string;
  title: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

type Content = {
  meta: { title: string; description: string };
  nav: { about: string; projects: string; experience: string; stack: string; contact: string };
  hero: {
    eyebrow: string;
    greeting: string;
    title: string;
    description: string;
    ctaContact: string;
    ctaExperience: string;
    stats: { value: string; label: string }[];
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  projects: { label: string; title: string; description: string; note: string; items: Project[] };
  experience: { label: string; title: string; current: string; jobs: Job[] };
  stack: { label: string; title: string; description: string; groups: Record<StackKey, string> };
  education: {
    label: string;
    title: string;
    degree: { school: string; course: string; period: string; status: string };
    certificationsTitle: string;
    certifications: string[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
  };
  contact: {
    label: string;
    title: string;
    description: string;
    email: string;
    location: string;
  };
  footer: { rights: string; built: string };
};

export const content: Record<Locale, Content> = {
  pt: {
    meta: {
      title: "David Amorim · Software Engineer",
      description:
        "Software Engineer com mais de seis anos em tecnologia, focado em React, Next.js, TypeScript e NestJS.",
    },
    nav: {
      about: "Sobre",
      projects: "Projetos",
      experience: "Experiência",
      stack: "Stack",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Software Engineer na FCx Labs",
      greeting: "Olá, eu sou",
      title: "Construo produtos web e mobile de ponta a ponta.",
      description:
        "Engenheiro de software full-stack em Pernambuco, especializado em React, Next.js, TypeScript e NestJS. Gosto de interfaces bem cuidadas, código legível e plataformas que escalam.",
      ctaContact: "Vamos conversar",
      ctaExperience: "Ver experiência",
      stats: [
        { value: "6+", label: "anos em tecnologia" },
        { value: "Web & Mobile", label: "React e React Native" },
        { value: "Full-stack", label: "do front ao back" },
      ],
    },
    about: {
      label: "Sobre",
      title: "Do suporte técnico à engenharia de software",
      paragraphs: [
        "Comecei na tecnologia cuidando de redes, servidores e suporte. Essa base de infraestrutura ainda influencia como penso software: estável, observável e fácil de manter.",
        "Desde 2019 desenvolvo aplicações web e mobile. Na TrackingTrade, por mais de três anos, levei React, Next.js e TypeScript para o centro do desenvolvimento, com gerenciamento de estado em Redux, Zustand e Jotai, interfaces em SASS e Ant Design, dados via GraphQL e lógica de servidor em Node.js, além de implantar um monorepo com Turborepo.",
        "Hoje sou Software Engineer na FCx Labs, onde trabalho com design system, tokens e padronização de plataforma para os produtos de marketplace. Também curso Licenciatura em Computação na UFRPE, o que alimenta meu interesse por ensino e robótica.",
      ],
      facts: [
        { label: "Localização", value: "Paulista, PE · Brasil" },
        { label: "Foco", value: "React · Next.js · NestJS" },
        { label: "Idiomas", value: "Português · Inglês" },
      ],
    },
    projects: {
      label: "Projetos",
      title: "Trabalhos em destaque",
      description:
        "Uma seleção de produtos em que trabalhei. Por confidencialidade, clientes e empresas parceiras são descritos pelo segmento.",
      note: "Código proprietário — detalhes sob NDA.",
      items: [
        {
          context: "FCx Labs · Design system",
          title: "Modernização do design system e tokens",
          summary:
            "Planejei e executei, em etapas, a modernização do design system usado pelos produtos de marketplace, da biblioteca de componentes à camada de tokens.",
          highlights: [
            "styled-components → SCSS com validação visual de 0 px de diferença, e a lib removida do design system.",
            "Padronização de camadas CSS (@layer) validada por diff de estilo computado em 331 stories com Playwright.",
            "Remoção do pacote de tema legado: de-para de 622 variáveis CSS; no principal consumidor, 513 arquivos SCSS migrados com o CSS compilado idêntico em 498 de 511.",
            "Pacotes de fundação 1.0: tokens para CSS, SCSS, CSS-in-JS e React Native, 9.878 ícones, 325 ilustrações e logos.",
            "Arquitetura de pacotes sem CSS duplicado entre componentes primitivos e compostos, versionada com Changesets.",
          ],
          tags: ["React", "SCSS", "Storybook", "Playwright", "Changesets", "pnpm"],
        },
        {
          context: "FCx Labs · Plataforma",
          title: "Padronização de CI em ~19 repositórios",
          summary:
            "Unifiquei os pipelines dos backends NestJS, lambdas e workers do seller center em um único padrão.",
          highlights: [
            "Install único com pnpm e cache do Turbo com poda.",
            "Lint e typecheck com regra clara — erro bloqueia, warning sinaliza — e erros pré-existentes corrigidos.",
            "Scans de segurança (SAST/SCA) em todos os repositórios, chegando a zero CVEs críticas.",
            "Documentação de APIs centralizada no Backstage/TechDocs no lugar do Compodoc.",
          ],
          tags: ["GitLab CI", "NestJS", "pnpm", "Turborepo", "Backstage"],
        },
        {
          context: "Marketing digital",
          title: "Monorepo de sites e captação de leads",
          summary:
            "Criei do zero o monorepo que concentra os sites de marketing de uma empresa de atuação nacional e de seus parceiros, e fui um dos dois principais desenvolvedores ao longo de quase dois anos.",
          highlights: [
            "21 aplicações (Next.js e Astro) sobre uma camada compartilhada de UI, hooks, utilitários e configs — 14 sites de parceiros, 4 sites de SEO e apps dedicados.",
            "Migração de sites do Webflow para Next.js, com sitemap e SEO preservados.",
            "Recursos de compliance e acessibilidade escritos uma vez e distribuídos a todos os sites: avisos regulatórios, consentimento de cookies, Libras (HandTalk) e rate limiting de formulários.",
            "Padronização de versões, migração npm → pnpm com catalogs e upgrade de todos os apps para Next.js 14.",
          ],
          tags: ["Turborepo", "pnpm", "Next.js", "Astro", "tRPC", "Tailwind CSS", "Vercel"],
        },
        {
          context: "Plataforma de trade marketing",
          title: "Construtor de dashboards self-service",
          summary:
            "Feature central de um back-office usado por marcas e agências para acompanhar equipes de campo no varejo: o usuário monta seus próprios painéis de BI.",
          highlights: [
            "Grid com arrastar e redimensionar, páginas, cards de gráfico, filtro, texto, imagem e galeria de fotos.",
            "15 tipos de gráfico após migrar a biblioteca de Nivo para ApexCharts.",
            "Compartilhamento com permissões, modo somente leitura, clonagem e paletas de cor editáveis.",
            "Estado do painel na URL e cache próprio em IndexedDB para reduzir requisições.",
          ],
          tags: ["React", "Redux", "ApexCharts", "IndexedDB", "Ant Design"],
        },
        {
          context: "Site corporativo",
          title: "Site institucional e relatório ESG",
          summary:
            "Desenvolvimento contínuo do site principal da empresa em Next.js 14, assumindo seções inteiras de ponta a ponta.",
          highlights: [
            "Relatório de sustentabilidade com matriz de materialidade interativa.",
            "Mapa dinâmico da rede de franquias (amCharts e depois D3) com otimizações de Lighthouse.",
            "Hub de vídeos e páginas de parcerias com formulários validados com zod, integrados ao CRM e protegidos por rate limiting.",
          ],
          tags: ["Next.js", "TypeScript", "D3", "zod", "Upstash"],
        },
        {
          context: "Grandes clientes do varejo e do agro",
          title: "Plataformas web para clientes enterprise",
          summary:
            "Aplicações sob medida para multinacionais e grandes varejistas, de um app criado do zero em 2022 a produtos em Next.js 14.",
          highlights: [
            "Notificações, menções e chat em tempo real (ActionCable) e filtros sincronizados com a URL.",
            "Mapas com clusterização por região (Mapbox), mapa de calor de produtos e exportação em PDF.",
            "Cadastros com geração de QR code para ativos e locais.",
            "Upgrade de Next.js 13.5 → 14 e início de um design system compartilhado com shadcn/ui.",
          ],
          tags: ["Next.js", "Apollo GraphQL", "Mapbox", "shadcn/ui", "Zustand"],
        },
      ],
    },
    experience: {
      label: "Experiência",
      title: "Onde tenho trabalhado",
      current: "Atual",
      jobs: [
        {
          company: "FCx Labs",
          role: "Software Engineer",
          period: "jan 2025 — atual",
          location: "Recife, PE",
          current: true,
          highlights: [
            "Modernização do design system dos produtos de marketplace: styled-components → SCSS, camadas CSS com @layer e remoção do pacote de tema legado.",
            "Pacotes de fundação 1.0 (tokens de cor, layout e fonte, ícones, ilustrações e logos) para web e React Native.",
            "Migração do seller center para o novo design system e troca do cliente HTTP baseado em axios por fetch nativo.",
            "Padronização de CI em ~19 repositórios de backend NestJS com pnpm, Turbo e scans de segurança.",
            "Microsserviços com REST e gRPC, testes com Jest e Playwright e observabilidade com Prometheus, Sentry e New Relic.",
            "Participação em decisões técnicas e mentoria de devs juniores.",
          ],
          tags: ["React", "Next.js", "NestJS", "SCSS", "Storybook", "Playwright", "GitLab CI"],
        },
        {
          company: "TrackingTrade",
          role: "Software Engineer",
          period: "abr 2021 — nov 2024",
          location: "Recife, PE",
          highlights: [
            "Construtor de dashboards self-service (BI) para uma plataforma de trade marketing: grid arrastável, 15 tipos de gráfico, compartilhamento com permissões e cache em IndexedDB.",
            "Aplicações Next.js 14 para grandes clientes do varejo, com notificações e chat em tempo real, filtros sincronizados na URL e mapas com clusterização.",
            "Modernização de código legado (webpack 3→4, Node 10→16) e upgrades de Next.js 13→14.",
            "Integração com APIs REST e GraphQL (Apollo + codegen), incluindo assinaturas em tempo real, e contribuições no backend em Ruby on Rails.",
            "Aplicações mobile com React Native e implantação de monorepo com Turborepo.",
          ],
          tags: ["React", "Next.js", "TypeScript", "GraphQL", "ApexCharts", "Mapbox"],
        },
        {
          company: "STILabs · UFPE",
          role: "Estágio em Desenvolvimento de Software",
          period: "nov 2020 — abr 2021",
          location: "Recife, PE",
          highlights: [
            "Aplicação web com React, SASS e Spring Boot.",
            "Práticas de Lean Inception para planejamento ágil.",
          ],
          tags: ["React", "SASS", "Spring Boot"],
        },
        {
          company: "HAUT | Incorporadora Design",
          role: "Analista de TI e Desenvolvimento",
          period: "jul 2019 — dez 2020",
          location: "Recife, PE",
          highlights: [
            "Websites, app e landing pages com React, React Native e Node.js.",
            "Reestruturação de rede interna, servidores e firewall para aumentar a segurança.",
            "Gerenciamento de servidores locais e em nuvem.",
          ],
          tags: ["React", "React Native", "Node.js", "Infra"],
        },
        {
          company: "Varejão do Estudante",
          role: "Suporte Técnico",
          period: "out 2015 — mar 2018",
          location: "Recife, PE",
          highlights: [
            "Gerenciamento de e-commerce e relatórios em COBOL.",
            "Suporte a usuários e servidores, redes e infraestrutura de TI.",
          ],
          tags: ["COBOL", "Redes"],
        },
        {
          company: "IBGM",
          role: "Técnico de Suporte de Informática",
          period: "mai 2013 — jan 2014",
          location: "Recife, PE",
          highlights: ["Manutenção de equipamentos, redes internas e suporte aos colaboradores."],
          tags: ["Suporte", "Redes"],
        },
      ],
    },
    stack: {
      label: "Stack",
      title: "Ferramentas do dia a dia",
      description: "Tecnologias que uso para tirar ideias do papel, do layout ao deploy.",
      groups: {
        frontend: "Frontend",
        mobile: "Mobile",
        backend: "Backend & APIs",
        state: "Estado & dados",
        dataviz: "Gráficos & mapas",
        tooling: "Tooling & DevOps",
      },
    },
    education: {
      label: "Formação",
      title: "Aprendizado contínuo",
      degree: {
        school: "Universidade Federal Rural de Pernambuco",
        course: "Licenciatura em Computação",
        period: "out 2020 — dez 2026",
        status: "Em conclusão",
      },
      certificationsTitle: "Certificações",
      certifications: [
        "Decola Tech",
        "Avanade CodeAnywhere .NET",
        "React e TypeScript: Desenvolvendo um Dashboard",
        "Eduzz Fullstack Developer",
        "Inter Frontend Developer",
      ],
      languagesTitle: "Idiomas",
      languages: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Profissional" },
      ],
    },
    contact: {
      label: "Contato",
      title: "Tem um projeto ou uma vaga em mente?",
      description:
        "Estou aberto a conversar sobre novas oportunidades, parcerias e ideias. A forma mais rápida de falar comigo é por e-mail ou LinkedIn.",
      email: "Enviar e-mail",
      location: "Paulista, Pernambuco · Brasil",
    },
    footer: { rights: "Todos os direitos reservados.", built: "Feito com Next.js e Tailwind CSS." },
  },
  en: {
    meta: {
      title: "David Amorim · Software Engineer",
      description:
        "Software Engineer with 6+ years in tech, focused on React, Next.js, TypeScript and NestJS.",
    },
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      stack: "Stack",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Software Engineer at FCx Labs",
      greeting: "Hi, I'm",
      title: "I build web and mobile products end to end.",
      description:
        "Full-stack software engineer based in Pernambuco, Brazil, specialized in React, Next.js, TypeScript and NestJS. I care about polished interfaces, readable code and platforms that scale.",
      ctaContact: "Let's talk",
      ctaExperience: "See experience",
      stats: [
        { value: "6+", label: "years in tech" },
        { value: "Web & Mobile", label: "React and React Native" },
        { value: "Full-stack", label: "front to back" },
      ],
    },
    about: {
      label: "About",
      title: "From IT support to software engineering",
      paragraphs: [
        "I started in tech taking care of networks, servers and support. That infrastructure background still shapes how I think about software: stable, observable and easy to maintain.",
        "I've been building web and mobile apps since 2019. At TrackingTrade, for over three years, I brought React, Next.js and TypeScript to the core of development, with state management in Redux, Zustand and Jotai, UIs in SASS and Ant Design, data through GraphQL and server logic in Node.js, and set up a Turborepo monorepo.",
        "Today I'm a Software Engineer at FCx Labs, working on the design system, design tokens and platform standardization for the marketplace products. I'm also finishing a degree in Computing Education at UFRPE, which feeds my interest in teaching and robotics.",
      ],
      facts: [
        { label: "Location", value: "Paulista, PE · Brazil" },
        { label: "Focus", value: "React · Next.js · NestJS" },
        { label: "Languages", value: "Portuguese · English" },
      ],
    },
    projects: {
      label: "Projects",
      title: "Selected work",
      description:
        "A selection of products I've worked on. For confidentiality, clients and partner companies are described by industry.",
      note: "Proprietary code — details under NDA.",
      items: [
        {
          context: "FCx Labs · Design system",
          title: "Design system & tokens modernization",
          summary:
            "I planned and carried out, step by step, the modernization of the design system behind the marketplace products, from the component library to the token layer.",
          highlights: [
            "styled-components → SCSS with 0 px visual diffs, and the library removed from the design system.",
            "CSS cascade layers (@layer) standardized and validated by computed-style diffs across 331 stories with Playwright.",
            "Removed the legacy theme package: mapped 622 CSS variables; in the main consumer, 513 SCSS files migrated with identical compiled CSS in 498 of 511.",
            "Foundation packages 1.0: tokens for CSS, SCSS, CSS-in-JS and React Native, 9,878 icons, 325 illustrations and logos.",
            "Package architecture with no duplicated CSS between primitive and composite components, versioned with Changesets.",
          ],
          tags: ["React", "SCSS", "Storybook", "Playwright", "Changesets", "pnpm"],
        },
        {
          context: "FCx Labs · Platform",
          title: "CI standardization across ~19 repositories",
          summary:
            "I unified the pipelines of the seller center's NestJS backends, lambdas and workers into a single standard.",
          highlights: [
            "Single pnpm install and a pruned Turbo cache.",
            "Lint and typecheck with a clear rule — errors block, warnings flag — with pre-existing errors fixed.",
            "Security scans (SAST/SCA) on every repository, reaching zero critical CVEs.",
            "API docs centralized in Backstage/TechDocs instead of Compodoc.",
          ],
          tags: ["GitLab CI", "NestJS", "pnpm", "Turborepo", "Backstage"],
        },
        {
          context: "Digital marketing",
          title: "Marketing sites & lead-capture monorepo",
          summary:
            "I created from scratch the monorepo that hosts the marketing sites of a nationwide company and its partners, and was one of its two main developers for almost two years.",
          highlights: [
            "21 apps (Next.js and Astro) on a shared layer of UI, hooks, utilities and configs — 14 partner sites, 4 SEO sites and dedicated apps.",
            "Migrated sites from Webflow to Next.js while preserving sitemaps and SEO.",
            "Compliance and accessibility features written once and shipped to every site: regulatory disclosures, cookie consent, sign language (HandTalk) and form rate limiting.",
            "Aligned dependency versions, moved npm → pnpm with catalogs and upgraded every app to Next.js 14.",
          ],
          tags: ["Turborepo", "pnpm", "Next.js", "Astro", "tRPC", "Tailwind CSS", "Vercel"],
        },
        {
          context: "Trade-marketing platform",
          title: "Self-service dashboard builder",
          summary:
            "Core feature of a back-office used by brands and agencies to manage retail field teams: users build their own BI dashboards.",
          highlights: [
            "Drag-and-resize grid, pages, and chart, filter, text, image and photo-gallery cards.",
            "15 chart types after migrating the chart library from Nivo to ApexCharts.",
            "Permission-based sharing, read-only mode, cloning and editable color palettes.",
            "Dashboard state in the URL and a custom IndexedDB cache to cut down requests.",
          ],
          tags: ["React", "Redux", "ApexCharts", "IndexedDB", "Ant Design"],
        },
        {
          context: "Corporate website",
          title: "Corporate website & ESG report",
          summary:
            "Ongoing development of the company's main website in Next.js 14, owning whole sections end to end.",
          highlights: [
            "Sustainability report with an interactive materiality matrix.",
            "Dynamic franchise-network map (amCharts, later D3) with Lighthouse optimizations.",
            "Video hub and partnership pages with zod-validated forms wired to the CRM and protected by rate limiting.",
          ],
          tags: ["Next.js", "TypeScript", "D3", "zod", "Upstash"],
        },
        {
          context: "Large retail & agribusiness clients",
          title: "Web platforms for enterprise clients",
          summary:
            "Custom apps for multinationals and large retailers, from a greenfield build in 2022 to Next.js 14 products.",
          highlights: [
            "Real-time notifications, mentions and chat (ActionCable) and URL-synced filters.",
            "Region-clustered maps (Mapbox), product heat tables and PDF export.",
            "CRUD modules with QR-code generation for assets and locations.",
            "Next.js 13.5 → 14 upgrade and the start of a shared shadcn/ui design system.",
          ],
          tags: ["Next.js", "Apollo GraphQL", "Mapbox", "shadcn/ui", "Zustand"],
        },
      ],
    },
    experience: {
      label: "Experience",
      title: "Where I've been working",
      current: "Current",
      jobs: [
        {
          company: "FCx Labs",
          role: "Software Engineer",
          period: "Jan 2025 — present",
          location: "Recife, Brazil",
          current: true,
          highlights: [
            "Modernizing the design system behind the marketplace products: styled-components → SCSS, CSS cascade layers and removal of the legacy theme package.",
            "Foundation packages 1.0 (color, layout and font tokens, icons, illustrations and logos) for web and React Native.",
            "Migrated the seller center to the new design system and replaced the axios-based HTTP client with native fetch.",
            "Standardized CI across ~19 NestJS backend repositories with pnpm, Turbo and security scans.",
            "Microservices with REST and gRPC, tests with Jest and Playwright, and observability with Prometheus, Sentry and New Relic.",
            "Taking part in technical decisions and mentoring junior developers.",
          ],
          tags: ["React", "Next.js", "NestJS", "SCSS", "Storybook", "Playwright", "GitLab CI"],
        },
        {
          company: "TrackingTrade",
          role: "Software Engineer",
          period: "Apr 2021 — Nov 2024",
          location: "Recife, Brazil",
          highlights: [
            "Self-service dashboard builder (BI) for a trade-marketing platform: drag-and-drop grid, 15 chart types, permission-based sharing and an IndexedDB cache.",
            "Next.js 14 apps for large retail clients, with real-time notifications and chat, URL-synced filters and clustered maps.",
            "Legacy modernization (webpack 3→4, Node 10→16) and Next.js 13→14 upgrades.",
            "REST and GraphQL integrations (Apollo + codegen), including real-time subscriptions, plus backend contributions in Ruby on Rails.",
            "Mobile apps with React Native and a Turborepo monorepo setup.",
          ],
          tags: ["React", "Next.js", "TypeScript", "GraphQL", "ApexCharts", "Mapbox"],
        },
        {
          company: "STILabs · UFPE",
          role: "Software Developer Intern",
          period: "Nov 2020 — Apr 2021",
          location: "Recife, Brazil",
          highlights: [
            "Web application with React, SASS and Spring Boot.",
            "Lean Inception practices for agile planning.",
          ],
          tags: ["React", "SASS", "Spring Boot"],
        },
        {
          company: "HAUT | Incorporadora Design",
          role: "IT & Development Analyst",
          period: "Jul 2019 — Dec 2020",
          location: "Recife, Brazil",
          highlights: [
            "Websites, app and landing pages with React, React Native and Node.js.",
            "Restructured internal network, servers and firewall to improve security.",
            "Managed on-premise and cloud servers.",
          ],
          tags: ["React", "React Native", "Node.js", "Infra"],
        },
        {
          company: "Varejão do Estudante",
          role: "Technical Support",
          period: "Oct 2015 — Mar 2018",
          location: "Recife, Brazil",
          highlights: [
            "Managed e-commerce operations and COBOL reports.",
            "User and server support, networking and IT infrastructure.",
          ],
          tags: ["COBOL", "Networking"],
        },
        {
          company: "IBGM",
          role: "IT Support Technician",
          period: "May 2013 — Jan 2014",
          location: "Recife, Brazil",
          highlights: ["Hardware maintenance, internal networks and staff support."],
          tags: ["Support", "Networking"],
        },
      ],
    },
    stack: {
      label: "Stack",
      title: "Everyday toolkit",
      description: "Technologies I use to take ideas off paper, from layout to deploy.",
      groups: {
        frontend: "Frontend",
        mobile: "Mobile",
        backend: "Backend & APIs",
        state: "State & data",
        dataviz: "Charts & maps",
        tooling: "Tooling & DevOps",
      },
    },
    education: {
      label: "Education",
      title: "Always learning",
      degree: {
        school: "Federal Rural University of Pernambuco (UFRPE)",
        course: "B.Ed. in Computing",
        period: "Oct 2020 — Dec 2026",
        status: "Finishing",
      },
      certificationsTitle: "Certifications",
      certifications: [
        "Decola Tech",
        "Avanade CodeAnywhere .NET",
        "React and TypeScript: Building a Dashboard",
        "Eduzz Fullstack Developer",
        "Inter Frontend Developer",
      ],
      languagesTitle: "Languages",
      languages: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Professional" },
      ],
    },
    contact: {
      label: "Contact",
      title: "Have a project or a role in mind?",
      description:
        "I'm open to talking about new opportunities, partnerships and ideas. The fastest way to reach me is by email or LinkedIn.",
      email: "Send an email",
      location: "Paulista, Pernambuco · Brazil",
    },
    footer: { rights: "All rights reserved.", built: "Built with Next.js and Tailwind CSS." },
  },
};

export function getContent(locale: Locale) {
  return content[locale];
}
