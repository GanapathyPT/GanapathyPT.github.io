(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"16l3":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var r=a("Wbzz"),n=a("q1tI"),c=a.n(n),l=a("8Z9I"),i=a.n(l),o=a("7oih"),s=a("xrPb"),u=a("qp9Z"),m=function(e){return JSON.parse(JSON.stringify(e))};function f(){var e=Object(u.a)(),t=e.pinnedProjects,a=e.allProjects,l=Object(n.useState)(t),f=l[0],p=l[1],d=Object(n.useState)(!0),E=d[0],h=d[1];Object(n.useEffect)((function(){p(m(t))}),[t]);var v;return c.a.createElement(o.a,null,c.a.createElement("div",null,c.a.createElement(i.a,{cursor:{show:!1}},c.a.createElement(i.a.Delay,{ms:100}),c.a.createElement("h1",{className:"projects-header"},"Featured Projects")),c.a.createElement(r.Link,{to:"/all-projects",className:"project-view-all-btn"},"View all",c.a.createElement("i",{className:"fa fa-arrow-right"}))),c.a.createElement("div",{className:"projects-container fade-in"},(E?(v=f,m(v).splice(0,4)):f).map((function(e){return c.a.createElement(s.a,{project:e,key:e.id})})),E&&c.a.createElement("div",{className:"projects-load-more",onClick:function(){p((function(e){var t=m(e);return a.filter((function(e){return!!e.homepageUrl&&!!e.description})).filter((function(e){var t;return!(null===(t=e.name)||void 0===t?void 0:t.includes(".github.io"))})).forEach((function(e){t.some((function(t){return e.id!==t.id}))||t.push(e)})),t})),h(!1)}},"load more",c.a.createElement("i",{className:"fa fa-spinner"}))))}},xrPb:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a("q1tI"),n=a.n(r);function c(e){var t,a=e.project;return n.a.createElement("div",{className:"card",key:a.id},n.a.createElement("h2",null,a.name),n.a.createElement("img",{src:(t=a.name,"https://raw.githubusercontent.com/GanapathyPT/"+t+"/master/public/logo.png"),alt:a.description}),n.a.createElement("div",{className:"content"},n.a.createElement("h4",{align:"center"},a.name),n.a.createElement("p",null,a.description),n.a.createElement("div",{className:"actions"},n.a.createElement("a",{rel:"noreferrer",target:"_blank",href:a.homepageUrl},"Visit"),n.a.createElement("a",{rel:"noreferrer",target:"_blank",href:a.url},"Source"))))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-de319f5376e2b9807d66.js.map