(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){e.exports=a(88)},52:function(e,t,a){},55:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=a(20),i=a(21),s=a(25),u=a(22),m=a(26),f=(a(52),a(13)),d=a(16),E=a(9),v=a(89);function p(e){return"number"===typeof e}function g(e){return"function"===typeof e}var b="O campo est\xe1 vazio";function h(e){var t=e.onBlur,a=e.onFocus,l=e.onChange,c=e.onKeyPress,o=e.error,i=e.visibleError,s=e.invalidMessage,u=e.setAShowError,m=e.setAnError,f=e.setAData,d=Object(E.a)(e,["onBlur","onFocus","onChange","onKeyPress","error","visibleError","invalidMessage","setAShowError","setAnError","setAData"]);function p(){var e=d.name;g(u)&&(o?i||u(e,!0):i&&u(e,!1))}function h(){var e=d.required,t=d.value;if("undefined"!==typeof t&&null!==t){var a,n=function(e){return"string"===typeof e}(a=t.trim())&&0===a.length;if(!(!e&&n))e&&n?function(){var e=d.name;o!==b&&g(m)&&m(e,b)}():s?function(){var e=d.name;s!==o&&g(m)&&m(e,s)}():function(){var e=d.name;o&&g(m)&&m(e,"")}()}}return Object(n.useEffect)(function(){h()}),r.a.createElement(v.a,Object.assign({onFocus:function(e){g(a)&&a(e),function(){var e=d.name;g(u)&&i&&u(e,!1)}()},onChange:function(e){g(l)&&l(e);var t=e.target,a=t.name,n=t.value;g(f)&&f(a,n)},onBlur:function(e){g(t)&&t(e),p()},onKeyPress:function(e){g(c)&&c(e),"Enter"===e.key&&p()}},d))}h.defaultProps={value:"",type:"text",invalidMessage:""};var O=a(12);a(24);function y(e){var t,a=e.invalidMessage,n=e.invalidMessageAbove,l=e.invalidMessageBelow,c=e.setAData,o=e.value,i=Object(E.a)(e,["invalidMessage","invalidMessageAbove","invalidMessageBelow","setAData","value"]),s=i.min,u=i.max,m="";return p(o)?"undefined"!==typeof u&&u<o?m=n(u):"undefined"!==typeof s&&o<s&&(m=l(s)):m=a,r.a.createElement(h,Object.assign({invalidMessage:m,setAData:function(e,t){return c(e,function(e){var t=e.replace(/[^0-9.]/g,"");return""===t?"":Number(t)}(t))},value:(t=o,String(t))},i))}y.defaultProps={type:"number",invalidMessage:"N\xfamero inv\xe1lido",invalidMessageAbove:function(e){return"O n\xfamero deve ser igual ou abaixo de ".concat(e)},invalidMessageBelow:function(e){return"O n\xfamero deve ser igual ou acima de ".concat(e)}};var j=a(90);a(55);function w(e){return r.a.createElement("header",{className:"Header navbar navbar-dark bg-dark box-shadow"},r.a.createElement(j.a,null,r.a.createElement("h2",null,r.a.createElement(f.b,{to:"/"},"Sa\xfade em pontos"))))}var x=a(91),S=a(92),k=a(98),A=a(93);function N(e){var t=e.toggleTooltip,a=e.tooltipOpened,n=e.tooltipMessage,l=void 0===n?"":n,c=e.disabled,o=e.children;return r.a.createElement(x.a,null,r.a.createElement(S.a,{className:"form-group"},r.a.createElement(k.a,{isOpen:a,target:"submit",toggle:t},l),r.a.createElement(A.a,{id:"submit",className:"w-100",type:"submit",disabled:c},o||"Enviar")))}var _=a(14),D=a(96);function M(e){return e.displayName||e.name||"Component"}var P=a(94),C=a(95),z=a(99);function R(e){var t=e.className,a=e.children,n=e.renderInput,l=e.error,c=e.visibleError,o=Object(E.a)(e,["className","children","renderInput","error","visibleError"]),i=["form-group",t].join(" ");return r.a.createElement(P.a,Object.assign({className:i},o),r.a.createElement(x.a,null,r.a.createElement(C.a,{className:"col-form-label col-12 col-sm-4"},a),r.a.createElement("div",{className:"col-12 col-sm-8 d-flex align-items-center"},n&&n())),r.a.createElement(x.a,{className:c?"":"hide"},r.a.createElement(S.a,null,r.a.createElement(z.a,{color:"danger"},l||"_"))))}R.defaultProps={className:""};var B=function(e,t){var a=function(a){function n(e){var a;return Object(o.a)(this,n),(a=Object(s.a)(this,Object(u.a)(n).call(this,e)))._setAShowError=function(e,t){var n=a.state.visibleErrors;n[e]=t,a._handleShowErrors(n)},a._setAnError=function(e,t){var n=a.state.errors;n[e]=t,a._handleErrors(n)},a._setAData=function(e,t){var n=a.state.data;n[e]=t,a._handleData(n)},a._gets=function(e){var t=a.state,n=t.data,r=t.errors,l=t.visibleErrors;return{name:e,value:n[e],error:r[e],visibleError:l[e]}},a._handleSubmit=function(e){e&&e.preventDefault();var t=a.state,n=t.data,r=t.errors;return t.submittingForm?Promise.resolve(n):(a._handleSubmittingForm(!0),new Promise(function(e,t){return a._handleSubmittingForm(!1),a._isFormValid()?e(n):(a._showAllErrors(),t(r))}))},a._handleData=function(e){a.setState({data:e})},a.state={submittingForm:!1,errors:{},visibleErrors:{},data:t||{}},a}return Object(m.a)(n,a),Object(i.a)(n,[{key:"_handleSubmittingForm",value:function(e){this.setState({submittingForm:e})}},{key:"_handleErrors",value:function(e){this.setState({errors:e})}},{key:"_handleShowErrors",value:function(e){this.setState({visibleErrors:e})}},{key:"_showAllErrors",value:function(){var e=this,t=this.state.errors;Object.entries(t).forEach(function(t){var a=Object(O.a)(t,2),n=a[0],r=a[1];e._setAShowError(n,Boolean(r))})}},{key:"_isFormValid",value:function(){var e=this.state.errors;return Object.values(e).every(function(e){return!e[1]})}},{key:"render",value:function(){var t=this.state,a=t.data,n=t.errors,l=t.submittingForm,c=t.visibleErrors;return r.a.createElement(e,Object.assign({submittingForm:l,data:a,errors:n,visibleErrors:c,setAData:this._setAData,onSubmit:this._handleSubmit,setAnError:this._setAnError,setAShowError:this._setAShowError,setData:this._handleData,gets:this._gets,sets:this.sets},this.props))}},{key:"sets",get:function(){return{setAnError:this._setAnError,setAShowError:this._setAShowError,setAData:this._setAData}}}]),n}(n.Component);return a.displayName="Form(".concat(M(e),")"),a}(function(e){var t=e.setData,a=e.initialData,l=e.onSubmit,c=e.gets,o=e.sets,i=e.errors,s=e.visibleErrors,u=e.send,m=Object(n.useState)({}),f=Object(O.a)(m,2),d=f[0],E=f[1];return Object(n.useEffect)(function(){a!==d&&(E(a),t(Object(_.a)({},a)))}),r.a.createElement(D.a,{onSubmit:function(e){e.preventDefault(),l().then(u).catch(function(e){return console.log("catch",e)})},noValidate:!0},r.a.createElement(R,{error:i.nome,visibleError:s.nome,renderInput:function(e){return r.a.createElement(h,Object.assign({},c("nome"),o,{required:!0},e))}},"Nome*"),r.a.createElement(R,{error:i.calorias,visibleError:s.calorias,renderInput:function(e){return r.a.createElement(y,Object.assign({},c("calorias"),o,{required:!0,min:0},e))}},"Calorias*"),r.a.createElement(R,{error:i.indiceGlicemico,visibleError:s.indiceGlicemico,renderInput:function(e){return r.a.createElement(y,Object.assign({},c("indiceGlicemico"),o,{required:!0,min:0},e))}},"\xcdndice glic\xeamico*"),r.a.createElement(R,{error:i.acidificacao,visibleError:s.acidificacao,renderInput:function(e){return r.a.createElement(y,Object.assign({},c("acidificacao"),o,{required:!0,min:0},e))}},"Acidifica\xe7\xe3o*"),r.a.createElement(R,{error:i.inflamatorio,visibleError:s.inflamatorio,renderInput:function(e){return r.a.createElement(y,Object.assign({},c("inflamatorio"),o,{required:!0,min:0},e))}},"Inflamat\xf3rio*"),r.a.createElement(R,{error:i.descricao,visibleError:s.descricao,renderInput:function(e){return r.a.createElement(h,Object.assign({},c("descricao"),o,e))}},"Descri\xe7\xe3o"),r.a.createElement(N,null))},{nome:"",calorias:"",indiceGlicemico:"",acidificacao:"",inflamatorio:"",descricao:""}),F=a(97);function I(e){var t=e.onDelete,a=e.onEdit,n=e.list,l=void 0===n?[]:n,c=e.columns,o=Object(E.a)(e,["onDelete","onEdit","list","columns"]);return r.a.createElement(F.a,Object.assign({hover:!0,size:"sm"},o),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,c[0]),r.a.createElement("th",null,c[1]),r.a.createElement("th",null))),r.a.createElement("tbody",null,l.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.column1),r.a.createElement("td",null,e.column2),r.a.createElement("td",null,r.a.createElement("span",{onClick:function(){return a(e)}},"editar"),r.a.createElement("span",{onClick:function(){return t(e.id)}}," excluir")))})))}function L(e){var t=e.list,a=Object(E.a)(e,["list"]);return r.a.createElement(I,Object.assign({columns:["Nome","Calorias"],list:t.map(function(e){return Object(_.a)({column1:e.nome,column2:e.calorias},e)})},a))}var q=a(28),H=a.n(q),G="";function T(e,t){function a(a){var l=Object(n.useState)([]),c=Object(O.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)({}),u=Object(O.a)(s,2),m=u[0],f=u[1];function d(){H.a.get("".concat(G,"/").concat(t)).then(function(e){i(e.data)})}return Object(n.useEffect)(function(){d()},[]),r.a.createElement(e,Object.assign({send:function(e){var a=new Headers,n=Object.entries(m).length>0?"put":"post",r=e.id;a.append("Content-Type","application/json"),H.a[n]("".concat(G,"/").concat(t).concat(r?"/".concat(r):""),e).then(function(e){d(),f({})})},handleDelete:function(e){H.a.delete("".concat(G,"/").concat(t,"/").concat(e)).then(function(e){d()})},handleEdit:function(e){f(Object(_.a)({},e))},table:o,form:m},a))}return a.displayName="Domain(".concat(M(e),")"),a}var V=T(function(e){var t=e.send,a=e.form,n=e.handleEdit,l=e.handleDelete,c=e.table;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Cadastro de Alimento"),r.a.createElement(B,{send:t,initialData:a}),r.a.createElement(L,{onEdit:n,onDelete:l,list:c}))},"alimento");function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var W=r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M26.12,14.488c0.879-1.468,2.27-3.569,4.027-5.585h0.002c1.488-1.711,4.402-3.907,4.402-3.907 c0.438-0.331,0.391-0.792-0.107-1.024l-3.522-1.646c-0.498-0.233-1.175-0.063-1.505,0.376c0,0-2.605,3.737-5.671,11.692 c-9.48-4.288-18.491,1.718-18.491,12.162c0,10.909,8.393,27.48,19.743,22.478c11.954,5.173,19.749-11.568,19.749-22.478 C44.747,16.022,36.647,9.846,26.12,14.488z"}),r.a.createElement("path",{d:"M23.997,10.955c0.548-0.046,1.032-0.531,1.076-1.078c0,0,0.352-4.266-2.621-7.242c-2.982-2.977-7.24-2.622-7.24-2.622 c-0.548,0.046-1.032,0.531-1.077,1.078c0,0-0.358,4.268,2.619,7.245C19.729,11.31,23.997,10.955,23.997,10.955z"}))),$=r.a.createElement("g",null),Q=r.a.createElement("g",null),U=r.a.createElement("g",null),X=r.a.createElement("g",null),Y=r.a.createElement("g",null),Z=r.a.createElement("g",null),ee=r.a.createElement("g",null),te=r.a.createElement("g",null),ae=r.a.createElement("g",null),ne=r.a.createElement("g",null),re=r.a.createElement("g",null),le=r.a.createElement("g",null),ce=r.a.createElement("g",null),oe=r.a.createElement("g",null),ie=r.a.createElement("g",null),se=function(e){var t=e.svgRef,a=J(e,["svgRef"]);return r.a.createElement("svg",K({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 50 50.001",style:{enableBackground:"new 0 0 50 50.001"},xmlSpace:"preserve",ref:t},a),W,$,Q,U,X,Y,Z,ee,te,ae,ne,re,le,ce,oe,ie)},ue=r.a.forwardRef(function(e,t){return r.a.createElement(se,K({svgRef:t},e))});a.p;function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var de=r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M498.682,435.326L297.917,234.56L63.357,0H45.026l-3.743,9.511c-9.879,25.104-14.1,50.78-12.205,74.249 c2.16,26.752,12.323,49.913,29.392,66.982L241.58,333.852l24.152-24.152l169.285,189.293c16.84,16.84,45.825,17.84,63.665,0 C516.236,481.439,516.236,452.879,498.682,435.326z"}))),Ee=r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M156.728,291.442L13.317,434.853c-17.552,17.552-17.552,46.113,0,63.665c16.674,16.674,45.519,18.146,63.665,0 l143.412-143.412L156.728,291.442z"}))),ve=r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M490.253,85.249l-81.351,81.35l-21.223-21.222l81.351-81.351l-21.222-21.222l-81.35,81.35l-21.222-21.222l81.351-81.35 L405.366,0.361L299.256,106.471c-12.981,12.981-20.732,30.217-21.828,48.535c-0.277,4.641-1.329,9.206-3.074,13.548l68.929,68.929 c4.342-1.747,8.908-2.798,13.548-3.075c18.318-1.093,35.554-8.846,48.535-21.827l106.11-106.109L490.253,85.249z"}))),pe=function(e){var t=e.svgRef,a=fe(e,["svgRef"]);return r.a.createElement("svg",me({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t},a),de,Ee,ve)},ge=r.a.forwardRef(function(e,t){return r.a.createElement(pe,me({svgRef:t},e))});a.p;function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function he(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Oe=r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M495.841,101.383h-13.617c0-25.469,0-19.966,0-45.595c0-4.715-3.822-8.537-8.537-8.537h-23.323 c-4.715,0-8.537,3.822-8.537,8.537c0,25.63,0,20.123,0,45.595h-29.811c1.243-13.058-8.373-24.492-21.113-25.839 c-13.105-1.382-24.726,8.197-26.09,21.099l-0.501,4.739h-41.088c-12.121,26.171-38.282,43.068-67.261,43.068 c-29.378,0-55.317-17.281-67.261-43.068h-40.938l-0.501-4.739c-1.375-12.998-13.102-22.474-26.09-21.1 c-12.723,1.347-22.358,12.768-21.113,25.841H70.171c0-25.469,0-19.966,0-45.595c0-4.715-3.822-8.537-8.537-8.537H38.311 c-4.715,0-8.537,3.822-8.537,8.537c0,25.63,0,20.123,0,45.595H16.159C7.234,101.383,0,108.617,0,117.542 c0,8.924,7.234,16.159,16.159,16.159h13.616c0,25.469,0,19.966,0,45.595c0,4.715,3.823,8.537,8.537,8.537h23.323 c4.715,0,8.537-3.823,8.537-8.537c0-25.63,0-20.123,0-45.595h33.291c1.023,9.669,8.253,78.036,9.321,88.147 c2.145,20.289,27.705,28.867,41.462,13.117l33.346-38.161v90.784l-86.282,35.055c-10.072,4.092-17.246,13.183-18.886,23.93 L65.21,459.425c-2.57,16.845,9.002,32.582,25.846,35.151s32.582-9.002,35.151-25.846l14.572-95.523l79.818-32.429h70.854 l79.818,32.429l14.572,95.523c2.57,16.846,18.307,28.415,35.151,25.846c16.844-2.57,28.415-18.307,25.846-35.151l-17.215-112.853 c-1.64-10.747-8.814-19.837-18.886-23.93l-86.966-35.334V195.99l34.055,38.974c13.39,15.326,39.255,7.732,41.462-13.117 c1.067-10.094,8.302-78.495,9.323-88.147h33.217c0,25.469,0,19.966,0,45.595c0,4.715,3.823,8.537,8.537,8.537h23.323 c4.715,0,8.537-3.823,8.537-8.537c0-25.63,0-20.123,0-45.595h13.617c8.924,0,16.159-7.234,16.159-16.159 C512,108.617,504.766,101.383,495.841,101.383z M154.261,162.83c-1.279-12.098-1.815-17.155-3.081-29.13h28.534 C169.376,145.533,164.743,150.835,154.261,162.83z M357.812,162.83c-11.794-13.497,3.356,3.84-25.454-29.13h28.534 C358.5,156.32,359.089,150.748,357.812,162.83z"}))),ye=r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("circle",{cx:255.963,cy:70.351,r:53.284}))),je=r.a.createElement("g",null),we=r.a.createElement("g",null),xe=r.a.createElement("g",null),Se=r.a.createElement("g",null),ke=r.a.createElement("g",null),Ae=r.a.createElement("g",null),Ne=r.a.createElement("g",null),_e=r.a.createElement("g",null),De=r.a.createElement("g",null),Me=r.a.createElement("g",null),Pe=r.a.createElement("g",null),Ce=r.a.createElement("g",null),ze=r.a.createElement("g",null),Re=r.a.createElement("g",null),Be=r.a.createElement("g",null),Fe=function(e){var t=e.svgRef,a=he(e,["svgRef"]);return r.a.createElement("svg",be({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t},a),Oe,ye,je,we,xe,Se,ke,Ae,Ne,_e,De,Me,Pe,Ce,ze,Re,Be)},Ie=r.a.forwardRef(function(e,t){return r.a.createElement(Fe,be({svgRef:t},e))});a.p;function Le(){return(Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function qe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var He=r.a.createElement("path",{d:"m416 512c33.085938 0 60-26.914062 60-60h-120c0 33.085938 26.914062 60 60 60zm0 0"}),Ge=r.a.createElement("path",{d:"m256 512c33.085938 0 60-26.914062 60-60h-120c0 33.085938 26.914062 60 60 60zm0 0"}),Te=r.a.createElement("path",{d:"m96 512c33.085938 0 60-26.914062 60-60h-120c0 33.085938 26.914062 60 60 60zm0 0"}),Ve=r.a.createElement("path",{d:"m494 332h-476c-9.925781 0-18 8.074219-18 18v54c0 9.925781 8.074219 18 18 18h476c9.925781 0 18-8.074219 18-18v-54c0-9.925781-8.074219-18-18-18zm0 0"}),Ke=r.a.createElement("path",{d:"m45.90625 221.472656c-19.34375 22.945313-33.507812 50.390625-40.65625 80.527344h117.179688c-13.332032-36.199219-41.214844-65.414062-76.523438-80.527344zm0 0"}),Je=r.a.createElement("path",{d:"m497 0h-226c-8.285156 0-15 6.714844-15 15v45h78c8.285156 0 15 6.714844 15 15s-6.714844 15-15 15h-78v30h78c8.285156 0 15 6.714844 15 15s-6.714844 15-15 15h-78v2h-61c-48.3125 0-92.570312 17.671875-126.671875 46.878906 40.996094 21.027344 72.375 58.226563 85.6875 103.121094h357.984375v-287c0-8.285156-6.714844-15-15-15zm0 0"}),We=function(e){var t=e.svgRef,a=qe(e,["svgRef"]);return r.a.createElement("svg",Le({viewBox:"0 0 512 512",ref:t},a),He,Ge,Te,Ve,Ke,Je)},$e=r.a.forwardRef(function(e,t){return r.a.createElement(We,Le({svgRef:t},e))});a.p;function Qe(){return(Qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Ue(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Xe=r.a.createElement("path",{d:"m345.035156 89.195312c-28.445312 9.304688-58.390625 14.09375-89.035156 14.09375s-60.589844-4.789062-89.035156-14.09375c-18.746094 42.417969-40.335938 101.996094-40.335938 166.804688 0 64.8125 21.589844 124.390625 40.335938 166.804688 28.445312-9.304688 58.390625-14.09375 89.035156-14.09375s60.589844 4.789062 89.035156 14.09375c18.746094-42.417969 40.335938-101.996094 40.335938-166.804688 0-64.8125-21.589844-124.390625-40.335938-166.804688zm0 0"}),Ye=r.a.createElement("path",{d:"m437.019531 74.980469c-7.074219-7.074219-14.496093-13.667969-22.214843-19.796875-13.347657 8.9375-27.3125 16.664062-41.765626 23.164062 19.769532 44.945313 42.332032 107.976563 42.332032 177.652344 0 69.667969-22.5625 132.707031-42.335938 177.652344 14.457032 6.5 28.421875 14.226562 41.769532 23.164062 7.71875-6.128906 15.140624-12.722656 22.214843-19.796875 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531s-26.628906-132.667969-74.980469-181.019531zm0 0"}),Ze=r.a.createElement("path",{d:"m256 0c-47.304688 0-92.644531 12.75-132.109375 36.613281 39.769531 24.050781 85.015625 36.675781 132.109375 36.675781 47.097656 0 92.339844-12.625 132.109375-36.675781-39.464844-23.863281-84.804687-36.613281-132.109375-36.613281zm0 0"}),et=r.a.createElement("path",{d:"m74.980469 437.019531c7.074219 7.074219 14.5 13.667969 22.21875 19.796875 13.347656-8.9375 27.3125-16.664062 41.765625-23.164062-19.773438-44.945313-42.332032-107.980469-42.332032-177.652344s22.5625-132.707031 42.332032-177.65625c-14.453125-6.5-28.417969-14.222656-41.765625-23.160156-7.71875 6.128906-15.144531 12.722656-22.21875 19.792968-48.351563 48.355469-74.980469 112.644532-74.980469 181.023438s26.628906 132.667969 74.980469 181.019531zm0 0"}),tt=r.a.createElement("path",{d:"m388.109375 475.386719c-39.769531-24.050781-85.011719-36.675781-132.109375-36.675781-47.09375 0-92.339844 12.625-132.109375 36.675781 39.464844 23.863281 84.808594 36.613281 132.109375 36.613281 47.304688 0 92.644531-12.75 132.109375-36.613281zm0 0"}),at=function(e){var t=e.svgRef,a=Ue(e,["svgRef"]);return r.a.createElement("svg",Qe({viewBox:"0 0 512 512.001",ref:t},a),Xe,Ye,Ze,et,tt)},nt=r.a.forwardRef(function(e,t){return r.a.createElement(at,Qe({svgRef:t},e))});a.p;function rt(){return r.a.createElement("main",null,r.a.createElement(x.a,null,r.a.createElement(S.a,{xs:"6",sm:"4"},r.a.createElement(f.b,{to:"/alimento",className:"p-3 pb-4 d-block"},r.a.createElement("div",{className:"px-4 py-1"},r.a.createElement(ue,null)),r.a.createElement("h4",{className:"text-dark text-center mt-2"},"Alimento"))),r.a.createElement(S.a,{xs:"6",sm:"4"},r.a.createElement(f.b,{to:"/refeicao",className:"p-3 pb-4 d-block"},r.a.createElement("div",{className:"px-4 py-1"},r.a.createElement(ge,null)),r.a.createElement("h4",{className:"text-dark text-center mt-2"},"Refei\xe7\xe3o"))),r.a.createElement(S.a,{xs:"6",sm:"4"},r.a.createElement(f.b,{to:"/exercicio",className:"p-3 pb-4 d-block"},r.a.createElement("div",{className:"px-4 py-1"},r.a.createElement(Ie,null)),r.a.createElement("h4",{className:"text-dark text-center mt-2"},"Exerc\xedcio"))),r.a.createElement(S.a,{xs:"6",sm:"4"},r.a.createElement(f.b,{to:"/atividade-fisica",className:"p-3 pb-4 d-block"},r.a.createElement("div",{className:"px-4 py-1"},r.a.createElement($e,null)),r.a.createElement("h4",{className:"text-dark text-center mt-2"},"Atividade f\xedsica"))),r.a.createElement(S.a,{xs:"6",sm:"4"},r.a.createElement(f.b,{to:"/tipo-atividade-fisica",className:"p-3 pb-4 d-block"},r.a.createElement("div",{className:"px-4 py-1"},r.a.createElement(nt,null)),r.a.createElement("h4",{className:"text-dark text-center mt-2"},"Tipo de atividade f\xedsica")))))}function lt(e){var t=e.list,a=Object(E.a)(e,["list"]);return r.a.createElement(I,Object.assign({columns:["Nome","Multiplicador de intensidade"],list:t.map(function(e){return Object(_.a)({column1:e.nome,column2:e.multiplicadorIntensidade},e)})},a))}var ct=T(function(e){e.send,e.form;var t=e.handleEdit,a=e.handleDelete,n=e.table;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Cadastro de Tipo de atividade f\xedsica"),r.a.createElement(lt,{onEdit:t,onDelete:a,list:n}))},"tipo-atividade-fisica"),ot=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement(d.a,{path:"/",exact:!0,component:rt}),r.a.createElement(d.a,{path:"/alimento",component:V}),r.a.createElement(d.a,{path:"/tipo-atividade-fisica",component:ct})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.446e484f.chunk.js.map