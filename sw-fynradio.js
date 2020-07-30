// sw.js

var cacheName = 'FYN-Radio_V1';
const offlineUrl = '/offline_page.html';
var cacheVersion = 1;
var currentCache = {
  offline: 'offline-cache' + cacheVersion
};

var filesToCache = [
  
    '/index.html',
    '/privacy.html',
    '/terms.html',
    '/radios/kenya.html',
    '/submit.html',
    '/disclaimer.html'


   
];


if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw-fynradio.js').then(function (registration) {
            console.log('Service worker successfully registered on scope', registration.scope);
        }).catch(function (error) {
            console.log('Service worker failed to register', error);
        });
    });
}






self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            console.info('[sw.js] cached all files');
            return cache.addAll(filesToCache);
        })
    );
});










self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    // See /web/fundamentals/getting-started/primers/async-functions
    // for an async/await primer.
    event.respondWith(async function() {
      // Optional: Normalize the incoming URL by removing query parameters.
      // Instead of https://example.com/page?key=value,
      // use https://example.com/page when reading and writing to the cache.
      // For static HTML documents, it's unlikely your query parameters will
      // affect the HTML returned. But if you do use query parameters that
      // uniquely determine your HTML, modify this code to retain them.
      const normalizedUrl = new URL(event.request.url);
      normalizedUrl.search = '';

      // Create promises for both the network response,
      // and a copy of the response that can be used in the cache.
      const fetchResponseP = fetch(normalizedUrl);
      const fetchResponseCloneP = fetchResponseP.then(r => r.clone());

      // event.waitUntil() ensures that the service worker is kept alive
      // long enough to complete the cache update.
      event.waitUntil(async function() {
        const cache = await caches.open(cacheName);
        await cache.put(normalizedUrl, await fetchResponseCloneP);
      }());

      // Prefer the cached response, falling back to the fetch response.
      return (await caches.match(normalizedUrl)) || fetchResponseP;
    }());
  }
});
