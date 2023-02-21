"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[539],{3090:function(e,r,t){var n=t(1413),o=t(4925),i=(t(2791),t(1087)),c=t(184),a=["children","onClick","className","isLoading"];r.Z=function(e){var r=e.children,t=e.onClick,s=e.className,l=void 0===s?"":s,d=e.isLoading,u=void 0!==d&&d,m=(0,o.Z)(e,a),h=u?(0,c.jsx)("div",{className:"w-8 h-8 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin"}):r,x="text-base font-semibold rounded-xl flex items-center justify-center";switch(m.kind){case"primary":x+=" bg-gradient-to-r from-[#00a7b4] to-[#a4d96c] text-white p-4 min-h-[56px]";break;case"secondary":x+=" bg-secondary bg-opacity-20 text-secondary p-4 min-h-[56px]";break;case"cancel":x+=" bg-stock hover:bg-gray-100 transition-all text-text3 text-base font-medium font-mono px-4 py-2 rounded-lg";break;case"success":x+=" bg-blue-500 hover:bg-opacity-80  text-white px-4 py-2 font-mono";break;case"delete":x+=" bg-red-500 hover:bg-opacity-80 text-white px-4 py-2 font-mono"}return m.href?(0,c.jsx)(i.rU,{to:m.href,className:x+" "+l,children:r}):(0,c.jsx)("button",(0,n.Z)((0,n.Z)({onClick:t,className:"cursor-pointer ".concat(x+" "+(u?"opacity-50 pointer-events-none":"")," ").concat(l)},m),{},{children:h}))}},2075:function(e,r,t){t(2791);var n=t(184);r.Z=function(e){var r=e.children;return(0,n.jsx)("div",{className:"relative ",children:r})}},7121:function(e,r,t){t(2791);var n=t(184);r.Z=function(e){var r=e.children,t=e.show,o=e.className;return(0,n.jsx)(n.Fragment,{children:t&&(0,n.jsx)("div",{className:"absolute top-full left-0 w-full bg-white shadow-lg rounded-lg overflow-hidden z-10 ".concat(o),children:r})})}},4961:function(e,r,t){t(2791);var n=t(184);r.Z=function(e){var r=e.children,t=e.onClick,o=e.className,i=void 0===o?" ":o;return(0,n.jsx)("div",{className:"py-4 px-5 cursor-pointer flex items-center justify-between transition-all ease-linear text-sm hover:text-[#42526e]  hover:bg-[rgba(9,30,66,0.04)] hover:border-l-4 hover:border-l-primary hover:bg-opacity-20 ".concat(i),onClick:t,children:r})}},7486:function(e,r,t){t(2791);var n=t(184);r.Z=function(e){var r=e.show,t=e.onClick,o=e.placeholder,i=void 0===o?"":o,c=e.className,a=void 0===c?" text-text2 bg-bgInput":c,s=e.nodeRef;return(0,n.jsxs)("div",{ref:s,className:"flex items-center justify-between px-6 py-4  border border-strock rounded-xl text-sm font-semibold cursor-pointer select-none ".concat(a),onClick:t,children:[(0,n.jsx)("span",{children:i}),(0,n.jsx)("span",{children:r?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})}):(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})})]})}},4307:function(e,r,t){var n=t(1413),o=t(9439),i=t(4925),c=(t(2791),t(5705)),a=t(7470),s=t(5242),l=t(184),d=["children","className"];r.Z=(0,a.withErrorBoundary)((function(e){var r=e.children,t=e.className,a=void 0===t?"bg-bgInput":t,s=(0,i.Z)(e,d),u=(0,c.U$)(s),m=(0,o.Z)(u,2),h=m[0],x=m[1];return(0,l.jsxs)("div",{className:"relative ",children:[(0,l.jsx)("input",(0,n.Z)((0,n.Z)({className:"w-full px-6 py-4 border  rounded-xl text-sm font-medium placeholder:text-text4 dark:placeholder:text-text-2 ".concat(a," ").concat(x.touched&&x.error?"border-error text-error":"border-strock text-text1 dark:border-darkStoke"," ").concat(r?"pr-14":"")},s),h)),x.touched&&x.error?(0,l.jsx)("span",{className:"absolute bottom-0 left-1 translate-y-6 text-sm text-error font-medium pointer-events-none error-input",children:x.error}):null,r&&(0,l.jsx)("span",{className:" absolute right-6 top-2/4 -translate-y-2/4 cursor-pointer select-none",children:r})]})}),{FallbackComponent:s.Z})},7624:function(e,r,t){var n=t(1413),o=t(4925),i=(t(2791),t(9687)),c=t(5705),a=t(184),s=["control","name","value"];r.Z=function(e){var r=e.control,t=e.name,l=e.value,d=(0,o.Z)(e,s);return"tiny-mce"===r?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(c.gN,(0,n.Z)((0,n.Z)({id:t,name:t},d),{},{children:function(e){var r=e.form,n=e.field,o=r.setFieldValue;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.M,{value:n.value,initialValue:l,init:{height:500,menubar:!0,toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"},onEditorChange:function(e,r){o(t,e)}})})}}))}):null}},9702:function(e,r,t){t(2791);var n=t(184);r.Z=function(e){var r=e.children,t=e.htmlFor,o=void 0===t?"":t,i=e.onClick;return(0,n.jsx)("label",{onClick:i,htmlFor:o,className:"text-sm text-left font-medium  text-text2 dark:text-text3 cursor-pointer inline-block mt-5",children:r})}},5242:function(e,r,t){t(2791);var n=t(184);r.Z=function(e){return(0,n.jsx)("div",{className:"text-red-500 bg-red-100 p-5 rounded-lg",children:"Look like component is error"})}},4256:function(e,r,t){t(2791);var n=t(184);r.Z=function(e){var r=e.children;return(0,n.jsx)("div",{className:"flex flex-col gap-y-2 lg:gap-y-3 mb-4 lg:mb-5",children:r})}},2069:function(e,r,t){t(2791);var n=t(184);r.Z=function(e){var r=e.children,t=e.className,o=void 0===t?"grid-cols-2":t;return(0,n.jsx)("div",{className:"grid gap-x-[45px] mb-1 ".concat(o),children:r})}},7071:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(9439),o=t(2791);function i(){var e=(0,o.useState)(!1),r=(0,n.Z)(e,2),t=r[0],i=r[1],c=(0,o.useRef)(null);return(0,o.useEffect)((function(){function e(e){c.current&&!c.current.contains(e.target)&&i(!1)}return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]),{show:t,setShow:i,nodeRef:c}}},1539:function(e,r,t){t.r(r);var n=t(4165),o=t(5861),i=t(2791),c=t(5705),a=t(2797),s=t(4307),l=t(9702),d=t(2075),u=t(7486),m=t(7121),h=t(7071),x=t(4961),p=t(2069),f=t(4256),v=t(7624),g=t(3090),b=t(9434),j=t(9334),y=t(7381),k=t(184);r.default=function(e){var r=(0,b.I0)(),t=(0,h.Z)(),Z=t.show,w=t.setShow,N=t.nodeRef,C=function(){w(!Z)},F=(0,b.v9)((function(e){return e.projectReducer})).projectCategory,L=(0,y.pm)().add;return(0,i.useEffect)((function(){r((0,j.WK)())}),[]),(0,k.jsx)(i.Fragment,{children:(0,k.jsx)("div",{className:"bg-white rounded-xl py-10 px-[66px]",children:(0,k.jsxs)("div",{className:"text-center",children:[(0,k.jsx)("h1",{className:"py-4 px-14  bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block",children:"Start a Project \ud83d\ude80"}),(0,k.jsx)(c.J9,{initialValues:{projectName:"",description:"",categoryId:0},validationSchema:a.Ry().shape({projectName:a.Z_().required("This project name already registered"),description:a.Z_().required("This description already registered"),categoryId:a.Z_().required("This category already registered")}),onSubmit:function(e,t){var i=t.setSubmitting,c=t.resetForm;setTimeout((0,o.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(!1),t.next=3,r((0,j.$L)(e));case 3:L({type:"success",message:"Create project successfully",duration:3e3,position:"topCenter"}),c();case 5:case"end":return t.stop()}}),t)}))))},children:function(e){var r=e.isSubmitting,t=(e.errors,e.setFieldValue),n=e.values,o=1===n.categoryId?"D\u1ef1 \xe1n web":2===n.categoryId?"D\u1ef1 \xe1n ph\u1ea7n m\u1ec1m":3===n.categoryId?"D\u1ef1 \xe1n di \u0111\u1ed9ng":"Select a project category";return(0,k.jsxs)(c.l0,{children:[(0,k.jsxs)(p.Z,{children:[(0,k.jsxs)(f.Z,{children:[(0,k.jsx)(l.Z,{htmlFor:"projectName",children:"Project name *"}),(0,k.jsx)(s.Z,{id:"projectName",name:"projectName",type:"text",placeholder:"Please enter project name..."})]}),(0,k.jsxs)(f.Z,{children:[(0,k.jsx)(l.Z,{children:"Project category *"}),(0,k.jsxs)(d.Z,{children:[(0,k.jsx)(u.Z,{nodeRef:N,show:Z,placeholder:o,onClick:C}),(0,k.jsx)(m.Z,{show:Z,children:F.map((function(e){var r=e.id,o=e.projectCategoryName,i=r===n.categoryId;return(0,k.jsx)(x.Z,{className:i?"text-[#42526e] bg-[rgba(9,30,66,0.04)] border-l-4 border-l-primary bg-opacity-20":"",onClick:function(){var e;console.log(n),e=r,w(!1),t("categoryId",e)},children:o},r)}))})]})]})]}),(0,k.jsxs)(f.Z,{children:[(0,k.jsx)(l.Z,{children:"Description *"}),(0,k.jsx)(v.Z,{control:"tiny-mce",name:"description"})]}),(0,k.jsx)("div",{className:" flex items-center justify-center",children:(0,k.jsx)(g.Z,{isLoading:r,type:"submit",className:" my-3",kind:"primary",children:"Add new project"})})]})}})]})})})}}}]);
//# sourceMappingURL=539.4f9b2d87.chunk.js.map