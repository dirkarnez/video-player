importScripts('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/7.0.0/workbox-sw.min.js');

workbox.core.clientsClaim();

self.addEventListener('install', (event) => {
  self.skipWaiting();
  // Additional custom logic if required
});

workbox.routing.registerRoute(
  ({ url }) => {
    return url.pathname === '/video-player/' || url.host === 'cdn.jsdelivr.net'
  }},
  new workbox.strategies.NetworkFirst()
);
