'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "4d9b515c7679612a96b2f4484dcb3209",
"index.html": "9c8822ee1340a47625f17efa0d85a471",
"/": "9c8822ee1340a47625f17efa0d85a471",
"main.dart.js": "b6e4c6231bef3ee4feb5d758ef147ca7",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "0acc8e9fa84d01bf4bdf64eb9d72fc79",
"icons/Icon-192.png": "56ac239c6bb7159cf55e632aeff63dbd",
"icons/Icon-maskable-192.png": "56ac239c6bb7159cf55e632aeff63dbd",
"icons/Icon-maskable-512.png": "a484643848ede2198f5803dbc3924e17",
"icons/Icon-512.png": "a484643848ede2198f5803dbc3924e17",
"manifest.json": "7113047209a10422cffe25d3c76aa818",
".git/config": "9a0eea87d9bdda7908ef1820a8ef85cd",
".git/objects/3b/1e397ea2d572df24f94279945d42ef09880897": "9e4cca335eb4cfe1da3624f0abf55856",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/51/3259c01372c5d004d73fc5452f2c32f1208f14": "0875ddda3a799e5313fc1a710df208c4",
".git/objects/0b/df34c7c6066cf8ba23f932bfe067808d6ae3d7": "c80ccfb2169dcb5e7ada0db3927fdc60",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/9c/8e9cf16c3468cd34015025803301d3d50b47cf": "2c19928eb4136bceb270f656f8d9ceb6",
".git/objects/d9/fc42b66a5fde75413a589702bbc55cc456d6ed": "334aedfd9fa51e01a6faf727f2e5e247",
".git/objects/ad/765d8517f9b4931aa43b1c1c277c48f56fff0a": "14e3b973de35f8e34cd478fff421268f",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/b4/1535fa8e9da38a70bcdb24138c2bcdc349db7d": "fb90a1ae0e962826eb0a81dcd8240c15",
".git/objects/a2/107d2110904bf3e7f493ece1d31a25fa8bc6d8": "ff7c9e67ce2608574d621003d945b410",
".git/objects/a5/c53c2a9344356a40e6b0745482923599ab2dad": "10093b3db50bc8cbef24d0a76a21bc92",
".git/objects/e2/2efb7323c320e5f3a14cb8b06bac14d9654af0": "309889e946d8aab0308424cc9ad38877",
".git/objects/f2/4398fb301bfa57de145cda7f43f7b6e91e6ec7": "f73a6d4cae50d36316a2296190f56b25",
".git/objects/fe/673c04dd4e6e7501afbe8a8abd00e58cb9cec3": "8e6456c039b648252615a614f82452bf",
".git/objects/c1/0f19258dbd6d5a6fe4bee9d370ea72509beae5": "7a61b6b56ea277fbb879e4d471fcd46b",
".git/objects/c6/c5c86bbda71144780809b0ed3e6975c4e45e58": "8bad21295089867c48c456d3490abe90",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/df7637f992d2632f30c712e704b8fe21749244": "8f85ace14168c88c45dff0a78a739150",
".git/objects/27/3a60b76b5689c700c797bda5d1fe0190ecbb0d": "0127ff52c02891eae78fb43742c8db5d",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/86/4c0bb5fdba3549425aff152b855dce6d3ed016": "411cffb726ec829122c47bd1e477ab02",
".git/objects/2a/ef44141c6ac236bb125c56c2b7d524f7497bc0": "80ddfceed8522782c511cc8fb0bb879c",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/6b/6f9764ab2cf2cd954f593ceb066c94c5afaee9": "349f31b6893fc4c11d8e0efd05d04303",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/3a/4a2ea1144b00aab7187bef52c75dd129fd0eaa": "27f2103ffecc68211ffbdf9895edb924",
".git/objects/0f/c4ce54fb142f6576cb485b86da9ab35c15a008": "75379e87b1b1bdf5753aa0c036d28547",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b8/648f35a08bf854e3f3b62dbde371ca20b07530": "b39e85d19f0e70fd51beb71f4f28f757",
".git/objects/a1/1f459617b00975a50029eedb63a3d8917f9519": "e2cac1edcb4a8995b12a596d4e8d8ce6",
".git/objects/f9/2caf9814d1c69c0b024ff2ec3ad82fb17dc47c": "935663ceb9cd45f99b7709f16782de50",
".git/objects/f0/c383e31a5026fb8b2ac5537b6b899ffba27952": "ba9328390e99114911d612b28df6f16d",
".git/objects/e9/ded421507b58327a45b87a15d4c0337a12c38d": "805f95c5fc2561a66951cbcbc191d7bf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/dc44885cf89b7fe4addd119c7eaa67f8bdde9e": "b8ed1c4de316e50b1c3a2a52ee2ea970",
".git/objects/79/0263a62bce2dfce44b6d207ddc68f38972bf0b": "2136a090e81415737e6fc11d03260d18",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8d/8e483a23e1d9d3568588138dc2dcb6ac21c1a2": "b263ca21a9e6cc66538880a404ae1a03",
".git/objects/1d/933748b3773c5c7ec33f5ade947d0cc8dfda75": "fb53c8d90cbb71a86cbf515dc3eb64cf",
".git/objects/76/34977cc2f74fd59ec3c9c06c0e6cce5d54750d": "1c4b00af29db537cad0d0959506a2301",
".git/objects/76/30a84d58ca62d35e313e805aa2dec7ba74ac1a": "fa9841777ffc652c0e0fe98584fece3e",
".git/objects/1c/7693f9bac52dc62e9c941ec527adfaf50f1623": "4bddf733486f8869483f3a5cd2308483",
".git/objects/82/3e1363ac72e135fdff044a5214c8f91caea1a0": "289a24bdb2fe733285f851f2e59647b1",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/8b/8f81894749df9704ffdc80a69c1922cea050a4": "793b902570a47c019fde5dc7e983ea71",
".git/objects/25/fd35785e70f50177322473de0216877f798fc4": "d121489dde73df34f18254f0b789f591",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "59b5ed702f2f86ef3749d3b69a913c88",
".git/logs/refs/heads/main": "59b5ed702f2f86ef3749d3b69a913c88",
".git/logs/refs/remotes/origin/main": "1afdb22cee143836f7868dcd8adc72e3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "59810a5be69e2dd7653116ae748a18ef",
".git/refs/remotes/origin/main": "59810a5be69e2dd7653116ae748a18ef",
".git/index": "f38f3b4d061e3c5a30a8df65e4a4a346",
".git/COMMIT_EDITMSG": "c730168483b304ee45596e43b11ff26c",
".git/FETCH_HEAD": "23cc749b857ccba8d93de97f996a1cd1",
"assets/AssetManifest.json": "ee18e1df6d864d545be915e41fb27c44",
"assets/NOTICES": "7f5e426b7fd31fd87e320d9f2211954d",
"assets/FontManifest.json": "8a89a5b31a3ebd58c47899d66448b054",
"assets/AssetManifest.bin.json": "20a1d47f5238882dd462129501eadc06",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1bac4ab9526bdcc2418c82d3fb876353",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "ab82e0630cd571345688f44940d6e14d",
"assets/fonts/MaterialIcons-Regular.otf": "de10f28df445ba32eafb6abf55a6250b",
"assets/assets/images/icon.png": "dc3bf58613c0de3002d1c801612bce05",
"assets/assets/images/photo_sphere.svg": "a17d7e1d6dc9d64d41ce44aeb83b37d6",
"assets/assets/fonts/Noto_Sans_JP/NotoSansJP-VariableFont_wght.ttf": "ace7a5cb51cc0d172c73595f1525be6e",
"assets/assets/fonts/Noto_Sans_JP/OFL.txt": "8743de9f36f438de6b96830aad48b3d4",
"assets/assets/fonts/Noto_Sans_JP/README.txt": "2262100b328d8ca8068d70b9657364cd",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
