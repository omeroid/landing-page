(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+nw6":function(e,t,n){e.exports=n.p+"static/travel2020-78ee6d7cdfae7dfed8159d458d79e684.jpg"},"/pVW":function(e,t,n){e.exports=n.p+"static/vuls-logo-large-4f25ed997a36c1a3a64c832834d583ec.png"},"0Wn5":function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a);t.a=function(e){return l.a.createElement("section",{id:"banner",className:"style2",style:{backgroundImage:"url("+e.image+")"}},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h1",null,e.title)),l.a.createElement("div",{className:"content"},l.a.createElement("p",null,e.content))))}},A1DE:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a);function c(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function r(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((function(n){void 0===e[n]?e[n]=t[n]:c(t[n])&&c(e[n])&&Object.keys(t[n]).length>0&&r(e[n],t[n])}))}var i={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};r("undefined"!=typeof document?document:{},i);var o="undefined"!=typeof window?window:{};r(o,{document:i,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}}});var u=n("Wbzz");function m(e){var t=e.to,n=e.className,a=e.children;return t?l.a.createElement(u.Link,{to:t,className:n},a):l.a.createElement("div",{className:n},a)}function s(e){var t=e.image,n=e.imageAlt;return t?l.a.createElement(m,{to:e.to,className:"image fit"},l.a.createElement("img",{src:t,alt:n})):l.a.createElement("div",null)}var f=function(e){return l.a.createElement("section",null,l.a.createElement(s,{image:e.image,to:e.to}),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"inner"},l.a.createElement("header",{className:"major"},l.a.createElement("h3",null,e.title)),l.a.createElement("p",null,e.content),e.children,e.to&&l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement(u.Link,{to:e.to,className:"button"},"詳細を見る"))))))};function d(e){var t=e.children;return e.show?l.a.createElement("div",null,t):l.a.createElement("div",null)}function E(e){var t=e.number,n=e.current;return l.a.createElement("li",null,l.a.createElement("a",{href:"?page="+t,className:t==n?"page active":"page"},t))}t.a=function(e){var t=function(){var e=o.location.search.substring(1),t={};return e.split("&").forEach((function(e){var n,a=e.split("=");t=Object.assign({},t,((n={})[a[0]]=a[1],n))})),t}(),n=parseInt(t.page)||1,a=function(e,t){console.log("array",e),console.log("number",t);var n=Math.ceil(e.length/t);return new Array(n).fill().map((function(n,a){return e.slice(a*t,(a+1)*t)}))}(e.items,10),c=a.length,r=a[(n=n>c?1:n)-1];return l.a.createElement("section",{id:"two",className:"spotlights"},r.map((function(t){return console.log("i",t),l.a.createElement(f,{image:t.image,imageAlt:t.imageAlt,to:t.to,title:t.title,content:t.content},e.children)})),l.a.createElement(d,{show:c>1},l.a.createElement("div",{className:"pagination-wrap"},l.a.createElement("ul",{className:"pagination"},l.a.createElement("li",null,l.a.createElement("span",{className:"button small "+(1==n?"disabled":"")},"Prev")),a.map((function(e,t){return l.a.createElement(E,{number:t+1,current:n})})),l.a.createElement("li",null,l.a.createElement("a",{href:"?page="+(n+1),className:"button small "+(n==c?"disabled":"")},"Next"))))))}},F3dw:function(e,t,n){e.exports=n.p+"static/news-f14fd41e129a6ca260aef3e2707d9278.jpg"},FJi0:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),c=(n("Wbzz"),n("TJpk")),r=n.n(c),i=n("Bl7J"),o=n("0Wn5"),u=n("A1DE"),m=n("F3dw"),s=n.n(m),f=(n("IGeV"),n("PyUb"),n("aXTj"),n("heOc")),d=n.n(f),E=n("/pVW"),p=n.n(E),g=n("+nw6"),b=n.n(g),h=n("fP1Q"),v=[{image:n.n(h).a,imageAlt:"新規事業への取り組みを始めました",to:"https://note.com/omeroid/n/n0e0cb1249d0e",title:[l.a.createElement("small",null,"2020/11"),l.a.createElement("br",null),"[ブログ]新規事業への取り組み"],content:["メンバーからアイデアを募り、仮説検証スプリントを回して、新規事業を創造するプログラムをはじました",l.a.createElement("br",null)]},{image:b.a,imageAlt:"社員旅行2020",to:"https://note.com/omeroid/n/nf7d1e62fc1b2",title:[l.a.createElement("small",null,"2020/10"),l.a.createElement("br",null),"[ブログ]社員旅行2020"],content:["メンバー8名で社員旅行に行ったきた様子をお届けします",l.a.createElement("br",null)]},{image:d.a,imageAlt:"ラベルプリント",to:"https://www.gen-ome.io/label/",title:[l.a.createElement("small",null,"2019/12/10"),l.a.createElement("br",null),"[プロダクト]ラベルプリントシステムをリリースしました"],content:["市販のAndroid端末とラベルプリンタを使用してラベルプリントを行えるサービスを提供",l.a.createElement("br",null),"データはエクセルで記述して登録できるので、お手軽に、複雑な知識も必要ありません。",l.a.createElement("br",null),"ラベルのテンプレートも作成できるため、ご自身で好きなようにラベルを作成できます。"]},{image:p.a,imageAlt:"vlus",to:null,title:[l.a.createElement("small",null,"2019/02/01"),l.a.createElement("br",null),"[メンバー]CEO松野がVlusのコミッターに登録"],content:["弊社CEOの松野貞之がOSS脆弱性検知ツールのVulsのメインコミッターの一員となりました",l.a.createElement("br",null),"コミッターとは、特定のリポジトリに対して、Write権限(Push権限)を持つことを意味しています",l.a.createElement("br",null),"VulsはFuture株式会社の神戸康多氏が開発公開したOSSであり、Golangで書かれた脆弱性検知ツールです",l.a.createElement("br",null),"現在のGithubスター数は6000を超え、国産OSSソフトウェアでは最大級のリポジトリとなっています",l.a.createElement("br",null)]}];t.default=function(e){return l.a.createElement(i.a,null,l.a.createElement(r.a,null,l.a.createElement("title",null,"News"),l.a.createElement("meta",{name:"description",content:"News Page"})),l.a.createElement(o.a,{title:"News",content:"会社やメンバーに関わる最新ニュースをお届けします",image:s.a}),l.a.createElement("div",{id:"main"},l.a.createElement(u.a,{items:v})))}},IGeV:function(e,t,n){e.exports=n.p+"static/pic08-4c3ce95d53bcf4f4e5c3079df9c3e543.jpg"},PyUb:function(e,t,n){e.exports=n.p+"static/pic09-d59e4b49832baeb9c62a7a9d6c070f8c.jpg"},aXTj:function(e,t,n){e.exports=n.p+"static/pic10-fc2217a3259dbe4bf90380771114f39c.jpg"},fP1Q:function(e,t,n){e.exports=n.p+"static/new-bisiness-0be52640d13e07728bff8e20fbb7cc80.png"},heOc:function(e,t,n){e.exports=n.p+"static/label-main-dc6a8a17e1b331f0d854abfb4057b5e5.png"}}]);
//# sourceMappingURL=component---src-pages-news-js-139cff99cf648a4ed5ca.js.map