/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "830792c2b4e702a013708c755c196f2a"
  },
  {
    "url": "assets/css/0.styles.66d684e8.css",
    "revision": "9e79f2ae8329ebab3e41ebe1b62e79f1"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.23236316.js",
    "revision": "a8c0eae407d9a44339ca14665f3bfc51"
  },
  {
    "url": "assets/js/10.72a0c63d.js",
    "revision": "7844e9ca6fc444cd2fc5415e2ebb9be4"
  },
  {
    "url": "assets/js/14.43f16e91.js",
    "revision": "2731f1910c4a08022f8e18c263f677c9"
  },
  {
    "url": "assets/js/15.f32c84c5.js",
    "revision": "4fee6eb3d0f29739140c1e5b26a81fe5"
  },
  {
    "url": "assets/js/16.7767514d.js",
    "revision": "c3d73cfffbeb3659b519d0683ea96cb4"
  },
  {
    "url": "assets/js/17.820ff2db.js",
    "revision": "e2cebc83a08708d343a192fab59e4cf9"
  },
  {
    "url": "assets/js/18.1755ef6a.js",
    "revision": "8b781fb012a2cd18a83a8936967b5b60"
  },
  {
    "url": "assets/js/19.bb6ca149.js",
    "revision": "03dab1a8897c9780b525184d2ce7de6b"
  },
  {
    "url": "assets/js/2.d7779ef6.js",
    "revision": "dec3d5bba80211d5cb3cfc4539685265"
  },
  {
    "url": "assets/js/20.82f01be1.js",
    "revision": "f7c25d6449b8f0ab8de06d1545643ad2"
  },
  {
    "url": "assets/js/21.f2ccef69.js",
    "revision": "0bf2788e0e5f4d41a848b8a42a4ecbb9"
  },
  {
    "url": "assets/js/22.2343c0ad.js",
    "revision": "d9ec110c0b238590eb9f60a0e3b1410f"
  },
  {
    "url": "assets/js/23.2ff5ceb4.js",
    "revision": "cacacb5e74fc04fdd95d55de7e6f1de3"
  },
  {
    "url": "assets/js/24.8198d308.js",
    "revision": "ca2dedcb26b2d36f8eb4a2cc482ee083"
  },
  {
    "url": "assets/js/25.c6e44cf2.js",
    "revision": "259493a2b5e6325d58e58a2ebabfed84"
  },
  {
    "url": "assets/js/26.d4f65f4b.js",
    "revision": "4905885e7e84ba6dc957711a6786dfc0"
  },
  {
    "url": "assets/js/27.a52948be.js",
    "revision": "f872ef2b3183d67881d7081dcc50d71a"
  },
  {
    "url": "assets/js/28.cf46b2f6.js",
    "revision": "defa2e39914327eb2e11a48b87b3ed3d"
  },
  {
    "url": "assets/js/29.1babf497.js",
    "revision": "91383bb75ca2c854e108be41457837fd"
  },
  {
    "url": "assets/js/3.200e3cd0.js",
    "revision": "ce8de060ed6e7bcd8515588ef003d0b6"
  },
  {
    "url": "assets/js/30.2da82914.js",
    "revision": "ac4f39039fae5e82a822ffc5e773b176"
  },
  {
    "url": "assets/js/31.a84fef17.js",
    "revision": "d695c8d42b8fd234d3c1927e5067dc44"
  },
  {
    "url": "assets/js/32.63ece941.js",
    "revision": "34b4013bf600ce43809d16f203cfad9b"
  },
  {
    "url": "assets/js/33.634aca41.js",
    "revision": "62b1d857c123093370ea6104d4e31921"
  },
  {
    "url": "assets/js/34.9286622a.js",
    "revision": "e516dc17931f4ab5749140ff87190634"
  },
  {
    "url": "assets/js/35.5fe1da19.js",
    "revision": "0c7b127a7da8b53c4b8a2cbaa55300c1"
  },
  {
    "url": "assets/js/36.2388060c.js",
    "revision": "f7eee0aec3465c10f44010fa2559cf3d"
  },
  {
    "url": "assets/js/37.597c880c.js",
    "revision": "0bd8bd4bc11668532a9acc1367507712"
  },
  {
    "url": "assets/js/38.3f9c8ba7.js",
    "revision": "3bda664ff55e72d0507d5fb4d4f735d1"
  },
  {
    "url": "assets/js/39.d79f291e.js",
    "revision": "1a40a98d640e643c689a3f90f7935adf"
  },
  {
    "url": "assets/js/4.82d49428.js",
    "revision": "098093e538490885624b928863f62bd2"
  },
  {
    "url": "assets/js/40.ea9567a1.js",
    "revision": "5f53febc9137d64081edddaee73dab5c"
  },
  {
    "url": "assets/js/41.3cbd83e7.js",
    "revision": "4a7306198ac55bcb93e46b07a649d038"
  },
  {
    "url": "assets/js/42.1b675888.js",
    "revision": "19e4265ff64d541ea6ee96478ac8e1cd"
  },
  {
    "url": "assets/js/43.5b3cbd2f.js",
    "revision": "22d244345d04392fff972ed2b22d2ad3"
  },
  {
    "url": "assets/js/44.01afef23.js",
    "revision": "4dbd1cb1d9c8e13d7fb804c89646dd99"
  },
  {
    "url": "assets/js/45.90f4693f.js",
    "revision": "a7a5510744ff8e757b0676f2e92caac3"
  },
  {
    "url": "assets/js/5.66db207b.js",
    "revision": "c90886d662fba0c40ebabe6e7083138c"
  },
  {
    "url": "assets/js/6.60f4bd3a.js",
    "revision": "5e73cc19e0512825baab9bc59016713e"
  },
  {
    "url": "assets/js/7.16fe4920.js",
    "revision": "4c840dab30c793b86020a5fe026c7b07"
  },
  {
    "url": "assets/js/8.b48101ef.js",
    "revision": "3558cf36a290c03637c0133af94e9fc0"
  },
  {
    "url": "assets/js/9.2fe5ad50.js",
    "revision": "6e1ced4c78850161dfeb189a69e28b14"
  },
  {
    "url": "assets/js/app.221609f6.js",
    "revision": "9a1512ef0fb7609db0f49e28011fe657"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.06d90e71.js",
    "revision": "f5ddd53d0c15c877b8c6ebf65f2d825c"
  },
  {
    "url": "assets/js/vendors~flowchart.643ad467.js",
    "revision": "67fbceafa5e13887572d7d94a154d71f"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "7671918ffa4ca80f75bdae8098828448"
  },
  {
    "url": "categories/java/index.html",
    "revision": "3beb920184e2c49045b76fecf27cbe12"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "89cf4d5b333b25f13a1e581cc9f0fbe1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "41112714c387a5801e52163f69f68e4d"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "1335460c051cddae6fb0464d19b4c9df"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "0c4edd07161f98832eccbdf6d892e425"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "c4f0cac78074e8723536a58bed4a112a"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "055a2b79d22ce125a5122e9dc07dd287"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "8c3787054c08b0f6218ac9af73eb0ef3"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5e57e52f3171622a2347ff5036c11ab3"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f2ca5ff99c2fb6552e2a381e498507dd"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "5a12015429367ae913f45429bb5637b9"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "63c21c88ee84107322934a39e8ebc0ad"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "54d3d90f4b9e709b03cfdcc5ee972229"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "91329630e628395a7a1b80e810bd851d"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "61afc35e0a9973a21806f7f313a6b56d"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "dfe6ba381cc9c6665c95060a973d32f5"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "26345150184f622026323ba590ea910d"
  },
  {
    "url": "timeline/index.html",
    "revision": "caca9e38f088c5a8bb7dec9711c507a5"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "f62b743e9caa1b500f2a1bda93437e1b"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "f2e48fb1424d738dcfd1315bb1d1efb4"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "94935302c0b818c8eb3fba7bd7ebf651"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "50ce029334fa78bc7838d25af967caca"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e42551ca7ef8681b8fb9fd10577e195b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
