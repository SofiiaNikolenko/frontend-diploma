"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[58],{58:function(e,s,r){r.r(s),r.d(s,{default:function(){return p}});var a=r(1413),n=r(9439),o=r(8784),t=r(3254),i=r(6559),l=r(5294),m=r(184),u={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},d={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},p=function(){var e=o.Z.useForm(),s=(0,n.Z)(e,1)[0];return(0,m.jsxs)(o.Z,(0,a.Z)((0,a.Z)({},u),{},{form:s,name:"register",onFinish:function(e){l.Z.post("http://localhost:3000/users/register",{email:e.email,password:e.password}).then((function(e){console.log(e.data),s.resetFields()})).catch((function(e){console.error("There was an error!",e)}))},initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"86"},style:{maxWidth:600},scrollToFirstError:!0,children:[(0,m.jsx)(o.Z.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:(0,m.jsx)(t.Z,{})}),(0,m.jsx)(o.Z.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:(0,m.jsx)(t.Z.Password,{})}),(0,m.jsx)(o.Z.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var s=e.getFieldValue;return{validator:function(e,r){return r&&s("password")!==r?Promise.reject(new Error("The new password that you entered do not match!")):Promise.resolve()}}}],children:(0,m.jsx)(t.Z.Password,{})}),(0,m.jsx)(o.Z.Item,(0,a.Z)((0,a.Z)({},d),{},{children:(0,m.jsx)(i.ZP,{type:"primary",htmlType:"submit",children:"Register"})}))]}))}}}]);
//# sourceMappingURL=58.a5aa5397.chunk.js.map