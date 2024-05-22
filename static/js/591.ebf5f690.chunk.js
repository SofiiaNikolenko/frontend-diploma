"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[591],{5304:function(n,e,t){t.d(e,{Z:function(){return m}});var r,i,o,a=t(168),s=t(1413),c=t(5987),l=t(2791),d=t(3733),p=t(1203),u=t(2554),x=t(7959),h=t(184),f=["open","className"];function m(n){var e=n.open,t=n.onClose,r=n.photo;return(0,h.jsx)(j,{"aria-labelledby":"unstyled-modal-title","aria-describedby":"unstyled-modal-description",open:e,onClose:t,slots:{backdrop:b},children:(0,h.jsx)(v,{sx:{width:400},children:(0,h.jsx)("img",{src:r,alt:"Selected",style:{width:"100%"}})})})}var Z=l.forwardRef((function(n,e){var t=n.open,r=n.className,i=(0,c.Z)(n,f);return(0,h.jsx)("div",(0,s.Z)({className:(0,d.Z)({"base-Backdrop-open":t},r),ref:e},i))})),g="#1C2025",j=(0,p.Z)(x.u)(r||(r=(0,a.Z)(["\n  position: fixed;\n  z-index: 1300;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n"]))),b=(0,p.Z)(Z)(i||(i=(0,a.Z)(["\n  z-index: -1;\n  position: fixed;\n  inset: 0;\n  background-color: rgb(0 0 0 / 0.5);\n  -webkit-tap-highlight-color: transparent;\n"]))),v=(0,p.Z)("div")((function(n){var e=n.theme;return(0,u.iv)(o||(o=(0,a.Z)(["\n    position: relative;\n    overflow: hidden;\n    background-color: ",";\n    border: none;\n    padding: 24px;\n  "])),"dark"===e.palette.mode?g:"#fff")}))},9591:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,i,o,a,s,c,l,d,p=t(5861),u=t(9439),x=t(4687),h=t.n(x),f=t(2791),m=t(5294),Z=t(6106),g=t(914),j=t(4889),b=t(5304),v=t(168),w=t(8733),k=w.ZP.p(r||(r=(0,v.Z)(["\n  color: #666;\n  font-size: 14px;\n  margin-bottom: 16px;\n"]))),y=w.ZP.h3(i||(i=(0,v.Z)(["\n  margin-bottom: 6px;\n"]))),C=w.ZP.h4(o||(o=(0,v.Z)(["\n  color: #555;\n  margin-bottom: 3px;\n"]))),P=w.ZP.ul(a||(a=(0,v.Z)(["\n  list-style-type: disc;\n  margin-bottom: 6px;\n  margin-left: 15px;\n"]))),_=w.ZP.li(s||(s=(0,v.Z)(["\n  color: #777;\n"]))),S=w.ZP.ul(c||(c=(0,v.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n"]))),z=w.ZP.li(l||(l=(0,v.Z)(["\n  width: 150px;\n"]))),B=t(184),E=function(){var n=(0,f.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=(0,f.useState)(!1),o=(0,u.Z)(i,2),a=o[0],s=o[1],c=(0,f.useState)(null),l=(0,u.Z)(c,2),d=l[0],x=l[1];(0,f.useEffect)((function(){var n=function(){var n=(0,p.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.Z.get("http://localhost:3000/api/trips/trips-with-likes");case 3:e=n.sent,r(e.data.trips),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Error fetching popular trips:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]);var v=function(){for(var n="#",e=0;e<6;e++)n+="0123456789ABCDEF"[Math.floor(16*Math.random())];return n};return(0,B.jsxs)("div",{children:[(0,B.jsx)(Z.Z,{gutter:[16,16],children:t.map((function(n){return(0,B.jsx)(g.Z,{span:8,children:(0,B.jsxs)(j.Z,{style:{marginBottom:"15px"},title:n.title,bordered:!1,headStyle:{backgroundColor:v(),color:"#fafbfc"},children:[(0,B.jsx)(k,{children:n.description}),(0,B.jsxs)("div",{children:[(0,B.jsx)(y,{children:"Categories:"}),(0,B.jsx)("ul",{children:n.categories.map((function(n){return(0,B.jsxs)("li",{children:[(0,B.jsx)(C,{children:n.nameCategory}),(0,B.jsx)(P,{children:n.todoList.map((function(n){return(0,B.jsx)(_,{children:n.todo},n._id)}))})]},n._id)}))})]}),(0,B.jsxs)("div",{children:[(0,B.jsx)("h3",{children:"Photos:"}),(0,B.jsx)(S,{children:n.photos.map((function(n){return(0,B.jsx)(z,{children:(0,B.jsx)("img",{src:n.cdnUrl,alt:"Trip photo",onClick:function(){return function(n){x(n),s(!0)}(n.cdnUrl)},style:{width:"150px",cursor:"pointer",boxShadow:"7px 11px 10px 1px rgba(223, 223, 223, 1)"}})},n.uuid)}))})]})]})},n._id)}))}),d&&(0,B.jsx)(b.Z,{open:a,onClose:function(){return s(!1)},photo:d})]})},N=w.ZP.div(d||(d=(0,v.Z)(["\n  width: 1262px;\n  margin: 0 auto;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-top: 70px;\n"]))),M=function(){return(0,B.jsx)(N,{children:(0,B.jsx)(E,{})})}}}]);
//# sourceMappingURL=591.ebf5f690.chunk.js.map