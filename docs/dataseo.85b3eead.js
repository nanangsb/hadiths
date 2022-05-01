document.addEventListener("DOMContentLoaded",(async function(){document.querySelector("#mycontainer").insertAdjacentHTML("beforeend",t);let r=new URLSearchParams(document.location.search),n=r.get("edition"),o=r.get("bareedition")||n.replace(/\d+/g,"").split("-")[1].trim(),d=r.get("num");if(!o||!d)return;let h=await l("editions"),u=await l("isocodes/iso-codes",i),f=h[o].collection.map((e=>[e.name,e.language,e.direction])),b=[],m=c(e).querySelector(".table"),p=[...new Set(f.map((e=>e[1])))];for(let e of p){let t=a("a",{href:`#${e.toLowerCase()}`});t.innerText=e;let r=a("tr"),n=a("td",{class:"text-center"});n.appendChild(t),r.appendChild(n),m.querySelector("tbody").appendChild(r)}for(let[e]of f)b.push(`editions/${e}/${d}`);document.querySelector("#mycontainer").appendChild(m);let y=await l(b),w=0,g=[];for(let[e,t,r]of f){let n=y[w];if(!g.includes(t)){let e=a("h2",{id:t.toLowerCase(),class:"text-center"}),r=a("a",{href:`#${t.toLowerCase()}`,class:"link-dark"});r.innerText=t,e.appendChild(r),document.querySelector("#mycontainer").appendChild(e)}for(let a of n.hadiths)document.querySelector("#mycontainer").appendChild(s(a,e,r,t,u));g.push(t),w++}}));const e='\n<table class="table table-hover  table-striped">\n  <tbody>\n\n  </tbody>\n</table>\n',t='\n<div class="mb-3 d-none">\n<form class="d-flex" onsubmit="beginSearch(); return false">\n  <input id="searchquery" class="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />\n  <button id="searchbtn" class="btn btn-outline-info" type="button" onclick="beginSearch(); return false">\n    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor"\n      xmlns="http://www.w3.org/2000/svg">\n      <path fill-rule="evenodd"\n        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />\n      <path fill-rule="evenodd"\n        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />\n    </svg>\n  </button>\n</form>\n</div>\n';function r(e){return e.toString().toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g,(e=>e.toUpperCase())).trim()}let n=new DOMParser;function a(e,t){t||(t={});let r=document.createElement(e);for(let[e,n]of Object.entries(t))r.setAttribute(e,n);return r}let o=["https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/","https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/"],i=["https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/","https://raw.githubusercontent.com/fawazahmed0/quran-api/1/"],d=[".min.json",".json"];async function l(e,t){let r=!1;Array.isArray(e)||(e=[e],r=!0);let n=await Promise.all(e.map((e=>async function(e,t){let r;for(let n of e)try{if(r=await fetch(n,t),r.ok)return r}catch(e){}return r}(function(e,t){return t=t||o,d.map((r=>t.map((t=>t+e+r)))).flat()}(e,t)).then((e=>e.json()))))).catch(console.error);return r?n[0]:n}function c(e){return n.parseFromString(e,"text/html")}function s(e,t,n,o,i){let d=o.toLowerCase(),l=c('    \n<div class="card text-dark bg-light m-3">\n<div class="card-body">\n<div class="card-text lead m-1"></div>\n</div>\n\n<span id="footercontainer">\n</span>\n\n</div>\n').querySelector(".card");l.querySelector(".card-text").innerText=e.text;let s=a("div",{class:"card-footer"});e.grades.length>0&&(l.querySelector("#footercontainer").appendChild(s.cloneNode()),Array.from(l.querySelectorAll(".card-footer")).at(-1).insertAdjacentHTML("beforeend",'<table class="table table-sm">\n    <thead>\n      <tr>\n        <th>Grade</th>\n      \n      </tr>\n    </thead>\n    <tbody>\n    </tbody>\n    </table>'));for(let t of e.grades)l.querySelector("tbody").insertAdjacentHTML("beforeend",`<tr><td>${r(t.grade)}</td><td>${t.name}</td></tr>`);let h=`hadith:${t}:${e.hadithnumber}`;return e.hadithnumber&&(l.querySelector("#footercontainer").appendChild(s.cloneNode()),Array.from(l.querySelectorAll(".card-footer")).at(-1).insertAdjacentHTML("beforeend",`<a href=#${h} class="link-dark text-decoration-none" >Hadith Number: ${e.hadithnumber}</a><br>`)),e.arabicnumber&&(l.querySelector("#footercontainer").appendChild(s.cloneNode()),Array.from(l.querySelectorAll(".card-footer")).at(-1).insertAdjacentHTML("beforeend",`<a href=#${h} class="link-dark text-decoration-none" >Arabic Number: ${e.arabicnumber}</a><br>`)),e.reference&&(l.querySelector("#footercontainer").appendChild(s.cloneNode()),Array.from(l.querySelectorAll(".card-footer")).at(-1).insertAdjacentHTML("beforeend",`<a href=#${h} class="link-dark text-decoration-none" >Reference: ${Object.entries(e.reference).flat().map((e=>r(e))).join(" ")}</a><br>`)),l.setAttribute("id",h),l.querySelector(".card-text").setAttribute("dir",n),l.querySelector(".card-text").setAttribute("lang",i[d].iso1?i[d].iso1:i[d].iso2),l}window.beginSearch=function(){let e=new URLSearchParams,t=document.getElementById("searchquery").value;e.set("q",`site:fawazahmed0.github.io/hadiths ${t}`),window.open("https://www.google.com/search?"+e.toString(),"_blank")};
//# sourceMappingURL=dataseo.85b3eead.js.map