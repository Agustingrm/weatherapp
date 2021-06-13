(()=>{"use strict";(()=>{const e=document.createElement("div");e.setAttribute("id","headerDiv"),content.appendChild(e);const t=document.createElement("header");t.innerHTML="Weather App",e.appendChild(t);const n=document.createElement("div");n.setAttribute("id","searchDiv"),content.appendChild(n);const i=document.createElement("input");i.setAttribute("id","searchBar"),i.setAttribute("placeholder","Insert City Name Here"),n.appendChild(i);const d=document.createElement("button");d.setAttribute("id","searchButton"),d.innerHTML="Search",n.appendChild(d);const r=document.createElement("button");r.setAttribute("id","celsiusOrFahrenheit"),r.innerHTML="°C",n.appendChild(r);const o=document.createElement("p");o.setAttribute("id","cityNotFound"),o.innerHTML="City not found, try again",content.appendChild(o);const c=document.createElement("div");c.setAttribute("id","card"),content.appendChild(c);const a=document.createElement("p");a.setAttribute("id","city"),c.appendChild(a);const m=document.createElement("div");m.setAttribute("id","tempDiv"),c.appendChild(m);const s=document.createElement("p");s.setAttribute("id","temperature"),s.innerHTML="<strong>Temperature:&nbsp</strong>",m.appendChild(s);const l=document.createElement("p");l.setAttribute("id","temp"),m.appendChild(l);const u=document.createElement("p");u.setAttribute("id","tempScale"),u.innerHTML="°C",m.appendChild(u);const p=document.createElement("div");p.setAttribute("id","feelsLikeDiv"),c.appendChild(p);const h=document.createElement("p");h.setAttribute("id","feelsLikeName"),h.innerHTML="<strong>Feels Like:&nbsp</strong>",p.appendChild(h);const L=document.createElement("p");L.setAttribute("id","feelsLike"),p.appendChild(L);const E=document.createElement("p");E.setAttribute("id","feelsLikeScale"),E.innerHTML="°C",p.appendChild(E);const M=document.createElement("p");M.setAttribute("id","climateCondition"),M.innerHTML="<strong>Climate Condition:</strong>",c.appendChild(M)})(),document.getElementById("searchButton").addEventListener("click",(()=>{!function(){const e=document.getElementById("searchBar").value,t=document.getElementById("cityNotFound");!async function(){try{const n=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&appid=27a1120f4c8eeb5728e136f3eafe2d34`,{mode:"cors"}),i=await n.json();if("city not found"==i.message)t.style.display="block";else{t.style.display="none",document.getElementById("city").innerHTML=i.name;const e=document.getElementById("temp");e.innerHTML=Math.round(100*(i.main.temp-273.15))/100;const n=document.getElementById("feelsLike");n.innerHTML=Math.round(100*(i.main.feels_like-273.15))/100,"°F"==document.getElementById("celsiusOrFahrenheit").innerText&&(e.innerHTML=Math.round(100*(9*e.innerText/5+32))/100,n.innerHTML=Math.round(100*(9*n.innerText/5+32))/100),document.getElementById("climateCondition").innerHTML="<strong>Climate Condition:</strong> "+i.weather[0].main}}catch(e){console.log(e,"Error")}}()}()})),function(){const e=document.getElementById("celsiusOrFahrenheit");e.addEventListener("click",(()=>{let t=document.getElementById("temp"),n=document.getElementById("tempScale"),i=document.getElementById("feelsLike"),d=document.getElementById("feelsLikeScale");"°C"==e.innerText?(e.innerHTML="°F",t.innerHTML=Math.round(100*(9*t.innerText/5+32))/100,n.innerHTML="°F",i.innerHTML=Math.round(100*(9*i.innerText/5+32))/100,d.innerHTML="°F"):"°F"==e.innerText&&(e.innerHTML="°C",t.innerHTML=Math.round(5*(t.innerText-32)/9*100)/100,n.innerHTML="°C",i.innerHTML=100*Math.round(5*(i.innerText-32)/9)/100,d.innerHTML="°C")}))}(),document.getElementById("city").innerHTML="Loading...",async function(){try{const e=await fetch("http://api.openweathermap.org/data/2.5/weather?q=tucuman&appid=27a1120f4c8eeb5728e136f3eafe2d34",{mode:"cors"}),t=await e.json();document.getElementById("city").innerHTML=t.name,document.getElementById("temp").innerHTML=Math.round(100*(t.main.temp-273.15))/100,document.getElementById("feelsLike").innerHTML=Math.round(100*(t.main.temp-273.15))/100,document.getElementById("climateCondition").innerHTML="<strong>Climate Condition:</strong> "+t.weather[0].main}catch(e){console.log(e+" Error")}}()})();