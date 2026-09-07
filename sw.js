const CACHE_NAME = "lisenziya-v1";
const ASSETS = ["/lisenziya/", "/lisenziya/index.html", "/lisenziya/manifest.json"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
