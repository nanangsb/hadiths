!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},a=n.parcelRequire8e87;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var a={id:e,exports:{}};return r[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequire8e87=a);var i=a("kAkBg"),o=a("jO2Au");function c(){return(c=i.asyncToGenerator(e(o).mark((function n(){var r,t,a,c,s,l,p,f,h,v,w,b,x;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m("#mycontainer","beforeend"),e.next=3,d("editions");case 3:for(r=e.sent,t=u("ul",{class:"list-group"}),a=!0,c=!1,s=void 0,e.prev=6,l=Object.entries(r)[Symbol.iterator]();!(a=(p=l.next()).done);a=!0)f=i.slicedToArray(p.value,2),h=f[0],v=f[1],w=u("li",{class:"list-group-item"}),(b=new URLSearchParams).set("bareedition",h),(x=u("a",{href:"single.html?".concat(b.toString())})).innerText=v.name,w.appendChild(x),t.appendChild(w);e.next=14;break;case 10:e.prev=10,e.t0=e.catch(6),c=!0,s=e.t0;case 14:e.prev=14,e.prev=15,a||null==l.return||l.return();case 17:if(e.prev=17,!c){e.next=20;break}throw s;case 20:return e.finish(17);case 21:return e.finish(14);case 22:y(),document.querySelector("#mycontainer").appendChild(t);case 24:case"end":return e.stop()}}),n,null,[[6,10,14,22],[15,,17,21]])})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){return c.apply(this,arguments)}));new DOMParser;function u(e,n){n||(n={});var r=document.createElement(e),t=!0,a=!1,o=void 0;try{for(var c,u=Object.entries(n)[Symbol.iterator]();!(t=(c=u.next()).done);t=!0){var s=i.slicedToArray(c.value,2),l=s[0],d=s[1];r.setAttribute(l,d)}}catch(e){a=!0,o=e}finally{try{t||null==u.return||u.return()}finally{if(a)throw o}}return r}var s=["https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/","https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/"],l=[".min.json",".json"];function d(e,n){return p.apply(this,arguments)}function p(){return(p=i.asyncToGenerator(e(o).mark((function n(r,t){var a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=!1,Array.isArray(r)||(r=[r],a=!0),e.next=4,Promise.all(r.map((function(e){return f(v(e,t)).then((function(e){return e.json()}))}))).catch(console.error);case 4:if(i=e.sent,!a){e.next=7;break}return e.abrupt("return",i[0]);case 7:return e.abrupt("return",i);case 8:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function f(e,n){return h.apply(this,arguments)}function h(){return(h=i.asyncToGenerator(e(o).mark((function n(r,t){var a,i,c,u,s,l,d;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=!0,c=!1,u=void 0,e.prev=2,s=r[Symbol.iterator]();case 4:if(i=(l=s.next()).done){e.next=19;break}return d=l.value,e.prev=6,e.next=9,fetch(d,t);case 9:if(!(a=e.sent).ok){e.next=12;break}return e.abrupt("return",a);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(6);case 16:i=!0,e.next=4;break;case 19:e.next=25;break;case 21:e.prev=21,e.t1=e.catch(2),c=!0,u=e.t1;case 25:e.prev=25,e.prev=26,i||null==s.return||s.return();case 28:if(e.prev=28,!c){e.next=31;break}throw u;case 31:return e.finish(28);case 32:return e.finish(25);case 33:return e.abrupt("return",a);case 34:case"end":return e.stop()}}),n,null,[[2,21,25,33],[6,14],[26,,28,32]])})))).apply(this,arguments)}function v(e,n){return n=n||s,l.map((function(r){return n.map((function(n){return n+e+r}))})).flat()}function m(e,n){document.body.contains(document.querySelector("#spinningwheel"))||document.querySelector(e).insertAdjacentHTML(n,'<div  id="spinningwheel">\n    <div class="text-center">\n      <div class="spinner-border m-5" role="status">\n      </div>\n      </div>\n      </div>\n      ')}function y(){document.body.contains(document.querySelector("#spinningwheel"))&&document.querySelector("#spinningwheel").remove()}window.beginSearch=function(){var e=new URLSearchParams,n=document.getElementById("searchquery").value;e.set("q","site:fawazahmed0.github.io/hadiths ".concat(n)),window.open("https://www.google.com/search?"+e.toString(),"_blank")}}();
//# sourceMappingURL=seo.1189e8d3.js.map