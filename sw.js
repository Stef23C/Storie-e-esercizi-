// Minimal service worker — required by Chrome/Edge/Android to consider the app
// "installable" as a real PWA. It just passes requests straight through to the
// network (no offline caching), which keeps things simple and always up to date.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
