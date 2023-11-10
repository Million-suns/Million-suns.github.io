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
    "revision": "449ffa4f0dc8891cfe08a764aa24071d"
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
    "url": "assets/js/42.664c91cc.js",
    "revision": "c98a466a55905b3126caa5b6c1b64f79"
  },
  {
    "url": "assets/js/43.5b3cbd2f.js",
    "revision": "22d244345d04392fff972ed2b22d2ad3"
  },
  {
    "url": "assets/js/44.85309ca3.js",
    "revision": "ca1cd6c0d9af1a9773805feaf9f6aa50"
  },
  {
    "url": "assets/js/45.9bf19290.js",
    "revision": "8439d87426b14d06affb46d661535179"
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
    "url": "assets/js/app.6c384cef.js",
    "revision": "441a7bd6e5a4d688b29a14b6913a8637"
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
    "revision": "08a4879fb9a5fcd7839b6b8edb0fa8d5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "62e77e656da354b0f9066cb1db69eaff"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "84879a351dac0a62d8735fd258b34d6f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "aa063b485092c56c6ec6d56c4511a3be"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "51606e4a0f256e17f62ea0c941126667"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "f5bc916ffa571e0c6442f221bec73136"
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
    "revision": "9388e2891506750341e0cc31932ef331"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "ae54e391d7c68edeed804716efb1ee7b"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "55110baf440c765e75e89b75222c8265"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "b3d37a5a4241a2cf04407b3af6db4d79"
  },
  {
    "url": "tags/js/index.html",
    "revision": "d3168225e3e8cacb32dfa461d38bf68e"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "ea8926eb277acdd20f8358693a43b737"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "137052cd34dc1cf0c4f2b07ff8a1af1f"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "a2a89ad77522d586c28083a1f0d76660"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "5af2d1818e0decbd5cb50c1df5f75348"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "8d4ebf9eb23e9c970df5e8d33d7989e8"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "0778041bc62d95f0fd96c16a5b93a5b4"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "8bd01db6504a0bb85da8351acff6c3c3"
  },
  {
    "url": "timeline/index.html",
    "revision": "f8fe28af5255f67d8cedbbcb08a6a98e"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c03fd404024dc7f9a4c3a5d40907ef6b"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "7d6d58d1cca2afe979be38bbd6a1ed6f"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "8317eccec1593975453e76977ef069c0"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a1da0227284d18dcf1ac9a0f6255b867"
  },
  {
    "url": "生活分享/life.html",
    "revision": "79d414841ee3b126ead2c5bcfdbffe69"
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
