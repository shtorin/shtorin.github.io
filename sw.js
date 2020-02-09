importScripts('/src/js/idb.js');
importScripts('/src/js/indexedDb.js');

self.addEventListener('install', (event) => {
    console.log('[Service Worker] SW installed', event);
});

self.addEventListener('activate', (event) => {
    console.log('[Service Worker] SW activated', event);
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request)
    );
});