(this["webpackJsonpmanganyaa-noblesse-react"]=this["webpackJsonpmanganyaa-noblesse-react"]||[]).push([[4],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},107:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},112:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(0),r=a(13),o=a(77),s=a(84),i=a(18),l=a(118),d=a(86),u=function(){var e=new Date;e.setSeconds(e.getSeconds()+2),window.sessionStorage.setItem("asdf",e.getTime().toString())},h=a(82),p=a(17),m=(a(102),a(2)),j=function(){var e=Object(c.useContext)(o.a).translations,t=Object(c.useState)((function(){return window.Notification.permission||"default"})),a=Object(n.a)(t,2),r=a[0],s=a[1];function i(){window.Notification?Notification.requestPermission((function(e){return function(e){window.OneSignal&&window.OneSignal.isPushNotificationsEnabled().then((function(e){e||window.OneSignal.push(["registerForPushNotifications"])})),s(e)}(e)})):s("denied")}return Object(m.jsx)("h3",{className:"flipInY",children:"granted"===r?Object(m.jsx)(m.Fragment,{children:e.weWillNotifyYou}):"denied"===r?Object(m.jsx)(m.Fragment,{children:e.activateNotifications}):Object(m.jsx)("button",{className:"headerbtn",type:"button",onClick:i,children:e.weCanNotifyYou})})},f=(a(103),function(e){var t=e.chapterName,a=e.subscribe,n=e.link,r=e.serieNameWithManga,s=Object(c.useContext)(o.a).translations;return Object(m.jsxs)("header",{className:"bg95",children:[Object(m.jsx)("h1",{className:"flipInY ".concat(n?"link":""),children:n?Object(m.jsx)(p.b,{to:n,children:r}):r}),Object(m.jsxs)("h2",{className:"flipInY",children:[s.chapter," ",t,a&&": ".concat(s.notReleasedYet)]}),a&&"Notification"in window&&Object(m.jsx)(j,{})]})}),b=a(105),g=a.n(b),O=a(106),x=a.n(O),v={position:"relative",display:"inline-block",borderRadius:5,userSelect:"none",boxSizing:"border-box",height:10,width:"100%",cursor:"pointer"},y={position:"absolute",borderRadius:5,userSelect:"none",boxSizing:"border-box",top:0,height:"100%",cursor:"pointer"},w={position:"relative",display:"block",content:'""',width:18,height:18,backgroundColor:"#fff",borderRadius:"50%",boxShadow:"0 1px 1px rgba(0,0,0,.5)",userSelect:"none",cursor:"pointer",boxSizing:"border-box"};function N(e){var t=e.touches;if(t&&t.length){var a=t[0];return{x:a.clientX,y:a.clientY}}return{x:e.clientX,y:e.clientY}}var C=function(e){var t=e.axis,a=e.x,n=e.xmin,r=e.xmax,o=e.xstep,s=e.onChange,l=e.styles,d=Object(c.useRef)(null),u=Object(c.useRef)(null),h=Object(c.useRef)({}),p=Object(c.useRef)({});function j(e){var a=e.left;if(s){var c=d.current.getBoundingClientRect().width,i=0;a<0&&(a=0),a>c&&(a=c),"x"!==t&&"xy"!==t||(i=a/c*(r-n)),s({x:(0!==i?parseInt(i/o,10)*o:0)+n,y:0})}}function f(e){e.preventDefault(),j(function(e){var t=N(e),a=t.x+h.current.x-p.current.x,n=t.y+h.current.y-p.current.y;return{left:a,top:n}}(e))}function b(e){e.preventDefault(),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",f,{passive:!1}),document.removeEventListener("touchend",b),document.removeEventListener("touchcancel",b)}function g(e){e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation();var t=u.current,a=N(e);h.current={x:t.offsetLeft,y:t.offsetTop},p.current={x:a.x,y:a.y},document.addEventListener("mousemove",f),document.addEventListener("mouseup",b),document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",b),document.addEventListener("touchcancel",b)}function O(e){e.preventDefault();var t=N(e),a=d.current.getBoundingClientRect();h.current={x:t.x-a.left,y:t.y-a.top},p.current={x:t.x,y:t.y},document.addEventListener("mousemove",f),document.addEventListener("mouseup",b),document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",b),document.addEventListener("touchcancel",b),j({left:t.x-a.left,top:t.y-a.top})}var x=function(){var e=(a-n)/(r-n)*100;return e>100&&(e=100),e<0&&(e=0),{top:0,left:e}}(),C={width:"".concat(x.left,"%")},k={position:"absolute",transform:"translate(-50%, -50%)",left:"".concat(x.left,"%"),top:"50%"};return Object(m.jsxs)("div",{ref:d,style:Object(i.a)(Object(i.a)({},v),l.track),onTouchStart:O,onMouseDown:O,children:[Object(m.jsx)("div",{style:Object(i.a)(Object(i.a)(Object(i.a)({},y),l.active),C)}),Object(m.jsx)("div",{ref:u,style:k,onTouchStart:g,onMouseDown:g,onClick:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},children:Object(m.jsx)("div",{style:w})})]})};C.defaultProps={axis:"x",x:50,xmin:0,xmax:100,xstep:1,styles:{}};var k=C;a(104);var M=function(e){var t=e.mangaPageWidth,a=e.setMangaPageWidth,n=e.mode;function c(e){e!==t&&(a(e),localStorage.setItem("mangaPageWidth","".concat(e)))}return Object(m.jsxs)("div",{className:"slider-container bg95 fadeInUp",children:[Object(m.jsxs)("div",{className:"slider-uppersection",children:[Object(m.jsx)("div",{className:"zoom-icon",onClick:function(){return t>10&&c(t-10)},children:Object(m.jsx)(g.a,{})}),Object(m.jsxs)("span",{className:"slider-value-show",children:[t,"%"]}),Object(m.jsx)("div",{className:"zoom-icon",onClick:function(){return t<100&&c(t+10)},children:Object(m.jsx)(x.a,{})})]}),Object(m.jsx)(k,{axis:"x",xstep:10,xmin:10,xmax:100,x:t,onChange:function(e){return c(e.x)},styles:{track:{backgroundColor:"light"===n?"rgb(63,81,181, 0.4)":"rgb(0,0,0, 0.4)"},active:{backgroundColor:"light"===n?"rgb(63,81,181, 1)":"orange"}}})]})},S=a(85),I=a(35),E=a.n(I),W=a(26);var P=function(e){var t=e.fullscreen,a=e.set,n=Object(c.useContext)(o.a).translations;return Object(m.jsxs)("div",{className:"switch-container",children:[Object(m.jsxs)("label",{className:"switch",children:[Object(m.jsx)("input",{type:"checkbox",checked:t,onChange:function(e){e.target.checked?(a.fullscreenOn(),Object(W.b)(),sessionStorage.setItem("fullscreen","true")):(a.fullscreenOff(),Object(W.a)(),sessionStorage.setItem("fullscreen","false"))}}),Object(m.jsx)("span",{className:"slider round switchslider"})]}),Object(m.jsx)(E.a,{className:"switch",title:t?"".concat(n.deactivate," ").concat(n.fullscreen):"".concat(n.activate," ").concat(n.fullscreen)})]})},L=a(34),z=a.n(L);var T=function(e){var t=e.darkmode,a=e.set,n=Object(c.useContext)(o.a).translations;return Object(m.jsxs)("div",{className:"switch-container",children:[Object(m.jsxs)("label",{className:"switch",children:[Object(m.jsx)("input",{type:"checkbox",checked:!t,onChange:function(e){e.target.checked?a.darkmodeOff():a.darkmodeOn(),localStorage.setItem("darkmode","".concat(!e.target.checked))}}),Object(m.jsx)("span",{className:"slider round switchslider"})]}),Object(m.jsx)(z.a,{className:"switch",title:t?"".concat(n.activate," ").concat(n.lightmode):"".concat(n.activate," ").concat(n.darkmode)})]})},B=a(88),D=a.n(B),R=a(108),U=a.n(R),Y=(a(107),function(){return document&&document.body.classList.remove("scroll-down")});var F=function(e){var t=e.nextChapter,a=e.previousChapter,n=Object(c.useContext)(o.a).translations,s=Object(c.useContext)(r.a).siteMetadata.adsEnabled,i=function(e,n){e.preventDefault();var c="prev"===n?a:t,r=window.sessionStorage.getItem("asdf");r&&Number(r)<(new Date).getTime()&&c.callback()};return Object(m.jsxs)("nav",{className:"otherchapter fadeInUp small",children:[Object(m.jsxs)(p.b,{className:"prevchapter bg95 ".concat(a.name&&a.link?"":"hidden"),to:a.link||!1,title:a.name||!1,onClick:function(e){return i(e,"prev")},onMouseDown:Y,children:[Object(m.jsx)(D.a,{alt:a.name}),window.innerWidth>1199&&Object(m.jsx)("span",{children:n.prevChapter})]}),s&&window.innerWidth>1199&&Object(m.jsx)("iframe",{className:"lazy topAdFadeIn","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4154168&output=noscript",src:"",width:"728",height:"90",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0"}),Object(m.jsxs)(p.b,{className:"nextchapter bg95 ".concat(t.name&&t.link?"":"hidden"),to:t.link||!1,title:t.name||!1,onClick:function(e){return i(e,"next")},onMouseDown:Y,children:[window.innerWidth>1199&&Object(m.jsx)("span",{children:n.nextChapter}),Object(m.jsx)(U.a,{alt:t.name})]})]})};var H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",a=Object(c.useState)(!1),r=Object(n.a)(a,2),o=r[0],s=r[1];return Object(c.useEffect)((function(){var a=new IntersectionObserver((function(e){var t=Object(n.a)(e,1)[0];!o&&t.isIntersecting&&s(t.isIntersecting)}),{rootMargin:t});return e.current&&a.observe(e.current),function(){a.unobserve(e.current)}}),[]),o},A=(a(109),function(e){var t=e.title,a=(e.slug,e.fullUrl),s=Object(c.useContext)(r.a).siteMetadata,i=Object(c.useContext)(o.a).translations,l=s.lang,d=Object(c.useRef)(),u=Object(c.useRef)(),h=H(d),p=Object(c.useState)(!0),j=Object(n.a)(p,2),f=j[0],b=j[1];return window.remark_config={host:"https://remark42.manganyaa.com",site_id:"manganyaa",theme:"dark",page_title:t,locale:l,url:a},Object(c.useEffect)((function(){fetch("https://remark42.manganyaa.com/api/v1/config?site=manganyaa").then((function(e){return null===e||void 0===e?void 0:e.status})).then((function(e){return 200!==e&&b(!1)})).catch((function(e){console.error(e),b(!1)}))}),[]),Object(c.useEffect)((function(){if(h&&f){var e=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.src="https://remark42.manganyaa.com/web/embed.js",e.appendChild(t)}}),[h,f]),f?Object(m.jsxs)("div",{className:"box-wrapper disqus-wrapper bg95",children:[Object(m.jsx)("h5",{children:i.chapterOpinions}),Object(m.jsx)("div",{className:"disqus-container",ref:d,children:Object(m.jsx)("div",{id:"remark42",ref:u})})]}):null}),_=a(30);a(89);var q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",a=Math.floor((new Date-e)/1e3),n=a/31536e3,c={en:{years:"years",months:"months",days:"days",hours:"hs",minutes:"mins",seconds:"secs"},es:{years:"a\xf1os",months:"meses",days:"dias",hours:"hs",minutes:"mins",seconds:"segs"},pt:{years:"anos",months:"meses",days:"dias",hours:"hs",minutes:"mins",seconds:"segs"}};if(n>1)return"".concat(Math.floor(n)," ").concat(c[t].years);if((n=a/2592e3)>1)return"".concat(Math.floor(n)," ").concat(c[t].months);if((n=a/86400)>1){var r=1===Math.floor(n)?"".concat(Math.floor(n)," ").concat(c[t].days.replace("dias","dia")):"".concat(Math.floor(n)," ").concat(c[t].days);return r}return(n=a/3600)>1?"".concat(Math.floor(n)," ").concat(c[t].hours):(n=a/60)>1?"".concat(Math.floor(n)," ").concat(c[t].minutes):"".concat(Math.floor(a)," ").concat(c[t].seconds)},J=function(e){var t=e.folderName,a=e.mangaName,n=e.orderNumber,s=e.chLink,i=e.mLink,l=e.descriptionImg,d=e.uploadDate,u=e.containerClass,h=void 0===u?"":u,p=e.imgClass,j=void 0===p?"":p,f=Object(c.useContext)(r.a).siteMetadata,b=Object(c.useContext)(o.a).translations,g=f.lang,O="".concat(b.read,' "').concat(a,'" Manga ').concat(b.chapter," ").concat(n),x='"'.concat(a,'" Manga'),v="es"===g?"Hace ":"",y="";"en"===g?y="ago":"pt"===g&&(y="atr\xe1s");var w=function(){s&&localStorage.setItem("lastChChecked-".concat(t),JSON.stringify({url:s,orderNumber:n,mangaName:a,time:(new Date).getTime()}))};return Object(m.jsxs)("div",{className:"ch-c ".concat(h),children:[Object(m.jsx)(_.a,{className:"ch-imgc",to:s||i,onMouseDown:w,title:s?O:x,children:Object(m.jsx)("img",{className:"ch-drimg ".concat(j),"data-src":"https://content.manganyaa.com/file/mnyaaa/".concat(l),src:"",alt:s?O:x,onContextMenu:function(e){return e.preventDefault()}})}),s&&Object(m.jsx)(_.a,{className:"ch-num",to:s,onMouseDown:w,title:s?O:x,children:n}),Object(m.jsx)(_.a,{to:i,title:x,children:Object(m.jsx)("h5",{className:"ch-name",children:a})}),d&&Object(m.jsxs)("p",{children:[v,q(new Date(d),g)," ",y]})]})},G=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current.outerHTML="\x3c!--".concat(e.text,"--\x3e")}),[]),Object(m.jsx)("div",{ref:t})},X=function(e){var t=e.isWidget,a=Object(c.useState)([]),o=Object(n.a)(a,2),s=o[0],l=o[1],d=Object(c.useContext)(r.a).siteMetadata,u=d.lang,p=d.page;Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/saulabagnale/asdf-ma-jsons/master/lastPopularUpdates-".concat(u,".json")).then((function(e){return e.json()})).then((function(e){var a=Object(r.e)(u,e,!1,t);l(a)}))}),[u]);var j="popularchs-".concat(u,"-lazy");Object(h.a)(".".concat(j),s);var f=s.map((function(e){return Object(c.createElement)(J,Object(i.a)(Object(i.a)({},e),{},{key:e.folderName,imgClass:j}))})),b=window.innerWidth<700?{minHeight:"30vh"}:{};return Object(m.jsxs)("div",{className:"column bg95 chs-p ".concat(t&&"widget"," ").concat("chapter"===p&&"fadeInUp"),style:b,children:[Object(m.jsx)("h3",{children:Object(m.jsx)(_.a,{tabIndex:0,to:"/".concat(u,"/popular/"),style:{textDecoration:"underline"},children:"Popular"})}),Object(m.jsx)(G,{text:"googleoff: all"}),Object(m.jsx)("div",{className:"chs-c",children:f.length>0?f:Object(m.jsx)("div",{className:"loader",style:{margin:"1.25% auto"}})}),Object(m.jsx)(G,{text:"googleon: all"})]})},K=function(e){var t=e.isWidget,a=Object(c.useState)([]),s=Object(n.a)(a,2),l=s[0],d=s[1],u=Object(c.useContext)(r.a).siteMetadata,j=Object(c.useContext)(o.a).translations,f=u.lang,b=u.page;Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/saulabagnale/asdf-ma-jsons/master/lastUpdates-".concat(f,".json")).then((function(e){return e.json()})).then((function(e){var t=Object(r.e)(f,e);d(t)}))}),[f]);var g="lastchs-".concat(f,"-lazy");Object(h.a)(".".concat(g),l);var O=l.map((function(e){return Object(c.createElement)(J,Object(i.a)(Object(i.a)({},e),{},{key:e.folderName,imgClass:g}))})),x="en"===f?"last":"ultimos",v=window.innerWidth<700?{minHeight:"30vh"}:{};return Object(m.jsxs)("div",{className:"column bg95 chs-u ".concat(t&&"widget"," ").concat("chapter"===b&&"fadeInUp"),style:v,children:[Object(m.jsx)("h3",{children:Object(m.jsx)(p.b,{tabIndex:0,to:"/".concat(f,"/").concat(x,"/"),style:{textDecoration:"underline"},children:j.lastReleases})}),Object(m.jsx)(G,{text:"googleoff: all"}),Object(m.jsx)("div",{className:"chs-c",children:O.length>0?O:Object(m.jsx)("div",{className:"loader",style:{margin:"1.25% auto"}})}),Object(m.jsx)(G,{text:"googleon: all"})]})},Q={darkmode:function(){return!localStorage.getItem("darkmode")||JSON.parse(localStorage.getItem("darkmode"))},fullscreen:function(){return!!sessionStorage.getItem("fullscreen")&&JSON.parse(sessionStorage.getItem("fullscreen"))},mangaPageWidth:function(){return NaN!==Number(localStorage.getItem("mangaPageWidth"))&&0!==Number(localStorage.getItem("mangaPageWidth"))?Number(localStorage.getItem("mangaPageWidth")):70}},V=a(119),Z=a(121),$=a(122),ee=a(123),te=a(124),ae=a(125),ne=a(126),ce=a(127),re=a(128),oe=a(129),se=a(130),ie=a(131),le=a(132),de=a(133),ue=a(134),he=a(135),pe=a(136),me=(a(110),function(e){var t=e.siteUrl,a=e.fullUrl,r=e.imgs,s=Object(c.useContext)(o.a).translations.share,l=function(e,t){if(t){var a=Object(n.a)(t,3),c=a[0],r=a[1],o=a[2];if(o)return o.props["data-src"];if(r)return r.props["data-src"];if(c)return c.props["data-src"]}return"".concat(e,"/description.jpg")}(t,r),d=[{name:"Facebook",Button:Z.a,Icon:$.a},{name:"Twitter",Button:ee.a,Icon:te.a},{name:"Pinterest",Button:ae.a,Icon:ne.a,media:l},{name:"Reddit",Button:ce.a,Icon:re.a},{name:"WhatsApp",Button:oe.a,Icon:se.a},{name:"Telegram",Button:ie.a,Icon:le.a},{name:"Line",Button:de.a,Icon:ue.a},{name:"Tumblr",Button:he.a,Icon:pe.a}];return Object(m.jsxs)("div",{className:"box-wrapper sharebuttons-wrapper bg95",children:[Object(m.jsx)("h5",{children:s}),Object(m.jsx)("div",{className:"box-container sharebuttons-container ",children:d.map((function(e){var t=e.name,n=e.Button,c=e.Icon,r=Object(V.a)(e,["name","Button","Icon"]);return Object(m.jsx)("div",{title:t,children:Object(m.jsx)(n,Object(i.a)(Object(i.a)({url:a},r),{},{className:"sharebutton",children:Object(m.jsx)(c,{round:!0,size:40})}))},t)}))})]})}),je=function(e){var t=e.toString();return t.includes(".")?"".concat(t.split(".")[0],"-").concat(t.split(".")[1]):t},fe=function(e,t,a,n){var c=n.translations,r=n.serie,o=n.siteMetadata,s=o.storage,i=o.lang,l=r.folderName,d={nextChapter:0!==e?t[e-1]:null,previousChapter:t[e+1]?t[e+1]:null},u=d.nextChapter?d.nextChapter.url:null,h=d.nextChapter?"".concat(c.chapter," ").concat(d.nextChapter.orderNumber):null,p=a&&d.nextChapter?function(e,t,a,n,c){for(var r=[],o=0;o<c;o++){var s="".concat(e).concat(t,"/").concat(a,"/").concat(n,"/").concat(o+1,".jpg");r.push(Object(m.jsx)("link",{rel:"prefetch",href:"".concat(s),as:"image"}))}return r}(s.fullPath,l,i,je(d.nextChapter.orderNumber),d.nextChapter.pages):[],j=d.previousChapter?d.previousChapter.url:null;return{otherChapters:d,nextChapter:{name:h,link:u,imgsPreload:p},previousChapter:{name:d.previousChapter?"".concat(c.chapter," ").concat(d.previousChapter.orderNumber):null,link:j}}},be=function(e,t,a){for(var n=e.pages,c=e.orderNumber,r=e.chapterTitle,o=a.translations,s=a.siteMetadata,i=a.serie,l=s.lang,d=s.storage,u=i.folderName,h=i.serieNameWithManga,p=[],j=[],f=je(c),b=0;b<n;b++){var g="".concat(d.fullPath).concat(u,"/").concat(l,"/").concat(f,"/").concat(b+1,".jpg");p.push(Object(m.jsx)("img",{className:"chimgs-lazy","data-src":g,src:"".concat(d.fullPath,"placeholder.gif"),onContextMenu:function(e){return e.preventDefault()},alt:"".concat(h," ").concat(o.langName," ").concat(o.chapter," ").concat(r||c," ").concat(o.page," ").concat(b+1)},"".concat(h," ").concat(o.langName," ").concat(o.chapter," ").concat(r||c," ").concat(o.page," ").concat(b+1))),t&&j.push(Object(m.jsx)("link",{rel:"preload",href:g,as:"image"}))}return{components:p,preloads:j}},ge=function(e,t){for(var a=null,n=0;n<(null===t||void 0===t?void 0:t.length);n++){if(t[n].orderNumber===e){a=n;break}}return a},Oe=a(113),xe=a.n(Oe),ve=(a(112),function(){var e=function(){return window.print()},t=Object(c.useContext)(o.a).translations;return Object(m.jsxs)("div",{className:"box-wrapper downloadchapter-wrapper bg95",children:[Object(m.jsx)("h5",{children:t.downloadChapter}),Object(m.jsx)("div",{className:"box-container",children:Object(m.jsx)("div",{className:"downloadChBtn",role:"button",tabIndex:0,"aria-label":t.translate,onClick:e,onKeyPress:function(t){13!==t.which&&13!==t.keyCode&&13!==t.code||e()},children:Object(m.jsx)(xe.a,{})})})]})}),ye=(a(114),a(115),function(e){return{en:"English",es:"Espa\xf1ol",pt:"Portugu\xeas"}[e]}),we=function(e){var t=e.serie,a=Object(c.useContext)(r.a),p=a.siteMetadata,j=a.siteUrl,b=a.darkmode,g=a.fullscreen,O=a.set,x=Object(c.useContext)(o.a).translations,v=O.darkmodeOn,y=O.darkmodeOff,w=O.fullscreenOn,N=O.fullscreenOff,C=p.lang,k=p.currentPath,I=p.storage,E=p.isMainSite,W=p.adsEnabled,L=t.folderName,z=t.serieName,B=t.serieNameWithManga,D=t.chapters,R=t.completed,U=E||"Completed"===R?D.list.filter((function(e){return 0!==e.pages})):[D.upcoming].concat(Object(l.a)(D.list.filter((function(e){return 0!==e.pages})))),Y=Object(c.useState)((function(){return Q.mangaPageWidth()})),H=Object(n.a)(Y,2),_=H[0],q=H[1],J=b?"dark":"light",G=Number(k.split("/").pop()),V=ge(G,U);null===V&&window.location.replace("/".concat(C));var Z=Object(c.useState)(U[V]),$=Object(n.a)(Z,2),ee=$[0],te=$[1],ae=ee.orderNumber,ne=ee.chapterTitle,ce=ee.pages,re=ee.url,oe=ne&&ne.split(":")[1],se=oe&&oe.trim()?ne:ae,ie=Object(d.a)(),le=be(ee,ie,{translations:{langName:x.langName,chapter:x.chapter,page:x.page},serie:{folderName:L,serieNameWithManga:B},siteMetadata:{lang:C,storage:I}});Object(h.a)(".chimgs-lazy",ee),Object(h.a)(".lazy",ee),0!==ce&&localStorage.setItem("lastChChecked-".concat(L),JSON.stringify({url:re,orderNumber:ae,mangaName:z,time:(new Date).getTime()}));var de=ge(ee.orderNumber,U),ue=fe(de,U,ie,{siteMetadata:{lang:C,storage:I},serie:{folderName:L},translations:{chapter:x.chapter}}),he=ue.otherChapters,pe=ue.nextChapter,je=ue.previousChapter;Object(c.useEffect)((function(){u()}),[]);var Oe=function(e){history.pushState("","","previous"===e?je.link.replace("https://manganyaa.com",""):pe.link.replace("https://manganyaa.com","")),window.scrollTo({top:0}),u(),te("previous"===e?Object(i.a)({},he.previousChapter):Object(i.a)({},he.nextChapter))},xe={chapterTitle:se,nextChapter:{name:pe.name,link:pe.link,callback:function(){return Oe("next")}},previousChapter:{name:je.name,link:je.link,callback:function(){return Oe("previous")}}},we="".concat(j).concat(re),Ne=Object(m.jsx)(me,{siteUrl:j,fullUrl:we,imgs:le.components},"".concat(re,"-sharebtns")),Ce=ae.toString();if(Ce.includes(".")){var ke=Ce.split(".");Ce="".concat(ke[0],"(").concat(ke[1],")")}var Me={en:"/read-".concat(L,"-manga-chapter-").concat(Ce,"/"),es:"/leer-".concat(L,"-manga-capitulo-").concat(Ce,"/"),pt:"/ler-".concat(L,"-manga-capitulo-").concat(Ce,"/")},Se=Object(m.jsx)(A,{title:"".concat(z," ").concat(ae," ").concat(ye(C)),slug:Me[C],fullUrl:we},re),Ie=Object(m.jsx)(S.a,{page:"chapter",serie:t}),Ee=Object(m.jsx)(ve,{});return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{fullUrl:"".concat(j).concat(k),mode:J,chapterTitle:ae,serie:t,preloads:[].concat(Object(l.a)(le.preloads),Object(l.a)(pe.imgsPreload))}),Object(m.jsxs)("main",{className:"page-chapter","data-testfirstchapter":he.previousChapter?"false":"true","data-testlastchapter":he.nextChapter?"false":"true",children:[Object(m.jsx)(f,{chapterName:se,subscribe:0===ce,link:k.split("en"===C?"/chapter":"/capitulo")[0],serieNameWithManga:B},"".concat(re,"-header")),Object(c.createElement)(F,Object(i.a)(Object(i.a)({},xe),{},{key:"".concat(re,"-otherchs")})),0!==ce&&Object(m.jsxs)("section",{id:"settings",className:"settings-container noprint",children:[Object(m.jsx)("div",{children:Object(m.jsx)(M,{mangaPageWidth:_,setMangaPageWidth:q,mode:J})}),Object(m.jsxs)("div",{className:"switches-container bg95 fadeInUp",children:[Object(m.jsx)(P,{fullscreen:g,set:{fullscreenOn:w,fullscreenOff:N}}),Object(m.jsx)(T,{darkmode:b,set:{darkmodeOn:v,darkmodeOff:y}})]})]},"".concat(re,"-settings")),0===ce&&Object(m.jsxs)("div",{style:window.innerWidth>1199?{paddingLeft:"2%",width:"100vw"}:{},children:[Object(m.jsx)(X,{}),Object(m.jsx)("br",{}),Object(m.jsx)(K,{isWidget:!0})]}),Object(m.jsx)("section",{className:"imgsList fadeInUp width-".concat(_||70),children:le.components},"".concat(re,"-chlist")),W&&Object(m.jsx)("article",{style:{width:"100vw",display:"flex",justifyContent:"center",marginBottom:"1vh"},children:window.innerWidth<900?Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153962&output=noscript",src:"",width:"300",height:"100",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-mobile"},"".concat(re,"-ad1")):Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153946&output=noscript",src:"",width:"900",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-desktop"},"".concat(re,"-ad1"))}),Object(m.jsx)(F,Object(i.a)(Object(i.a)({},xe),{},{inferior:!0})),window.innerWidth>1199&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("section",{id:"desktop-subchapter",className:"desktop-only bottom-layout",children:[Object(m.jsxs)("div",{style:{width:"72vw"},children:[Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Ne,Ee]}),Se]}),Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Ie,W&&Object(m.jsx)("article",{style:{display:"flex",justifyContent:"center"},children:Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4155050&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-desktop"},"".concat(re,"-ad2"))})]})]}),W&&Object(m.jsx)("article",{style:{display:"flex",justifyContent:"center",marginTop:"1vh"},children:Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153946&output=noscript",src:"",width:"900",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-desktop"},"".concat(re,"-ad2"))})]}),window.innerWidth<1200&&Object(m.jsxs)("section",{id:"mobile-subchapter",className:"mobile-only bottom-layout",children:[Ne,W&&Object(m.jsx)("article",{style:{display:"flex",width:"100vw",justifyContent:"center",marginTop:"1vh",marginBottom:"1vh"},children:Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153606&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"bottom-banner"},"".concat(re,"-ad3"))}),Se,Ie,W&&Object(m.jsx)("article",{style:{display:"flex",width:"100vw",justifyContent:"center",marginTop:"1vh",marginBottom:"1vh"},children:Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153606&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"bottom-banner"},"".concat(re,"-ad3"))})]}),Object(m.jsxs)("div",{style:window.innerWidth>1199?{paddingLeft:"2%",width:"100vw",marginTop:"5vh"}:{marginTop:"10px"},children:[Object(m.jsx)(X,{}),Object(m.jsx)("br",{}),Object(m.jsx)(K,{isWidget:!0})]}),Object(m.jsx)("br",{})]})]})},Ne=a(20),Ce=a(8);a(116),t.default=function(){window.scrollTo({top:0});var e=Object(c.useState)({}),t=Object(n.a)(e,2),i=t[0],l=t[1],d=Object(c.useContext)(r.a),u=d.siteMetadata,h=d.siteUrl,p=d.darkmode,j=i.chapters,f=u.currentPath,b=u.isMainSite,g=u.lang,O=p?"dark":"light",x=b?f.split("/")[1]:Ce.folderName;return Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/saulabagnale/asdf-ma-jsons/master/series/".concat(x,"/").concat(g,".json")).then((function(e){return e.json()})).then((function(e){var t=e.mangaName,a=e.completed,n=e.chs;l({serieName:t,serieNameWithManga:"".concat(t," Manga"),completed:a,folderName:x,chapters:Object(r.c)(g,x,n,a)})}))}),[g,x]),j?Object(m.jsx)(o.b,{pageTranslations:a(83)["".concat(g,"i18nChapter")],children:Object(m.jsx)(we,{serie:i})}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{fullUrl:"".concat(h).concat(f),mode:O,serie:i}),Object(m.jsx)(Ne.a,{})]})}},77:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(18),c=a(0),r=a(13),o=a(2),s=Object(c.createContext)();t.b=function(e){var t=e.children,a=e.pageTranslations,i=Object(c.useContext)(r.a).genericTranslations,l={translations:Object(n.a)(Object(n.a)({},i),a)};return Object(o.jsx)(s.Provider,{value:l,children:t})}},82:function(e,t,a){"use strict";var n=a(0),c=a(13),r=function(e,t){e.dataset.lazybg?e.style.backgroundImage="url(".concat(e.dataset.src,")"):e.src=e.dataset.src,e.classList.remove(t.replace(".")),(t.includes("chs-")||t.includes("chimgs-"))&&e.classList.add("fadeIn")};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=Object(n.useContext)(c.a),o=a.siteMetadata,s=o.storage,i=o.lang,l=o.page,d=o.currentPath;Object(n.useEffect)((function(){if(t&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){var a=[].slice.call(document.querySelectorAll(e));if(a.length>0){var n=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting){var a=t.target;r(a,e),n.unobserve(a)}}))}));a.forEach((function(e){n.observe(e)}))}}}),[l,d,i,s,e,t])}},83:function(e,t,a){"use strict";a.r(t),a.d(t,"eni18nChapter",(function(){return n})),a.d(t,"esi18nChapter",(function(){return c})),a.d(t,"pti18nChapter",(function(){return r}));var n={weCanNotifyYou:"We can notify you when new chapters get released",weWillNotifyYou:"We will notify you when this chapter gets released",activateNotifications:"If you enable notifications, we can notify you when new chapters get released",notReleasedYet:"Not released yet",langName:"English",page:"Page",share:"Share Chapter",chapterOpinions:"Chapter's Opinions",downloadChapter:"Download Chapter",lastReleases:"Last Releases"},c={weCanNotifyYou:"Podemos notificarte cuando nuevos capitulos son publicados",weWillNotifyYou:"Te notificaremos cuando este capitulo sea publicado",activateNotifications:"Si habilitas las notificaciones, podemos notificarte cuando nuevos capitulos son publicados",notReleasedYet:"Aun no publicado",langName:"Espa\xf1ol",page:"Pagina",share:"Compartir Capitulo",chapterOpinions:"Opiniones del Capitulo",downloadChapter:"Descargar Capitulo",lastReleases:"Ultimos Lanzamientos"},r={weCanNotifyYou:"Podemos notific\xe1-lo quando novos cap\xedtulos forem lan\xe7ados",weWillNotifyYou:"Iremos notific\xe1-lo quando este cap\xedtulo foi publicado",activateNotifications:"Se voc\xea ativar as notifica\xe7\xf5es, podemos notific\xe1-lo quando novos cap\xedtulos forem lan\xe7ados",notReleasedYet:"Ainda n\xe3o publicado",langName:"Portugu\xeas",page:"P\xe1gina",share:"Compartilhar Cap\xedtulo",chapterOpinions:"Opini\xf5es do Cap\xedtulo",downloadChapter:"Baixar Cap\xedtulo",lastReleases:"\xdaltimos Lan\xe7amentos"}},84:function(e,t,a){"use strict";var n=a(0),c=a(90);a(83);var r=a(13),o=a(2),s=function(e,t,a,n,c,r,o,s,i){var l=n?"".concat(a," ").concat(n.split(":")[0]):"";return l?"".concat(i&&"serie"!==s&&"chapter"!==s?"MangaNyaa - ":"").concat(c," ").concat(e," ").concat(l," ").concat(r," ").concat(t," ").concat(o," Online"):"".concat(i&&"serie"!==s&&"chapter"!==s?"MangaNyaa - ":"").concat(c," ").concat(e," ").concat(r," ").concat(t).concat(l," ").concat(o," Online")},i=function(e,t,a){var n={en:"Read ".concat(t," Online Free"),es:"Leer ".concat(t," Online Gratis"),pt:"Leia ".concat(t," Online Gr\xe1tis")};return"home"===a?"MangaNyaa ~ ".concat(n[e]):n[e]},l=function(e,t,a,n,c){var r="chapter"===c&&n?"".concat(a," ").concat(function(e){var t=e.split(":")[1];return!t||!t.trim()||t.includes("released")||t.includes("publicado")||t.includes("lan\xe7ado")?e.split(":")[0]:e}(n)," "):"";return{en:"Read ".concat(t," ").concat(r,"Online Free in English with the best High Quality (Mobile App, Darkmode, Fullscreen, Image Resizing) at Manga Nyaa."),es:"Leer ".concat(t," ").concat(r,"Online Gratis en Espa\xf1ol con la mejor calidad (App Mobile, Modo Oscuro, Pantalla Completa, Ajuste de Imagen) en Manga Nyaa."),pt:"Leia ".concat(t," ").concat(r,"Online Gr\xe1tis em Portugu\xeas com a melhor qualidade (App Mobile, Modo Escuro, Ajuste de Imagem, Tela Cheia) em Manga Nyaa.")}[e]},d=function(e){return{en:"English",es:"Espa\xf1ol",pt:"Portugu\xeas"}[e]},u=function(e){return{en:"en_US",es:"es_ES",pt:"pt_BR"}[e]},h=function(e,t,a,n){if("en"===e){var c=t;"home"!==a||t.includes("/en")||t.includes("/read")?"serie"!==a||t.includes("read-online-free-english")?"chapter"!==a||t.includes("read-online-free-english")?t.includes("/en")||(c=t.replace(".com/",".com/en/")):c=t.replace("/chapter","/read-online-free-english/chapter"):c=t+"/read-online-free-english":c=n[e];var r=c.replace("chapter","capitulo").replace("read","leer").replace("free","gratis").replace("english","espanol").replace("/en","/es"),s=c.replace("chapter","capitulo").replace("read","ler").replace("free","gratis").replace("english","portugues").replace("/en","/pt");return[Object(o.jsx)("link",{rel:"alternate",hrefLang:"es",href:r},r),Object(o.jsx)("link",{rel:"alternate",hrefLang:"pt",href:s},s)]}if("es"===e){var i=t.replace("capitulo","chapter").replace("leer","read").replace("gratis","free").replace("espanol","english").replace("/es","/en"),l=t.replace("leer","ler").replace("espanol","portugues").replace("/es","/pt");return[Object(o.jsx)("link",{rel:"alternate",hrefLang:"en",href:i},i),Object(o.jsx)("link",{rel:"alternate",hrefLang:"pt",href:l},l)]}if("pt"===e){var d=t.replace("capitulo","chapter").replace("ler","read").replace("gratis","free").replace("portugues","english").replace("/pt","/en"),u=t.replace("ler","leer").replace("portugues","espanol").replace("/pt","/es");return[Object(o.jsx)("link",{rel:"alternate",hrefLang:"en",href:d},d),Object(o.jsx)("link",{rel:"alternate",hrefLang:"es",href:u},u)]}return Object(o.jsx)(o.Fragment,{})};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mode:"dark"},t=e.fullUrl,a=e.chapterTitle,p=e.mode,m=e.serie,j=e.preloads,f=void 0===j?[]:j,b=Object(n.useContext)(r.a),g=b.genericTranslations,O=b.siteMetadata,x=b.siteUrl,v=g.chapter,y=g.read,w=g.in,N=g.free,C=O.lang,k=void 0===C?"en":C,M=O.page,S=O.homes,I=O.storage,E=O.isMainSite,W=m||{},P=W.serieNameWithManga,L=void 0===P?"Manga":P,z=W.folderName,T=d(k),B=l(k,L,v,a&&a.toString(),M),D=u(k),R=i(k,L,M),U=s(L,T,v,a&&a.toString(),y,w,N,M,E),Y=("home"===M||"serie"===M||"chapter"===M)&&h(k,t,M,S),F="home"!==M&&E?"".concat(I.fullPath).concat(z,"/description/1.jpg"):"".concat(x,"/ogimg.jpg");return Object(o.jsxs)(c.a,{htmlAttributes:{lang:k,mode:p,page:M},children:[Object(o.jsx)("title",{children:U}),Object(o.jsx)("meta",{property:"og:title",content:U}),Object(o.jsx)("meta",{name:"twitter:title",content:U}),Object(o.jsx)("meta",{name:"description",content:B}),Object(o.jsx)("meta",{property:"og:description",content:B}),Object(o.jsx)("meta",{name:"twitter:description",content:B}),Object(o.jsx)("link",{rel:"manifest",href:"/manifest_".concat(k,".webmanifest")}),Y,Object(o.jsx)("meta",{property:"og:locale",content:D}),Object(o.jsx)("meta",{property:"og:type",content:"article"}),Object(o.jsx)("meta",{property:"og:url",content:t}),Object(o.jsx)("meta",{property:"og:site_name",content:R}),Object(o.jsx)("meta",{property:"article:section",content:"Manga"}),Object(o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(o.jsx)("meta",{name:"twitter:image",content:F}),Object(o.jsx)("meta",{property:"og:image",content:F}),Object(o.jsx)("meta",{property:"og:image:secure_url",content:F}),f]})}},85:function(e,t,a){"use strict";var n=a(7),c=a(0),r=a.n(c);var o=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e},s=a(13),i=a(77),l=a(82),d=(a(87),a(2)),u="lazy-othermanga";t.a=function(e){var t=e.limit,a=void 0===t?3:t,h=e.page,p=e.serie,m=Object(c.useState)(null),j=Object(n.a)(m,2),f=j[0],b=j[1],g=Object(c.useContext)(s.a).siteMetadata,O=Object(c.useContext)(i.a).translations;if(Object(l.a)(".".concat(u),Boolean(f)),Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/saulabagnale/asdf-ma-jsons/master/manga-with-single-sites.json").then((function(e){return e.json()})).then((function(e){return b(e)}))}),[]),!f)return null;var x=g.lang,v=g.homes,y=g.adsEnabled,w=p.serieName,N=function(e,t,a,n,c,s){return o(e.filter((function(e){return e.name!==a}))).slice(0,n).map((function(e,a){var n=e.name,o=e.subdomain;return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)("a",{"data-src":"https://".concat(o,".manganyaa.com/ogimg.jpg"),"data-lazybg":!0,className:"other-manga-item ".concat(c," ").concat(u),href:"https://".concat(o,".manganyaa.com").concat(t),children:Object(d.jsx)("h6",{className:"other-manga-item-text bg70",children:n},"".concat(n,"-h6"))},"".concat(n,"-a")),s&&2===a&&"serie"===c&&window.innerWidth<1200&&Object(d.jsx)("article",{style:{display:"flex",justifyContent:"center",marginBottom:"2.5vh"},children:Object(d.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153606&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"bottom-banner"})})]},n)}))}(f,v[x],w,a,h,y);return Object(d.jsxs)("section",{className:"box-wrapper other-manga-wrapper ".concat(h," bg95 "),children:[Object(d.jsx)("h5",{children:O.otherPopularSeries}),Object(d.jsx)("div",{className:"box-container other-manga-container ".concat(h),children:N})]})}},86:function(e,t,a){"use strict";t.a=function(){var e=!0;if("undefined"!==typeof navigator){var t=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(t){var a=t.effectiveType,n=t.saveData;("slow-2g"===a||"2g"===a||"3g"===a||n)&&(e=!1)}}return e}},87:function(e,t,a){},89:function(e,t,a){}}]);