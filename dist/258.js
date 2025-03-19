"use strict";(self.webpackChunkbedward_management=self.webpackChunkbedward_management||[]).push([[258],{2576:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(318),n=a.n(r),o=a(9199),l=a(4202),i=a(8056),d=a(8330),c=a(1454);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,o,l,i=[],d=!0,c=!1;try{if(o=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;d=!1}else for(;!(d=(r=o.call(a)).done)&&(i.push(r.value),i.length!==t);d=!0);}catch(e){c=!0,n=e}finally{try{if(!d&&null!=a.return&&(l=a.return(),Object(l)!==l))return}finally{if(c)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}const y=function(){var e=(0,d.useDispatch)(),t=s((0,r.useState)("All"),2),a=t[0],u=t[1],y=s((0,r.useState)(!1),2),p=y[0],m=y[1],b=s((0,r.useState)(null),2),g=b[0],f=b[1],B=s((0,r.useState)([]),2);B[0],B[1],(0,r.useEffect)((function(){e((0,c.v)())}),[]);var T=[{label:"All",color:"#000000"},{label:"Vacant",color:"#81C784"},{label:"Admitted",color:"#4FC3F7"},{label:"Pre Discharge",color:"#FFAB91"},{label:"Patient Reservation",color:"#F06292"},{label:"Blocked",color:"#BDBDBD"}],h="All"===a?i.A:i.A.filter((function(e){return e.status===a})),v=h.reduce((function(e,t){return e[t.wardType]||(e[t.wardType]=[]),e[t.wardType].push(t),e}),{});return n().createElement(o.Box,{p:3,sx:{backgroundColor:"#eef2f6",minHeight:"100vh"}},n().createElement(o.Box,{sx:{mb:4,p:2,backgroundColor:"#fff",boxShadow:2,borderRadius:2}},n().createElement(o.Box,{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2},n().createElement("h6",null,"Bed Details"),n().createElement(o.Typography,{variant:"body1",sx:{color:"#757575"}},"Total Beds: ",n().createElement("strong",null,h.length))),n().createElement(o.Box,{display:"flex",gap:2,flexWrap:"wrap"},T.map((function(e){return n().createElement(o.Typography,{key:e.label,variant:"body1",sx:{cursor:"pointer",padding:"5px 10px",borderRadius:"10px",fontSize:"small",backgroundColor:a===e.label?e.color:"transparent",color:a===e.label?"#fff":e.color,border:"1px solid ".concat(e.color),fontWeight:a===e.label?"bold":"normal",transition:"all 0.3s ease","&:hover":{backgroundColor:(e.label,e.color),color:"#fff",transform:"scale(1.05)"}},onClick:function(){return u(e.label)}},e.label)})))),Object.keys(v).map((function(e,t){return n().createElement(o.Box,{key:t,sx:{mb:3,p:2,backgroundColor:"#fff",boxShadow:2,borderRadius:2}},n().createElement("h6",{sx:{mb:2}},"Ward: ",e),n().createElement(o.Box,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}},v[e].map((function(e,t){var a,r;return n().createElement(o.Box,{key:t,sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"12px",backgroundColor:"#f9f9f9",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",margin:"10px",cursor:"pointer",padding:"10px",border:"2px solid ".concat((null===(a=T.find((function(t){return t.label===e.status})))||void 0===a?void 0:a.color)||"black")},onClick:function(){return function(e){f(e),m(!0)}(e)}},n().createElement(l.A,{sx:{fontSize:"50px",color:(null===(r=T.find((function(t){return t.label===e.status})))||void 0===r?void 0:r.color)||"black"}}),n().createElement(o.Box,null,n().createElement(o.Typography,{variant:"body1"},"Ward: ",e.ward),n().createElement(o.Typography,{variant:"body2"},"Room: ",e.room),n().createElement(o.Typography,{variant:"body2"},"Bed No: ",e.bedNo)," ",n().createElement(o.Typography,{variant:"body2"},"Type: ",e.bedType),n().createElement(o.Typography,{variant:"body2"},"Rate: ",e.rate)))}))))})),n().createElement(o.Dialog,{open:p,onClose:function(){m(!1),f(null)},maxWidth:"md",fullWidth:!0},n().createElement(o.DialogTitle,null,"Bed Management"),n().createElement(o.DialogContent,null,g&&n().createElement(n().Fragment,null,n().createElement(o.Typography,{variant:"body1"},n().createElement("strong",null,"Ward:")," ",g.wardType),n().createElement(o.Typography,{variant:"body1"},n().createElement("strong",null,"Room Category:")," ",g.roomCategory),n().createElement(o.Typography,{variant:"body1"},n().createElement("strong",null,"Bed No:")," ",g.bedNo),n().createElement(o.Typography,{variant:"body1"},n().createElement("strong",null,"Bed Type:")," ",g.bedType),n().createElement(o.Typography,{variant:"body1"},n().createElement("strong",null,"Type:")," ",g.type),n().createElement(o.Typography,{variant:"body1"},n().createElement("strong",null,"Rate:")," ",g.rate)))))},p=function(){return n().createElement("div",null,n().createElement(y,null))}},3619:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(318),n=a.n(r),o=a(9199),l=a(6401),i=a(8056);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,o,l,i=[],d=!0,c=!1;try{if(o=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;d=!1}else for(;!(d=(r=o.call(a)).done)&&(i.push(r.value),i.length!==t);d=!0);}catch(e){c=!0,n=e}finally{try{if(!d&&null!=a.return&&(l=a.return(),Object(l)!==l))return}finally{if(c)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}var s={Vacant:"#81C784",Admitted:"#4FC3F7","Pre Discharge":"#FFAB91","Patient Reservation":"#F06292",Blocked:"#BDBDBD"},u=function(e){var t=e.wardType,a=e.chartData,r=e.onClick;return n().createElement(o.Box,{textAlign:"center",sx:{p:2,boxShadow:2,borderRadius:2,backgroundColor:"#f9f9f9",cursor:"pointer","&:hover":{backgroundColor:"#e3f2fd"}},onClick:r},n().createElement(o.Typography,{variant:"h6",gutterBottom:!0},t),n().createElement(l.ResponsiveContainer,{width:"100%",height:200},n().createElement(l.PieChart,null,n().createElement(l.Pie,{data:a,cx:"50%",cy:"50%",innerRadius:50,outerRadius:80,fill:"#8884d8",paddingAngle:5,dataKey:"value"},a.map((function(e,t){return n().createElement(l.Cell,{key:"cell-".concat(t),fill:s[e.name]})}))),n().createElement(l.Tooltip,{formatter:function(e){return"".concat(e.toFixed(2),"%")}}),n().createElement(l.Legend,{layout:"vertical",align:"right",verticalAlign:"middle"}))))};const y=function(e){var t=e.navigate,a=function(e){var t={};return e.forEach((function(e){t[e.wardType]||(t[e.wardType]={total:0,statuses:{}}),t[e.wardType].total++,t[e.wardType].statuses[e.status]=(t[e.wardType].statuses[e.status]||0)+1})),Object.entries(t).map((function(e){var t=d(e,2),a=t[0],r=t[1],n=r.total,o=r.statuses;return{wardType:a,chartData:Object.entries(o).map((function(e){var t=d(e,2);return{name:t[0],value:t[1]/n*100}}))}}))}(i.A);return n().createElement(o.Box,{p:3,sx:{backgroundColor:"#eef2f6",minHeight:"100vh"}},n().createElement(o.Box,{display:"flex",justifyContent:"space-between",alignItems:"center",sx:{mb:4,p:2,backgroundColor:"#fff",boxShadow:2,borderRadius:2}},n().createElement("div",null,n().createElement("h6",null,"Search Bed Occupancy"),n().createElement(o.Box,{display:"flex",gap:3,mt:2},n().createElement(o.TextField,{type:"date",size:"small"}),n().createElement(o.Button,{size:"small",variant:"contained",color:"primary"},"Search"))),n().createElement(o.Box,{display:"flex",gap:3},Object.entries(s).map((function(e){var t=d(e,2),a=t[0],r=t[1];return n().createElement(o.Typography,{key:a,variant:"body1",sx:{color:r,cursor:"pointer"}},a)})))),n().createElement(o.Grid,{container:!0,spacing:3},a.map((function(e,a){var r=e.wardType,l=e.chartData;return n().createElement(o.Grid,{item:!0,xs:12,sm:6,md:4,key:a},n().createElement(u,{wardType:r,chartData:l,onClick:function(){return function(e){t("/secure/bedandward/".concat(e),{state:{wardType:e}})}(r)}}))}))))},p=function(e){var t=e.navigate;return n().createElement("div",null,n().createElement(y,{navigate:t}))}},9678:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(996),n=a.n(r)().create({baseURL:"http://ec2-16-171-232-159.eu-north-1.compute.amazonaws.com:8080/app/",headers:{"Content-Type":"application/json",Accept:"application/json"}});n.interceptors.request.use((function(e){var t=localStorage.getItem("authToken");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)}));const o=n},4167:(e,t,a)=>{a.d(t,{S:()=>r});var r={WARD_OCCUPANCY:"ward/getAlloccupancy",BED_OCCUPANCY:"bed/ward"}},8056:(e,t,a)=>{a.d(t,{A:()=>r});const r=[{bedNo:"B101",type:"Bed 1",rate:1e3,status:"Vacant",roomCategory:"Normal",bedType:"Bed Electronic",wardType:"IPD Ward 1",assignedPatient:null},{bedNo:"B102",type:"Bed 2",rate:2e3,status:"Admitted",roomCategory:"Isolation",bedType:"Resuscitation Bed",wardType:"ICU",assignedPatient:"John Doe"},{bedNo:"B103",type:"Bed 3",rate:1500,status:"Pre Discharge",roomCategory:"Intensive care",bedType:"Neonatal Warmer Bed",wardType:"NICU",assignedPatient:"Jane Smith"},{bedNo:"B104",type:"Bed 4",rate:1200,status:"Patient Reservation",roomCategory:"Normal",bedType:"Bed Bassinet",wardType:"LDR",reservedBy:"David Johnson"},{bedNo:"B105",type:"Bed 5",rate:800,status:"Blocked",roomCategory:"Isolation",bedType:"Bed Incubator",wardType:"NICU",assignedPatient:null,maintenanceReason:"Cleaning in progress"},{bedNo:"B106",type:"Bed 6",rate:1100,status:"Vacant",roomCategory:"Intensive care",bedType:"Bed Stretcher",wardType:"Ventilator",assignedPatient:null},{bedNo:"B107",type:"Bed 7",rate:3e3,status:"Admitted",roomCategory:"Normal",bedType:"Operating Table",wardType:"Operation Theater",assignedPatient:"Emily Davis"},{bedNo:"B108",type:"Bed 8",rate:2500,status:"Pre Discharge",roomCategory:"Isolation",bedType:"Neonatal Warmer Bed",wardType:"NICU",assignedPatient:"Michael Brown"},{bedNo:"B109",type:"Bed 9",rate:1e3,status:"Patient Reservation",roomCategory:"Normal",bedType:"Bed Bassinet",wardType:"IPD Ward 2",reservedBy:"Sophia Wilson"},{bedNo:"B110",type:"Bed 10",rate:500,status:"Blocked",roomCategory:"Intensive care",bedType:"Bed Electronic",wardType:"OT Recovery",assignedPatient:null,maintenanceReason:"Technical repair"},{bedNo:"B111",type:"Bed 11",rate:1400,status:"Vacant",roomCategory:"Normal",bedType:"Bed Stretcher",wardType:"ER",assignedPatient:null},{bedNo:"B112",type:"Bed 12",rate:2500,status:"Admitted",roomCategory:"Isolation",bedType:"Resuscitation Bed",wardType:"ICU",assignedPatient:"Anna White"},{bedNo:"B113",type:"Bed 13",rate:1800,status:"Vacant",roomCategory:"Normal",bedType:"Operating Table",wardType:"Operation Theater",assignedPatient:null},{bedNo:"B114",type:"Bed 14",rate:1e3,status:"Patient Reservation",roomCategory:"Intensive care",bedType:"Neonatal Warmer Bed",wardType:"NICU",reservedBy:"Chris Evans"},{bedNo:"B115",type:"Bed 15",rate:2200,status:"Admitted",roomCategory:"Normal",bedType:"Resuscitation Bed",wardType:"LDR",assignedPatient:"Daniel Craig"},{bedNo:"B116",type:"Bed 16",rate:1700,status:"Blocked",roomCategory:"Isolation",bedType:"Bed Bassinet",wardType:"NICU",maintenanceReason:"Renovation ongoing"},{bedNo:"B117",type:"Bed 17",rate:1300,status:"Vacant",roomCategory:"Normal",bedType:"Bed Incubator",wardType:"Ventilator",assignedPatient:null},{bedNo:"B118",type:"Bed 18",rate:900,status:"Blocked",roomCategory:"Normal",bedType:"Bed Stretcher",wardType:"OT Recovery",maintenanceReason:"Electrical maintenance"},{bedNo:"B119",type:"Bed 19",rate:1600,status:"Admitted",roomCategory:"Intensive care",bedType:"Operating Table",wardType:"Operation Theater",assignedPatient:"Lily Adams"},{bedNo:"B120",type:"Bed 20",rate:1250,status:"Pre Discharge",roomCategory:"Isolation",bedType:"Bed Electronic",wardType:"NICU",assignedPatient:"Jack Wilson"},{bedNo:"B121",type:"Bed 21",rate:1500,status:"Vacant",roomCategory:"Normal",bedType:"Bed Incubator",wardType:"IPD Ward 2",assignedPatient:null},{bedNo:"B122",type:"Bed 22",rate:1400,status:"Patient Reservation",roomCategory:"Intensive care",bedType:"Bed Bassinet",wardType:"LDR",reservedBy:"Grace Taylor"},{bedNo:"B123",type:"Bed 23",rate:1900,status:"Admitted",roomCategory:"Normal",bedType:"Neonatal Warmer Bed",wardType:"Ventilator",assignedPatient:"Ethan Carter"},{bedNo:"B124",type:"Bed 24",rate:1200,status:"Vacant",roomCategory:"Isolation",bedType:"Operating Table",wardType:"ICU",assignedPatient:null},{bedNo:"B125",type:"Bed 25",rate:900,status:"Blocked",roomCategory:"Intensive care",bedType:"Resuscitation Bed",wardType:"NICU",maintenanceReason:"Deep cleaning required"}]}}]);