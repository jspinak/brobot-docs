"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),h=l(n),m=i,u=h["".concat(c,".").concat(m)]||h[m]||p[m]||r;return n?o.createElement(u,s(s({ref:t},d),{},{components:n})):o.createElement(u,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:3},s="Motion",a={unversionedId:"introduction/finding-objects/movement",id:"introduction/finding-objects/movement",title:"Motion",description:"Finding moving objects is available with version 1.0.6.",source:"@site/docs/introduction/finding-objects/movement.md",sourceDirName:"introduction/finding-objects",slug:"/introduction/finding-objects/movement",permalink:"/brobot/docs/introduction/finding-objects/movement",draft:!1,editUrl:"https://jspinak.github.io/brobot/docs/introduction/finding-objects/movement.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Combining Find Operations",permalink:"/brobot/docs/introduction/finding-objects/combining-finds"},next:{title:"Origin of the Name Brobot",permalink:"/brobot/docs/introduction/name-origin"}},c={},l=[{value:"Action Results",id:"action-results",level:2},{value:"Input Methods",id:"input-methods",level:2},{value:"Example 1: Using files",id:"example-1-using-files",level:3},{value:"Example 2: Using Brobot images",id:"example-2-using-brobot-images",level:3},{value:"Example 3: Using the screen",id:"example-3-using-the-screen",level:3},{value:"Configuration Options",id:"configuration-options",level:2}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"motion"},"Motion"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Finding moving objects is available with version 1.0.6.")),(0,i.kt)("p",null,"Brobot also has functionality for finding moving objects. Movement is detected from three scenes, either\nprovided to the function as files, as Brobot images, or taken from the screen. The reason three scenes is used is that\nchanged pixels between two scenes does not tell us the direction of movement. Three scenes allows us to\nascertain at which point the object started and where it ended.   "),(0,i.kt)("h2",{id:"action-results"},"Action Results"),(0,i.kt)("p",null,"The results of a Find.MOTION action are stored in the Matches object. The matches returned are those in the last\nscene. The matches for each scene can be found within in the Matches object, in the corresponding SceneAnalysis\nobject (Matches -> SceneAnalysisCollection -> SceneAnalysis objects). If action history is\nenabled, the analysis of each scene will be saved to the history folder. Below is an example of what would appear\nin the history folder for a Find.MOTION action:  "),(0,i.kt)("p",null,"Objects are identified with a pink box. You may have to zoom in to see the boxes.   "),(0,i.kt)("p",null,"In the first scene we see the three objects that were identified in their starting positions.\nTwo people were correctly identified and one was not. The moving fire instead was identified instead of the\nthird person because the third person moves behind a house in the last scene and confuses the algorithm.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"motion_history.png",src:n(5561).Z,width:"1974",height:"1080"})),(0,i.kt)("p",null,"The second scene identifies all three people correctly, including the one that moves into the forest.\nThe game shows an outline of the person behind the trees, allowing the Brobot algorithm to follow it.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"motion_history.png",src:n(1705).Z,width:"1974",height:"1080"})),(0,i.kt)("p",null,"In the third scene, the third person disappears behind a house, and its absence is selected as the match.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"motion_history.png",src:n(928).Z,width:"1974",height:"1080"})),(0,i.kt)("h2",{id:"input-methods"},"Input Methods"),(0,i.kt)("p",null,"The three different input methods for finding motion are shown in the examples below:"),(0,i.kt)("h3",{id:"example-1-using-files"},"Example 1: Using files"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    BrobotSettings.saveHistory = true;\n    BrobotSettings.mock = true;\n    BrobotSettings.screenshots.add("screen15.png");\n    BrobotSettings.screenshots.add("screen16.png");\n    BrobotSettings.screenshots.add("screen17.png");\n    ActionOptions findMotion = new ActionOptions.Builder()\n            .setAction(ActionOptions.Action.FIND)\n            .setFind(ActionOptions.Find.MOTION)\n            .setMaxMatchesToActOn(10)\n            .setMinArea(50)\n            .setMaxMovement(100)\n            .build();\n    action.perform(findMotion);\n')),(0,i.kt)("h3",{id:"example-2-using-brobot-images"},"Example 2: Using Brobot images"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    BrobotSettings.saveHistory = true;\n    BrobotSettings.mock = true;\n    ActionOptions findMotion = new ActionOptions.Builder()\n            .setAction(ActionOptions.Action.FIND)\n            .setFind(ActionOptions.Find.MOTION)\n            .setMaxMatchesToActOn(10)\n            .setMinArea(50)\n            .setMaxMovement(100)\n            .build();\n    ObjectCollection screenshots = new ObjectCollection.Builder()\n            .withScenes(motionState.getScreen1(), motionState.getScreen2(), motionState.getScreen3())\n            .build();\n    action.perform(findMotion, screenshots);\n")),(0,i.kt)("h3",{id:"example-3-using-the-screen"},"Example 3: Using the screen"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    BrobotSettings.saveHistory = true;\n    BrobotSettings.mock = true;\n    ActionOptions findMotion = new ActionOptions.Builder()\n            .setAction(ActionOptions.Action.FIND)\n            .setFind(ActionOptions.Find.MOTION)\n            .setMaxMatchesToActOn(10)\n            .setMinArea(50)\n            .setMaxMovement(100)\n            .build();\n    action.perform(findMotion);\n")),(0,i.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"MinArea")," limits the results to objects of a certain size. Often there are small changes on screen that we don't\nwant to follow, like the moving of grass or clouds.  "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"MaxMovement")," limits the distance an object can move between scenes. By limiting the distance, you can eliminate\nfalse results caused by some movement in the same direction of the target object, but farther away."))}p.isMDXComponent=!0},5561:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/motion1-b02d4698b4c95a37039fe657682d6818.png"},1705:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/motion2-7c6420948ed7771a64db6e9471c07079.png"},928:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/motion3-b4acebfe8734e1012c948965a4d98424.png"}}]);