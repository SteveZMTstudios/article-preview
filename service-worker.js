if(!self.define){let e,a={};const i=(i,o)=>(i=new URL(i+".js",o).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let n={};const c=e=>i(e,r),d={module:{uri:r},exports:n,require:c};a[r]=Promise.all(o.map((e=>d[e]||c(e)))).then((e=>(s(...e),n)))}}define(["./workbox-721b6048"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/10/01/play-on-scanpen/index.html",revision:"379a9650b1263d737f6cfa91737472f4"},{url:"2024/02/01/root-on-scanpen/index.html",revision:"ee3a290c68e0888bb73a4a45f15cd38a"},{url:"2024/03/22/hide-your-scanpen/index.html",revision:"079f41c9d2a4ff3b10c9bc1b9a5fc1fa"},{url:"2024/12/01/talk-about-x-ai/index.html",revision:"c35edf724bc2f98dbba0c0323f9ded45"},{url:"2024/12/03/real-harmony-connect-all/index.html",revision:"8b47ded68b7044fd757794b0ed83fc48"},{url:"2024/12/21/fork-this-theme/index.html",revision:"c1205f6b85592278847bfedc707af6c4"},{url:"2024/12/21/noise/index.html",revision:"4496fe5608d88f55dc5082f88f891f00"},{url:"2024/12/24/markdown-test/index.html",revision:"ebc95927b085a725a4bfc2d43ff352a5"},{url:"2024/12/24/test2-1/index.html",revision:"e3ffb077f16e29140077aadae54449c2"},{url:"404.html",revision:"2d1e5b3f21f645441ed90bca419bc658"},{url:"about/index.html",revision:"bf9f3e63032d7e31ef01e92973a17041"},{url:"archives/2023/10/index.html",revision:"36cd4198a3c63bde55f6e1360c83ff09"},{url:"archives/2023/index.html",revision:"16ea89bc582c60889845179de724f8da"},{url:"archives/2024/02/index.html",revision:"a0f9602cab230e41add51640f00e84cd"},{url:"archives/2024/03/index.html",revision:"4c388571e231c179faa1eabff85720d9"},{url:"archives/2024/12/index.html",revision:"7c1f02dc118f5d0db8cf8af42e3b1bd9"},{url:"archives/2024/index.html",revision:"bb174a05f09a2c665f0c7736789abd7f"},{url:"archives/index.html",revision:"3c3b7b9a2d7542d5936283c4862c8817"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"atom.xml",revision:"ab4316bda16f0c45fd26e46c8c7a26c2"},{url:"categories/技术/index.html",revision:"a970382805f08c1c439a8118464bb56f"},{url:"categories/技术/瞎聊/index.html",revision:"a2b73b2ff40676bd9e882204f0e1de57"},{url:"categories/折腾/index.html",revision:"cc3ecf30447b3caacaabd647aa8d4680"},{url:"categories/折腾/电子垃圾/index.html",revision:"ca02f14f1b8f70a7df7f8e0cea42e9a2"},{url:"css/mdui.css",revision:"ede025291378e92fd6fa6c3d38521d81"},{url:"css/style.css",revision:"773a2eced25e3033fd46a7b64724d97e"},{url:"custom.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"custom.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/roboto/Roboto-Black.woff",revision:"4c3b6229efe63a13dbb4c3c32e292e61"},{url:"fonts/roboto/Roboto-Black.woff2",revision:"2b8d6922c2c9957356bc50f475de4e79"},{url:"fonts/roboto/Roboto-BlackItalic.woff",revision:"3a99796b2d8592471fcf278df4334d5d"},{url:"fonts/roboto/Roboto-BlackItalic.woff2",revision:"38d14dd4ff163c34e45b9701668652d4"},{url:"fonts/roboto/Roboto-Bold.woff",revision:"ad140ff02a7091257e2b31619106194e"},{url:"fonts/roboto/Roboto-Bold.woff2",revision:"ab96cca26751239828b8e9c524cca5bb"},{url:"fonts/roboto/Roboto-BoldItalic.woff",revision:"a7dce23c0dd99a4afa5cdb4925f0358a"},{url:"fonts/roboto/Roboto-BoldItalic.woff2",revision:"355e388740673054493ce5fe32e37596"},{url:"fonts/roboto/Roboto-Light.woff",revision:"37fbbbad5577a95bdf058307c717c882"},{url:"fonts/roboto/Roboto-Light.woff2",revision:"8e0860f3581b197e9fa4713a706c7bcc"},{url:"fonts/roboto/Roboto-LightItalic.woff",revision:"c7b4e746cf8ecbf412fc944146154d24"},{url:"fonts/roboto/Roboto-LightItalic.woff2",revision:"879d940bccbb25f6096ec4361154d469"},{url:"fonts/roboto/Roboto-Medium.woff",revision:"303ded6436dcf7ea75157e2aeff876ce"},{url:"fonts/roboto/Roboto-Medium.woff2",revision:"2741a14e49524efa6059c735010239d0"},{url:"fonts/roboto/Roboto-MediumItalic.woff",revision:"da059a7386fea889c55cce11253df175"},{url:"fonts/roboto/Roboto-MediumItalic.woff2",revision:"f10d1f42838680a70ac2b66e62887106"},{url:"fonts/roboto/Roboto-Regular.woff",revision:"081b11ebaca8ad30fd092e01451015dc"},{url:"fonts/roboto/Roboto-Regular.woff2",revision:"b2a6341ae7440130ec4b4b186aff8413"},{url:"fonts/roboto/Roboto-RegularItalic.woff",revision:"8add1ba317c27e39b7781c95fa174671"},{url:"fonts/roboto/Roboto-RegularItalic.woff2",revision:"df8e3a9b9aed943417973988732b928f"},{url:"fonts/roboto/Roboto-Thin.woff",revision:"90d3804f0231704c15ccc5861245e8ce"},{url:"fonts/roboto/Roboto-Thin.woff2",revision:"790ebf41d0214f5eda4ef61263ed75f8"},{url:"fonts/roboto/Roboto-ThinItalic.woff",revision:"588293290e86dad97fcf33ed1719c083"},{url:"fonts/roboto/Roboto-ThinItalic.woff2",revision:"8a2c1a5de09de8bb2c45390a10f90c2b"},{url:"friends/39af7994fbe843b7bcc0f9d201d8785a.png",revision:"8be4842a30f086f17ca7f63ebbe725d1"},{url:"friends/index.html",revision:"cfc987453adc469fe4647266940a3693"},{url:"friends/listder.jpg",revision:"9e1ce8bf57da62635543ea3c26f60f16"},{url:"icons/custom-icons/iconfont.eot",revision:"a2a8787dac4c3c9b8883666c3b7df6a3"},{url:"icons/custom-icons/iconfont.svg",revision:"2fcf538d7df47fd4d68e85f8f11ffe36"},{url:"icons/custom-icons/iconfont.ttf",revision:"e7ed83504792a7ed4be71de34b11ee18"},{url:"icons/custom-icons/iconfont.woff",revision:"335bc47631f8a4dec196188d5ff7af4c"},{url:"icons/custom-icons/iconfont.woff2",revision:"7fe9b79c800050f4ec3d64208e59fd05"},{url:"icons/material-icons/MaterialIcons-Regular.ijmap",revision:"ed6a98d002bc0b535dd8618f3ae05fe7"},{url:"icons/material-icons/MaterialIcons-Regular.woff",revision:"012cf6a10129e2275d79d6adac7f3b02"},{url:"icons/material-icons/MaterialIcons-Regular.woff2",revision:"570eb83859dc23dd0eec423a49e147fe"},{url:"images/404_compressed.jpg",revision:"ab62a61e578a138e523c70a139c04f85"},{url:"images/404.png",revision:"e29418b977c1a9df05311f6f8174c982"},{url:"images/AppImages/android/android-launchericon-144-144.png",revision:"3b1136b01b296eb67cfcc4a665f02d2d"},{url:"images/AppImages/android/android-launchericon-192-192.png",revision:"94783c6f707274a7c5629f0cb61eb2e3"},{url:"images/AppImages/android/android-launchericon-48-48.png",revision:"6909c2e2cb4bcf9a2b5315eacc61dee0"},{url:"images/AppImages/android/android-launchericon-512-512.png",revision:"5e1081237f559d5b0a4dcc3bf4063761"},{url:"images/AppImages/android/android-launchericon-72-72.png",revision:"4100c6721f109dafc26a02d1386b0b4d"},{url:"images/AppImages/android/android-launchericon-96-96.png",revision:"e4c2719b1e59f15b6599fd0ff327437b"},{url:"images/AppImages/ios/100.png",revision:"8df299d7c5961e332dae09f5675717db"},{url:"images/AppImages/ios/1024.png",revision:"15bf556a280845094ec65a7978cbdb4a"},{url:"images/AppImages/ios/114.png",revision:"4c80afe156a0c14f270017108d34fca6"},{url:"images/AppImages/ios/120.png",revision:"93917333fa35511a8a6ad870abf4c2e8"},{url:"images/AppImages/ios/128.png",revision:"669e25964467f7f70da29f4d8dcba2ef"},{url:"images/AppImages/ios/144.png",revision:"3b1136b01b296eb67cfcc4a665f02d2d"},{url:"images/AppImages/ios/152.png",revision:"158cc308888bcb0dccd94cef5378fc96"},{url:"images/AppImages/ios/16.png",revision:"b1b11c8926775ba07f8c6b30c22c230c"},{url:"images/AppImages/ios/167.png",revision:"c9284fcd8eb5b8e846da0c244636579a"},{url:"images/AppImages/ios/180.png",revision:"728bf69dc820d6cff97e744ca68a5cee"},{url:"images/AppImages/ios/192.png",revision:"94783c6f707274a7c5629f0cb61eb2e3"},{url:"images/AppImages/ios/20.png",revision:"1b1b862aa78659d7eecc2e28152b5399"},{url:"images/AppImages/ios/256.png",revision:"2e3dbcf9939d6ca3e38d01dac73d7145"},{url:"images/AppImages/ios/29.png",revision:"a0e3bbb60a881aaeb9e737e80727fecc"},{url:"images/AppImages/ios/32.png",revision:"e0b85123afd74fd6ff2d8734d5641830"},{url:"images/AppImages/ios/40.png",revision:"b7a6d4c2130d8faa1dc208c50de0c26b"},{url:"images/AppImages/ios/50.png",revision:"1e30d3f39b734b3818cee24bca943f9d"},{url:"images/AppImages/ios/512.png",revision:"5e1081237f559d5b0a4dcc3bf4063761"},{url:"images/AppImages/ios/57.png",revision:"344df744f8486c508f54981e0ab15a8b"},{url:"images/AppImages/ios/58.png",revision:"3dee5977a7fee57cde042cdf0f428dd4"},{url:"images/AppImages/ios/60.png",revision:"3cd0f772771ab86be53c5c4691e53e8e"},{url:"images/AppImages/ios/64.png",revision:"9f5413919127bceb801393a5364d963c"},{url:"images/AppImages/ios/72.png",revision:"4100c6721f109dafc26a02d1386b0b4d"},{url:"images/AppImages/ios/76.png",revision:"2b12ee60ad26d98f6ea4e5992885d31d"},{url:"images/AppImages/ios/80.png",revision:"0c260d21417807e3e79156d712e1ef1d"},{url:"images/AppImages/ios/87.png",revision:"0efb9a3a24c64ae8abaf66ae608e6e20"},{url:"images/AppImages/screenshot/mobile.png",revision:"0675dd7350aa821e6d6fa76387b0fa3d"},{url:"images/AppImages/screenshot/mobile2.png",revision:"c44bbc0c792364e9f75a6a51f7de5ce3"},{url:"images/AppImages/screenshot/wide.png",revision:"9c34f031d580e06a72178c87436ad476"},{url:"images/AppImages/screenshot/wide2.png",revision:"8fd888c1442ea3267767738a3b8f70a6"},{url:"images/AppImages/windows11/LargeTile.scale-100.png",revision:"b130817e67319217f2ff4fe41c739e4f"},{url:"images/AppImages/windows11/LargeTile.scale-125.png",revision:"06e8f71918e228ecf682ad4aadcea228"},{url:"images/AppImages/windows11/LargeTile.scale-150.png",revision:"d64a51b9db55ab5ff4a5d63bff5d7609"},{url:"images/AppImages/windows11/LargeTile.scale-200.png",revision:"08b35a9b4cd96d19f0bfd3cbb9b66a81"},{url:"images/AppImages/windows11/LargeTile.scale-400.png",revision:"2ae28a2b672360f7f7ec9e93e8b81df2"},{url:"images/AppImages/windows11/SmallTile.scale-100.png",revision:"b0ead2d66aa856f75a853dd9245db030"},{url:"images/AppImages/windows11/SmallTile.scale-125.png",revision:"7ba3e5f9cb7c11f1af22d90275e5bc53"},{url:"images/AppImages/windows11/SmallTile.scale-150.png",revision:"3d1084aded85710c2ceca1fd84f9b3ec"},{url:"images/AppImages/windows11/SmallTile.scale-200.png",revision:"25d05e4307f738a85e7f8430bd0fa32b"},{url:"images/AppImages/windows11/SmallTile.scale-400.png",revision:"7a2d8eb346ce41191b73eee4f132ddcf"},{url:"images/AppImages/windows11/SplashScreen.scale-100.png",revision:"68132d79fc9e4d91b55d45cdf0ccfc80"},{url:"images/AppImages/windows11/SplashScreen.scale-125.png",revision:"2b2ee6abaacacbee34162aaba0662be9"},{url:"images/AppImages/windows11/SplashScreen.scale-150.png",revision:"0fa0aa35a0ae92273463cbb53e6d61e7"},{url:"images/AppImages/windows11/SplashScreen.scale-200.png",revision:"5b96bd982df1d793a81fa48bc8a59735"},{url:"images/AppImages/windows11/SplashScreen.scale-400.png",revision:"9dc53af098dd05d07b6765f6c65e0368"},{url:"images/AppImages/windows11/Square150x150Logo.scale-100.png",revision:"632c302cf0d4ff3fb746c99009f28b3d"},{url:"images/AppImages/windows11/Square150x150Logo.scale-125.png",revision:"078e511e8ab6ed70bc0cfee86447ffec"},{url:"images/AppImages/windows11/Square150x150Logo.scale-150.png",revision:"71fafb51e16ebc654c4662fcaa81f4a3"},{url:"images/AppImages/windows11/Square150x150Logo.scale-200.png",revision:"1bff60f4e9b5d6cc60526cec23fcb8e0"},{url:"images/AppImages/windows11/Square150x150Logo.scale-400.png",revision:"1de933580f2b5e0c1b0c5db483e1ef16"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"3be79a85682d06a119d39cb1b04e3cba"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"86224c94e69f6762daf9fa3d024e2153"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"29987d113370a43848a7c3fbd60ec1d3"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"a125f52854baa0570927e836a39d0b3a"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"bae7aa94de288cea8b48f93617023206"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"a5dc868935878298bbfa95fbb034fb54"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"5e7fd43b1e1dd844b4a4a09f08152858"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"b5bb463b7ed46474e9c9a4c64d254914"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"502be8028777c1f6fe96e754f06a55a6"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"04dbcb4fd892f5cbab70e94f720c3d04"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"28bedfd80965a1c2f08cec320520194b"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"0692de620cd0fd48826938099d5aceaf"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"34e029ed0f79a9cd1cc14e6a6dee173a"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"748db1a742d8a8ad394b362944911bb7"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"f8e5249b8ec31e6fe538ca15a1ed6640"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"3be79a85682d06a119d39cb1b04e3cba"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"86224c94e69f6762daf9fa3d024e2153"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"29987d113370a43848a7c3fbd60ec1d3"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"a125f52854baa0570927e836a39d0b3a"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"bae7aa94de288cea8b48f93617023206"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"a5dc868935878298bbfa95fbb034fb54"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"5e7fd43b1e1dd844b4a4a09f08152858"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"b5bb463b7ed46474e9c9a4c64d254914"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"502be8028777c1f6fe96e754f06a55a6"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"04dbcb4fd892f5cbab70e94f720c3d04"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"28bedfd80965a1c2f08cec320520194b"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"0692de620cd0fd48826938099d5aceaf"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"34e029ed0f79a9cd1cc14e6a6dee173a"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"748db1a742d8a8ad394b362944911bb7"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"f8e5249b8ec31e6fe538ca15a1ed6640"},{url:"images/AppImages/windows11/Square44x44Logo.scale-100.png",revision:"502be8028777c1f6fe96e754f06a55a6"},{url:"images/AppImages/windows11/Square44x44Logo.scale-125.png",revision:"205f81b79fcd02658f0f4e9270add0c9"},{url:"images/AppImages/windows11/Square44x44Logo.scale-150.png",revision:"71e56fc1ee15def328631efbbeea2a42"},{url:"images/AppImages/windows11/Square44x44Logo.scale-200.png",revision:"965f8a66312a4c5ba355b1b03c5291f5"},{url:"images/AppImages/windows11/Square44x44Logo.scale-400.png",revision:"50a8466e2c617e1772f4f8ea33cbfc88"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-16.png",revision:"3be79a85682d06a119d39cb1b04e3cba"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-20.png",revision:"86224c94e69f6762daf9fa3d024e2153"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-24.png",revision:"29987d113370a43848a7c3fbd60ec1d3"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-256.png",revision:"a125f52854baa0570927e836a39d0b3a"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-30.png",revision:"bae7aa94de288cea8b48f93617023206"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-32.png",revision:"a5dc868935878298bbfa95fbb034fb54"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-36.png",revision:"5e7fd43b1e1dd844b4a4a09f08152858"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-40.png",revision:"b5bb463b7ed46474e9c9a4c64d254914"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-44.png",revision:"502be8028777c1f6fe96e754f06a55a6"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-48.png",revision:"04dbcb4fd892f5cbab70e94f720c3d04"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-60.png",revision:"28bedfd80965a1c2f08cec320520194b"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-64.png",revision:"0692de620cd0fd48826938099d5aceaf"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-72.png",revision:"34e029ed0f79a9cd1cc14e6a6dee173a"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-80.png",revision:"748db1a742d8a8ad394b362944911bb7"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-96.png",revision:"f8e5249b8ec31e6fe538ca15a1ed6640"},{url:"images/AppImages/windows11/StoreLogo.scale-100.png",revision:"1e30d3f39b734b3818cee24bca943f9d"},{url:"images/AppImages/windows11/StoreLogo.scale-125.png",revision:"f204ea96e2443bee9745c041fff228b1"},{url:"images/AppImages/windows11/StoreLogo.scale-150.png",revision:"944d55083b37da065fa906074e1d8072"},{url:"images/AppImages/windows11/StoreLogo.scale-200.png",revision:"8df299d7c5961e332dae09f5675717db"},{url:"images/AppImages/windows11/StoreLogo.scale-400.png",revision:"aa0fca201a2210849af7fb94858f9a82"},{url:"images/AppImages/windows11/Wide310x150Logo.scale-100.png",revision:"2b4ea6e3466af6dc1ba3221231fedd16"},{url:"images/AppImages/windows11/Wide310x150Logo.scale-125.png",revision:"a3b47c0cdef7a093bba5dcc27b39a45b"},{url:"images/AppImages/windows11/Wide310x150Logo.scale-150.png",revision:"53b67fb0862b846f53a63cee045d3437"},{url:"images/AppImages/windows11/Wide310x150Logo.scale-200.png",revision:"68132d79fc9e4d91b55d45cdf0ccfc80"},{url:"images/AppImages/windows11/Wide310x150Logo.scale-400.png",revision:"5b96bd982df1d793a81fa48bc8a59735"},{url:"images/avatar_compressed.jpg",revision:"087f261083a6e05e4dfea36d90b0b3ca"},{url:"images/avatar.jpg",revision:"d74d058b40416b424d295c1daf74000d"},{url:"images/avatar.jpg@128x128_compressed.jpg",revision:"2fe8c98eb7382abcfde89f8d8ed8b277"},{url:"images/avatar.jpg@128x128.jpg",revision:"e44b1e82d9bbf58a8fd8ad64b22dfb12"},{url:"images/avatar.jpg@128x128.webp",revision:"b7d65f772a38e05845f5326d710d5689"},{url:"images/avatar.png",revision:"0acf37b762876c3999bb712819ef0fe3"},{url:"images/banner.png",revision:"2ee95bb7a85818007186d689ecf44946"},{url:"images/blog/hide-your-scanpen/1_compressed.jpg",revision:"3e6ae06e604f7f563ce48843d0f4fe07"},{url:"images/blog/hide-your-scanpen/1.jpg",revision:"147b003293993ef62dc42205438768a7"},{url:"images/blog/hide-your-scanpen/2_compressed.jpg",revision:"c71807f5df98025dfbf0413d00d4147d"},{url:"images/blog/hide-your-scanpen/2.jpg",revision:"f83032bfc38e9199b2e21b43ac206a29"},{url:"images/blog/hide-your-scanpen/3_compressed.jpg",revision:"3547423faf707affcded2c8ecd049c7e"},{url:"images/blog/hide-your-scanpen/3.jpg",revision:"2b741a01dae6edb964e9b4ab6c9e186d"},{url:"images/blog/hide-your-scanpen/4_compressed.jpg",revision:"43dc78687c09604d8209d5652de9c98a"},{url:"images/blog/hide-your-scanpen/4.jpg",revision:"e67f65962c1a3576d0cfaf3ee1169e2c"},{url:"images/blog/hide-your-scanpen/5_compressed.jpg",revision:"b8484192423bfbb0bbd304969da112b2"},{url:"images/blog/hide-your-scanpen/5.jpg",revision:"04074a47d604d2860a2a6014d8a4dd40"},{url:"images/blog/hide-your-scanpen/6_compressed.jpg",revision:"e6f78ac8883dfdb15147423b03bc6bf1"},{url:"images/blog/hide-your-scanpen/6.jpg",revision:"6eb4ad7bf02e804604e2a0d5244684ce"},{url:"images/blog/hide-your-scanpen/7_compressed.jpg",revision:"ba5ffac076550e34a22d2826868688a8"},{url:"images/blog/hide-your-scanpen/7.jpg",revision:"4f2c4193694f8e92d7ceaf7d1d3415e4"},{url:"images/blog/hide-your-scanpen/thumb_compressed.jpg",revision:"77c7224a3a59386cfb6ccaddfc934419"},{url:"images/blog/hide-your-scanpen/thumb.jpeg",revision:"c8dfa2d471c84c994f2f9fd00b47493b"},{url:"images/blog/play-on-scanpen/1_compressed.jpg",revision:"a768d235e67faeabc9229d1561494841"},{url:"images/blog/play-on-scanpen/1.jpg",revision:"43cf02e325de69b21a123ffcc7e26856"},{url:"images/blog/play-on-scanpen/2_compressed.jpg",revision:"88bb5cf01b8b706619c92ac1f2bc1291"},{url:"images/blog/play-on-scanpen/2.jpg",revision:"45d79211d291e478f909283d54e8cca9"},{url:"images/blog/play-on-scanpen/3_compressed.jpg",revision:"97c6af0e8d3280d2bffb1d32a6fcfa39"},{url:"images/blog/play-on-scanpen/3.jpg",revision:"69a7a71b30571d8945d456a87cc21ff7"},{url:"images/blog/play-on-scanpen/4_compressed.jpg",revision:"a9f4bf3739abf5cc116e2af2587994b9"},{url:"images/blog/play-on-scanpen/4.jpg",revision:"7d009b3ec04be34b5087c616a0a39d5b"},{url:"images/blog/play-on-scanpen/5_compressed.jpg",revision:"13ee3ebe457d3c43f709663fe04b46cb"},{url:"images/blog/play-on-scanpen/5.jpg",revision:"cfd155f8116c6aedb68ec7e80682a6c6"},{url:"images/blog/play-on-scanpen/6_compressed.jpg",revision:"c3aa623ba404bb6e6887c4fe2386b984"},{url:"images/blog/play-on-scanpen/6.jpg",revision:"595d50cfc7416d5076394669c8d33d16"},{url:"images/blog/play-on-scanpen/7_compressed.jpg",revision:"d5ef026a13241296db450867430c9f96"},{url:"images/blog/play-on-scanpen/7.jpg",revision:"e8cb3c661a11e5395fc9ece447a9eb04"},{url:"images/blog/play-on-scanpen/thumb_compressed.jpg",revision:"c3f94f5fc0ca5a6ed075f4c6195f0320"},{url:"images/blog/play-on-scanpen/thumb.jpeg",revision:"29d602ae420bb86e6c20bcfde7c5ea14"},{url:"images/blog/real-harmony-connect-all/1_compressed.jpg",revision:"ae2ce5053eab49217f4e166d8e11882e"},{url:"images/blog/real-harmony-connect-all/1.jpg",revision:"ef6500d9a6e0f80a9cff56dfdaaaa2d2"},{url:"images/blog/real-harmony-connect-all/2_compressed.jpg",revision:"402e2d4a96dcab29d68129e709fe5ecb"},{url:"images/blog/real-harmony-connect-all/2.jpg",revision:"0bcbbf4bae9e34bfaec7ca1fc0a8f6ea"},{url:"images/blog/real-harmony-connect-all/3_compressed.jpg",revision:"be25a9ae74fefcba487be97d98381e52"},{url:"images/blog/real-harmony-connect-all/3.jpg",revision:"f63a3f4881acc80f65d9ef6dc6e1b560"},{url:"images/blog/real-harmony-connect-all/4_compressed.jpg",revision:"b040cdbf07820194be611b0f9cb37285"},{url:"images/blog/real-harmony-connect-all/4.jpg",revision:"c151cda4444af5c73e949efd83024ae0"},{url:"images/blog/real-harmony-connect-all/5_compressed.jpg",revision:"909abe6f752d8bd3b846b6999ea28cca"},{url:"images/blog/real-harmony-connect-all/5.jpg",revision:"34a2e239d9583100ec49374f9c155ea0"},{url:"images/blog/real-harmony-connect-all/6_compressed.jpg",revision:"7839c75512d7075bb8bc7f70dbe2a2e5"},{url:"images/blog/real-harmony-connect-all/6.jpg",revision:"02ee24b98afd90219a49aec7a2b8fbb6"},{url:"images/blog/real-harmony-connect-all/7_compressed.jpg",revision:"1638ab2d506043a19340d87c5add060a"},{url:"images/blog/real-harmony-connect-all/7.png",revision:"7cab32a55fe48ddb8949d1133539791e"},{url:"images/blog/root-on-scanpen/1_compressed.jpg",revision:"d5ef026a13241296db450867430c9f96"},{url:"images/blog/root-on-scanpen/1.jpg",revision:"e8cb3c661a11e5395fc9ece447a9eb04"},{url:"images/blog/root-on-scanpen/10_compressed.jpg",revision:"4e2a39ec55a587668afb60e70203b709"},{url:"images/blog/root-on-scanpen/10.jpg",revision:"f8d9448a80bfa4234cefa120f37ccc1b"},{url:"images/blog/root-on-scanpen/11_compressed.jpg",revision:"a68fb2967503f2492476feca18bf1226"},{url:"images/blog/root-on-scanpen/11.jpg",revision:"c93f00e750b376a0ba6f42320e651dd6"},{url:"images/blog/root-on-scanpen/2_compressed.jpg",revision:"8b82721a82aae487b1132a70384f81b5"},{url:"images/blog/root-on-scanpen/2.jpg",revision:"e4515b8f6068a92b381f09d52a9fcd93"},{url:"images/blog/root-on-scanpen/3_compressed.jpg",revision:"faead43359b4db644137f34cc4645ffe"},{url:"images/blog/root-on-scanpen/3.jpg",revision:"4a8c70f0748a7c1d3fd4eeadb24350d7"},{url:"images/blog/root-on-scanpen/4_compressed.jpg",revision:"309b80274a170184ec46101d435249ec"},{url:"images/blog/root-on-scanpen/4.jpg",revision:"41d43ce1e99cdf046fb5ba88b19f312b"},{url:"images/blog/root-on-scanpen/5_compressed.jpg",revision:"d70071bc545beb8ddb89e2cfac025f6f"},{url:"images/blog/root-on-scanpen/5.jpg",revision:"f2ee5d551252b8ba12d6ebb6c849e937"},{url:"images/blog/root-on-scanpen/6_compressed.jpg",revision:"526daa859e05ed1b000aef276f79c06b"},{url:"images/blog/root-on-scanpen/6.jpg",revision:"c2582b5fb5e6f61926f61548b6cdbeab"},{url:"images/blog/root-on-scanpen/7_compressed.jpg",revision:"d4cc211f51e46c5d18f98f264997d048"},{url:"images/blog/root-on-scanpen/7.jpg",revision:"7638c74314e1314256dc388b5c55a8da"},{url:"images/blog/root-on-scanpen/8_compressed.jpg",revision:"4e2a39ec55a587668afb60e70203b709"},{url:"images/blog/root-on-scanpen/8.jpg",revision:"f8d9448a80bfa4234cefa120f37ccc1b"},{url:"images/blog/root-on-scanpen/9_compressed.jpg",revision:"52d114c0252638b2978044e761caf3b1"},{url:"images/blog/root-on-scanpen/9.jpg",revision:"adfb29b907a06d7e36dab09e80a5e263"},{url:"images/blog/root-on-scanpen/thumb_compressed.jpg",revision:"11e44a1c80b0f0fc1222504b3da802b5"},{url:"images/blog/root-on-scanpen/thumb.jpeg",revision:"ca312483ab34467993a68e964bb088ac"},{url:"images/blog/talk-about-x-ai/1_compressed.jpg",revision:"8a79d86f3fc8c5e743eb1eed712db026"},{url:"images/blog/talk-about-x-ai/1.jpg",revision:"54d59d9c9040cef6ecce638d5e94f1c6"},{url:"images/favicon_compressed.jpg",revision:"2f8ee9aeea76840c7dff20d6ae9b0191"},{url:"images/favicon.png",revision:"87ae8963127575acec181c079a6a2cf8"},{url:"images/grey.png",revision:"4680dd65d50f69351be0fca639f50066"},{url:"images/loading.gif",revision:"26ca85dd1d55d1e4cdf080af025206b2"},{url:"images/page/404/404_compressed.jpg",revision:"ab62a61e578a138e523c70a139c04f85"},{url:"images/page/404/404.png",revision:"e29418b977c1a9df05311f6f8174c982"},{url:"images/page/donate/alipay.jpg",revision:"5e3ea63c3e419d719282441bf5bcb668"},{url:"images/page/donate/wechat.jpg",revision:"605284a1cd806d3de29aecf2e695b103"},{url:"images/pwaicons/avatar_144x144.png",revision:"830206ff1fe92981c1be6475fc78209b"},{url:"images/pwaicons/avatar_192x192.png",revision:"24b80a1701de5515172f4e6821cd0439"},{url:"images/pwaicons/avatar_36x36.png",revision:"62bcc89934de27d7d7df5bea9d494a2f"},{url:"images/pwaicons/avatar_48x48.png",revision:"73ef586a75771a05c484f54dc1ac8ff5"},{url:"images/pwaicons/avatar_512x512.png",revision:"357704f580b355406c1f1a07af4bcc04"},{url:"images/pwaicons/avatar_72x72.png",revision:"ce017547ba55882320de28a0e1b51b7d"},{url:"images/pwaicons/avatar_96x96.png",revision:"567f261126d0430ecb0c9d29601deae9"},{url:"images/pwaicons/avatar.jpg",revision:"d74d058b40416b424d295c1daf74000d"},{url:"images/random/material-1.png",revision:"0c4e486759ad62e3415f8f197f0311f7"},{url:"images/random/material-10.png",revision:"2263d9d1cc9b0724e6331374c33f988b"},{url:"images/random/material-11.png",revision:"41127baf9a286e968a63653dee50ba21"},{url:"images/random/material-12.png",revision:"2507dbe92186b0b39df6331347aa2c27"},{url:"images/random/material-13.png",revision:"5d127887b6d043259f7e2fb99cd08175"},{url:"images/random/material-14.png",revision:"84c21a53679bddbe415fdae1d3c02163"},{url:"images/random/material-15.png",revision:"ec116546453394cc0d78e580d6d52dd5"},{url:"images/random/material-16.png",revision:"39a5dca2dc2de60bd5dd191f205db7d6"},{url:"images/random/material-17.png",revision:"30a855e361dcf170aecdce04ce564c68"},{url:"images/random/material-18.png",revision:"584900ff821930a8b093b4c0a58be34b"},{url:"images/random/material-19.png",revision:"c004830c8683856939dc83b75b230b66"},{url:"images/random/material-2.png",revision:"fa4f4588b9fab07979acd61b94d34fa0"},{url:"images/random/material-3.png",revision:"418c3457b6792eb732844d41d2501294"},{url:"images/random/material-4.png",revision:"99898b727359e568759eebbb2c9e4a8b"},{url:"images/random/material-5.png",revision:"e521776cb427f848546e20d784888a55"},{url:"images/random/material-6.png",revision:"db810792edf3d40de5baf5401a9a0626"},{url:"images/random/material-7.png",revision:"d7e9fe3e0e3db6b841ab12fad331daed"},{url:"images/random/material-8.png",revision:"9f1914138052c3a631e1f2b2cf674a46"},{url:"images/random/material-9.png",revision:"069b687b7f1069254c816a56317bfaad"},{url:"index.html",revision:"9235547cdd6dc39fc16f8588dbbe9b4d"},{url:"js/mdui.js",revision:"90f8340ca8d6a9708cdb8b50c9ba6853"},{url:"js/script.js",revision:"6c74423367a5a608ac3bcfc0d1300eb6"},{url:"new/index.html",revision:"5b2c8d34588abfc356dd7b6a10393f9a"},{url:"redirect/index.html",revision:"e065085ac0540d4423227e5805d06425"},{url:"search.xml",revision:"bd00a54053585dd4a839e3201bfd0c1b"},{url:"sitemap.xml",revision:"fd8de1fc7baf1acc93d97181c946f7a1"},{url:"tagcloud/index.html",revision:"4dca1ac8239aa314459a9617c4713c63"},{url:"tags/AI/index.html",revision:"78c9f8b88fbcf31037f3dfc7c961e934"},{url:"tags/index.html",revision:"7e205b9610b36fe5642413da5feb3544"},{url:"tags/KDE/index.html",revision:"415b733734ac1ce602898e0d7fc7f2fa"},{url:"tags/openai/index.html",revision:"dabb7c905fa59cf2a820700a8cd4c9b8"},{url:"tags/root/index.html",revision:"b25a3b48fc0fa792b1dbe0cff2cf312b"},{url:"tags/xposed/index.html",revision:"e38f7798c7b4eda34dbf3f426c53c433"},{url:"tags/互联/index.html",revision:"f5f1baa4d83012fbd3586eb0f6df490f"},{url:"tags/单词笔/index.html",revision:"7bb1ed91f8139fa54d4c95649b056bd4"},{url:"tags/安卓/index.html",revision:"e07c9b7632a982a4fb4d6fcacdd29fdf"},{url:"tags/开源/index.html",revision:"dd54930ae547f57bd37a873460ec2d46"},{url:"timeline/index.html",revision:"4b44f61cb768a0068f11a9c978c046c2"}],{}),e.registerRoute(/.*\.html$/,new e.StaleWhileRevalidate({cacheName:"html-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/.*\.(css|js)$/,new e.CacheFirst({cacheName:"css-js-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/.*\.(xml|)$/,new e.CacheFirst({cacheName:"xml-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/.*\.(png|gif|jpg|jpeg|webp|ico|svg|cur|mp4|woff|ijmap|ttf|eot|woff2?)$/,new e.CacheFirst({cacheName:"media-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/(cdn\.staticfile\.org|unpkg\.com|mirror\.blog\.stevezmt\.top)\/.*/,new e.CacheFirst({cacheName:"cdn-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
