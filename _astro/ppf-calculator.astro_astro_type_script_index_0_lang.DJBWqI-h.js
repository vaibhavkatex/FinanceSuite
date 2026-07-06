import{C as T}from"./auto.sRkgK8jz.js";const E=document.getElementById("annualInvestText"),h=document.getElementById("annualInvestSlider"),C=document.getElementById("rateText"),S=document.getElementById("rateSlider"),x=document.getElementById("tenureText"),b=document.getElementById("tenureSlider"),I=document.getElementById("totalInvestedValue"),g=document.getElementById("interestEarnedValue"),v=document.getElementById("maturityValue"),B=document.getElementById("ppfTableBody");let s=null;function c(t,n){t.addEventListener("input",()=>{n.value=t.value,u()}),n.addEventListener("input",()=>{t.value=n.value,u()})}c(E,h);c(C,S);c(x,b);function a(t){return"₹"+Math.round(t).toLocaleString("en-IN")}function u(){const t=parseFloat(E.value)||0,n=parseFloat(C.value)||0,o=parseFloat(x.value)||0,i=[];let r=0,d=0;for(let e=1;e<=o;e++){const l=r,p=(l+t)*(n/100),y=l+t+p;d+=t,i.push({year:e,opening:l,deposited:t,interest:p,closing:y}),r=y}const m=r,f=m-d;I&&(I.textContent=a(d)),g&&(g.textContent=a(f)),v&&(v.textContent=a(m)),B&&(B.innerHTML=i.map(e=>`
        <tr>
          <td>Year ${e.year}</td>
          <td>${a(e.opening)}</td>
          <td>${a(e.deposited)}</td>
          <td>${a(e.interest)}</td>
          <td>${a(e.closing)}</td>
        </tr>
      `).join("")),L(d,f)}function L(t,n){const o=document.getElementById("ppfChart");o&&(s&&s.destroy(),s=new T(o,{type:"doughnut",data:{labels:["Invested Amount","Interest Earned"],datasets:[{data:[t,n],backgroundColor:["#171717","#0070f3"],borderWidth:1,borderColor:"#ffffff"}]},options:{responsive:!0,plugins:{legend:{display:!1}},cutout:"75%"}}))}document.addEventListener("DOMContentLoaded",()=>{u()});
