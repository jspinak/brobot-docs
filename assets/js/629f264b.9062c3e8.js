"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8917],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>p});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=c(o),p=r,u=m["".concat(l,".").concat(p)]||m[p]||d[p]||a;return o?n.createElement(u,i(i({ref:t},h),{},{components:o})):n.createElement(u,i({ref:t},h))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2203:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:1},i="Using Color",s={unversionedId:"introduction/finding-objects/using-color",id:"introduction/finding-objects/using-color",title:"Using Color",description:"Color requires version 1.0.4 or greater.",source:"@site/docs/introduction/finding-objects/using-color.md",sourceDirName:"introduction/finding-objects",slug:"/introduction/finding-objects/using-color",permalink:"/brobot/docs/introduction/finding-objects/using-color",draft:!1,editUrl:"https://jspinak.github.io/brobot/docs/introduction/finding-objects/using-color.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"State Management",permalink:"/brobot/docs/introduction/core-features/state-management"},next:{title:"Combining Find Operations",permalink:"/brobot/docs/introduction/finding-objects/combining-finds"}},l={},c=[{value:"Find.COLOR",id:"findcolor",level:2},{value:"Average Color",id:"average-color",level:2},{value:"MinScore",id:"minscore",level:3},{value:"Diameter",id:"diameter",level:3},{value:"K-Means Colors",id:"k-means-colors",level:3},{value:"MaxMatchesToActOn",id:"maxmatchestoacton",level:3},{value:"Histogram",id:"histogram",level:2}],h={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-color"},"Using Color"),(0,r.kt)("p",null,"Color requires version 1.0.4 or greater.  "),(0,r.kt)("p",null,"Color can be used in a variety of ways to locate objects in a Brobot automation application.\nIt is selected in an ActionOptions variable as a Find option, and there are currently two\noptions: ",(0,r.kt)("inlineCode",{parentName:"p"},"Find.COLOR")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Find.HISTOGRAM"),". "),(0,r.kt)("h2",{id:"findcolor"},"Find.COLOR"),(0,r.kt)("p",null,"Color is found by comparing the color of each pixel in the scene to the colors in the target images.\nThe way that the colors in the target images are represented affects the results, and can be modified\nby the methods ",(0,r.kt)("inlineCode",{parentName:"p"},"setKmeans")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"setMinScore"),". If k-means is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", the average color of the target\nimages is calculated and compared to the pixels. If k-means is set to a number greater than ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", multiple\ncolors centers are calculated and compared to the pixels. The number of colors centers is the k-means value.\nThe MinScore works in a way similar to the MinSimilarity variable with traditional pattern matching. The higher\nthe MinScore, the more similar the colors must be to be considered a match."),(0,r.kt)("h2",{id:"average-color"},"Average Color"),(0,r.kt)("p",null,"The Find.COLOR action first builds a color profile for the Image from its associated\nimage files. It then uses this color profile to find areas of similar color on the screen.\nThe color profile finds the average color as well as ranges of HSV values for all\nimage files. Pixels on the screen receive scores with small penalties for distance\nto the average HSV values and large penalties for being outside the ranges of HSV\nvalues in the color profile.  "),(0,r.kt)("p",null,"The image below is taken from the history folder of a Brobot application. The\nhistory folder is where illustrated screenshots, visual representations of actions\ntaken during execution, are stored. This illustrated screenshot shows the results\nof a Find.COLOR action. Brobot built a color profile for an Image of a red dot\n(which being a Brobot Image object, allows for the inclusion of multiple image files,\neach captured from a different red dot). The Image is then searched for in the\nselected region (the minimap area), and the matches are shown as pink boxes. The\ncolors shown at the far right of the illustrated screenshot are the contents of the\nmatches. They show the colors that were found."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"illColor",src:o(3014).Z,width:"1630",height:"800"}),"  "),(0,r.kt)("p",null,"The below example shows the results of a similar operation on the red dot but\nallowing for a larger diameter.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"reddot",src:o(31).Z,width:"1388",height:"800"}),"  "),(0,r.kt)("p",null,"Also written to the ",(0,r.kt)("em",{parentName:"p"},"history")," folder is the output of the classification operation\nof the Find.COLOR action. This output is a visual representation of where the target image's\ncolor was found on the entire scene. The search areas and matches are also shown.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"reddotclasses",src:o(5517).Z,width:"1450",height:"800"}),"  "),(0,r.kt)("p",null,"Adjustable options include ",(0,r.kt)("inlineCode",{parentName:"p"},"minScore"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"diameter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kmeans"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"maxMatchesToActOn"),"."),(0,r.kt)("h3",{id:"minscore"},"MinScore"),(0,r.kt)("p",null,"Find.COLOR can be adjusted with respect to ",(0,r.kt)("inlineCode",{parentName:"p"},"minScore")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"diameter"),". MinScore is\na measurement of similarity, similar to minSimilarity. Also like minSimilarity,\nminScore has a scale of 0-1.00, where 1.00 is the most similar and 0 the least\nsimilar.  "),(0,r.kt)("h3",{id:"diameter"},"Diameter"),(0,r.kt)("p",null,"Diameter gives the minimum diameter of the color cluster. For example,\na diameter of 1 allows for any pixel to be a match whereas a diameter of 2 translates\nto matches of size 2x2, where all 4 pixels need to meet the minScore requirements."),(0,r.kt)("h3",{id:"k-means-colors"},"K-Means Colors"),(0,r.kt)("p",null,"Looking for the average color works well for objects that have just one color, but\nnot so well for objects with multiple colors. In this case we want to search for\nparts of the screen that contain all the colors in the object. The k-Means search\nmethod provides this functionality for us. It first determines the most prominent\ncolors in the image and then looks for regions that match these colors. Matches are\nreturned that contain colors most similar to the image's prominent colors. Not all\nprominent colors must be in a region, but all colors in a region should be\nsimilar to one of the prominent colors.  "),(0,r.kt)("h3",{id:"maxmatchestoacton"},"MaxMatchesToActOn"),(0,r.kt)("p",null,"Also used often is maxMatchesToActOn, which limits the returned matches to a\nspecific number. Setting minScore will return a variable number of matches, and\nsetting maxMatchesToActOn will return a number of matches less than or equal\nto its value. For example, using a minScore of .95 may return 7 matches, and\ncombined with a maxMatchesToActOn of 5, the result will be the 5 best matches."),(0,r.kt)("h2",{id:"histogram"},"Histogram"),(0,r.kt)("p",null,"This find method searches for regions that have similar histograms to the given image.\nThe histogram is calculated in HSV color space. Each image produces 5 histograms for\n5 different areas of the image: an ellipse in the center, and the remaining 4 corner\nregions. This is done to preserve some spatial information; for example, an image\nof grass and blue sky would be more likely to match regions of grass and sky as\ncompared to regions of a grassy hill above a lake.  "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MinScore")," can be adjusted as well as the variables that control the number of\nHSV bins used to calculate the histograms: ",(0,r.kt)("inlineCode",{parentName:"p"},"hueBins"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"saturationBins"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"valueBins"),".\nThe default bin sizes for HSV, respectively, are 90, 2, and 1.  "),(0,r.kt)("p",null,"In the below example, maxMatchesToActOn is set to 5. The top match is the target image\nused for the Find.HISTOGRAM action. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"histogram",src:o(6129).Z,width:"1388",height:"800"})))}d.isMDXComponent=!0},6129:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/histogram-f75594eb3eabea86944c01439914134a.png"},31:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/reddot-e2783e535f73990ee1c3aebb624eca6b.png"},5517:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/reddot_classes-07ddf800647b3c46cb44a1f810d87d79.png"},3014:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hist0-FIND-COLOR-redDotColor-11d081101a53ef7db577dcc1c881c5eb.png"}}]);