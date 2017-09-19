importScripts('workbox-sw.prod.v2.0.1.js');

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
    "url": "7820895b4ceec424247f.bundle.js",
    "revision": "507ebb381d54745e19690ec221786b21"
  },
  {
    "url": "index.html",
    "revision": "b67434e2213520ef624dba348e7b25fd"
  },
  {
    "url": "styles.css",
    "revision": "7307df0423eedc3dbf74ccbc13a87c0c"
  },
  {
    "url": "vendor.js",
    "revision": "a48c9724198791e30c7cf484174faf17"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
