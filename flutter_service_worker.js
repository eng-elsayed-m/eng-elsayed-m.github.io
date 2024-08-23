'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4967fa9214aaa8a96ecebc62aa79a75d",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7",
"index.html": "00a5f473c77fb97d3e9e8a597674daa8",
"/": "00a5f473c77fb97d3e9e8a597674daa8",
"main.dart.js": "25d69fe973223462a16dfe34e6f252de",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "2bbae03bfe159c000f712d9c687ccbef",
"icons/Icon-192.png": "990b3007ee8458ca3f69c8200545e8e7",
"icons/Icon-maskable-192.png": "990b3007ee8458ca3f69c8200545e8e7",
"icons/Icon-maskable-512.png": "33f707ceb8d3ac34aeb224ca589fa05a",
"icons/Icon-512.png": "33f707ceb8d3ac34aeb224ca589fa05a",
"manifest.json": "b64dc1bcfcd3a6aa075cfe9a5ac6d198",
".git/config": "2cc950156d0c42a9af28d57ea120d0a4",
".git/objects/0c/7417846533faae3f345cb2017e45865b092550": "bb40dd4987432015302f32cea24d66f0",
".git/objects/3e/5b9a7fd674dcdf1ab8ee3a66ed4c7ca27440ee": "cf41e8be9bd19a45737f6d69148a0f4f",
".git/objects/35/014ebd12793b3e696e22e892a09c356b462e34": "5248354a82e96f77c9de00bfbd11aba8",
".git/objects/69/9fadac4862f0bf1b128f5213784de0730b46a3": "e47c263b526e57089ff01e10770d9c87",
".git/objects/56/811a1f495b0443550599a9e8e1ed57e0a99d96": "379d6f40ca47f68517edf5f1244a76fb",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/621ea999948f806d9452b3a5aa8048a25ffe18": "60038a1edad3d7d924db76b9b795f02b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/60/dc257e067d5ac0a6d33c2847dec01da4adbb4d": "9fe57bacec97c0b8be743567e0d60b2b",
".git/objects/05/4769cb34a810468d0112f0611a70f5382b0dfc": "97d77f8e86b81f55c147a74a70d44e08",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/d9/deba2481c7a881f165aed6bde0fe1232376d7b": "f286c6ac02aa4adfaae43cab27524ce0",
".git/objects/bb/7f069577e9570a60e5922643cccaf04a2dd63e": "30ff7b157e31ba0dc2ab17c727c03b5b",
".git/objects/bb/cdbc96775cb6b343fbd1fd3c45ef63d4404c95": "bcb13615a93d9bf33ffd493b2649dde1",
".git/objects/be/c9494274caa38d5948a217aa3b27f8763e831e": "e86222409731231c7523bc3a759052d3",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/b4/7f71fb1ab89fa1d24c56d90e8c515b7a9177ed": "b40ff7370624416c4178ddb8cd1462f7",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/e5/3d2f25537ff1e16bcc4d61eedccabc928ee7ed": "d8ae9f1f8d9d5fb8a6e0689ea08aedd3",
".git/objects/f3/e4078fa4e89a5627aac8e9c405e034909c7c22": "aa2bf57f58f65f8206503c2980516bd1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/fb/56fe3981b404c91df4b0749bdd8a6dfae21c36": "8d71dc2673ea5cabbde1ae2ae011fef2",
".git/objects/fb/008ba802f27121e9ef18c9126106aae5695478": "868d8d994d82aea106582e5768947aac",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/20/15c487f77168ed97eaddb995016803dd38df8c": "22578ac6541e4f2723385fed6c47b81b",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/48fab4f3b8b0a2ba1e94e202b3c02e781fabcd": "2d55a165ed52d6e14c568b32efce4dd3",
".git/objects/7c/bde1f04fde03bd444d89b0b47cb26af6a48faa": "3e34a86ce0d4777847ae5819384e06bc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/74/7963cc690f55f4db00e07638cf84bfb675128b": "6fd2922f82f31affb1efadc6256ae407",
".git/objects/28/6b583725be3c2525b7c06d5f9f7f6b7024b8d9": "b625c75915e4f69f5f2c069215249b5b",
".git/objects/7b/0f10c55297524fb79f7cf9923a6b792107d83b": "be972c1d466c03b1619836ad461b12b5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/0137f6cd9d9312d5929a07fd3cdc145433d1ae": "af772d83f8e7058b01e662339848c633",
".git/objects/72/c79aad6d0d9eabac8c0be0ec501d0d67e800e9": "8b35b6a1e836ce1f6da90a4b23fcc0c3",
".git/objects/2a/dda2251d46cb6712a2bb9753ed1e4929d22998": "3476e4376c70acf98724b207dab2fdc4",
".git/objects/43/47f83288263a20013c9ac5eca176dfe2dbd666": "caeb74268d909a8a4d179ef9dae1123a",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/91/32e13934e23471228e118c58ad9e293634b696": "9c4887cf1de483c73b6b0bf6b85b4b2e",
".git/objects/30/075aee11b3ada5b3b795d40066a484e29c95bb": "813d342c40afdde396e1f1e6b03d31ea",
".git/objects/5e/7c82e36d2be5da2a622abaa5c91de5ac03d979": "17ddb2980400fc91d85540b256b5b7f8",
".git/objects/37/a74533bd3c2d191fce0751a9b57614585afffa": "a84dc9d41eb8d7dcf48a7a3405f9e9f4",
".git/objects/37/ee4a1e86f68975c15542a0fe894404dd5b349d": "dbd6f22e39a41bb9fa6f2f3f25cbdc90",
".git/objects/08/dd8f462398cb2108747f49b4e5825fdb6f3610": "028ba5ad2ad7346e4ac74658a1f81578",
".git/objects/99/6e06e387f07d116bde5e8eff332d69fee63b60": "47d2ee05718f7d1b11b2bab29142e89a",
".git/objects/0f/069177e2d2860dda9fc44725c109e070a1fc3e": "cd0d4eca107fdf33a0dbe896a1d4e9ff",
".git/objects/90/75681388d85e6850eaf867aef5741c235a108e": "ba4a4ecbd9bcaddd301eb2488d1444e9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/c794ab200a045ebbdaaaf9cb99430c2e44fd51": "60ae6d48236261540000e27d85f34591",
".git/objects/d2/057542257936c6db07824508053fd8d1fe883d": "bd1b562dd6bec5099da26a24c6df6342",
".git/objects/aa/62788c7cbec7c6c7cf3715b31185c825551e17": "a1da8db675b716a8fdd391de18cc1c6d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/db/7bc044909b8aec3311ebb63be4b280db802aef": "d4e5e72333b1c2e869a3c44b578ce1f3",
".git/objects/db/44b1714c02b53cbaeef4458f15424c2371be08": "51510f1e17b62f7c1728846803042fa2",
".git/objects/a6/945088076f751cc96301ecf8fc5675b0e94315": "4f2fd9291c21b0f42d4580993d464bf6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/71e992ccea42b2a18e1eeafbf9e4b629b2b37c": "784f7728e10b0a6c6ffb924fcc46ea5a",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/e9/5222fd57be617f12ae4b63b486b5ec66bb793b": "84b24ef7a9bd135b1154fa9f1017c94b",
".git/objects/2d/dbb302193751b992f6ad006d28b0ab2690d5bc": "2c67ee73a24ea24c23941a6d35397246",
".git/objects/77/fa8484a01e61081b2b02246233ac7a1d3be7e6": "490abf6faea320ae5d08c4e881367f7d",
".git/objects/77/9f327be225aedd8f5e284166c4957d5eb2c221": "1f05e9f4e9224dcb523f01050ab818b8",
".git/objects/70/1670c57a51641194c5a202217eab330b33f604": "da9b54386319b9c5167025ff9f5f4778",
".git/objects/4a/4f0470a0444710209f77fd9460d22e97542dd3": "af9ccadcd630d64b03a11e9d7edbfa2d",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4a/a30181ed8e8a467e66dc2eaf2119f2c5d4b9b1": "3cf8e2d8fd3fb4f6c9f46b235dcf8caa",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/39fbdd2bdb0a948f2467a85589bd3f5afdc56a": "6e174ac8f47295b1f874757968a4dd58",
".git/objects/15/96efa6743ef67e5ca0a85062ee9fb50f57a765": "585a62feaf5c284486c5c920fda6c1ce",
".git/objects/12/4e851e58301b3abbbd8b969c6f58607c86a11e": "c466f5f974ac1034e39634ae6636ac82",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/77c7f5e6526d5298caf7f26b05c336f7137867": "d4be598b91a10436906fa7d90993ceff",
".git/objects/71/608c12f13575cef1f29207541c62edd5a88370": "71b74864e0a6c94986b1d225e7498a0d",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/be82602dbcedfb07e11e2c08af65cbd9fc29b2": "9a95ad3e279ecad326a6760602a920b8",
".git/objects/40/06989d717919e83afda0a8b3f99cb9d790f1c4": "4629fc4f3ad881380336550d1fa31c0f",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/22/5eab27bde8cd4aaa776eef27ad52d796e036ea": "81ee82d6adaa09cdea8f0a4292cd9221",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd9739ec04b01a0c2aac3a19d17fca95",
".git/logs/refs/heads/main": "bd9739ec04b01a0c2aac3a19d17fca95",
".git/logs/refs/remotes/origin/main": "113588d0896b9e8258b1b0f873e769d4",
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
".git/refs/heads/main": "c519da1c5381b611335431d413bbceef",
".git/refs/remotes/origin/main": "c519da1c5381b611335431d413bbceef",
".git/index": "01ccfaa40f34901c915e1ab1d97b98fc",
".git/COMMIT_EDITMSG": "8968c0dee2cf8e37b81c86e5ae8c6b60",
"assets/AssetManifest.json": "4ca9668098339950372444622bc9a42a",
"assets/NOTICES": "07e89e354055b7c16c33a3ab9d23488f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "1ad9a12def5be18e0cab90f844c566fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9d4cfa1d1aa29faeb5a5c2455991911d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "131f87b57e270709983d83f6ecfdc363",
"assets/fonts/MaterialIcons-Regular.otf": "7e8d2f3f03b55fdff7a207bf867a7261",
"assets/assets/images/xxx.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/profile.jpg": "69a3baf60f376729fa91bf34130659d3",
"assets/assets/images/triange_icon.png": "248ebd714af276e2cc4781faaba00a84",
"assets/assets/images/image.png": "506c05fde6b5f05ac09912a9be5884b2",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
