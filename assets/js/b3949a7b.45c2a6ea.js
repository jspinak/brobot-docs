"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3795],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return a?r.createElement(m,s(s({ref:t},u),{},{components:a})):r.createElement(m,s({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4230:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:2},s="Database",i={unversionedId:"architecture-notes/database",id:"architecture-notes/database",title:"Database",description:"Why Use a Database?",source:"@site/docs/architecture-notes/database.md",sourceDirName:"architecture-notes",slug:"/architecture-notes/database",permalink:"/brobot/docs/architecture-notes/database",draft:!1,editUrl:"https://jspinak.github.io/brobot/docs/architecture-notes/database.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/brobot/docs/architecture-notes/overview"},next:{title:"BrobotApp",permalink:"/brobot/docs/architecture-notes/repositories"}},l={},c=[{value:"Why Use a Database?",id:"why-use-a-database",level:2},{value:"Database Choice",id:"database-choice",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Multiple Projects",id:"multiple-projects",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"database"},"Database"),(0,n.kt)("h2",{id:"why-use-a-database"},"Why Use a Database?"),(0,n.kt)("p",null,"Brobot until version 1.0.6 does not use a database. The state structure is either programmed\nmanually or code is produced by the state structure builder. Producing code with the state\nstructure builder automates a large part of the process, but still requires manually cutting out\nimages from screenshots and naming them appropriately. This process can be time intensive and\nthe subjectivity of state definitions can make it more complex and confusing. "),(0,n.kt)("p",null,"Optimally, Brobot would be able to create a state structure without any preparation from the\nuser. Complete automation would require Brobot to identify states, cut out and name images, and\nsave the newly created state structure. Saving the state structure in a database instead of writing\nit in code has a few key advantages:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"It adapts more easily to changes to the Brobot library. Using JavaPoet to write the state structure\nin code requires a lot of work for even small changes to the underlying library classes. "),(0,n.kt)("li",{parentName:"ol"},"The user should to be able to view the state structure. This is best done by displaying the states and\ntheir elements visually, and this can be accomplished with a database, controller classes, and a\nReact front-end. "),(0,n.kt)("li",{parentName:"ol"},"Modifying the automatically generated state structure is easier with a front-end GUI tool. The\nReact front-end can provide functions to modify elements of the state structure, and changes can be\nsaved directly to the database.")),(0,n.kt)("h2",{id:"database-choice"},"Database Choice"),(0,n.kt)("p",null,"I initially chose JPA and created Data Transfer Objects for a relational database. Since I already knew\nJPA from my bachelor's courses, it seemed like the obvious choice. The data model is fairly complex\nand preparing the data with the correct annotations was not a simple task, but after all data\nconfiguration issues were resolved, JPA worked without issues."),(0,n.kt)("p",null,"An LLM suggested I use a non-relational database since the data model (the state structure) is\ncreated dynamically at runtime. I considered MongoDB since it's well integrated with Spring Boot through\nSpring Data MongoDB and also has a large community. "),(0,n.kt)("p",null,"One of the benefits of non-relational databases is dynamic schema creation. However, since the relationship\nbetween elements in the state structure is clearly defined, I was unsure how Brobot would benefit from\nthe flexibility of dynamic schema design."),(0,n.kt)("p",null,"MongoDB stores data as JSON, which is also the format I use to communicate with the React front-end\nwhen using JPA. Initial development with MongoDB may have been simpler than with JPA for this reason.\nWIth JPA, I needed to create DTO and Response classes, for transferring data to the database and\nReact front-end, for many data classes. However, my JPA solution is working and will require additional\nwork only if I add or modify data classes. JPA may also be more efficient; for example, the Image DTO\nclass stores a BufferedImage as a byte array and not a JSON object."),(0,n.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,n.kt)("p",null,"When states were defined with code, the state name was a enum. I changed this to a string since\nnames would be set during runtime. "),(0,n.kt)("p",null,"Many data types extended SikuliX data types. I removed this relationship to SikuliX classes since\nSikuliX classes are not serializable and caused issues with data transfer to the database and front-end.\nInitializing certain data types requires reading .png files from the file system, which was previously\nhandled by SikuliX. Doing this without SikuliX added a dependency to javacv-platform, which uses native\nfunctions to read image files and convert them to BufferedImage or Mat types. "),(0,n.kt)("h2",{id:"multiple-projects"},"Multiple Projects"),(0,n.kt)("p",null,"The Brobot library is built to work with a single GUI automation project, but the BrobotApp\nshould allow for creating different state structures for different projects. BrobotApp should\nstore these state structures in a database for use with a client application. There are two\nways I can approach having multiple projects:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Load the project's states and associated Java objects to memory before working with it."),(0,n.kt)("li",{parentName:"ol"},"Add a project ID to all data types and new service methods that return project-specific objects.")),(0,n.kt)("p",null,"The second option introduces more code complexity but provides benefits for scalability and\nfuture project growth. Small state structures are practical to load into memory, but having very large\nstate structures in memory could cause performance issues. Concurrent access is more difficult\nif the entire state model is in memory, in case at some point a Brobot automation application\nwould be used by multiple users simultaneously. Also, using project IDs allows for working with\nmultiple projects together, which may be a desirable functionality. For example, smaller portions\nof a larger project could be developed as subprojects, and when they are working the overall\nproject could be activated."))}d.isMDXComponent=!0}}]);