(this["webpackJsonpclone-youtube"]=this["webpackJsonpclone-youtube"]||[]).push([[0],{16:function(e,t,s){},23:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),o=s(5),a=s.n(o),l=(s(16),s(2)),n=(s(23),s.p+"static/media/loading.3b1c8aa9.jpeg"),r=s(0);function p(){var e=Object(l.c)((function(e){return e.newMenuInfo.returnArray}));return Object(r.jsx)("header",{className:"header",children:e.id&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("img",{src:n,alt:"Loading..",className:"imgLoading"}),Object(r.jsx)("iframe",{src:e.link,title:"YouTube video player",frameBorder:"0",allow:"accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})})}var u=s(11),m="CHANGE_BELL",g=function(e){return{type:m,payload:e}};s(25);function h(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),s=t[0],i=t[1],o=Object(l.c)((function(e){return e.newMenuInfo.returnArray})),a=Object(l.c)((function(e){return e.cambiarCampana})),n=Object(l.b)();return Object(r.jsxs)("section",{className:"sectionMenuInfo",children:[Object(r.jsxs)("article",{className:"articleUp",children:[Object(r.jsx)("h2",{className:"title",children:o.title}),Object(r.jsx)("p",{className:"textView",children:o.views}),Object(r.jsx)("svg",{"aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 320 512",children:Object(r.jsx)("path",{fill:"currentColor",d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"})})]}),Object(r.jsxs)("article",{className:"articleDown",children:[Object(r.jsxs)("div",{className:"boxUser",children:[Object(r.jsx)("img",{src:o.logo,alt:"mi log",className:"logo"}),Object(r.jsxs)("h3",{className:"chanel",children:[Object(r.jsx)("span",{className:"up",children:o.chanel}),Object(r.jsx)("span",{className:"down",children:o.subs})]})]}),Object(r.jsxs)("div",{className:"boxSubs",onClick:function(e){"SUSCRIBIRSE"===e.target.innerText?i(!1):"SUSCRITO"===e.target.innerText&&i(!0)},children:[s?Object(r.jsx)("button",{children:"SUSCRIBIRSE"}):Object(r.jsxs)("button",{style:{color:"#ccc",display:"flex",alignItems:"center"},children:["SUSCRITO",Object(r.jsx)("svg",{onClick:function(){document.querySelector(".boxSubsFloat").style.display="flex"},"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:a.medida,children:Object(r.jsx)("path",{fill:"currentColor",d:a.pathD})})]}),Object(r.jsxs)("div",{className:"boxSubsFloat",onClick:function(e){var t=document.querySelector(".boxSubsFloat");"p1"!==e.target.classList.value&&"p1"!==e.target.parentElement.classList.value&&"p1"!==e.target.parentElement.parentElement.classList.value||(t.firstChild.style.background="#181818",t.lastChild.style.background="#202227",n(g(!0)),console.log(!t)),"p2"!==e.target.classList.value&&"p2"!==e.target.parentElement.classList.value&&"p2"!==e.target.parentElement.parentElement.classList.value||(t.lastChild.style.background="#181818",t.firstChild.style.background="#202227",n(g(!1))),t.style.display="none",document.querySelector(".App").addEventListener("click",(function(e){e.target!==t&&(t.style.display="none")}))},children:[Object(r.jsxs)("p",{className:"p1",children:["Todas",Object(r.jsx)("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(r.jsx)("path",{fill:"currentColor",d:"M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"})})]}),Object(r.jsxs)("p",{className:"p2",children:["Ninguna",Object(r.jsx)("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:Object(r.jsx)("path",{fill:"currentColor",d:"M633.99 471.02L36 3.51C29.1-2.01 19.03-.9 13.51 6l-10 12.49C-2.02 25.39-.9 35.46 6 40.98l598 467.51c6.9 5.52 16.96 4.4 22.49-2.49l10-12.49c5.52-6.9 4.41-16.97-2.5-22.49zM163.53 368c16.71-22.03 34.48-55.8 41.4-110.58l-45.47-35.55c-3.27 90.73-36.47 120.68-54.84 140.42-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h279.66l-61.4-48H163.53zM320 96c61.86 0 112 50.14 112 112 0 .2-.06.38-.06.58.02 16.84 1.16 31.77 2.79 45.73l59.53 46.54c-8.31-22.13-14.34-51.49-14.34-92.85 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84c-26.02 5.41-49.45 16.94-69.13 32.72l38.17 29.84C275 103.18 296.65 96 320 96zm0 416c35.32 0 63.97-28.65 63.97-64H256.03c0 35.35 28.65 64 63.97 64z"})})]})]})]})]})]})}s(26),s(27);var d="LOAD_INFO",w=function(e){return{type:d,payload:e}},f=s(6);function A(e){var t=e.titulo,s=e.canal,c=e.vistas,i=e.image,o=e.classId,a=Object(l.b)();return Object(r.jsxs)("article",{className:"listBox ".concat(o),onClick:function(e){var t,s=document.querySelector(".main");if("svg"===e.target.tagName||"path"===e.target.tagName)alert("estamos trabajando en ello");else{switch(!0){case"IMG"===e.target.tagName||"H3"===e.target.tagName||"P"===e.target.tagName:t=e.target.parentElement.parentElement.classList[1];break;case"listBox__info"===e.target.classList.value:t=e.target.parentElement.classList[1];break;default:return console.log("esta no")}a(w(f[t-1])),setTimeout((function(){s.scrollTop=0}),500)}},children:[Object(r.jsx)("div",{className:"listBox__image",children:Object(r.jsx)("img",{src:i,alt:"Imagen de la Portada"})}),Object(r.jsxs)("div",{className:"listBox__info",children:[Object(r.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-icon":"ellipsis-v",role:"img",viewBox:"0 0 192 512",children:Object(r.jsx)("path",{fill:"currentColor",d:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"})}),Object(r.jsx)("h3",{children:t}),Object(r.jsx)("p",{children:s}),Object(r.jsx)("p",{children:c})]})]})}function b(){return Object(r.jsx)("section",{className:"sectionListPlayer",children:f.map((function(e){return Object(r.jsx)(A,{titulo:e.title,canal:e.chanel,vistas:e.views,image:e.image,classId:e.id},e.id)}))})}function j(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(p,{}),Object(r.jsxs)("main",{className:"main",children:[Object(r.jsx)(h,{}),Object(r.jsx)(b,{})]})]})}var y=s(3),O=s(10),v=s(4),C={returnArray:{title:"Titulo Inicial",chanel:"Mi channel",views:"0 views",subs:"40,234 suscriptores",logo:"https://yt3.ggpht.com/yti/APfAmoEXZ6xJSGwYC7IMVFROOk1lV1krqk3m0Wbj8jhLew=s88-c-k-c0x00ffffff-no-rj-mo",link:""}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(v.a)(Object(v.a)({},e),{},{returnArray:t.payload});default:return e}},B="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z",E="M633.99 471.02L36 3.51C29.1-2.01 19.03-.9 13.51 6l-10 12.49C-2.02 25.39-.9 35.46 6 40.98l598 467.51c6.9 5.52 16.96 4.4 22.49-2.49l10-12.49c5.52-6.9 4.41-16.97-2.5-22.49zM163.53 368c16.71-22.03 34.48-55.8 41.4-110.58l-45.47-35.55c-3.27 90.73-36.47 120.68-54.84 140.42-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h279.66l-61.4-48H163.53zM320 96c61.86 0 112 50.14 112 112 0 .2-.06.38-.06.58.02 16.84 1.16 31.77 2.79 45.73l59.53 46.54c-8.31-22.13-14.34-51.49-14.34-92.85 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84c-26.02 5.41-49.45 16.94-69.13 32.72l38.17 29.84C275 103.18 296.65 96 320 96zm0 416c35.32 0 63.97-28.65 63.97-64H256.03c0 35.35 28.65 64 63.97 64z",k="0 0 448 512",I="0 0 640 512",q={pathD:B,medida:k},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(v.a)(Object(v.a)({},e),{},{pathD:t.payload?B:E,medida:t.payload?k:I});default:return e}},N=Object(y.b)({newMenuInfo:x,cambiarCampana:S}),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.c,M=Object(y.d)(N,L(Object(y.a)(O.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(l.a,{store:M,children:Object(r.jsx)(j,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e){e.exports=JSON.parse('[{"id":1,"title":"shitpost status","chanel":"anonydown?","views":"172 views Nov 12, 2020","subs":"36 suscriptores","image":"https://i.ytimg.com/vi/pBczxbchork/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA38MgUd87oNRz0n4hXKpFE3d6csA","logo":"https://yt3.ggpht.com/ytc/AKedOLTzL_Bm5ik1d23OwXrSQeN6sxAAio2bKT2y13N5=s48-c-k-c0x00ffffff-no-rj","link":"https://www.youtube.com/embed/pBczxbchork"},{"id":2,"title":"I Don\'t Want To Miss A Thing - Aerosmith","chanel":"Lucy Thomas Music","views":"55,812 views Oct 29, 2021","subs":"355K suscriptores","image":"https://i.ytimg.com/vi/sSlLNSWAXpo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNcEMjVLcbYUCAGAz9bsASbwtYig","logo":"https://yt3.ggpht.com/AAKSCQsa2-ZRf6dml6h8gRN4MEchS6kdiITzQ3je6RnR_CWIG0Vognod_mR0KZz2JcqS1wnabzs=s48-c-k-c0x00ffffff-no-rj","link":"https://www.youtube.com/embed/z_di6262CDE"},{"id":3,"title":"Beethoven Virus Electric Violin","chanel":"Seyoung","views":"1,524,493 views","subs":"26.4K suscriptores","image":"https://i.ytimg.com/vi/XDD78TUI2ZE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmQTkQznjNGGbdhUN2cZP0yXX5Q","logo":"https://yt3.ggpht.com/CdIDR0qGvYV3FckNw9GBO80lO53vi5vbE6DxaxS8kWN977O_Rv2ll929Ng9x7Ny5OHzoQw2JWg=s48-c-k-c0x00ffffff-no-rj","link":"https://www.youtube.com/embed/XDD78TUI2ZE"},{"id":4,"title":"Eyes On Me","chanel":"Vanessa Caelum","views":"51,194 views Mar 19, 2016","subs":"3.21K suscriptores","image":"https://i.ytimg.com/vi/YkZoNG98564/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1O2U6790-nSoJxJn6C3Kb_5z2IA","logo":"https://yt3.ggpht.com/qKwpKG7Cxml1u7UOAu7Sr3BMt1VyJrStAbYnPeEumfP_BVr2EWhcz61ApQyDq_wFabJvfPxB=s48-c-k-c0x00ffffff-no-rj","link":"https://www.youtube.com/embed/YkZoNG98564"},{"id":5,"title":"SLAM DUNK OP \u300cKimi ga Suki da to Sakebitai","chanel":"Ru\'s Piano Ru\u5473\u6625\u6372","views":"79,843 views Oct 27, 2021","subs":"1.9M suscriptores","image":"https://i.ytimg.com/vi/XxTB0M9GPYw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCa7sDjSoFX0ZBPxsfSbGTe-qT47g","logo":"https://yt3.ggpht.com/ytc/AKedOLS9XQ6pYURpm9TKiFB9_slX5-HrV1UMKo1YIYWSwg=s48-c-k-c0x00ffffff-no-rj-mo","link":"https://www.youtube.com/embed/XxTB0M9GPYw"},{"id":6,"title":"HUNTER\xd7HUNTER Opening Departure","chanel":"Ru\'s Piano Ru\u5473\u6625\u6372","views":"607,655 views Jul 11, 2020","subs":"1.9M suscriptores","image":"https://i.ytimg.com/vi/8Xesl6q6hHs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-bVCB1tjGXxq4BDebLCH3oThYIg","logo":"https://yt3.ggpht.com/ytc/AKedOLS9XQ6pYURpm9TKiFB9_slX5-HrV1UMKo1YIYWSwg=s48-c-k-c0x00ffffff-no-rj-mo","link":"https://www.youtube.com/embed/8Xesl6q6hHs"},{"id":7,"title":"Canon in D by Johann Pachelbel","chanel":"Charleston Virtuosi","views":"1,032,027 views Jan 21, 2014","subs":"private","image":"https://i.ytimg.com/vi/Guwl5G6Wr4Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoE3sxjgOtv8hbdJCly0ZiH_o1WA","logo":"https://yt3.ggpht.com/ytc/AKedOLRTsHsySvyGcQMDe6dnW_LqgsOtwnl4Oj_8eZD3=s68-c-k-c0x00ffffff-no-rj","link":"https://www.youtube.com/embed/Guwl5G6Wr4Y"},{"id":8,"title":"River flows in you de Yiruma","chanel":"Ander Etxeba","views":"69,907 views Jan 7, 2018","subs":"224 suscriptores","image":"https://i.ytimg.com/vi/rqgJC-FZJC8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvj4DlvHKK7dlnYxHB5VNedG4bBA","logo":"https://yt3.ggpht.com/ytc/AKedOLTKrpwI2QqszgJdH9i0Iw4RpRfPEOJTJPbyAVnc6A=s48-c-k-c0x00ffffff-no-rj","link":"https://www.youtube.com/embed/rqgJC-FZJC8"},{"id":9,"title":"7 formas de clonar objetos en JavaScript y TypeScript","chanel":"CodelyTV","views":"6,985 views Oct 7, 2021","subs":"79K suscriptores","image":"https://i.ytimg.com/vi/8Je1IylXLeo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0wqp-e5VKiqHI880NCSrXAVoeeA","logo":"https://yt3.ggpht.com/ytc/AKedOLQwBBxMR2NIkSf1KslLtjKWgp1AZ78OBzOPGOoKpw=s68-c-k-c0x00ffffff-no-rj","link":"https://www.youtube.com/embed/8Je1IylXLeo"},{"id":10,"title":"CURSO DE PHP CON PROGRAMACI\xd3N ORIENTADA A OBJETOS","chanel":"Vida MRR","views":"1,233 views Oct 27, 2021","subs":"65.8K suscriptores","image":"https://i.ytimg.com/vi/lngkQ4hNiks/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLA-B6MX9yPzuEpl1NhE1qeMK1EmpQ","logo":"https://yt3.ggpht.com/J4JSs9QhXl6M3Ru9c2z1hTtwfpHuwoj3p7liQKkulESs_llCAjypk4c_qXNPX0ZCRxPeJB_M=s68-c-k-c0x00ffffff-no-rj","link":"https://www.youtube.com/embed/lngkQ4hNiks"},{"id":11,"title":"Challenge #267/ Love Makes a Family Painting","chanel":"Wow Art","views":"11,591 views Oct 28, 2021","subs":"3.84M suscriptores","image":"https://i.ytimg.com/vi/AjEV0A9Ejek/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoDCwNxPRAKdl0s6slka5D7NMiLQ","logo":"https://yt3.ggpht.com/ytc/AKedOLQZYOXAGHlInMkDIpsDsQHusU_Vucm9fd26O5DD=s48-c-k-c0x00ffffff-no-rj","link":"https://www.youtube.com/embed/AjEV0A9Ejek"},{"id":12,"title":"Challenge #265/Entrance To Beautiful Sandy Beach Painting","chanel":"Wow Art","views":"23,211 views Oct 27, 2021","subs":"3.84M suscriptores","image":"https://i.ytimg.com/vi/0KWKgUvkGCI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSNKNJ2weR3U0goF5yVM6-rdFWFQ","logo":"https://yt3.ggpht.com/ytc/AKedOLQZYOXAGHlInMkDIpsDsQHusU_Vucm9fd26O5DD=s48-c-k-c0x00ffffff-no-rj","link":"https://www.youtube.com/embed/0KWKgUvkGCI"},{"id":13,"title":"Elfen Lied - Lilium cover by Grissini Project","chanel":"Grissini Project","views":"3,836,490 views Sep 30, 2014","subs":"368K suscriptores","image":"https://i.ytimg.com/vi/JvCpCg0sGkg/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAZ7m1BMLXNul26dz0EP3Iq8BW4SQ","logo":"https://yt3.ggpht.com/ytc/AKedOLT_aj6ZCSfe7YLanmIxiXOfZ374nn6sV5T4XUFC=s48-c-k-c0x00ffffff-no-rj","link":"https://www.youtube.com/embed/JvCpCg0sGkg"},{"id":14,"title":"El ni\xf1o prodigio Johann Carl Friedrich Gauss","chanel":"Jaqui Moscol","views":"437,747 views Mar 30, 2021","subs":"1.65K suscriptores","image":"https://i.ytimg.com/vi/NcdsQaAAEAk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoX7PnKPzbrx6HCVuoDHRGHIrXpA","logo":"./img/logo-linux.png","link":"https://www.youtube.com/embed/NcdsQaAAEAk"},{"id":15,"title":"Yu Yu Hakusho theme Epic Mashup","chanel":"Vai Fiz","views":"128,851 views Jul 6, 2020","subs":"44.6K suscriptores","image":"https://i.ytimg.com/vi_webp/GntkxlfmSKY/maxresdefault.webp","logo":"https://yt3.ggpht.com/ytc/AKedOLRLNO9J4ZNfm3QZH-RsFAAjQJxFqlB96hFZywDSkA=s48-c-k-c0x00ffffff-no-rj","link":"https://www.youtube.com/embed/HTlD1EBdTbo"},{"id":16,"title":"Dragon Ball GT / Mi coraz\xf3n encantado","chanel":"simonewebermusica","views":"3,164,980 views Mar 14, 2017","subs":"207K suscriptores","image":"https://i.ytimg.com/vi/tST6yW-feE0/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLBRaFBdHNLYfpbE7NEkKqLVhQtxxA","logo":"https://yt3.ggpht.com/ytc/AKedOLS8x1-eIVai7CXMLrPpFtlze0DQvzZ7Md4tFRH7uQ=s48-c-k-c0x00ffffff-no-rj","link":"https://www.youtube.com/embed/tST6yW-feE0"}]')}},[[28,1,2]]]);
//# sourceMappingURL=main.7781610e.chunk.js.map