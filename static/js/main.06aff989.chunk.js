(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),i=n.n(c),o=n(6),r=n(8),a=n(1),l=n(3),u=n.n(l),b=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.Alphabet="alphabet",t.Length="length",t.Reset="reset"}(s||(s={}));var j=function(){var t=Object(a.useState)(s.Reset),e=Object(o.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)(!1),l=Object(o.a)(i,2),j=l[0],g=l[1],d=function(t,e,n){var c=Object(r.a)(t);return c.sort((function(t,n){switch(e){case s.Alphabet:return t.localeCompare(n);case s.Length:return t.length-n.length;default:return 0}})),n?c.reverse():c}(h,n,j);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()({"is-light":n!==s.Alphabet},"button is-info"),onClick:function(){return c(s.Alphabet)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()({"is-light":n!==s.Length},"button is-success"),onClick:function(){return c(s.Length)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()({"is-light":!j},"button is-warning"),onClick:function(){g(!j)},children:"Reverse"}),JSON.stringify(d)===JSON.stringify(h)?"":Object(b.jsx)("button",{type:"button",className:u()({"is-light":n!==s.Reset},"button is-danger"),onClick:function(){c(s.Reset),g(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:d.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};i.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.06aff989.chunk.js.map