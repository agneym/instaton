importScripts('workbox-sw.prod.v2.0.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "c5c5ce77652a68ee9d28.bundle.js",
    "revision": "f1dad8b6ca39a7452f4f7f53f60cabef"
  },
  {
    "url": "css/semantic.min.css",
    "revision": "8b7349a5844c1a0a883665375c670f3b"
  },
  {
    "url": "index.html",
    "revision": "961c43aa5216442aabb7c6dcd58ec8cb"
  },
  {
    "url": "styles.css",
    "revision": "4660aa45c4a446124201ab901e1e40d3"
  },
  {
    "url": "vendor.js",
    "revision": "0df4250d53e6ccaabb5c8f86ce2ffa2a"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
