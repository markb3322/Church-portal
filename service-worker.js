const CACHE_NAME = 'mcb-v1';

// I-cache lang ang mga files na sigurado kang nandun
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                './',
                './index.html'
            ]).catch(err => console.log("Skip caching optional files"));
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => {
            return res || fetch(e.request);
        })
    );
});
