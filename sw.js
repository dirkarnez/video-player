importScripts('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/7.0.0/workbox-sw.min.js');

workbox.core.clientsClaim();

self.addEventListener('install', (event) => {
  self.skipWaiting();
  // Additional custom logic if required
});

workbox.routing.registerRoute(
  ({ url }) => url.pathname === '/video-player/',
  new workbox.strategies.NetworkFirst()
);
