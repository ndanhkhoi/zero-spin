const CACHE_NAME = 'wheel-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        // Nếu phản hồi là chuyển hướng, thực hiện fetch lại URL đích
        if (response.redirected) {
          return fetch(response.url);
        }
        return response;
      }
      return fetch(event.request);
    })
  );
});