if(!self.define){let e,i={};const a=(a,o)=>(a=new URL(a+".js",o).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(o,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const d=e=>a(e,c),s={module:{uri:c},exports:r,require:d};i[c]=Promise.all(o.map((e=>s[e]||d(e)))).then((e=>(n(...e),r)))}}define(["./workbox-721b6048"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/10/01/play-on-scanpen/index.html",revision:"4d4247f5e5fc69a827998ce18e871bf2"},{url:"2024/02/01/root-on-scanpen/index.html",revision:"3262f1193b6cc417398424b9ef947fc8"},{url:"2024/03/22/hide-your-scanpen/index.html",revision:"59ccd32fc4102f8a8be3d85fe81ccaff"},{url:"2024/12/01/talk-about-x-ai/index.html",revision:"314dc5b5d625ad3e4f8eafed002fa78e"},{url:"2024/12/03/real-harmony-connect-all/index.html",revision:"9d7a0373b7fffdf506e3b283afc32cac"},{url:"2024/12/21/fork-this-theme/index.html",revision:"7c2fcf21448fa8729d9b1a883781c5e2"},{url:"2024/12/21/noise/index.html",revision:"b33eaa6a7b71163b4a012d8f46f06383"},{url:"2024/12/24/markdown-test/index.html",revision:"285f829316b62ffdf868f20504703d35"},{url:"2024/12/24/noise-1/index.html",revision:"07ef6e9fb1fb010ba76b078c68d7214e"},{url:"2024/12/24/noise-10/index.html",revision:"6d96f70a154a5c6826bc21f383e352cd"},{url:"2024/12/24/noise-11/index.html",revision:"68540695592843b514faf5ac761eff0e"},{url:"2024/12/24/noise-12/index.html",revision:"1d9dae88c71762486b07dc0386e42f4d"},{url:"2024/12/24/noise-2/index.html",revision:"8f4bea33c54f39c1b16fd89dd987bde8"},{url:"2024/12/24/noise-3/index.html",revision:"bb8afd5e88590bdffcb04c276ae3a243"},{url:"2024/12/24/noise-4/index.html",revision:"f4e7a5d9d08d59f4587ba2105e6f82b2"},{url:"2024/12/24/noise-5/index.html",revision:"c683024699a968f3225b8b5599ec6c86"},{url:"2024/12/24/noise-6/index.html",revision:"337e78efd89df4f1ffcd2e6b6452bef4"},{url:"2024/12/24/noise-7/index.html",revision:"878453ffab11d7ffa338026f6c942a4a"},{url:"2024/12/24/noise-8/index.html",revision:"399374efd48e735e5c3cf00a36d2255a"},{url:"2024/12/24/noise-9/index.html",revision:"3fb1c8ddc2519ab4de3977a9a93c64b9"},{url:"2024/12/24/test2-1/index.html",revision:"5a6901130afaf267759cf337a4d76c71"},{url:"404.html",revision:"80f8b1792b599e69df92148c6ed1155a"},{url:"about/index.html",revision:"f692adaf152b97cdf17f962c511e2b66"},{url:"archives/2023/10/index.html",revision:"6f5e72e1b98fe9d254ef51ffe70513b0"},{url:"archives/2023/index.html",revision:"d3d9105a7d96f225d47c59585878992c"},{url:"archives/2024/02/index.html",revision:"82b2bf7c215204683d4de0b0f5d44397"},{url:"archives/2024/03/index.html",revision:"e550570694b3b65e3608ae7a43899bd3"},{url:"archives/2024/12/index.html",revision:"dd99d36d7dc8997f08ee73691f8397fd"},{url:"archives/2024/12/page/2/index.html",revision:"d4caaa50667185fa8395076237b4e3d8"},{url:"archives/2024/index.html",revision:"972511a78ab3b3df076ed93061e87d2f"},{url:"archives/2024/page/2/index.html",revision:"5923ffbea3898c67a78745e3710b93c1"},{url:"archives/index.html",revision:"136d987d526a9ae3bbfea7f50fe15a7a"},{url:"archives/page/2/index.html",revision:"6ae5b29c4c8405c0123764ffe5a9d43e"},{url:"archives/page/3/index.html",revision:"32967c1a8d90db134e9c80be62c3646b"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"atom.xml",revision:"46ecd1ae3ca6071e6b28d7f55b4dc2b7"},{url:"categories/技术/index.html",revision:"91e592fa0fc97118cff06b692ce583fd"},{url:"categories/技术/瞎聊/index.html",revision:"477b80b14d7c7ed88316f3bb78ebdb38"},{url:"categories/折腾/index.html",revision:"3bc14a8bbd0e309acd7e44e271228ee6"},{url:"categories/折腾/电子垃圾/index.html",revision:"a9d9f07cd6ed0855f17aab02e84d29c8"},{url:"css/mdui.css",revision:"ede025291378e92fd6fa6c3d38521d81"},{url:"css/style.css",revision:"773a2eced25e3033fd46a7b64724d97e"},{url:"custom.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"custom.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/roboto/Roboto-Black.woff",revision:"4c3b6229efe63a13dbb4c3c32e292e61"},{url:"fonts/roboto/Roboto-Black.woff2",revision:"2b8d6922c2c9957356bc50f475de4e79"},{url:"fonts/roboto/Roboto-BlackItalic.woff",revision:"3a99796b2d8592471fcf278df4334d5d"},{url:"fonts/roboto/Roboto-BlackItalic.woff2",revision:"38d14dd4ff163c34e45b9701668652d4"},{url:"fonts/roboto/Roboto-Bold.woff",revision:"ad140ff02a7091257e2b31619106194e"},{url:"fonts/roboto/Roboto-Bold.woff2",revision:"ab96cca26751239828b8e9c524cca5bb"},{url:"fonts/roboto/Roboto-BoldItalic.woff",revision:"a7dce23c0dd99a4afa5cdb4925f0358a"},{url:"fonts/roboto/Roboto-BoldItalic.woff2",revision:"355e388740673054493ce5fe32e37596"},{url:"fonts/roboto/Roboto-Light.woff",revision:"37fbbbad5577a95bdf058307c717c882"},{url:"fonts/roboto/Roboto-Light.woff2",revision:"8e0860f3581b197e9fa4713a706c7bcc"},{url:"fonts/roboto/Roboto-LightItalic.woff",revision:"c7b4e746cf8ecbf412fc944146154d24"},{url:"fonts/roboto/Roboto-LightItalic.woff2",revision:"879d940bccbb25f6096ec4361154d469"},{url:"fonts/roboto/Roboto-Medium.woff",revision:"303ded6436dcf7ea75157e2aeff876ce"},{url:"fonts/roboto/Roboto-Medium.woff2",revision:"2741a14e49524efa6059c735010239d0"},{url:"fonts/roboto/Roboto-MediumItalic.woff",revision:"da059a7386fea889c55cce11253df175"},{url:"fonts/roboto/Roboto-MediumItalic.woff2",revision:"f10d1f42838680a70ac2b66e62887106"},{url:"fonts/roboto/Roboto-Regular.woff",revision:"081b11ebaca8ad30fd092e01451015dc"},{url:"fonts/roboto/Roboto-Regular.woff2",revision:"b2a6341ae7440130ec4b4b186aff8413"},{url:"fonts/roboto/Roboto-RegularItalic.woff",revision:"8add1ba317c27e39b7781c95fa174671"},{url:"fonts/roboto/Roboto-RegularItalic.woff2",revision:"df8e3a9b9aed943417973988732b928f"},{url:"fonts/roboto/Roboto-Thin.woff",revision:"90d3804f0231704c15ccc5861245e8ce"},{url:"fonts/roboto/Roboto-Thin.woff2",revision:"790ebf41d0214f5eda4ef61263ed75f8"},{url:"fonts/roboto/Roboto-ThinItalic.woff",revision:"588293290e86dad97fcf33ed1719c083"},{url:"fonts/roboto/Roboto-ThinItalic.woff2",revision:"8a2c1a5de09de8bb2c45390a10f90c2b"},{url:"friends/39af7994fbe843b7bcc0f9d201d8785a.png",revision:"8be4842a30f086f17ca7f63ebbe725d1"},{url:"friends/index.html",revision:"f6f090be6935b8becbb63d9803541270"},{url:"icons/custom-icons/iconfont.eot",revision:"a2a8787dac4c3c9b8883666c3b7df6a3"},{url:"icons/custom-icons/iconfont.svg",revision:"2fcf538d7df47fd4d68e85f8f11ffe36"},{url:"icons/custom-icons/iconfont.ttf",revision:"e7ed83504792a7ed4be71de34b11ee18"},{url:"icons/custom-icons/iconfont.woff",revision:"335bc47631f8a4dec196188d5ff7af4c"},{url:"icons/custom-icons/iconfont.woff2",revision:"7fe9b79c800050f4ec3d64208e59fd05"},{url:"icons/material-icons/MaterialIcons-Regular.ijmap",revision:"ed6a98d002bc0b535dd8618f3ae05fe7"},{url:"icons/material-icons/MaterialIcons-Regular.woff",revision:"012cf6a10129e2275d79d6adac7f3b02"},{url:"icons/material-icons/MaterialIcons-Regular.woff2",revision:"570eb83859dc23dd0eec423a49e147fe"},{url:"images/404.png",revision:"e29418b977c1a9df05311f6f8174c982"},{url:"images/avatar_alpha.png",revision:"ad6a9d527e537424577064832e060952"},{url:"images/avatar_raw.png",revision:"87826033522e4c2ad131ee37f523e4d0"},{url:"images/avatar.png",revision:"0acf37b762876c3999bb712819ef0fe3"},{url:"images/banner.png",revision:"2ee95bb7a85818007186d689ecf44946"},{url:"images/favicon.png",revision:"87ae8963127575acec181c079a6a2cf8"},{url:"images/grey.png",revision:"4680dd65d50f69351be0fca639f50066"},{url:"images/loading.gif",revision:"26ca85dd1d55d1e4cdf080af025206b2"},{url:"images/page/404/404.png",revision:"e29418b977c1a9df05311f6f8174c982"},{url:"images/pwaicons/maskable_icon_x128.png",revision:"a3dccf851b60d9d5b58266ef8e97c545"},{url:"images/pwaicons/maskable_icon_x144.png",revision:"1e3aabf915125db28684ebf5c1baa959"},{url:"images/pwaicons/maskable_icon_x192.png",revision:"3380a34bcfba9d78f0c9def7cfec8fde"},{url:"images/pwaicons/maskable_icon_x384.png",revision:"780d18b7ede2dd6d7adde988b1e7f721"},{url:"images/pwaicons/maskable_icon_x48.png",revision:"8ef6e2cb0191bd698126b87c62165a1e"},{url:"images/pwaicons/maskable_icon_x512.png",revision:"ea3bc253602fb95f54a154ddaa6c6109"},{url:"images/pwaicons/maskable_icon_x72.png",revision:"84681054df41fe8f664e36702d158d6d"},{url:"images/pwaicons/maskable_icon_x96.png",revision:"b4119ef317a37b10077c9b9b2556cba9"},{url:"images/pwaicons/maskable_icon.png",revision:"a51f21c530b52a94458517a3105e446e"},{url:"images/pwaicons/screenshot/mobile.png",revision:"0675dd7350aa821e6d6fa76387b0fa3d"},{url:"images/pwaicons/screenshot/mobile2.png",revision:"c44bbc0c792364e9f75a6a51f7de5ce3"},{url:"images/pwaicons/screenshot/wide.png",revision:"9c34f031d580e06a72178c87436ad476"},{url:"images/pwaicons/screenshot/wide2.png",revision:"8fd888c1442ea3267767738a3b8f70a6"},{url:"images/random/material-1.png",revision:"0c4e486759ad62e3415f8f197f0311f7"},{url:"images/random/material-10.png",revision:"2263d9d1cc9b0724e6331374c33f988b"},{url:"images/random/material-11.png",revision:"41127baf9a286e968a63653dee50ba21"},{url:"images/random/material-12.png",revision:"2507dbe92186b0b39df6331347aa2c27"},{url:"images/random/material-13.png",revision:"5d127887b6d043259f7e2fb99cd08175"},{url:"images/random/material-14.png",revision:"84c21a53679bddbe415fdae1d3c02163"},{url:"images/random/material-15.png",revision:"ec116546453394cc0d78e580d6d52dd5"},{url:"images/random/material-16.png",revision:"39a5dca2dc2de60bd5dd191f205db7d6"},{url:"images/random/material-17.png",revision:"30a855e361dcf170aecdce04ce564c68"},{url:"images/random/material-18.png",revision:"584900ff821930a8b093b4c0a58be34b"},{url:"images/random/material-19.png",revision:"c004830c8683856939dc83b75b230b66"},{url:"images/random/material-2.png",revision:"fa4f4588b9fab07979acd61b94d34fa0"},{url:"images/random/material-3.png",revision:"418c3457b6792eb732844d41d2501294"},{url:"images/random/material-4.png",revision:"99898b727359e568759eebbb2c9e4a8b"},{url:"images/random/material-5.png",revision:"e521776cb427f848546e20d784888a55"},{url:"images/random/material-6.png",revision:"db810792edf3d40de5baf5401a9a0626"},{url:"images/random/material-7.png",revision:"d7e9fe3e0e3db6b841ab12fad331daed"},{url:"images/random/material-8.png",revision:"9f1914138052c3a631e1f2b2cf674a46"},{url:"images/random/material-9.png",revision:"069b687b7f1069254c816a56317bfaad"},{url:"index.html",revision:"0ba49f3e29ae94b22ed279487f2bdf6a"},{url:"js/mdui.js",revision:"90f8340ca8d6a9708cdb8b50c9ba6853"},{url:"js/script.js",revision:"6c74423367a5a608ac3bcfc0d1300eb6"},{url:"new/index.html",revision:"e1b25ce3b7ae8c2d72347d1e36939016"},{url:"page/2/index.html",revision:"1c8667ce0d4fd8f46c8df6bd1e339b74"},{url:"page/3/index.html",revision:"7018396f1b808774b0220827a9414790"},{url:"redirect/index.html",revision:"ce75233738ce8f2e11f284fd90beec0e"},{url:"search.xml",revision:"c6bc459921ee2847e6d87aec39c5de16"},{url:"sitemap.xml",revision:"4de2f4ca288a00cd47b38d0bcf1bb2fe"},{url:"tagcloud/index.html",revision:"1c8bb200899c76bb097a3e07e2784757"},{url:"tags/AI/index.html",revision:"7315fa52d42e9c03782c38cf70c519c6"},{url:"tags/index.html",revision:"3c8a72042939a0310dfeeb5c400a6c8c"},{url:"tags/KDE/index.html",revision:"0716cc6677d22d6de6af8778eb767d5e"},{url:"tags/openai/index.html",revision:"f6b14587a25b2453b689efc70968ec27"},{url:"tags/root/index.html",revision:"f3a46a91eb586886b20b7f4d8c894134"},{url:"tags/xposed/index.html",revision:"3fc71b9c04b6addec2340bba7cad2c90"},{url:"tags/互联/index.html",revision:"487e4280e6acafabb89871c140ffab63"},{url:"tags/单词笔/index.html",revision:"d25aa076054917523f3980f71897a478"},{url:"tags/安卓/index.html",revision:"fd2611a99b0ab347678cacc82b1618a0"},{url:"tags/开源/index.html",revision:"ca0dffd0d25f21729b93c5850dd1b94f"},{url:"timeline/index.html",revision:"b661db8e6403355009b249c09ed3a0f7"}],{}),e.registerRoute(/.*\.html$/,new e.StaleWhileRevalidate({cacheName:"html-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/.*\.(css|js)$/,new e.CacheFirst({cacheName:"css-js-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/^(?!.*(sitemap|atom)\.xml$).*\.xml$/,new e.CacheFirst({cacheName:"xml-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/.*\.(png|gif|webp|ico|svg|cur|woff|ijmap|ttf|eot|woff2?)$/,new e.CacheFirst({cacheName:"media-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/.*\/(avatar|banner|favicon|grey|loading|material-\d+)\.(png|gif)$/,new e.CacheFirst({cacheName:"media-preset-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/(cdn\.staticfile\.org|unpkg\.com|cdn\.bootcdn\.net|cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|cdn-city\.livere\.com)\/.*/,new e.CacheFirst({cacheName:"cdn-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
