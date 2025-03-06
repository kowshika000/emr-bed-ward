"use strict";(self.webpackChunkbedward_management=self.webpackChunkbedward_management||[]).push([[568],{4202:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(561),n=a(4848);const o=(0,r.A)((0,n.jsx)("path",{d:"M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22M14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1M5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5z"}),"Bed")},4981:(e,t,a)=>{a.d(t,{A:()=>n});var r=a(9199);const n=function(e){var t=e.handleClose;return React.createElement(r.Dialog,{fullWidth:!0,open:!0,onClose:t,maxWidth:"sm"},React.createElement(r.DialogContent,null,React.createElement(r.Box,{sx:{padding:2,backgroundColor:"#fff",borderRadius:1}},React.createElement(r.Typography,{variant:"h6",align:"center",sx:{marginBottom:2}},"Bed Management Details"),React.createElement(r.Box,{sx:{display:"flex",flexDirection:"column",gap:1}},React.createElement(r.Typography,{variant:"body1"},React.createElement("strong",null,"Ward:")," ","ER"),React.createElement(r.Typography,{variant:"body1"},React.createElement("strong",null,"Room:")," ","Emergency Observation"),React.createElement(r.Typography,{variant:"body1"},React.createElement("strong",null,"Bed No:")," ","BED1"),React.createElement(r.Typography,{variant:"body1"},React.createElement("strong",null,"Bed Type:")," ","Bed Electronic"),React.createElement(r.Typography,{variant:"body1"},React.createElement("strong",null,"Rate:")," ","5 AED")),React.createElement(r.Box,{sx:{textAlign:"center",marginTop:2}},React.createElement(r.Button,{variant:"outlined",color:"primary",onClick:t},"Close")))))}},6568:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var r=a(7319),n=a(318),o=a.n(n),l=a(9199),c=a(4202),i=a(4981);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,o,l,c=[],i=!0,d=!1;try{if(o=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;i=!1}else for(;!(i=(r=o.call(a)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){d=!0,n=e}finally{try{if(!i&&null!=a.return&&(l=a.return(),Object(l)!==l))return}finally{if(d)throw n}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}var s=[{roomNumber:123,category:"Normal",bedType:"Bed Electronic",status:"Vacant",ward:"ER",room:"Emergency Observation"},{roomNumber:124,category:"Isolation",bedType:"Neonatal Warmer Bed",status:"Admitted",ward:"ER",room:"Emergency Observation",bedNo:"BED1",rate:"5 AED"},{roomNumber:125,category:"Intensive care",bedType:"Operating Table",status:"Pre Discharge",ward:"ER",room:"Emergency Observation",bedNo:"BED1",rate:"5 AED"},{roomNumber:126,category:"Normal",bedType:"Resuscitation Bed",status:"Patient Reservation",ward:"ER",room:"Emergency Observation",bedNo:"BED1",rate:"5 AED"}];const m=function(){var e=(0,r.useParams)().name,t=(0,r.useLocation)().state.wardName;console.log("name:",t);var a=d((0,n.useState)(""),2),u=a[0],m=a[1],p=d((0,n.useState)(""),2),b=p[0],y=p[1],g=d((0,n.useState)("All"),2),f=g[0],x=g[1],E=d((0,n.useState)(!1),2),h=E[0],v=E[1],B=d((0,n.useState)(null),2),R=B[0],C=B[1],T=s.filter((function(e){var t=!u||e.category===u,a=!b||e.bedType===b,r="All"===f||e.status===f;return t&&a&&r})),A=function(e){switch(e){case"Vacant":return"#81C784";case"Admitted":return"#4FC3F7";case"Pre Discharge":return"#FFAB91";case"Patient Reservation":return"#F06292";case"Blocked":return"#BDBDBD";default:return"#000000"}};return o().createElement(l.Box,{p:1},o().createElement("h6",null,"Bed Management - ",e," Ward"),o().createElement(l.Box,{mt:3,sx:{display:"flex",flexDirection:"row",gap:2,justifyContent:"space-between",backgroundColor:"#f9f9f9",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",padding:"15px",borderRadius:"12px",margin:"20px auto"}},o().createElement(l.FormControl,{fullWidth:!0,size:"small",sx:{width:"20%"}},o().createElement(l.InputLabel,{id:"room-category-label"},"Room Category"),o().createElement(l.Select,{labelId:"room-category-label",value:u,onChange:function(e){return m(e.target.value)},label:"Room Category"},["Normal","Isolation","Intensive care"].map((function(e,t){return o().createElement(l.MenuItem,{key:t,value:e},e)})))),o().createElement(l.FormControl,{fullWidth:!0,size:"small",sx:{width:"20%"}},o().createElement(l.InputLabel,{id:"bed-type-label"},"Bed Type"),o().createElement(l.Select,{labelId:"bed-type-label",value:b,onChange:function(e){return y(e.target.value)},label:"Bed Type"},["Bed Electronic","Resuscitation Bed","Neonatal Warmer Bed","Bed Bassinet","Bed Incubator","Bed Stretcher","Operating Table"].map((function(e,t){return o().createElement(l.MenuItem,{key:t,value:e},e)})))),o().createElement(l.Box,null,o().createElement(l.Button,{variant:"contained",color:"primary",onClick:function(){alert("Room Category: ".concat(u||"Not Selected","\nBed Type: ").concat(b||"Not Selected"))},sx:{alignSelf:{xs:"stretch",sm:"flex-start"}}},"Search"))),o().createElement(l.Box,{display:"flex",gap:3,my:3},[{label:"All",color:"#000000"},{label:"Vacant",color:"#81C784"},{label:"Admitted",color:"#4FC3F7"},{label:"Pre Discharge",color:"#FFAB91"},{label:"Patient Reservation",color:"#F06292"},{label:"Blocked",color:"#BDBDBD"}].map((function(e){return o().createElement(l.Typography,{key:e.label,variant:"body1",sx:{cursor:"pointer",padding:"5px 10px",borderRadius:"10px",fontSize:"small",backgroundColor:f===e.label?e.color:"transparent",color:f===e.label?"#fff":e.color,border:"1px solid ".concat(e.color),fontWeight:f===e.label?"bold":"normal",transition:"all 0.3s ease","&:hover":{backgroundColor:(e.label,e.color),color:"#fff",transform:"scale(1.05)"}},onClick:function(){return x(e.label)}},e.label)}))),o().createElement(l.Box,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#f9f9f9",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",padding:"15px",borderRadius:"12px",margin:"20px auto"}},o().createElement(l.Box,{sx:{marginTop:"10px",width:"100%",display:"flex",flexDirection:"row",gap:"15px"}},T.length>0?T.map((function(e,t){return o().createElement(l.Box,{key:t,sx:{display:"flex",alignItems:"center",gap:"10px",border:"1px solid #ccc",borderRadius:"10px",padding:"10px",backgroundColor:"#fff",cursor:"pointer",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)","&:hover":{backgroundColor:"#f1f1f1"}},onClick:function(){return function(e){C(e),v(!0)}(e)}},o().createElement(c.A,{sx:{fontSize:"40px",color:A(e.status)}}),o().createElement(l.Box,null,o().createElement(l.Typography,{variant:"body1"},"Ward: ",e.ward),o().createElement(l.Typography,{variant:"body2"},"Room: ",e.room),o().createElement(l.Typography,{variant:"body2"},"Bed No: ",e.bedNo)," ",o().createElement(l.Typography,{variant:"body2"},"Type: ",e.bedType),o().createElement(l.Typography,{variant:"body2"},"Rate: ",e.rate)))})):o().createElement(l.Typography,null,"No beds available matching the filters."))),h&&o().createElement(i.A,{bed:R,handleClose:function(){v(!1)}}))}}}]);