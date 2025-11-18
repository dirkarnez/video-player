importScripts('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/7.0.0/workbox-sw.min.js');

workbox.core.clientsClaim();

self.addEventListener('install', (event) => {
  self.skipWaiting();
  // Additional custom logic if required
});

// ========== Precache Essential App Shell Assets ==========
// The __WB_MANIFEST is replaced by Workbox build tools during the build step with all necessary files.
// If you're not using a build step, manually provide the list of assets you need cached, example:
const PRECACHE_ASSETS = [
  './index.html'
];

// Precache and route these core files.
workbox.precaching.precacheAndRoute(
  PRECACHE_ASSETS, 
  {
    // Clean up outdated precaches
    cleanUrls: true,
    ignoreURLParametersMatching: [/.*/],
  }
);

workbox.routing.registerRoute(
  ({ url }) => {
    return url.pathname === '/video-player/'
      || url.host === 'cdn.jsdelivr.net'
      || url.host === 'cdnjs.cloudflare.com'
      || url.href.endsWith("better-cue-parser.0.3.1.min.js")
  },
  new workbox.strategies.CacheFirst({
    cacheName: 'my-cache',
    plugins: [
      // 0 is for opaque response
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
