"use strict";(self.webpackChunkbedward_management=self.webpackChunkbedward_management||[]).push([[313],{3313:(e,t,n)=>{n.r(t),n.d(t,{ReducerType:()=>ee,SHOULD_AUTOBATCH:()=>C,TaskAbortError:()=>Oe,Tuple:()=>g,addListener:()=>We,asyncThunkCreator:()=>Z,autoBatchEnhancer:()=>k,buildCreateSlice:()=>ne,clearAllListeners:()=>qe,combineSlices:()=>tt,configureStore:()=>z,createAction:()=>d,createActionCreatorInvariantMiddleware:()=>m,createAsyncThunk:()=>G,createDraftSafeSelector:()=>u,createDraftSafeSelectorCreator:()=>s,createDynamicMiddleware:()=>Qe,createEntityAdapter:()=>he,createImmutableStateInvariantMiddleware:()=>v,createListenerMiddleware:()=>Xe,createNextState:()=>i.jM,createReducer:()=>x,createSelector:()=>c.Mz,createSelectorCreator:()=>c.Ad,createSerializableStateInvariantMiddleware:()=>A,createSlice:()=>oe,current:()=>i.ss,findNonSerializableValue:()=>O,formatProdErrorMessage:()=>nt,freeze:()=>i.CN,isActionCreator:()=>p,isAllOf:()=>N,isAnyOf:()=>I,isAsyncThunkAction:()=>V,isDraft:()=>i.Qx,isFluxStandardAction:()=>y,isFulfilled:()=>q,isImmutableDefault:()=>_,isPending:()=>$,isPlain:()=>S,isRejected:()=>B,isRejectedWithValue:()=>W,lruMemoize:()=>c.i5,miniSerializeError:()=>H,nanoid:()=>U,original:()=>i.c2,prepareAutoBatched:()=>M,removeListener:()=>Ve,unwrapResult:()=>J,weakMapMemoize:()=>c.X4});var r=n(4929),o={};for(const e in r)["default","ReducerType","SHOULD_AUTOBATCH","TaskAbortError","Tuple","addListener","asyncThunkCreator","autoBatchEnhancer","buildCreateSlice","clearAllListeners","combineSlices","configureStore","createAction","createActionCreatorInvariantMiddleware","createAsyncThunk","createDraftSafeSelector","createDraftSafeSelectorCreator","createDynamicMiddleware","createEntityAdapter","createImmutableStateInvariantMiddleware","createListenerMiddleware","createNextState","createReducer","createSelector","createSelectorCreator","createSerializableStateInvariantMiddleware","createSlice","current","findNonSerializableValue","formatProdErrorMessage","freeze","isActionCreator","isAllOf","isAnyOf","isAsyncThunkAction","isDraft","isFluxStandardAction","isFulfilled","isImmutableDefault","isPending","isPlain","isRejected","isRejectedWithValue","lruMemoize","miniSerializeError","nanoid","original","prepareAutoBatched","removeListener","unwrapResult","weakMapMemoize"].indexOf(e)<0&&(o[e]=()=>r[e]);n.d(t,o);var i=n(3419),c=n(3527),a=n(4414),s=(...e)=>{const t=(0,c.Ad)(...e),n=Object.assign(((...e)=>{const n=t(...e),r=(e,...t)=>n((0,i.Qx)(e)?(0,i.ss)(e):e,...t);return Object.assign(r,n),r}),{withTypes:()=>n});return n},u=s(c.X4),l="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?r.compose:r.compose.apply(null,arguments)},f=("undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__,e=>e&&"function"==typeof e.match);function d(e,t){function n(...n){if(t){let r=t(...n);if(!r)throw new Error(nt(0));return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:n[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>(0,r.isAction)(t)&&t.type===e,n}function p(e){return"function"==typeof e&&"type"in e&&f(e)}function y(e){return(0,r.isAction)(e)&&Object.keys(e).every(h)}function h(e){return["type","payload","error","meta"].indexOf(e)>-1}function m(e={}){return()=>e=>t=>e(t)}var g=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function b(e){return(0,i.a6)(e)?(0,i.jM)(e,(()=>{})):e}function w(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function _(e){return"object"!=typeof e||null==e||Object.isFrozen(e)}function v(e={}){return()=>e=>t=>e(t)}function S(e){const t=typeof e;return null==e||"string"===t||"boolean"===t||"number"===t||Array.isArray(e)||(0,r.isPlainObject)(e)}function O(e,t="",n=S,r,o=[],i){let c;if(!n(e))return{keyPath:t||"<root>",value:e};if("object"!=typeof e||null===e)return!1;if(i?.has(e))return!1;const a=null!=r?r(e):Object.entries(e),s=o.length>0;for(const[e,u]of a){const a=t?t+"."+e:e;if(!s||!o.some((e=>e instanceof RegExp?e.test(a):a===e))){if(!n(u))return{keyPath:a,value:u};if("object"==typeof u&&(c=O(u,a,n,r,o,i),c))return c}}return i&&j(e)&&i.add(e),!1}function j(e){if(!Object.isFrozen(e))return!1;for(const t of Object.values(e))if("object"==typeof t&&null!==t&&!j(t))return!1;return!0}function A(e={}){return()=>e=>t=>e(t)}var E=()=>function(e){const{thunk:t=!0,immutableCheck:n=!0,serializableCheck:r=!0,actionCreatorCheck:o=!0}=e??{};let i=new g;return t&&("boolean"==typeof t?i.push(a.thunk):i.push((0,a.withExtraArgument)(t.extraArgument))),i},C="RTK_autoBatch",M=()=>e=>({payload:e,meta:{[C]:!0}}),P=e=>t=>{setTimeout(t,e)},k=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let o=!0,i=!1,c=!1;const a=new Set,s="tick"===e.type?queueMicrotask:"raf"===e.type?"undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:P(10):"callback"===e.type?e.queueNotification:P(e.timeout),u=()=>{c=!1,i&&(i=!1,a.forEach((e=>e())))};return Object.assign({},r,{subscribe(e){const t=r.subscribe((()=>o&&e()));return a.add(e),()=>{t(),a.delete(e)}},dispatch(e){try{return o=!e?.meta?.[C],i=!o,i&&(c||(c=!0,s(u))),r.dispatch(e)}finally{o=!0}}})},T=e=>function(t){const{autoBatch:n=!0}=t??{};let r=new g(e);return n&&r.push(k("object"==typeof n?n:void 0)),r};function z(e){const t=E(),{reducer:n,middleware:o,devTools:i=!0,preloadedState:c,enhancers:a}=e||{};let s,u;if("function"==typeof n)s=n;else{if(!(0,r.isPlainObject)(n))throw new Error(nt(1));s=(0,r.combineReducers)(n)}u="function"==typeof o?o(t):t();let f=r.compose;i&&(f=l({trace:!1,..."object"==typeof i&&i}));const d=(0,r.applyMiddleware)(...u),p=T(d),y=f(..."function"==typeof a?a(p):p());return(0,r.createStore)(s,c,y)}function R(e){const t={},n=[];let r;const o={addCase(e,n){const r="string"==typeof e?e:e.type;if(!r)throw new Error(nt(28));if(r in t)throw new Error(nt(29));return t[r]=n,o},addMatcher:(e,t)=>(n.push({matcher:e,reducer:t}),o),addDefaultCase:e=>(r=e,o)};return e(o),[t,n,r]}function x(e,t){let n,[r,o,c]=R(t);if("function"==typeof e)n=()=>b(e());else{const t=b(e);n=()=>t}function a(e=n(),t){let a=[r[t.type],...o.filter((({matcher:e})=>e(t))).map((({reducer:e})=>e))];return 0===a.filter((e=>!!e)).length&&(a=[c]),a.reduce(((e,n)=>{if(n){if((0,i.Qx)(e)){const r=n(e,t);return void 0===r?e:r}if((0,i.a6)(e))return(0,i.jM)(e,(e=>n(e,t)));{const r=n(e,t);if(void 0===r){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return r}}return e}),e)}return a.getInitialState=n,a}var D=(e,t)=>f(e)?e.match(t):e(t);function I(...e){return t=>e.some((e=>D(e,t)))}function N(...e){return t=>e.every((e=>D(e,t)))}function F(e,t){if(!e||!e.meta)return!1;const n="string"==typeof e.meta.requestId,r=t.indexOf(e.meta.requestStatus)>-1;return n&&r}function L(e){return"function"==typeof e[0]&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function $(...e){return 0===e.length?e=>F(e,["pending"]):L(e)?I(...e.map((e=>e.pending))):$()(e[0])}function B(...e){return 0===e.length?e=>F(e,["rejected"]):L(e)?I(...e.map((e=>e.rejected))):B()(e[0])}function W(...e){return 0===e.length||L(e)?N(B(...e),(e=>e&&e.meta&&e.meta.rejectedWithValue)):W()(e[0])}function q(...e){return 0===e.length?e=>F(e,["fulfilled"]):L(e)?I(...e.map((e=>e.fulfilled))):q()(e[0])}function V(...e){return 0===e.length?e=>F(e,["pending","fulfilled","rejected"]):L(e)?I(...e.flatMap((e=>[e.pending,e.rejected,e.fulfilled]))):V()(e[0])}var U=(e=21)=>{let t="",n=e;for(;n--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},X=["name","message","stack","code"],K=class{constructor(e,t){this.payload=e,this.meta=t}_type},Q=class{constructor(e,t){this.payload=e,this.meta=t}_type},H=e=>{if("object"==typeof e&&null!==e){const t={};for(const n of X)"string"==typeof e[n]&&(t[n]=e[n]);return t}return{message:String(e)}},G=(()=>{function e(e,t,n){const r=d(e+"/fulfilled",((e,t,n,r)=>({payload:e,meta:{...r||{},arg:n,requestId:t,requestStatus:"fulfilled"}}))),o=d(e+"/pending",((e,t,n)=>({payload:void 0,meta:{...n||{},arg:t,requestId:e,requestStatus:"pending"}}))),i=d(e+"/rejected",((e,t,r,o,i)=>({payload:o,error:(n&&n.serializeError||H)(e||"Rejected"),meta:{...i||{},arg:r,requestId:t,rejectedWithValue:!!o,requestStatus:"rejected",aborted:"AbortError"===e?.name,condition:"ConditionError"===e?.name}})));return Object.assign((function(e){return(c,a,s)=>{const u=n?.idGenerator?n.idGenerator(e):U(),l=new AbortController;let f,d;function p(e){d=e,l.abort()}const y=async function(){let y;try{let i=n?.condition?.(e,{getState:a,extra:s});if(null!==(h=i)&&"object"==typeof h&&"function"==typeof h.then&&(i=await i),!1===i||l.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const m=new Promise(((e,t)=>{f=()=>{t({name:"AbortError",message:d||"Aborted"})},l.signal.addEventListener("abort",f)}));c(o(u,e,n?.getPendingMeta?.({requestId:u,arg:e},{getState:a,extra:s}))),y=await Promise.race([m,Promise.resolve(t(e,{dispatch:c,getState:a,extra:s,requestId:u,signal:l.signal,abort:p,rejectWithValue:(e,t)=>new K(e,t),fulfillWithValue:(e,t)=>new Q(e,t)})).then((t=>{if(t instanceof K)throw t;return t instanceof Q?r(t.payload,u,e,t.meta):r(t,u,e)}))])}catch(t){y=t instanceof K?i(null,u,e,t.payload,t.meta):i(t,u,e)}finally{f&&l.signal.removeEventListener("abort",f)}var h;return n&&!n.dispatchConditionRejection&&i.match(y)&&y.meta.condition||c(y),y}();return Object.assign(y,{abort:p,requestId:u,arg:e,unwrap:()=>y.then(J)})}}),{pending:o,rejected:i,fulfilled:r,settled:I(i,r),typePrefix:e})}return e.withTypes=()=>e,e})();function J(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}var Y=Symbol.for("rtk-slice-createasyncthunk"),Z={[Y]:G},ee=(e=>(e.reducer="reducer",e.reducerWithPrepare="reducerWithPrepare",e.asyncThunk="asyncThunk",e))(ee||{});function te(e,t){return`${e}/${t}`}function ne({creators:e}={}){const t=e?.asyncThunk?.[Y];return function(e){const{name:n,reducerPath:r=n}=e;if(!n)throw new Error(nt(11));const o=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},i=Object.keys(o),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},a={addCase(e,t){const n="string"==typeof e?e:e.type;if(!n)throw new Error(nt(12));if(n in c.sliceCaseReducersByType)throw new Error(nt(13));return c.sliceCaseReducersByType[n]=t,a},addMatcher:(e,t)=>(c.sliceMatchers.push({matcher:e,reducer:t}),a),exposeAction:(e,t)=>(c.actionCreators[e]=t,a),exposeCaseReducer:(e,t)=>(c.sliceCaseReducersByName[e]=t,a)};function s(){const[t={},n=[],r]="function"==typeof e.extraReducers?R(e.extraReducers):[e.extraReducers],o={...t,...c.sliceCaseReducersByType};return x(e.initialState,(e=>{for(let t in o)e.addCase(t,o[t]);for(let t of c.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of n)e.addMatcher(t.matcher,t.reducer);r&&e.addDefaultCase(r)}))}i.forEach((r=>{const i=o[r],c={reducerName:r,type:te(n,r),createNotation:"function"==typeof e.reducers};!function(e){return"asyncThunk"===e._reducerDefinitionType}(i)?function({type:e,reducerName:t,createNotation:n},r,o){let i,c;if("reducer"in r){if(n&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(r))throw new Error(nt(17));i=r.reducer,c=r.prepare}else i=r;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,c?d(e,c):d(e))}(c,i,a):function({type:e,reducerName:t},n,r,o){if(!o)throw new Error(nt(18));const{payloadCreator:i,fulfilled:c,pending:a,rejected:s,settled:u,options:l}=n,f=o(e,i,l);r.exposeAction(t,f),c&&r.addCase(f.fulfilled,c),a&&r.addCase(f.pending,a),s&&r.addCase(f.rejected,s),u&&r.addMatcher(f.settled,u),r.exposeCaseReducer(t,{fulfilled:c||ie,pending:a||ie,rejected:s||ie,settled:u||ie})}(c,i,a,t)}));const u=e=>e,l=new Map;let f;function p(e,t){return f||(f=s()),f(e,t)}function y(){return f||(f=s()),f.getInitialState()}function h(t,n=!1){function r(e){let r=e[t];return void 0===r&&n&&(r=y()),r}function o(t=u){const r=w(l,n,(()=>new WeakMap));return w(r,t,(()=>{const r={};for(const[o,i]of Object.entries(e.selectors??{}))r[o]=re(i,t,y,n);return r}))}return{reducerPath:t,getSelectors:o,get selectors(){return o(r)},selectSlice:r}}const m={name:n,reducer:p,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:y,...h(r),injectInto(e,{reducerPath:t,...n}={}){const o=t??r;return e.inject({reducerPath:o,reducer:p},n),{...m,...h(o,!0)}}};return m}}function re(e,t,n,r){function o(o,...i){let c=t(o);return void 0===c&&r&&(c=n()),e(c,...i)}return o.unwrapped=e,o}var oe=ne();function ie(){}var ce=i.Qx;function ae(e){const t=se(((t,n)=>e(n)));return function(e){return t(e,void 0)}}function se(e){return function(t,n){const r=t=>{y(n)?e(n.payload,t):e(n,t)};return ce(t)?(r(t),t):(0,i.jM)(t,r)}}function ue(e,t){return t(e)}function le(e){return Array.isArray(e)||(e=Object.values(e)),e}function fe(e){return(0,i.Qx)(e)?(0,i.ss)(e):e}function de(e,t,n){e=le(e);const r=fe(n.ids),o=new Set(r),i=[],c=[];for(const n of e){const e=ue(n,t);o.has(e)?c.push({id:e,changes:n}):i.push(n)}return[i,c,r]}function pe(e){function t(t,n){const r=ue(t,e);r in n.entities||(n.ids.push(r),n.entities[r]=t)}function n(e,n){e=le(e);for(const r of e)t(r,n)}function r(t,n){const r=ue(t,e);r in n.entities||n.ids.push(r),n.entities[r]=t}function o(e,t){let n=!1;e.forEach((e=>{e in t.entities&&(delete t.entities[e],n=!0)})),n&&(t.ids=t.ids.filter((e=>e in t.entities)))}function i(t,n){const r={},o={};if(t.forEach((e=>{e.id in n.entities&&(o[e.id]={id:e.id,changes:{...o[e.id]?.changes,...e.changes}})})),(t=Object.values(o)).length>0){const o=t.filter((t=>function(t,n,r){const o=r.entities[n.id];if(void 0===o)return!1;const i=Object.assign({},o,n.changes),c=ue(i,e),a=c!==n.id;return a&&(t[n.id]=c,delete r.entities[n.id]),r.entities[c]=i,a}(r,t,n))).length>0;o&&(n.ids=Object.values(n.entities).map((t=>ue(t,e))))}}function c(t,r){const[o,c]=de(t,e,r);i(c,r),n(o,r)}return{removeAll:ae((function(e){Object.assign(e,{ids:[],entities:{}})})),addOne:se(t),addMany:se(n),setOne:se(r),setMany:se((function(e,t){e=le(e);for(const n of e)r(n,t)})),setAll:se((function(e,t){e=le(e),t.ids=[],t.entities={},n(e,t)})),updateOne:se((function(e,t){return i([e],t)})),updateMany:se(i),upsertOne:se((function(e,t){return c([e],t)})),upsertMany:se(c),removeOne:se((function(e,t){return o([e],t)})),removeMany:se(o)}}function ye(e,t,n){const r=function(e,t,n){let r=0,o=e.length;for(;r<o;){let i=r+o>>>1;n(t,e[i])>=0?r=i+1:o=i}return r}(e,t,n);return e.splice(r,0,t),e}function he(e={}){const{selectId:t,sortComparer:n}={sortComparer:!1,selectId:e=>e.id,...e},r=n?function(e,t){const{removeOne:n,removeMany:r,removeAll:o}=pe(e);function i(t,n,r){t=le(t);const o=new Set(r??fe(n.ids)),i=t.filter((t=>!o.has(ue(t,e))));0!==i.length&&u(n,i)}function c(t,n){if(0!==(t=le(t)).length){for(const r of t)delete n.entities[e(r)];u(n,t)}}function a(t,n){let r=!1,o=!1;for(let i of t){const t=n.entities[i.id];if(!t)continue;r=!0,Object.assign(t,i.changes);const c=e(t);if(i.id!==c){o=!0,delete n.entities[i.id];const e=n.ids.indexOf(i.id);n.ids[e]=c,n.entities[c]=t}}r&&u(n,[],r,o)}function s(t,n){const[r,o,c]=de(t,e,n);o.length&&a(o,n),r.length&&i(r,n,c)}const u=(n,r,o,i)=>{const c=fe(n.entities),a=fe(n.ids),s=n.entities;let u=a;i&&(u=new Set(a));let l=[];for(const e of u){const t=c[e];t&&l.push(t)}const f=0===l.length;for(const n of r)s[e(n)]=n,f||ye(l,n,t);f?l=r.slice().sort(t):o&&l.sort(t);const d=l.map(e);(function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0})(a,d)||(n.ids=d)};return{removeOne:n,removeMany:r,removeAll:o,addOne:se((function(e,t){return i([e],t)})),updateOne:se((function(e,t){return a([e],t)})),upsertOne:se((function(e,t){return s([e],t)})),setOne:se((function(e,t){return c([e],t)})),setMany:se(c),setAll:se((function(e,t){e=le(e),t.entities={},t.ids=[],i(e,t,[])})),addMany:se(i),updateMany:se(a),upsertMany:se(s)}}(t,n):pe(t),o=function(e){return{getInitialState:function(t={},n){const r=Object.assign({ids:[],entities:{}},t);return n?e.setAll(r,n):r}}}(r),i={getSelectors:function(e,t={}){const{createSelector:n=u}=t,r=e=>e.ids,o=e=>e.entities,i=n(r,o,((e,t)=>e.map((e=>t[e])))),c=(e,t)=>t,a=(e,t)=>e[t],s=n(r,(e=>e.length));if(!e)return{selectIds:r,selectEntities:o,selectAll:i,selectTotal:s,selectById:n(o,c,a)};const l=n(e,o);return{selectIds:n(e,r),selectEntities:l,selectAll:n(e,i),selectTotal:n(e,s),selectById:n(l,c,a)}}};return{selectId:t,sortComparer:n,...o,...i,...r}}var me="listener",ge="completed",be="cancelled",we=`task-${be}`,_e=`task-${ge}`,ve=`${me}-${be}`,Se=`${me}-${ge}`,Oe=class{constructor(e){this.code=e,this.message=`task ${be} (reason: ${e})`}name="TaskAbortError";message},je=(e,t)=>{if("function"!=typeof e)throw new TypeError(nt(32))},Ae=()=>{},Ee=(e,t=Ae)=>(e.catch(t),e),Ce=(e,t)=>(e.addEventListener("abort",t,{once:!0}),()=>e.removeEventListener("abort",t)),Me=(e,t)=>{const n=e.signal;n.aborted||("reason"in n||Object.defineProperty(n,"reason",{enumerable:!0,value:t,configurable:!0,writable:!0}),e.abort(t))},Pe=e=>{if(e.aborted){const{reason:t}=e;throw new Oe(t)}};function ke(e,t){let n=Ae;return new Promise(((r,o)=>{const i=()=>o(new Oe(e.reason));e.aborted?i():(n=Ce(e,i),t.finally((()=>n())).then(r,o))})).finally((()=>{n=Ae}))}var Te=e=>t=>Ee(ke(e,t).then((t=>(Pe(e),t)))),ze=e=>{const t=Te(e);return e=>t(new Promise((t=>setTimeout(t,e))))},{assign:Re}=Object,xe={},De="listenerMiddleware",Ie=(e,t)=>(n,r)=>{je(n);const o=new AbortController;var i;i=o,Ce(e,(()=>Me(i,e.reason)));const c=(async()=>{try{return await Promise.resolve(),{status:"ok",value:await(async()=>{Pe(e),Pe(o.signal);const t=await n({pause:Te(o.signal),delay:ze(o.signal),signal:o.signal});return Pe(o.signal),t})()}}catch(e){return{status:e instanceof Oe?"cancelled":"rejected",error:e}}finally{Me(o,_e)}})();return r?.autoJoin&&t.push(c.catch(Ae)),{result:Te(e)(c),cancel(){Me(o,we)}}},Ne=e=>{let{type:t,actionCreator:n,matcher:r,predicate:o,effect:i}=e;if(t)o=d(t).match;else if(n)t=n.type,o=n.match;else if(r)o=r;else if(!o)throw new Error(nt(21));return je(i),{predicate:o,type:t,effect:i}},Fe=Re((e=>{const{type:t,predicate:n,effect:r}=Ne(e);return{id:U(),effect:r,type:t,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(nt(22))}}}),{withTypes:()=>Fe}),Le=(e,t)=>{const{type:n,effect:r,predicate:o}=Ne(t);return Array.from(e.values()).find((e=>("string"==typeof n?e.type===n:e.predicate===o)&&e.effect===r))},$e=e=>{e.pending.forEach((e=>{Me(e,ve)}))},Be=(e,t,n)=>{try{e(t,n)}catch(e){setTimeout((()=>{throw e}),0)}},We=Re(d(`${De}/add`),{withTypes:()=>We}),qe=d(`${De}/removeAll`),Ve=Re(d(`${De}/remove`),{withTypes:()=>Ve}),Ue=(...e)=>{console.error(`${De}/error`,...e)},Xe=(e={})=>{const t=new Map,{extra:n,onError:o=Ue}=e;je(o);const i=e=>{return(n=Le(t,e)??Fe(e)).unsubscribe=()=>t.delete(n.id),t.set(n.id,n),e=>{n.unsubscribe(),e?.cancelActive&&$e(n)};var n};Re(i,{withTypes:()=>i});const c=e=>{const n=Le(t,e);return n&&(n.unsubscribe(),e.cancelActive&&$e(n)),!!n};Re(c,{withTypes:()=>c});const a=async(e,r,c,a)=>{const s=new AbortController,u=((e,t)=>(n,r)=>Ee((async(n,r)=>{Pe(t);let o=()=>{};const i=[new Promise(((t,r)=>{let i=e({predicate:n,effect:(e,n)=>{n.unsubscribe(),t([e,n.getState(),n.getOriginalState()])}});o=()=>{i(),r()}}))];null!=r&&i.push(new Promise((e=>setTimeout(e,r,null))));try{const e=await ke(t,Promise.race(i));return Pe(t),e}finally{o()}})(n,r)))(i,s.signal),l=[];try{e.pending.add(s),await Promise.resolve(e.effect(r,Re({},c,{getOriginalState:a,condition:(e,t)=>u(e,t).then(Boolean),take:u,delay:ze(s.signal),pause:Te(s.signal),extra:n,signal:s.signal,fork:Ie(s.signal,l),unsubscribe:e.unsubscribe,subscribe:()=>{t.set(e.id,e)},cancelActiveListeners:()=>{e.pending.forEach(((e,t,n)=>{e!==s&&(Me(e,ve),n.delete(e))}))},cancel:()=>{Me(s,ve),e.pending.delete(s)},throwIfCancelled:()=>{Pe(s.signal)}})))}catch(e){e instanceof Oe||Be(o,e,{raisedBy:"effect"})}finally{await Promise.all(l),Me(s,Se),e.pending.delete(s)}},s=(e=>()=>{e.forEach($e),e.clear()})(t);return{middleware:e=>n=>u=>{if(!(0,r.isAction)(u))return n(u);if(We.match(u))return i(u.payload);if(qe.match(u))return void s();if(Ve.match(u))return c(u.payload);let l=e.getState();const f=()=>{if(l===xe)throw new Error(nt(23));return l};let d;try{if(d=n(u),t.size>0){const n=e.getState(),r=Array.from(t.values());for(const t of r){let r=!1;try{r=t.predicate(u,n,l)}catch(e){r=!1,Be(o,e,{raisedBy:"predicate"})}r&&a(t,u,e,f)}}}finally{l=xe}return d},startListening:i,stopListening:c,clearListeners:s}},Ke=e=>({middleware:e,applied:new Map}),Qe=()=>{const e=U(),t=new Map,n=Object.assign(d("dynamicMiddleware/add",((...t)=>({payload:t,meta:{instanceId:e}}))),{withTypes:()=>n}),o=Object.assign((function(...e){e.forEach((e=>{w(t,e,Ke)}))}),{withTypes:()=>o}),i=N(n,(e=>t=>t?.meta?.instanceId===e)(e));return{middleware:e=>n=>c=>i(c)?(o(...c.payload),e.dispatch):(e=>{const n=Array.from(t.values()).map((t=>w(t.applied,e,t.middleware)));return(0,r.compose)(...n)})(e)(n)(c),addMiddleware:o,withMiddleware:n,instanceId:e}},He=e=>e.flatMap((e=>{return"reducerPath"in(t=e)&&"string"==typeof t.reducerPath?[[e.reducerPath,e.reducer]]:Object.entries(e);var t})),Ge=Symbol.for("rtk-state-proxy-original"),Je=new WeakMap,Ye=(e,t)=>w(Je,e,(()=>new Proxy(e,{get:(e,n,r)=>{if(n===Ge)return e;const o=Reflect.get(e,n,r);if(void 0===o){const e=t[n.toString()];if(e){const t=e(void 0,{type:U()});if(void 0===t)throw new Error(nt(24));return t}}return o}}))),Ze=e=>{if(!(t=e)||!t[Ge])throw new Error(nt(25));var t;return e[Ge]},et=(e={})=>e;function tt(...e){const t=Object.fromEntries(He(e)),n=()=>Object.keys(t).length?(0,r.combineReducers)(t):et;let o=n();function i(e,t){return o(e,t)}i.withLazyLoadedSlices=()=>i;const c=Object.assign((function(e,n){return function(r,...o){return e(Ye(n?n(r,...o):r,t),...o)}}),{original:Ze});return Object.assign(i,{inject:(e,r={})=>{const{reducerPath:c,reducer:a}=e,s=t[c];return!r.overrideExisting&&s&&s!==a||(t[c]=a,o=n()),i},selector:c})}function nt(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}},3419:(e,t,n)=>{n.d(t,{CN:()=>v,Qx:()=>s,a6:()=>u,c2:()=>d,jM:()=>K,ss:()=>V});var r=Symbol.for("immer-nothing"),o=Symbol.for("immer-draftable"),i=Symbol.for("immer-state");function c(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var a=Object.getPrototypeOf;function s(e){return!!e&&!!e[i]}function u(e){return!!e&&(f(e)||Array.isArray(e)||!!e[o]||!!e.constructor?.[o]||g(e)||b(e))}var l=Object.prototype.constructor.toString();function f(e){if(!e||"object"!=typeof e)return!1;const t=a(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===l}function d(e){return s(e)||c(15),e[i].base_}function p(e,t){0===y(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function y(e){const t=e[i];return t?t.type_:Array.isArray(e)?1:g(e)?2:b(e)?3:0}function h(e,t){return 2===y(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function m(e,t,n){const r=y(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function g(e){return e instanceof Map}function b(e){return e instanceof Set}function w(e){return e.copy_||e.base_}function _(e,t){if(g(e))return new Map(e);if(b(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=f(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[i];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const o=n[r],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(a(e),t)}{const t=a(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function v(e,t=!1){return O(e)||s(e)||!u(e)||(y(e)>1&&(e.set=e.add=e.clear=e.delete=S),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>v(t,!0)))),e}function S(){c(2)}function O(e){return Object.isFrozen(e)}var j,A={};function E(e){const t=A[e];return t||c(0),t}function C(){return j}function M(e,t){t&&(E("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function P(e){k(e),e.drafts_.forEach(z),e.drafts_=null}function k(e){e===j&&(j=e.parent_)}function T(e){return j={drafts_:[],parent_:j,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function z(e){const t=e[i];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function R(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[i].modified_&&(P(t),c(4)),u(e)&&(e=x(t,e),t.parent_||I(t,e)),t.patches_&&E("Patches").generateReplacementPatches_(n[i].base_,e,t.patches_,t.inversePatches_)):e=x(t,n,[]),P(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==r?e:void 0}function x(e,t,n){if(O(t))return t;const r=t[i];if(!r)return p(t,((o,i)=>D(e,r,t,o,i,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return I(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let o=t,i=!1;3===r.type_&&(o=new Set(t),t.clear(),i=!0),p(o,((o,c)=>D(e,r,t,o,c,n,i))),I(e,t,!1),n&&e.patches_&&E("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function D(e,t,n,r,o,i,c){if(s(o)){const c=x(e,o,i&&t&&3!==t.type_&&!h(t.assigned_,r)?i.concat(r):void 0);if(m(n,r,c),!s(c))return;e.canAutoFreeze_=!1}else c&&n.add(o);if(u(o)&&!O(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;x(e,o),t&&t.scope_.parent_||"symbol"==typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||I(e,o)}}function I(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&v(t,n)}var N={get(e,t){if(t===i)return e;const n=w(e);if(!h(n,t))return function(e,t,n){const r=$(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!u(r)?r:r===L(e.base_,t)?(W(e),e.copy_[t]=q(r,e)):r},has:(e,t)=>t in w(e),ownKeys:e=>Reflect.ownKeys(w(e)),set(e,t,n){const r=$(w(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=L(w(e),t),a=r?.[i];if(a&&a.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(((o=n)===(c=r)?0!==o||1/o==1/c:o!=o&&c!=c)&&(void 0!==n||h(e.base_,t)))return!0;W(e),B(e)}var o,c;return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==L(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,W(e),B(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=w(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){c(11)},getPrototypeOf:e=>a(e.base_),setPrototypeOf(){c(12)}},F={};function L(e,t){const n=e[i];return(n?w(n):e)[t]}function $(e,t){if(!(t in e))return;let n=a(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=a(n)}}function B(e){e.modified_||(e.modified_=!0,e.parent_&&B(e.parent_))}function W(e){e.copy_||(e.copy_=_(e.base_,e.scope_.immer_.useStrictShallowCopy_))}function q(e,t){const n=g(e)?E("MapSet").proxyMap_(e,t):b(e)?E("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:C(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,i=N;n&&(o=[r],i=F);const{revoke:c,proxy:a}=Proxy.revocable(o,i);return r.draft_=a,r.revoke_=c,a}(e,t);return(t?t.scope_:C()).drafts_.push(n),n}function V(e){return s(e)||c(10),U(e)}function U(e){if(!u(e)||O(e))return e;const t=e[i];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=_(e,t.scope_.immer_.useStrictShallowCopy_)}else n=_(e,!0);return p(n,((e,t)=>{m(n,e,U(t))})),t&&(t.finalized_=!1),n}p(N,((e,t)=>{F[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),F.deleteProperty=function(e,t){return F.set.call(this,e,t,void 0)},F.set=function(e,t,n){return N.set.call(this,e[0],t,n,e[0])};var X=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...o){return r.produce(e,(e=>t.call(this,e,...o)))}}let o;if("function"!=typeof t&&c(6),void 0!==n&&"function"!=typeof n&&c(7),u(e)){const r=T(this),i=q(e,void 0);let c=!0;try{o=t(i),c=!1}finally{c?P(r):k(r)}return M(r,n),R(o,r)}if(!e||"object"!=typeof e){if(o=t(e),void 0===o&&(o=e),o===r&&(o=void 0),this.autoFreeze_&&v(o,!0),n){const t=[],r=[];E("Patches").generateReplacementPatches_(e,o,t,r),n(t,r)}return o}c(1)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,r;return[this.produce(e,t,((e,t)=>{n=e,r=t})),n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){u(e)||c(8),s(e)&&(e=V(e));const t=T(this),n=q(e,void 0);return n[i].isManual_=!0,k(t),n}finishDraft(e,t){const n=e&&e[i];n&&n.isManual_||c(9);const{scope_:r}=n;return M(r,t),R(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=E("Patches").applyPatches_;return s(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},K=X.produce;X.produceWithPatches.bind(X),X.setAutoFreeze.bind(X),X.setUseStrictShallowCopy.bind(X),X.applyPatches.bind(X),X.createDraft.bind(X),X.finishDraft.bind(X)},3527:(e,t,n)=>{n.d(t,{Ad:()=>d,Mz:()=>p,X4:()=>f,i5:()=>c});var r=Symbol("NOT_FOUND");var o=e=>Array.isArray(e)?e:[e];Symbol(),Object.getPrototypeOf({});var i=(e,t)=>e===t;function c(e,t){const n="object"==typeof t?t:{equalityCheck:t},{equalityCheck:o=i,maxSize:c=1,resultEqualityCheck:a}=n,s=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;const{length:r}=t;for(let o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}}(o);let u=0;const l=c<=1?function(e){let t;return{get:n=>t&&e(t.key,n)?t.value:r,put(e,n){t={key:e,value:n}},getEntries:()=>t?[t]:[],clear(){t=void 0}}}(s):function(e,t){let n=[];function o(e){const o=n.findIndex((n=>t(e,n.key)));if(o>-1){const e=n[o];return o>0&&(n.splice(o,1),n.unshift(e)),e.value}return r}return{get:o,put:function(t,i){o(t)===r&&(n.unshift({key:t,value:i}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,s);function f(){let t=l.get(arguments);if(t===r){if(t=e.apply(null,arguments),u++,a){const e=l.getEntries().find((e=>a(e.value,t)));e&&(t=e.value,0!==u&&u--)}l.put(arguments,t)}return t}return f.clearCache=()=>{l.clear(),f.resetResultsCount()},f.resultsCount=()=>u,f.resetResultsCount=()=>{u=0},f}var a="undefined"!=typeof WeakRef?WeakRef:class{constructor(e){this.value=e}deref(){return this.value}},s=0,u=1;function l(){return{s,v:void 0,o:null,p:null}}function f(e,t={}){let n=l();const{resultEqualityCheck:r}=t;let o,i=0;function c(){let t=n;const{length:c}=arguments;for(let e=0,n=c;e<n;e++){const n=arguments[e];if("function"==typeof n||"object"==typeof n&&null!==n){let e=t.o;null===e&&(t.o=e=new WeakMap);const r=e.get(n);void 0===r?(t=l(),e.set(n,t)):t=r}else{let e=t.p;null===e&&(t.p=e=new Map);const r=e.get(n);void 0===r?(t=l(),e.set(n,t)):t=r}}const s=t;let f;if(t.s===u)f=t.v;else if(f=e.apply(null,arguments),i++,r){const e=o?.deref?.()??o;null!=e&&r(e,f)&&(f=e,0!==i&&i--),o="object"==typeof f&&null!==f||"function"==typeof f?new a(f):f}return s.s=u,s.v=f,f}return c.clearCache=()=>{n=l(),c.resetResultsCount()},c.resultsCount=()=>i,c.resetResultsCount=()=>{i=0},c}function d(e,...t){const n="function"==typeof e?{memoize:e,memoizeOptions:t}:e,r=(...e)=>{let t,r=0,i=0,c={},a=e.pop();"object"==typeof a&&(c=a,a=e.pop()),function(e,t="expected a function, instead received "+typeof e){if("function"!=typeof e)throw new TypeError(t)}(a,`createSelector expects an output function after the inputs, but received: [${typeof a}]`);const s={...n,...c},{memoize:u,memoizeOptions:l=[],argsMemoize:d=f,argsMemoizeOptions:p=[],devModeChecks:y={}}=s,h=o(l),m=o(p),g=function(e){const t=Array.isArray(e[0])?e[0]:e;return function(e,t="expected all items to be functions, instead received the following types: "){if(!e.every((e=>"function"==typeof e))){const n=e.map((e=>"function"==typeof e?`function ${e.name||"unnamed"}()`:typeof e)).join(", ");throw new TypeError(`${t}[${n}]`)}}(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}(e),b=u((function(){return r++,a.apply(null,arguments)}),...h),w=d((function(){i++;const e=function(e,t){const n=[],{length:r}=e;for(let o=0;o<r;o++)n.push(e[o].apply(null,t));return n}(g,arguments);return t=b.apply(null,e),t}),...m);return Object.assign(w,{resultFunc:a,memoizedResultFunc:b,dependencies:g,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>t,recomputations:()=>r,resetRecomputations:()=>{r=0},memoize:u,argsMemoize:d})};return Object.assign(r,{withTypes:()=>r}),r}var p=d(f),y=Object.assign(((e,t=p)=>{!function(e,t="expected an object, instead received "+typeof e){if("object"!=typeof e)throw new TypeError(t)}(e,"createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);const n=Object.keys(e);return t(n.map((t=>e[t])),((...e)=>e.reduce(((e,t,r)=>(e[n[r]]=t,e)),{})))}),{withTypes:()=>y})}}]);