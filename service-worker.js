if(!self.define){let e,a={};const o=(o,i)=>(o=new URL(o+".js",i).href,a[o]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=a,document.head.appendChild(e)}else e=o,importScripts(o),a()})).then((()=>{let e=a[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let s={};const n=e=>o(e,c),d={module:{uri:c},exports:s,require:n};a[c]=Promise.all(i.map((e=>d[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-ddbcfce3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/10/01/play-on-scanpen/index.html",revision:"6fd855d5d15320edcdacb8034de0fce5"},{url:"2024/02/01/root-on-scanpen/index.html",revision:"f0061f83116026a7d6a4867b9c365167"},{url:"2024/03/22/hide-your-scanpen/index.html",revision:"f8df4d3db1e21da2cdd8993917371e71"},{url:"2024/12/01/talk-about-x-ai/index.html",revision:"55290484f65f49c7d60192bef5a193aa"},{url:"2024/12/03/real-harmony-connect-all/index.html",revision:"2a36088c29e6876a6505254512cc9773"},{url:"2024/12/21/fork-this-theme/index.html",revision:"504749265528318ee522ea12ab61c805"},{url:"2024/12/21/noise/index.html",revision:"4ccaf7f32120f7580de4e566bd79d08f"},{url:"404.html",revision:"1791ace25a8ed51047eaa12b0996f449"},{url:"about/index.html",revision:"184b4712b17ea933b1722d5f2959f15f"},{url:"archives/2023/10/index.html",revision:"ded70046527fa4eb4294dc22f7fda7a7"},{url:"archives/2023/index.html",revision:"6cf5882fe2f3596b5da20b17ef7692e0"},{url:"archives/2024/02/index.html",revision:"cfdec31bb76cb80b07f30a98b0951d78"},{url:"archives/2024/03/index.html",revision:"b7340647b95e1152f1a75da02de7fddc"},{url:"archives/2024/12/index.html",revision:"7832c2633e7f383ad1c393dbd982a6de"},{url:"archives/2024/index.html",revision:"f280350dd48c129d856ac4304ba2493f"},{url:"archives/index.html",revision:"a7e2ea935ba30f83eacef6f6808ff70a"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/技术/index.html",revision:"c304469fed6d6a685348ce2c528f3785"},{url:"categories/技术/瞎聊/index.html",revision:"b60912bfdc554531c132032d8f70d58a"},{url:"categories/折腾/index.html",revision:"14fc4c74c06d518163f4b3aa753731f6"},{url:"categories/折腾/电子垃圾/index.html",revision:"028af59a8312fd638ee96f680dd4bfad"},{url:"css/mdui.css",revision:"c40d8e2de416cbe33c5c54549e2f3845"},{url:"css/style.css",revision:"773a2eced25e3033fd46a7b64724d97e"},{url:"custom.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"custom.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/roboto/Roboto-Black.woff",revision:"4c3b6229efe63a13dbb4c3c32e292e61"},{url:"fonts/roboto/Roboto-Black.woff2",revision:"2b8d6922c2c9957356bc50f475de4e79"},{url:"fonts/roboto/Roboto-BlackItalic.woff",revision:"3a99796b2d8592471fcf278df4334d5d"},{url:"fonts/roboto/Roboto-BlackItalic.woff2",revision:"38d14dd4ff163c34e45b9701668652d4"},{url:"fonts/roboto/Roboto-Bold.woff",revision:"ad140ff02a7091257e2b31619106194e"},{url:"fonts/roboto/Roboto-Bold.woff2",revision:"ab96cca26751239828b8e9c524cca5bb"},{url:"fonts/roboto/Roboto-BoldItalic.woff",revision:"a7dce23c0dd99a4afa5cdb4925f0358a"},{url:"fonts/roboto/Roboto-BoldItalic.woff2",revision:"355e388740673054493ce5fe32e37596"},{url:"fonts/roboto/Roboto-Light.woff",revision:"37fbbbad5577a95bdf058307c717c882"},{url:"fonts/roboto/Roboto-Light.woff2",revision:"8e0860f3581b197e9fa4713a706c7bcc"},{url:"fonts/roboto/Roboto-LightItalic.woff",revision:"c7b4e746cf8ecbf412fc944146154d24"},{url:"fonts/roboto/Roboto-LightItalic.woff2",revision:"879d940bccbb25f6096ec4361154d469"},{url:"fonts/roboto/Roboto-Medium.woff",revision:"303ded6436dcf7ea75157e2aeff876ce"},{url:"fonts/roboto/Roboto-Medium.woff2",revision:"2741a14e49524efa6059c735010239d0"},{url:"fonts/roboto/Roboto-MediumItalic.woff",revision:"da059a7386fea889c55cce11253df175"},{url:"fonts/roboto/Roboto-MediumItalic.woff2",revision:"f10d1f42838680a70ac2b66e62887106"},{url:"fonts/roboto/Roboto-Regular.woff",revision:"081b11ebaca8ad30fd092e01451015dc"},{url:"fonts/roboto/Roboto-Regular.woff2",revision:"b2a6341ae7440130ec4b4b186aff8413"},{url:"fonts/roboto/Roboto-RegularItalic.woff",revision:"8add1ba317c27e39b7781c95fa174671"},{url:"fonts/roboto/Roboto-RegularItalic.woff2",revision:"df8e3a9b9aed943417973988732b928f"},{url:"fonts/roboto/Roboto-Thin.woff",revision:"90d3804f0231704c15ccc5861245e8ce"},{url:"fonts/roboto/Roboto-Thin.woff2",revision:"790ebf41d0214f5eda4ef61263ed75f8"},{url:"fonts/roboto/Roboto-ThinItalic.woff",revision:"588293290e86dad97fcf33ed1719c083"},{url:"fonts/roboto/Roboto-ThinItalic.woff2",revision:"8a2c1a5de09de8bb2c45390a10f90c2b"},{url:"friends/39af7994fbe843b7bcc0f9d201d8785a.png",revision:"8be4842a30f086f17ca7f63ebbe725d1"},{url:"friends/index.html",revision:"1763dba66eea312c2650c9ff51b54ce3"},{url:"friends/listder.jpg",revision:"9e1ce8bf57da62635543ea3c26f60f16"},{url:"icons/custom-icons/iconfont.eot",revision:"a2a8787dac4c3c9b8883666c3b7df6a3"},{url:"icons/custom-icons/iconfont.svg",revision:"2fcf538d7df47fd4d68e85f8f11ffe36"},{url:"icons/custom-icons/iconfont.ttf",revision:"e7ed83504792a7ed4be71de34b11ee18"},{url:"icons/custom-icons/iconfont.woff",revision:"335bc47631f8a4dec196188d5ff7af4c"},{url:"icons/custom-icons/iconfont.woff2",revision:"7fe9b79c800050f4ec3d64208e59fd05"},{url:"icons/material-icons/MaterialIcons-Regular.woff",revision:"012cf6a10129e2275d79d6adac7f3b02"},{url:"icons/material-icons/MaterialIcons-Regular.woff2",revision:"570eb83859dc23dd0eec423a49e147fe"},{url:"images/404_compressed.jpg",revision:"ab62a61e578a138e523c70a139c04f85"},{url:"images/404.png",revision:"e29418b977c1a9df05311f6f8174c982"},{url:"images/avatar_compressed.jpg",revision:"087f261083a6e05e4dfea36d90b0b3ca"},{url:"images/avatar.jpg",revision:"d74d058b40416b424d295c1daf74000d"},{url:"images/avatar.jpg@128x128_compressed.jpg",revision:"2fe8c98eb7382abcfde89f8d8ed8b277"},{url:"images/avatar.jpg@128x128.jpg",revision:"e44b1e82d9bbf58a8fd8ad64b22dfb12"},{url:"images/avatar.jpg@128x128.webp",revision:"b7d65f772a38e05845f5326d710d5689"},{url:"images/avatar.png",revision:"0acf37b762876c3999bb712819ef0fe3"},{url:"images/banner.png",revision:"2ee95bb7a85818007186d689ecf44946"},{url:"images/blog/hide-your-scanpen/1_compressed.jpg",revision:"3e6ae06e604f7f563ce48843d0f4fe07"},{url:"images/blog/hide-your-scanpen/1.jpg",revision:"147b003293993ef62dc42205438768a7"},{url:"images/blog/hide-your-scanpen/2_compressed.jpg",revision:"c71807f5df98025dfbf0413d00d4147d"},{url:"images/blog/hide-your-scanpen/2.jpg",revision:"f83032bfc38e9199b2e21b43ac206a29"},{url:"images/blog/hide-your-scanpen/3_compressed.jpg",revision:"3547423faf707affcded2c8ecd049c7e"},{url:"images/blog/hide-your-scanpen/3.jpg",revision:"2b741a01dae6edb964e9b4ab6c9e186d"},{url:"images/blog/hide-your-scanpen/4_compressed.jpg",revision:"43dc78687c09604d8209d5652de9c98a"},{url:"images/blog/hide-your-scanpen/4.jpg",revision:"e67f65962c1a3576d0cfaf3ee1169e2c"},{url:"images/blog/hide-your-scanpen/5_compressed.jpg",revision:"b8484192423bfbb0bbd304969da112b2"},{url:"images/blog/hide-your-scanpen/5.jpg",revision:"04074a47d604d2860a2a6014d8a4dd40"},{url:"images/blog/hide-your-scanpen/6_compressed.jpg",revision:"e6f78ac8883dfdb15147423b03bc6bf1"},{url:"images/blog/hide-your-scanpen/6.jpg",revision:"6eb4ad7bf02e804604e2a0d5244684ce"},{url:"images/blog/hide-your-scanpen/7_compressed.jpg",revision:"ba5ffac076550e34a22d2826868688a8"},{url:"images/blog/hide-your-scanpen/7.jpg",revision:"4f2c4193694f8e92d7ceaf7d1d3415e4"},{url:"images/blog/hide-your-scanpen/thumb_compressed.jpg",revision:"77c7224a3a59386cfb6ccaddfc934419"},{url:"images/blog/play-on-scanpen/1_compressed.jpg",revision:"a768d235e67faeabc9229d1561494841"},{url:"images/blog/play-on-scanpen/1.jpg",revision:"43cf02e325de69b21a123ffcc7e26856"},{url:"images/blog/play-on-scanpen/2_compressed.jpg",revision:"88bb5cf01b8b706619c92ac1f2bc1291"},{url:"images/blog/play-on-scanpen/2.jpg",revision:"45d79211d291e478f909283d54e8cca9"},{url:"images/blog/play-on-scanpen/3_compressed.jpg",revision:"97c6af0e8d3280d2bffb1d32a6fcfa39"},{url:"images/blog/play-on-scanpen/3.jpg",revision:"69a7a71b30571d8945d456a87cc21ff7"},{url:"images/blog/play-on-scanpen/4_compressed.jpg",revision:"a9f4bf3739abf5cc116e2af2587994b9"},{url:"images/blog/play-on-scanpen/4.jpg",revision:"7d009b3ec04be34b5087c616a0a39d5b"},{url:"images/blog/play-on-scanpen/5_compressed.jpg",revision:"13ee3ebe457d3c43f709663fe04b46cb"},{url:"images/blog/play-on-scanpen/5.jpg",revision:"cfd155f8116c6aedb68ec7e80682a6c6"},{url:"images/blog/play-on-scanpen/6_compressed.jpg",revision:"c3aa623ba404bb6e6887c4fe2386b984"},{url:"images/blog/play-on-scanpen/6.jpg",revision:"595d50cfc7416d5076394669c8d33d16"},{url:"images/blog/play-on-scanpen/7_compressed.jpg",revision:"d5ef026a13241296db450867430c9f96"},{url:"images/blog/play-on-scanpen/7.jpg",revision:"e8cb3c661a11e5395fc9ece447a9eb04"},{url:"images/blog/play-on-scanpen/thumb_compressed.jpg",revision:"c3f94f5fc0ca5a6ed075f4c6195f0320"},{url:"images/blog/real-harmony-connect-all/1_compressed.jpg",revision:"ae2ce5053eab49217f4e166d8e11882e"},{url:"images/blog/real-harmony-connect-all/1.jpg",revision:"ef6500d9a6e0f80a9cff56dfdaaaa2d2"},{url:"images/blog/real-harmony-connect-all/2_compressed.jpg",revision:"402e2d4a96dcab29d68129e709fe5ecb"},{url:"images/blog/real-harmony-connect-all/2.jpg",revision:"0bcbbf4bae9e34bfaec7ca1fc0a8f6ea"},{url:"images/blog/real-harmony-connect-all/3_compressed.jpg",revision:"be25a9ae74fefcba487be97d98381e52"},{url:"images/blog/real-harmony-connect-all/3.jpg",revision:"f63a3f4881acc80f65d9ef6dc6e1b560"},{url:"images/blog/real-harmony-connect-all/4_compressed.jpg",revision:"b040cdbf07820194be611b0f9cb37285"},{url:"images/blog/real-harmony-connect-all/4.jpg",revision:"c151cda4444af5c73e949efd83024ae0"},{url:"images/blog/real-harmony-connect-all/5_compressed.jpg",revision:"909abe6f752d8bd3b846b6999ea28cca"},{url:"images/blog/real-harmony-connect-all/5.jpg",revision:"34a2e239d9583100ec49374f9c155ea0"},{url:"images/blog/real-harmony-connect-all/6_compressed.jpg",revision:"7839c75512d7075bb8bc7f70dbe2a2e5"},{url:"images/blog/real-harmony-connect-all/6.jpg",revision:"02ee24b98afd90219a49aec7a2b8fbb6"},{url:"images/blog/real-harmony-connect-all/7_compressed.jpg",revision:"1638ab2d506043a19340d87c5add060a"},{url:"images/blog/real-harmony-connect-all/7.png",revision:"7cab32a55fe48ddb8949d1133539791e"},{url:"images/blog/root-on-scanpen/1_compressed.jpg",revision:"d5ef026a13241296db450867430c9f96"},{url:"images/blog/root-on-scanpen/1.jpg",revision:"e8cb3c661a11e5395fc9ece447a9eb04"},{url:"images/blog/root-on-scanpen/10_compressed.jpg",revision:"4e2a39ec55a587668afb60e70203b709"},{url:"images/blog/root-on-scanpen/10.jpg",revision:"f8d9448a80bfa4234cefa120f37ccc1b"},{url:"images/blog/root-on-scanpen/11_compressed.jpg",revision:"a68fb2967503f2492476feca18bf1226"},{url:"images/blog/root-on-scanpen/11.jpg",revision:"c93f00e750b376a0ba6f42320e651dd6"},{url:"images/blog/root-on-scanpen/2_compressed.jpg",revision:"8b82721a82aae487b1132a70384f81b5"},{url:"images/blog/root-on-scanpen/2.jpg",revision:"e4515b8f6068a92b381f09d52a9fcd93"},{url:"images/blog/root-on-scanpen/3_compressed.jpg",revision:"faead43359b4db644137f34cc4645ffe"},{url:"images/blog/root-on-scanpen/3.jpg",revision:"4a8c70f0748a7c1d3fd4eeadb24350d7"},{url:"images/blog/root-on-scanpen/4_compressed.jpg",revision:"309b80274a170184ec46101d435249ec"},{url:"images/blog/root-on-scanpen/4.jpg",revision:"41d43ce1e99cdf046fb5ba88b19f312b"},{url:"images/blog/root-on-scanpen/5_compressed.jpg",revision:"d70071bc545beb8ddb89e2cfac025f6f"},{url:"images/blog/root-on-scanpen/5.jpg",revision:"f2ee5d551252b8ba12d6ebb6c849e937"},{url:"images/blog/root-on-scanpen/6_compressed.jpg",revision:"526daa859e05ed1b000aef276f79c06b"},{url:"images/blog/root-on-scanpen/6.jpg",revision:"c2582b5fb5e6f61926f61548b6cdbeab"},{url:"images/blog/root-on-scanpen/7_compressed.jpg",revision:"d4cc211f51e46c5d18f98f264997d048"},{url:"images/blog/root-on-scanpen/7.jpg",revision:"7638c74314e1314256dc388b5c55a8da"},{url:"images/blog/root-on-scanpen/8_compressed.jpg",revision:"4e2a39ec55a587668afb60e70203b709"},{url:"images/blog/root-on-scanpen/8.jpg",revision:"f8d9448a80bfa4234cefa120f37ccc1b"},{url:"images/blog/root-on-scanpen/9_compressed.jpg",revision:"52d114c0252638b2978044e761caf3b1"},{url:"images/blog/root-on-scanpen/9.jpg",revision:"adfb29b907a06d7e36dab09e80a5e263"},{url:"images/blog/root-on-scanpen/thumb_compressed.jpg",revision:"11e44a1c80b0f0fc1222504b3da802b5"},{url:"images/blog/talk-about-x-ai/1_compressed.jpg",revision:"8a79d86f3fc8c5e743eb1eed712db026"},{url:"images/blog/talk-about-x-ai/1.jpg",revision:"54d59d9c9040cef6ecce638d5e94f1c6"},{url:"images/favicon_compressed.jpg",revision:"2f8ee9aeea76840c7dff20d6ae9b0191"},{url:"images/favicon.png",revision:"87ae8963127575acec181c079a6a2cf8"},{url:"images/grey.png",revision:"4680dd65d50f69351be0fca639f50066"},{url:"images/loading.gif",revision:"1adb6e4d9354afe7ba06ed566c22e3e8"},{url:"images/page/404/404_compressed.jpg",revision:"ab62a61e578a138e523c70a139c04f85"},{url:"images/page/404/404.png",revision:"e29418b977c1a9df05311f6f8174c982"},{url:"images/page/donate/alipay.jpg",revision:"5e3ea63c3e419d719282441bf5bcb668"},{url:"images/page/donate/wechat.jpg",revision:"605284a1cd806d3de29aecf2e695b103"},{url:"images/pwaicons/avatar_144x144.png",revision:"830206ff1fe92981c1be6475fc78209b"},{url:"images/pwaicons/avatar_192x192.png",revision:"24b80a1701de5515172f4e6821cd0439"},{url:"images/pwaicons/avatar_36x36.png",revision:"62bcc89934de27d7d7df5bea9d494a2f"},{url:"images/pwaicons/avatar_48x48.png",revision:"73ef586a75771a05c484f54dc1ac8ff5"},{url:"images/pwaicons/avatar_512x512.png",revision:"357704f580b355406c1f1a07af4bcc04"},{url:"images/pwaicons/avatar_72x72.png",revision:"ce017547ba55882320de28a0e1b51b7d"},{url:"images/pwaicons/avatar_96x96.png",revision:"567f261126d0430ecb0c9d29601deae9"},{url:"images/pwaicons/avatar.jpg",revision:"d74d058b40416b424d295c1daf74000d"},{url:"images/random/material-1.png",revision:"0c4e486759ad62e3415f8f197f0311f7"},{url:"images/random/material-10.png",revision:"2263d9d1cc9b0724e6331374c33f988b"},{url:"images/random/material-11.png",revision:"41127baf9a286e968a63653dee50ba21"},{url:"images/random/material-12.png",revision:"2507dbe92186b0b39df6331347aa2c27"},{url:"images/random/material-13.png",revision:"5d127887b6d043259f7e2fb99cd08175"},{url:"images/random/material-14.png",revision:"84c21a53679bddbe415fdae1d3c02163"},{url:"images/random/material-15.png",revision:"ec116546453394cc0d78e580d6d52dd5"},{url:"images/random/material-16.png",revision:"39a5dca2dc2de60bd5dd191f205db7d6"},{url:"images/random/material-17.png",revision:"30a855e361dcf170aecdce04ce564c68"},{url:"images/random/material-18.png",revision:"584900ff821930a8b093b4c0a58be34b"},{url:"images/random/material-19.png",revision:"c004830c8683856939dc83b75b230b66"},{url:"images/random/material-2.png",revision:"fa4f4588b9fab07979acd61b94d34fa0"},{url:"images/random/material-3.png",revision:"418c3457b6792eb732844d41d2501294"},{url:"images/random/material-4.png",revision:"99898b727359e568759eebbb2c9e4a8b"},{url:"images/random/material-5.png",revision:"e521776cb427f848546e20d784888a55"},{url:"images/random/material-6.png",revision:"db810792edf3d40de5baf5401a9a0626"},{url:"images/random/material-7.png",revision:"d7e9fe3e0e3db6b841ab12fad331daed"},{url:"images/random/material-8.png",revision:"9f1914138052c3a631e1f2b2cf674a46"},{url:"images/random/material-9.png",revision:"069b687b7f1069254c816a56317bfaad"},{url:"index.html",revision:"486142bc1a61eb4499ee2dc9f0b64369"},{url:"js/mdui.js",revision:"90f8340ca8d6a9708cdb8b50c9ba6853"},{url:"js/script.js",revision:"6c74423367a5a608ac3bcfc0d1300eb6"},{url:"new/index.html",revision:"de622412babd423066a872471876e92f"},{url:"redirect/index.html",revision:"41f91b33628ad3532b38b7162c7ed4c0"},{url:"tagcloud/index.html",revision:"5f575ec5264326c227471a91757a2984"},{url:"tags/AI/index.html",revision:"36ed91f4695845a9ca7b5e939dc14363"},{url:"tags/index.html",revision:"806a7b24c69cdab45cdf6e8c03207e1c"},{url:"tags/KDE/index.html",revision:"325ce94ef72901865ed8442f84d36dea"},{url:"tags/openai/index.html",revision:"25de3d3ce1f8b906b7e2085cf03a001d"},{url:"tags/root/index.html",revision:"f63bb26f0d48a9714fb32543d1088c76"},{url:"tags/xposed/index.html",revision:"074c4ba41ea5667e8c9d75161b714485"},{url:"tags/互联/index.html",revision:"7f8457695e90eaac95a93431dd470597"},{url:"tags/单词笔/index.html",revision:"b6aba4245db5a721bd1c5df692e89ff9"},{url:"tags/安卓/index.html",revision:"ce3c653f2494e2c0a5c797ab5560c82c"},{url:"tags/开源/index.html",revision:"c7b5e7bb7d4893a6c546e8633b7be904"},{url:"timeline/index.html",revision:"2689de5b1014518540757cb282882bde"}],{}),e.registerRoute(/^https:\/\/mirror\.blog\.stevezmt\.top\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
