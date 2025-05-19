// "use client";

import type { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { Calendar, Clock, Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { i18n } from "@/i18n.config";
import { notFound } from "next/navigation";

// Add this function before the BlogPage component
export async function generateStaticParams() {
  // Get all languages
  const languages = i18n.locales;

  // Get all blog posts for each language
  const params = languages.flatMap((lang) => {
    const posts = getBlogPosts(lang);
    return posts.map((post) => ({
      lang: lang,
      id: post.id.toString(),
    }));
  });

  return params;
}

// This would typically come from a database or CMS
const getBlogPosts = (lang: Locale) => {
  const posts = {
    en: [
      {
        id: "1",
        title: "Building a Full-Stack App with Next.js 14",
        excerpt:
          "Learn how to leverage the latest features in Next.js 14 to build modern web applications.",
        content: `
          <p>Next.js 14 introduces several new features that make building full-stack applications easier and more efficient than ever before. In this comprehensive guide, we'll explore how to leverage these features to create a modern web application.</p>
          
          <h2>Server Components</h2>
          <p>React Server Components are a game-changer for full-stack development. They allow you to write components that run exclusively on the server, reducing the JavaScript bundle sent to the client and improving performance.</p>
          
          <pre><code>// app/page.tsx
export default async function Page() {
  // This component runs on the server
  const data = await fetchData()
  return <MyComponent data={data} />
}</code></pre>

          <h2>Data Fetching</h2>
          <p>Next.js 14 simplifies data fetching with built-in functions that work seamlessly with Server Components:</p>
          
          <pre><code>// Fetching data in a Server Component
async function getData() {
  const res = await fetch('https://api.example.com/data')
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main>{/* Use data */}</main>
}</code></pre>

          <h2>Server Actions</h2>
          <p>Server Actions allow you to define server-side functions that can be called from the client, making form handling and data mutations much simpler:</p>
          
          <pre><code>// Server Action for form submission
'use server'

async function createItem(formData: FormData) {
  const name = formData.get('name')
  const description = formData.get('description')
  
  // Validate the data
  if (!name || !description) {
    return { error: 'Name and description are required' }
  }
  
  // Save to database
  await db.items.create({ name, description })
  
  return { success: true }
}</code></pre>

          <h2>Routing and Layouts</h2>
          <p>The App Router in Next.js 14 provides a powerful way to organize your application with nested layouts and routes:</p>
          
          <pre><code>// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}</code></pre>

          <h2>Conclusion</h2>
          <p>Next.js 14 brings together the best of React and server-side rendering, making it an excellent choice for building modern full-stack applications. By leveraging Server Components, simplified data fetching, and Server Actions, you can create fast, scalable, and maintainable web applications.</p>
        `,
        coverImage: "/placeholder.svg?height=600&width=1200",
        date: "April 15, 2024",
        readTime: "8 min read",
        author: {
          name: "Your Name",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "YN",
          bio: "Fullstack developer passionate about React, Next.js, and building great user experiences.",
        },
        categories: ["Next.js", "React", "Tutorial"],
      },
      {
        id: "2",
        title: "React Native Best Practices in 2024",
        excerpt:
          "Discover the most effective patterns and practices for building performant mobile apps.",
        content: `
          <p>React Native continues to evolve, and in 2024, there are several best practices that can help you build high-performance, maintainable mobile applications. This guide covers the most important patterns and techniques to adopt in your React Native projects.</p>
          
          <h2>Performance Optimization</h2>
          <p>Performance is critical for mobile applications. Here are some key strategies to optimize your React Native app:</p>
          
          <h3>1. Use Memoization</h3>
          <p>Leverage React's memoization features to prevent unnecessary re-renders:</p>
          
          <pre><code>import { memo, useMemo, useCallback } from 'react';

// Memoize a component
const MemoizedComponent = memo(MyComponent);

function ParentComponent() {
  // Memoize a value
  const expensiveValue = useMemo(() => computeExpensiveValue(), [dependency]);
  
  // Memoize a callback
  const handlePress = useCallback(() => {
    // Handle the press event
  }, [dependency]);
  
  return <MemoizedComponent value={expensiveValue} onPress={handlePress} />;
}</code></pre>

          <h3>2. Optimize List Rendering</h3>
          <p>When rendering lists, use FlatList or SectionList instead of map() for better performance:</p>
          
          <pre><code>import { FlatList } from 'react-native';

function MyList({ data }) {
  const renderItem = ({ item }) => <ItemComponent item={item} />;
  
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
    />
  );
}</code></pre>

          <h2>State Management</h2>
          <p>Choose the right state management solution based on your app's complexity:</p>
          
          <h3>1. Context API for Simple State</h3>
          <p>For simpler applications, React's Context API can be sufficient:</p>
          
          <pre><code>// ThemeContext.js
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}</code></pre>

          <h3>2. Redux Toolkit for Complex State</h3>
          <p>For more complex applications, Redux Toolkit provides a more structured approach:</p>
          
          <pre><code>// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId) => {
    const response = await api.fetchUser(userId);
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});</code></pre>

          <h2>Navigation</h2>
          <p>React Navigation is the standard for handling navigation in React Native apps:</p>
          
          <pre><code>// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}</code></pre>

          <h2>Conclusion</h  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}</code></pre>

          <h2>Conclusion</h2>
          <p>By following these best practices for React Native development in 2024, you can create mobile applications that are performant, maintainable, and provide an excellent user experience. Focus on performance optimization, choose the right state management solution for your needs, and implement proper navigation patterns to build successful React Native apps.</p>
        `,
        coverImage: "/placeholder.svg?height=600&width=1200",
        date: "March 28, 2024",
        readTime: "12 min read",
        author: {
          name: "Your Name",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "YN",
          bio: "Mobile developer specializing in React Native and cross-platform solutions.",
        },
        categories: ["React Native", "Mobile", "Performance"],
      },
    ],
    es: [
      {
        id: "1",
        title: "Construyendo una Aplicación Full-Stack con Next.js 14",
        excerpt:
          "Aprende a aprovechar las últimas características de Next.js 14 para crear aplicaciones web modernas.",
        content: `
          <p>Next.js 14 introduce varias características nuevas que hacen que la creación de aplicaciones full-stack sea más fácil y eficiente que nunca. En esta guía completa, exploraremos cómo aprovechar estas características para crear una aplicación web moderna.</p>
          
          <h2>Componentes de Servidor</h2>
          <p>Los Componentes de Servidor de React son un cambio revolucionario para el desarrollo full-stack. Te permiten escribir componentes que se ejecutan exclusivamente en el servidor, reduciendo el paquete JavaScript enviado al cliente y mejorando el rendimiento.</p>
          
          <pre><code>// app/page.tsx
export default async function Page() {
  // Este componente se ejecuta en el servidor
  const data = await fetchData()
  return <MyComponent data={data} />
}</code></pre>

          <h2>Obtención de Datos</h2>
          <p>Next.js 14 simplifica la obtención de datos con funciones incorporadas que funcionan perfectamente con los Componentes de Servidor:</p>
          
          <pre><code>// Obtención de datos en un Componente de Servidor
async function getData() {
  const res = await fetch('https://api.example.com/data')
  
  if (!res.ok) {
    throw new Error('Error al obtener datos')
  }
  
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main>{/* Usar datos */}</main>
}</code></pre>

          <h2>Acciones de Servidor</h2>
          <p>Las Acciones de Servidor te permiten definir funciones del lado del servidor que pueden ser llamadas desde el cliente, haciendo que el manejo de formularios y las mutaciones de datos sean mucho más simples:</p>
          
          <pre><code>// Acción de Servidor para envío de formulario
'use server'

async function createItem(formData: FormData) {
  const name = formData.get('name')
  const description = formData.get('description')
  
  // Validar los datos
  if (!name || !description) {
    return { error: 'El nombre y la descripción son obligatorios' }
  }
  
  // Guardar en la base de datos
  await db.items.create({ name, description })
  
  return { success: true }
}</code></pre>

          <h2>Enrutamiento y Layouts</h2>
          <p>El App Router en Next.js 14 proporciona una forma poderosa de organizar tu aplicación con layouts y rutas anidadas:</p>
          
          <pre><code>// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}</code></pre>

          <h2>Conclusión</h2>
          <p>Next.js 14 combina lo mejor de React y el renderizado del lado del servidor, convirtiéndolo en una excelente opción para construir aplicaciones full-stack modernas. Al aprovechar los Componentes de Servidor, la obtención de datos simplificada y las Acciones de Servidor, puedes crear aplicaciones web rápidas, escalables y mantenibles.</p>
        `,
        coverImage: "/placeholder.svg?height=600&width=1200",
        date: "15 de abril, 2024",
        readTime: "8 min de lectura",
        author: {
          name: "Tu Nombre",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "TN",
          bio: "Desarrollador fullstack apasionado por React, Next.js y la creación de excelentes experiencias de usuario.",
        },
        categories: ["Next.js", "React", "Tutorial"],
      },
    ],
    pt: [
      {
        id: "1",
        title: "Construindo um Aplicativo Full-Stack com Next.js 14",
        excerpt:
          "Aprenda a aproveitar os recursos mais recentes do Next.js 14 para criar aplicativos web modernos.",
        content: `
          <p>O Next.js 14 introduz vários novos recursos que tornam a construção de aplicativos full-stack mais fácil e eficiente do que nunca. Neste guia abrangente, exploraremos como aproveitar esses recursos para criar um aplicativo web moderno.</p>
          
          <h2>Componentes de Servidor</h2>
          <p>Os Componentes de Servidor do React são um divisor de águas para o desenvolvimento full-stack. Eles permitem que você escreva componentes que são executados exclusivamente no servidor, reduzindo o pacote JavaScript enviado ao cliente e melhorando o desempenho.</p>
          
          <pre><code>// app/page.tsx
export default async function Page() {
  // Este componente é executado no servidor
  const data = await fetchData()
  return <MyComponent data={data} />
}</code></pre>

          <h2>Busca de Dados</h2>
          <p>O Next.js 14 simplifica a busca de dados com funções integradas que funcionam perfeitamente com os Componentes de Servidor:</p>
          
          <pre><code>// Buscando dados em um Componente de Servidor
async function getData() {
  const res = await fetch('https://api.example.com/data')
  
  if (!res.ok) {
    throw new Error('Falha ao buscar dados')
  }
  
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main>{/* Usar dados */}</main>
}</code></pre>

          <h2>Ações de Servidor</h2>
          <p>As Ações de Servidor permitem que você defina funções do lado do servidor que podem ser chamadas pelo cliente, tornando o tratamento de formulários e mutações de dados muito mais simples:</p>
          
          <pre><code>// Ação de Servidor para envio de formulário
'use server'

async function createItem(formData: FormData) {
  const name = formData.get('name')
  const description = formData.get('description')
  
  // Validar os dados
  if (!name || !description) {
    return { error: 'Nome e descrição são obrigatórios' }
  }
  
  // Salvar no banco de dados
  await db.items.create({ name, description })
  
  return { success: true }
}</code></pre>

          <h2>Roteamento e Layouts</h2>
          <p>O App Router no Next.js 14 fornece uma maneira poderosa de organizar seu aplicativo com layouts e rotas aninhadas:</p>
          
          <pre><code>// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}</code></pre>

          <h2>Conclusão</h2>
          <p>O Next.js 14 reúne o melhor do React e da renderização do lado do servidor, tornando-o uma excelente escolha para a construção de aplicativos full-stack modernos. Ao aproveitar os Componentes de Servidor, a busca de dados simplificada e as Ações de Servidor, você pode criar aplicativos web rápidos, escaláveis e de fácil manutenção.</p>
        `,
        coverImage: "/placeholder.svg?height=600&width=1200",
        date: "15 de abril, 2024",
        readTime: "8 min de leitura",
        author: {
          name: "Seu Nome",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "SN",
          bio: "Desenvolvedor fullstack apaixonado por React, Next.js e por criar ótimas experiências de usuário.",
        },
        categories: ["Next.js", "React", "Tutorial"],
      },
    ],
    fr: [
      {
        id: "1",
        title: "Création d'une Application Full-Stack avec Next.js 14",
        excerpt:
          "Apprenez à tirer parti des dernières fonctionnalités de Next.js 14 pour créer des applications web modernes.",
        content: `
          <p>Next.js 14 introduit plusieurs nouvelles fonctionnalités qui rendent la création d'applications full-stack plus facile et plus efficace que jamais. Dans ce guide complet, nous explorerons comment tirer parti de ces fonctionnalités pour créer une application web moderne.</p>
          
          <h2>Composants Serveur</h2>
          <p>Les Composants Serveur React sont un changement de paradigme pour le développement full-stack. Ils vous permettent d'écrire des composants qui s'exécutent exclusivement sur le serveur, réduisant ainsi le bundle JavaScript envoyé au client et améliorant les performances.</p>
          
          <pre><code>// app/page.tsx
export default async function Page() {
  // Ce composant s'exécute sur le serveur
  const data = await fetchData()
  return <MyComponent data={data} />
}</code></pre>

          <h2>Récupération de Données</h2>
          <p>Next.js 14 simplifie la récupération de données avec des fonctions intégrées qui fonctionnent parfaitement avec les Composants Serveur :</p>
          
          <pre><code>// Récupération de données dans un Composant Serveur
async function getData() {
  const res = await fetch('https://api.example.com/data')
  
  if (!res.ok) {
    throw new Error('Échec de la récupération des données')
  }
  
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main>{/* Utiliser les données */}</main>
}</code></pre>

          <h2>Actions Serveur</h2>
          <p>Les Actions Serveur vous permettent de définir des fonctions côté serveur qui peuvent être appelées depuis le client, rendant la gestion des formulaires et les mutations de données beaucoup plus simples :</p>
          
          <pre><code>// Action Serveur pour la soumission de formulaire
'use server'

async function createItem(formData: FormData) {
  const name = formData.get('name')
  const description = formData.get('description')
  
  // Valider les données
  if (!name || !description) {
    return { error: 'Le nom et la description sont requis' }
  }
  
  // Sauvegarder dans la base de données
  await db.items.create({ name, description })
  
  return { success: true }
}</code></pre>

          <h2>Routage et Layouts</h2>
          <p>L'App Router dans Next.js 14 offre un moyen puissant d'organiser votre application avec des layouts et des routes imbriqués :</p>
          
          <pre><code>// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}</code></pre>

          <h2>Conclusion</h2>
          <p>Next.js 14 réunit le meilleur de React et du rendu côté serveur, ce qui en fait un excellent choix pour la création d'applications full-stack modernes. En tirant parti des Composants Serveur, de la récupération de données simplifiée et des Actions Serveur, vous pouvez créer des applications web rapides, évolutives et maintenables.</p>
        `,
        coverImage: "/placeholder.svg?height=600&width=1200",
        date: "15 avril 2024",
        readTime: "8 min de lecture",
        author: {
          name: "Votre Nom",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "VN",
          bio: "Développeur fullstack passionné par React, Next.js et la création d'excellentes expériences utilisateur.",
        },
        categories: ["Next.js", "React", "Tutoriel"],
      },
    ],
  };

  return posts[lang] || posts.en;
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ lang: Locale; id: string }>;
}) {
    const respParams = await params;
  const lang = respParams.lang;
  const id = respParams.id;
  const { post: postTranslations } = await getDictionary(lang);
  const blogPosts = getBlogPosts(lang);

  // Find the post with the matching ID
  const post = blogPosts.find((post) => post.id === id);

  // If post not found, show 404
  if (!post) {
    notFound();
  }

  // Get related posts (in a real app, this would be based on categories or tags)
  const relatedPosts = blogPosts.filter((p) => p.id !== id).slice(0, 3);

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 m-auto">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                />
                <AvatarFallback>{post.author.initials}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">
                  {postTranslations.author}
                </div>
              </div>
            </div>
            <Separator orientation="vertical" className="h-8" />
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />
              {post.date}
            </div>
            <Separator orientation="vertical" className="h-8" />
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-medium">
              {postTranslations.shareArticle}
            </h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link href="#" aria-label="Share on Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="#" aria-label="Share on Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="#" aria-label="Share on LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href={`/${lang}/blog`}>{postTranslations.backToBlog}</Link>
            </Button>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            {postTranslations.aboutAuthor}
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Avatar className="h-20 w-20">
              <AvatarImage
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
              />
              <AvatarFallback>{post.author.initials}</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">{post.author.name}</h3>
              <p className="text-muted-foreground">{post.author.bio}</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Twitter</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">GitHub</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <>
            <Separator className="my-12" />
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">
                {postTranslations.relatedArticles}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/${lang}/blog/${relatedPost.id}`}
                    className="group"
                  >
                    <Card className="h-full overflow-hidden transition-all hover:border-primary">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={relatedPost.coverImage || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="line-clamp-2 text-base">
                          {relatedPost.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 text-xs">
                          {relatedPost.excerpt}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
