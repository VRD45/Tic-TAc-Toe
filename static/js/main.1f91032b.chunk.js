(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),u=n.n(c),r=n(6),l=n.n(r),o=(n(12),n(13),n(7)),i=n(2),s=n(0),a=function(t){return Object(s.jsx)("button",{className:"square",onClick:function(e){return t.onClick(e)},children:t.value})},j=function(){var t=Object(c.useState)("X's Chance"),e=Object(i.a)(t,2),n=e[0],u=e[1],r=Object(c.useState)(Array(9).fill(null)),l=Object(i.a)(r,2),j=l[0],b=l[1],f=Object(c.useState)(!0),O=Object(i.a)(f,2),v=O[0],x=O[1],C=Object(c.useState)([{step:0,squares:Array(9).fill(null),isNextTurn:!1}]),h=Object(i.a)(C,2),d=h[0],g=h[1],k=Object(c.useState)(0),p=Object(i.a)(k,2),S=p[0],F=p[1];function T(t,e){if(v){if(null==j[t]){j[t]="X",b(j),F(S+1),console.log(j),console.log(S);var n={step:S,squares:j,isNextTurn:!0};console.log(d),g([d.concat(n)]),g(d),x(!1),u("O's Chance")}}else if(null==j[t]){j[t]="O",b(j),F(S+1),console.log(S);var c={step:S,squares:j,isNextTurn:!0};console.log(d),g([].concat(Object(o.a)(d),[c])),x(!0),u("X's Chance")}(function(){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],e=0;e<t.length;e++){var n=Object(i.a)(t[e],3),c=n[0],r=n[1],l=n[2];if(j[c]&&j[c]===j[r]&&j[c]===j[l])return u(j[c]+" Wins!!"),j[c]}for(var o=0,s=0;s<j.length;s++)null===j[s]&&o++;return 0===o?(u("Match Draw!!"),!0):null})()&&b(Array(9).fill(null))}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{id:"status",children:n}),Object(s.jsxs)("div",{id:"container",children:[Object(s.jsx)(a,{value:j[0],onClick:function(t){return T(0)}}),Object(s.jsx)(a,{value:j[1],onClick:function(t){return T(1)}}),Object(s.jsx)(a,{value:j[2],onClick:function(t){return T(2)}}),Object(s.jsx)(a,{value:j[3],onClick:function(t){return T(3)}}),Object(s.jsx)(a,{value:j[4],onClick:function(t){return T(4)}}),Object(s.jsx)(a,{value:j[5],onClick:function(t){return T(5)}}),Object(s.jsx)(a,{value:j[6],onClick:function(t){return T(6)}}),Object(s.jsx)(a,{value:j[7],onClick:function(t){return T(7)}}),Object(s.jsx)(a,{value:j[8],onClick:function(t){return T(8)}})]})]})};var b=function(){return Object(s.jsx)(j,{})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,u=e.getFCP,r=e.getLCP,l=e.getTTFB;n(t),c(t),u(t),r(t),l(t)}))};l.a.render(Object(s.jsx)(u.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.1f91032b.chunk.js.map