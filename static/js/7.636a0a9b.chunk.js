(this["webpackJsonpmanganyaa-noblesse-react"]=this["webpackJsonpmanganyaa-noblesse-react"]||[]).push([[7],{117:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(0),r=a(31),s=a(88),o=a.n(s);var i=function(e,t){var a;clearTimeout(a),a=setTimeout(e,t)},u=a(30),l=a(19),j=a(13),f=(a(117),a(2));function h(e,t){return e[2]<t[2]?1:e[2]>t[2]?-1:0}t.default=function(e){var t=e.setShowSearch,a=Object(c.useContext)(j.a),s=a.siteMetadata,b=a.mocks,d=Object(c.useState)(!1),m=Object(n.a)(d,2),g=m[0],v=m[1],O=Object(c.useState)([]),p=Object(n.a)(O,2),x=p[0],k=p[1],N=Object(c.useRef)(null);Object(c.useEffect)((function(){g||fetch("https://raw.githubusercontent.com/saulabagnale/asdf-ma-jsons/master/mangaNames.json").then((function(e){return e.json()})).then((function(e){return v(e)}))}),[]),Object(c.useEffect)((function(){N&&N.current&&N.current.focus()}),[N,g]);return Object(f.jsx)("div",{className:"search-container ".concat(!g&&"search-loader-container"),children:g?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"search-input-container",children:[Object(f.jsx)(l.a,{icon:Object(f.jsx)(o.a,{alt:""}),name:"back",click:function(){return t(!1)}}),Object(f.jsx)("input",{className:"search-input",placeholder:'"Tonikaku", "Shingeki", "Boku", etc',onChange:function(e){return i((function(){var t=e.target.value.toLowerCase();if(e.target.value.length>3){for(var a=t.split(" ").filter((function(e){return e.length>3})),c=[],r=0;r<g.length;r++){var s=g[r],o=Object(n.a)(s,2),i=o[0],u=o[1];if(u&&i){for(var l=0,j=0;j<a.length;j++){var f=a[j];u.toLowerCase().includes(f)&&(l+=1)}l>0&&c.push([i,u,l])}else console.error("serie absent values: ",s)}var b=c.sort(h);k(b)}0===e.target.value.length&&0!==x.length&&k([])}),750)},ref:N})]}),Object(f.jsx)("div",{className:"search-results-container",children:x.map((function(e){var t=Object(n.a)(e,2),a=t[0],c=t[1],o=u.find((function(e){return e.name===c}))||{};return Object(f.jsxs)(r.a,{className:"search-result",to:Object(j.d)(s.lang,a,o.subdomain),children:[Object(f.jsx)("img",{src:b&&b.descriptionImg?b.descriptionImg:"".concat(s.storage.fullPath).concat(a,"/description/1.jpg"),alt:"",className:"lazy search-result-img"}),Object(f.jsx)("h4",{children:c})]})}))})]}):Object(f.jsx)("div",{className:"loader",style:{marginTop:0}})})}},88:function(e,t,a){"use strict";var n=a(14),c=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(0)),s=(0,n(a(16)).default)(r.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=s}}]);