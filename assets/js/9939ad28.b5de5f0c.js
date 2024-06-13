"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5788],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5},i="Where do I go from here?",s={unversionedId:"tutorial-state-structure-builder/post-state-structure",id:"tutorial-state-structure-builder/post-state-structure",title:"Where do I go from here?",description:"Now that you have a state structure, you can start writing the code for your automation program.",source:"@site/docs/tutorial-state-structure-builder/post-state-structure.md",sourceDirName:"tutorial-state-structure-builder",slug:"/tutorial-state-structure-builder/post-state-structure",permalink:"/brobot/docs/tutorial-state-structure-builder/post-state-structure",draft:!1,editUrl:"https://jspinak.github.io/brobot/docs/tutorial-state-structure-builder/post-state-structure.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Building the Visual API",permalink:"/brobot/docs/tutorial-state-structure-builder/videos"},next:{title:"Tutorial for Using the Latest Brobot Code in Github",permalink:"/brobot/docs/tutorial-using-the-latest-code-in-github/intro"}},c={},l=[{value:"Activities classes",id:"activities-classes",level:2},{value:"Action basics",id:"action-basics",level:2},{value:"Action tips",id:"action-tips",level:2}],p={toc:l};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"where-do-i-go-from-here"},"Where do I go from here?"),(0,r.kt)("p",null,"Now that you have a state structure, you can start writing the code for your automation program.\nHow you do this is ultimately up to you, but I'll share here how I write my Brobot code.  "),(0,r.kt)("h2",{id:"activities-classes"},"Activities classes"),(0,r.kt)("p",null,"I usually create a class with the name ",(0,r.kt)("em",{parentName:"p"},"someClass"),' + "Activities" for actions that happen within\na specific class. We have a class called ',(0,r.kt)("em",{parentName:"p"},"BlackSpriritsAdventure")," inside the folder ",(0,r.kt)("em",{parentName:"p"},"blackSpiritsAdventure"),". If I want\nto click on the ",(0,r.kt)("em",{parentName:"p"},"Acquire")," button, I would first create a class called ",(0,r.kt)("em",{parentName:"p"},"BlackSpriritsAdventureActivities"),"\nwithin the same folder.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"files",src:n(2091).Z,width:"343",height:"504"})),(0,r.kt)("p",null," This class would inject 3 dependencies in its constructor: ",(0,r.kt)("em",{parentName:"p"},"BlackSpriritsAdventure"),",\n",(0,r.kt)("em",{parentName:"p"},"StateTransitionsManagement"),", and ",(0,r.kt)("em",{parentName:"p"},"Action"),". If you have correctly defined the transitions in each of your transitions classes,\nyou can use the ",(0,r.kt)("em",{parentName:"p"},"StateTransitionsManagement")," class to open any state in your application. It doesn't matter\nwhere you are currently in the environment, as long as you have defined the transitions correctly, you can\nopen any state.  "),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"BlackSpriritsAdventure")," dependency is necessary only to reference the objects in it (here, the\n",(0,r.kt)("em",{parentName:"p"},"Acquire")," button). To open the state with the ",(0,r.kt)("em",{parentName:"p"},"StateTransitionsManagement")," dependency, you don't need to inject\nthe ",(0,r.kt)("em",{parentName:"p"},"BlackSpriritsAdventure")," state class. This is because the ",(0,r.kt)("em",{parentName:"p"},"StateTransitionsManagement")," class's ",(0,r.kt)("em",{parentName:"p"},"open")," method takes an ",(0,r.kt)("em",{parentName:"p"},"Enum")," object\nas a parameter. The ",(0,r.kt)("em",{parentName:"p"},"Enum")," object is the name of the state you want to open (here, BLACKSPIRITSADVENTURE),\nand it is defined as a public variable. If we just wanted to open the ",(0,r.kt)("em",{parentName:"p"},"BlackSpriritsAdventure")," state, we wouldn't\nneed a ",(0,r.kt)("em",{parentName:"p"},"BlackSpriritsAdventureActivities")," class; we could open it with one line of code: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"stateTransitionsManagement.openState(BLACKSPIRITSADVENTURE);\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Action")," is used to perform actions on the screen."),(0,r.kt)("p",null,"Our class ",(0,r.kt)("em",{parentName:"p"},"BlackSpriritsAdventureActivities")," would look like this:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@Component\npublic class BlackSpriritsAdventureActivities {\n\n    private BlackSpriritsAdventure blackSpriritsAdventure;\n    private StateTransitionsManagement stateTransitionsManagement;\n    private Action action;\n\n    public BlackSpriritsAdventureActivities(BlackSpriritsAdventure blackSpriritsAdventure,\n                                            StateTransitionsManagement stateTransitionsManagement,\n                                            Action action) {\n        this.blackSpriritsAdventure = blackSpriritsAdventure;\n        this.stateTransitionsManagement = stateTransitionsManagement;\n        this.action = action;\n    }\n\n    public boolean acquire() {\n        if (!stateTransitionsManagement.openState(BLACKSPIRITSADVENTURE)) return false;\n        return action.perform(CLICK, blackSpriritsAdventure.getAcquireButton());\n    }\n}\n")),(0,r.kt)("h2",{id:"action-basics"},"Action basics"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Action")," class is used to perform actions on the screen. It has a method called ",(0,r.kt)("em",{parentName:"p"},"perform")," that takes\nan ",(0,r.kt)("em",{parentName:"p"},"ActionOptions")," object and an ",(0,r.kt)("em",{parentName:"p"},"ObjectCollection")," object. The ",(0,r.kt)("em",{parentName:"p"},"ActionOptions")," object defines the action\nto be performed, and the ",(0,r.kt)("em",{parentName:"p"},"ObjectCollection")," object defines the objects on the screen that the action will\nbe performed on. The ",(0,r.kt)("em",{parentName:"p"},"ActionOptions")," object has a builder that allows you to define the action to be performed.\nThe ",(0,r.kt)("em",{parentName:"p"},"ObjectCollection")," object has a builder that allows you to define the objects on the screen that the action\nwill be performed on. The ",(0,r.kt)("em",{parentName:"p"},"ObjectCollection")," object can be created with a single object, or with a list of objects."),(0,r.kt)("h2",{id:"action-tips"},"Action tips"),(0,r.kt)("p",null,"When using a standard action; for example, a single left click without any modifiers, you can use the\nfollowing code to perform the action:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"action.perform(CLICK, objectCollection);\n")),(0,r.kt)("p",null,"If you wish to use a non-standard action, you will need to create an ",(0,r.kt)("em",{parentName:"p"},"ActionOptions")," variable and\nspecific its parameters. Then you would pass it to the ",(0,r.kt)("em",{parentName:"p"},"perform")," method along with the ",(0,r.kt)("em",{parentName:"p"},"ObjectCollection")," object.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ActionOptions actionOptions = ActionOptions.builder()\n        .actionType(CLICK)\n        .clickType(RIGHT)\n        .build();\naction.perform(actionOptions, objectCollection);\n")),(0,r.kt)("p",null,"The same applies to the ",(0,r.kt)("em",{parentName:"p"},"ObjectCollection")," object. If you wish to use a single image, you can just pass the\nimage to the ",(0,r.kt)("em",{parentName:"p"},"perform")," method as such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"action.perform(actionOptions, image);\n")),(0,r.kt)("p",null,"If you want the action to be performed on multiple objects, you can use the ",(0,r.kt)("em",{parentName:"p"},"ObjectCollection")," builder to\ncreate a list of objects.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ObjectCollection objectCollection = ObjectCollection.builder()\n        .withImages(image1, image2, image3)\n        .withRegions(region1, region2, region3)\n        .build();\naction.perform(actionOptions, objectCollection);\n")),(0,r.kt)("p",null,"To perform a standard click on one image:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"action.perform(CLICK, image);\n")))}u.isMDXComponent=!0},2091:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/state-structure-filestructure2-c2058937bea07108d7a7533326dc872f.png"}}]);