"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6441],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:e},l),{},{components:n})):r.createElement(f,o({ref:e},l))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7393:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:5},c="Transitions",u={unversionedId:"API/state structure/transitions",id:"API/state structure/transitions",isDocsHomePage:!1,title:"Transitions",description:"The most basic transition, clicking on an image match, can be created with",source:"@site/docs/API/state structure/transitions.md",sourceDirName:"API/state structure",slug:"/API/state structure/transitions",permalink:"/brobot/docs/API/state structure/transitions",editUrl:"https://jspinak.github.io/brobot/docs/API/state structure/transitions.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Image Analysis",permalink:"/brobot/docs/API/state structure/image-analysis"}},l=[],p={toc:l};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transitions"},"Transitions"),(0,i.kt)("p",null,"The most basic transition, clicking on an image match, can be created with\nthe State Structure builder by including the ",(0,i.kt)("inlineCode",{parentName:"p"},"~")," tag in the filename, followed by\npart of the name of the state to transition to.\nIf you have a long state name, you can abbreviate it, but make sure that this\nabbreviation is not part of another state name; otherwise, the transition will not\nbe written. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"AnExampleState")," could be abbreviated to ",(0,i.kt)("inlineCode",{parentName:"p"},"~xamp"),", but if you\nhave another State called ",(0,i.kt)("inlineCode",{parentName:"p"},"ExampleState"),", then you should use ",(0,i.kt)("inlineCode",{parentName:"p"},"~AnEx")," instead or\njust the whole State name ",(0,i.kt)("inlineCode",{parentName:"p"},"~AnExampleState"),". If you don't have complex transitions,\nyou can let the builder write all of your transitions simply by including the\ncorrect tag in the image filenames. It also writes PREVIOUS transitions with the tag\n",(0,i.kt)("inlineCode",{parentName:"p"},"~close")," (PREVIOUS transitions deal with\n",(0,i.kt)("a",{parentName:"p",href:"../../introduction/core-features/state-management#hidden-states"},"hidden states"),"\nand provide for variable State transitions)."))}m.isMDXComponent=!0}}]);