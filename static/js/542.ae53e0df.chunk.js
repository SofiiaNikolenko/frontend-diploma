"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[542],{9542:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var o=n(3433),r=n(4942),i=n(1413),c=n(9439),a=n(2791),u=n(9509),s=n(9095),l=(n(2151),n(184));u.n(s);var d=function(t){var e=t.onCdnUrlsChange,n=(0,a.useState)([]),r=(0,c.Z)(n,2),i=r[0],u=r[1],s=(0,a.useState)([]),d=(0,c.Z)(s,2),h=d[0],f=d[1],p=(0,a.useRef)(null);return(0,a.useEffect)((function(){var t=p.current;if(t){var e=function(t){var e=t.detail.allEntries.filter((function(t){return"success"===t.status}));u(e),f((function(t){var n=e.map((function(t){return{cdnUrl:t.cdnUrl,uuid:t.uuid}}));return[].concat((0,o.Z)(t),(0,o.Z)(n.filter((function(e){return!t.some((function(t){return t.cdnUrl===e.cdnUrl}))}))))}))};return t.addEventListener("change",e),function(){t.removeEventListener("change",e)}}}),[]),(0,a.useEffect)((function(){e(h)}),[h]),(0,l.jsxs)("div",{children:[(0,l.jsx)("lr-config",{"ctx-name":"my-uploader",pubkey:"274c6cf9681b13936265"}),(0,l.jsx)("lr-file-uploader-regular",{"ctx-name":"my-uploader"}),(0,l.jsx)("lr-upload-ctx-provider",{"ctx-name":"my-uploader",ref:p}),(0,l.jsx)("div",{children:i.map((function(t){return(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:t.cdnUrl,alt:t.fileInfo.originalFilename})},t.uuid)}))})]})},h=function(){var t={title:"",description:"",categories:[{nameCategory:"",todoList:[{todo:""}],publicList:!1}],isPublic:!1,photos:[]},e=(0,a.useState)(t),n=(0,c.Z)(e,2),u=n[0],s=n[1],h=(0,a.useState)([]),f=(0,c.Z)(h,2),p=f[0],g=f[1];(0,a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("data"));t&&s(t)}),[]),(0,a.useEffect)((function(){localStorage.setItem("data",JSON.stringify(u))}),[u]);var m=function(t){var e=t.target,n=e.name,o=e.value;s((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,r.Z)({},n,o))}))};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{children:"Form"}),(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=localStorage.getItem("token"),o=(0,i.Z)((0,i.Z)({},u),{},{photos:p});fetch("http://localhost:3000/api/trips",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(o)}).then((function(t){return t.json()})).then((function(e){console.log("Response:",e),s(t),localStorage.removeItem("data"),g([]),window.location.reload()})).catch((function(t){console.error("Error:",t)}))},children:[(0,l.jsx)("label",{htmlFor:"title",children:"Title"}),(0,l.jsx)("input",{type:"text",id:"title",name:"title",value:u.title,onChange:m}),(0,l.jsx)("label",{htmlFor:"description",children:"Description"}),(0,l.jsx)("input",{type:"text",id:"description",name:"description",value:u.description,onChange:m}),(0,l.jsx)("h2",{children:"Categories"}),u.categories.map((function(t,e){return(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"category-".concat(e),children:"Category Name"}),(0,l.jsx)("input",{type:"text",id:"category-".concat(e),name:"nameCategory",value:t.nameCategory,onChange:function(t){return function(t,e){var n=t.target,c=n.name,a=n.value;s((function(t){var n=(0,o.Z)(t.categories);return n[e]=(0,i.Z)((0,i.Z)({},n[e]),{},(0,r.Z)({},c,a)),(0,i.Z)((0,i.Z)({},t),{},{categories:n})}))}(t,e)}}),(0,l.jsx)("label",{htmlFor:"category-public-".concat(e),children:"Public"}),(0,l.jsx)("input",{type:"checkbox",id:"category-public-".concat(e),name:"publicList",checked:t.publicList,onChange:function(t){return function(t,e){var n=t.target.checked;s((function(t){var r=(0,o.Z)(t.categories);return r[e]=(0,i.Z)((0,i.Z)({},r[e]),{},{publicList:n}),(0,i.Z)((0,i.Z)({},t),{},{categories:r})}))}(t,e)}}),(0,l.jsx)("h3",{children:"Todo List"}),t.todoList.map((function(t,n){return(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"todo-".concat(e,"-").concat(n),children:"Todo"}),(0,l.jsx)("input",{type:"text",id:"todo-".concat(e,"-").concat(n),name:"todo",value:t.todo,onChange:function(t){return function(t,e,n){var r=t.target.value;s((function(t){var c=(0,o.Z)(t.categories),a=(0,o.Z)(c[e].todoList);return a[n]={todo:r},c[e]=(0,i.Z)((0,i.Z)({},c[e]),{},{todoList:a}),(0,i.Z)((0,i.Z)({},t),{},{categories:c})}))}(t,e,n)}}),(0,l.jsx)("button",{type:"button",onClick:function(){return function(t,e){var n=(0,o.Z)(u.categories);n[t].todoList.splice(e,1),s((function(t){return(0,i.Z)((0,i.Z)({},t),{},{categories:n})}))}(e,n)},children:"Delete Todo"})]},n)})),(0,l.jsx)("button",{type:"button",onClick:function(){return function(t){var e=(0,o.Z)(u.categories);e[t].todoList.push({todo:""}),s((function(t){return(0,i.Z)((0,i.Z)({},t),{},{categories:e})}))}(e)},children:"Add Todo"}),(0,l.jsx)("button",{type:"button",onClick:function(){return function(t){s((function(e){var n=(0,o.Z)(e.categories);return n.splice(t,1),(0,i.Z)((0,i.Z)({},e),{},{categories:n})}))}(e)},children:"Delete Category"})]},e)})),(0,l.jsx)("button",{type:"button",onClick:function(){s((function(t){return(0,i.Z)((0,i.Z)({},t),{},{categories:[].concat((0,o.Z)(t.categories),[{nameCategory:"",todoList:[{todo:""}],publicList:!1}])})}))},children:"Add Category"}),(0,l.jsx)("label",{htmlFor:"isPublic",children:"Public"}),(0,l.jsx)("input",{type:"checkbox",id:"isPublic",name:"isPublic",checked:u.isPublic,onChange:function(t){var e=t.target.checked;s((function(t){return(0,i.Z)((0,i.Z)({},t),{},{isPublic:e})}))}}),(0,l.jsx)(d,{onCdnUrlsChange:function(t){g(t)}}),(0,l.jsx)("button",{type:"submit",children:"Submit"})]})]})},f=function(){var t=(0,a.useState)([]),e=(0,c.Z)(t,2),n=e[0],o=e[1],r=localStorage.getItem("token");return(0,a.useEffect)((function(){fetch("http://localhost:3000/api/trips",{headers:{Authorization:"Bearer ".concat(r)}}).then((function(t){return t.json()})).then((function(t){return o(t)})).catch((function(t){return console.error("Error fetching trips:",t)}))}),[r]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{children:"All User Trips"}),(0,l.jsx)("ul",{children:n.map((function(t){return(0,l.jsxs)("li",{children:[(0,l.jsx)("h2",{children:t.title}),(0,l.jsx)("p",{children:t.description}),(0,l.jsx)("h3",{children:"Categories:"}),(0,l.jsx)("ul",{children:t.categories.map((function(t,e){return(0,l.jsxs)("li",{children:[(0,l.jsx)("h4",{children:t.nameCategory}),(0,l.jsx)("ul",{children:t.todoList.map((function(t,e){return(0,l.jsx)("li",{children:t.todo},e)}))})]},e)}))}),(0,l.jsxs)("p",{children:["Public: ",t.isPublic?"Yes":"No"]}),t.photos.length>0&&(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Photos:"}),(0,l.jsx)("ul",{children:t.photos.map((function(t,e){return(0,l.jsx)("li",{children:(0,l.jsx)("img",{src:t.cdnUrl,alt:"Photo ".concat(e+1)})},e)}))})]})]},t._id)}))})]})},p=n(8826),g=function(){var t={title:"",description:"",categories:[{nameCategory:"",todoList:[{todo:""}],publicList:!1}],isPublic:!1,photos:[]},e=(0,a.useState)(t),n=(0,c.Z)(e,2),u=n[0],s=n[1],h=(0,a.useState)([]),f=(0,c.Z)(h,2),g=f[0],m=f[1],x=(0,a.useState)([]),j=(0,c.Z)(x,2),b=j[0],Z=j[1],v=(0,a.useState)(null),y=(0,c.Z)(v,2),C=y[0],L=y[1],k=(0,a.useState)(!1),S=(0,c.Z)(k,2),P=S[0],U=S[1],E=new p.l7({publicKey:"274c6cf9681b13936265",secretKey:"9cfba5a3ce13072e7ac2"});(0,a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("data"));t&&s(t)}),[]),(0,a.useEffect)((function(){localStorage.setItem("data",JSON.stringify(u))}),[u]),(0,a.useEffect)((function(){var t=localStorage.getItem("token");fetch("http://localhost:3000/api/trips",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(t){return t.json()})).then((function(t){Z(t)})).catch((function(t){console.error("Error fetching trips:",t)}))}),[]);var F=function(t){var e=t.target,n=e.name,o=e.value;s((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,r.Z)({},n,o))}))};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{children:"Form"}),(0,l.jsx)("h2",{children:"Select Trip to Edit"}),(0,l.jsx)("ul",{children:b.map((function(t){return(0,l.jsx)("li",{onClick:function(){return function(t){var e=b.find((function(e){return e._id===t}));s({title:e.title,description:e.description,categories:e.categories.map((function(t){return{nameCategory:t.nameCategory,todoList:t.todoList.map((function(t){return{todo:t.todo}})),publicList:t.publicList}})),isPublic:e.isPublic,photos:e.photos.map((function(t){return{cdnUrl:t.cdnUrl,uuid:t.uuid}}))}),m(e.photos.map((function(t){return t.cdnUrl}))),L(t),U(!0)}(t._id)},children:t.title},t._id)}))}),P&&(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=localStorage.getItem("token"),r="http://localhost:3000/api/trips/".concat(C),c=u.photos.map((function(t){var e=g.find((function(e){return e===t.cdnUrl}));return e?{cdnUrl:e,uuid:t.uuid}:{cdnUrl:t.cdnUrl,uuid:t.uuid}}));g.forEach((function(t){u.photos.find((function(e){return e.cdnUrl===t.cdnUrl}))||c.push({cdnUrl:t.cdnUrl,uuid:t.uuid})}));var a=(0,i.Z)((0,i.Z)({},u),{},{categories:u.categories.map((function(t){return{nameCategory:t.nameCategory,todoList:t.todoList.map((function(t){return{todo:t.todo}})),publicList:t.publicList}})),photos:(0,o.Z)(c)});fetch(r,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(a)}).then((function(t){return t.json()})).then((function(e){console.log("Response:",e),s(t),localStorage.removeItem("data"),m([])})).catch((function(t){console.error("Error:",t)}))},children:[(0,l.jsx)("label",{htmlFor:"title",children:"Title"}),(0,l.jsx)("input",{type:"text",id:"title",name:"title",value:u.title,onChange:F}),(0,l.jsx)("label",{htmlFor:"description",children:"Description"}),(0,l.jsx)("input",{type:"text",id:"description",name:"description",value:u.description,onChange:F}),(0,l.jsx)("h2",{children:"Categories"}),u.categories.map((function(t,e){return(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"category-".concat(e),children:"Category Name"}),(0,l.jsx)("input",{type:"text",id:"category-".concat(e),name:"nameCategory",value:t.nameCategory,onChange:function(t){return function(t,e){var n=t.target,c=n.name,a=n.value;s((function(t){var n=(0,o.Z)(t.categories);return n[e]=(0,i.Z)((0,i.Z)({},n[e]),{},(0,r.Z)({},c,a)),(0,i.Z)((0,i.Z)({},t),{},{categories:n})}))}(t,e)}}),(0,l.jsx)("label",{htmlFor:"category-public-".concat(e),children:"Public"}),(0,l.jsx)("input",{type:"checkbox",id:"category-public-".concat(e),name:"publicList",checked:t.publicList,onChange:function(t){return function(t,e){var n=t.target.checked;s((function(t){var r=(0,o.Z)(t.categories);return r[e]=(0,i.Z)((0,i.Z)({},r[e]),{},{publicList:n}),(0,i.Z)((0,i.Z)({},t),{},{categories:r})}))}(t,e)}}),(0,l.jsx)("h3",{children:"Todo List"}),t.todoList.map((function(t,n){return(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"todo-".concat(e,"-").concat(n),children:"Todo"}),(0,l.jsx)("input",{type:"text",id:"todo-".concat(e,"-").concat(n),name:"todo",value:t.todo,onChange:function(t){return function(t,e,n){var r=t.target.value;s((function(t){var c=(0,o.Z)(t.categories),a=(0,o.Z)(c[e].todoList);return a[n]={todo:r},c[e]=(0,i.Z)((0,i.Z)({},c[e]),{},{todoList:a}),(0,i.Z)((0,i.Z)({},t),{},{categories:c})}))}(t,e,n)}}),(0,l.jsx)("button",{type:"button",onClick:function(){return function(t,e){var n=(0,o.Z)(u.categories);n[t].todoList.splice(e,1),s((function(t){return(0,i.Z)((0,i.Z)({},t),{},{categories:n})}))}(e,n)},children:"Delete Todo"})]},n)})),(0,l.jsx)("button",{type:"button",onClick:function(){return function(t){var e=(0,o.Z)(u.categories);e[t].todoList.push({todo:""}),s((function(t){return(0,i.Z)((0,i.Z)({},t),{},{categories:e})}))}(e)},children:"Add Todo"}),(0,l.jsx)("button",{type:"button",onClick:function(){return function(t){s((function(e){var n=(0,o.Z)(e.categories);return n.splice(t,1),(0,i.Z)((0,i.Z)({},e),{},{categories:n})}))}(e)},children:"Delete Category"})]},e)})),(0,l.jsx)("button",{type:"button",onClick:function(){s((function(t){return(0,i.Z)((0,i.Z)({},t),{},{categories:[].concat((0,o.Z)(t.categories),[{nameCategory:"",todoList:[{todo:""}],publicList:!1}])})}))},children:"Add Category"}),(0,l.jsx)("label",{htmlFor:"isPublic",children:"Public"}),(0,l.jsx)("input",{type:"checkbox",id:"isPublic",name:"isPublic",checked:u.isPublic,onChange:function(t){var e=t.target.checked;s((function(t){return(0,i.Z)((0,i.Z)({},t),{},{isPublic:e})}))}}),(0,l.jsx)("ul",{children:u.photos.map((function(t,e){return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:t.cdnUrl,alt:"Trip photo ".concat(e)}),(0,l.jsx)("button",{onClick:function(){return function(t){var e=(0,o.Z)(u.photos),n=e.splice(t,1)[0];(0,p._I)({uuid:n.uuid},{authSchema:E}).then((function(){console.log("Photo successfully deleted from Uploadcare")})).catch((function(t){console.error("Error deleting photo from Uploadcare:",t)})),s((function(t){return(0,i.Z)((0,i.Z)({},t),{},{photos:e})}))}(e)},children:"Delete"})]},e)}))}),(0,l.jsx)(d,{onCdnUrlsChange:function(t){m(t)}}),(0,l.jsx)("button",{type:"submit",children:"Submit"})]})]})},m=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{children:"User"}),(0,l.jsx)(h,{}),(0,l.jsx)("br",{}),(0,l.jsx)(f,{}),(0,l.jsx)("br",{}),(0,l.jsx)(g,{})]})}}}]);
//# sourceMappingURL=542.ae53e0df.chunk.js.map