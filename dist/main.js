(()=>{"use strict";const t=function(){const t=document.getElementById("main");t.textContent="";const e=document.createElement("h2");e.innerHTML="LIFE IS BETTER <br> WITH COFFEE";const n=document.createElement("button");n.textContent="Menu",t.appendChild(e),t.appendChild(n)};function e(t){document.querySelectorAll(".link").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const n=document.getElementById("content");n.appendChild(function(){const n=document.createElement("nav"),c=document.createElement("div");c.classList.add("link"),c.textContent="Home",c.addEventListener("click",(n=>{n.target.classList.contains("active")||(e(c),t())}));const a=document.createElement("div");a.classList.add("link"),a.textContent="Menu",a.addEventListener("click",(t=>{t.target.classList.contains("active")||(e(a),loadMenu())}));const d=document.createElement("div");return d.classList.add("link"),d.textContent="Contact Us",d.addEventListener("click",(t=>{t.target.classList.contains("active")||(e(d),loadContact())})),n.appendChild(c),n.appendChild(a),n.appendChild(d),n}()),n.appendChild(function(){const t=document.createElement("main");return t.setAttribute("id","main"),t}()),n.appendChild(function(){const t=document.createElement("footer"),e=document.createElement("div");e.className="made-by";const n=document.createElement("p");n.textContent="This website has been built by Schismond";const c=document.createElement("a");c.href="https://github.com/Schismond";const a=document.createElement("img");a.className="git",a.src="/img/github.png",e.appendChild(n),c.appendChild(a),e.appendChild(c),t.appendChild(e);const d=document.createElement("h3");d.textContent="Freepik Attributions :";const i=document.createElement("div");i.className="attributions";const o=["https://shorturl.at/fgxDJ","https://shorturl.at/buEG6","https://shorturl.at/itNUZ"],s=["brgfx","mrsiraphol","chevanon"];for(let t=0;t<o.length;t++){const e=document.createElement("div"),n=document.createElement("a");n.href=o[t],n.textContent=s[t],e.appendChild(n),i.appendChild(e)}return t.appendChild(d),t.appendChild(i),t}()),e(document.querySelector(".link")),t()}()})();