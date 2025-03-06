/*! For license information please see 800.js.LICENSE.txt */
"use strict";(self.webpackChunkbedward_management=self.webpackChunkbedward_management||[]).push([[411,800],{2064:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var n=r(318),o=r.n(n),a=r(5338),i=r(7319),c=r(8330),l=r(9118),u=r(3619),s=r(4455);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var p=l.Tabs.TabPane;const d=function(e){var t,r,a=e.navigate,i=(t=(0,n.useState)("ward-occupancy"),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,r)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=i[0],d=i[1];return o().createElement("div",{className:"p-3 mb-5",style:{width:"100%",height:"100%",overflow:"auto"}},o().createElement(l.Tabs,{activeKey:c,onChange:d,type:"card"},o().createElement(p,{tab:"Ward Occupancy",key:"ward-occupancy"},o().createElement(u.A,{navigate:a})),o().createElement(p,{tab:"Bed Occupancy",key:"bed-occupancy"},o().createElement(s.A,null))))};var h=r(9199),m=r(4202);const g=function(e){var t=e.handleClose;return React.createElement(h.Dialog,{fullWidth:!0,open:!0,onClose:t,maxWidth:"sm"},React.createElement(h.DialogContent,null,React.createElement(h.Box,{sx:{padding:2,backgroundColor:"#fff",borderRadius:1}},React.createElement(h.Typography,{variant:"h6",align:"center",sx:{marginBottom:2}},"Bed Management Details"),React.createElement(h.Box,{sx:{display:"flex",flexDirection:"column",gap:1}},React.createElement(h.Typography,{variant:"body1"},React.createElement("strong",null,"Ward:")," ","ER"),React.createElement(h.Typography,{variant:"body1"},React.createElement("strong",null,"Room:")," ","Emergency Observation"),React.createElement(h.Typography,{variant:"body1"},React.createElement("strong",null,"Bed No:")," ","BED1"),React.createElement(h.Typography,{variant:"body1"},React.createElement("strong",null,"Bed Type:")," ","Bed Electronic"),React.createElement(h.Typography,{variant:"body1"},React.createElement("strong",null,"Rate:")," ","5 AED")),React.createElement(h.Box,{sx:{textAlign:"center",marginTop:2}},React.createElement(h.Button,{variant:"outlined",color:"primary",onClick:t},"Close")))))};function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var w=[{roomNumber:123,category:"Normal",bedType:"Bed Electronic",status:"Vacant",ward:"ER",room:"Emergency Observation"},{roomNumber:124,category:"Isolation",bedType:"Neonatal Warmer Bed",status:"Admitted",ward:"ER",room:"Emergency Observation",bedNo:"BED1",rate:"5 AED"},{roomNumber:125,category:"Intensive care",bedType:"Operating Table",status:"Pre Discharge",ward:"ER",room:"Emergency Observation",bedNo:"BED1",rate:"5 AED"},{roomNumber:126,category:"Normal",bedType:"Resuscitation Bed",status:"Patient Reservation",ward:"ER",room:"Emergency Observation",bedNo:"BED1",rate:"5 AED"}];const x=function(){var e=(0,i.useParams)().name,t=(0,i.useLocation)().state.wardName;console.log("name:",t);var r=v((0,n.useState)(""),2),a=r[0],c=r[1],l=v((0,n.useState)(""),2),u=l[0],s=l[1],f=v((0,n.useState)("All"),2),p=f[0],d=f[1],y=v((0,n.useState)(!1),2),x=y[0],b=y[1],E=v((0,n.useState)(null),2),k=E[0],B=E[1],L=w.filter((function(e){var t=!a||e.category===a,r=!u||e.bedType===u,n="All"===p||e.status===p;return t&&r&&n})),S=function(e){switch(e){case"Vacant":return"#81C784";case"Admitted":return"#4FC3F7";case"Pre Discharge":return"#FFAB91";case"Patient Reservation":return"#F06292";case"Blocked":return"#BDBDBD";default:return"#000000"}};return o().createElement(h.Box,{p:1},o().createElement("h6",null,"Bed Management - ",e," Ward"),o().createElement(h.Box,{mt:3,sx:{display:"flex",flexDirection:"row",gap:2,justifyContent:"space-between",backgroundColor:"#f9f9f9",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",padding:"15px",borderRadius:"12px",margin:"20px auto"}},o().createElement(h.FormControl,{fullWidth:!0,size:"small",sx:{width:"20%"}},o().createElement(h.InputLabel,{id:"room-category-label"},"Room Category"),o().createElement(h.Select,{labelId:"room-category-label",value:a,onChange:function(e){return c(e.target.value)},label:"Room Category"},["Normal","Isolation","Intensive care"].map((function(e,t){return o().createElement(h.MenuItem,{key:t,value:e},e)})))),o().createElement(h.FormControl,{fullWidth:!0,size:"small",sx:{width:"20%"}},o().createElement(h.InputLabel,{id:"bed-type-label"},"Bed Type"),o().createElement(h.Select,{labelId:"bed-type-label",value:u,onChange:function(e){return s(e.target.value)},label:"Bed Type"},["Bed Electronic","Resuscitation Bed","Neonatal Warmer Bed","Bed Bassinet","Bed Incubator","Bed Stretcher","Operating Table"].map((function(e,t){return o().createElement(h.MenuItem,{key:t,value:e},e)})))),o().createElement(h.Box,null,o().createElement(h.Button,{variant:"contained",color:"primary",onClick:function(){alert("Room Category: ".concat(a||"Not Selected","\nBed Type: ").concat(u||"Not Selected"))},sx:{alignSelf:{xs:"stretch",sm:"flex-start"}}},"Search"))),o().createElement(h.Box,{display:"flex",gap:3,my:3},[{label:"All",color:"#000000"},{label:"Vacant",color:"#81C784"},{label:"Admitted",color:"#4FC3F7"},{label:"Pre Discharge",color:"#FFAB91"},{label:"Patient Reservation",color:"#F06292"},{label:"Blocked",color:"#BDBDBD"}].map((function(e){return o().createElement(h.Typography,{key:e.label,variant:"body1",sx:{cursor:"pointer",padding:"5px 10px",borderRadius:"10px",fontSize:"small",backgroundColor:p===e.label?e.color:"transparent",color:p===e.label?"#fff":e.color,border:"1px solid ".concat(e.color),fontWeight:p===e.label?"bold":"normal",transition:"all 0.3s ease","&:hover":{backgroundColor:(e.label,e.color),color:"#fff",transform:"scale(1.05)"}},onClick:function(){return d(e.label)}},e.label)}))),o().createElement(h.Box,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#f9f9f9",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",padding:"15px",borderRadius:"12px",margin:"20px auto"}},o().createElement(h.Box,{sx:{marginTop:"10px",width:"100%",display:"flex",flexDirection:"row",gap:"15px"}},L.length>0?L.map((function(e,t){return o().createElement(h.Box,{key:t,sx:{display:"flex",alignItems:"center",gap:"10px",border:"1px solid #ccc",borderRadius:"10px",padding:"10px",backgroundColor:"#fff",cursor:"pointer",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)","&:hover":{backgroundColor:"#f1f1f1"}},onClick:function(){return function(e){B(e),b(!0)}(e)}},o().createElement(m.A,{sx:{fontSize:"40px",color:S(e.status)}}),o().createElement(h.Box,null,o().createElement(h.Typography,{variant:"body1"},"Ward: ",e.ward),o().createElement(h.Typography,{variant:"body2"},"Room: ",e.room),o().createElement(h.Typography,{variant:"body2"},"Bed No: ",e.bedNo)," ",o().createElement(h.Typography,{variant:"body2"},"Type: ",e.bedType),o().createElement(h.Typography,{variant:"body2"},"Rate: ",e.rate)))})):o().createElement(h.Typography,null,"No beds available matching the filters."))),x&&o().createElement(g,{bed:k,handleClose:function(){b(!1)}}))};var b=r(7568),E=r.n(b),k=r(5072),B=r.n(k),L=r(7825),S=r.n(L),A=r(7659),O=r.n(A),C=r(5056),R=r.n(C),T=r(540),j=r.n(T),N=r(1113),_=r.n(N),P=r(8972),D={};D.styleTagTransform=_(),D.setAttributes=R(),D.insert=O().bind(null,"head"),D.domAPI=S(),D.insertStyleElement=j(),B()(P.A,D),P.A&&P.A.locals&&P.A.locals,r(2225),r(8736);var I=function(){return o().createElement(i.BrowserRouter,null,o().createElement(i.Routes,null,o().createElement(i.Route,{path:"/",element:o().createElement(d,null)},o().createElement(i.Route,{path:"ward-occupancy",element:o().createElement(u.A,null)}),o().createElement(i.Route,{path:"bed-occupancy",element:o().createElement(s.A,null)}),o().createElement(i.Route,{index:!0,element:o().createElement(i.Navigate,{to:"ward-occupancy"})}),o().createElement(i.Route,{path:"/ward-occupancy/:name",element:o().createElement(x,null)}))))};a.createRoot(document.getElementById("bed-ward-app")).render(o().createElement(c.Provider,{store:E()},o().createElement(I,null)));const F=I},9678:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(996),o=r.n(n)().create({baseURL:"http://ec2-13-49-23-128.eu-north-1.compute.amazonaws.com:8080/app/",headers:{"Content-Type":"application/json",Accept:"application/json"}});o.interceptors.request.use((function(e){var t=localStorage.getItem("authToken");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)}));const a=o},4167:(e,t,r)=>{r.d(t,{S:()=>n});var n={WARD_OCCUPANCY:"ward/getAlloccupancy",BED_OCCUPANCY:"bed/ward"}},1454:(e,t,r)=>{r.d(t,{v:()=>u});var n=r(4374),o=r(9678),a=r(4167);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(){c=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},l=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,r){return e[t]=r}}function p(e,t,r,n){var a=t&&t.prototype instanceof w?t:w,i=Object.create(a.prototype),c=new j(n||[]);return o(i,"_invoke",{value:O(e,r,c)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=p;var h="suspendedStart",m="suspendedYield",g="executing",v="completed",y={};function w(){}function x(){}function b(){}var E={};f(E,l,(function(){return this}));var k=Object.getPrototypeOf,B=k&&k(k(N([])));B&&B!==r&&n.call(B,l)&&(E=B);var L=b.prototype=w.prototype=Object.create(E);function S(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function A(e,t){function r(o,a,c,l){var u=d(e[o],e,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==i(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,c,l)}),(function(e){r("throw",e,c,l)})):t.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,l)}))}l(u.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function O(t,r,n){var o=h;return function(a,i){if(o===g)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=C(c,n);if(l){if(l===y)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=g;var u=d(t,r,n);if("normal"===u.type){if(o=n.done?v:m,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function C(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=d(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function R(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function N(t){if(t||""===t){var r=t[l];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(i(t)+" is not iterable")}return x.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:x,configurable:!0}),x.displayName=f(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,f(e,s,"GeneratorFunction")),e.prototype=Object.create(L),e},t.awrap=function(e){return{__await:e}},S(A.prototype),f(A.prototype,u,(function(){return this})),t.AsyncIterator=A,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new A(p(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(L),f(L,s,"Generator"),f(L,l,(function(){return this})),f(L,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function l(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}var u=(0,n.createAsyncThunk)("bed/bedOccupancy",function(){var e,t=(e=c().mark((function e(t,r){var n,i,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,o.A.get(a.S.BED_OCCUPANCY,{params:t});case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(null===(l=e.t0.response)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){l(a,n,o,i,c,"next",e)}function c(e){l(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(e,r){return t.apply(this,arguments)}}());(0,n.createSlice)({name:"bedOccupancy",initialState:{bedOccupancyData:[],loading:!1,error:null},reducers:{},extraReducers:function(e){e.addCase(u.pending,(function(e){e.loading=!0,e.error=null})).addCase(u.fulfilled,(function(e,t){e.loading=!1,e.bedOccupancyData=t.payload.data})).addCase(u.rejected,(function(e,t){e.loading=!1,e.error=t.payload}))}}).reducer},4216:(e,t,r)=>{r.d(t,{u:()=>u});var n=r(4374),o=r(9678),a=r(4167);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(){c=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},l=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,r){return e[t]=r}}function p(e,t,r,n){var a=t&&t.prototype instanceof w?t:w,i=Object.create(a.prototype),c=new j(n||[]);return o(i,"_invoke",{value:O(e,r,c)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=p;var h="suspendedStart",m="suspendedYield",g="executing",v="completed",y={};function w(){}function x(){}function b(){}var E={};f(E,l,(function(){return this}));var k=Object.getPrototypeOf,B=k&&k(k(N([])));B&&B!==r&&n.call(B,l)&&(E=B);var L=b.prototype=w.prototype=Object.create(E);function S(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function A(e,t){function r(o,a,c,l){var u=d(e[o],e,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==i(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,c,l)}),(function(e){r("throw",e,c,l)})):t.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,l)}))}l(u.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function O(t,r,n){var o=h;return function(a,i){if(o===g)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=C(c,n);if(l){if(l===y)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=g;var u=d(t,r,n);if("normal"===u.type){if(o=n.done?v:m,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function C(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=d(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function R(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function N(t){if(t||""===t){var r=t[l];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(i(t)+" is not iterable")}return x.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:x,configurable:!0}),x.displayName=f(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,f(e,s,"GeneratorFunction")),e.prototype=Object.create(L),e},t.awrap=function(e){return{__await:e}},S(A.prototype),f(A.prototype,u,(function(){return this})),t.AsyncIterator=A,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new A(p(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(L),f(L,s,"Generator"),f(L,l,(function(){return this})),f(L,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function l(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}var u=(0,n.createAsyncThunk)("ward/wardOccupancy",function(){var e,t=(e=c().mark((function e(t,r){var n,i,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,o.A.get(a.S.WARD_OCCUPANCY,{params:t});case 4:return i=e.sent,e.abrupt("return",i.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(null===(l=e.t0.response)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){l(a,n,o,i,c,"next",e)}function c(e){l(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(e,r){return t.apply(this,arguments)}}());(0,n.createSlice)({name:"wardOccupancy",initialState:{wardOccupancyData:[],loading:!1,error:null},reducers:{},extraReducers:function(e){e.addCase(u.pending,(function(e){e.loading=!0,e.error=null})).addCase(u.fulfilled,(function(e,t){e.loading=!1,console.log("ward respose data:",t.payload.data),e.wardOccupancyData=t.payload.data})).addCase(u.rejected,(function(e,t){e.loading=!1,e.error=t.payload}))}}).reducer},8972:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(1601),o=r.n(n),a=r(6314),i=r.n(a)()(o());i.push([e.id,"body {\n  font-size: 1em !important;\n  font-family: system-ui !important;\n  margin: 0 !important;\n  padding: 0;\n  box-sizing: border-box;\n}",""]);const c=i},3385:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e"},5782:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e"},4718:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e"},7154:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e"},8734:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e"},5372:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e"},7249:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e"},6690:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},5932:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e"},1144:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},7210:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e"},7326:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e"},5531:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e"},7115:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e"},4274:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e"},5419:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e"},6366:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"},2247:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"},8487:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e"}}]);