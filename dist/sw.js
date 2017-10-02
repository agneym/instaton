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
    "url": "74429217f31491145d39.bundle.js",
    "revision": "d11acf56c5dd190d1c6837f26dbafe8e"
  },
  {
    "url": "css/semantic.min.css",
    "revision": "8b7349a5844c1a0a883665375c670f3b"
  },
  {
    "url": "index.html",
    "revision": "261aa9ae43ae35d91a50287f1d252d15"
  },
  {
    "url": "styles.css",
    "revision": "8327263c5e39dad447bee3386c254b9d"
  },
  {
    "url": "vendor.js",
    "revision": "552de7032cdaddf8e1a8de893db6238a"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
