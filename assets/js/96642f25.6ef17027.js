"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6249],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=s(n),h=i,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7785:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),o=["components"],r={sidebar_position:1},p="ActionOptions",s={unversionedId:"API/data-types/actionOptions",id:"API/data-types/actionOptions",isDocsHomePage:!1,title:"ActionOptions",description:"ActionOptions provides options for configuring an action. It can be used",source:"@site/docs/API/data-types/actionOptions.md",sourceDirName:"API/data-types",slug:"/API/data-types/actionOptions",permalink:"/brobot/docs/API/data-types/actionOptions",editUrl:"https://jspinak.github.io/brobot/docs/API/data-types/actionOptions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/brobot/docs/API/overview"},next:{title:"ObjectCollection",permalink:"/brobot/docs/API/data-types/objectCollection"}},u=[{value:"action",id:"action",children:[],level:2},{value:"FIND Options",id:"find-options",children:[{value:"find",id:"find",children:[],level:3},{value:"tempFind",id:"tempfind",children:[],level:3},{value:"similarity",id:"similarity",children:[],level:3},{value:"doOnEach",id:"dooneach",children:[],level:3}],level:2},{value:"useDefinedRegion",id:"usedefinedregion",children:[],level:2},{value:"searchRegions",id:"searchregions",children:[],level:2},{value:"scrollDirection",id:"scrolldirection",children:[],level:2},{value:"getTextUntil",id:"gettextuntil",children:[],level:2},{value:"successEvaluation",id:"successevaluation",children:[],level:2},{value:"Pauses and Delays",id:"pauses-and-delays",children:[{value:"pauseBeforeBegin",id:"pausebeforebegin",children:[],level:3},{value:"moveMouseDelay",id:"movemousedelay",children:[],level:3},{value:"pauseBeforeMouseDown",id:"pausebeforemousedown",children:[],level:3},{value:"pauseAfterMouseDown",id:"pauseaftermousedown",children:[],level:3},{value:"pauseBeforeMouseUp",id:"pausebeforemouseup",children:[],level:3},{value:"pauseAfterMouseUp",id:"pauseaftermouseup",children:[],level:3},{value:"pauseAfterEnd",id:"pauseafterend",children:[],level:3}],level:2},{value:"dragToOffsetX &amp; dragToOffsetY",id:"dragtooffsetx--dragtooffsety",children:[],level:2},{value:"Click Options",id:"click-options",children:[{value:"clickType",id:"clicktype",children:[],level:3},{value:"moveMouseAfterClick",id:"movemouseafterclick",children:[],level:3},{value:"locationAfterClick",id:"locationafterclick",children:[],level:3},{value:"offsetLocationBy",id:"offsetlocationby",children:[],level:3},{value:"clickUntil",id:"clickuntil",children:[],level:3}],level:2},{value:"maxWait",id:"maxwait",children:[],level:2},{value:"IndividualActions &amp; ActionSequences",id:"individualactions--actionsequences",children:[{value:"timesToRepeatIndividualAction",id:"timestorepeatindividualaction",children:[],level:3},{value:"maxTimesToRepeatActionSequence",id:"maxtimestorepeatactionsequence",children:[],level:3},{value:"pauseBetweenIndividualActions",id:"pausebetweenindividualactions",children:[],level:3},{value:"pauseBetweenActionSequences",id:"pausebetweenactionsequences",children:[],level:3}],level:2},{value:"maxMatchesToActOn",id:"maxmatchestoacton",children:[],level:2},{value:"defineAs",id:"defineas",children:[],level:2},{value:"Adjust Action Results",id:"adjust-action-results",children:[{value:"addW",id:"addw",children:[],level:3},{value:"addH",id:"addh",children:[],level:3},{value:"absoluteW",id:"absolutew",children:[],level:3},{value:"absoluteH",id:"absoluteh",children:[],level:3},{value:"addX",id:"addx",children:[],level:3},{value:"addY",id:"addy",children:[],level:3}],level:2},{value:"Highlighting",id:"highlighting",children:[{value:"highlightAllAtOnce",id:"highlightallatonce",children:[],level:3},{value:"highlightSeconds",id:"highlightseconds",children:[],level:3},{value:"highlightColor",id:"highlightcolor",children:[],level:3}],level:2},{value:"Typing",id:"typing",children:[{value:"typeDelay",id:"typedelay",children:[],level:3},{value:"modifiers",id:"modifiers",children:[],level:3}],level:2}],d={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"actionoptions"},"ActionOptions"),(0,l.kt)("p",null,"ActionOptions provides options for configuring an action. It can be used\nfor all standard Brobot Actions, which include all BasicActions and some\nCompositeActions. Every standard Action has a corresponding enum that can\nbe selected in the Action field of ActionOptions."),(0,l.kt)("h2",{id:"action"},"action"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"enum")),(0,l.kt)("p",null,"BasicActions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FIND"),(0,l.kt)("li",{parentName:"ul"},"CLICK"),(0,l.kt)("li",{parentName:"ul"},"DEFINE return a Region with a specific location and dimensions"),(0,l.kt)("li",{parentName:"ul"},"TYPE sends keyboard input"),(0,l.kt)("li",{parentName:"ul"},"MOVE moves the mouse"),(0,l.kt)("li",{parentName:"ul"},"VANISH is successful when an Image or State disappears"),(0,l.kt)("li",{parentName:"ul"},"GET_TEXT reads text from a Region"),(0,l.kt)("li",{parentName:"ul"},"HIGHLIGHT highlights a Match, Region, or Location"),(0,l.kt)("li",{parentName:"ul"},"SCROLL_MOUSE_WHEEL"),(0,l.kt)("li",{parentName:"ul"},"MOUSE_DOWN"),(0,l.kt)("li",{parentName:"ul"},"MOUSE_UP"),(0,l.kt)("li",{parentName:"ul"},"KEY_DOWN"),(0,l.kt)("li",{parentName:"ul"},"KEY_UP")),(0,l.kt)("p",null,"CompositeActions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CLICK_UNTIL clicks Matches, Regions, and/or Locations until a condition is fulfilled"),(0,l.kt)("li",{parentName:"ul"},"DRAG")),(0,l.kt)("p",null,"The default Action is FIND."),(0,l.kt)("h2",{id:"find-options"},"FIND Options"),(0,l.kt)("h3",{id:"find"},"find"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"enum")),(0,l.kt)("p",null,"The Find enum specifies how a Find operation should be carried out.",(0,l.kt)("br",{parentName:"p"}),"\n","Keep in mind that ObjectCollections can contain multiple Images, and\nImages can contain multiple Patterns (or image files)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FIRST: first Match found"),(0,l.kt)("li",{parentName:"ul"},"EACH: one Match per Image"),(0,l.kt)("li",{parentName:"ul"},"ALL: all Matches for all Patterns in all Images"),(0,l.kt)("li",{parentName:"ul"},"BEST: the best match from all Patterns in all Images"),(0,l.kt)("li",{parentName:"ul"},"CUSTOM: user-defined.",(0,l.kt)("br",{parentName:"li"}),"Must be of type ",(0,l.kt)("inlineCode",{parentName:"li"},"BiFunction<ActionOptions, List<StateImageObject>, Matches>>"))),(0,l.kt)("p",null,"The options that return multiple Matches allow for overlapping Matches.",(0,l.kt)("br",{parentName:"p"}),"\n","The default option is FIRST."),(0,l.kt)("h3",{id:"tempfind"},"tempFind"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"BiFunction<ActionOptions, List<StateImageObject>, Matches>")),(0,l.kt)("p",null,"A user-defined Find method to be used in a single operation.",(0,l.kt)("br",{parentName:"p"}),"\n","Find.CUSTOM is for user-defined Find methods meant to be reused."),(0,l.kt)("h3",{id:"similarity"},"similarity"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"double")),(0,l.kt)("p",null,"Specifies how similar the found Match must be to the original Image.\nSee the Sikuli documentation for detailed information.",(0,l.kt)("br",{parentName:"p"}),"\n","The default value is the Sikuli variable Settings.MinSimilarity."),(0,l.kt)("h3",{id:"dooneach"},"doOnEach"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"enum")),(0,l.kt)("p",null,"Images can contain multiple Patterns.",(0,l.kt)("br",{parentName:"p"}),"\n","DoOnEach specifies how Find.EACH should approach individual Images."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FIRST: first Match on each Image"),(0,l.kt)("li",{parentName:"ul"},"BEST: best Match on each Image")),(0,l.kt)("p",null,"The default value is FIRST."),(0,l.kt)("h2",{id:"usedefinedregion"},"useDefinedRegion"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Instead of searching for a StateImageObject, use its defined Region to create a Match.\nThis is either the first found region if the StateImageObject is fixed, or the first\ndefined Region in SearchRegions.  "),(0,l.kt)("h2",{id:"searchregions"},"searchRegions"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"SearchRegions")),(0,l.kt)("p",null,"Sets temporary search regions that override the search regions of State objects\nduring a Find operation. "),(0,l.kt)("h2",{id:"scrolldirection"},"scrollDirection"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"enum")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"UP"),(0,l.kt)("li",{parentName:"ul"},"DOWN")),(0,l.kt)("p",null,"For scrolling with the mouse wheel.",(0,l.kt)("br",{parentName:"p"}),"\n","The default value is DOWN."),(0,l.kt)("h2",{id:"gettextuntil"},"getTextUntil"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"enum")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"NONE: Text is searched for until the operation times out or the max number of iterations is reached.  "),(0,l.kt)("li",{parentName:"ul"},"TEXT_APPEARS: Keep searching for text until all Match regions have text."),(0,l.kt)("li",{parentName:"ul"},"TEXT_VANISHES: Keep searching for text until no Match regions have text.")),(0,l.kt)("p",null,"The default value is NONE."),(0,l.kt)("h2",{id:"successevaluation"},"successEvaluation"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"Predicate<Matches>")),(0,l.kt)("p",null,"successEvaluation defines the success criteria for the Find operation.",(0,l.kt)("br",{parentName:"p"}),"\n","The default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"matches -> !matches.isEmpty();")),(0,l.kt)("h2",{id:"pauses-and-delays"},"Pauses and Delays"),(0,l.kt)("p",null,"The order that the different pauses work is shown in the example of a Drag operation:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"pauseBeforeBegin"),(0,l.kt)("li",{parentName:"ol"},"moveMouseDelay (to go to the drag point)"),(0,l.kt)("li",{parentName:"ol"},"pauseBeforeMouseDown"),(0,l.kt)("li",{parentName:"ol"},"pauseAfterMouseDown"),(0,l.kt)("li",{parentName:"ol"},"moveMouseDelay (to go to the drop point)"),(0,l.kt)("li",{parentName:"ol"},"pauseBeforeMouseUp"),(0,l.kt)("li",{parentName:"ol"},"pauseAfterMouseUp"),(0,l.kt)("li",{parentName:"ol"},"pauseAfterEnd")),(0,l.kt)("p",null,"Pauses are always associated with actions: for example, pausing before clicking can increase\nthe chance that the click will be successful. There are also BrobotSettings for these options\nthat apply them to every action, but setting the pause options in ActionOptions\ngives more granular control."),(0,l.kt)("h3",{id:"pausebeforebegin"},"pauseBeforeBegin"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),(0,l.kt)("br",{parentName:"p"}),"\n","The default value is 0."),(0,l.kt)("h3",{id:"movemousedelay"},"moveMouseDelay"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"float"),(0,l.kt)("br",{parentName:"p"}),"\n","Delays the mouse movement. When set to 0 the mouse cursor will jump from the current\npoint to the target location.",(0,l.kt)("br",{parentName:"p"}),"\n","The default value is the Sikuli variable Settings.MoveMouseDelay."),(0,l.kt)("h3",{id:"pausebeforemousedown"},"pauseBeforeMouseDown"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),(0,l.kt)("br",{parentName:"p"}),"\n","The default value is the Sikuli variable Settings.DelayBeforeMouseDown."),(0,l.kt)("h3",{id:"pauseaftermousedown"},"pauseAfterMouseDown"),(0,l.kt)("p",null,"Type ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),(0,l.kt)("br",{parentName:"p"}),"\n","The default value is BrobotSettings.delayAfterMouseDown.",(0,l.kt)("br",{parentName:"p"}),"\n","It replaces the Sikuli variable Settings.DelayBeforeDrag for Drag operations\nand Settings.ClickDelay for Click operations."),(0,l.kt)("h3",{id:"pausebeforemouseup"},"pauseBeforeMouseUp"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),(0,l.kt)("br",{parentName:"p"}),"\n","The default value is the Sikuli variable Settings.DelayBeforeDrop.",(0,l.kt)("br",{parentName:"p"}),"\n","It replaces DelayBeforeDrop for Drag operations."),(0,l.kt)("h3",{id:"pauseaftermouseup"},"pauseAfterMouseUp"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),(0,l.kt)("br",{parentName:"p"}),"\n","The default value is 0."),(0,l.kt)("h3",{id:"pauseafterend"},"pauseAfterEnd"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),(0,l.kt)("br",{parentName:"p"}),"\n","The default value is 0."),(0,l.kt)("h2",{id:"dragtooffsetx--dragtooffsety"},"dragToOffsetX & dragToOffsetY"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"int")),(0,l.kt)("p",null,"These values provide an offset to the Match for the dragTo Location.\nTo select the location to drag to, objects are chosen in this order:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Objects in the 2nd ObjectCollection + offsets"),(0,l.kt)("li",{parentName:"ol"},"The dragFrom Location + offsets (when there is no 2nd ObjectCollection)")),(0,l.kt)("p",null,"Other variables are used to adjust the dragFrom Location"),(0,l.kt)("h2",{id:"click-options"},"Click Options"),(0,l.kt)("h3",{id:"clicktype"},"clickType"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"enum")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"LEFT"),(0,l.kt)("li",{parentName:"ul"},"RIGHT"),(0,l.kt)("li",{parentName:"ul"},"MIDDLE"),(0,l.kt)("li",{parentName:"ul"},"DOUBLE_LEFT"),(0,l.kt)("li",{parentName:"ul"},"DOUBLE_RIGHT"),(0,l.kt)("li",{parentName:"ul"},"DOUBLE_MIDDLE")),(0,l.kt)("h3",{id:"movemouseafterclick"},"moveMouseAfterClick"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"We have 2 options for moving the mouse after a click:\n1) To an offset of the click point\n2) To a fixed location "),(0,l.kt)("p",null,"If the offset is defined we move there; otherwise we move to the fixed location.\nThese options are also used for drags, and can move the mouse once the drag is finished."),(0,l.kt)("h3",{id:"locationafterclick"},"locationAfterClick"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"Location")),(0,l.kt)("h3",{id:"offsetlocationby"},"offsetLocationBy"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"Location")),(0,l.kt)("h3",{id:"clickuntil"},"clickUntil"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"enum")),(0,l.kt)("p",null,"Specifies the condition to fulfill after a Click.",(0,l.kt)("br",{parentName:"p"}),"\n","The Objects in the 1st ObjectCollection are acted on by the CLICK method.",(0,l.kt)("br",{parentName:"p"}),"\n","If there is a 2nd ObjectCollection, it is acted on by the FIND method.",(0,l.kt)("br",{parentName:"p"}),"\n","If there is only 1 ObjectCollection, the FIND method also uses these objects.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},"1 ObjectCollection: Click this until it disappears.",(0,l.kt)("br",{parentName:"em"}),"2 ObjectCollections: Click #1 until #2 appears or disappears.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OBJECTS_APPEAR"),(0,l.kt)("li",{parentName:"ul"},"OBJECTS_VANISH")),(0,l.kt)("p",null,"The default value is OBJECTS_APPEAR."),(0,l.kt)("h2",{id:"maxwait"},"maxWait"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"double")),(0,l.kt)("p",null,"maxWait gives the max number of seconds to perform an operation."),(0,l.kt)("h2",{id:"individualactions--actionsequences"},"IndividualActions & ActionSequences"),(0,l.kt)("p",null,"IndividualAction refers to individual activities, such as clicking on a single Match.\nWhen clicking a Match, timesToRepeatIndividualAction gives the number of consecutive clicks\non this Match before moving on to the next Match.",(0,l.kt)("br",{parentName:"p"}),"\n","An ActionSequence refers to all activities in one iteration of a BasicAction, such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"clicking on all Matches of an Image"),(0,l.kt)("li",{parentName:"ul"},"clicking on a Match for each Pattern in a set of Images contained in an ObjectCollection")),(0,l.kt)("h3",{id:"timestorepeatindividualaction"},"timesToRepeatIndividualAction"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),(0,l.kt)("br",{parentName:"p"}),"\n","Default value: 1"),(0,l.kt)("h3",{id:"maxtimestorepeatactionsequence"},"maxTimesToRepeatActionSequence"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),(0,l.kt)("br",{parentName:"p"}),"\n","Default value: 1"),(0,l.kt)("h3",{id:"pausebetweenindividualactions"},"pauseBetweenIndividualActions"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),(0,l.kt)("br",{parentName:"p"}),"\n","Default value: 0"),(0,l.kt)("h3",{id:"pausebetweenactionsequences"},"pauseBetweenActionSequences"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),(0,l.kt)("br",{parentName:"p"}),"\n","Default value: 0"),(0,l.kt)("h2",{id:"maxmatchestoacton"},"maxMatchesToActOn"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),(0,l.kt)("br",{parentName:"p"}),"\n","Default value: -1"),(0,l.kt)("p",null,"maxMatchesToActOn limits the number of Matches used when working with Find.ALL or Find.EACH.\nWhen <=0 it is not used."),(0,l.kt)("h2",{id:"defineas"},"defineAs"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"enum"),(0,l.kt)("br",{parentName:"p"}),"\n","Default value: MATCH"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"INSIDE_ANCHORS"),(0,l.kt)("li",{parentName:"ul"},"OUTSIDE_ANCHORS"),(0,l.kt)("li",{parentName:"ul"},"MATCH"),(0,l.kt)("li",{parentName:"ul"},"BELOW_MATCH"),(0,l.kt)("li",{parentName:"ul"},"ABOVE_MATCH"),(0,l.kt)("li",{parentName:"ul"},"LEFT_OF_MATCH"),(0,l.kt)("li",{parentName:"ul"},"RIGHT_OF_MATCH "),(0,l.kt)("li",{parentName:"ul"},"FOCUSED_WINDOW")),(0,l.kt)("p",null,"Anchors define Locations in Matches and specify how these Locations should be used\nto define a Region (see the Anchor class for more info).",(0,l.kt)("br",{parentName:"p"}),"\n","INSIDE_ANCHORS defines the region as the smallest rectangle from the anchors found.",(0,l.kt)("br",{parentName:"p"}),"\n","OUTSIDE_ANCHORS defines the region as the largest rectangle from the anchors found.",(0,l.kt)("br",{parentName:"p"}),"\n","MATCH, BELOW_MATCH, ABOVE_MATCH, LEFT_OF_MATCH, RIGHT_OF_MATCH all define a Region\naround a single Match.",(0,l.kt)("br",{parentName:"p"}),"\n","FOCUSED_WINDOW defines a Region around the active Window."),(0,l.kt)("h2",{id:"adjust-action-results"},"Adjust Action Results"),(0,l.kt)("p",null,"The following variables make adjustments to the final results of many actions.\nFor example, a Region defined as x.y.w.h = 10.10.50.50 will be"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"20.10.60.50 when addX = 10"),(0,l.kt)("li",{parentName:"ul"},"10.10.60.50 when addW = 10"),(0,l.kt)("li",{parentName:"ul"},"10.10.20.50 when absoluteW = 10\nAbsoluteW and AbsoluteH are not used when set to <0.\nWhen AbsoluteW is used, addW is not used. Same for H.")),(0,l.kt)("p",null,"With the Drag operation, these variables are used for the dragFrom Location\nbut not for the dragTo Location."),(0,l.kt)("h3",{id:"addw"},"addW"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),(0,l.kt)("br",{parentName:"p"}),"\n","Default: 0"),(0,l.kt)("h3",{id:"addh"},"addH"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),(0,l.kt)("br",{parentName:"p"}),"\n","Default: 0"),(0,l.kt)("h3",{id:"absolutew"},"absoluteW"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),(0,l.kt)("br",{parentName:"p"}),"\n","Default: -1"),(0,l.kt)("h3",{id:"absoluteh"},"absoluteH"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),(0,l.kt)("br",{parentName:"p"}),"\n","Default: -1"),(0,l.kt)("h3",{id:"addx"},"addX"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),(0,l.kt)("br",{parentName:"p"}),"\n","Default: 0"),(0,l.kt)("h3",{id:"addy"},"addY"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),(0,l.kt)("br",{parentName:"p"}),"\n","Default: 0"),(0,l.kt)("h2",{id:"highlighting"},"Highlighting"),(0,l.kt)("h3",{id:"highlightallatonce"},"highlightAllAtOnce"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),(0,l.kt)("br",{parentName:"p"}),"\n","Default: false"),(0,l.kt)("p",null,"When set to true, all matches will be highlighted at once. When\nset to false, matches will be highlighted one at a time."),(0,l.kt)("h3",{id:"highlightseconds"},"highlightSeconds"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),(0,l.kt)("br",{parentName:"p"}),"\n","Default: 1"),(0,l.kt)("h3",{id:"highlightcolor"},"highlightColor"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"String"),(0,l.kt)("br",{parentName:"p"}),"\n",'Default: "red"'),(0,l.kt)("p",null,"See the Sikuli method ",(0,l.kt)("inlineCode",{parentName:"p"},"region.highlight()")," for more info."),(0,l.kt)("h2",{id:"typing"},"Typing"),(0,l.kt)("p",null,"The below options are for typing characters to the active window.\nModifiers are used for key combinations such as 'SHIFT a' or 'CTRL ALT DEL'.\nFor more information on modifiers, see the Sikuli documentation."),(0,l.kt)("h3",{id:"typedelay"},"typeDelay"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),(0,l.kt)("br",{parentName:"p"}),"\n","Default: Settings.TypeDelay"),(0,l.kt)("h3",{id:"modifiers"},"modifiers"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"String"),(0,l.kt)("br",{parentName:"p"}),"\n",'Default: ""',(0,l.kt)("br",{parentName:"p"}),"\n",'Not used when ""',(0,l.kt)("br",{parentName:"p"}),"\n","Modifiers can be combined by adding them together."))}c.isMDXComponent=!0}}]);