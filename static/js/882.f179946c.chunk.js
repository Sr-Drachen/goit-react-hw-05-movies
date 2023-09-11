"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[882],{7480:function(A,n,t){t.d(n,{B:function(){return a}});var g,e=t(168),r=t(5706),B=t(184),c=r.Z.div(g||(g=(0,e.Z)(["\n  font-size: 20px;\n  margin-top: 40px;\n  color: red;\n"]))),a=function(A){var n=A.children;return(0,B.jsxs)(c,{children:[" ",n]})}},882:function(A,n,t){t.r(n),t.d(n,{default:function(){return m}});var g,e,r,B,c,a,i=t(9439),w=t(2791),s=t(7689),E=t(3469),u=t(8966),C=t(7480),M=t(3647),o=t(168),I=t(5706),Q=I.Z.ul(g||(g=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  // align-items: center;\n\n  padding: 0;\n  margin: 0;\n  gap: 10px;  \n"]))),f=I.Z.li(e||(e=(0,o.Z)(["\n  flex-basis: calc((100% - 9 * 10px) / 10);\n  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n  list-style: none;\n  border-radius: 0px 0px 4px 4px;\n    "]))),Z=I.Z.div(r||(r=(0,o.Z)(["\n  padding: 10px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),D=I.Z.img(B||(B=(0,o.Z)(["\n  height: 100%;  \n"]))),p=I.Z.p(c||(c=(0,o.Z)(["\n  margin-bottom: 5px;\n  text-align: center;\n  font-weight: 600;\n  line-height: 1.2;\n"]))),l=I.Z.p(a||(a=(0,o.Z)(["\n  margin-bottom: 5px;\n  text-align: center;\n"]))),d=t(184),m=function(){var A=(0,w.useState)({}),n=(0,i.Z)(A,2),t=n[0],g=n[1],e=(0,w.useState)(!1),r=(0,i.Z)(e,2),B=r[0],c=r[1],a=(0,w.useState)(null),o=(0,i.Z)(a,2),I=o[0],m=o[1],x=(0,s.UO)().id;return(0,w.useEffect)((function(){c(!0),m(null),(0,M.$w)(x).then((function(A){0===A.cast.length&&m("No cast found..."),g(A.cast)})).catch((function(A){return m("Oops! Something went wrong! Try reloading the page!")})).finally((function(){return c(!1)}))}),[x]),(0,d.jsxs)("section",{children:[B&&(0,d.jsx)(E.a,{children:(0,d.jsx)(u.g4,{color:"lightslategrey"})}),(0,d.jsx)(Q,{children:t.length>0&&t.map((function(A){var n=A.id,t=A.name,g=A.character,e=A.profile_path;return(0,d.jsxs)(f,{children:[(0,d.jsx)(Z,{children:(0,d.jsx)(D,{src:e?"https://image.tmdb.org/t/p/w300/".concat(e):"data:image/png;base64,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",alt:"".concat(t," portrait"),width:"100px",loading:"lazy"})}),(0,d.jsx)(p,{children:t}),(0,d.jsx)(l,{children:"Character: ".concat(g)})]},n)}))}),I&&(0,d.jsx)(C.B,{children:I})]})}},3469:function(A,n,t){t.d(n,{a:function(){return r}});var g,e=t(168),r=t(5706).Z.div(g||(g=(0,e.Z)(["\n  display: flex;\n  justify-content: center;\n"])))},3647:function(A,n,t){t.d(n,{$w:function(){return w},Pg:function(){return i},V0:function(){return a},Xj:function(){return s},rj:function(){return c}});var g=t(4165),e=t(5861),r=t(1243);r.Z.defaults.baseURL="https://api.themoviedb.org/3",r.Z.defaults.params={api_key:"80849c20aa63241eb028c4e7b7d0f3a8"};var B="/movie/",c=function(){var A=(0,e.Z)((0,g.Z)().mark((function A(){var n,t,e=arguments;return(0,g.Z)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e.length>0&&void 0!==e[0]?e[0]:1,A.next=3,r.Z.get("/trending/movie/day");case 3:return n=A.sent,t=n.data,A.abrupt("return",t);case 6:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),a=function(){var A=(0,e.Z)((0,g.Z)().mark((function A(n){var t,e;return(0,g.Z)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,r.Z.get("".concat("/search/movie","?query=").concat(n));case 2:return t=A.sent,e=t.data,A.abrupt("return",e);case 5:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),i=function(){var A=(0,e.Z)((0,g.Z)().mark((function A(n){var t,e;return(0,g.Z)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,r.Z.get("".concat(B).concat(n));case 2:return t=A.sent,e=t.data,A.abrupt("return",e);case 5:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),w=function(){var A=(0,e.Z)((0,g.Z)().mark((function A(n){var t,e;return(0,g.Z)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,r.Z.get("".concat(B).concat(n,"/credits"));case 2:return t=A.sent,e=t.data,A.abrupt("return",e);case 5:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),s=function(){var A=(0,e.Z)((0,g.Z)().mark((function A(n){var t,e;return(0,g.Z)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,r.Z.get("".concat(B).concat(n,"/reviews"));case 2:return t=A.sent,e=t.data,A.abrupt("return",e);case 5:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}()}}]);
//# sourceMappingURL=882.f179946c.chunk.js.map