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
    "url": "0d24214498e40f163e6b.bundle.js",
    "revision": "25068490438ecdd15232f414bdc61fab"
  },
  {
    "url": "css/semantic.min.css",
    "revision": "8b7349a5844c1a0a883665375c670f3b"
  },
  {
    "url": "index.html",
    "revision": "6b8537f34d68912b5f8f3407586cf0fd"
  },
  {
    "url": "styles.css",
    "revision": "8a587705a34605be2bc526d5e8f2329d"
  },
  {
    "url": "vendor.js",
    "revision": "ef5b6b5a87ce6e41dbf77f836a9cd69c"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
