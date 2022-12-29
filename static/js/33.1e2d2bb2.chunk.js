"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{33:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,c,o,i=e(439),u=e(682),s=e(791),l=e(689),f=e(635),p=e(168),d=e(444),h=e(87),m=d.ZP.ul(r||(r=(0,p.Z)(["\n  margin-left: ","px;\n"])),(function(n){return n.theme.space[4]})),x=d.ZP.li(a||(a=(0,p.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[2]})),v=(0,d.ZP)(h.rU)(c||(c=(0,p.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  margin-right: ","px;\n  color: ",";\n  transition-property: color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    cursor: pointer;\n\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.accentColor})),g=d.ZP.button(o||(o=(0,p.Z)(["\n  font-size: ",";\n\n  border: ",";\n  border-radius: ",";\n  color: ",";\n  background-color: ",";\n  transition-property: box-shadow, transform;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    transform: scale(1.03);\n    box-shadow: 2px 2px 12px 2px ",";\n  }\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentColor})),w=e(184),b=function(){var n=(0,s.useState)(null),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,s.useState)(null),c=(0,i.Z)(a,2),o=c[0],p=c[1],d=(0,l.UO)().id,h=(0,l.s0)(),b=(0,l.TH)();return(0,s.useEffect)((function(){f.w7(d).then(r).catch((function(n){console.log(),p(n),r([])}))}),[d]),(0,w.jsxs)(u.x,{as:"div",pl:[7],children:[(0,w.jsx)(g,{type:"button",onClick:function(){var n,t;return h(null!==(n=null===b||void 0===b||null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/")},children:"Go back"}),!e&&o&&(0,w.jsx)("p",{children:"Something went wrong...Please, try again!"}),e&&(0,w.jsxs)(u.x,{as:"div",children:[(0,w.jsxs)("h2",{children:[e.title," (",new Date(e.release_date).getFullYear(),")"]}),(0,w.jsxs)(u.x,{as:"div",display:"flex",children:[(0,w.jsx)("img",{src:e.poster_path?f.r1+e.poster_path:"https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-",alt:e.title,loading:"lazy",width:250}),(0,w.jsxs)(m,{children:[(0,w.jsxs)(x,{children:[(0,w.jsx)("h3",{children:"User score"}),(0,w.jsx)("p",{children:e.vote_average.toFixed(1)})]}),(0,w.jsxs)(x,{children:[(0,w.jsx)("h3",{children:"Overview"}),(0,w.jsx)("p",{children:e.overview})]}),(0,w.jsxs)(x,{children:[(0,w.jsx)("h3",{children:"Genres"}),(0,w.jsx)("ul",{children:e.genres.map((function(n){var t=n.id,e=n.name;return(0,w.jsx)("li",{children:e},t)}))})]})]})]}),(0,w.jsxs)(u.x,{as:"div",mt:[4],children:[(0,w.jsx)(v,{to:"cast",state:b.state,children:"Cast"}),(0,w.jsx)(v,{to:"reviews",state:b.state,children:"Reviews"}),(0,w.jsx)(s.Suspense,{fallback:null,children:(0,w.jsx)(l.j3,{})})]})]})]})}},635:function(n,t,e){e.d(t,{Df:function(){return l},E9:function(){return h},h$:function(){return f},r1:function(){return s},ri:function(){return d},w7:function(){return p}});var r=e(861),a=e(757),c=e.n(a),o=e(388);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="d8f6c8593dac3d35659165785d083845",u="/movie",s="https://image.tmdb.org/t/p/w500",l=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat("/trending/all/day","?page=1&api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat("/search/movie","?query=").concat(t,"&api_key=").concat(i,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=33.1e2d2bb2.chunk.js.map