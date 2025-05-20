// Fake Service Worker para evitar erros em static export (Next.js 14)
self.addEventListener('install', () => {
  console.log('[sw.js] Service Worker instalado (fake)');
});

self.addEventListener('fetch', () => {
  // Nada aqui, só silenciando erros
});