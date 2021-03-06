'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "89633d23ff5586ecf5ccdd851ee21c5f",
"index.html": "05443e9a122422ecb3c6dce6a4b0629a",
"/": "05443e9a122422ecb3c6dce6a4b0629a",
"main.dart.js": "42450478e8cfde4b23341d2f67cfd9e3",
"favicon.png": "caf9695d32ce8f8c56ff2ddbe72191be",
"icons/Icon-192.png": "7616b815a516b7aa6cf5775d998f81d5",
"icons/favicon.png": "10ab0041a8a2e98f62b31d96aaf193e9",
"icons/Icon-512.png": "53df5e88eae43838f571d47100d8b88a",
"manifest.json": "33afc4d4ff0c1e611d3a156d521be66e",
".git/config": "20dca5b8d0931ebb83c681b2981e6003",
".git/objects/61/0aee850306c3ed6d6cd20610584f8f0ab17aaf": "0f19acad5bced1bf89c44140a52caec4",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/04/6084f3923be748580831b094c9e2ade691cc2a": "0d45bbf92b2295a7a469864a1a9a2a18",
".git/objects/34/525bfa408518941676832c9656bd02d6be2a01": "89e2766ee9cf4964b4ea08a544aefaaa",
".git/objects/9d/a158f8a0645bb3528f9b3289db09ab09c93cd3": "f6386ad7e3fc9cb15a04e3c9fa587158",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/d9/bd7245014afaf5770f4e10e43c43959a237c36": "eaad2bd9c90fdfcc26e873615ad16deb",
".git/objects/ad/bda00d8501a8ba3bef1dc43194f0bdfa5773a4": "d03f778f03b339768716c4593135dcd2",
".git/objects/b3/f8cd9490c6dd68389a8e15be7ed7c938201ae0": "c232e52e6e152b425756218447ae649c",
".git/objects/c9/5df5fcf902b1e176130b6413a8ba43756217f7": "2070619f529ba3bd8aead48c0123b8fe",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/fe/0d9ffebb53e2d05bf31ac7e29c25869ddaffb1": "618b565ed19c25d027d1a0c52bd1a973",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7d/60af5d5efb8af3df4b6c8c0d5b09528ec76170": "15059dcbbafcfb4548fda4d732ba34c8",
".git/objects/73/2ff4e8ebf88b9af9b7bb7d208c4df73d9f9875": "787adbe9b8a162a1d7cdb56d0bcc5a2d",
".git/objects/87/327c9555c072fd3149430856d53e9e97ef5aea": "359a0ce04e741d8bc0773c7f8c7aac58",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2a/4f77e8a1c0ecb52a837fe8e884df16f5331b2e": "c98bb1746532e9aabbcbee3a85974ae4",
".git/objects/2f/413f156733f72589aae82cf406417669a28ec7": "0f68130c294d1dfd2331c8a1f377aa51",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/bb0560d469c9eb08952543eaf91de5a2cb0048": "d6a977e720ed53cda115b1794c7e723e",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/31/093b0df635ff31cb7158f6a5f7f5558d1153b2": "b9e4f007713ff513003b833b5a0e9d6b",
".git/objects/54/fa176f811ff6e25eae4e201b3ab30804d3e330": "2b7c6dba926005d6b60465b58abb8d14",
".git/objects/3f/e8c8143d9f790319664a02d1e548807dddfd84": "b2c98f027f787b73d651aa6fbfa4da44",
".git/objects/5b/bb40d01667f1b9ca81fc380db70f1c76a83423": "53705a0386fc8bf1fb0e0cf73ac891e6",
".git/objects/99/48aa02b9006b1b46ac6363f5fe3e3415c2f1cd": "f365cb240a1ba5e47beef8483ca69831",
".git/objects/0a/2454a3b1de98f523dab780e5813223f519c4bc": "2dd61c0bcb86cf175460fb001fa9e6bd",
".git/objects/0a/28dd1aef86ec963ea460457a4c6015fc336fa7": "2860f5a781bc522aa8568bad3dee40cf",
".git/objects/bf/34472f941c60bb062463904454530b47785e54": "ef0a579e0f9fef9769e06859438bf76f",
".git/objects/bf/792605112e966c24536b1fa8bf4265e1a2d100": "8f59a6db98de36cf625e421917eb52a5",
".git/objects/b8/312638d68de69ca4b94beb83b8deebdde2a159": "8684a414435dd9e8a7b7db00bb26cd25",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/7867ed19ecf62fc0e901f5a0861222cf224bff": "eb17a88e8e9c5169299c0aba4c74314d",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/e1/928c0e3e855be6c599a408f9f2b95e09d87e82": "8106ee4780ebf9b8323821c16c98a4c5",
".git/objects/cc/44fd779c9eec5c391ae093e557eb8b46f85837": "ecfa83c2fa3e7f37036381dbfa7025ed",
".git/objects/e0/9b151b0b06622782073afd42a76089b62e8101": "a0f42e69c45814d27da3a637566fa395",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/cb144300ed187cd5e3a6b4db23fefa7c13ffbe": "47b9741abed3b5456b1ea08bc25e8bb3",
".git/objects/71/0877d4682018adb3a3d8ebd2f9f05dce9012d1": "ac6393d0297d66eefee356b47ff47301",
".git/objects/47/15e5b4289893db94eb402b938766837479ff71": "7e2555305ee106d7884b2b609ec16b72",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/22/3d78e50a3c0e30caf3699916438ab4dfc114f4": "782ba5ae8d7f7fa2aeffb725864d30a7",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1e28056f606d5ebb9b6027b844e2827d",
".git/logs/refs/heads/master": "1e28056f606d5ebb9b6027b844e2827d",
".git/logs/refs/remotes/origin/master": "a74fe13136eda67b0f08bbbb2ea27a00",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "18c8db7fc08821791ce4cb1b943e46d7",
".git/refs/remotes/origin/master": "18c8db7fc08821791ce4cb1b943e46d7",
".git/index": "57bb055b51e815e919a973828bafe20a",
".git/COMMIT_EDITMSG": "6fd9b159c9286d01778bbf157b4bf4ff",
"assets/images/keegan.png": "dd03e7a19515d25cf21848e14cb4be48",
"assets/AssetManifest.json": "48c73a246b973306f5317d8c37d345ba",
"assets/NOTICES": "587218ff6bc4c736ff9921c4685e6b00",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
