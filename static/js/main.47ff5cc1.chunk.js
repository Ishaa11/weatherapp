(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(5),s=n.n(i),r=n(4),l=n.n(r),o=n(6),d=n(2),j=n(0),u=function(){var e,t,n,c,i,s=(new Date).toDateString(),r=(new Date).toLocaleTimeString(),u=Object(a.useState)(r),h=Object(d.a)(u,2),m=h[0],b=h[1];setInterval((function(){r=(new Date).toLocaleTimeString(),b(r)}),1e3);var p=Object(a.useState)(null),v=Object(d.a)(p,2),O=v[0],x=v[1],f=Object(a.useState)(),w=Object(d.a)(f,2),g=w[0],N=w[1];return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://api.openweathermap.org/data/2.5/weather?q=".concat(g,"&units=metric&appid=81b033f920a6fb336c0f77d301b14414"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,console.log(a),x(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[g]),Object(j.jsx)("div",{className:"box",children:Object(j.jsxs)("div",{className:"box2",children:[Object(j.jsx)("div",{className:"inputdata",children:Object(j.jsx)("input",{type:"search",className:"inputf",onChange:function(e){N(e.target.value)}})}),O?Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("h1",{className:"city",children:g}),Object(j.jsx)("h2",{className:"date",children:s}),Object(j.jsx)("h2",{className:"time",children:m}),Object(j.jsx)("div",{className:"tempt",children:Object(j.jsxs)("h1",{children:[null===O||void 0===O||null===(e=O.main)||void 0===e?void 0:e.temp,"\xb0C"]})}),Object(j.jsx)("div",{className:"weather",children:(null===O||void 0===O?void 0:O.weather)&&Object(j.jsx)("h2",{children:null===O||void 0===O||null===(t=O.weather[0])||void 0===t?void 0:t.main})}),Object(j.jsx)("div",{className:"icon",children:(null===O||void 0===O?void 0:O.weather)&&Object(j.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(null===O||void 0===O||null===(n=O.weather[0])||void 0===n?void 0:n.icon,".png"),alt:"wthr img"})}),Object(j.jsx)("div",{className:"limits",children:Object(j.jsxs)("h4",{children:["Min-Temp ",null===O||void 0===O||null===(c=O.main)||void 0===c?void 0:c.temp_min," \xb0C|| Max-Temp ",null===O||void 0===O||null===(i=O.main)||void 0===i?void 0:i.temp_max," \xb0C"]})})]}):Object(j.jsx)("p",{children:"No Data Found"})]})})},h=(n(13),function(){return Object(j.jsx)(u,{})});s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.47ff5cc1.chunk.js.map