(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0Wn5":function(e,t,n){"use strict";var a=n("q1tI"),c=n.n(a);t.a=function(e){return c.a.createElement("section",{id:"banner",className:"style2",style:{backgroundImage:"url("+e.image+")"}},c.a.createElement("div",{className:"inner"},c.a.createElement("header",{className:"major"},c.a.createElement("h1",null,e.title)),c.a.createElement("div",{className:"content"},c.a.createElement("p",null,e.content))))}},"3MWX":function(e,t,n){"use strict";var a=n("q1tI"),c=n.n(a),r=n("Wbzz");function l(e){var t=e.to,n=e.className,a=e.children;return t?c.a.createElement(r.Link,{to:t,className:n},a):c.a.createElement("div",{className:n},a)}function i(e){var t=e.image,n=e.imageAlt;return t?c.a.createElement(l,{to:e.to,className:"image fit"},c.a.createElement("img",{src:t,alt:n})):c.a.createElement("div",null)}t.a=function(e){return c.a.createElement("section",null,c.a.createElement(i,{image:e.image,to:e.to}),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"inner"},c.a.createElement("header",{className:"major"},c.a.createElement("h3",null,e.title)),c.a.createElement("p",null,e.content),e.children,e.to&&c.a.createElement("ul",{className:"actions"},c.a.createElement("li",null,c.a.createElement(r.Link,{to:e.to,className:"button"},"詳細を見る"))))))}},A1DE:function(e,t,n){"use strict";var a=n("q1tI"),c=n.n(a);function r(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function l(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((function(n){void 0===e[n]?e[n]=t[n]:r(t[n])&&r(e[n])&&Object.keys(t[n]).length>0&&l(e[n],t[n])}))}var i={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};l("undefined"!=typeof document?document:{},i);var o="undefined"!=typeof window?window:{};l(o,{document:i,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}}});var u=n("3MWX");function m(e){var t=e.children;return e.show?c.a.createElement("div",null,t):c.a.createElement("div",null)}function s(e){var t=e.number,n=e.current;return c.a.createElement("li",null,c.a.createElement("a",{href:"?page="+t,className:t==n?"page active":"page"},t))}t.a=function(e){var t=function(){var e=o.location.search.substring(1),t={};return e.split("&").forEach((function(e){var n,a=e.split("=");t=Object.assign({},t,((n={})[a[0]]=a[1],n))})),t}(),n=parseInt(t.page)||1,a=function(e,t){console.log("array",e),console.log("number",t);var n=Math.ceil(e.length/t);return new Array(n).fill().map((function(n,a){return e.slice(a*t,(a+1)*t)}))}(e.items,10),r=a.length,l=a[(n=n>r?1:n)-1];return c.a.createElement("section",{id:"two",className:"spotlights"},l.map((function(t){return console.log("i",t),c.a.createElement(u.a,{image:t.image,imageAlt:t.imageAlt,to:t.to,title:t.title,content:t.content},e.children)})),c.a.createElement(m,{show:r>1},c.a.createElement("div",{className:"pagination-wrap"},c.a.createElement("ul",{className:"pagination"},c.a.createElement("li",null,c.a.createElement("span",{className:"button small "+(1==n?"disabled":"")},"Prev")),a.map((function(e,t){return c.a.createElement(s,{number:t+1,current:n})})),c.a.createElement("li",null,c.a.createElement("a",{href:"?page="+(n+1),className:"button small "+(n==r?"disabled":"")},"Next"))))))}},abFe:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),c=n.n(a),r=(n("Wbzz"),n("TJpk")),l=n.n(r),i=n("Bl7J"),o=n("0Wn5"),u=n("A1DE"),m=n("iIfD"),s=n.n(m),f=n("jN53"),E=n.n(f),d=n("u8W6"),g=n.n(d),p=[{image:E.a,imageAlt:"エンジニア",to:"./it_consulting",title:"ITコンサルティング業務",content:["要件定義・設計・開発・テスト・運用等のシステム開発の全フェーズをサポートいたします",c.a.createElement("br",null)]},{image:g.a,imageAlt:"コンサルタント",to:null,title:"業務コンサルティング業務",content:["戦略・経営のサポートをいたします",c.a.createElement("br",null),"特に新規事業創出領域における経験が豊富です",c.a.createElement("br",null)]},{image:s.a,imageAlt:"プロダクト",to:"./product",title:"プロダクト",content:["世の中を便利にする自社プロダクトを作成しています",c.a.createElement("br",null)]}];t.default=function(e){return c.a.createElement(i.a,null,c.a.createElement(l.a,null,c.a.createElement("title",null,"Service"),c.a.createElement("meta",{name:"description",content:"Service Page"})),c.a.createElement(o.a,{title:"Service",content:"omeroidの事業内容を紹介します",image:s.a}),c.a.createElement("div",{id:"main"},c.a.createElement(u.a,{items:p})))}},iIfD:function(e,t,n){e.exports=n.p+"static/service-84a410c2b9fb97bf4e3efb752f423602.jpg"},jN53:function(e,t,n){e.exports=n.p+"static/engineer-50cea208a8e48d97c312563e62265cc1.jpg"},u8W6:function(e,t,n){e.exports=n.p+"static/consultant-f19f5e7be5bd53cca0aa810d87015699.jpg"}}]);
//# sourceMappingURL=component---src-pages-service-js-ce09d905adfea9b8cb2a.js.map