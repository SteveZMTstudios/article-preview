if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let d={};const n=e=>i(e,r),c={module:{uri:r},exports:d,require:n};a[r]=Promise.all(s.map((e=>c[e]||n(e)))).then((e=>(o(...e),d)))}}define(["./workbox-721b6048"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/10/01/play-on-scanpen/index.html",revision:"b2b3da7f395c7359f761f5350e8ec90b"},{url:"2024/02/01/root-on-scanpen/index.html",revision:"f5384d5f9624ca6d3180e9d40b24b602"},{url:"2024/03/22/hide-your-scanpen/index.html",revision:"5b82bfe7ee92a3cccc5e413276a2bc86"},{url:"2024/12/01/talk-about-x-ai/index.html",revision:"878dc07c863e842b8494550cd2f96ee3"},{url:"2024/12/03/real-harmony-connect-all/index.html",revision:"001d284d38f82e5b241801c6d89327f9"},{url:"2024/12/21/fork-this-theme/index.html",revision:"407c3dd0fe1af9680628a00475330d20"},{url:"2024/12/21/noise/index.html",revision:"9ae09baf478e91f5040cfb042638fb3d"},{url:"2024/12/24/markdown-test/index.html",revision:"2681d4f206261b46c140ce822d16262a"},{url:"2024/12/24/noise-1/index.html",revision:"bd47f71a31b14da902ee6f1f71edfbdd"},{url:"2024/12/24/noise-10/index.html",revision:"73590c953f2c993ae3bdfeedb84a22ce"},{url:"2024/12/24/noise-11/index.html",revision:"0fc93c89dab6e8f23629a4efd1edbfb1"},{url:"2024/12/24/noise-12/index.html",revision:"955f397ba7cf5df8a6270fa250c23447"},{url:"2024/12/24/noise-2/index.html",revision:"bbf454dcd198b41ce39d558e762ce9f6"},{url:"2024/12/24/noise-3/index.html",revision:"8eab761a5d69cf429286d78e158c08b7"},{url:"2024/12/24/noise-4/index.html",revision:"ad7ae660be83936d029ef38882defc23"},{url:"2024/12/24/noise-5/index.html",revision:"fdfea52c1e92c57befe7b8e19c7c47cb"},{url:"2024/12/24/noise-6/index.html",revision:"c7d8d50a2f6a8bb0eee295d533070eed"},{url:"2024/12/24/noise-7/index.html",revision:"88e4419def78891ae60afb7b36036805"},{url:"2024/12/24/noise-8/index.html",revision:"aaf030e21de4a616180a4b311f25a35c"},{url:"2024/12/24/noise-9/index.html",revision:"aa018a470532e65c2eca1859f92e913d"},{url:"2024/12/24/test2-1/index.html",revision:"627ae8a1e17469333869a4145ce69905"},{url:"404.html",revision:"0eeb37d78196e4bf43f547b0d0290a63"},{url:"about/index.html",revision:"9acab3e69c1bc675c282fd0593d320c7"},{url:"archives/2023/10/index.html",revision:"d999a60cbc44f4fd928f0312ea00c9c2"},{url:"archives/2023/index.html",revision:"51daef77fe4d2614416838d0351c90d0"},{url:"archives/2024/02/index.html",revision:"6149c29f700af211cd5563eb35b48cb4"},{url:"archives/2024/03/index.html",revision:"df48bd008c04103d5e91caa1433f9c36"},{url:"archives/2024/12/index.html",revision:"19168ec82a81134928dcf6089cbbfaa6"},{url:"archives/2024/12/page/2/index.html",revision:"f0cbcd857c8007403599247ce898d5ee"},{url:"archives/2024/index.html",revision:"5dfd49f3e3a951b166eed95e56ef90f9"},{url:"archives/2024/page/2/index.html",revision:"df199df911e0454375972d28b9387f16"},{url:"archives/index.html",revision:"ed155a9a3e01311045b274aa3db17919"},{url:"archives/page/2/index.html",revision:"7649286386bcea6e2b5ea5c2bf61c427"},{url:"archives/page/3/index.html",revision:"82fb52fef1d3933bf7635df7ddf86af2"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"atom.xml",revision:"17294a6465e7a38d9f40c1acb5e5a11a"},{url:"categories/技术/index.html",revision:"1180735d4f1f7cda0db73a6ceb938580"},{url:"categories/技术/瞎聊/index.html",revision:"b6f48c5b47aedefbe823a3830bc27c3d"},{url:"categories/折腾/index.html",revision:"f8d312c4f1fc23db07fdad0e8e6ccfed"},{url:"categories/折腾/电子垃圾/index.html",revision:"7a14800aea5deaa349fc1d03642947ed"},{url:"css/mdui.css",revision:"ede025291378e92fd6fa6c3d38521d81"},{url:"css/style.css",revision:"773a2eced25e3033fd46a7b64724d97e"},{url:"custom.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"custom.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/roboto/Roboto-Black.woff",revision:"4c3b6229efe63a13dbb4c3c32e292e61"},{url:"fonts/roboto/Roboto-Black.woff2",revision:"2b8d6922c2c9957356bc50f475de4e79"},{url:"fonts/roboto/Roboto-BlackItalic.woff",revision:"3a99796b2d8592471fcf278df4334d5d"},{url:"fonts/roboto/Roboto-BlackItalic.woff2",revision:"38d14dd4ff163c34e45b9701668652d4"},{url:"fonts/roboto/Roboto-Bold.woff",revision:"ad140ff02a7091257e2b31619106194e"},{url:"fonts/roboto/Roboto-Bold.woff2",revision:"ab96cca26751239828b8e9c524cca5bb"},{url:"fonts/roboto/Roboto-BoldItalic.woff",revision:"a7dce23c0dd99a4afa5cdb4925f0358a"},{url:"fonts/roboto/Roboto-BoldItalic.woff2",revision:"355e388740673054493ce5fe32e37596"},{url:"fonts/roboto/Roboto-Light.woff",revision:"37fbbbad5577a95bdf058307c717c882"},{url:"fonts/roboto/Roboto-Light.woff2",revision:"8e0860f3581b197e9fa4713a706c7bcc"},{url:"fonts/roboto/Roboto-LightItalic.woff",revision:"c7b4e746cf8ecbf412fc944146154d24"},{url:"fonts/roboto/Roboto-LightItalic.woff2",revision:"879d940bccbb25f6096ec4361154d469"},{url:"fonts/roboto/Roboto-Medium.woff",revision:"303ded6436dcf7ea75157e2aeff876ce"},{url:"fonts/roboto/Roboto-Medium.woff2",revision:"2741a14e49524efa6059c735010239d0"},{url:"fonts/roboto/Roboto-MediumItalic.woff",revision:"da059a7386fea889c55cce11253df175"},{url:"fonts/roboto/Roboto-MediumItalic.woff2",revision:"f10d1f42838680a70ac2b66e62887106"},{url:"fonts/roboto/Roboto-Regular.woff",revision:"081b11ebaca8ad30fd092e01451015dc"},{url:"fonts/roboto/Roboto-Regular.woff2",revision:"b2a6341ae7440130ec4b4b186aff8413"},{url:"fonts/roboto/Roboto-RegularItalic.woff",revision:"8add1ba317c27e39b7781c95fa174671"},{url:"fonts/roboto/Roboto-RegularItalic.woff2",revision:"df8e3a9b9aed943417973988732b928f"},{url:"fonts/roboto/Roboto-Thin.woff",revision:"90d3804f0231704c15ccc5861245e8ce"},{url:"fonts/roboto/Roboto-Thin.woff2",revision:"790ebf41d0214f5eda4ef61263ed75f8"},{url:"fonts/roboto/Roboto-ThinItalic.woff",revision:"588293290e86dad97fcf33ed1719c083"},{url:"fonts/roboto/Roboto-ThinItalic.woff2",revision:"8a2c1a5de09de8bb2c45390a10f90c2b"},{url:"friends/39af7994fbe843b7bcc0f9d201d8785a.png",revision:"8be4842a30f086f17ca7f63ebbe725d1"},{url:"friends/index.html",revision:"6d6e78bf20a4cd5024e83eb9350dbe24"},{url:"friends/listder.jpg",revision:"9e1ce8bf57da62635543ea3c26f60f16"},{url:"icons/custom-icons/iconfont.eot",revision:"a2a8787dac4c3c9b8883666c3b7df6a3"},{url:"icons/custom-icons/iconfont.svg",revision:"2fcf538d7df47fd4d68e85f8f11ffe36"},{url:"icons/custom-icons/iconfont.ttf",revision:"e7ed83504792a7ed4be71de34b11ee18"},{url:"icons/custom-icons/iconfont.woff",revision:"335bc47631f8a4dec196188d5ff7af4c"},{url:"icons/custom-icons/iconfont.woff2",revision:"7fe9b79c800050f4ec3d64208e59fd05"},{url:"icons/material-icons/MaterialIcons-Regular.ijmap",revision:"ed6a98d002bc0b535dd8618f3ae05fe7"},{url:"icons/material-icons/MaterialIcons-Regular.woff",revision:"012cf6a10129e2275d79d6adac7f3b02"},{url:"icons/material-icons/MaterialIcons-Regular.woff2",revision:"570eb83859dc23dd0eec423a49e147fe"},{url:"images/404_compressed.jpg",revision:"ab62a61e578a138e523c70a139c04f85"},{url:"images/404.png",revision:"e29418b977c1a9df05311f6f8174c982"},{url:"images/AppImages/android/android-launchericon-144-144.png",revision:"3b1136b01b296eb67cfcc4a665f02d2d"},{url:"images/AppImages/android/android-launchericon-192-192.png",revision:"94783c6f707274a7c5629f0cb61eb2e3"},{url:"images/AppImages/android/android-launchericon-48-48.png",revision:"6909c2e2cb4bcf9a2b5315eacc61dee0"},{url:"images/AppImages/android/android-launchericon-512-512.png",revision:"5e1081237f559d5b0a4dcc3bf4063761"},{url:"images/AppImages/android/android-launchericon-72-72.png",revision:"4100c6721f109dafc26a02d1386b0b4d"},{url:"images/AppImages/android/android-launchericon-96-96.png",revision:"e4c2719b1e59f15b6599fd0ff327437b"},{url:"images/AppImages/ios/100.png",revision:"8df299d7c5961e332dae09f5675717db"},{url:"images/AppImages/ios/1024.png",revision:"15bf556a280845094ec65a7978cbdb4a"},{url:"images/AppImages/ios/114.png",revision:"4c80afe156a0c14f270017108d34fca6"},{url:"images/AppImages/ios/120.png",revision:"93917333fa35511a8a6ad870abf4c2e8"},{url:"images/AppImages/ios/128.png",revision:"669e25964467f7f70da29f4d8dcba2ef"},{url:"images/AppImages/ios/144.png",revision:"3b1136b01b296eb67cfcc4a665f02d2d"},{url:"images/AppImages/ios/152.png",revision:"158cc308888bcb0dccd94cef5378fc96"},{url:"images/AppImages/ios/16.png",revision:"b1b11c8926775ba07f8c6b30c22c230c"},{url:"images/AppImages/ios/167.png",revision:"c9284fcd8eb5b8e846da0c244636579a"},{url:"images/AppImages/ios/180.png",revision:"728bf69dc820d6cff97e744ca68a5cee"},{url:"images/AppImages/ios/192.png",revision:"94783c6f707274a7c5629f0cb61eb2e3"},{url:"images/AppImages/ios/20.png",revision:"1b1b862aa78659d7eecc2e28152b5399"},{url:"images/AppImages/ios/256.png",revision:"2e3dbcf9939d6ca3e38d01dac73d7145"},{url:"images/AppImages/ios/29.png",revision:"a0e3bbb60a881aaeb9e737e80727fecc"},{url:"images/AppImages/ios/32.png",revision:"e0b85123afd74fd6ff2d8734d5641830"},{url:"images/AppImages/ios/40.png",revision:"b7a6d4c2130d8faa1dc208c50de0c26b"},{url:"images/AppImages/ios/50.png",revision:"1e30d3f39b734b3818cee24bca943f9d"},{url:"images/AppImages/ios/512.png",revision:"5e1081237f559d5b0a4dcc3bf4063761"},{url:"images/AppImages/ios/57.png",revision:"344df744f8486c508f54981e0ab15a8b"},{url:"images/AppImages/ios/58.png",revision:"3dee5977a7fee57cde042cdf0f428dd4"},{url:"images/AppImages/ios/60.png",revision:"3cd0f772771ab86be53c5c4691e53e8e"},{url:"images/AppImages/ios/64.png",revision:"9f5413919127bceb801393a5364d963c"},{url:"images/AppImages/ios/72.png",revision:"4100c6721f109dafc26a02d1386b0b4d"},{url:"images/AppImages/ios/76.png",revision:"2b12ee60ad26d98f6ea4e5992885d31d"},{url:"images/AppImages/ios/80.png",revision:"0c260d21417807e3e79156d712e1ef1d"},{url:"images/AppImages/ios/87.png",revision:"0efb9a3a24c64ae8abaf66ae608e6e20"},{url:"images/AppImages/screenshot/mobile.png",revision:"0675dd7350aa821e6d6fa76387b0fa3d"},{url:"images/AppImages/screenshot/mobile2.png",revision:"c44bbc0c792364e9f75a6a51f7de5ce3"},{url:"images/AppImages/screenshot/wide.png",revision:"9c34f031d580e06a72178c87436ad476"},{url:"images/AppImages/screenshot/wide2.png",revision:"8fd888c1442ea3267767738a3b8f70a6"},{url:"images/AppImages/windows11/LargeTile.scale-100.png",revision:"b130817e67319217f2ff4fe41c739e4f"},{url:"images/AppImages/windows11/LargeTile.scale-125.png",revision:"06e8f71918e228ecf682ad4aadcea228"},{url:"images/AppImages/windows11/LargeTile.scale-150.png",revision:"d64a51b9db55ab5ff4a5d63bff5d7609"},{url:"images/AppImages/windows11/LargeTile.scale-200.png",revision:"08b35a9b4cd96d19f0bfd3cbb9b66a81"},{url:"images/AppImages/windows11/LargeTile.scale-400.png",revision:"2ae28a2b672360f7f7ec9e93e8b81df2"},{url:"images/AppImages/windows11/SmallTile.scale-100.png",revision:"b0ead2d66aa856f75a853dd9245db030"},{url:"images/AppImages/windows11/SmallTile.scale-125.png",revision:"7ba3e5f9cb7c11f1af22d90275e5bc53"},{url:"images/AppImages/windows11/SmallTile.scale-150.png",revision:"3d1084aded85710c2ceca1fd84f9b3ec"},{url:"images/AppImages/windows11/SmallTile.scale-200.png",revision:"25d05e4307f738a85e7f8430bd0fa32b"},{url:"images/AppImages/windows11/SmallTile.scale-400.png",revision:"7a2d8eb346ce41191b73eee4f132ddcf"},{url:"images/AppImages/windows11/SplashScreen.scale-100.png",revision:"68132d79fc9e4d91b55d45cdf0ccfc80"},{url:"images/AppImages/windows11/SplashScreen.scale-125.png",revision:"2b2ee6abaacacbee34162aaba0662be9"},{url:"images/AppImages/windows11/SplashScreen.scale-150.png",revision:"0fa0aa35a0ae92273463cbb53e6d61e7"},{url:"images/AppImages/windows11/SplashScreen.scale-200.png",revision:"5b96bd982df1d793a81fa48bc8a59735"},{url:"images/AppImages/windows11/SplashScreen.scale-400.png",revision:"9dc53af098dd05d07b6765f6c65e0368"},{url:"images/AppImages/windows11/Square150x150Logo.scale-100.png",revision:"632c302cf0d4ff3fb746c99009f28b3d"},{url:"images/AppImages/windows11/Square150x150Logo.scale-125.png",revision:"078e511e8ab6ed70bc0cfee86447ffec"},{url:"images/AppImages/windows11/Square150x150Logo.scale-150.png",revision:"71fafb51e16ebc654c4662fcaa81f4a3"},{url:"images/AppImages/windows11/Square150x150Logo.scale-200.png",revision:"1bff60f4e9b5d6cc60526cec23fcb8e0"},{url:"images/AppImages/windows11/Square150x150Logo.scale-400.png",revision:"1de933580f2b5e0c1b0c5db483e1ef16"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"3be79a85682d06a119d39cb1b04e3cba"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"86224c94e69f6762daf9fa3d024e2153"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"29987d113370a43848a7c3fbd60ec1d3"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"a125f52854baa0570927e836a39d0b3a"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"bae7aa94de288cea8b48f93617023206"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"a5dc868935878298bbfa95fbb034fb54"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"5e7fd43b1e1dd844b4a4a09f08152858"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"b5bb463b7ed46474e9c9a4c64d254914"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"502be8028777c1f6fe96e754f06a55a6"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"04dbcb4fd892f5cbab70e94f720c3d04"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"28bedfd80965a1c2f08cec320520194b"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"0692de620cd0fd48826938099d5aceaf"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"34e029ed0f79a9cd1cc14e6a6dee173a"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"748db1a742d8a8ad394b362944911bb7"},{url:"images/AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"f8e5249b8ec31e6fe538ca15a1ed6640"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"3be79a85682d06a119d39cb1b04e3cba"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"86224c94e69f6762daf9fa3d024e2153"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"29987d113370a43848a7c3fbd60ec1d3"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"a125f52854baa0570927e836a39d0b3a"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"bae7aa94de288cea8b48f93617023206"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"a5dc868935878298bbfa95fbb034fb54"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"5e7fd43b1e1dd844b4a4a09f08152858"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"b5bb463b7ed46474e9c9a4c64d254914"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"502be8028777c1f6fe96e754f06a55a6"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"04dbcb4fd892f5cbab70e94f720c3d04"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"28bedfd80965a1c2f08cec320520194b"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"0692de620cd0fd48826938099d5aceaf"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"34e029ed0f79a9cd1cc14e6a6dee173a"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"748db1a742d8a8ad394b362944911bb7"},{url:"images/AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"f8e5249b8ec31e6fe538ca15a1ed6640"},{url:"images/AppImages/windows11/Square44x44Logo.scale-100.png",revision:"502be8028777c1f6fe96e754f06a55a6"},{url:"images/AppImages/windows11/Square44x44Logo.scale-125.png",revision:"205f81b79fcd02658f0f4e9270add0c9"},{url:"images/AppImages/windows11/Square44x44Logo.scale-150.png",revision:"71e56fc1ee15def328631efbbeea2a42"},{url:"images/AppImages/windows11/Square44x44Logo.scale-200.png",revision:"965f8a66312a4c5ba355b1b03c5291f5"},{url:"images/AppImages/windows11/Square44x44Logo.scale-400.png",revision:"50a8466e2c617e1772f4f8ea33cbfc88"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-16.png",revision:"3be79a85682d06a119d39cb1b04e3cba"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-20.png",revision:"86224c94e69f6762daf9fa3d024e2153"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-24.png",revision:"29987d113370a43848a7c3fbd60ec1d3"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-256.png",revision:"a125f52854baa0570927e836a39d0b3a"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-30.png",revision:"bae7aa94de288cea8b48f93617023206"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-32.png",revision:"a5dc868935878298bbfa95fbb034fb54"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-36.png",revision:"5e7fd43b1e1dd844b4a4a09f08152858"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-40.png",revision:"b5bb463b7ed46474e9c9a4c64d254914"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-44.png",revision:"502be8028777c1f6fe96e754f06a55a6"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-48.png",revision:"04dbcb4fd892f5cbab70e94f720c3d04"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-60.png",revision:"28bedfd80965a1c2f08cec320520194b"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-64.png",revision:"0692de620cd0fd48826938099d5aceaf"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-72.png",revision:"34e029ed0f79a9cd1cc14e6a6dee173a"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-80.png",revision:"748db1a742d8a8ad394b362944911bb7"},{url:"images/AppImages/windows11/Square44x44Logo.targetsize-96.png",revision:"f8e5249b8ec31e6fe538ca15a1ed6640"},{url:"images/AppImages/windows11/StoreLogo.scale-100.png",revision:"1e30d3f39b734b3818cee24bca943f9d"},{url:"images/AppImages/windows11/StoreLogo.scale-125.png",revision:"f204ea96e2443bee9745c041fff228b1"},{url:"images/AppImages/windows11/StoreLogo.scale-150.png",revision:"944d55083b37da065fa906074e1d8072"},{url:"images/AppImages/windows11/StoreLogo.scale-200.png",revision:"8df299d7c5961e332dae09f5675717db"},{url:"images/AppImages/windows11/StoreLogo.scale-400.png",revision:"aa0fca201a2210849af7fb94858f9a82"},{url:"images/AppImages/windows11/Wide310x150Logo.scale-100.png",revision:"2b4ea6e3466af6dc1ba3221231fedd16"},{url:"images/AppImages/windows11/Wide310x150Logo.scale-125.png",revision:"a3b47c0cdef7a093bba5dcc27b39a45b"},{url:"images/AppImages/windows11/Wide310x150Logo.scale-150.png",revision:"53b67fb0862b846f53a63cee045d3437"},{url:"images/AppImages/windows11/Wide310x150Logo.scale-200.png",revision:"68132d79fc9e4d91b55d45cdf0ccfc80"},{url:"images/AppImages/windows11/Wide310x150Logo.scale-400.png",revision:"5b96bd982df1d793a81fa48bc8a59735"},{url:"images/avatar_compressed.jpg",revision:"087f261083a6e05e4dfea36d90b0b3ca"},{url:"images/avatar.jpg",revision:"d74d058b40416b424d295c1daf74000d"},{url:"images/avatar.jpg@128x128_compressed.jpg",revision:"2fe8c98eb7382abcfde89f8d8ed8b277"},{url:"images/avatar.jpg@128x128.jpg",revision:"e44b1e82d9bbf58a8fd8ad64b22dfb12"},{url:"images/avatar.jpg@128x128.webp",revision:"b7d65f772a38e05845f5326d710d5689"},{url:"images/avatar.png",revision:"0acf37b762876c3999bb712819ef0fe3"},{url:"images/banner.png",revision:"2ee95bb7a85818007186d689ecf44946"},{url:"images/favicon_compressed.jpg",revision:"2f8ee9aeea76840c7dff20d6ae9b0191"},{url:"images/favicon.png",revision:"87ae8963127575acec181c079a6a2cf8"},{url:"images/grey.png",revision:"4680dd65d50f69351be0fca639f50066"},{url:"images/loading.gif",revision:"26ca85dd1d55d1e4cdf080af025206b2"},{url:"images/pwaicons/avatar_144x144.png",revision:"830206ff1fe92981c1be6475fc78209b"},{url:"images/pwaicons/avatar_192x192.png",revision:"24b80a1701de5515172f4e6821cd0439"},{url:"images/pwaicons/avatar_36x36.png",revision:"62bcc89934de27d7d7df5bea9d494a2f"},{url:"images/pwaicons/avatar_48x48.png",revision:"73ef586a75771a05c484f54dc1ac8ff5"},{url:"images/pwaicons/avatar_512x512.png",revision:"357704f580b355406c1f1a07af4bcc04"},{url:"images/pwaicons/avatar_72x72.png",revision:"ce017547ba55882320de28a0e1b51b7d"},{url:"images/pwaicons/avatar_96x96.png",revision:"567f261126d0430ecb0c9d29601deae9"},{url:"images/pwaicons/avatar.jpg",revision:"d74d058b40416b424d295c1daf74000d"},{url:"images/random/material-1.png",revision:"0c4e486759ad62e3415f8f197f0311f7"},{url:"images/random/material-10.png",revision:"2263d9d1cc9b0724e6331374c33f988b"},{url:"images/random/material-11.png",revision:"41127baf9a286e968a63653dee50ba21"},{url:"images/random/material-12.png",revision:"2507dbe92186b0b39df6331347aa2c27"},{url:"images/random/material-13.png",revision:"5d127887b6d043259f7e2fb99cd08175"},{url:"images/random/material-14.png",revision:"84c21a53679bddbe415fdae1d3c02163"},{url:"images/random/material-15.png",revision:"ec116546453394cc0d78e580d6d52dd5"},{url:"images/random/material-16.png",revision:"39a5dca2dc2de60bd5dd191f205db7d6"},{url:"images/random/material-17.png",revision:"30a855e361dcf170aecdce04ce564c68"},{url:"images/random/material-18.png",revision:"584900ff821930a8b093b4c0a58be34b"},{url:"images/random/material-19.png",revision:"c004830c8683856939dc83b75b230b66"},{url:"images/random/material-2.png",revision:"fa4f4588b9fab07979acd61b94d34fa0"},{url:"images/random/material-3.png",revision:"418c3457b6792eb732844d41d2501294"},{url:"images/random/material-4.png",revision:"99898b727359e568759eebbb2c9e4a8b"},{url:"images/random/material-5.png",revision:"e521776cb427f848546e20d784888a55"},{url:"images/random/material-6.png",revision:"db810792edf3d40de5baf5401a9a0626"},{url:"images/random/material-7.png",revision:"d7e9fe3e0e3db6b841ab12fad331daed"},{url:"images/random/material-8.png",revision:"9f1914138052c3a631e1f2b2cf674a46"},{url:"images/random/material-9.png",revision:"069b687b7f1069254c816a56317bfaad"},{url:"index.html",revision:"82ecb2878d0df6753777771562b3241a"},{url:"js/mdui.js",revision:"90f8340ca8d6a9708cdb8b50c9ba6853"},{url:"js/script.js",revision:"6c74423367a5a608ac3bcfc0d1300eb6"},{url:"new/index.html",revision:"5af9ee84d2f97537c933c42f6d20c898"},{url:"page/2/index.html",revision:"68d4a4983a4ea4652fced804318d564e"},{url:"page/3/index.html",revision:"b7f88039411db42ef841aae5bbf370e0"},{url:"redirect/index.html",revision:"c4cdef2903b19039adf2b31a86d6ac78"},{url:"search.xml",revision:"d244fcbbb5bfe3cb85bf4db9664dfd9d"},{url:"sitemap.xml",revision:"b058af86901593897181bf54961777f7"},{url:"tagcloud/index.html",revision:"add0a22cd8a06c81aa753a6fffe074b0"},{url:"tags/AI/index.html",revision:"9136c481ca659985a6b7500c418714a7"},{url:"tags/index.html",revision:"b726cf98aec22ed4b36341981c5f4a32"},{url:"tags/KDE/index.html",revision:"9e7e21a0a6a5ef33fc9f903549e16270"},{url:"tags/openai/index.html",revision:"3418abc16e392d93019d69bbc2c39537"},{url:"tags/root/index.html",revision:"a0e6bfed1cc5e0f49e66bc77df684f2c"},{url:"tags/xposed/index.html",revision:"9c87ea1c43c5fcedcc3ece5a316b8210"},{url:"tags/互联/index.html",revision:"cd5c4e5e7718783b8a76959afda33ff5"},{url:"tags/单词笔/index.html",revision:"d03ffffff8144055418d712a483759c7"},{url:"tags/安卓/index.html",revision:"173f89bc3114cc6d14467fca11fb280f"},{url:"tags/开源/index.html",revision:"22a526ba36e9d5c3ee10fde463832cdd"},{url:"timeline/index.html",revision:"4d1d6f9837e59873caee65b2262d6563"}],{}),e.registerRoute(/.*\.html$/,new e.StaleWhileRevalidate({cacheName:"html-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/.*\.(css|js)$/,new e.CacheFirst({cacheName:"css-js-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/.*\.(xml|)$/,new e.CacheFirst({cacheName:"xml-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/.*\.(png|gif|jpg|jpeg|webp|ico|svg|cur|mp4|woff|ijmap|ttf|eot|woff2?)$/,new e.CacheFirst({cacheName:"media-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/(cdn\.staticfile\.org|unpkg\.com|mirror\.blog\.stevezmt\.top)\/.*/,new e.CacheFirst({cacheName:"cdn-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
