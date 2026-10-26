// Change this when you publish an update, so old files get cleared out.
const CACHE = 'jigsaw-v7';

const FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
  './fonts/atkinson-hyperlegible-latin-400-normal.woff2',
  './fonts/atkinson-hyperlegible-latin-700-normal.woff2',
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;

  // The puzzle list: always try the internet first, so new puzzles show up
  // right away. Use the saved copy when offline.
  if (url.pathname.endsWith('/puzzles.json')){
    event.respondWith(
      fetch(req).then(res => {
        // Saved under one plain address, whatever was added after the "?".
        if (res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(url.origin + url.pathname, copy)); }
        return res;
      }).catch(() => caches.match(url.origin + url.pathname))
    );
    return;
  }

  // Everything else (the app, and every puzzle picture once it has been seen):
  // open instantly from the saved copy, and refresh it in the background.
  event.respondWith(
    caches.open(CACHE).then(async cache => {
      const cached = await cache.match(req, { ignoreSearch: true });
      const fresh = fetch(req).then(res => {
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      }).catch(() => cached);
      return cached || fresh;
    })
  );
});
