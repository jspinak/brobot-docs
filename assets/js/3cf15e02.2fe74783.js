"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4324],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>b});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),b=n,h=d["".concat(l,".").concat(b)]||d[b]||u[b]||i;return o?r.createElement(h,a(a({ref:t},p),{},{components:o})):r.createElement(h,a({ref:t},p))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8923:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const i={sidebar_position:3},a="BrobotApp",s={unversionedId:"architecture-notes/repositories",id:"architecture-notes/repositories",title:"BrobotApp",description:"Issues with a Single Project Repository",source:"@site/docs/architecture-notes/repositories.md",sourceDirName:"architecture-notes",slug:"/architecture-notes/repositories",permalink:"/brobot/docs/architecture-notes/repositories",draft:!1,editUrl:"https://jspinak.github.io/brobot/docs/architecture-notes/repositories.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/brobot/docs/architecture-notes/database"},next:{title:"Action",permalink:"/brobot/docs/design-notes/Version 1.0.7"}},l={},c=[{value:"Issues with a Single Project Repository",id:"issues-with-a-single-project-repository",level:2},{value:"Solutions",id:"solutions",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"brobotapp"},"BrobotApp"),(0,n.kt)("h2",{id:"issues-with-a-single-project-repository"},"Issues with a Single Project Repository"),(0,n.kt)("p",null,"I initially added the database and web functionality to the Brobot\nrepository on GitHub. The React front-end code went in the root folder\n'web', added to the set of root folders containing 'library' and 'docs'."),(0,n.kt)("p",null,"Problems with using MVC in a Spring Boot library caused me to consider\ncreating a new repository for these functions. The first problem was that\nthe GET requests were not visible in the http endpoints. Additionally, a client\nBrobot application would not stay active for REST communication, despite its\ndependency to the Brobot library, which was configured as a Spring MVC project\nwith @Service and @Controller classes."),(0,n.kt)("h2",{id:"solutions"},"Solutions"),(0,n.kt)("p",null,"Since Brobot is a Spring Boot library, it cannot be run independently as a Spring\nBoot applications. This is necessary for it to be included as a dependency in Spring\nBoot client applications and for its beans to be available to the client. Libraries do\nnot typically include MVC functionality and I presume this is the cause of the issues I\nhad with the MVC functionality. "),(0,n.kt)("p",null,"The solution is to create a separate repository for a Spring Boot application (and not a library)\nthat includes the @Service and @Controller classes and has Brobot as a dependency. This\nrepository holds the software necessary to create state models using a GUI. I'll refer to this software as BrobotApp\nor the App and continue referring to the library as Brobot. "),(0,n.kt)("p",null,"The React front-end lives in a separate repository, under /web. I'll call it BrobotWeb or Web. It is to be used\nwith the App to facilitate creating state models."),(0,n.kt)("p",null,"I created an additional folder for the logging capabilities. It is best practices not to have REST communication\nin a library module. For this reason as well as to have more modularity and separation of concerns, logging and\ncommunication with REST endpoints for the Elasticsearch containers are now handled by the logging module. The\nfolder is /log and I call it BrobotLogging or Logging. "),(0,n.kt)("h1",{id:"multi-module-project"},"Multi-Module Project"),(0,n.kt)("p",null,"I decided to compartmentalize functionality with a multi-module project and keep all modules in the same Github\nrepository.\nThe modules are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"library"),(0,n.kt)("li",{parentName:"ul"},"app"),(0,n.kt)("li",{parentName:"ul"},"log"),(0,n.kt)("li",{parentName:"ul"},"web"),(0,n.kt)("li",{parentName:"ul"},"library-test")),(0,n.kt)("p",null,"The library tests are in a separate module because they require running a Spring Boot application and use the\nannotation @SpringBootTest, but the library module is not a Spring Boot Application and does not have the\n@SpringBootApplication annotation. Keeping the tests in a separate module allows for separation of concerns and\nkeeps the library's dependencies specific to its functionality. Make sure to exclude the module library-test from\nthe production jar."))}u.isMDXComponent=!0}}]);