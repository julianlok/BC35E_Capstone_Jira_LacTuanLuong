"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[814],{3090:function(e,t,n){var r=n(1413),s=n(4925),o=(n(2791),n(1087)),a=n(184),i=["children","onClick","className","isLoading"];t.Z=function(e){var t=e.children,n=e.onClick,c=e.className,l=void 0===c?"":c,d=e.isLoading,u=void 0!==d&&d,x=(0,s.Z)(e,i),m=u?(0,a.jsx)("div",{className:"w-8 h-8 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin"}):t,h="text-base font-semibold rounded-xl flex items-center justify-center";switch(x.kind){case"primary":h+=" bg-gradient-to-r from-[#00a7b4] to-[#a4d96c] text-white p-4 min-h-[56px]";break;case"secondary":h+=" bg-secondary bg-opacity-20 text-secondary p-4 min-h-[56px]";break;case"cancel":h+=" bg-stock hover:bg-gray-100 transition-all text-text3 text-base font-medium font-mono px-4 py-2 rounded-lg";break;case"success":h+=" bg-blue-500 hover:bg-opacity-80  text-white px-4 py-2 font-mono";break;case"delete":h+=" bg-red-500 hover:bg-opacity-80 text-white px-4 py-2 font-mono"}return x.href?(0,a.jsx)(o.rU,{to:x.href,className:h+" "+l,children:t}):(0,a.jsx)("button",(0,r.Z)((0,r.Z)({onClick:n,className:"cursor-pointer ".concat(h+" "+(u?"opacity-50 pointer-events-none":"")," ").concat(l)},x),{},{children:m}))}},2075:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.children;return(0,r.jsx)("div",{className:"relative ",children:t})}},7121:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.children,n=e.show,s=e.className;return(0,r.jsx)(r.Fragment,{children:n&&(0,r.jsx)("div",{className:"absolute top-full left-0 w-full bg-white shadow-lg rounded-lg overflow-hidden z-10 ".concat(s),children:t})})}},4961:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.children,n=e.onClick,s=e.className,o=void 0===s?" ":s;return(0,r.jsx)("div",{className:"py-4 px-5 cursor-pointer flex items-center justify-between transition-all ease-linear text-sm hover:text-[#42526e]  hover:bg-[rgba(9,30,66,0.04)] hover:border-l-4 hover:border-l-primary hover:bg-opacity-20 ".concat(o),onClick:n,children:t})}},7486:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.show,n=e.onClick,s=e.placeholder,o=void 0===s?"":s,a=e.className,i=void 0===a?" text-text2 bg-bgInput":a,c=e.nodeRef;return(0,r.jsxs)("div",{ref:c,className:"flex items-center justify-between px-6 py-4  border border-strock rounded-xl text-sm font-semibold cursor-pointer select-none ".concat(i),onClick:n,children:[(0,r.jsx)("span",{children:o}),(0,r.jsx)("span",{children:t?(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})}):(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})})]})}},8336:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.onChange;return(0,r.jsxs)("div",{className:"bg-gray-100 rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] p-2 w-full  flex items-center",children:[(0,r.jsx)("div",{className:"flex-1 px-5",children:(0,r.jsx)("input",{onChange:t,type:"text",placeholder:"Search...",className:"bg-transparent w-full text-sm text-text1 placeholder:text-text4 "})}),(0,r.jsx)("div",{className:"w-[72px] rounded-full bg-secondary bg-opacity-20 text-secondary h-10 flex items-center justify-center flex-shrink-0",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})})]})}},4307:function(e,t,n){var r=n(1413),s=n(9439),o=n(4925),a=(n(2791),n(5705)),i=n(7470),c=n(5242),l=n(184),d=["children","className"];t.Z=(0,i.withErrorBoundary)((function(e){var t=e.children,n=e.className,i=void 0===n?"bg-bgInput":n,c=(0,o.Z)(e,d),u=(0,a.U$)(c),x=(0,s.Z)(u,2),m=x[0],h=x[1];return(0,l.jsxs)("div",{className:"relative ",children:[(0,l.jsx)("input",(0,r.Z)((0,r.Z)({className:"w-full px-6 py-4 border  rounded-xl text-sm font-medium placeholder:text-text4 dark:placeholder:text-text-2 ".concat(i," ").concat(h.touched&&h.error?"border-error text-error":"border-strock text-text1 dark:border-darkStoke"," ").concat(t?"pr-14":"")},c),m)),h.touched&&h.error?(0,l.jsx)("span",{className:"absolute bottom-0 left-1 translate-y-6 text-sm text-error font-medium pointer-events-none error-input",children:h.error}):null,t&&(0,l.jsx)("span",{className:" absolute right-6 top-2/4 -translate-y-2/4 cursor-pointer select-none",children:t})]})}),{FallbackComponent:c.Z})},7624:function(e,t,n){var r=n(1413),s=n(4925),o=(n(2791),n(9687)),a=n(5705),i=n(184),c=["control","name","value"];t.Z=function(e){var t=e.control,n=e.name,l=e.value,d=(0,s.Z)(e,c);return"tiny-mce"===t?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.gN,(0,r.Z)((0,r.Z)({id:n,name:n},d),{},{children:function(e){var t=e.form,r=e.field,s=t.setFieldValue;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.M,{value:r.value,initialValue:l,init:{height:500,menubar:!0,toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"},onEditorChange:function(e,t){s(n,e)}})})}}))}):null}},9702:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.children,n=e.htmlFor,s=void 0===n?"":n,o=e.onClick;return(0,r.jsx)("label",{onClick:o,htmlFor:s,className:"text-sm text-left font-medium  text-text2 dark:text-text3 cursor-pointer inline-block mt-5",children:t})}},8902:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(2791),s=n(4164),o=n(184);var a=function(){var e=document.createElement("div");return e.id="portal-wrapper",e}(),i=function(e){var t=e.containerClassName,n=void 0===t?"":t,i=e.bodyClassName,c=void 0===i?"":i,l=e.containerStyle,d=void 0===l?{}:l,u=e.bodyStyle,x=void 0===u?{}:u,m=e.onClose,h=e.visible,p=void 0!==h&&h,f=e.children;(0,r.useEffect)((function(){document.body.appendChild(a)}),[]);var v=(0,o.jsxs)("div",{className:"fixed inset-0 z-[99]  ".concat(p?"":"opacity-0 invisible"," ").concat(n),style:d,children:[(0,o.jsx)("div",{className:"overlay absolute inset-0 bg-black bg-opacity-30 ",onClick:m}),(0,o.jsx)("div",{className:"content relative z-10 ".concat(c),style:x,children:f})]});return(0,s.createPortal)(v,a)},c=function(e){var t=e.visible,n=e.children,r=e.onClose;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i,{visible:t,onClose:r,containerClassName:"flex items-center justify-center",children:n})})}},5242:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){return(0,r.jsx)("div",{className:"text-red-500 bg-red-100 p-5 rounded-lg",children:"Look like component is error"})}},4256:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.children;return(0,r.jsx)("div",{className:"flex flex-col gap-y-2 lg:gap-y-3 mb-4 lg:mb-5",children:t})}},2069:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.children,n=e.className,s=void 0===n?"grid-cols-2":n;return(0,r.jsx)("div",{className:"grid gap-x-[45px] mb-1 ".concat(s),children:t})}},4333:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.onClick,n=void 0===t?function(){}:t;return(0,r.jsx)("span",{className:"flex items-center justify-center w-10 h-10 borderborder-transparent rounded cursor-pointer text-error hover:bg-error hover:bg-opacity-20 transition-all ease-linear",onClick:n,children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})}},645:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.onClick,n=void 0===t?function(){}:t;return(0,r.jsx)("span",{className:"flex items-center justify-center w-10 h-10 border border-transparent text-blue-600 hover:bg-blue-200 transition-all ease-linear rounded cursor-pointer select-none",onClick:n(),children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})})}},5962:function(e,t,n){n(2791);var r=n(184);t.Z=function(){return(0,r.jsx)("span",{className:"text-red-500",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})})})}},7071:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(9439),s=n(2791);function o(){var e=(0,s.useState)(!1),t=(0,r.Z)(e,2),n=t[0],o=t[1],a=(0,s.useRef)(null);return(0,s.useEffect)((function(){function e(e){a.current&&!a.current.contains(e.target)&&o(!1)}return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]),{show:n,setShow:o,nodeRef:a}}},814:function(e,t,n){n.r(t);var r=n(4165),s=n(5861),o=n(9439),a=n(2791),i=n(5705),c=n(2797),l=n(4333),d=n(645),u=n(2962),x=n(6473),m=n(8964),h=n(3090),p=n(8336),f=n(8902),v=n(4256),j=n(7624),b=n(4961),g=n(7121),w=n(2075),y=n(9702),N=n(7486),k=n(2069),Z=n(4307),C=n(7071),L=n(7381),S=n(9434),M=n(9334),I=n(5265),F=n(5962),R=n(5226),_=n(1087),D=n(184);t.default=function(e){var t,n=(0,S.v9)((function(e){return e.projectReducer})),z=n.projectAll,B=n.projectCategory,A=(0,S.v9)((function(e){return e.userReducer})).userAll,E=(0,a.useRef)(null),W=(0,S.I0)(),H=(0,a.useState)(!1),P=(0,o.Z)(H,2),T=P[0],V=P[1],U=(0,C.Z)(),O=U.show,q=U.setShow,G=U.nodeRef,J=function(){q(!O)},K=(0,a.useState)([]),X=(0,o.Z)(K,2),Y=X[0],$=X[1],Q=(0,a.useState)(""),ee=(0,o.Z)(Q,2),te=ee[0],ne=ee[1],re=(0,a.useState)(!1),se=(0,o.Z)(re,2),oe=se[0],ae=se[1],ie=(0,a.useState)(!1),ce=(0,o.Z)(ie,2),le=ce[0],de=ce[1],ue=(0,a.useState)(!1),xe=(0,o.Z)(ue,2),me=xe[0],he=xe[1],pe=(0,a.useState)(!1),fe=(0,o.Z)(pe,2),ve=fe[0],je=fe[1],be=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ae(!1),V(!0),de(!0),e.next=5,W((0,M.WK)());case 5:$(z.filter((function(e){return e.id===t}))),V(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),he(!0),e.next=4,W((0,I.XF)());case 4:$(z.filter((function(e){return e.id===t}))),V(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:V(!0),je(!0),$(z.filter((function(e){return e.id===t}))),V(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ye=(0,R.ex)(R.bc);(0,a.useEffect)((function(){W((0,M.N3)())}),[]);var Ne=(0,L.pm)().add,ke=(0,a.useState)(1),Ze=(0,o.Z)(ke,2),Ce=Ze[0],Le=Ze[1],Se=(0,a.useState)([]),Me=(0,o.Z)(Se,2),Ie=Me[0],Fe=Me[1];(0,a.useEffect)((function(){Fe(z?null===z||void 0===z?void 0:z.slice(0,6):[])}),[z]);var Re;return(0,D.jsxs)(D.Fragment,{children:[ve&&(0,D.jsx)(f.Z,{visible:ve,onClose:function(){je(!1)},children:T?(0,D.jsx)("div",{className:"w-8 h-8 rounded-full border-4 border-blue-300 border-t-transparent animate-spin"}):(0,D.jsx)(D.Fragment,{children:Y.map((function(e){var t=e.projectName,n=e.id;return(0,D.jsxs)("div",{className:"relative bg-white max-w-[500px] w-[400px] max-h-[350px]  overflow-hidden rounded-lg shadow-sdSecondary",children:[(0,D.jsxs)("div",{className:"flex gap-x-2 p-6",children:[(0,D.jsx)(F.Z,{}),(0,D.jsx)("div",{className:"flex-1",children:(0,D.jsxs)("h3",{className:"text-xl font-mono font-semibold",children:["Delete ",t,"?"]})})]}),(0,D.jsxs)("div",{className:"text-sm text-text2 leading-6 px-6",children:[(0,D.jsx)("p",{className:"mb-3",children:"You're about to permanently delete this project, its comments and attachments, and all of its data."}),(0,D.jsx)("p",{children:"If you're not sure, you can resolve or close this issue instead."})]}),(0,D.jsxs)("div",{className:"flex items-start justify-end gap-x-3 px-6 py-5",children:[(0,D.jsx)(h.Z,{kind:"cancel",type:"button",onClick:function(){je(!1)},children:"Cancel"}),(0,D.jsx)(h.Z,{kind:"delete",type:"button",onClick:(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),e.next=3,W((0,M.th)(n));case 3:return e.next=5,W((0,M.N3)());case 5:return e.next=7,V(!1);case 7:return e.next=9,je(!1);case 9:Ne({type:"success",message:"Delete ".concat(t," successfully"),duration:3e3,position:"topRight"});case 10:case"end":return e.stop()}}),e)}))),children:"Delete"})]})]},n)}))})}),me&&(0,D.jsx)(f.Z,{visible:me,onClose:function(){he(!1)},children:T?(0,D.jsx)("div",{className:"w-8 h-8 rounded-full border-4 border-blue-300 border-t-transparent animate-spin"}):(0,D.jsx)("div",{className:"relative bg-white max-w-[750px] w-[750px] max-h-[650px] h-[650px] overflow-hidden rounded-lg shadow-sdSecondary",children:Y.map((function(e){var t,n=e.members,o=e.projectName,a=e.creator,i=null===e||void 0===e?void 0:e.id;return(0,D.jsxs)("div",{children:[(0,D.jsxs)("div",{className:"flex items-start justify-between mx-5 mt-5",children:[(0,D.jsxs)("div",{className:" flex items-center gap-x-3",children:[(0,D.jsx)("div",{className:"text-text2 font-medium",children:"ID :"}),(0,D.jsx)("span",{className:"flex items-center justify-center min-w-[45px] h-[45px] rounded-lg shadow-sdThirty text-text2 font-semibold select-none",children:i})]}),(0,D.jsx)("span",{className:"text-text2 hover:text-error select-none cursor-pointer",onClick:function(){he(!1)},children:(0,D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,D.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,D.jsx)("h2",{className:"mt-5 text-2xl text-center text-text5 font-bold ",children:o}),(0,D.jsxs)("div",{className:"flex items-start justify-between",children:[(0,D.jsxs)("div",{className:"w-[55%] p-4 ",children:[(0,D.jsx)("h3",{className:"text-text5 text-2xl font-mono font-semibold py-2 text-center",children:"Add member"}),(0,D.jsx)("div",{className:"mt-3",children:(0,D.jsx)("input",{className:"p-4 outline-none w-full border border-gray-200 rounded",type:"text",placeholder:"Search user...",onChange:function(e){ne(e.currentTarget.value)}})}),(0,D.jsx)("div",{className:"overflow-x-hidden overflow-y-auto max-h-[400px] mx-w-[600px] scrollbar-none border border-strock mt-3 rounded-lg",children:(t=A,null===t||void 0===t?void 0:t.filter((function(e){var t;return null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(te)}))).map((function(e){var t=e.avatar,n=e.name,o=e.userId;return(0,D.jsxs)("div",{className:"flex items-center justify-between p-4 border-b border-strock",children:[(0,D.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,D.jsx)(u.C,{src:(0,D.jsx)("img",{src:t,alt:"".concat(n," avatar")})}),(0,D.jsx)("span",{className:"text-text1 max-w-[250px] font-medium truncate",children:n})]}),(0,D.jsx)("button",{onClick:(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.id!==ye.id){e.next=9;break}return e.next=3,W((0,M.kL)({projectId:i,userId:o}));case 3:return e.next=5,W((0,M.N3)());case 5:return e.next=7,Ne({type:"success",message:"Add ".concat(n," successfully"),duration:3e3,position:"bottomLeft"});case 7:e.next=11;break;case 9:he(!1),Ne({type:"warning",message:"Only the creator can add member in this project",duration:3e3,position:"bottomLeft"});case 11:case"end":return e.stop()}}),e)}))),className:"text-white font-medium font-mono bg-blue-500 px-2 py-1 rounded-lg",children:"Add"})]},o)}))})]}),(0,D.jsxs)("div",{className:"w-[45%] p-4",children:[(0,D.jsx)("h3",{className:"text-text5 text-2xl font-mono font-semibold py-2 text-center",children:"Remove member"}),(0,D.jsx)("div",{className:"overflow-x-hidden overflow-y-auto border border-strock mt-3 rounded-lg max-h-[470px] scrollbar-none",children:n.map((function(e){var t=e.avatar,n=e.name,o=e.userId;return(0,D.jsxs)("div",{className:"flex items-center justify-between p-4 border-b border-strock ",children:[(0,D.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,D.jsx)(u.C,{src:(0,D.jsx)("img",{src:t,alt:"".concat(n," avatar")})}),(0,D.jsx)("span",{className:"text-text1 font-medium",children:n})]}),(0,D.jsx)("button",{onClick:(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.id!==ye.id){e.next=9;break}return e.next=3,W((0,M.M3)({projectId:i,userId:o}));case 3:return e.next=5,W((0,M.N3)());case 5:return e.next=7,Ne({type:"success",message:"Delete ".concat(n," successfully"),duration:3e3,position:"bottomLeft"});case 7:e.next=11;break;case 9:he(!1),Ne({type:"warning",message:"Only the creator can delete member in this project",duration:3e3,position:"bottomLeft"});case 11:case"end":return e.stop()}}),e)}))),className:"text-white font-medium font-mono bg-error px-2 py-1 rounded-lg",children:"Remove"})]},o)}))})]})]})]},i)}))})}),le&&Y.map((function(e){var t=e.id,n=e.projectName,o=e.categoryName,a=e.description;E.current&&(E.current.innerHTML=a);var l={projectName:n,description:a,categoryId:t};return(0,D.jsx)(f.Z,{visible:le,onClose:function(){de(!1)},children:T?(0,D.jsx)("div",{className:"w-8 h-8 rounded-full border-4 border-blue-300 border-t-transparent animate-spin"}):(0,D.jsx)(i.J9,{initialValues:l,validationSchema:c.Ry().shape({projectName:c.Z_().required("")}),onSubmit:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n,s){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,s.setSubmitting)(!0),e.next=4,W((0,M.ty)(t,n));case 4:return e.next=6,W((0,M.N3)());case 6:de(!1);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var r=e.isSubmitting,s=e.setFieldValue,a=e.values,c=e.resetForm;return(0,D.jsx)(i.l0,{children:(0,D.jsxs)("div",{className:"relative bg-white min-w-[750px] max-h-[650px] overflow-x-hidden overflow-y-auto rounded-lg shadow-sdSecondary scrollbar-none",children:[(0,D.jsxs)("div",{className:"flex items-start justify-between mx-5 mt-5",children:[(0,D.jsxs)("div",{className:" flex items-center gap-x-3",children:[(0,D.jsx)("div",{className:"text-text2 font-medium",children:"ID :"}),(0,D.jsx)("span",{className:"flex items-center justify-center min-w-[45px] h-[45px] rounded-lg shadow-sdThirty text-text2 font-semibold select-none",children:t})]}),(0,D.jsx)("span",{className:"text-text2 hover:text-error select-none cursor-pointer",onClick:function(){de(!1)},children:(0,D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,D.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,D.jsx)("div",{className:"bg-white rounded-xl py-10 px-[66px]",children:(0,D.jsxs)("div",{className:"text-center",children:[(0,D.jsx)("h1",{className:"py-4 px-14  bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block",children:"Update Project \ud83d\udcdd"}),(0,D.jsxs)(k.Z,{children:[(0,D.jsxs)(v.Z,{children:[(0,D.jsx)(y.Z,{htmlFor:"projectName",children:"Project name"}),(0,D.jsx)(Z.Z,{id:"projectName",name:"projectName",type:"text",placeholder:n})]}),(0,D.jsxs)(v.Z,{children:[(0,D.jsx)(y.Z,{children:"Project category *"}),(0,D.jsxs)(w.Z,{children:[(0,D.jsx)(N.Z,{nodeRef:G,show:O,placeholder:o,onClick:J}),(0,D.jsx)(g.Z,{show:O,children:B.map((function(e){var t=e.id,n=e.projectCategoryName;return(0,D.jsx)(b.Z,{onClick:function(){return function(e){q(!1),s("categoryId",e)}(t)},children:n},t)}))})]})]})]}),(0,D.jsxs)(v.Z,{children:[(0,D.jsx)(y.Z,{onClick:function(){ae(!0)},children:"Description *"}),oe?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(j.Z,{control:"tiny-mce",name:"description"}),(0,D.jsxs)("div",{className:"flex items-center justify-end gap-x-3",children:[(0,D.jsx)(h.Z,{kind:"cancel",onClick:function(){ae(!1),c()},type:"button",children:"Cancel"}),(0,D.jsx)(h.Z,{kind:"success",onClick:function(){ae(!1)},type:"button",children:"Save"})]})]}):(0,D.jsx)("div",{className:"cursor-pointer",dangerouslySetInnerHTML:{__html:a.description},onClick:function(){ae(!0)}})]}),(0,D.jsx)("div",{className:" flex items-center justify-center",children:(0,D.jsx)(h.Z,{isLoading:r,type:"submit",className:" my-3",kind:"success",children:"Submit"})})]})})]})})}})},t)})),(0,D.jsxs)("div",{className:"w-full overflow-x-auto overflow-y-hidden",children:[(0,D.jsxs)("div",{className:" bg-white rounded-3xl flex items-center justify-between py-8 px-10",children:[(0,D.jsx)("div",{className:"w-2/12 hover:w-2/6 focus-within:w-2/6  transition-all ease-out",children:(0,D.jsx)(p.Z,{onChange:function(e){ne(e.currentTarget.value)}})}),(0,D.jsx)(h.Z,{type:"button",href:"/add-project",kind:"secondary",className:"bg-secondary bg-opacity-20 text-secondary",children:"Create project"})]}),z?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("table",{className:"table-project",children:[(0,D.jsx)("thead",{children:(0,D.jsxs)("tr",{children:[(0,D.jsx)("th",{children:"Id"}),(0,D.jsx)("th",{children:"Project name"}),(0,D.jsx)("th",{children:"Category name"}),(0,D.jsx)("th",{children:"Creator"}),(0,D.jsx)("th",{children:"Members"}),(0,D.jsx)("th",{children:"Actions"})]})}),(0,D.jsx)("tbody",{children:null===(Re=Ie,t=null===Re||void 0===Re?void 0:Re.filter((function(e){var t;return null===(t=e.projectName)||void 0===t?void 0:t.toLowerCase().includes(te)})))||void 0===t?void 0:t.map((function(e){var t=e.members,n=e.creator,r=e.id,s=e.projectName,o=e.categoryName,a="D\u1ef1 \xe1n web"===o?"bg-green-100":"D\u1ef1 \xe1n ph\u1ea7n m\u1ec1m"===o?"bg-blue-100":"bg-orange-100",i="D\u1ef1 \xe1n web"===o?"text-green-500":"D\u1ef1 \xe1n ph\u1ea7n m\u1ec1m"===o?"text-blue-500":"text-orange-500";return(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:r}),(0,D.jsx)("td",{children:(0,D.jsx)(_.rU,{to:"/project-detail/".concat(r),className:"truncate text-secondary hover:underline cursor-pointer",children:s})}),(0,D.jsx)("td",{children:(0,D.jsx)("span",{className:"w-[100px] text-center rounded-lg px-2 py-1 ".concat(a," ").concat(i),children:o})}),(0,D.jsx)("td",{className:"truncate",children:n.name}),(0,D.jsx)("td",{children:(0,D.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,D.jsx)(u.C.Group,{maxCount:2,maxStyle:{color:"#f56a00",backgroundColor:"#fde3cf"},children:t.map((function(e){var t=e.name,n=e.avatar,r=e.userId;return(0,D.jsx)(x.Z,{title:t,placement:"top",children:(0,D.jsx)(u.C,{src:(0,D.jsx)("img",{src:n,alt:"".concat(t," avatar")})})},r)}))}),(0,D.jsx)("span",{onClick:function(){ge(r)},className:"w-[32px] h-[32px] cursor-pointer rounded-full border border-dashed flex items-center justify-center text-text3 border-text3 hover:text-text2 hover:border-text2 select-none transition-all",children:(0,D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,D.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]})}),(0,D.jsx)("td",{children:(0,D.jsxs)("div",{className:"flex items-center text-gray-500 ",children:[(0,D.jsx)("span",{onClick:function(){be(r)},children:(0,D.jsx)(d.Z,{})}),(0,D.jsx)("span",{onClick:function(){we(r)},children:(0,D.jsx)(l.Z,{})})]})})]},r)}))})]}),(0,D.jsx)("div",{className:"flex items-center justify-end my-5",children:(0,D.jsx)(m.Z,{hideOnSinglePage:!0,defaultCurrent:1,onChange:function(e){Le(e),Fe(null===z||void 0===z?void 0:z.slice(6*(e-1),6*(e-1)+6))},current:Ce,pageSize:6,total:z.length,className:"pl-5 ml-5"})})]}):(0,D.jsx)("div",{className:"flex justify-center items-center bg-lite h-[400px]",children:(0,D.jsxs)("div",{className:"loader bg-lite p-5 rounded-full flex space-x-3",children:[(0,D.jsx)("div",{className:"w-5 h-5 bg-error rounded-full animate-bounce"}),(0,D.jsx)("div",{className:"w-5 h-5 bg-primary rounded-full animate-bounce"}),(0,D.jsx)("div",{className:"w-5 h-5 bg-blue-500 rounded-full animate-bounce"})]})})]})]})}}}]);
//# sourceMappingURL=814.5b6cb16d.chunk.js.map