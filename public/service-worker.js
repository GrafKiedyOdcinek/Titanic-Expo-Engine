// public/service-worker.js
const CACHE_NAME = "deck-cache-v1";
const urlsToCache = [
  "/Engine/Boiler.gif",
  "/Engine/Engine.gif",
  "/Engine/Full Engine.gif",
  "/Engine/Turbine.gif",
  // Ajoutez d'autres images ici
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
