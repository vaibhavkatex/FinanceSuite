import{C as T}from"./auto.sRkgK8jz.js";const C=document.getElementById("annualInvestText"),h=document.getElementById("annualInvestSlider"),b=document.getElementById("girlAgeText"),L=document.getElementById("girlAgeSlider"),x=document.getElementById("rateText"),V=document.getElementById("rateSlider"),p=document.getElementById("totalInvestedValue"),v=document.getElementById("interestEarnedValue"),B=document.getElementById("maturityValue"),E=document.getElementById("ssyTableBody");let u=null;function i(e,n){e.addEventListener("input",()=>{n.value=e.value,c()}),n.addEventListener("input",()=>{e.value=n.value,c()})}i(C,h);i(b,L);i(x,V);function a(e){return"₹"+Math.round(e).toLocaleString("en-IN")}function c(){const e=parseFloat(C.value)||0,n=parseFloat(x.value)||0,o=15,S=21,m=[];let r=0,d=0;for(let t=1;t<=S;t++){const l=r,s=t<=o?e:0;d+=s;const f=(l+s)*(n/100),I=l+s+f;m.push({year:t,opening:l,deposited:s,interest:f,closing:I}),r=I}const y=r,g=y-d;p&&(p.textContent=a(d)),v&&(v.textContent=a(g)),B&&(B.textContent=a(y)),E&&(E.innerHTML=m.map(t=>`
        <tr>
          <td>Year ${t.year}</td>
          <td>${a(t.opening)}</td>
          <td>${a(t.deposited)}</td>
          <td>${a(t.interest)}</td>
          <td>${a(t.closing)}</td>
        </tr>
      `).join("")),A(d,g)}function A(e,n){const o=document.getElementById("ssyChart");o&&(u&&u.destroy(),u=new T(o,{type:"doughnut",data:{labels:["Invested Amount","Interest Earned"],datasets:[{data:[e,n],backgroundColor:["#171717","#0070f3"],borderWidth:1,borderColor:"#ffffff"}]},options:{responsive:!0,plugins:{legend:{display:!1}},cutout:"75%"}}))}document.addEventListener("DOMContentLoaded",()=>{c()});
