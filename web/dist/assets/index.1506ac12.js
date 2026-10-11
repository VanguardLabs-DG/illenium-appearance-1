function qm(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var o=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const Jm=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};Jm();var y={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ji=Symbol.for("react.element"),eg=Symbol.for("react.portal"),tg=Symbol.for("react.fragment"),ng=Symbol.for("react.strict_mode"),rg=Symbol.for("react.profiler"),og=Symbol.for("react.provider"),ig=Symbol.for("react.context"),ag=Symbol.for("react.forward_ref"),lg=Symbol.for("react.suspense"),sg=Symbol.for("react.memo"),ug=Symbol.for("react.lazy"),of=Symbol.iterator;function cg(e){return e===null||typeof e!="object"?null:(e=of&&e[of]||e["@@iterator"],typeof e=="function"?e:null)}var R0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z0=Object.assign,L0={};function Do(e,t,n){this.props=e,this.context=t,this.refs=L0,this.updater=n||R0}Do.prototype.isReactComponent={};Do.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Do.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function D0(){}D0.prototype=Do.prototype;function Oc(e,t,n){this.props=e,this.context=t,this.refs=L0,this.updater=n||R0}var Tc=Oc.prototype=new D0;Tc.constructor=Oc;z0(Tc,Do.prototype);Tc.isPureReactComponent=!0;var af=Array.isArray,F0=Object.prototype.hasOwnProperty,Mc={current:null},N0={key:!0,ref:!0,__self:!0,__source:!0};function V0(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)F0.call(t,r)&&!N0.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Ji,type:e,key:i,ref:a,props:o,_owner:Mc.current}}function dg(e,t){return{$$typeof:Ji,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ji}function fg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var lf=/\/+/g;function ws(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fg(""+e.key):t.toString(36)}function za(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ji:case eg:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+ws(a,0):r,af(o)?(n="",e!=null&&(n=e.replace(lf,"$&/")+"/"),za(o,t,n,"",function(c){return c})):o!=null&&(Pc(o)&&(o=dg(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(lf,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",af(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+ws(i,l);a+=za(i,t,n,s,o)}else if(s=cg(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+ws(i,l++),a+=za(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function la(e,t,n){if(e==null)return e;var r=[],o=0;return za(e,r,"","",function(i){return t.call(n,i,o++)}),r}function pg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var At={current:null},La={transition:null},hg={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:La,ReactCurrentOwner:Mc};function B0(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:la,forEach:function(e,t,n){la(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return la(e,function(){t++}),t},toArray:function(e){return la(e,function(t){return t})||[]},only:function(e){if(!Pc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=Do;fe.Fragment=tg;fe.Profiler=rg;fe.PureComponent=Oc;fe.StrictMode=ng;fe.Suspense=lg;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hg;fe.act=B0;fe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=z0({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Mc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)F0.call(t,s)&&!N0.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ji,type:e.type,key:o,ref:i,props:r,_owner:a}};fe.createContext=function(e){return e={$$typeof:ig,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:og,_context:e},e.Consumer=e};fe.createElement=V0;fe.createFactory=function(e){var t=V0.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:ag,render:e}};fe.isValidElement=Pc;fe.lazy=function(e){return{$$typeof:ug,_payload:{_status:-1,_result:e},_init:pg}};fe.memo=function(e,t){return{$$typeof:sg,type:e,compare:t===void 0?null:t}};fe.startTransition=function(e){var t=La.transition;La.transition={};try{e()}finally{La.transition=t}};fe.unstable_act=B0;fe.useCallback=function(e,t){return At.current.useCallback(e,t)};fe.useContext=function(e){return At.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return At.current.useDeferredValue(e)};fe.useEffect=function(e,t){return At.current.useEffect(e,t)};fe.useId=function(){return At.current.useId()};fe.useImperativeHandle=function(e,t,n){return At.current.useImperativeHandle(e,t,n)};fe.useInsertionEffect=function(e,t){return At.current.useInsertionEffect(e,t)};fe.useLayoutEffect=function(e,t){return At.current.useLayoutEffect(e,t)};fe.useMemo=function(e,t){return At.current.useMemo(e,t)};fe.useReducer=function(e,t,n){return At.current.useReducer(e,t,n)};fe.useRef=function(e){return At.current.useRef(e)};fe.useState=function(e){return At.current.useState(e)};fe.useSyncExternalStore=function(e,t,n){return At.current.useSyncExternalStore(e,t,n)};fe.useTransition=function(){return At.current.useTransition()};fe.version="18.3.1";y.exports=fe;var on=y.exports,sf=qm({__proto__:null,default:on},[y.exports]),_c={exports:{}},Yt={},j0={exports:{}},H0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,G){var Z=L.length;L.push(G);e:for(;0<Z;){var te=Z-1>>>1,I=L[te];if(0<o(I,G))L[te]=G,L[Z]=I,Z=te;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var G=L[0],Z=L.pop();if(Z!==G){L[0]=Z;e:for(var te=0,I=L.length,V=I>>>1;te<V;){var W=2*(te+1)-1,q=L[W],O=W+1,ie=L[O];if(0>o(q,Z))O<I&&0>o(ie,q)?(L[te]=ie,L[O]=Z,te=O):(L[te]=q,L[W]=Z,te=W);else if(O<I&&0>o(ie,Z))L[te]=ie,L[O]=Z,te=O;else break e}}return G}function o(L,G){var Z=L.sortIndex-G.sortIndex;return Z!==0?Z:L.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],d=1,p=null,g=3,v=!1,x=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=L)r(c),G.sortIndex=G.expirationTime,t(s,G);else break;G=n(c)}}function E(L){if(w=!1,m(L),!x)if(n(s)!==null)x=!0,F(A);else{var G=n(c);G!==null&&J(E,G.startTime-L)}}function A(L,G){x=!1,w&&(w=!1,h(_),_=-1),v=!0;var Z=g;try{for(m(G),p=n(s);p!==null&&(!(p.expirationTime>G)||L&&!D());){var te=p.callback;if(typeof te=="function"){p.callback=null,g=p.priorityLevel;var I=te(p.expirationTime<=G);G=e.unstable_now(),typeof I=="function"?p.callback=I:p===n(s)&&r(s),m(G)}else r(s);p=n(s)}if(p!==null)var V=!0;else{var W=n(c);W!==null&&J(E,W.startTime-G),V=!1}return V}finally{p=null,g=Z,v=!1}}var M=!1,S=null,_=-1,P=5,R=-1;function D(){return!(e.unstable_now()-R<P)}function U(){if(S!==null){var L=e.unstable_now();R=L;var G=!0;try{G=S(!0,L)}finally{G?Y():(M=!1,S=null)}}else M=!1}var Y;if(typeof f=="function")Y=function(){f(U)};else if(typeof MessageChannel!="undefined"){var j=new MessageChannel,K=j.port2;j.port1.onmessage=U,Y=function(){K.postMessage(null)}}else Y=function(){k(U,0)};function F(L){S=L,M||(M=!0,Y())}function J(L,G){_=k(function(){L(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,F(A))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(L){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Z=g;g=G;try{return L()}finally{g=Z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,G){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=g;g=L;try{return G()}finally{g=Z}},e.unstable_scheduleCallback=function(L,G,Z){var te=e.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?te+Z:te):Z=te,L){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=Z+I,L={id:d++,callback:G,priorityLevel:L,startTime:Z,expirationTime:I,sortIndex:-1},Z>te?(L.sortIndex=Z,t(c,L),n(s)===null&&L===n(c)&&(w?(h(_),_=-1):w=!0,J(E,Z-te))):(L.sortIndex=I,t(s,L),x||v||(x=!0,F(A))),L},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(L){var G=g;return function(){var Z=g;g=G;try{return L.apply(this,arguments)}finally{g=Z}}}})(H0);j0.exports=H0;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg=y.exports,Gt=j0.exports;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var U0=new Set,Pi={};function Wr(e,t){So(e,t),So(e+"Capture",t)}function So(e,t){for(Pi[e]=t,e=0;e<t.length;e++)U0.add(t[e])}var Yn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),mu=Object.prototype.hasOwnProperty,gg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uf={},cf={};function xg(e){return mu.call(cf,e)?!0:mu.call(uf,e)?!1:gg.test(e)?cf[e]=!0:(uf[e]=!0,!1)}function vg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yg(e,t,n,r){if(t===null||typeof t=="undefined"||vg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ot(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ct[e]=new Ot(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ct[t]=new Ot(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ct[e]=new Ot(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ct[e]=new Ot(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ct[e]=new Ot(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ct[e]=new Ot(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ct[e]=new Ot(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ct[e]=new Ot(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ct[e]=new Ot(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ic=/[\-:]([a-z])/g;function Rc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ic,Rc);ct[t]=new Ot(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ic,Rc);ct[t]=new Ot(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ic,Rc);ct[t]=new Ot(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ct[e]=new Ot(e,1,!1,e.toLowerCase(),null,!1,!1)});ct.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ct[e]=new Ot(e,1,!1,e.toLowerCase(),null,!0,!0)});function zc(e,t,n,r){var o=ct.hasOwnProperty(t)?ct[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yg(t,n,o,r)&&(n=null),r||o===null?xg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kn=mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=Symbol.for("react.element"),no=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),Lc=Symbol.for("react.strict_mode"),gu=Symbol.for("react.profiler"),W0=Symbol.for("react.provider"),G0=Symbol.for("react.context"),Dc=Symbol.for("react.forward_ref"),xu=Symbol.for("react.suspense"),vu=Symbol.for("react.suspense_list"),Fc=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),Y0=Symbol.for("react.offscreen"),df=Symbol.iterator;function Wo(e){return e===null||typeof e!="object"?null:(e=df&&e[df]||e["@@iterator"],typeof e=="function"?e:null)}var De=Object.assign,Cs;function hi(e){if(Cs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cs=t&&t[1]||""}return`
`+Cs+e}var ks=!1;function Ss(e,t){if(!e||ks)return"";ks=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{ks=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?hi(e):""}function bg(e){switch(e.tag){case 5:return hi(e.type);case 16:return hi("Lazy");case 13:return hi("Suspense");case 19:return hi("SuspenseList");case 0:case 2:case 15:return e=Ss(e.type,!1),e;case 11:return e=Ss(e.type.render,!1),e;case 1:return e=Ss(e.type,!0),e;default:return""}}function yu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ro:return"Fragment";case no:return"Portal";case gu:return"Profiler";case Lc:return"StrictMode";case xu:return"Suspense";case vu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case G0:return(e.displayName||"Context")+".Consumer";case W0:return(e._context.displayName||"Context")+".Provider";case Dc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fc:return t=e.displayName||null,t!==null?t:yu(e.type)||"Memo";case rr:t=e._payload,e=e._init;try{return yu(e(t))}catch{}}return null}function wg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yu(t);case 8:return t===Lc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Z0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cg(e){var t=Z0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ua(e){e._valueTracker||(e._valueTracker=Cg(e))}function Q0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Z0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qa(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function bu(e,t){var n=t.checked;return De({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ff(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function X0(e,t){t=t.checked,t!=null&&zc(e,"checked",t,!1)}function wu(e,t){X0(e,t);var n=vr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Cu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Cu(e,t.type,vr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Cu(e,t,n){(t!=="number"||qa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mi=Array.isArray;function xo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ku(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return De({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(mi(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vr(n)}}function K0(e,t){var n=vr(t.value),r=vr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function q0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Su(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?q0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ca,J0=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ca=ca||document.createElement("div"),ca.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ca.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _i(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kg=["Webkit","ms","Moz","O"];Object.keys(vi).forEach(function(e){kg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vi[t]=vi[e]})});function e1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vi.hasOwnProperty(e)&&vi[e]?(""+t).trim():t+"px"}function t1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=e1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Sg=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eu(e,t){if(t){if(Sg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function $u(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Au=null;function Nc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ou=null,vo=null,yo=null;function gf(e){if(e=na(e)){if(typeof Ou!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Nl(t),Ou(e.stateNode,e.type,t))}}function n1(e){vo?yo?yo.push(e):yo=[e]:vo=e}function r1(){if(vo){var e=vo,t=yo;if(yo=vo=null,gf(e),t)for(e=0;e<t.length;e++)gf(t[e])}}function o1(e,t){return e(t)}function i1(){}var Es=!1;function a1(e,t,n){if(Es)return e(t,n);Es=!0;try{return o1(e,t,n)}finally{Es=!1,(vo!==null||yo!==null)&&(i1(),r1())}}function Ii(e,t){var n=e.stateNode;if(n===null)return null;var r=Nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Tu=!1;if(Yn)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{Tu=!1}function Eg(e,t,n,r,o,i,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var yi=!1,Ja=null,el=!1,Mu=null,$g={onError:function(e){yi=!0,Ja=e}};function Ag(e,t,n,r,o,i,a,l,s){yi=!1,Ja=null,Eg.apply($g,arguments)}function Og(e,t,n,r,o,i,a,l,s){if(Ag.apply(this,arguments),yi){if(yi){var c=Ja;yi=!1,Ja=null}else throw Error(N(198));el||(el=!0,Mu=c)}}function Gr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function l1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xf(e){if(Gr(e)!==e)throw Error(N(188))}function Tg(e){var t=e.alternate;if(!t){if(t=Gr(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return xf(o),e;if(i===r)return xf(o),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function s1(e){return e=Tg(e),e!==null?u1(e):null}function u1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=u1(e);if(t!==null)return t;e=e.sibling}return null}var c1=Gt.unstable_scheduleCallback,vf=Gt.unstable_cancelCallback,Mg=Gt.unstable_shouldYield,Pg=Gt.unstable_requestPaint,je=Gt.unstable_now,_g=Gt.unstable_getCurrentPriorityLevel,Vc=Gt.unstable_ImmediatePriority,d1=Gt.unstable_UserBlockingPriority,tl=Gt.unstable_NormalPriority,Ig=Gt.unstable_LowPriority,f1=Gt.unstable_IdlePriority,zl=null,_n=null;function Rg(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(zl,e,void 0,(e.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:Dg,zg=Math.log,Lg=Math.LN2;function Dg(e){return e>>>=0,e===0?32:31-(zg(e)/Lg|0)|0}var da=64,fa=4194304;function gi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function nl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=gi(l):(i&=a,i!==0&&(r=gi(i)))}else a=n&~o,a!==0?r=gi(a):i!==0&&(r=gi(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bn(t),o=1<<n,r|=e[n],t&=~o;return r}function Fg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ng(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-bn(i),l=1<<a,s=o[a];s===-1?((l&n)===0||(l&r)!==0)&&(o[a]=Fg(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function Pu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function p1(){var e=da;return da<<=1,(da&4194240)===0&&(da=64),e}function $s(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ea(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bn(t),e[t]=n}function Vg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-bn(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Bc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ke=0;function h1(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var m1,jc,g1,x1,v1,_u=!1,pa=[],ur=null,cr=null,dr=null,Ri=new Map,zi=new Map,ir=[],Bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yf(e,t){switch(e){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zi.delete(t.pointerId)}}function Yo(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=na(t),t!==null&&jc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function jg(e,t,n,r,o){switch(t){case"focusin":return ur=Yo(ur,e,t,n,r,o),!0;case"dragenter":return cr=Yo(cr,e,t,n,r,o),!0;case"mouseover":return dr=Yo(dr,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Ri.set(i,Yo(Ri.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,zi.set(i,Yo(zi.get(i)||null,e,t,n,r,o)),!0}return!1}function y1(e){var t=_r(e.target);if(t!==null){var n=Gr(t);if(n!==null){if(t=n.tag,t===13){if(t=l1(n),t!==null){e.blockedOn=t,v1(e.priority,function(){g1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Da(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Iu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Au=r,n.target.dispatchEvent(r),Au=null}else return t=na(n),t!==null&&jc(t),e.blockedOn=n,!1;t.shift()}return!0}function bf(e,t,n){Da(e)&&n.delete(t)}function Hg(){_u=!1,ur!==null&&Da(ur)&&(ur=null),cr!==null&&Da(cr)&&(cr=null),dr!==null&&Da(dr)&&(dr=null),Ri.forEach(bf),zi.forEach(bf)}function Zo(e,t){e.blockedOn===t&&(e.blockedOn=null,_u||(_u=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,Hg)))}function Li(e){function t(o){return Zo(o,e)}if(0<pa.length){Zo(pa[0],e);for(var n=1;n<pa.length;n++){var r=pa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ur!==null&&Zo(ur,e),cr!==null&&Zo(cr,e),dr!==null&&Zo(dr,e),Ri.forEach(t),zi.forEach(t),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)y1(n),n.blockedOn===null&&ir.shift()}var bo=Kn.ReactCurrentBatchConfig,rl=!0;function Ug(e,t,n,r){var o=ke,i=bo.transition;bo.transition=null;try{ke=1,Hc(e,t,n,r)}finally{ke=o,bo.transition=i}}function Wg(e,t,n,r){var o=ke,i=bo.transition;bo.transition=null;try{ke=4,Hc(e,t,n,r)}finally{ke=o,bo.transition=i}}function Hc(e,t,n,r){if(rl){var o=Iu(e,t,n,r);if(o===null)Ls(e,t,r,ol,n),yf(e,r);else if(jg(o,e,t,n,r))r.stopPropagation();else if(yf(e,r),t&4&&-1<Bg.indexOf(e)){for(;o!==null;){var i=na(o);if(i!==null&&m1(i),i=Iu(e,t,n,r),i===null&&Ls(e,t,r,ol,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ls(e,t,r,null,n)}}var ol=null;function Iu(e,t,n,r){if(ol=null,e=Nc(r),e=_r(e),e!==null)if(t=Gr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=l1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ol=e,null}function b1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_g()){case Vc:return 1;case d1:return 4;case tl:case Ig:return 16;case f1:return 536870912;default:return 16}default:return 16}}var lr=null,Uc=null,Fa=null;function w1(){if(Fa)return Fa;var e,t=Uc,n=t.length,r,o="value"in lr?lr.value:lr.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Fa=o.slice(e,1<r?1-r:void 0)}function Na(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ha(){return!0}function wf(){return!1}function Zt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ha:wf,this.isPropagationStopped=wf,this}return De(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),t}var Fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=Zt(Fo),ta=De({},Fo,{view:0,detail:0}),Gg=Zt(ta),As,Os,Qo,Ll=De({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qo&&(Qo&&e.type==="mousemove"?(As=e.screenX-Qo.screenX,Os=e.screenY-Qo.screenY):Os=As=0,Qo=e),As)},movementY:function(e){return"movementY"in e?e.movementY:Os}}),Cf=Zt(Ll),Yg=De({},Ll,{dataTransfer:0}),Zg=Zt(Yg),Qg=De({},ta,{relatedTarget:0}),Ts=Zt(Qg),Xg=De({},Fo,{animationName:0,elapsedTime:0,pseudoElement:0}),Kg=Zt(Xg),qg=De({},Fo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jg=Zt(qg),ex=De({},Fo,{data:0}),kf=Zt(ex),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rx[e])?!!t[e]:!1}function Gc(){return ox}var ix=De({},ta,{key:function(e){if(e.key){var t=tx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Na(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(e){return e.type==="keypress"?Na(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Na(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ax=Zt(ix),lx=De({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sf=Zt(lx),sx=De({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),ux=Zt(sx),cx=De({},Fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),dx=Zt(cx),fx=De({},Ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),px=Zt(fx),hx=[9,13,27,32],Yc=Yn&&"CompositionEvent"in window,bi=null;Yn&&"documentMode"in document&&(bi=document.documentMode);var mx=Yn&&"TextEvent"in window&&!bi,C1=Yn&&(!Yc||bi&&8<bi&&11>=bi),Ef=String.fromCharCode(32),$f=!1;function k1(e,t){switch(e){case"keyup":return hx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var oo=!1;function gx(e,t){switch(e){case"compositionend":return S1(t);case"keypress":return t.which!==32?null:($f=!0,Ef);case"textInput":return e=t.data,e===Ef&&$f?null:e;default:return null}}function xx(e,t){if(oo)return e==="compositionend"||!Yc&&k1(e,t)?(e=w1(),Fa=Uc=lr=null,oo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return C1&&t.locale!=="ko"?null:t.data;default:return null}}var vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Af(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vx[e.type]:t==="textarea"}function E1(e,t,n,r){n1(r),t=il(t,"onChange"),0<t.length&&(n=new Wc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wi=null,Di=null;function yx(e){L1(e,0)}function Dl(e){var t=lo(e);if(Q0(t))return e}function bx(e,t){if(e==="change")return t}var $1=!1;if(Yn){var Ms;if(Yn){var Ps="oninput"in document;if(!Ps){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),Ps=typeof Of.oninput=="function"}Ms=Ps}else Ms=!1;$1=Ms&&(!document.documentMode||9<document.documentMode)}function Tf(){wi&&(wi.detachEvent("onpropertychange",A1),Di=wi=null)}function A1(e){if(e.propertyName==="value"&&Dl(Di)){var t=[];E1(t,Di,e,Nc(e)),a1(yx,t)}}function wx(e,t,n){e==="focusin"?(Tf(),wi=t,Di=n,wi.attachEvent("onpropertychange",A1)):e==="focusout"&&Tf()}function Cx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dl(Di)}function kx(e,t){if(e==="click")return Dl(t)}function Sx(e,t){if(e==="input"||e==="change")return Dl(t)}function Ex(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kn=typeof Object.is=="function"?Object.is:Ex;function Fi(e,t){if(kn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!mu.call(t,o)||!kn(e[o],t[o]))return!1}return!0}function Mf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pf(e,t){var n=Mf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mf(n)}}function O1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?O1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function T1(){for(var e=window,t=qa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qa(e.document)}return t}function Zc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $x(e){var t=T1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&O1(n.ownerDocument.documentElement,n)){if(r!==null&&Zc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Pf(n,i);var a=Pf(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ax=Yn&&"documentMode"in document&&11>=document.documentMode,io=null,Ru=null,Ci=null,zu=!1;function _f(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zu||io==null||io!==qa(r)||(r=io,"selectionStart"in r&&Zc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ci&&Fi(Ci,r)||(Ci=r,r=il(Ru,"onSelect"),0<r.length&&(t=new Wc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=io)))}function ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ao={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},_s={},M1={};Yn&&(M1=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function Fl(e){if(_s[e])return _s[e];if(!ao[e])return e;var t=ao[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in M1)return _s[e]=t[n];return e}var P1=Fl("animationend"),_1=Fl("animationiteration"),I1=Fl("animationstart"),R1=Fl("transitionend"),z1=new Map,If="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(e,t){z1.set(e,t),Wr(t,[e])}for(var Is=0;Is<If.length;Is++){var Rs=If[Is],Ox=Rs.toLowerCase(),Tx=Rs[0].toUpperCase()+Rs.slice(1);wr(Ox,"on"+Tx)}wr(P1,"onAnimationEnd");wr(_1,"onAnimationIteration");wr(I1,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(R1,"onTransitionEnd");So("onMouseEnter",["mouseout","mouseover"]);So("onMouseLeave",["mouseout","mouseover"]);So("onPointerEnter",["pointerout","pointerover"]);So("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mx=new Set("cancel close invalid load scroll toggle".split(" ").concat(xi));function Rf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Og(r,t,void 0,e),e.currentTarget=null}function L1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Rf(o,l,c),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Rf(o,l,c),i=s}}}if(el)throw e=Mu,el=!1,Mu=null,e}function _e(e,t){var n=t[Vu];n===void 0&&(n=t[Vu]=new Set);var r=e+"__bubble";n.has(r)||(D1(t,e,2,!1),n.add(r))}function zs(e,t,n){var r=0;t&&(r|=4),D1(n,e,r,t)}var ga="_reactListening"+Math.random().toString(36).slice(2);function Ni(e){if(!e[ga]){e[ga]=!0,U0.forEach(function(n){n!=="selectionchange"&&(Mx.has(n)||zs(n,!1,e),zs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ga]||(t[ga]=!0,zs("selectionchange",!1,t))}}function D1(e,t,n,r){switch(b1(t)){case 1:var o=Ug;break;case 4:o=Wg;break;default:o=Hc}n=o.bind(null,t,n,e),o=void 0,!Tu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ls(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=_r(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}a1(function(){var c=i,d=Nc(n),p=[];e:{var g=z1.get(e);if(g!==void 0){var v=Wc,x=e;switch(e){case"keypress":if(Na(n)===0)break e;case"keydown":case"keyup":v=ax;break;case"focusin":x="focus",v=Ts;break;case"focusout":x="blur",v=Ts;break;case"beforeblur":case"afterblur":v=Ts;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Zg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ux;break;case P1:case _1:case I1:v=Kg;break;case R1:v=dx;break;case"scroll":v=Gg;break;case"wheel":v=px;break;case"copy":case"cut":case"paste":v=Jg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Sf}var w=(t&4)!==0,k=!w&&e==="scroll",h=w?g!==null?g+"Capture":null:g;w=[];for(var f=c,m;f!==null;){m=f;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,h!==null&&(E=Ii(f,h),E!=null&&w.push(Vi(f,E,m)))),k)break;f=f.return}0<w.length&&(g=new v(g,x,null,n,d),p.push({event:g,listeners:w}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Au&&(x=n.relatedTarget||n.fromElement)&&(_r(x)||x[Zn]))break e;if((v||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=c,x=x?_r(x):null,x!==null&&(k=Gr(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=c),v!==x)){if(w=Cf,E="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=Sf,E="onPointerLeave",h="onPointerEnter",f="pointer"),k=v==null?g:lo(v),m=x==null?g:lo(x),g=new w(E,f+"leave",v,n,d),g.target=k,g.relatedTarget=m,E=null,_r(d)===c&&(w=new w(h,f+"enter",x,n,d),w.target=m,w.relatedTarget=k,E=w),k=E,v&&x)t:{for(w=v,h=x,f=0,m=w;m;m=qr(m))f++;for(m=0,E=h;E;E=qr(E))m++;for(;0<f-m;)w=qr(w),f--;for(;0<m-f;)h=qr(h),m--;for(;f--;){if(w===h||h!==null&&w===h.alternate)break t;w=qr(w),h=qr(h)}w=null}else w=null;v!==null&&zf(p,g,v,w,!1),x!==null&&k!==null&&zf(p,k,x,w,!0)}}e:{if(g=c?lo(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var A=bx;else if(Af(g))if($1)A=Sx;else{A=Cx;var M=wx}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(A=kx);if(A&&(A=A(e,c))){E1(p,A,n,d);break e}M&&M(e,g,c),e==="focusout"&&(M=g._wrapperState)&&M.controlled&&g.type==="number"&&Cu(g,"number",g.value)}switch(M=c?lo(c):window,e){case"focusin":(Af(M)||M.contentEditable==="true")&&(io=M,Ru=c,Ci=null);break;case"focusout":Ci=Ru=io=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,_f(p,n,d);break;case"selectionchange":if(Ax)break;case"keydown":case"keyup":_f(p,n,d)}var S;if(Yc)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else oo?k1(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(C1&&n.locale!=="ko"&&(oo||_!=="onCompositionStart"?_==="onCompositionEnd"&&oo&&(S=w1()):(lr=d,Uc="value"in lr?lr.value:lr.textContent,oo=!0)),M=il(c,_),0<M.length&&(_=new kf(_,e,null,n,d),p.push({event:_,listeners:M}),S?_.data=S:(S=S1(n),S!==null&&(_.data=S)))),(S=mx?gx(e,n):xx(e,n))&&(c=il(c,"onBeforeInput"),0<c.length&&(d=new kf("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=S))}L1(p,t)})}function Vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function il(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ii(e,n),i!=null&&r.unshift(Vi(e,i,o)),i=Ii(e,t),i!=null&&r.push(Vi(e,i,o))),e=e.return}return r}function qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zf(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,o?(s=Ii(n,i),s!=null&&a.unshift(Vi(n,s,l))):o||(s=Ii(n,i),s!=null&&a.push(Vi(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Px=/\r\n?/g,_x=/\u0000|\uFFFD/g;function Lf(e){return(typeof e=="string"?e:""+e).replace(Px,`
`).replace(_x,"")}function xa(e,t,n){if(t=Lf(t),Lf(e)!==t&&n)throw Error(N(425))}function al(){}var Lu=null,Du=null;function Fu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nu=typeof setTimeout=="function"?setTimeout:void 0,Ix=typeof clearTimeout=="function"?clearTimeout:void 0,Df=typeof Promise=="function"?Promise:void 0,Rx=typeof queueMicrotask=="function"?queueMicrotask:typeof Df!="undefined"?function(e){return Df.resolve(null).then(e).catch(zx)}:Nu;function zx(e){setTimeout(function(){throw e})}function Ds(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Li(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Li(t)}function fr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var No=Math.random().toString(36).slice(2),Pn="__reactFiber$"+No,Bi="__reactProps$"+No,Zn="__reactContainer$"+No,Vu="__reactEvents$"+No,Lx="__reactListeners$"+No,Dx="__reactHandles$"+No;function _r(e){var t=e[Pn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zn]||n[Pn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ff(e);e!==null;){if(n=e[Pn])return n;e=Ff(e)}return t}e=n,n=e.parentNode}return null}function na(e){return e=e[Pn]||e[Zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Nl(e){return e[Bi]||null}var Bu=[],so=-1;function Cr(e){return{current:e}}function Ie(e){0>so||(e.current=Bu[so],Bu[so]=null,so--)}function Oe(e,t){so++,Bu[so]=e.current,e.current=t}var yr={},mt=Cr(yr),_t=Cr(!1),Fr=yr;function Eo(e,t){var n=e.type.contextTypes;if(!n)return yr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function It(e){return e=e.childContextTypes,e!=null}function ll(){Ie(_t),Ie(mt)}function Nf(e,t,n){if(mt.current!==yr)throw Error(N(168));Oe(mt,t),Oe(_t,n)}function F1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(N(108,wg(e)||"Unknown",o));return De({},n,r)}function sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yr,Fr=mt.current,Oe(mt,e),Oe(_t,_t.current),!0}function Vf(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=F1(e,t,Fr),r.__reactInternalMemoizedMergedChildContext=e,Ie(_t),Ie(mt),Oe(mt,e)):Ie(_t),Oe(_t,n)}var jn=null,Vl=!1,Fs=!1;function N1(e){jn===null?jn=[e]:jn.push(e)}function Fx(e){Vl=!0,N1(e)}function kr(){if(!Fs&&jn!==null){Fs=!0;var e=0,t=ke;try{var n=jn;for(ke=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jn=null,Vl=!1}catch(o){throw jn!==null&&(jn=jn.slice(e+1)),c1(Vc,kr),o}finally{ke=t,Fs=!1}}return null}var uo=[],co=0,ul=null,cl=0,qt=[],Jt=0,Nr=null,Un=1,Wn="";function Mr(e,t){uo[co++]=cl,uo[co++]=ul,ul=e,cl=t}function V1(e,t,n){qt[Jt++]=Un,qt[Jt++]=Wn,qt[Jt++]=Nr,Nr=e;var r=Un;e=Wn;var o=32-bn(r)-1;r&=~(1<<o),n+=1;var i=32-bn(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Un=1<<32-bn(t)+o|n<<o|r,Wn=i+e}else Un=1<<i|n<<o|r,Wn=e}function Qc(e){e.return!==null&&(Mr(e,1),V1(e,1,0))}function Xc(e){for(;e===ul;)ul=uo[--co],uo[co]=null,cl=uo[--co],uo[co]=null;for(;e===Nr;)Nr=qt[--Jt],qt[Jt]=null,Wn=qt[--Jt],qt[Jt]=null,Un=qt[--Jt],qt[Jt]=null}var Ut=null,Ht=null,Re=!1,mn=null;function B1(e,t){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ut=e,Ht=fr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ut=e,Ht=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nr!==null?{id:Un,overflow:Wn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ut=e,Ht=null,!0):!1;default:return!1}}function ju(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hu(e){if(Re){var t=Ht;if(t){var n=t;if(!Bf(e,t)){if(ju(e))throw Error(N(418));t=fr(n.nextSibling);var r=Ut;t&&Bf(e,t)?B1(r,n):(e.flags=e.flags&-4097|2,Re=!1,Ut=e)}}else{if(ju(e))throw Error(N(418));e.flags=e.flags&-4097|2,Re=!1,Ut=e}}}function jf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ut=e}function va(e){if(e!==Ut)return!1;if(!Re)return jf(e),Re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fu(e.type,e.memoizedProps)),t&&(t=Ht)){if(ju(e))throw j1(),Error(N(418));for(;t;)B1(e,t),t=fr(t.nextSibling)}if(jf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ht=fr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ht=null}}else Ht=Ut?fr(e.stateNode.nextSibling):null;return!0}function j1(){for(var e=Ht;e;)e=fr(e.nextSibling)}function $o(){Ht=Ut=null,Re=!1}function Kc(e){mn===null?mn=[e]:mn.push(e)}var Nx=Kn.ReactCurrentBatchConfig;function Xo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function ya(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hf(e){var t=e._init;return t(e._payload)}function H1(e){function t(h,f){if(e){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function o(h,f){return h=gr(h,f),h.index=0,h.sibling=null,h}function i(h,f,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,f,m,E){return f===null||f.tag!==6?(f=Ws(m,h.mode,E),f.return=h,f):(f=o(f,m),f.return=h,f)}function s(h,f,m,E){var A=m.type;return A===ro?d(h,f,m.props.children,E,m.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===rr&&Hf(A)===f.type)?(E=o(f,m.props),E.ref=Xo(h,f,m),E.return=h,E):(E=Ga(m.type,m.key,m.props,null,h.mode,E),E.ref=Xo(h,f,m),E.return=h,E)}function c(h,f,m,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Gs(m,h.mode,E),f.return=h,f):(f=o(f,m.children||[]),f.return=h,f)}function d(h,f,m,E,A){return f===null||f.tag!==7?(f=Lr(m,h.mode,E,A),f.return=h,f):(f=o(f,m),f.return=h,f)}function p(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ws(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case sa:return m=Ga(f.type,f.key,f.props,null,h.mode,m),m.ref=Xo(h,null,f),m.return=h,m;case no:return f=Gs(f,h.mode,m),f.return=h,f;case rr:var E=f._init;return p(h,E(f._payload),m)}if(mi(f)||Wo(f))return f=Lr(f,h.mode,m,null),f.return=h,f;ya(h,f)}return null}function g(h,f,m,E){var A=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return A!==null?null:l(h,f,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case sa:return m.key===A?s(h,f,m,E):null;case no:return m.key===A?c(h,f,m,E):null;case rr:return A=m._init,g(h,f,A(m._payload),E)}if(mi(m)||Wo(m))return A!==null?null:d(h,f,m,E,null);ya(h,m)}return null}function v(h,f,m,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(m)||null,l(f,h,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case sa:return h=h.get(E.key===null?m:E.key)||null,s(f,h,E,A);case no:return h=h.get(E.key===null?m:E.key)||null,c(f,h,E,A);case rr:var M=E._init;return v(h,f,m,M(E._payload),A)}if(mi(E)||Wo(E))return h=h.get(m)||null,d(f,h,E,A,null);ya(f,E)}return null}function x(h,f,m,E){for(var A=null,M=null,S=f,_=f=0,P=null;S!==null&&_<m.length;_++){S.index>_?(P=S,S=null):P=S.sibling;var R=g(h,S,m[_],E);if(R===null){S===null&&(S=P);break}e&&S&&R.alternate===null&&t(h,S),f=i(R,f,_),M===null?A=R:M.sibling=R,M=R,S=P}if(_===m.length)return n(h,S),Re&&Mr(h,_),A;if(S===null){for(;_<m.length;_++)S=p(h,m[_],E),S!==null&&(f=i(S,f,_),M===null?A=S:M.sibling=S,M=S);return Re&&Mr(h,_),A}for(S=r(h,S);_<m.length;_++)P=v(S,h,_,m[_],E),P!==null&&(e&&P.alternate!==null&&S.delete(P.key===null?_:P.key),f=i(P,f,_),M===null?A=P:M.sibling=P,M=P);return e&&S.forEach(function(D){return t(h,D)}),Re&&Mr(h,_),A}function w(h,f,m,E){var A=Wo(m);if(typeof A!="function")throw Error(N(150));if(m=A.call(m),m==null)throw Error(N(151));for(var M=A=null,S=f,_=f=0,P=null,R=m.next();S!==null&&!R.done;_++,R=m.next()){S.index>_?(P=S,S=null):P=S.sibling;var D=g(h,S,R.value,E);if(D===null){S===null&&(S=P);break}e&&S&&D.alternate===null&&t(h,S),f=i(D,f,_),M===null?A=D:M.sibling=D,M=D,S=P}if(R.done)return n(h,S),Re&&Mr(h,_),A;if(S===null){for(;!R.done;_++,R=m.next())R=p(h,R.value,E),R!==null&&(f=i(R,f,_),M===null?A=R:M.sibling=R,M=R);return Re&&Mr(h,_),A}for(S=r(h,S);!R.done;_++,R=m.next())R=v(S,h,_,R.value,E),R!==null&&(e&&R.alternate!==null&&S.delete(R.key===null?_:R.key),f=i(R,f,_),M===null?A=R:M.sibling=R,M=R);return e&&S.forEach(function(U){return t(h,U)}),Re&&Mr(h,_),A}function k(h,f,m,E){if(typeof m=="object"&&m!==null&&m.type===ro&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case sa:e:{for(var A=m.key,M=f;M!==null;){if(M.key===A){if(A=m.type,A===ro){if(M.tag===7){n(h,M.sibling),f=o(M,m.props.children),f.return=h,h=f;break e}}else if(M.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===rr&&Hf(A)===M.type){n(h,M.sibling),f=o(M,m.props),f.ref=Xo(h,M,m),f.return=h,h=f;break e}n(h,M);break}else t(h,M);M=M.sibling}m.type===ro?(f=Lr(m.props.children,h.mode,E,m.key),f.return=h,h=f):(E=Ga(m.type,m.key,m.props,null,h.mode,E),E.ref=Xo(h,f,m),E.return=h,h=E)}return a(h);case no:e:{for(M=m.key;f!==null;){if(f.key===M)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=o(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=Gs(m,h.mode,E),f.return=h,h=f}return a(h);case rr:return M=m._init,k(h,f,M(m._payload),E)}if(mi(m))return x(h,f,m,E);if(Wo(m))return w(h,f,m,E);ya(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=o(f,m),f.return=h,h=f):(n(h,f),f=Ws(m,h.mode,E),f.return=h,h=f),a(h)):n(h,f)}return k}var Ao=H1(!0),U1=H1(!1),dl=Cr(null),fl=null,fo=null,qc=null;function Jc(){qc=fo=fl=null}function ed(e){var t=dl.current;Ie(dl),e._currentValue=t}function Uu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wo(e,t){fl=e,qc=fo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Pt=!0),e.firstContext=null)}function nn(e){var t=e._currentValue;if(qc!==e)if(e={context:e,memoizedValue:t,next:null},fo===null){if(fl===null)throw Error(N(308));fo=e,fl.dependencies={lanes:0,firstContext:e}}else fo=fo.next=e;return t}var Ir=null;function td(e){Ir===null?Ir=[e]:Ir.push(e)}function W1(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,td(t)):(n.next=o.next,o.next=n),t.interleaved=n,Qn(e,r)}function Qn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var or=!1;function nd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function G1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ve&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Qn(e,n)}return o=r.interleaved,o===null?(t.next=t,td(r)):(t.next=o.next,o.next=t),r.interleaved=t,Qn(e,n)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bc(e,n)}}function Uf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function pl(e,t,n,r){var o=e.updateQueue;or=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?i=c:a.next=c,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;a=0,d=c=s=null,l=i;do{var g=l.lane,v=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,w=l;switch(g=t,v=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){p=x.call(v,p,g);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(v,p,g):x,g==null)break e;p=De({},p,g);break e;case 2:or=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=v,s=p):d=d.next=v,a|=g;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;g=l,l=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(d===null&&(s=p),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Br|=a,e.lanes=a,e.memoizedState=p}}function Wf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(N(191,o));o.call(r)}}}var ra={},In=Cr(ra),ji=Cr(ra),Hi=Cr(ra);function Rr(e){if(e===ra)throw Error(N(174));return e}function rd(e,t){switch(Oe(Hi,t),Oe(ji,e),Oe(In,ra),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Su(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Su(t,e)}Ie(In),Oe(In,t)}function Oo(){Ie(In),Ie(ji),Ie(Hi)}function Y1(e){Rr(Hi.current);var t=Rr(In.current),n=Su(t,e.type);t!==n&&(Oe(ji,e),Oe(In,n))}function od(e){ji.current===e&&(Ie(In),Ie(ji))}var ze=Cr(0);function hl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ns=[];function id(){for(var e=0;e<Ns.length;e++)Ns[e]._workInProgressVersionPrimary=null;Ns.length=0}var Ba=Kn.ReactCurrentDispatcher,Vs=Kn.ReactCurrentBatchConfig,Vr=0,Le=null,Je=null,rt=null,ml=!1,ki=!1,Ui=0,Vx=0;function dt(){throw Error(N(321))}function ad(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kn(e[n],t[n]))return!1;return!0}function ld(e,t,n,r,o,i){if(Vr=i,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ba.current=e===null||e.memoizedState===null?Ux:Wx,e=n(r,o),ki){i=0;do{if(ki=!1,Ui=0,25<=i)throw Error(N(301));i+=1,rt=Je=null,t.updateQueue=null,Ba.current=Gx,e=n(r,o)}while(ki)}if(Ba.current=gl,t=Je!==null&&Je.next!==null,Vr=0,rt=Je=Le=null,ml=!1,t)throw Error(N(300));return e}function sd(){var e=Ui!==0;return Ui=0,e}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Le.memoizedState=rt=e:rt=rt.next=e,rt}function rn(){if(Je===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Je.next;var t=rt===null?Le.memoizedState:rt.next;if(t!==null)rt=t,Je=e;else{if(e===null)throw Error(N(310));Je=e,e={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},rt===null?Le.memoizedState=rt=e:rt=rt.next=e}return rt}function Wi(e,t){return typeof t=="function"?t(e):t}function Bs(e){var t=rn(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Je,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,c=i;do{var d=c.lane;if((Vr&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=p,a=r):s=s.next=p,Le.lanes|=d,Br|=d}c=c.next}while(c!==null&&c!==i);s===null?a=r:s.next=l,kn(r,t.memoizedState)||(Pt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Le.lanes|=i,Br|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function js(e){var t=rn(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);kn(i,t.memoizedState)||(Pt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Z1(){}function Q1(e,t){var n=Le,r=rn(),o=t(),i=!kn(r.memoizedState,o);if(i&&(r.memoizedState=o,Pt=!0),r=r.queue,ud(q1.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,Gi(9,K1.bind(null,n,r,o,t),void 0,null),ot===null)throw Error(N(349));(Vr&30)!==0||X1(n,t,o)}return o}function X1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function K1(e,t,n,r){t.value=n,t.getSnapshot=r,J1(t)&&eh(e)}function q1(e,t,n){return n(function(){J1(t)&&eh(e)})}function J1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kn(e,n)}catch{return!0}}function eh(e){var t=Qn(e,1);t!==null&&wn(t,e,1,-1)}function Gf(e){var t=On();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},t.queue=e,e=e.dispatch=Hx.bind(null,Le,e),[t.memoizedState,e]}function Gi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function th(){return rn().memoizedState}function ja(e,t,n,r){var o=On();Le.flags|=e,o.memoizedState=Gi(1|t,n,void 0,r===void 0?null:r)}function Bl(e,t,n,r){var o=rn();r=r===void 0?null:r;var i=void 0;if(Je!==null){var a=Je.memoizedState;if(i=a.destroy,r!==null&&ad(r,a.deps)){o.memoizedState=Gi(t,n,i,r);return}}Le.flags|=e,o.memoizedState=Gi(1|t,n,i,r)}function Yf(e,t){return ja(8390656,8,e,t)}function ud(e,t){return Bl(2048,8,e,t)}function nh(e,t){return Bl(4,2,e,t)}function rh(e,t){return Bl(4,4,e,t)}function oh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ih(e,t,n){return n=n!=null?n.concat([e]):null,Bl(4,4,oh.bind(null,t,e),n)}function cd(){}function ah(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ad(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function lh(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ad(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sh(e,t,n){return(Vr&21)===0?(e.baseState&&(e.baseState=!1,Pt=!0),e.memoizedState=n):(kn(n,t)||(n=p1(),Le.lanes|=n,Br|=n,e.baseState=!0),t)}function Bx(e,t){var n=ke;ke=n!==0&&4>n?n:4,e(!0);var r=Vs.transition;Vs.transition={};try{e(!1),t()}finally{ke=n,Vs.transition=r}}function uh(){return rn().memoizedState}function jx(e,t,n){var r=mr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ch(e))dh(t,n);else if(n=W1(e,t,n,r),n!==null){var o=$t();wn(n,e,r,o),fh(n,t,r)}}function Hx(e,t,n){var r=mr(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ch(e))dh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,kn(l,a)){var s=t.interleaved;s===null?(o.next=o,td(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=W1(e,t,o,r),n!==null&&(o=$t(),wn(n,e,r,o),fh(n,t,r))}}function ch(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function dh(e,t){ki=ml=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fh(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bc(e,n)}}var gl={readContext:nn,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},Ux={readContext:nn,useCallback:function(e,t){return On().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:Yf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ja(4194308,4,oh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ja(4194308,4,e,t)},useInsertionEffect:function(e,t){return ja(4,2,e,t)},useMemo:function(e,t){var n=On();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=On();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jx.bind(null,Le,e),[r.memoizedState,e]},useRef:function(e){var t=On();return e={current:e},t.memoizedState=e},useState:Gf,useDebugValue:cd,useDeferredValue:function(e){return On().memoizedState=e},useTransition:function(){var e=Gf(!1),t=e[0];return e=Bx.bind(null,e[1]),On().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Le,o=On();if(Re){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ot===null)throw Error(N(349));(Vr&30)!==0||X1(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Yf(q1.bind(null,r,i,e),[e]),r.flags|=2048,Gi(9,K1.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=On(),t=ot.identifierPrefix;if(Re){var n=Wn,r=Un;n=(r&~(1<<32-bn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wx={readContext:nn,useCallback:ah,useContext:nn,useEffect:ud,useImperativeHandle:ih,useInsertionEffect:nh,useLayoutEffect:rh,useMemo:lh,useReducer:Bs,useRef:th,useState:function(){return Bs(Wi)},useDebugValue:cd,useDeferredValue:function(e){var t=rn();return sh(t,Je.memoizedState,e)},useTransition:function(){var e=Bs(Wi)[0],t=rn().memoizedState;return[e,t]},useMutableSource:Z1,useSyncExternalStore:Q1,useId:uh,unstable_isNewReconciler:!1},Gx={readContext:nn,useCallback:ah,useContext:nn,useEffect:ud,useImperativeHandle:ih,useInsertionEffect:nh,useLayoutEffect:rh,useMemo:lh,useReducer:js,useRef:th,useState:function(){return js(Wi)},useDebugValue:cd,useDeferredValue:function(e){var t=rn();return Je===null?t.memoizedState=e:sh(t,Je.memoizedState,e)},useTransition:function(){var e=js(Wi)[0],t=rn().memoizedState;return[e,t]},useMutableSource:Z1,useSyncExternalStore:Q1,useId:uh,unstable_isNewReconciler:!1};function dn(e,t){if(e&&e.defaultProps){t=De({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Wu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:De({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jl={isMounted:function(e){return(e=e._reactInternals)?Gr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$t(),o=mr(e),i=Gn(r,o);i.payload=t,n!=null&&(i.callback=n),t=pr(e,i,o),t!==null&&(wn(t,e,o,r),Va(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$t(),o=mr(e),i=Gn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=pr(e,i,o),t!==null&&(wn(t,e,o,r),Va(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$t(),r=mr(e),o=Gn(n,r);o.tag=2,t!=null&&(o.callback=t),t=pr(e,o,r),t!==null&&(wn(t,e,r,n),Va(t,e,r))}};function Zf(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Fi(n,r)||!Fi(o,i):!0}function ph(e,t,n){var r=!1,o=yr,i=t.contextType;return typeof i=="object"&&i!==null?i=nn(i):(o=It(t)?Fr:mt.current,r=t.contextTypes,i=(r=r!=null)?Eo(e,o):yr),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Qf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jl.enqueueReplaceState(t,t.state,null)}function Gu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},nd(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=nn(i):(i=It(t)?Fr:mt.current,o.context=Eo(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Wu(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&jl.enqueueReplaceState(o,o.state,null),pl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function To(e,t){try{var n="",r=t;do n+=bg(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Hs(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Yu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Yx=typeof WeakMap=="function"?WeakMap:Map;function hh(e,t,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vl||(vl=!0,rc=r),Yu(e,t)},n}function mh(e,t,n){n=Gn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Yu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Yu(e,t),typeof r!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Xf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Yx;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=lv.bind(null,e,t,n),t.then(e,e))}function Kf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qf(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gn(-1,1),t.tag=2,pr(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Zx=Kn.ReactCurrentOwner,Pt=!1;function Et(e,t,n,r){t.child=e===null?U1(t,null,n,r):Ao(t,e.child,n,r)}function Jf(e,t,n,r,o){n=n.render;var i=t.ref;return wo(t,o),r=ld(e,t,n,r,i,o),n=sd(),e!==null&&!Pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Xn(e,t,o)):(Re&&n&&Qc(t),t.flags|=1,Et(e,t,r,o),t.child)}function ep(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!vd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,gh(e,t,i,r,o)):(e=Ga(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fi,n(a,r)&&e.ref===t.ref)return Xn(e,t,o)}return t.flags|=1,e=gr(i,r),e.ref=t.ref,e.return=t,t.child=e}function gh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Fi(i,r)&&e.ref===t.ref)if(Pt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Pt=!0);else return t.lanes=e.lanes,Xn(e,t,o)}return Zu(e,t,n,r,o)}function xh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(ho,jt),jt|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Oe(ho,jt),jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Oe(ho,jt),jt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Oe(ho,jt),jt|=r;return Et(e,t,o,n),t.child}function vh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zu(e,t,n,r,o){var i=It(n)?Fr:mt.current;return i=Eo(t,i),wo(t,o),n=ld(e,t,n,r,i,o),r=sd(),e!==null&&!Pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Xn(e,t,o)):(Re&&r&&Qc(t),t.flags|=1,Et(e,t,n,o),t.child)}function tp(e,t,n,r,o){if(It(n)){var i=!0;sl(t)}else i=!1;if(wo(t,o),t.stateNode===null)Ha(e,t),ph(t,n,r),Gu(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=nn(c):(c=It(n)?Fr:mt.current,c=Eo(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&Qf(t,a,r,c),or=!1;var g=t.memoizedState;a.state=g,pl(t,r,a,o),s=t.memoizedState,l!==r||g!==s||_t.current||or?(typeof d=="function"&&(Wu(t,n,d,r),s=t.memoizedState),(l=or||Zf(t,n,l,r,g,s,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,G1(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:dn(t.type,l),a.props=c,p=t.pendingProps,g=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=nn(s):(s=It(n)?Fr:mt.current,s=Eo(t,s));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||g!==s)&&Qf(t,a,r,s),or=!1,g=t.memoizedState,a.state=g,pl(t,r,a,o);var x=t.memoizedState;l!==p||g!==x||_t.current||or?(typeof v=="function"&&(Wu(t,n,v,r),x=t.memoizedState),(c=or||Zf(t,n,c,r,g,x,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Qu(e,t,n,r,i,o)}function Qu(e,t,n,r,o,i){vh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Vf(t,n,!1),Xn(e,t,i);r=t.stateNode,Zx.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ao(t,e.child,null,i),t.child=Ao(t,null,l,i)):Et(e,t,l,i),t.memoizedState=r.state,o&&Vf(t,n,!0),t.child}function yh(e){var t=e.stateNode;t.pendingContext?Nf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nf(e,t.context,!1),rd(e,t.containerInfo)}function np(e,t,n,r,o){return $o(),Kc(o),t.flags|=256,Et(e,t,n,r),t.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function Ku(e){return{baseLanes:e,cachePool:null,transitions:null}}function bh(e,t,n){var r=t.pendingProps,o=ze.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Oe(ze,o&1),e===null)return Hu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Wl(a,r,0,null),e=Lr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ku(n),t.memoizedState=Xu,e):dd(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Qx(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=gr(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=gr(l,i):(i=Lr(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Ku(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Xu,r}return i=e.child,e=i.sibling,r=gr(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function dd(e,t){return t=Wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ba(e,t,n,r){return r!==null&&Kc(r),Ao(t,e.child,null,n),e=dd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qx(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Hs(Error(N(422))),ba(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Wl({mode:"visible",children:r.children},o,0,null),i=Lr(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Ao(t,e.child,null,a),t.child.memoizedState=Ku(a),t.memoizedState=Xu,i);if((t.mode&1)===0)return ba(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(N(419)),r=Hs(i,r,void 0),ba(e,t,a,r)}if(l=(a&e.childLanes)!==0,Pt||l){if(r=ot,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Qn(e,o),wn(r,e,o,-1))}return xd(),r=Hs(Error(N(421))),ba(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=sv.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ht=fr(o.nextSibling),Ut=t,Re=!0,mn=null,e!==null&&(qt[Jt++]=Un,qt[Jt++]=Wn,qt[Jt++]=Nr,Un=e.id,Wn=e.overflow,Nr=t),t=dd(t,r.children),t.flags|=4096,t)}function rp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Uu(e.return,t,n)}function Us(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function wh(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Et(e,t,r.children,n),r=ze.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rp(e,n,t);else if(e.tag===19)rp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Oe(ze,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&hl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Us(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&hl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Us(t,!0,n,null,i);break;case"together":Us(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ha(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Br|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=gr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xx(e,t,n){switch(t.tag){case 3:yh(t),$o();break;case 5:Y1(t);break;case 1:It(t.type)&&sl(t);break;case 4:rd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Oe(dl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Oe(ze,ze.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?bh(e,t,n):(Oe(ze,ze.current&1),e=Xn(e,t,n),e!==null?e.sibling:null);Oe(ze,ze.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return wh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Oe(ze,ze.current),r)break;return null;case 22:case 23:return t.lanes=0,xh(e,t,n)}return Xn(e,t,n)}var Ch,qu,kh,Sh;Ch=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qu=function(){};kh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Rr(In.current);var i=null;switch(n){case"input":o=bu(e,o),r=bu(e,r),i=[];break;case"select":o=De({},o,{value:void 0}),r=De({},r,{value:void 0}),i=[];break;case"textarea":o=ku(e,o),r=ku(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=al)}Eu(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Pi.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Pi.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&_e("scroll",e),i||l===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Sh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ko(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ft(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kx(e,t,n){var r=t.pendingProps;switch(Xc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(t),null;case 1:return It(t.type)&&ll(),ft(t),null;case 3:return r=t.stateNode,Oo(),Ie(_t),Ie(mt),id(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(va(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mn!==null&&(ac(mn),mn=null))),qu(e,t),ft(t),null;case 5:od(t);var o=Rr(Hi.current);if(n=t.type,e!==null&&t.stateNode!=null)kh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return ft(t),null}if(e=Rr(In.current),va(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Pn]=t,r[Bi]=i,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(o=0;o<xi.length;o++)_e(xi[o],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":ff(r,i),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},_e("invalid",r);break;case"textarea":hf(r,i),_e("invalid",r)}Eu(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&xa(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&xa(r.textContent,l,e),o=["children",""+l]):Pi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&_e("scroll",r)}switch(n){case"input":ua(r),pf(r,i,!0);break;case"textarea":ua(r),mf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=al)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=q0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Pn]=t,e[Bi]=r,Ch(e,t,!1,!1),t.stateNode=e;e:{switch(a=$u(n,r),n){case"dialog":_e("cancel",e),_e("close",e),o=r;break;case"iframe":case"object":case"embed":_e("load",e),o=r;break;case"video":case"audio":for(o=0;o<xi.length;o++)_e(xi[o],e);o=r;break;case"source":_e("error",e),o=r;break;case"img":case"image":case"link":_e("error",e),_e("load",e),o=r;break;case"details":_e("toggle",e),o=r;break;case"input":ff(e,r),o=bu(e,r),_e("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=De({},r,{value:void 0}),_e("invalid",e);break;case"textarea":hf(e,r),o=ku(e,r),_e("invalid",e);break;default:o=r}Eu(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?t1(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&J0(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&_i(e,s):typeof s=="number"&&_i(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Pi.hasOwnProperty(i)?s!=null&&i==="onScroll"&&_e("scroll",e):s!=null&&zc(e,i,s,a))}switch(n){case"input":ua(e),pf(e,r,!1);break;case"textarea":ua(e),mf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vr(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?xo(e,!!r.multiple,i,!1):r.defaultValue!=null&&xo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ft(t),null;case 6:if(e&&t.stateNode!=null)Sh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Rr(Hi.current),Rr(In.current),va(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pn]=t,(i=r.nodeValue!==n)&&(e=Ut,e!==null))switch(e.tag){case 3:xa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xa(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pn]=t,t.stateNode=r}return ft(t),null;case 13:if(Ie(ze),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Re&&Ht!==null&&(t.mode&1)!==0&&(t.flags&128)===0)j1(),$o(),t.flags|=98560,i=!1;else if(i=va(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[Pn]=t}else $o(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ft(t),i=!1}else mn!==null&&(ac(mn),mn=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ze.current&1)!==0?et===0&&(et=3):xd())),t.updateQueue!==null&&(t.flags|=4),ft(t),null);case 4:return Oo(),qu(e,t),e===null&&Ni(t.stateNode.containerInfo),ft(t),null;case 10:return ed(t.type._context),ft(t),null;case 17:return It(t.type)&&ll(),ft(t),null;case 19:if(Ie(ze),i=t.memoizedState,i===null)return ft(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Ko(i,!1);else{if(et!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=hl(e),a!==null){for(t.flags|=128,Ko(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Oe(ze,ze.current&1|2),t.child}e=e.sibling}i.tail!==null&&je()>Mo&&(t.flags|=128,r=!0,Ko(i,!1),t.lanes=4194304)}else{if(!r)if(e=hl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ko(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Re)return ft(t),null}else 2*je()-i.renderingStartTime>Mo&&n!==1073741824&&(t.flags|=128,r=!0,Ko(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=je(),t.sibling=null,n=ze.current,Oe(ze,r?n&1|2:n&1),t):(ft(t),null);case 22:case 23:return gd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(jt&1073741824)!==0&&(ft(t),t.subtreeFlags&6&&(t.flags|=8192)):ft(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function qx(e,t){switch(Xc(t),t.tag){case 1:return It(t.type)&&ll(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Oo(),Ie(_t),Ie(mt),id(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return od(t),null;case 13:if(Ie(ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));$o()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(ze),null;case 4:return Oo(),null;case 10:return ed(t.type._context),null;case 22:case 23:return gd(),null;case 24:return null;default:return null}}var wa=!1,ht=!1,Jx=typeof WeakSet=="function"?WeakSet:Set,Q=null;function po(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(e,t,r)}else n.current=null}function Ju(e,t,n){try{n()}catch(r){Fe(e,t,r)}}var op=!1;function ev(e,t){if(Lu=rl,e=T1(),Zc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,d=0,p=e,g=null;t:for(;;){for(var v;p!==n||o!==0&&p.nodeType!==3||(l=a+o),p!==i||r!==0&&p.nodeType!==3||(s=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===e)break t;if(g===n&&++c===o&&(l=a),g===i&&++d===r&&(s=a),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Du={focusedElem:e,selectionRange:n},rl=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var x=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,k=x.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:dn(t.type,w),k);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(E){Fe(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return x=op,op=!1,x}function Si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ju(t,n,i)}o=o.next}while(o!==r)}}function Hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ec(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Eh(e){var t=e.alternate;t!==null&&(e.alternate=null,Eh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pn],delete t[Bi],delete t[Vu],delete t[Lx],delete t[Dx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $h(e){return e.tag===5||e.tag===3||e.tag===4}function ip(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$h(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=al));else if(r!==4&&(e=e.child,e!==null))for(tc(e,t,n),e=e.sibling;e!==null;)tc(e,t,n),e=e.sibling}function nc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nc(e,t,n),e=e.sibling;e!==null;)nc(e,t,n),e=e.sibling}var at=null,fn=!1;function nr(e,t,n){for(n=n.child;n!==null;)Ah(e,t,n),n=n.sibling}function Ah(e,t,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(zl,n)}catch{}switch(n.tag){case 5:ht||po(n,t);case 6:var r=at,o=fn;at=null,nr(e,t,n),at=r,fn=o,at!==null&&(fn?(e=at,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(fn?(e=at,n=n.stateNode,e.nodeType===8?Ds(e.parentNode,n):e.nodeType===1&&Ds(e,n),Li(e)):Ds(at,n.stateNode));break;case 4:r=at,o=fn,at=n.stateNode.containerInfo,fn=!0,nr(e,t,n),at=r,fn=o;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&Ju(n,t,a),o=o.next}while(o!==r)}nr(e,t,n);break;case 1:if(!ht&&(po(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Fe(n,t,l)}nr(e,t,n);break;case 21:nr(e,t,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,nr(e,t,n),ht=r):nr(e,t,n);break;default:nr(e,t,n)}}function ap(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jx),t.forEach(function(r){var o=uv.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function cn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:at=l.stateNode,fn=!1;break e;case 3:at=l.stateNode.containerInfo,fn=!0;break e;case 4:at=l.stateNode.containerInfo,fn=!0;break e}l=l.return}if(at===null)throw Error(N(160));Ah(i,a,o),at=null,fn=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){Fe(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Oh(t,e),t=t.sibling}function Oh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),$n(e),r&4){try{Si(3,e,e.return),Hl(3,e)}catch(w){Fe(e,e.return,w)}try{Si(5,e,e.return)}catch(w){Fe(e,e.return,w)}}break;case 1:cn(t,e),$n(e),r&512&&n!==null&&po(n,n.return);break;case 5:if(cn(t,e),$n(e),r&512&&n!==null&&po(n,n.return),e.flags&32){var o=e.stateNode;try{_i(o,"")}catch(w){Fe(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&X0(o,i),$u(l,a);var c=$u(l,i);for(a=0;a<s.length;a+=2){var d=s[a],p=s[a+1];d==="style"?t1(o,p):d==="dangerouslySetInnerHTML"?J0(o,p):d==="children"?_i(o,p):zc(o,d,p,c)}switch(l){case"input":wu(o,i);break;case"textarea":K0(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?xo(o,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?xo(o,!!i.multiple,i.defaultValue,!0):xo(o,!!i.multiple,i.multiple?[]:"",!1))}o[Bi]=i}catch(w){Fe(e,e.return,w)}}break;case 6:if(cn(t,e),$n(e),r&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){Fe(e,e.return,w)}}break;case 3:if(cn(t,e),$n(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Li(t.containerInfo)}catch(w){Fe(e,e.return,w)}break;case 4:cn(t,e),$n(e);break;case 13:cn(t,e),$n(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(hd=je())),r&4&&ap(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ht=(c=ht)||d,cn(t,e),ht=c):cn(t,e),$n(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&(e.mode&1)!==0)for(Q=e,d=e.child;d!==null;){for(p=Q=d;Q!==null;){switch(g=Q,v=g.child,g.tag){case 0:case 11:case 14:case 15:Si(4,g,g.return);break;case 1:po(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){Fe(r,n,w)}}break;case 5:po(g,g.return);break;case 22:if(g.memoizedState!==null){sp(p);continue}}v!==null?(v.return=g,Q=v):sp(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,s=p.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=e1("display",a))}catch(w){Fe(e,e.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){Fe(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:cn(t,e),$n(e),r&4&&ap(e);break;case 21:break;default:cn(t,e),$n(e)}}function $n(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($h(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(_i(o,""),r.flags&=-33);var i=ip(e);nc(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=ip(e);tc(e,l,a);break;default:throw Error(N(161))}}catch(s){Fe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tv(e,t,n){Q=e,Th(e)}function Th(e,t,n){for(var r=(e.mode&1)!==0;Q!==null;){var o=Q,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||wa;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||ht;l=wa;var c=ht;if(wa=a,(ht=s)&&!c)for(Q=o;Q!==null;)a=Q,s=a.child,a.tag===22&&a.memoizedState!==null?up(o):s!==null?(s.return=a,Q=s):up(o);for(;i!==null;)Q=i,Th(i),i=i.sibling;Q=o,wa=l,ht=c}lp(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,Q=i):lp(e)}}function lp(e){for(;Q!==null;){var t=Q;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ht||Hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ht)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:dn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Wf(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wf(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Li(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ht||t.flags&512&&ec(t)}catch(g){Fe(t,t.return,g)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function sp(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function up(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hl(4,t)}catch(s){Fe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Fe(t,o,s)}}var i=t.return;try{ec(t)}catch(s){Fe(t,i,s)}break;case 5:var a=t.return;try{ec(t)}catch(s){Fe(t,a,s)}}}catch(s){Fe(t,t.return,s)}if(t===e){Q=null;break}var l=t.sibling;if(l!==null){l.return=t.return,Q=l;break}Q=t.return}}var nv=Math.ceil,xl=Kn.ReactCurrentDispatcher,fd=Kn.ReactCurrentOwner,tn=Kn.ReactCurrentBatchConfig,ve=0,ot=null,We=null,ut=0,jt=0,ho=Cr(0),et=0,Yi=null,Br=0,Ul=0,pd=0,Ei=null,Mt=null,hd=0,Mo=1/0,Nn=null,vl=!1,rc=null,hr=null,Ca=!1,sr=null,yl=0,$i=0,oc=null,Ua=-1,Wa=0;function $t(){return(ve&6)!==0?je():Ua!==-1?Ua:Ua=je()}function mr(e){return(e.mode&1)===0?1:(ve&2)!==0&&ut!==0?ut&-ut:Nx.transition!==null?(Wa===0&&(Wa=p1()),Wa):(e=ke,e!==0||(e=window.event,e=e===void 0?16:b1(e.type)),e)}function wn(e,t,n,r){if(50<$i)throw $i=0,oc=null,Error(N(185));ea(e,n,r),((ve&2)===0||e!==ot)&&(e===ot&&((ve&2)===0&&(Ul|=n),et===4&&ar(e,ut)),Rt(e,r),n===1&&ve===0&&(t.mode&1)===0&&(Mo=je()+500,Vl&&kr()))}function Rt(e,t){var n=e.callbackNode;Ng(e,t);var r=nl(e,e===ot?ut:0);if(r===0)n!==null&&vf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&vf(n),t===1)e.tag===0?Fx(cp.bind(null,e)):N1(cp.bind(null,e)),Rx(function(){(ve&6)===0&&kr()}),n=null;else{switch(h1(r)){case 1:n=Vc;break;case 4:n=d1;break;case 16:n=tl;break;case 536870912:n=f1;break;default:n=tl}n=Dh(n,Mh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Mh(e,t){if(Ua=-1,Wa=0,(ve&6)!==0)throw Error(N(327));var n=e.callbackNode;if(Co()&&e.callbackNode!==n)return null;var r=nl(e,e===ot?ut:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=bl(e,r);else{t=r;var o=ve;ve|=2;var i=_h();(ot!==e||ut!==t)&&(Nn=null,Mo=je()+500,zr(e,t));do try{iv();break}catch(l){Ph(e,l)}while(1);Jc(),xl.current=i,ve=o,We!==null?t=0:(ot=null,ut=0,t=et)}if(t!==0){if(t===2&&(o=Pu(e),o!==0&&(r=o,t=ic(e,o))),t===1)throw n=Yi,zr(e,0),ar(e,r),Rt(e,je()),n;if(t===6)ar(e,r);else{if(o=e.current.alternate,(r&30)===0&&!rv(o)&&(t=bl(e,r),t===2&&(i=Pu(e),i!==0&&(r=i,t=ic(e,i))),t===1))throw n=Yi,zr(e,0),ar(e,r),Rt(e,je()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Pr(e,Mt,Nn);break;case 3:if(ar(e,r),(r&130023424)===r&&(t=hd+500-je(),10<t)){if(nl(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){$t(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Nu(Pr.bind(null,e,Mt,Nn),t);break}Pr(e,Mt,Nn);break;case 4:if(ar(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-bn(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nv(r/1960))-r,10<r){e.timeoutHandle=Nu(Pr.bind(null,e,Mt,Nn),r);break}Pr(e,Mt,Nn);break;case 5:Pr(e,Mt,Nn);break;default:throw Error(N(329))}}}return Rt(e,je()),e.callbackNode===n?Mh.bind(null,e):null}function ic(e,t){var n=Ei;return e.current.memoizedState.isDehydrated&&(zr(e,t).flags|=256),e=bl(e,t),e!==2&&(t=Mt,Mt=n,t!==null&&ac(t)),e}function ac(e){Mt===null?Mt=e:Mt.push.apply(Mt,e)}function rv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!kn(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ar(e,t){for(t&=~pd,t&=~Ul,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bn(t),r=1<<n;e[n]=-1,t&=~r}}function cp(e){if((ve&6)!==0)throw Error(N(327));Co();var t=nl(e,0);if((t&1)===0)return Rt(e,je()),null;var n=bl(e,t);if(e.tag!==0&&n===2){var r=Pu(e);r!==0&&(t=r,n=ic(e,r))}if(n===1)throw n=Yi,zr(e,0),ar(e,t),Rt(e,je()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pr(e,Mt,Nn),Rt(e,je()),null}function md(e,t){var n=ve;ve|=1;try{return e(t)}finally{ve=n,ve===0&&(Mo=je()+500,Vl&&kr())}}function jr(e){sr!==null&&sr.tag===0&&(ve&6)===0&&Co();var t=ve;ve|=1;var n=tn.transition,r=ke;try{if(tn.transition=null,ke=1,e)return e()}finally{ke=r,tn.transition=n,ve=t,(ve&6)===0&&kr()}}function gd(){jt=ho.current,Ie(ho)}function zr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ix(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(Xc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ll();break;case 3:Oo(),Ie(_t),Ie(mt),id();break;case 5:od(r);break;case 4:Oo();break;case 13:Ie(ze);break;case 19:Ie(ze);break;case 10:ed(r.type._context);break;case 22:case 23:gd()}n=n.return}if(ot=e,We=e=gr(e.current,null),ut=jt=t,et=0,Yi=null,pd=Ul=Br=0,Mt=Ei=null,Ir!==null){for(t=0;t<Ir.length;t++)if(n=Ir[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Ir=null}return e}function Ph(e,t){do{var n=We;try{if(Jc(),Ba.current=gl,ml){for(var r=Le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ml=!1}if(Vr=0,rt=Je=Le=null,ki=!1,Ui=0,fd.current=null,n===null||n.return===null){et=1,Yi=t,We=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=ut,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=l,p=d.tag;if((d.mode&1)===0&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Kf(a);if(v!==null){v.flags&=-257,qf(v,a,l,i,t),v.mode&1&&Xf(i,c,t),t=v,s=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(s),t.updateQueue=w}else x.add(s);break e}else{if((t&1)===0){Xf(i,c,t),xd();break e}s=Error(N(426))}}else if(Re&&l.mode&1){var k=Kf(a);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),qf(k,a,l,i,t),Kc(To(s,l));break e}}i=s=To(s,l),et!==4&&(et=2),Ei===null?Ei=[i]:Ei.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=hh(i,s,t);Uf(i,h);break e;case 1:l=s;var f=i.type,m=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(hr===null||!hr.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var E=mh(i,l,t);Uf(i,E);break e}}i=i.return}while(i!==null)}Rh(n)}catch(A){t=A,We===n&&n!==null&&(We=n=n.return);continue}break}while(1)}function _h(){var e=xl.current;return xl.current=gl,e===null?gl:e}function xd(){(et===0||et===3||et===2)&&(et=4),ot===null||(Br&268435455)===0&&(Ul&268435455)===0||ar(ot,ut)}function bl(e,t){var n=ve;ve|=2;var r=_h();(ot!==e||ut!==t)&&(Nn=null,zr(e,t));do try{ov();break}catch(o){Ph(e,o)}while(1);if(Jc(),ve=n,xl.current=r,We!==null)throw Error(N(261));return ot=null,ut=0,et}function ov(){for(;We!==null;)Ih(We)}function iv(){for(;We!==null&&!Mg();)Ih(We)}function Ih(e){var t=Lh(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?Rh(e):We=t,fd.current=null}function Rh(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Kx(n,t,jt),n!==null){We=n;return}}else{if(n=qx(n,t),n!==null){n.flags&=32767,We=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{et=6,We=null;return}}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);et===0&&(et=5)}function Pr(e,t,n){var r=ke,o=tn.transition;try{tn.transition=null,ke=1,av(e,t,n,r)}finally{tn.transition=o,ke=r}return null}function av(e,t,n,r){do Co();while(sr!==null);if((ve&6)!==0)throw Error(N(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Vg(e,i),e===ot&&(We=ot=null,ut=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ca||(Ca=!0,Dh(tl,function(){return Co(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=tn.transition,tn.transition=null;var a=ke;ke=1;var l=ve;ve|=4,fd.current=null,ev(e,n),Oh(n,e),$x(Du),rl=!!Lu,Du=Lu=null,e.current=n,tv(n),Pg(),ve=l,ke=a,tn.transition=i}else e.current=n;if(Ca&&(Ca=!1,sr=e,yl=o),i=e.pendingLanes,i===0&&(hr=null),Rg(n.stateNode),Rt(e,je()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(vl)throw vl=!1,e=rc,rc=null,e;return(yl&1)!==0&&e.tag!==0&&Co(),i=e.pendingLanes,(i&1)!==0?e===oc?$i++:($i=0,oc=e):$i=0,kr(),null}function Co(){if(sr!==null){var e=h1(yl),t=tn.transition,n=ke;try{if(tn.transition=null,ke=16>e?16:e,sr===null)var r=!1;else{if(e=sr,sr=null,yl=0,(ve&6)!==0)throw Error(N(331));var o=ve;for(ve|=4,Q=e.current;Q!==null;){var i=Q,a=i.child;if((Q.flags&16)!==0){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(Q=c;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:Si(8,d,i)}var p=d.child;if(p!==null)p.return=d,Q=p;else for(;Q!==null;){d=Q;var g=d.sibling,v=d.return;if(Eh(d),d===c){Q=null;break}if(g!==null){g.return=v,Q=g;break}Q=v}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}Q=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,Q=a;else e:for(;Q!==null;){if(i=Q,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Si(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,Q=h;break e}Q=i.return}}var f=e.current;for(Q=f;Q!==null;){a=Q;var m=a.child;if((a.subtreeFlags&2064)!==0&&m!==null)m.return=a,Q=m;else e:for(a=f;Q!==null;){if(l=Q,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Hl(9,l)}}catch(A){Fe(l,l.return,A)}if(l===a){Q=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,Q=E;break e}Q=l.return}}if(ve=o,kr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(zl,e)}catch{}r=!0}return r}finally{ke=n,tn.transition=t}}return!1}function dp(e,t,n){t=To(n,t),t=hh(e,t,1),e=pr(e,t,1),t=$t(),e!==null&&(ea(e,1,t),Rt(e,t))}function Fe(e,t,n){if(e.tag===3)dp(e,e,n);else for(;t!==null;){if(t.tag===3){dp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hr===null||!hr.has(r))){e=To(n,e),e=mh(t,e,1),t=pr(t,e,1),e=$t(),t!==null&&(ea(t,1,e),Rt(t,e));break}}t=t.return}}function lv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$t(),e.pingedLanes|=e.suspendedLanes&n,ot===e&&(ut&n)===n&&(et===4||et===3&&(ut&130023424)===ut&&500>je()-hd?zr(e,0):pd|=n),Rt(e,t)}function zh(e,t){t===0&&((e.mode&1)===0?t=1:(t=fa,fa<<=1,(fa&130023424)===0&&(fa=4194304)));var n=$t();e=Qn(e,t),e!==null&&(ea(e,t,n),Rt(e,n))}function sv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zh(e,n)}function uv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),zh(e,n)}var Lh;Lh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_t.current)Pt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Pt=!1,Xx(e,t,n);Pt=(e.flags&131072)!==0}else Pt=!1,Re&&(t.flags&1048576)!==0&&V1(t,cl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ha(e,t),e=t.pendingProps;var o=Eo(t,mt.current);wo(t,n),o=ld(null,t,r,e,o,n);var i=sd();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,It(r)?(i=!0,sl(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,nd(t),o.updater=jl,t.stateNode=o,o._reactInternals=t,Gu(t,r,e,n),t=Qu(null,t,r,!0,i,n)):(t.tag=0,Re&&i&&Qc(t),Et(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ha(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=dv(r),e=dn(r,e),o){case 0:t=Zu(null,t,r,e,n);break e;case 1:t=tp(null,t,r,e,n);break e;case 11:t=Jf(null,t,r,e,n);break e;case 14:t=ep(null,t,r,dn(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dn(r,o),Zu(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dn(r,o),tp(e,t,r,o,n);case 3:e:{if(yh(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,o=i.element,G1(e,t),pl(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=To(Error(N(423)),t),t=np(e,t,r,n,o);break e}else if(r!==o){o=To(Error(N(424)),t),t=np(e,t,r,n,o);break e}else for(Ht=fr(t.stateNode.containerInfo.firstChild),Ut=t,Re=!0,mn=null,n=U1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($o(),r===o){t=Xn(e,t,n);break e}Et(e,t,r,n)}t=t.child}return t;case 5:return Y1(t),e===null&&Hu(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Fu(r,o)?a=null:i!==null&&Fu(r,i)&&(t.flags|=32),vh(e,t),Et(e,t,a,n),t.child;case 6:return e===null&&Hu(t),null;case 13:return bh(e,t,n);case 4:return rd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ao(t,null,r,n):Et(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dn(r,o),Jf(e,t,r,o,n);case 7:return Et(e,t,t.pendingProps,n),t.child;case 8:return Et(e,t,t.pendingProps.children,n),t.child;case 12:return Et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,Oe(dl,r._currentValue),r._currentValue=a,i!==null)if(kn(i.value,a)){if(i.children===o.children&&!_t.current){t=Xn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Gn(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Uu(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(N(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Uu(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Et(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,wo(t,n),o=nn(o),r=r(o),t.flags|=1,Et(e,t,r,n),t.child;case 14:return r=t.type,o=dn(r,t.pendingProps),o=dn(r.type,o),ep(e,t,r,o,n);case 15:return gh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dn(r,o),Ha(e,t),t.tag=1,It(r)?(e=!0,sl(t)):e=!1,wo(t,n),ph(t,r,o),Gu(t,r,o,n),Qu(null,t,r,!0,e,n);case 19:return wh(e,t,n);case 22:return xh(e,t,n)}throw Error(N(156,t.tag))};function Dh(e,t){return c1(e,t)}function cv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,t,n,r){return new cv(e,t,n,r)}function vd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dv(e){if(typeof e=="function")return vd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Dc)return 11;if(e===Fc)return 14}return 2}function gr(e,t){var n=e.alternate;return n===null?(n=en(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ga(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")vd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ro:return Lr(n.children,o,i,t);case Lc:a=8,o|=8;break;case gu:return e=en(12,n,t,o|2),e.elementType=gu,e.lanes=i,e;case xu:return e=en(13,n,t,o),e.elementType=xu,e.lanes=i,e;case vu:return e=en(19,n,t,o),e.elementType=vu,e.lanes=i,e;case Y0:return Wl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W0:a=10;break e;case G0:a=9;break e;case Dc:a=11;break e;case Fc:a=14;break e;case rr:a=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=en(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Lr(e,t,n,r){return e=en(7,e,r,t),e.lanes=n,e}function Wl(e,t,n,r){return e=en(22,e,r,t),e.elementType=Y0,e.lanes=n,e.stateNode={isHidden:!1},e}function Ws(e,t,n){return e=en(6,e,null,t),e.lanes=n,e}function Gs(e,t,n){return t=en(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fv(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$s(0),this.expirationTimes=$s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$s(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function yd(e,t,n,r,o,i,a,l,s){return e=new fv(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=en(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nd(i),e}function pv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:no,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fh(e){if(!e)return yr;e=e._reactInternals;e:{if(Gr(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(It(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(It(n))return F1(e,n,t)}return t}function Nh(e,t,n,r,o,i,a,l,s){return e=yd(n,r,!0,e,o,i,a,l,s),e.context=Fh(null),n=e.current,r=$t(),o=mr(n),i=Gn(r,o),i.callback=t!=null?t:null,pr(n,i,o),e.current.lanes=o,ea(e,o,r),Rt(e,r),e}function Gl(e,t,n,r){var o=t.current,i=$t(),a=mr(o);return n=Fh(n),t.context===null?t.context=n:t.pendingContext=n,t=Gn(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pr(o,t,a),e!==null&&(wn(e,o,a,i),Va(e,o,a)),a}function wl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bd(e,t){fp(e,t),(e=e.alternate)&&fp(e,t)}function hv(){return null}var Vh=typeof reportError=="function"?reportError:function(e){console.error(e)};function wd(e){this._internalRoot=e}Yl.prototype.render=wd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Gl(e,t,null,null)};Yl.prototype.unmount=wd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jr(function(){Gl(null,e,null,null)}),t[Zn]=null}};function Yl(e){this._internalRoot=e}Yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=x1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ir.length&&t!==0&&t<ir[n].priority;n++);ir.splice(n,0,e),n===0&&y1(e)}};function Cd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pp(){}function mv(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=wl(a);i.call(c)}}var a=Nh(t,r,e,0,null,!1,!1,"",pp);return e._reactRootContainer=a,e[Zn]=a.current,Ni(e.nodeType===8?e.parentNode:e),jr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=wl(s);l.call(c)}}var s=yd(e,0,!1,null,null,!1,!1,"",pp);return e._reactRootContainer=s,e[Zn]=s.current,Ni(e.nodeType===8?e.parentNode:e),jr(function(){Gl(t,s,n,r)}),s}function Ql(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=wl(a);l.call(s)}}Gl(t,a,e,o)}else a=mv(n,t,e,o,r);return wl(a)}m1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gi(t.pendingLanes);n!==0&&(Bc(t,n|1),Rt(t,je()),(ve&6)===0&&(Mo=je()+500,kr()))}break;case 13:jr(function(){var r=Qn(e,1);if(r!==null){var o=$t();wn(r,e,1,o)}}),bd(e,1)}};jc=function(e){if(e.tag===13){var t=Qn(e,134217728);if(t!==null){var n=$t();wn(t,e,134217728,n)}bd(e,134217728)}};g1=function(e){if(e.tag===13){var t=mr(e),n=Qn(e,t);if(n!==null){var r=$t();wn(n,e,t,r)}bd(e,t)}};x1=function(){return ke};v1=function(e,t){var n=ke;try{return ke=e,t()}finally{ke=n}};Ou=function(e,t,n){switch(t){case"input":if(wu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Nl(r);if(!o)throw Error(N(90));Q0(r),wu(r,o)}}}break;case"textarea":K0(e,n);break;case"select":t=n.value,t!=null&&xo(e,!!n.multiple,t,!1)}};o1=md;i1=jr;var gv={usingClientEntryPoint:!1,Events:[na,lo,Nl,n1,r1,md]},qo={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xv={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=s1(e),e===null?null:e.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||hv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{zl=ka.inject(xv),_n=ka}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gv;Yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cd(t))throw Error(N(200));return pv(e,t,null,n)};Yt.createRoot=function(e,t){if(!Cd(e))throw Error(N(299));var n=!1,r="",o=Vh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=yd(e,1,!1,null,null,n,!1,r,o),e[Zn]=t.current,Ni(e.nodeType===8?e.parentNode:e),new wd(t)};Yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=s1(t),e=e===null?null:e.stateNode,e};Yt.flushSync=function(e){return jr(e)};Yt.hydrate=function(e,t,n){if(!Zl(t))throw Error(N(200));return Ql(null,e,t,!0,n)};Yt.hydrateRoot=function(e,t,n){if(!Cd(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Vh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Nh(t,null,e,1,n!=null?n:null,o,!1,i,a),e[Zn]=t.current,Ni(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Yl(t)};Yt.render=function(e,t,n){if(!Zl(t))throw Error(N(200));return Ql(null,e,t,!1,n)};Yt.unmountComponentAtNode=function(e){if(!Zl(e))throw Error(N(40));return e._reactRootContainer?(jr(function(){Ql(null,null,e,!1,function(){e._reactRootContainer=null,e[Zn]=null})}),!0):!1};Yt.unstable_batchedUpdates=md;Yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zl(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Ql(e,t,n,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function Bh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bh)}catch(e){console.error(e)}}Bh(),_c.exports=Yt;var jh,hp=_c.exports;jh=hp.createRoot,hp.hydrateRoot;var Xl={exports:{}},Kl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv=y.exports,yv=Symbol.for("react.element"),bv=Symbol.for("react.fragment"),wv=Object.prototype.hasOwnProperty,Cv=vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kv={key:!0,ref:!0,__self:!0,__source:!0};function Hh(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)wv.call(t,r)&&!kv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:yv,type:e,key:i,ref:a,props:o,_owner:Cv.current}}Kl.Fragment=bv;Kl.jsx=Hh;Kl.jsxs=Hh;Xl.exports=Kl;const u=Xl.exports.jsx,C=Xl.exports.jsxs,Tt=Xl.exports.Fragment,Uh=!1,Sv={display:{appearance:Uh,asynchronous:!1}},Wh=y.exports.createContext({}),Ev=({children:e})=>{const[t,n]=y.exports.useState(Sv),r=y.exports.useCallback(a=>{n(l=>({...l,display:{...a}}))},[n]),o=y.exports.useCallback(a=>{n(l=>({...l,locales:a}))},[n]);y.exports.useEffect(()=>{},[Uh,t.locales,o]);const i={display:t.display,setDisplay:r,locales:t.locales,setLocales:o};return u(Wh.Provider,{value:i,children:e})};function Vo(){return y.exports.useContext(Wh)}var ql={exports:{}},Se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var it=typeof Symbol=="function"&&Symbol.for,kd=it?Symbol.for("react.element"):60103,Sd=it?Symbol.for("react.portal"):60106,Jl=it?Symbol.for("react.fragment"):60107,es=it?Symbol.for("react.strict_mode"):60108,ts=it?Symbol.for("react.profiler"):60114,ns=it?Symbol.for("react.provider"):60109,rs=it?Symbol.for("react.context"):60110,Ed=it?Symbol.for("react.async_mode"):60111,os=it?Symbol.for("react.concurrent_mode"):60111,is=it?Symbol.for("react.forward_ref"):60112,as=it?Symbol.for("react.suspense"):60113,$v=it?Symbol.for("react.suspense_list"):60120,ls=it?Symbol.for("react.memo"):60115,ss=it?Symbol.for("react.lazy"):60116,Av=it?Symbol.for("react.block"):60121,Ov=it?Symbol.for("react.fundamental"):60117,Tv=it?Symbol.for("react.responder"):60118,Mv=it?Symbol.for("react.scope"):60119;function Qt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case kd:switch(e=e.type,e){case Ed:case os:case Jl:case ts:case es:case as:return e;default:switch(e=e&&e.$$typeof,e){case rs:case is:case ss:case ls:case ns:return e;default:return t}}case Sd:return t}}}function Gh(e){return Qt(e)===os}Se.AsyncMode=Ed;Se.ConcurrentMode=os;Se.ContextConsumer=rs;Se.ContextProvider=ns;Se.Element=kd;Se.ForwardRef=is;Se.Fragment=Jl;Se.Lazy=ss;Se.Memo=ls;Se.Portal=Sd;Se.Profiler=ts;Se.StrictMode=es;Se.Suspense=as;Se.isAsyncMode=function(e){return Gh(e)||Qt(e)===Ed};Se.isConcurrentMode=Gh;Se.isContextConsumer=function(e){return Qt(e)===rs};Se.isContextProvider=function(e){return Qt(e)===ns};Se.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===kd};Se.isForwardRef=function(e){return Qt(e)===is};Se.isFragment=function(e){return Qt(e)===Jl};Se.isLazy=function(e){return Qt(e)===ss};Se.isMemo=function(e){return Qt(e)===ls};Se.isPortal=function(e){return Qt(e)===Sd};Se.isProfiler=function(e){return Qt(e)===ts};Se.isStrictMode=function(e){return Qt(e)===es};Se.isSuspense=function(e){return Qt(e)===as};Se.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Jl||e===os||e===ts||e===es||e===as||e===$v||typeof e=="object"&&e!==null&&(e.$$typeof===ss||e.$$typeof===ls||e.$$typeof===ns||e.$$typeof===rs||e.$$typeof===is||e.$$typeof===Ov||e.$$typeof===Tv||e.$$typeof===Mv||e.$$typeof===Av)};Se.typeOf=Qt;ql.exports=Se;function Pv(e){function t(I,V,W,q,O){for(var ie=0,B=0,ye=0,me=0,ge,oe,Ne=0,Te=0,se,Ve=se=ge=0,xe=0,Ge=0,zn=0,Be=0,qn=W.length,Sr=qn-1,Dt,ae="",Me="",Ln="",Yr="",an;xe<qn;){if(oe=W.charCodeAt(xe),xe===Sr&&B+me+ye+ie!==0&&(B!==0&&(oe=B===47?10:47),me=ye=ie=0,qn++,Sr++),B+me+ye+ie===0){if(xe===Sr&&(0<Ge&&(ae=ae.replace(g,"")),0<ae.trim().length)){switch(oe){case 32:case 9:case 59:case 13:case 10:break;default:ae+=W.charAt(xe)}oe=59}switch(oe){case 123:for(ae=ae.trim(),ge=ae.charCodeAt(0),se=1,Be=++xe;xe<qn;){switch(oe=W.charCodeAt(xe)){case 123:se++;break;case 125:se--;break;case 47:switch(oe=W.charCodeAt(xe+1)){case 42:case 47:e:{for(Ve=xe+1;Ve<Sr;++Ve)switch(W.charCodeAt(Ve)){case 47:if(oe===42&&W.charCodeAt(Ve-1)===42&&xe+2!==Ve){xe=Ve+1;break e}break;case 10:if(oe===47){xe=Ve+1;break e}}xe=Ve}}break;case 91:oe++;case 40:oe++;case 34:case 39:for(;xe++<Sr&&W.charCodeAt(xe)!==oe;);}if(se===0)break;xe++}switch(se=W.substring(Be,xe),ge===0&&(ge=(ae=ae.replace(p,"").trim()).charCodeAt(0)),ge){case 64:switch(0<Ge&&(ae=ae.replace(g,"")),oe=ae.charCodeAt(1),oe){case 100:case 109:case 115:case 45:Ge=V;break;default:Ge=F}if(se=t(V,Ge,se,oe,O+1),Be=se.length,0<L&&(Ge=n(F,ae,zn),an=l(3,se,Ge,V,Y,U,Be,oe,O,q),ae=Ge.join(""),an!==void 0&&(Be=(se=an.trim()).length)===0&&(oe=0,se="")),0<Be)switch(oe){case 115:ae=ae.replace(M,a);case 100:case 109:case 45:se=ae+"{"+se+"}";break;case 107:ae=ae.replace(f,"$1 $2"),se=ae+"{"+se+"}",se=K===1||K===2&&i("@"+se,3)?"@-webkit-"+se+"@"+se:"@"+se;break;default:se=ae+se,q===112&&(se=(Me+=se,""))}else se="";break;default:se=t(V,n(V,ae,zn),se,q,O+1)}Ln+=se,se=zn=Ge=Ve=ge=0,ae="",oe=W.charCodeAt(++xe);break;case 125:case 59:if(ae=(0<Ge?ae.replace(g,""):ae).trim(),1<(Be=ae.length))switch(Ve===0&&(ge=ae.charCodeAt(0),ge===45||96<ge&&123>ge)&&(Be=(ae=ae.replace(" ",":")).length),0<L&&(an=l(1,ae,V,I,Y,U,Me.length,q,O,q))!==void 0&&(Be=(ae=an.trim()).length)===0&&(ae="\0\0"),ge=ae.charCodeAt(0),oe=ae.charCodeAt(1),ge){case 0:break;case 64:if(oe===105||oe===99){Yr+=ae+W.charAt(xe);break}default:ae.charCodeAt(Be-1)!==58&&(Me+=o(ae,ge,oe,ae.charCodeAt(2)))}zn=Ge=Ve=ge=0,ae="",oe=W.charCodeAt(++xe)}}switch(oe){case 13:case 10:B===47?B=0:1+ge===0&&q!==107&&0<ae.length&&(Ge=1,ae+="\0"),0<L*Z&&l(0,ae,V,I,Y,U,Me.length,q,O,q),U=1,Y++;break;case 59:case 125:if(B+me+ye+ie===0){U++;break}default:switch(U++,Dt=W.charAt(xe),oe){case 9:case 32:if(me+ie+B===0)switch(Ne){case 44:case 58:case 9:case 32:Dt="";break;default:oe!==32&&(Dt=" ")}break;case 0:Dt="\\0";break;case 12:Dt="\\f";break;case 11:Dt="\\v";break;case 38:me+B+ie===0&&(Ge=zn=1,Dt="\f"+Dt);break;case 108:if(me+B+ie+j===0&&0<Ve)switch(xe-Ve){case 2:Ne===112&&W.charCodeAt(xe-3)===58&&(j=Ne);case 8:Te===111&&(j=Te)}break;case 58:me+B+ie===0&&(Ve=xe);break;case 44:B+ye+me+ie===0&&(Ge=1,Dt+="\r");break;case 34:case 39:B===0&&(me=me===oe?0:me===0?oe:me);break;case 91:me+B+ye===0&&ie++;break;case 93:me+B+ye===0&&ie--;break;case 41:me+B+ie===0&&ye--;break;case 40:if(me+B+ie===0){if(ge===0)switch(2*Ne+3*Te){case 533:break;default:ge=1}ye++}break;case 64:B+ye+me+ie+Ve+se===0&&(se=1);break;case 42:case 47:if(!(0<me+ie+ye))switch(B){case 0:switch(2*oe+3*W.charCodeAt(xe+1)){case 235:B=47;break;case 220:Be=xe,B=42}break;case 42:oe===47&&Ne===42&&Be+2!==xe&&(W.charCodeAt(Be+2)===33&&(Me+=W.substring(Be,xe+1)),Dt="",B=0)}}B===0&&(ae+=Dt)}Te=Ne,Ne=oe,xe++}if(Be=Me.length,0<Be){if(Ge=V,0<L&&(an=l(2,Me,Ge,I,Y,U,Be,q,O,q),an!==void 0&&(Me=an).length===0))return Yr+Me+Ln;if(Me=Ge.join(",")+"{"+Me+"}",K*j!==0){switch(K!==2||i(Me,2)||(j=0),j){case 111:Me=Me.replace(E,":-moz-$1")+Me;break;case 112:Me=Me.replace(m,"::-webkit-input-$1")+Me.replace(m,"::-moz-$1")+Me.replace(m,":-ms-input-$1")+Me}j=0}}return Yr+Me+Ln}function n(I,V,W){var q=V.trim().split(k);V=q;var O=q.length,ie=I.length;switch(ie){case 0:case 1:var B=0;for(I=ie===0?"":I[0]+" ";B<O;++B)V[B]=r(I,V[B],W).trim();break;default:var ye=B=0;for(V=[];B<O;++B)for(var me=0;me<ie;++me)V[ye++]=r(I[me]+" ",q[B],W).trim()}return V}function r(I,V,W){var q=V.charCodeAt(0);switch(33>q&&(q=(V=V.trim()).charCodeAt(0)),q){case 38:return V.replace(h,"$1"+I.trim());case 58:return I.trim()+V.replace(h,"$1"+I.trim());default:if(0<1*W&&0<V.indexOf("\f"))return V.replace(h,(I.charCodeAt(0)===58?"":"$1")+I.trim())}return I+V}function o(I,V,W,q){var O=I+";",ie=2*V+3*W+4*q;if(ie===944){I=O.indexOf(":",9)+1;var B=O.substring(I,O.length-1).trim();return B=O.substring(0,I).trim()+B+";",K===1||K===2&&i(B,1)?"-webkit-"+B+B:B}if(K===0||K===2&&!i(O,1))return O;switch(ie){case 1015:return O.charCodeAt(10)===97?"-webkit-"+O+O:O;case 951:return O.charCodeAt(3)===116?"-webkit-"+O+O:O;case 963:return O.charCodeAt(5)===110?"-webkit-"+O+O:O;case 1009:if(O.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+O+O;case 978:return"-webkit-"+O+"-moz-"+O+O;case 1019:case 983:return"-webkit-"+O+"-moz-"+O+"-ms-"+O+O;case 883:if(O.charCodeAt(8)===45)return"-webkit-"+O+O;if(0<O.indexOf("image-set(",11))return O.replace(D,"$1-webkit-$2")+O;break;case 932:if(O.charCodeAt(4)===45)switch(O.charCodeAt(5)){case 103:return"-webkit-box-"+O.replace("-grow","")+"-webkit-"+O+"-ms-"+O.replace("grow","positive")+O;case 115:return"-webkit-"+O+"-ms-"+O.replace("shrink","negative")+O;case 98:return"-webkit-"+O+"-ms-"+O.replace("basis","preferred-size")+O}return"-webkit-"+O+"-ms-"+O+O;case 964:return"-webkit-"+O+"-ms-flex-"+O+O;case 1023:if(O.charCodeAt(8)!==99)break;return B=O.substring(O.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+B+"-webkit-"+O+"-ms-flex-pack"+B+O;case 1005:return x.test(O)?O.replace(v,":-webkit-")+O.replace(v,":-moz-")+O:O;case 1e3:switch(B=O.substring(13).trim(),V=B.indexOf("-")+1,B.charCodeAt(0)+B.charCodeAt(V)){case 226:B=O.replace(A,"tb");break;case 232:B=O.replace(A,"tb-rl");break;case 220:B=O.replace(A,"lr");break;default:return O}return"-webkit-"+O+"-ms-"+B+O;case 1017:if(O.indexOf("sticky",9)===-1)break;case 975:switch(V=(O=I).length-10,B=(O.charCodeAt(V)===33?O.substring(0,V):O).substring(I.indexOf(":",7)+1).trim(),ie=B.charCodeAt(0)+(B.charCodeAt(7)|0)){case 203:if(111>B.charCodeAt(8))break;case 115:O=O.replace(B,"-webkit-"+B)+";"+O;break;case 207:case 102:O=O.replace(B,"-webkit-"+(102<ie?"inline-":"")+"box")+";"+O.replace(B,"-webkit-"+B)+";"+O.replace(B,"-ms-"+B+"box")+";"+O}return O+";";case 938:if(O.charCodeAt(5)===45)switch(O.charCodeAt(6)){case 105:return B=O.replace("-items",""),"-webkit-"+O+"-webkit-box-"+B+"-ms-flex-"+B+O;case 115:return"-webkit-"+O+"-ms-flex-item-"+O.replace(_,"")+O;default:return"-webkit-"+O+"-ms-flex-line-pack"+O.replace("align-content","").replace(_,"")+O}break;case 973:case 989:if(O.charCodeAt(3)!==45||O.charCodeAt(4)===122)break;case 931:case 953:if(R.test(I)===!0)return(B=I.substring(I.indexOf(":")+1)).charCodeAt(0)===115?o(I.replace("stretch","fill-available"),V,W,q).replace(":fill-available",":stretch"):O.replace(B,"-webkit-"+B)+O.replace(B,"-moz-"+B.replace("fill-",""))+O;break;case 962:if(O="-webkit-"+O+(O.charCodeAt(5)===102?"-ms-"+O:"")+O,W+q===211&&O.charCodeAt(13)===105&&0<O.indexOf("transform",10))return O.substring(0,O.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+O}return O}function i(I,V){var W=I.indexOf(V===1?":":"{"),q=I.substring(0,V!==3?W:10);return W=I.substring(W+1,I.length-1),G(V!==2?q:q.replace(P,"$1"),W,V)}function a(I,V){var W=o(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return W!==V+";"?W.replace(S," or ($1)").substring(4):"("+V+")"}function l(I,V,W,q,O,ie,B,ye,me,ge){for(var oe=0,Ne=V,Te;oe<L;++oe)switch(Te=J[oe].call(d,I,Ne,W,q,O,ie,B,ye,me,ge)){case void 0:case!1:case!0:case null:break;default:Ne=Te}if(Ne!==V)return Ne}function s(I){switch(I){case void 0:case null:L=J.length=0;break;default:if(typeof I=="function")J[L++]=I;else if(typeof I=="object")for(var V=0,W=I.length;V<W;++V)s(I[V]);else Z=!!I|0}return s}function c(I){return I=I.prefix,I!==void 0&&(G=null,I?typeof I!="function"?K=1:(K=2,G=I):K=0),c}function d(I,V){var W=I;if(33>W.charCodeAt(0)&&(W=W.trim()),te=W,W=[te],0<L){var q=l(-1,V,W,W,Y,U,0,0,0,0);q!==void 0&&typeof q=="string"&&(V=q)}var O=t(F,W,V,0,0);return 0<L&&(q=l(-2,O,W,W,Y,U,O.length,0,0,0),q!==void 0&&(O=q)),te="",j=0,U=Y=1,O}var p=/^\0+/g,g=/[\0\r\f]/g,v=/: */g,x=/zoo|gra/,w=/([,: ])(transform)/g,k=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,E=/:(read-only)/g,A=/[svh]\w+-[tblr]{2}/,M=/\(\s*(.*)\s*\)/g,S=/([\s\S]*?);/g,_=/-self|flex-/g,P=/[^]*?(:[rp][el]a[\w-]+)[^]*/,R=/stretch|:\s*\w+\-(?:conte|avail)/,D=/([^-])(image-set\()/,U=1,Y=1,j=0,K=1,F=[],J=[],L=0,G=null,Z=0,te="";return d.use=s,d.set=c,e!==void 0&&c(e),d}var _v={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Yh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Iv=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,mp=Yh(function(e){return Iv.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),$d=ql.exports,Rv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ad={};Ad[$d.ForwardRef]=Lv;Ad[$d.Memo]=Zh;function gp(e){return $d.isMemo(e)?Zh:Ad[e.$$typeof]||Rv}var Dv=Object.defineProperty,Fv=Object.getOwnPropertyNames,xp=Object.getOwnPropertySymbols,Nv=Object.getOwnPropertyDescriptor,Vv=Object.getPrototypeOf,vp=Object.prototype;function Qh(e,t,n){if(typeof t!="string"){if(vp){var r=Vv(t);r&&r!==vp&&Qh(e,r,n)}var o=Fv(t);xp&&(o=o.concat(xp(t)));for(var i=gp(e),a=gp(t),l=0;l<o.length;++l){var s=o[l];if(!zv[s]&&!(n&&n[s])&&!(a&&a[s])&&!(i&&i[s])){var c=Nv(t,s);try{Dv(e,s,c)}catch{}}}}return e}var Bv=Qh;function vn(){return(vn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var yp=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},lc=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ql.exports.typeOf(e)},Cl=Object.freeze([]),xr=Object.freeze({});function Po(e){return typeof e=="function"}function bp(e){return e.displayName||e.name||"Component"}function Od(e){return e&&typeof e.styledComponentId=="string"}var _o=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Td=typeof window!="undefined"&&"HTMLElement"in window,jv=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),Hv={};function Hr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Uv=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&Hr(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),c=0,d=r.length;c<d;c++)this.tag.insertRule(s,r[c])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,l=i;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Ya=new Map,kl=new Map,Ai=1,Sa=function(e){if(Ya.has(e))return Ya.get(e);for(;kl.has(Ai);)Ai++;var t=Ai++;return Ya.set(e,t),kl.set(t,e),t},Wv=function(e){return kl.get(e)},Gv=function(e,t){t>=Ai&&(Ai=t+1),Ya.set(e,t),kl.set(t,e)},Yv="style["+_o+'][data-styled-version="5.3.11"]',Zv=new RegExp("^"+_o+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Qv=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},Xv=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var l=a.match(Zv);if(l){var s=0|parseInt(l[1],10),c=l[2];s!==0&&(Gv(c,s),Qv(e,c,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},Kv=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},Xh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){for(var s=l.childNodes,c=s.length;c>=0;c--){var d=s[c];if(d&&d.nodeType===1&&d.hasAttribute(_o))return d}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(_o,"active"),r.setAttribute("data-styled-version","5.3.11");var a=Kv();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},qv=function(){function e(n){var r=this.element=Xh(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var s=i[a];if(s.ownerNode===o)return s}Hr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Jv=function(){function e(n){var r=this.element=Xh(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),e5=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),wp=Td,t5={isServer:!Td,useCSSOMInjection:!jv},Sl=function(){function e(n,r,o){n===void 0&&(n=xr),r===void 0&&(r={}),this.options=vn({},t5,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Td&&wp&&(wp=!1,function(i){for(var a=document.querySelectorAll(Yv),l=0,s=a.length;l<s;l++){var c=a[l];c&&c.getAttribute(_o)!=="active"&&(Xv(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Sa(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(vn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new e5(a):i?new qv(a):new Jv(a),new Uv(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Sa(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Sa(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Sa(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var l=Wv(a);if(l!==void 0){var s=n.names.get(l),c=r.getGroup(a);if(s&&c&&s.size){var d=_o+".g"+a+'[id="'+l+'"]',p="";s!==void 0&&s.forEach(function(g){g.length>0&&(p+=g+",")}),i+=""+c+d+'{content:"'+p+`"}/*!sc*/
`}}}return i}(this)},e}(),n5=/(a)(d)/gi,Cp=function(e){return String.fromCharCode(e+(e>25?39:97))};function sc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Cp(t%52)+n;return(Cp(t%52)+n).replace(n5,"$1-$2")}var mo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Kh=function(e){return mo(5381,e)};function qh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Po(n)&&!Od(n))return!1}return!0}var r5=Kh("5.3.11"),o5=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&qh(t),this.componentId=n,this.baseHash=mo(r5,n),this.baseStyle=r,Sl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=Ur(this.rules,t,n,r).join(""),l=sc(mo(this.baseHash,a)>>>0);if(!n.hasNameForId(o,l)){var s=r(a,"."+l,void 0,o);n.insertRules(o,l,s)}i.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,d=mo(this.baseHash,r.hash),p="",g=0;g<c;g++){var v=this.rules[g];if(typeof v=="string")p+=v;else if(v){var x=Ur(v,t,n,r),w=Array.isArray(x)?x.join(""):x;d=mo(d,w+g),p+=w}}if(p){var k=sc(d>>>0);if(!n.hasNameForId(o,k)){var h=r(p,"."+k,void 0,o);n.insertRules(o,k,h)}i.push(k)}}return i.join(" ")},e}(),i5=/^\s*\/\/.*$/gm,a5=[":","[",".","#"];function l5(e){var t,n,r,o,i=e===void 0?xr:e,a=i.options,l=a===void 0?xr:a,s=i.plugins,c=s===void 0?Cl:s,d=new Pv(l),p=[],g=function(w){function k(h){if(h)try{w(h+"}")}catch{}}return function(h,f,m,E,A,M,S,_,P,R){switch(h){case 1:if(P===0&&f.charCodeAt(0)===64)return w(f+";"),"";break;case 2:if(_===0)return f+"/*|*/";break;case 3:switch(_){case 102:case 112:return w(m[0]+f),"";default:return f+(R===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(k)}}}(function(w){p.push(w)}),v=function(w,k,h){return k===0&&a5.indexOf(h[n.length])!==-1||h.match(o)?w:"."+t};function x(w,k,h,f){f===void 0&&(f="&");var m=w.replace(i5,""),E=k&&h?h+" "+k+" { "+m+" }":m;return t=f,n=k,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),d(h||!k?"":k,E)}return d.use([].concat(c,[function(w,k,h){w===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,v))},g,function(w){if(w===-2){var k=p;return p=[],k}}])),x.hash=c.length?c.reduce(function(w,k){return k.name||Hr(15),mo(w,k.name)},5381).toString():"",x}var Jh=on.createContext();Jh.Consumer;var e2=on.createContext(),s5=(e2.Consumer,new Sl),uc=l5();function t2(){return y.exports.useContext(Jh)||s5}function n2(){return y.exports.useContext(e2)||uc}var u5=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=uc);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return Hr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=uc),this.name+t.hash},e}(),c5=/([A-Z])/,d5=/([A-Z])/g,f5=/^ms-/,p5=function(e){return"-"+e.toLowerCase()};function kp(e){return c5.test(e)?e.replace(d5,p5).replace(f5,"-ms-"):e}var Sp=function(e){return e==null||e===!1||e===""};function Ur(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,l=e.length;a<l;a+=1)(o=Ur(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Sp(e))return"";if(Od(e))return"."+e.styledComponentId;if(Po(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var s=e(t);return Ur(s,t,n,r)}var c;return e instanceof u5?n?(e.inject(n,r),e.getName(r)):e:lc(e)?function d(p,g){var v,x,w=[];for(var k in p)p.hasOwnProperty(k)&&!Sp(p[k])&&(Array.isArray(p[k])&&p[k].isCss||Po(p[k])?w.push(kp(k)+":",p[k],";"):lc(p[k])?w.push.apply(w,d(p[k],k)):w.push(kp(k)+": "+(v=k,(x=p[k])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||v in _v||v.startsWith("--")?String(x).trim():x+"px")+";"));return g?[g+" {"].concat(w,["}"]):w}(e):e.toString()}var Ep=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Md(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Po(e)||lc(e)?Ep(Ur(yp(Cl,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Ep(Ur(yp(e,n)))}var r2=function(e,t,n){return n===void 0&&(n=xr),e.theme!==n.theme&&e.theme||t||n.theme},h5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,m5=/(^-|-$)/g;function Ys(e){return e.replace(h5,"-").replace(m5,"")}var o2=function(e){return sc(Kh(e)>>>0)};function Ea(e){return typeof e=="string"&&!0}var cc=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},g5=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function x5(e,t,n){var r=e[n];cc(t)&&cc(r)?i2(r,t):e[n]=t}function i2(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(cc(a))for(var l in a)g5(l)&&x5(e,a[l],l)}return e}var Io=on.createContext();Io.Consumer;function v5(e){var t=y.exports.useContext(Io),n=y.exports.useMemo(function(){return function(r,o){if(!r)return Hr(14);if(Po(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?Hr(8):o?vn({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?on.createElement(Io.Provider,{value:n},e.children):null}var Zs={};function a2(e,t,n){var r=Od(e),o=!Ea(e),i=t.attrs,a=i===void 0?Cl:i,l=t.componentId,s=l===void 0?function(f,m){var E=typeof f!="string"?"sc":Ys(f);Zs[E]=(Zs[E]||0)+1;var A=E+"-"+o2("5.3.11"+E+Zs[E]);return m?m+"-"+A:A}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(f){return Ea(f)?"styled."+f:"Styled("+bp(f)+")"}(e):c,p=t.displayName&&t.componentId?Ys(t.displayName)+"-"+t.componentId:t.componentId||s,g=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(f,m,E){return e.shouldForwardProp(f,m,E)&&t.shouldForwardProp(f,m,E)}:e.shouldForwardProp);var x,w=new o5(n,p,r?e.componentStyle:void 0),k=w.isStatic&&a.length===0,h=function(f,m){return function(E,A,M,S){var _=E.attrs,P=E.componentStyle,R=E.defaultProps,D=E.foldedComponentIds,U=E.shouldForwardProp,Y=E.styledComponentId,j=E.target,K=function(q,O,ie){q===void 0&&(q=xr);var B=vn({},O,{theme:q}),ye={};return ie.forEach(function(me){var ge,oe,Ne,Te=me;for(ge in Po(Te)&&(Te=Te(B)),Te)B[ge]=ye[ge]=ge==="className"?(oe=ye[ge],Ne=Te[ge],oe&&Ne?oe+" "+Ne:oe||Ne):Te[ge]}),[B,ye]}(r2(A,y.exports.useContext(Io),R)||xr,A,_),F=K[0],J=K[1],L=function(q,O,ie,B){var ye=t2(),me=n2(),ge=O?q.generateAndInjectStyles(xr,ye,me):q.generateAndInjectStyles(ie,ye,me);return ge}(P,S,F),G=M,Z=J.$as||A.$as||J.as||A.as||j,te=Ea(Z),I=J!==A?vn({},A,{},J):A,V={};for(var W in I)W[0]!=="$"&&W!=="as"&&(W==="forwardedAs"?V.as=I[W]:(U?U(W,mp,Z):!te||mp(W))&&(V[W]=I[W]));return A.style&&J.style!==A.style&&(V.style=vn({},A.style,{},J.style)),V.className=Array.prototype.concat(D,Y,L!==Y?L:null,A.className,J.className).filter(Boolean).join(" "),V.ref=G,y.exports.createElement(Z,V)}(x,f,m,k)};return h.displayName=d,(x=on.forwardRef(h)).attrs=g,x.componentStyle=w,x.displayName=d,x.shouldForwardProp=v,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Cl,x.styledComponentId=p,x.target=r?e.target:e,x.withComponent=function(f){var m=t.componentId,E=function(M,S){if(M==null)return{};var _,P,R={},D=Object.keys(M);for(P=0;P<D.length;P++)_=D[P],S.indexOf(_)>=0||(R[_]=M[_]);return R}(t,["componentId"]),A=m&&m+"-"+(Ea(f)?f:Ys(bp(f)));return a2(f,vn({},E,{attrs:g,componentId:A}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?i2({},e.defaultProps,f):f}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),o&&Bv(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var dc=function(e){return function t(n,r,o){if(o===void 0&&(o=xr),!ql.exports.isValidElementType(r))return Hr(1,String(r));var i=function(){return n(r,o,Md.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,vn({},o,{},a))},i.attrs=function(a){return t(n,r,vn({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(a2,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){dc[e]=dc(e)});var y5=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=qh(n),Sl.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var a=i(Ur(this.rules,r,o,i).join(""),""),l=this.componentId+n;o.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&Sl.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function l2(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Md.apply(void 0,[e].concat(n)),i="sc-global-"+o2(JSON.stringify(o)),a=new y5(o,i);function l(c){var d=t2(),p=n2(),g=y.exports.useContext(Io),v=y.exports.useRef(d.allocateGSInstance(i)).current;return d.server&&s(v,c,d,g,p),y.exports.useLayoutEffect(function(){if(!d.server)return s(v,c,d,g,p),function(){return a.removeStyles(v,d)}},[v,c,d,g,p]),null}function s(c,d,p,g,v){if(a.isStatic)a.renderStyles(c,Hv,p,v);else{var x=vn({},d,{theme:r2(d,g,l.defaultProps)});a.renderStyles(c,x,p,v)}}return on.memo(l)}var b=dc,b5="./assets/Nexa-Book.ae4d42bd.ttf";function w5(){const e="background: transparent !important;";return{dev:e,prod:e}}const{dev:q9,prod:C5}=w5();var k5=l2`
  @font-face {
    font-family: 'Nexa-Book';
    src: url(${b5}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  
  body,
  h1, h2, h3, h4, h5, h6,
  input, button, select, textarea, p, span, div, label {
    font-family: 'Montserrat', sans-serif;
  }

  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    position: relative;
    overflow: hidden;
    color: ${({theme:e})=>`rgb(${e.fontColor||"255, 255, 255"})`};
    
    /* Dev mode background */
    ${C5}

    ::-webkit-scrollbar {
      width: 2px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.3);
    }
    ::-webkit-scrollbar-thumb {
      background: rgb(${({theme:e})=>e.accentColor||"230, 205, 0"});
      border-radius: 2px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgb(${({theme:e})=>e.accentColor||"230, 205, 0"});
    }
  }

  button {
    cursor: pointer;
    outline: 0;
  }
`;function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ne.apply(null,arguments)}function Cn(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}const pe={arr:Array.isArray,obj:e=>Object.prototype.toString.call(e)==="[object Object]",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",und:e=>e===void 0,nul:e=>e===null,set:e=>e instanceof Set,map:e=>e instanceof Map,equ(e,t){if(typeof e!=typeof t)return!1;if(pe.str(e)||pe.num(e))return e===t;if(pe.obj(e)&&pe.obj(t)&&Object.keys(e).length+Object.keys(t).length===0)return!0;let n;for(n in e)if(!(n in t))return!1;for(n in t)if(e[n]!==t[n])return!1;return pe.und(n)?e===t:!0}};function S5(e,t){return t===void 0&&(t=!0),n=>(pe.arr(n)?n:Object.keys(n)).reduce((r,o)=>{const i=t?o[0].toLowerCase()+o.substring(1):o;return r[i]=e(i),r},e)}function s2(){const e=y.exports.useState(!1),t=e[1];return y.exports.useCallback(()=>t(r=>!r),[])}function $r(e,t){return pe.und(e)||pe.nul(e)?t:e}function go(e){return pe.und(e)?[]:pe.arr(e)?e:[e]}function pn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return pe.fun(e)?e(...n):e}function E5(e){return e.to,e.from,e.config,e.onStart,e.onRest,e.onFrame,e.children,e.reset,e.reverse,e.force,e.immediate,e.delay,e.attach,e.destroyed,e.interpolateTo,e.ref,e.lazy,Cn(e,["to","from","config","onStart","onRest","onFrame","children","reset","reverse","force","immediate","delay","attach","destroyed","interpolateTo","ref","lazy"])}function Qs(e){const t=E5(e);if(pe.und(t))return ne({to:t},e);const n=Object.keys(e).reduce((r,o)=>pe.und(t[o])?ne({},r,{[o]:e[o]}):r,{});return ne({to:t},n)}function $5(e,t){return t&&(pe.fun(t)?t(e):pe.obj(t)&&(t.current=e)),e}class gn{constructor(){this.payload=void 0,this.children=[]}getAnimatedValue(){return this.getValue()}getPayload(){return this.payload||this}attach(){}detach(){}getChildren(){return this.children}addChild(t){this.children.length===0&&this.attach(),this.children.push(t)}removeChild(t){const n=this.children.indexOf(t);this.children.splice(n,1),this.children.length===0&&this.detach()}}class fc extends gn{constructor(){super(...arguments),this.payload=[],this.attach=()=>this.payload.forEach(t=>t instanceof gn&&t.addChild(this)),this.detach=()=>this.payload.forEach(t=>t instanceof gn&&t.removeChild(this))}}class u2 extends gn{constructor(){super(...arguments),this.payload={},this.attach=()=>Object.values(this.payload).forEach(t=>t instanceof gn&&t.addChild(this)),this.detach=()=>Object.values(this.payload).forEach(t=>t instanceof gn&&t.removeChild(this))}getValue(t){t===void 0&&(t=!1);const n={};for(const r in this.payload){const o=this.payload[r];t&&!(o instanceof gn)||(n[r]=o instanceof gn?o[t?"getAnimatedValue":"getValue"]():o)}return n}getAnimatedValue(){return this.getValue(!0)}}let Pd;function A5(e,t){Pd={fn:e,transform:t}}let c2;function O5(e){c2=e}let d2=e=>typeof window!="undefined"?window.requestAnimationFrame(e):-1,El;function T5(e){El=e}let f2=()=>Date.now(),M5=e=>e.current,p2;function P5(e){p2=e}class _5 extends u2{constructor(t,n){super(),this.update=void 0,this.payload=t.style?ne({},t,{style:p2(t.style)}):t,this.update=n,this.attach()}}const I5=e=>pe.fun(e)&&!(e.prototype instanceof on.Component),R5=e=>y.exports.forwardRef((n,r)=>{const o=s2(),i=y.exports.useRef(!0),a=y.exports.useRef(null),l=y.exports.useRef(null),s=y.exports.useCallback(g=>{const v=a.current,x=()=>{let w=!1;l.current&&(w=Pd.fn(l.current,a.current.getAnimatedValue())),(!l.current||w===!1)&&o()};a.current=new _5(g,x),v&&v.detach()},[]);y.exports.useEffect(()=>()=>{i.current=!1,a.current&&a.current.detach()},[]),y.exports.useImperativeHandle(r,()=>M5(l)),s(n);const c=a.current.getValue();c.scrollTop,c.scrollLeft;const d=Cn(c,["scrollTop","scrollLeft"]),p=I5(e)?void 0:g=>l.current=$5(g,r);return u(e,{...d,ref:p})});let Oi=!1;const Dr=new Set,h2=()=>{if(!Oi)return!1;let e=f2();for(let t of Dr){let n=!1;for(let r=0;r<t.configs.length;r++){let o=t.configs[r],i,a;for(let l=0;l<o.animatedValues.length;l++){let s=o.animatedValues[l];if(s.done)continue;let c=o.fromValues[l],d=o.toValues[l],p=s.lastPosition,g=d instanceof gn,v=Array.isArray(o.initialVelocity)?o.initialVelocity[l]:o.initialVelocity;if(g&&(d=d.getValue()),o.immediate){s.setValue(d),s.done=!0;continue}if(typeof c=="string"||typeof d=="string"){s.setValue(d),s.done=!0;continue}if(o.duration!==void 0)p=c+o.easing((e-s.startTime)/o.duration)*(d-c),i=e>=s.startTime+o.duration;else if(o.decay)p=c+v/(1-.998)*(1-Math.exp(-(1-.998)*(e-s.startTime))),i=Math.abs(s.lastPosition-p)<.1,i&&(d=p);else{a=s.lastTime!==void 0?s.lastTime:e,v=s.lastVelocity!==void 0?s.lastVelocity:o.initialVelocity,e>a+64&&(a=e);let x=Math.floor(e-a);for(let f=0;f<x;++f){let m=-o.tension*(p-d),E=-o.friction*v,A=(m+E)/o.mass;v=v+A*1/1e3,p=p+v*1/1e3}let w=o.clamp&&o.tension!==0?c<d?p>d:p<d:!1,k=Math.abs(v)<=o.precision,h=o.tension!==0?Math.abs(d-p)<=o.precision:!0;i=w||k&&h,s.lastVelocity=v,s.lastTime=e}g&&!o.toValues[l].done&&(i=!1),i?(s.value!==d&&(p=d),s.done=!0):n=!0,s.setValue(p),s.lastPosition=p}t.props.onFrame&&(t.values[o.name]=o.interpolation.getValue())}t.props.onFrame&&t.props.onFrame(t.values),n||(Dr.delete(t),t.stop(!0))}return Dr.size?d2(h2):Oi=!1,Oi},z5=e=>{Dr.has(e)||Dr.add(e),Oi||(Oi=!0,d2(h2))},L5=e=>{Dr.has(e)&&Dr.delete(e)};function $l(e,t,n){if(typeof e=="function")return e;if(Array.isArray(e))return $l({range:e,output:t,extrapolate:n});if(El&&typeof e.output[0]=="string")return El(e);const r=e,o=r.output,i=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",l=r.extrapolateRight||r.extrapolate||"extend",s=r.easing||(c=>c);return c=>{const d=F5(c,i);return D5(c,i[d],i[d+1],o[d],o[d+1],s,a,l,r.map)}}function D5(e,t,n,r,o,i,a,l,s){let c=s?s(e):e;if(c<t){if(a==="identity")return c;a==="clamp"&&(c=t)}if(c>n){if(l==="identity")return c;l==="clamp"&&(c=n)}return r===o?r:t===n?e<=t?r:o:(t===-1/0?c=-c:n===1/0?c=c-t:c=(c-t)/(n-t),c=i(c),r===-1/0?c=-c:o===1/0?c=c+r:c=c*(o-r)+r,c)}function F5(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}class Zi extends fc{constructor(t,n,r,o){super(),this.calc=void 0,this.payload=t instanceof fc&&!(t instanceof Zi)?t.getPayload():Array.isArray(t)?t:[t],this.calc=$l(n,r,o)}getValue(){return this.calc(...this.payload.map(t=>t.getValue()))}updateConfig(t,n,r){this.calc=$l(t,n,r)}interpolate(t,n,r){return new Zi(this,t,n,r)}}function m2(e,t){"update"in e?t.add(e):e.getChildren().forEach(n=>m2(n,t))}class pc extends gn{constructor(t){var n;super(),n=this,this.animatedStyles=new Set,this.value=void 0,this.startPosition=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.startTime=void 0,this.lastTime=void 0,this.done=!1,this.setValue=function(r,o){o===void 0&&(o=!0),n.value=r,o&&n.flush()},this.value=t,this.startPosition=t,this.lastPosition=t}flush(){this.animatedStyles.size===0&&m2(this,this.animatedStyles),this.animatedStyles.forEach(t=>t.update())}clearStyles(){this.animatedStyles.clear()}getValue(){return this.value}interpolate(t,n,r){return new Zi(this,t,n,r)}}class N5 extends fc{constructor(t){super(),this.payload=t.map(n=>new pc(n))}setValue(t,n){n===void 0&&(n=!0),Array.isArray(t)?t.length===this.payload.length&&t.forEach((r,o)=>this.payload[o].setValue(r,n)):this.payload.forEach(r=>r.setValue(t,n))}getValue(){return this.payload.map(t=>t.getValue())}interpolate(t,n){return new Zi(this,t,n)}}let V5=0;class B5{constructor(){this.id=void 0,this.idle=!0,this.hasChanged=!1,this.guid=0,this.local=0,this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.listeners=[],this.queue=[],this.localQueue=void 0,this.getValues=()=>this.interpolations,this.id=V5++}update(t){if(!t)return this;const n=Qs(t),r=n.delay,o=r===void 0?0:r,i=n.to,a=Cn(n,["delay","to"]);if(pe.arr(i)||pe.fun(i))this.queue.push(ne({},a,{delay:o,to:i}));else if(i){let l={};Object.entries(i).forEach(s=>{let c=s[0],d=s[1];const p=ne({to:{[c]:d},delay:pn(o,c)},a),g=l[p.delay]&&l[p.delay].to;l[p.delay]=ne({},l[p.delay],p,{to:ne({},g,p.to)})}),this.queue=Object.values(l)}return this.queue=this.queue.sort((l,s)=>l.delay-s.delay),this.diff(a),this}start(t){if(this.queue.length){this.idle=!1,this.localQueue&&this.localQueue.forEach(o=>{let i=o.from,a=i===void 0?{}:i,l=o.to,s=l===void 0?{}:l;pe.obj(a)&&(this.merged=ne({},a,this.merged)),pe.obj(s)&&(this.merged=ne({},this.merged,s))});const n=this.local=++this.guid,r=this.localQueue=this.queue;this.queue=[],r.forEach((o,i)=>{let a=o.delay,l=Cn(o,["delay"]);const s=d=>{i===r.length-1&&n===this.guid&&d&&(this.idle=!0,this.props.onRest&&this.props.onRest(this.merged)),t&&t()};let c=pe.arr(l.to)||pe.fun(l.to);a?setTimeout(()=>{n===this.guid&&(c?this.runAsync(l,s):this.diff(l).start(s))},a):c?this.runAsync(l,s):this.diff(l).start(s)})}else pe.fun(t)&&this.listeners.push(t),this.props.onStart&&this.props.onStart(),z5(this);return this}stop(t){return this.listeners.forEach(n=>n(t)),this.listeners=[],this}pause(t){return this.stop(!0),t&&L5(this),this}runAsync(t,n){var r=this;t.delay;let o=Cn(t,["delay"]);const i=this.local;let a=Promise.resolve(void 0);if(pe.arr(o.to))for(let l=0;l<o.to.length;l++){const s=l,c=ne({},o,Qs(o.to[s]));pe.arr(c.config)&&(c.config=c.config[s]),a=a.then(()=>{if(i===this.guid)return new Promise(d=>this.diff(c).start(d))})}else if(pe.fun(o.to)){let l=0,s;a=a.then(()=>o.to(c=>{const d=ne({},o,Qs(c));if(pe.arr(d.config)&&(d.config=d.config[l]),l++,i===this.guid)return s=new Promise(p=>this.diff(d).start(p))},function(c){return c===void 0&&(c=!0),r.stop(c)}).then(()=>s))}a.then(n)}diff(t){this.props=ne({},this.props,t);let n=this.props,r=n.from,o=r===void 0?{}:r,i=n.to,a=i===void 0?{}:i,l=n.config,s=l===void 0?{}:l,c=n.reverse,d=n.attach,p=n.reset,g=n.immediate;if(c){var v=[a,o];o=v[0],a=v[1]}this.merged=ne({},o,this.merged,a),this.hasChanged=!1;let x=d&&d(this);if(this.animations=Object.entries(this.merged).reduce((w,k)=>{let h=k[0],f=k[1],m=w[h]||{};const E=pe.num(f),A=pe.str(f)&&!f.startsWith("#")&&!/\d/.test(f)&&!c2[f],M=pe.arr(f),S=!E&&!M&&!A;let _=pe.und(o[h])?f:o[h],P=E||M||A?f:1,R=pn(s,h);x&&(P=x.animations[h].parent);let D=m.parent,U=m.interpolation,Y=go(x?P.getPayload():P),j,K=f;S&&(K=El({range:[0,1],output:[f,f]})(1));let F=U&&U.getValue();const L=!pe.und(D)&&m.animatedValues.some(I=>!I.done),G=!pe.equ(K,F),Z=!pe.equ(K,m.previous),te=!pe.equ(R,m.config);if(p||Z&&G||te){if(E||A)D=U=m.parent||new pc(_);else if(M)D=U=m.parent||new N5(_);else if(S){let I=m.interpolation&&m.interpolation.calc(m.parent.value);I=I!==void 0&&!p?I:_,m.parent?(D=m.parent,D.setValue(0,!1)):D=new pc(0);const V={output:[I,f]};m.interpolation?(U=m.interpolation,m.interpolation.updateConfig(V)):U=D.interpolate(V)}return Y=go(x?P.getPayload():P),j=go(D.getPayload()),p&&!S&&D.setValue(_,!1),this.hasChanged=!0,j.forEach(I=>{I.startPosition=I.value,I.lastPosition=I.value,I.lastVelocity=L?I.lastVelocity:void 0,I.lastTime=L?I.lastTime:void 0,I.startTime=f2(),I.done=!1,I.animatedStyles.clear()}),pn(g,h)&&D.setValue(S?P:f,!1),ne({},w,{[h]:ne({},m,{name:h,parent:D,interpolation:U,animatedValues:j,toValues:Y,previous:K,config:R,fromValues:go(D.getValue()),immediate:pn(g,h),initialVelocity:$r(R.velocity,0),clamp:$r(R.clamp,!1),precision:$r(R.precision,.01),tension:$r(R.tension,170),friction:$r(R.friction,26),mass:$r(R.mass,1),duration:R.duration,easing:$r(R.easing,I=>I),decay:R.decay})})}else return G?w:(S&&(D.setValue(1,!1),U.updateConfig({output:[K,K]})),D.done=!0,this.hasChanged=!0,ne({},w,{[h]:ne({},w[h],{previous:K})}))},this.animations),this.hasChanged){this.configs=Object.values(this.animations),this.values={},this.interpolations={};for(let w in this.animations)this.interpolations[w]=this.animations[w].interpolation,this.values[w]=this.animations[w].interpolation.getValue()}return this}destroy(){this.stop(),this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.local=0}}let j5=0;const Za="enter",Xs="leave",Ks="update",H5=(e,t)=>(typeof t=="function"?e.map(t):go(t)).map(String),hc=e=>{let t=e.items,n=e.keys,r=n===void 0?i=>i:n,o=Cn(e,["items","keys"]);return t=go(t!==void 0?t:null),ne({items:t,keys:H5(t,r)},o)};function qs(e,t,n){const r=ne({items:e,keys:t||(f=>f)},n),o=hc(r),i=o.lazy,a=i===void 0?!1:i;o.unique;const l=o.reset,s=l===void 0?!1:l;o.enter,o.leave,o.update;const c=o.onDestroyed;o.keys,o.items;const d=o.onFrame,p=o.onRest,g=o.onStart,v=o.ref,x=Cn(o,["lazy","unique","reset","enter","leave","update","onDestroyed","keys","items","onFrame","onRest","onStart","ref"]),w=s2(),k=y.exports.useRef(!1),h=y.exports.useRef({mounted:!1,first:!0,deleted:[],current:{},transitions:[],prevProps:{},paused:!!r.ref,instances:!k.current&&new Map,forceUpdate:w});return y.exports.useImperativeHandle(r.ref,()=>({start:()=>Promise.all(Array.from(h.current.instances).map(f=>{let m=f[1];return new Promise(E=>m.start(E))})),stop:f=>Array.from(h.current.instances).forEach(m=>m[1].stop(f)),get controllers(){return Array.from(h.current.instances).map(f=>f[1])}})),h.current=U5(h.current,r),h.current.changed&&h.current.transitions.forEach(f=>{const m=f.slot,E=f.from,A=f.to,M=f.config,S=f.trail,_=f.key,P=f.item;h.current.instances.has(_)||h.current.instances.set(_,new B5);const R=h.current.instances.get(_),D=ne({},x,{to:A,from:E,config:M,ref:v,onRest:U=>{h.current.mounted&&(f.destroyed&&(!v&&!a&&$p(h,_),c&&c(P)),!Array.from(h.current.instances).some(K=>!K[1].idle)&&(v||a)&&h.current.deleted.length>0&&$p(h),p&&p(P,m,U))},onStart:g&&(()=>g(P,m)),onFrame:d&&(U=>d(P,m,U)),delay:S,reset:s&&m===Za});R.update(D),h.current.paused||R.start()}),y.exports.useEffect(()=>(h.current.mounted=k.current=!0,()=>{h.current.mounted=k.current=!1,Array.from(h.current.instances).map(f=>f[1].destroy()),h.current.instances.clear()}),[]),h.current.transitions.map(f=>{let m=f.item,E=f.slot,A=f.key;return{item:m,key:A,state:E,props:h.current.instances.get(A).getValues()}})}function $p(e,t){const n=e.current.deleted;for(let r of n){let o=r.key;const i=a=>a.key!==o;(pe.und(t)||t===o)&&(e.current.instances.delete(o),e.current.transitions=e.current.transitions.filter(i),e.current.deleted=e.current.deleted.filter(i))}e.current.forceUpdate()}function U5(e,t){let n=e.first,r=e.prevProps,o=Cn(e,["first","prevProps"]),i=hc(t),a=i.items,l=i.keys,s=i.initial,c=i.from,d=i.enter,p=i.leave,g=i.update,v=i.trail,x=v===void 0?0:v,w=i.unique,k=i.config,h=i.order,f=h===void 0?[Za,Xs,Ks]:h,m=hc(r),E=m.keys,A=m.items,M=ne({},o.current),S=[...o.deleted],_=Object.keys(M),P=new Set(_),R=new Set(l),D=l.filter(F=>!P.has(F)),U=o.transitions.filter(F=>!F.destroyed&&!R.has(F.originalKey)).map(F=>F.originalKey),Y=l.filter(F=>P.has(F)),j=-x;for(;f.length;)switch(f.shift()){case Za:{D.forEach((J,L)=>{w&&S.find(I=>I.originalKey===J)&&(S=S.filter(I=>I.originalKey!==J));const G=l.indexOf(J),Z=a[G],te=n&&s!==void 0?"initial":Za;M[J]={slot:te,originalKey:J,key:w?String(J):j5++,item:Z,trail:j=j+x,config:pn(k,Z,te),from:pn(n&&s!==void 0?s||{}:c,Z),to:pn(d,Z)}});break}case Xs:{U.forEach(J=>{const L=E.indexOf(J),G=A[L],Z=Xs;S.unshift(ne({},M[J],{slot:Z,destroyed:!0,left:E[Math.max(0,L-1)],right:E[Math.min(E.length,L+1)],trail:j=j+x,config:pn(k,G,Z),to:pn(p,G)})),delete M[J]});break}case Ks:{Y.forEach(J=>{const L=l.indexOf(J),G=a[L],Z=Ks;M[J]=ne({},M[J],{item:G,slot:Z,trail:j=j+x,config:pn(k,G,Z),to:pn(g,G)})});break}}let K=l.map(F=>M[F]);return S.forEach(F=>{let J=F.left;F.right;let L=Cn(F,["left","right"]),G;(G=K.findIndex(Z=>Z.originalKey===J))!==-1&&(G+=1),G=Math.max(0,G),K=[...K.slice(0,G),L,...K.slice(G)]}),ne({},o,{changed:D.length||U.length||Y.length,first:n&&D.length===0,transitions:K,current:M,deleted:S,prevProps:t})}class W5 extends u2{constructor(t){t===void 0&&(t={}),super(),t.transform&&!(t.transform instanceof gn)&&(t=Pd.transform(t)),this.payload=t}}const Al={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},yn="[-+]?\\d*\\.?\\d+",Ol=yn+"%";function us(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}const G5=new RegExp("rgb"+us(yn,yn,yn)),Y5=new RegExp("rgba"+us(yn,yn,yn,yn)),Z5=new RegExp("hsl"+us(yn,Ol,Ol)),Q5=new RegExp("hsla"+us(yn,Ol,Ol,yn)),X5=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,K5=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,q5=/^#([0-9a-fA-F]{6})$/,J5=/^#([0-9a-fA-F]{8})$/;function ey(e){let t;return typeof e=="number"?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=q5.exec(e))?parseInt(t[1]+"ff",16)>>>0:Al.hasOwnProperty(e)?Al[e]:(t=G5.exec(e))?(Jr(t[1])<<24|Jr(t[2])<<16|Jr(t[3])<<8|255)>>>0:(t=Y5.exec(e))?(Jr(t[1])<<24|Jr(t[2])<<16|Jr(t[3])<<8|Tp(t[4]))>>>0:(t=X5.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=J5.exec(e))?parseInt(t[1],16)>>>0:(t=K5.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Z5.exec(e))?(Ap(Op(t[1]),$a(t[2]),$a(t[3]))|255)>>>0:(t=Q5.exec(e))?(Ap(Op(t[1]),$a(t[2]),$a(t[3]))|Tp(t[4]))>>>0:null}function Js(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ap(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,o=2*n-r,i=Js(o,r,e+1/3),a=Js(o,r,e),l=Js(o,r,e-1/3);return Math.round(i*255)<<24|Math.round(a*255)<<16|Math.round(l*255)<<8}function Jr(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Op(e){return(parseFloat(e)%360+360)%360/360}function Tp(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(t*255)}function $a(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Mp(e){let t=ey(e);if(t===null)return e;t=t||0;let n=(t&4278190080)>>>24,r=(t&16711680)>>>16,o=(t&65280)>>>8,i=(t&255)/255;return`rgba(${n}, ${r}, ${o}, ${i})`}const Aa=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ty=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ny=new RegExp(`(${Object.keys(Al).join("|")})`,"g"),ry=e=>{const t=e.output.map(o=>o.replace(ty,Mp)).map(o=>o.replace(ny,Mp)),n=t[0].match(Aa).map(()=>[]);t.forEach(o=>{o.match(Aa).forEach((i,a)=>n[a].push(+i))});const r=t[0].match(Aa).map((o,i)=>$l(ne({},e,{output:n[i]})));return o=>{let i=0;return t[0].replace(Aa,()=>r[i++](o)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,(a,l,s,c,d)=>`rgba(${Math.round(l)}, ${Math.round(s)}, ${Math.round(c)}, ${d})`)}};let Ti={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const oy=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),iy=["Webkit","Ms","Moz","O"];Ti=Object.keys(Ti).reduce((e,t)=>(iy.forEach(n=>e[oy(n,t)]=e[t]),e),Ti);function ay(e,t,n){return t==null||typeof t=="boolean"||t===""?"":!n&&typeof t=="number"&&t!==0&&!(Ti.hasOwnProperty(e)&&Ti[e])?t+"px":(""+t).trim()}const Pp={};P5(e=>new W5(e));T5(ry);O5(Al);A5((e,t)=>{if(e.nodeType&&e.setAttribute!==void 0){const o=t.style,i=t.children,a=t.scrollTop,l=t.scrollLeft,s=Cn(t,["style","children","scrollTop","scrollLeft"]),c=e.nodeName==="filter"||e.parentNode&&e.parentNode.nodeName==="filter";a!==void 0&&(e.scrollTop=a),l!==void 0&&(e.scrollLeft=l),i!==void 0&&(e.textContent=i);for(let d in o)if(!!o.hasOwnProperty(d)){var n=d.indexOf("--")===0,r=ay(d,o[d],n);d==="float"&&(d="cssFloat"),n?e.style.setProperty(d,r):e.style[d]=r}for(let d in s){const p=c?d:Pp[d]||(Pp[d]=d.replace(/([A-Z])/g,g=>"-"+g.toLowerCase()));typeof e.getAttribute(p)!="undefined"&&e.setAttribute(p,s[d])}return}else return!1},e=>e);const ly=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],sy=S5(R5,!1),eu=sy(ly),Tl={};async function uy(e,t={}){const{timeout:n=15e3}=t,r=new AbortController,o=setTimeout(()=>r.abort(),n),i=await fetch(e,{...t,signal:r.signal});return clearTimeout(o),i}async function g2(e,t={},n=1){try{return await uy(e,t)}catch(r){if(r.name==="AbortError"&&n>0)return console.log(`Request Failed due to timeout: ${e}`),g2(e,t,n-1)}return new Response(null,{status:408,statusText:"Request Timeout",headers:{"Content-Length":"0"}})}async function cy(e,t={}){const n=`https://${GetParentResourceName()}/${e}`;return(await g2(n,{method:"post",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)},5)).json()}function dy(e,t){if(Tl[e]){console.log(`[Nui] Event ${e} is already declared.`);return}Tl[e]=t}function fy(e,t){window.dispatchEvent(new MessageEvent("message",{data:{type:e,payload:t}}))}const ee={post:cy,onEvent:dy,emitEvent:fy},py=()=>(window.addEventListener("message",e=>{!Tl[e.data.type]||Tl[e.data.type](e.data.payload)}),window.addEventListener("keydown",e=>{e.key==="d"?ee.post("rotate_right"):e.key==="a"&&ee.post("rotate_left")}),null),hy={id:"gusta",fontFamily:"'Montserrat', sans-serif",fontColor:"255, 255, 255",fontColorHover:"255, 255, 255",fontColorSelected:"17, 17, 17",mutedTextColor:"255, 255, 255, 0.7",mutedTextColorSoft:"255, 255, 255, 0.4",primaryBackground:"10, 10, 10",secondaryBackground:"0, 0, 0",surfaceBackground:"22, 22, 22",surfaceBackgroundAlt:"10, 10, 10",primaryBackgroundSelected:"230, 205, 0",borderColor:"230, 205, 0",borderColorSoft:"230, 205, 0, 0.2",accentColor:"230, 205, 0",accentColorHover:"212, 188, 0",borderRadius:"5px",scaleOnHover:!1,sectionFontWeight:"500",smoothBackgroundTransition:!1},mc={model:"mp_m_freemode_01",tattoos:{},components:[{component_id:0,drawable:15,texture:0},{component_id:1,drawable:15,texture:0},{component_id:2,drawable:15,texture:0},{component_id:3,drawable:15,texture:0},{component_id:4,drawable:15,texture:0},{component_id:5,drawable:15,texture:0},{component_id:6,drawable:15,texture:0},{component_id:7,drawable:15,texture:0},{component_id:8,drawable:15,texture:0},{component_id:9,drawable:15,texture:0},{component_id:10,drawable:15,texture:0},{component_id:11,drawable:15,texture:0}],props:[{prop_id:0,drawable:-1,texture:0},{prop_id:1,drawable:-1,texture:0},{prop_id:2,drawable:-1,texture:0},{prop_id:6,drawable:-1,texture:0},{prop_id:7,drawable:-1,texture:0}],headBlend:{shapeFirst:0,shapeSecond:0,shapeThird:0,shapeMix:0,skinFirst:0,skinSecond:0,skinThird:0,skinMix:0,thirdMix:0},faceFeatures:{noseWidth:0,nosePeakHigh:0,nosePeakSize:0,noseBoneHigh:0,nosePeakLowering:0,noseBoneTwist:0,eyeBrownHigh:0,eyeBrownForward:0,cheeksBoneHigh:0,cheeksBoneWidth:0,cheeksWidth:0,eyesOpening:0,lipsThickness:0,jawBoneWidth:0,jawBoneBackSize:0,chinBoneLowering:0,chinBoneLenght:0,chinBoneSize:0,chinHole:0,neckThickness:0},headOverlays:{blemishes:{style:0,opacity:0},beard:{style:0,opacity:0,color:0},eyebrows:{style:0,opacity:0,color:0},ageing:{style:0,opacity:0},makeUp:{style:0,opacity:0,color:0,secondColor:0},blush:{style:0,opacity:0,color:0},complexion:{style:0,opacity:0},sunDamage:{style:0,opacity:0},lipstick:{style:0,opacity:0,color:0},moleAndFreckles:{style:0,opacity:0},chestHair:{style:0,opacity:0,color:0},bodyBlemishes:{style:0,opacity:0}},hair:{style:0,color:0,highlight:0,texture:0},eyeColor:0},tu={head:!1,body:!1,bottom:!1},nu={left:!1,right:!1},my={head:!1,body:!1,bottom:!1},_p={...mc,model:"mp_f_freemode_01",hair:{style:4,color:2,highlight:0,texture:0},eyeColor:2,components:[{component_id:0,drawable:0,texture:0},{component_id:1,drawable:0,texture:0},{component_id:2,drawable:4,texture:0},{component_id:3,drawable:15,texture:1},{component_id:4,drawable:14,texture:0},{component_id:5,drawable:0,texture:0},{component_id:6,drawable:5,texture:0},{component_id:7,drawable:0,texture:0},{component_id:8,drawable:15,texture:0},{component_id:9,drawable:0,texture:0},{component_id:10,drawable:0,texture:0},{component_id:11,drawable:15,texture:1}],props:[{prop_id:0,drawable:5,texture:0},{prop_id:1,drawable:5,texture:0},{prop_id:2,drawable:-1,texture:0},{prop_id:6,drawable:-1,texture:0},{prop_id:7,drawable:-1,texture:0}]},gy=b.div`
  width: 100%;
  border-bottom: 1px solid rgba(230, 205, 0, 0.2);
  margin-bottom: 0.5rem;
`,xy=b.div`
  width: 100%;
  padding: 0.6rem 0.2rem 0.4rem 0.2rem;
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;

  span {
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #e6cd00;
  }
`,vy=b.div`
  padding: 0.4rem 0.2rem 0.8rem 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,hn=({children:e,title:t})=>C(gy,{children:[t&&u(xy,{children:u("span",{children:t})}),u(vy,{children:e})]});/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x2=(...e)=>e.filter((t,n,r)=>Boolean(t)&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var by={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=y.exports.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:a,...l},s)=>y.exports.createElement("svg",{ref:s,...by,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:x2("lucide",o),...l},[...a.map(([c,d])=>y.exports.createElement(c,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=(e,t)=>{const n=y.exports.forwardRef(({className:r,...o},i)=>y.exports.createElement(wy,{ref:i,iconNode:t,className:x2(`lucide-${yy(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=Lt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=Lt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=Lt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=Lt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=Lt("CornerDownLeft",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=Lt("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=Lt("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=Lt("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=Lt("ScrollText",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=Lt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=Lt("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=Lt("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=Lt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=Lt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Ay=1920,Oy=1080;function T(e){const t=e/Ay*100,n=e/Oy*100;return`calc((${t}vw + ${n}vh) / 2)`}function xn(e,t,n){return`clamp(${t}px, ${T(e)}, ${n}px)`}const Ty=b.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${T(8)};
`,My=b.span`
  font-size: ${T(11)};
  color: ${({theme:e})=>`rgb(${e.mutedTextColor||"144, 146, 150"})`};
  font-weight: 500;
  text-transform: uppercase;
`,Py=b.button`
  width: 100%;
  padding: ${T(10)} ${T(12)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme:e})=>`rgb(${e.surfaceBackground||"37, 38, 43"})`};
  border: ${({theme:e})=>`1px solid rgba(${e.borderColorSoft||"55, 58, 64"}, 1)`};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: 'Nexa-Book', sans-serif;
  
  span {
    font-size: ${T(12)};
    color: ${({theme:e})=>`rgb(${e.fontColor||"193, 194, 197"})`};
  }
  
  svg {
    width: ${T(14)};
    height: ${T(14)};
    color: ${({theme:e})=>`rgb(${e.accentColor||"66, 140, 255"})`};
    transition: transform 0.25s ease;
    transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  }
  
  &:hover {
    background-color: ${({theme:e})=>`rgb(${e.primaryBackgroundSelected||"55, 58, 64"})`};
    border-color: ${({theme:e})=>`rgb(${e.accentColor||"66, 140, 255"})`};
    
    svg { color: ${({theme:e})=>`rgb(${e.accentColorHover||"120, 176, 255"})`}; }
  }
`,_y=b.div`
  width: 100%;
  background: ${({theme:e})=>`rgb(${e.primaryBackground||"26, 27, 30"})`};
  border-radius: ${T(8)};
  overflow: hidden;
  border: ${({theme:e})=>`1px solid rgba(${e.borderColor||"44, 46, 51"}, 1)`};
  box-shadow: 0 ${T(10)} ${T(40)} rgba(0, 0, 0, 0.5);
`,Iy=b.div`
  padding: ${T(10)};
  border-bottom: ${({theme:e})=>`1px solid rgba(${e.borderColor||"44, 46, 51"}, 1)`};
`,Ry=b.div`
  display: flex;
  align-items: center;
  gap: ${T(10)};
  padding: ${T(8)} ${T(12)};
  background-color: ${({theme:e})=>`rgb(${e.surfaceBackground||"37, 38, 43"})`};
  border: ${({theme:e})=>`1px solid rgba(${e.borderColorSoft||"55, 58, 64"}, 1)`};
  border-radius: ${T(6)};
  
  svg {
    width: ${T(14)};
    height: ${T(14)};
    color: ${({theme:e})=>`rgb(${e.mutedTextColorSoft||"92, 95, 102"})`};
  }
  
  input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    font-size: ${T(12)};
    color: ${({theme:e})=>`rgb(${e.fontColor||"193, 194, 197"})`};
    font-family: 'Nexa-Book', sans-serif;
    
    &::placeholder {
      color: ${({theme:e})=>`rgb(${e.mutedTextColorSoft||"92, 95, 102"})`};
    }
    
    &:focus {
      outline: none;
      border-color: ${({theme:e})=>`rgb(${e.mutedTextColorSoft||"92, 95, 102"})`};
    }
  }
`,zy=b.div`
  max-height: ${T(200)};
  overflow-y: auto;
  padding: ${T(6)};
  
  &::-webkit-scrollbar {
    width: ${T(4)};
  }
  
  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>`rgb(${e.secondaryBackground||"16, 17, 19"})`};
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>`rgb(${e.borderColorSoft||"55, 58, 64"})`};
    border-radius: 4px;
  }
`,Ip=b.button`
  width: 100%;
  padding: ${T(8)} ${T(10)};
  display: flex;
  align-items: center;
  gap: ${T(10)};
  background: ${({isSelected:e,theme:t})=>e?`rgba(${t.accentColor||"66, 140, 255"}, 0.15)`:"transparent"};
  border: 1px solid
    ${({isSelected:e,theme:t})=>e?`rgb(${t.accentColor||"66, 140, 255"})`:"transparent"};
  border-radius: ${T(6)};
  cursor: pointer;
  transition: all 0.15s ease;
  text-align: left;
  font-family: 'Nexa-Book', sans-serif;
  
  &:hover {
    background: ${({theme:e})=>`rgba(${e.accentColor||"66, 140, 255"}, 0.12)`};
    border-color: ${({theme:e})=>`rgba(${e.accentColor||"66, 140, 255"}, 0.3)`};
  }
`,Ly=b.div`
  width: ${T(28)};
  height: ${T(28)};
  border-radius: ${T(6)};
  background: ${({theme:e})=>`rgb(${e.surfaceBackground||"37, 38, 43"})`};
  border: ${({theme:e})=>`1px solid rgba(${e.borderColorSoft||"55, 58, 64"}, 1)`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  color: ${({theme:e})=>`rgb(${e.fontColor||"193, 194, 197"})`};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Rp=b.span`
  font-size: ${T(12)};
  color: ${({theme:e})=>`rgb(${e.fontColor||"193, 194, 197"})`};
`,Dy=({title:e,items:t,defaultValue:n,clientValue:r,onChange:o})=>{const[i,a]=y.exports.useState(!1),[l,s]=y.exports.useState(""),c=y.exports.useRef(null),d=y.exports.useRef(null),p=t.filter(v=>v.toLowerCase().includes(l.toLowerCase())),g=v=>{o(v),a(!1),s("")};return y.exports.useEffect(()=>{i&&d.current&&d.current.focus()},[i]),y.exports.useEffect(()=>{const v=x=>{c.current&&!c.current.contains(x.target)&&(a(!1),s(""))};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[]),C(Ty,{ref:c,children:[u(My,{children:e}),C(Py,{isOpen:i,onClick:()=>a(!i),children:[u("span",{children:n||"Select"}),u(Cy,{strokeWidth:1.5,stroke:"currentColor"})]}),i&&C(_y,{children:[u(Iy,{children:C(Ry,{children:[u(_d,{strokeWidth:1.5,stroke:"currentColor"}),u("input",{ref:d,type:"text",placeholder:"Search...",value:l,onChange:v=>s(v.target.value)})]})}),C(zy,{children:[p.map(v=>C(Ip,{isSelected:v===n,onClick:()=>g(v),children:[u(Ly,{children:v.substring(0,2).toUpperCase()}),u(Rp,{children:v})]},v)),p.length===0&&u(Ip,{isSelected:!1,disabled:!0,children:u(Rp,{children:"No results found"})})]})]})]})},Fy=({settings:e,storedData:t,data:n,handleModelChange:r})=>{const{locales:o}=Vo();if(!o)return null;const i=o.ped;return u(hn,{title:i.title,children:u(Dy,{title:i.model,items:e.model.items,defaultValue:n,clientValue:t,onChange:a=>r(a)})})},Ny="https://cfx-nui-uz_AutoShot/shots/cdn-map.json";const Vy="illenium_preview_mode_v2";function By(){try{const e=window.localStorage.getItem(Vy);return e==="1"?!0:e!=="0"}catch{return!0}}let zp=By();const Lp=new Set;function jy(){const[e,t]=y.exports.useState(zp);return y.exports.useEffect(()=>{const n=()=>t(zp);return Lp.add(n),()=>{Lp.delete(n)}},[]),e}let v2={},xc=0;const vc=new Set;function Hy(){xc+=1,vc.forEach(e=>e())}typeof fetch=="function"&&fetch(Ny).then(e=>e.ok?e.json():{}).then(e=>{v2=e&&typeof e=="object"?e:{},Hy()}).catch(()=>{});function Uy(){const[e,t]=y.exports.useState(xc);return y.exports.useEffect(()=>{const n=()=>t(xc);return vc.add(n),()=>{vc.delete(n)}},[]),e}const ru="https://pub-c1a252f6ec9346cc908eee23d922ae56.r2.dev";function Wy(e,t){return e==="prop"?`prop_${t}`:e==="overlay"?`overlay_${t}`:`${t}`}function Gy(e,t,n,r){if(t==="prop")return`${ru}/skinshop/${e}/p${n}/${r}.jpg`;if(t==="component")return`${ru}/skinshop/${e}/${n}/${r}.jpg`;if(t==="overlay")return`${ru}/barbershop/${e}/${n}/${r}.jpg`;const o=Wy(t,Number(n)||0),i=`${e}/${o}/${r}`,a=v2[i];return a||`https://cfx-nui-uz_AutoShot/shots/${e}/${o}/${r}.png`}function de(e,t,n={}){return r=>u("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:e,height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",...n,...r,children:t})}const Yy=de("0 0 24 24",C(Tt,{children:[u("path",{fill:"none",d:"M0 0h24v24H0z"}),u("path",{d:"M9 11.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm6 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37a9.974 9.974 0 0010.41 3.97c.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"})]})),Zy=de("0 0 1024 1024",u("path",{d:"M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"})),Qy=de("0 0 24 24",u("path",{d:"M19.937,14.218l0,-8.654c0,-0.829 -0.672,-1.5 -1.5,-1.5l-10.628,-0c-0.276,-0 -0.5,-0.225 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l10.628,-0c1.38,-0 2.5,1.118 2.5,2.5l0,10.624c0,0.276 -0.224,0.5 -0.5,0.501c-0.276,-0 -0.5,-0.225 -0.5,-0.5l0,-0.556l-4.583,-4.584c-0.456,-0.456 0.251,-1.163 0.707,-0.707c0.162,0.162 2.37,2.37 3.876,3.876Zm-0.121,6.304c-0.395,0.262 -0.869,0.415 -1.379,0.415l-12.874,-0c-1.381,-0 -2.5,-1.119 -2.5,-2.5l0,-12.873c0,-0.51 0.153,-0.984 0.414,-1.38l-0.263,-0.263c-0.456,-0.456 0.251,-1.163 0.707,-0.707c0.088,0.088 0.176,0.176 0.263,0.263c0.245,0.245 16.095,16.094 16.339,16.338l0.263,0.263c0.455,0.456 -0.252,1.163 -0.707,0.707c-0.088,-0.087 -0.175,-0.175 -0.263,-0.263Zm-11.104,-11.103l-2.001,-2.001c-0.094,0.196 -0.146,0.415 -0.146,0.647c-0,0.829 0.672,1.5 1.5,1.5c0.232,-0 0.451,-0.052 0.647,-0.146Zm-2.733,-2.733l-1.77,-1.77c-0.093,0.196 -0.146,0.416 -0.146,0.648l0,10.717l1.926,-1.926c0.587,-0.586 1.536,-0.586 2.122,-0l0.555,0.554c0.195,0.196 0.511,0.196 0.706,0l2.415,-2.415l-2.343,-2.343c-0.395,0.262 -0.869,0.414 -1.379,0.414c-1.38,-0 -2.5,-1.119 -2.5,-2.5c-0,-0.509 0.152,-0.983 0.414,-1.379Zm-1.916,11.009l0,0.741c0,0.829 0.671,1.5 1.5,1.5l12.874,0c0.232,0 0.451,-0.052 0.647,-0.145c-0.165,-0.165 -3.264,-3.263 -6.59,-6.59l-2.414,2.415c-0.585,0.586 -1.537,0.586 -2.122,0l-0.554,-0.554c-0.195,-0.196 -0.512,-0.196 -0.708,0l-2.633,2.633Z"})),y2=de("0 0 640 512",u("path",{d:"M320.67 64c-442.6 0-357.57 384-158.46 384 39.9 0 77.47-20.69 101.42-55.86l25.73-37.79c15.66-22.99 46.97-22.99 62.63 0l25.73 37.79C401.66 427.31 439.23 448 479.13 448c189.86 0 290.63-384-158.46-384zM184 308.36c-41.06 0-67.76-25.66-80.08-41.05-5.23-6.53-5.23-16.09 0-22.63 12.32-15.4 39.01-41.05 80.08-41.05s67.76 25.66 80.08 41.05c5.23 6.53 5.23 16.09 0 22.63-12.32 15.4-39.02 41.05-80.08 41.05zm272 0c-41.06 0-67.76-25.66-80.08-41.05-5.23-6.53-5.23-16.09 0-22.63 12.32-15.4 39.01-41.05 80.08-41.05s67.76 25.66 80.08 41.05c5.23 6.53 5.23 16.09 0 22.63-12.32 15.4-39.02 41.05-80.08 41.05z"})),b2=de("0 0 448 512",u("path",{d:"M408.781 128.007C386.356 127.578 368 146.36 368 168.79V256h-8V79.79c0-22.43-18.356-41.212-40.781-40.783C297.488 39.423 280 57.169 280 79v177h-8V40.79C272 18.36 253.644-.422 231.219.007 209.488.423 192 18.169 192 40v216h-8V80.79c0-22.43-18.356-41.212-40.781-40.783C121.488 40.423 104 58.169 104 80v235.992l-31.648-43.519c-12.993-17.866-38.009-21.817-55.877-8.823-17.865 12.994-21.815 38.01-8.822 55.877l125.601 172.705A48 48 0 0 0 172.073 512h197.59c22.274 0 41.622-15.324 46.724-37.006l26.508-112.66a192.011 192.011 0 0 0 5.104-43.975V168c.001-21.831-17.487-39.577-39.218-39.993z"})),w2=de("0 0 512 512",u("path",{d:"M71.1 67.17l-4.28 38.43 379.28.7-3.8-39.13zm-6.28 56.43L24.04 423.5c55.85 22.4 114.06 20.6 173.86 1L234 282.6c12.1 9 25.5 5.3 32.2-1l39.9 146.1c61.9 24.1 132 19.5 181.9 6l-40.2-309.4z"})),C2=de("0 0 16 16",C(Tt,{children:[u("path",{d:"M5 13h6v-3h-1v.5a.5.5 0 0 1-1 0V10H5v3Z"}),u("path",{d:"M6 2v.341C3.67 3.165 2 5.388 2 8v1.191l-1.17.585A1.5 1.5 0 0 0 0 11.118V13.5A1.5 1.5 0 0 0 1.5 15h1c.456.607 1.182 1 2 1h7c.818 0 1.544-.393 2-1h1a1.5 1.5 0 0 0 1.5-1.5v-2.382a1.5 1.5 0 0 0-.83-1.342L14 9.191V8a6.002 6.002 0 0 0-4-5.659V2a2 2 0 1 0-4 0Zm2-1a1 1 0 0 1 1 1v.083a6.04 6.04 0 0 0-2 0V2a1 1 0 0 1 1-1Zm0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4ZM4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Z"})]})),k2=de("0 0 512 512",u("path",{d:"M42.63 89c8.3 49.2 17.42 100.1 14.35 151.5-2.9 48.8-28.19 92.8-31.58 134.5h319.7c5.3-16.4 16.2-30.9 28.3-42.1 4.2-3.9 8.5-7.5 12.8-10.6-34.9-9.7-61.7-24-82.5-41.3H244v-18h41c-8.5-9.5-15.7-19.6-21.7-30H208v-18h46c-4.6-9.9-8.4-19.9-11.7-30H192v-18h44.8c-2.8-10.1-5.3-20.2-7.6-30H176v-18h49c-2.4-10.5-4.9-20.54-7.7-30H42.63zM128 215c31.4 0 57 25.6 57 57s-25.6 57-57 57c-31.37 0-57-25.6-57-57s25.63-57 57-57zm0 18c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm287.6 96c-5 .3-18.6 6.5-30 17.1-8.7 8-16.5 18.3-21.2 28.9H448c11.5 0 25.6-5.7 38.6-12.3-.4-4.2-1-7.7-2.2-10-1.6-3.3-3.9-5.7-8.7-8.3-9.6-5.2-28.9-9.5-60.1-15.4zm71.4 52.9c-2 .9-3.4 1.6-5.7 2.5C471 388.5 459 393 448 393H25v30h407c22.2 0 45.3-8.7 55-12.8v-28.3z"})),S2=de("0 0 512 512",u("path",{d:"M73.09 23.21h1.2c6.9.31 12.8 4.74 17.2 9.89 5.4 6.35 9.41 14.82 11.71 24.59 2.4 9.77 2.7 19.13.8 27.22-.5 2.17-1.2 4.35-2.1 6.42 5.2.24 10.3 2.59 14.6 5.6 6.7 4.87 12.7 12.07 17.4 20.97 4.7 8.9 7.3 17.9 7.6 26.2.1 5.8-1 11.9-4.5 16.6 6.6-1.7 13.5.4 19.1 3.8 7.2 4.2 13.7 10.9 19.2 19.4 5.4 8.4 8.8 17.2 9.7 25.4.3 3 .3 6.1-.2 9.1 5-.8 10.3.3 15 2.1 7.6 3.1 15.1 8.7 21.8 16.3 6.6 7.5 11.3 15.6 13.4 23.7 1.1 4 1.6 8.4.9 12.6 5.6-3.2 12.5-4.8 20.1-4.8 7.7 0 14.5 1.6 20.2 4.8-.7-4.1-.3-8.5.8-12.6 2.2-8.1 6.8-16.2 13.5-23.8 6.6-7.6 14.1-13.1 21.9-16.3 4.6-1.9 9.9-2.9 14.9-2.1-.5-3-.5-6.1-.2-9 .9-8.3 4.2-17 9.7-25.5 5.5-8.5 12-15.1 19.2-19.4 5.6-3.3 12.4-5.5 18.8-3.8-3.3-4.7-4.4-10.8-4.3-16.6.2-8.3 2.8-17.3 7.5-26.1 4.7-9 10.7-16.1 17.5-20.94 4.2-3.09 9.3-5.46 14.6-5.7-.9-2.04-1.6-4.18-2.1-6.32-1.8-8.07-1.6-17.43.8-27.2 2.3-9.76 6.3-18.22 11.7-24.57 5.3-6.36 13.2-11.59 22.2-9.42s13.6 10.39 15.4 18.48c1.9 8.09 1.6 17.46-.7 27.23-2.4 9.77-6.4 18.24-11.7 24.56-4.5 5.29-10.5 9.78-17.6 9.98 1.2 3.5 1.7 7.4 1.5 11.1-.1 8.3-2.7 17.2-7.4 26.2-4.7 8.8-10.7 16-17.4 20.8-5.8 4.2-13 7-20.1 5.2 3.7 5.1 4.5 11.8 3.9 18.1-1 8.3-4.3 17-9.8 25.5-5.4 8.5-12 15.1-19.1 19.4-5.2 3-11.4 5.1-17.3 4.1.5 3.9 0 7.9-1 11.7-2.2 8-6.8 16.1-13.5 23.7-6.6 7.6-14.1 13.1-21.9 16.3-5 2-10.8 3.1-16.2 1.9 1.1 2.1 2 4.3 2.7 6.5.7 2.1 1.3 4.2 1.8 6.3-6.4.7-12.2 2.1-17.5 4.2-.4-1.7-.8-3.4-1.3-4.9-1.7-4.8-3.8-8.1-6.5-10.2-2.8-2.1-6.5-3.6-13-3.6s-10.2 1.5-13 3.6c-2.7 2.1-4.8 5.4-6.5 10.2-.5 1.5-.9 3.2-1.3 4.9-5.3-2.1-11.1-3.5-17.5-4.2.5-2.1 1.1-4.2 1.8-6.3.7-2.2 1.6-4.4 2.6-6.4-5.3 1.1-11.1 0-16.1-2-7.7-3.1-15.2-8.7-21.9-16.2-6.6-7.6-11.3-15.7-13.4-23.7-1-3.8-1.5-7.9-1-11.7-6 1-12.2-1.1-17.3-4.2-7.2-4.2-13.7-10.9-19.2-19.4-5.4-8.4-8.8-17.2-9.7-25.4-.7-6.3.1-13 3.8-18.2-7.1 1.9-14.3-1-20.1-5-6.8-4.9-12.71-12.1-17.51-21-4.7-8.9-7.3-17.8-7.5-26.2 0-3.7.4-7.6 1.7-11.2-7.1-.2-13.2-4.66-17.6-9.87-5.3-6.36-9.3-14.83-11.7-24.6-2.3-9.77-2.6-19.13-.8-27.22 2-8.11 6.5-16.32 15.5-18.49 1.3-.31 2.5-.47 3.8-.51z"})),Id=de("0 0 640 512",u("path",{d:"M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5z"})),E2=de("0 0 448 512",u("path",{d:"M207.1 237.4L151.2 69.7C168.6 79.7 192.6 88 224 88s55.4-8.3 72.8-18.3L226.5 280.6c-1.6 4.9-2.5 10-2.5 15.2V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V270.5c0-9.5-2.8-18.7-8.1-26.6l-47.9-71.8c-5.3-7.9-8.1-17.1-8.1-26.6V128 54.3 48c0-26.5-21.5-48-48-48h-4.5c-.2 0-.4 0-.6 0c-.4 0-.8 0-1.2 0C311 0 295.7 9.7 285.7 18.8C276.4 27.2 257.2 40 224 40s-52.4-12.8-61.7-21.2C152.3 9.7 137 0 118.3 0c-.4 0-.8 0-1.2 0c-.2 0-.4 0-.6 0H112C85.5 0 64 21.5 64 48v6.3V128v17.5c0 9.5-2.8 18.7-8.1 26.6L8.1 243.9C2.8 251.8 0 261.1 0 270.5V464c0 26.5 21.5 48 48 48H176c9.9 0 19-3 26.7-8.1C195.9 492.2 192 478.5 192 464V295.8c0-8.6 1.4-17.1 4.1-25.3l11-33.1zM347.3 356.7l48 48c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-48-48c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0zm-294.6 48l48-48c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-48 48c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6z"})),$2=de("0 0 512 512",u("path",{d:"M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"})),A2=de("0 0 512 512",u("path",{d:"M256 24c21.2 0 40.4 3.53 53.6 8.8 6.6 2.64 11.6 5.73 14.6 8.56S328 46.28 328 48c0 1.72-.8 3.81-3.8 6.64-3 2.83-8 5.92-14.6 8.56-13.2 5.27-32.4 8.8-53.6 8.8-21.2 0-40.4-3.53-53.6-8.8-6.6-2.64-11.6-5.73-14.6-8.56S184 49.72 184 48c0-1.72.8-3.81 3.8-6.64 3-2.83 8-5.92 14.6-8.56 13.2-5.27 32.4-8.8 53.6-8.8z"})),O2=de("0 0 512 512",u("path",{d:"M480 288c0-80.25-49.28-148.92-119.19-177.62L320 192V80a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16v112l-40.81-81.62C81.28 139.08 32 207.75 32 288v64h448zm16 96H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"})),T2=de("0 0 512 512",u("path",{d:"M464 184h-10.9a78.72 78.72 0 00-16-7.18C419.5 171 396.26 168 368 168s-51.5 3-69.06 8.82c-14.06 4.69-20.25 9.86-22.25 11.87a47.94 47.94 0 00-41.36 0c-2-2-8.19-7.18-22.25-11.87C195.5 171 172.26 168 144 168s-51.5 3-69.06 8.82a78.72 78.72 0 00-16 7.18H48a16 16 0 000 32h.17c1 45.46 6.44 72.78 18.11 92.23a66.78 66.78 0 0031.92 28c12.23 5.24 27.22 7.79 45.8 7.79 24.15 0 58.48-3.71 77.72-35.77 9.68-16.14 15.09-37.69 17.21-70.52A16 16 0 00240 232a16 16 0 0132 0 16 16 0 001.07 5.71c2.12 32.83 7.53 54.38 17.21 70.52a66.78 66.78 0 0031.92 28c12.23 5.24 27.22 7.79 45.8 7.79 24.15 0 58.48-3.71 77.72-35.77 11.67-19.45 17.13-46.77 18.11-92.23h.17a16 16 0 000-32z"})),M2=de("0 0 512 512",u("path",{d:"M143.3 24.25c-1.2-.01-2.5.02-3.7.1-9.8.61-19.9 3.54-29.3 7.02C91.57 38.34 75.43 47.9 75.43 47.9l9.14 15.5s15.16-8.89 32.03-15.15c8.4-3.13 17.3-5.51 24.1-5.94 6.9-.43 10.6.91 12.4 3.1 2.1 2.48 2.7 6.78.9 13.88-1.7 7.1-5.9 15.86-10.8 24.05-7.2 12.01-15.6 22.66-19.6 27.56-20.5 2.3-36.6 19.8-36.6 40.8 0 12.9 6.08 24.5 15.5 32-9.42 7.5-15.5 19.1-15.5 32 0 19.4 13.8 35.8 32 40V315c-12.9-16.8-34.09-26.8-52.75-26.5-32.93.3-50.94 35.9-50.76 55.5.94 30.3 21.88 50.8 47.83 73.4 22.59 19.7 48.58 40.4 64.38 70.3.1-.1.1-.1.2-.1s.1 0 .1.1c15.8-29.9 41.9-50.6 64.4-70.3 26.1-22.6 46.9-43.1 47.9-73.4.1-19.6-17.9-55.2-50.7-55.5-18.7-.3-39.7 9.5-52.6 26.3v-59.1c18.2-4.2 32-20.6 32-40 0-12.9-6.1-24.5-15.5-32 9.4-7.5 15.5-19.1 15.5-32 0-16.8-10.3-31.4-24.9-37.7 4.3-5.8 9.6-13.2 14.5-21.43 5.4-9.06 10.4-18.93 12.9-28.91s2.5-21.21-4.6-29.77c-6-7.23-14.9-9.58-23.6-9.64zm256 0c-1.2-.01-2.5.02-3.7.1-9.8.61-19.9 3.54-29.3 7.02-18.7 6.97-34.9 16.53-34.9 16.53l9.2 15.5s15.1-8.89 32-15.15c8.4-3.13 17.3-5.51 24.1-5.94 6.9-.43 10.6.91 12.4 3.1 2.1 2.48 2.7 6.78.9 13.88-1.7 7.1-5.9 15.86-10.8 24.05-7.2 12.01-15.6 22.66-19.6 27.56-20.5 2.3-36.6 19.8-36.6 40.8 0 12.9 6.1 24.5 15.5 32-9.4 7.5-15.5 19.1-15.5 32 0 19.4 13.8 35.8 32 40V315c-12.8-16.8-34-26.7-52.6-26.4-32.9.3-50.9 35.9-50.7 55.5.9 30.3 21.9 50.8 47.8 73.4 22.6 19.7 48.6 40.4 64.3 70.3.1-.1.1-.1.2-.1s.1 0 .1.1c15.8-29.9 41.9-50.6 64.4-70.3 26.1-22.6 46.9-43.1 47.9-73.4.1-19.6-17.9-55.2-50.7-55.5-18.7-.3-39.9 9.6-52.7 26.4v-59.3c18.2-4.2 32-20.6 32-40 0-12.9-6.1-24.5-15.5-32 9.4-7.5 15.5-19.1 15.5-32 0-16.8-10.3-31.4-24.9-37.7 4.3-5.8 9.6-13.2 14.5-21.43 5.4-9.06 10.4-18.93 12.9-28.91s2.5-21.21-4.6-29.77c-6-7.23-14.9-9.58-23.6-9.64z"})),P2=de("0 0 16 16",C(Tt,{children:[u("path",{d:"M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z"}),u("path",{d:"M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z"})]})),_2=de("0 0 512 512",u("path",{d:"M470.92 53.162c21.738 76.755-126.736 189.16-213.57 251.49 4.21 19.66 2.796 37.915 0 55.825 20.223 32.576.83 44.814 2.76 82.5-1.05 13.887-23.797 12.58-28.066-8.576 4.852-31.07-2.95-57.924-15.472-54.243l-31.933 43.23-47.61 67.04c-5.897 5.975-27.768 1.664-22.4-12.69l39.123-71.307-3.784-2.538-74.42 79c-6.056 6.26-26.28-7.956-19.953-16.503l69.72-74.202-3.783-1.925-66.576 44.227c-7.596 5.33-22.805-10.34-12.628-17.663l63.976-50.98-43.874 22.025c-6.156 2.1-12.68-10.355-5.976-13.335l50.997-32.6c26.468-21.393 58.785-57.834 94.072-65.2 55.417-83.656 104.97-167.018 175.057-253.61 26.274-13.577 86.7 8.58 94.34 30.035z"})),Xy=de("0 0 512 512",C(Tt,{children:[u("circle",{cx:"256",cy:"256",r:"64"}),u("path",{d:"M394.82 141.18C351.1 111.2 304.31 96 255.76 96c-43.69 0-86.28 13-126.59 38.48C88.52 160.23 48.67 207 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416c49 0 95.85-15.07 139.3-44.79C433.31 345 469.71 299.82 496 256c-26.38-43.43-62.9-88.56-101.18-114.82zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z"})]})),Dp=de("0 0 512 512",u("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"})),Ky=de("0 0 512 512",u("path",{d:"M319 35.375c-27.305-.247-52.415 19.47-62.063 46.094-9.726-26.856-35.196-46.656-62.78-46.064-15.11.325-30.85 6.764-45 21.532-11.47 11.968-17.863 27.782-24.407 43.75-15 22.49-35.066 39.27-64.156 45.874 7 6.374 14.63 9.69 22.656 11.063-14.192 7.828-33.583 12.154-61.28 10.78 20.528 26.327 52.643 35.282 86.28 34.532 60.716-2.34 91.448-33.326 109.438-64.875l16.218 9.25c-20.387 35.754-59.15 71.513-127.28 74.094-.002.24 0 .48 0 .72 0 6.067 1.32 13.4 3.686 21.686l-.25-.468 29.5 114.875 4.625-38.626c17.095 31.46 37.67 64.792 56.532 93.97l1.624-46.127c5.83 38.514 20.68 73.426 39.062 106.97 9.337 13.507 15.25 21.78 15.25 21.78s6.953-9.693 17.875-25.562c.07-.1.152-.213.22-.313 20.76-32.818 38.056-67.256 46.438-105.906l-1.063 37.438c9.342-14.666 18.923-30.088 28.156-45.656v28.468l40.533-104.125c9.877-21.585 16.512-40.562 17.656-54.342-65.713-7.917-111.206-41.86-132.314-78.875l16.22-9.25c19.702 34.552 66.54 68.93 138.312 71.062 15.085-.3 29.905-3.623 45.593-11.313-14.823.118-27.478-1.08-38.53-3.437 23.34-5.136 43.576-16.795 56.125-37.97-102.54 21.26-90.343-61.02-127.188-99.468-14.37-14.994-30.37-21.424-45.687-21.562z"})),qy=de("0 0 512 512",u("path",{d:"M211.3 80.89C122.5 81.18 56.21 109.7 18.89 145l12.36 13C93.43 99.36 258.4 54.4 485.6 176.8l8.6-15.8c-108.8-58.6-204.6-80.37-282.9-80.11z"})),Jy=de("0 0 24 24",C(Tt,{children:[u("path",{fill:"none",d:"M0 0h24v24H0z"}),u("circle",{cx:"9",cy:"13",r:"1.25"}),u("circle",{cx:"15",cy:"13",r:"1.25"}),u("path",{d:"M12 2c-.96 0-1.88.14-2.75.39A4.986 4.986 0 005 0C2.24 0 0 2.24 0 5c0 1.8.96 3.37 2.39 4.25C2.14 10.12 2 11.04 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55a9.942 9.942 0 009.92 3.46c.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z"})]})),e4=de("0 0 24 24",C(Tt,{children:[u("path",{fill:"none",d:"M0 0h24v24H0z"}),u("path",{d:"M18.5 11c-1.56 0-2.92-.9-3.58-2.21l-.79-1.67C14.12 7.1 13.63 6 12.34 6 8.72 6 6 16.69 6 19h2.5l-2.1 2.8L8 23l3-4h2v4h2v-4.03L13 13l.49-2.71A6.02 6.02 0 0017 12.81v.69h1v-1c0-.28.22-.5.5-.5s.5.22.5.5V23h1V12.5c0-.83-.67-1.5-1.5-1.5z"})]})),t4=de("0 0 512 512",u("path",{d:"M54.438 29.794a23.808 23.808 0 0 0-1.204.01c-4.688.157-7.914 1.736-10.113 3.935-2.932 2.932-4.761 7.689-3.588 15.305 1.174 7.616 5.683 17.754 15.272 28.941 67.894 79.21 132.935 155.56 183.703 211.969 12.273 13.637 23.693 26.08 34.125 37.135 12.095-31.902 34.57-54.144 62.902-64.715-10.825-10.199-22.936-21.313-36.197-33.248C242.93 178.358 166.578 113.314 87.369 45.42c-11.186-9.589-21.325-14.098-28.941-15.272a29.555 29.555 0 0 0-3.99-.355z"})),n4=de("0 0 24 24",C(Tt,{children:[u("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),u("path",{d:"M4 8v-2a2 2 0 0 1 2 -2h2"}),u("path",{d:"M4 16v2a2 2 0 0 0 2 2h2"}),u("path",{d:"M16 4h2a2 2 0 0 1 2 2v2"}),u("path",{d:"M16 20h2a2 2 0 0 0 2 -2v-2"}),u("path",{d:"M9 10l.01 0"}),u("path",{d:"M15 10l.01 0"}),u("path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0"})]}),{strokeWidth:2,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),r4=de("0 0 512 512",u("path",{d:"M277.3 32h-42.7v64h42.7V32zm129.1 43.7L368 114.1l29.9 29.9 38.4-38.4-29.9-29.9zm-300.8 0l-29.9 29.9 38.4 38.4 29.9-29.9-38.4-38.4zM256 128c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128zm224 106.7h-64v42.7h64v-42.7zm-384 0H32v42.7h64v-42.7zM397.9 368L368 397.9l38.4 38.4 29.9-29.9-38.4-38.4zm-283.8 0l-38.4 38.4 29.9 29.9 38.4-38.4-29.9-29.9zm163.2 48h-42.7v64h42.7v-64z"})),o4=de("0 0 512 512",u("path",{d:"M402.801 39.703c-5.813-.03-11.168.44-15.85 1.353-12.483 2.437-18.737 7.537-20.04 12.301-1.304 4.764 1.48 12.337 10.984 20.791 9.503 8.455 24.725 16.63 42.74 21.56 18.015 4.931 35.282 5.648 47.766 3.212 12.484-2.437 18.735-7.537 20.039-12.301 1.304-4.764-1.48-12.337-10.983-20.791-9.503-8.455-24.727-16.628-42.742-21.559-11.26-3.081-22.225-4.517-31.914-4.566z"})),i4=de("0 0 24 24",C(Tt,{children:[u("path",{fill:"none",d:"M0 0h24v24H0z"}),u("circle",{cx:"9",cy:"13",r:"1.25"}),u("circle",{cx:"15",cy:"13",r:"1.25"}),u("path",{d:"M22.91 11.96C22.39 6.32 17.66 2 12 2S1.61 6.32 1.09 11.96l-.9 9.86c-.1 1.17.82 2.18 2 2.18h19.62c1.18 0 2.1-1.01 1.99-2.18l-.89-9.86zM4.54 9.13c.87.55 1.89.87 2.96.87 1.86 0 3.5-.93 4.5-2.35C13 9.07 14.64 10 16.5 10c1.07 0 2.09-.32 2.96-.87.34.89.54 1.86.54 2.87 0 4.41-3.59 8-8 8s-8-3.59-8-8c0-1.01.2-1.98.54-2.87z"})]})),a4=de("0 0 448 512",u("path",{d:"M224 0a80 80 0 1 1 0 160A80 80 0 1 1 224 0zM436.8 382.8L373.5 462c-16.6 20.7-46.8 24.1-67.5 7.5c-17.6-14.1-22.7-38.1-13.5-57.7l-.8-.1c-38.9-5.6-74.3-25.1-99.7-54.8V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 .8 0 1.6 .1 2.4l101.4 50.7c23.7 11.9 33.3 40.7 21.5 64.4s-40.7 33.3-64.4 21.5L27.2 427.3c-1.1-.5-2.2-1.1-3.3-1.7c-4.9-2.8-9.2-6.4-12.6-10.6c-4.6-5.4-7.8-11.7-9.6-18.4c-3.3-12-1.9-25.2 4.8-36.6c.6-1.1 1.3-2.2 2-3.2L75.6 256.1c26.7-40.1 71.7-64.1 119.8-64.1h75.2c46.5 0 90.1 22.5 117.2 60.3l50.7 70.9c2.2 3 4 6.1 5.5 9.4c2.9 6.7 4.3 13.8 4 20.8c-.3 10.6-4.2 21-11.2 29.4z"})),l4=de("0 0 512 512",C(Tt,{children:[u("circle",{cx:"256",cy:"56",r:"56"}),u("path",{d:"M464 128H48v52h144l-32 325.13 51 6.87 21.65-192h47.02L301 512l51-6.98L320 180h144v-52z"})]})),Fp=de("0 0 512 512",u("path",{d:"M393.516 16.135c40.837 0 63.378 35.364 64 48 0 16.27-8.044 38.785-25.098 48.492-12.694 49.715-74.547 103.264-128.826 128.724 12.46 43.998-72.647 108.43-122.42 144.158 2.412 11.27 1.6 21.734 0 32 11.59 18.673.475 25.688 1.58 47.29-.602 7.96-13.64 7.21-16.087-4.916 2.78-17.81-1.69-33.203-8.87-31.093l-18.303 24.778-27.29 38.43c-3.38 3.424-15.917.953-12.84-7.275l22.426-40.874-2.17-1.456-42.658 45.283c-3.47 3.59-15.063-4.56-11.437-9.46l39.964-42.532-2.168-1.103-38.163 25.35c-4.354 3.057-13.072-5.926-7.24-10.123l36.674-29.224-25.15 12.625c-3.528 1.206-7.267-5.934-3.424-7.643l29.232-18.686c15.17-12.262 33.696-33.15 53.923-37.372 31.767-47.953 60.17-95.738 100.346-145.373 15.756-59.134 54.396-110.096 96-160 5.972-34.253 29.893-46.475 48-48z"})),Np=de("0 0 512 512",u("path",{d:"M19.09 16.96V170.7C73.51 193.5 202.7 200 259.8 189.4c-18.1 105.6 34 177.3 31.1 226.5-2 33.3-22.9 39-13.5 69.3 4.9 15.6 193 5.1 201.1 4.9 7.7-.3 5.4-19.2-13.3-27.2-35.2-15.1-80.2-10.7-110.1-47-9.7-14.6 6.9-180.3 10-241.4.8-15.7 4.7-78.91-60-100.5C225 47.24 123 27.32 19.09 16.96z"})),s4=de("0 0 512 512",u("path",{d:"M256 16c-30.6 0-59.243 9.113-82.97 24.844l44.064 44.062c24.486-11.704 53.326-11.704 77.812 0l44.063-44.062C315.242 25.114 286.597 16 256 16zM130.844 83.03C115.114 106.758 106 135.402 106 166c0 30.6 9.113 59.245 24.844 82.97l44.062-44.064c-11.704-24.484-11.704-53.326 0-77.812L130.844 83.03zm250.312 0l-44.062 44.064c11.704 24.486 11.704 53.328 0 77.812l44.062 44.063C396.886 225.242 406 196.598 406 166c0-30.6-9.113-59.245-24.844-82.97zm-123.844 38a45 45 0 0 0-46.312 45 45 45 0 0 0 90 0 45 45 0 0 0-43.688-45zm-40.218 126.064l-44.063 44.062C196.758 306.886 225.402 316 256 316c30.6 0 59.243-9.113 82.97-24.844l-44.064-44.062c-24.486 11.704-53.326 11.704-77.812 0zM256 316H46c-15 0-30 15-30 30v60c0 30 45 30 60 90h360c15-60 60-60 60-90v-60c0-15-15-30-30-30H256z"})),u4=de("0 0 24 24",u("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"})),c4=de("0 0 24 24",u("path",{d:"M9 11.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm6 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37a9.974 9.974 0 0010.41 3.97c.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"})),d4=de("0 0 24 24",u("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})),f4=de("0 0 24 24",u("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-6.9 10c0-1.85.64-3.55 1.7-4.9L16.9 17.2c-1.35 1.06-3.05 1.7-4.9 1.7-4.41 0-8-3.59-8-8zm13.8 0c0 1.85-.64 3.55-1.7 4.9L7.1 6.8c1.35-1.06 3.05-1.7 4.9-1.7 4.41 0 8 3.59 8 8z"})),p4=b.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  max-height: 480px;
  overflow-y: auto;
  overflow-x: hidden;
  contain: content;
  padding-right: 4px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 3.5px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(14, 15, 20, 0.6);
    border-radius: 9999px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #F5D77F 0%, #E5C058 60%, #996515 100%);
    border-radius: 9999px;
    box-shadow: 0 0 6px rgba(229, 192, 88, 0.4);
  }
`,h4=b.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(6px, 0.9vh, 9px);
  padding: 3px 1px;
  box-sizing: border-box;
`,Vp=b.button`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  min-height: clamp(95px, 13vh, 125px);
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: #14151B;
  border: 1.5px solid ${({$selected:e})=>e?"#E5C058":"rgba(229, 192, 88, 0.22)"};
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  box-sizing: border-box;
  box-shadow: ${({$selected:e})=>e?"0 0 16px rgba(229, 192, 88, 0.45), inset 0 0 10px rgba(229, 192, 88, 0.2)":"0 4px 12px rgba(0, 0, 0, 0.6)"};

  &:hover {
    border-color: #F5D77F;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.8), 0 0 14px rgba(229, 192, 88, 0.35);

    img {
      transform: scale(1.05);
    }
  }

  &:active {
    transform: translateY(0);
  }
`,m4=b.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 9px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 9px;
    transition: transform 0.25s ease;
  }
`,g4=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.35) 100%);
  pointer-events: none;
  z-index: 1;
`,Bp=b.span`
  position: absolute;
  top: 6px;
  right: 6px;
  min-width: 22px;
  height: 18px;
  padding: 0 5px;
  border-radius: 4px;
  border: 1px solid rgba(229, 192, 88, 0.5);
  background-color: rgba(10, 11, 15, 0.82);
  color: #ffffff;
  font-size: 9.5px;
  font-weight: 800;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.5px;
  pointer-events: none;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
`,jp=b.div`
  position: absolute;
  bottom: 7px;
  right: 7px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(circle, #f5d77f 0%, #e5c058 100%);
  border: 1.5px solid #ffffff;
  color: #111111;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  pointer-events: none;
  box-shadow: 0 0 10px rgba(229, 192, 88, 0.8);
`,x4=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 100%;
`,v4=b.div`
  width: clamp(34px, 4.5vh, 42px);
  height: clamp(34px, 4.5vh, 42px);
  border-radius: 50%;
  background: rgba(22, 24, 32, 0.85);
  border: 1.5px solid rgba(229, 192, 88, 0.4);
  color: #E5C058;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(18px, 2.4vh, 22px);
`,y4=b.span`
  color: #ffffff;
  font-size: clamp(9.5px, 1.3vh, 11px);
  font-weight: 800;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
`,b4=b.div`
  color: rgba(255, 255, 255, 0.35);
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,I2=y.exports.memo(({target:e,value:t,selected:n,onSelect:r})=>{const[o,i]=y.exports.useState(!1),a=Uy(),l=y.exports.useMemo(()=>Gy(e.gender,e.kind,e.id,t),[e.gender,e.kind,e.id,t,a]);y.exports.useEffect(()=>{i(!1)},[l]);const s=y.exports.useCallback(()=>{r(t)},[r,t]);if(t===-1)return C(Vp,{type:"button",$selected:n,"data-value":-1,"data-selected":n?"true":void 0,onClick:s,title:"Retirar Pe\xE7a",children:[u(Bp,{children:"--"}),C(x4,{children:[u(v4,{children:u(f4,{})}),u(y4,{children:"RETIRAR"})]}),n&&u(jp,{children:u(Qi,{size:12,strokeWidth:3.5})})]});const c=String(t).padStart(3,"0");return C(Vp,{type:"button",$selected:n,"data-value":t,"data-selected":n?"true":void 0,onClick:s,title:`Pe\xE7a #${t}`,children:[o?u(b4,{children:u(Qy,{})}):C(m4,{children:[u("img",{src:l,loading:"lazy",decoding:"async",alt:`#${t}`,onError:()=>i(!0)}),u(g4,{})]}),u(Bp,{children:c}),n&&u(jp,{children:u(Qi,{size:12,strokeWidth:3.5})})]})},(e,t)=>e.value===t.value&&e.selected===t.selected&&e.target.kind===t.target.kind&&e.target.id===t.target.id&&e.target.gender===t.target.gender);I2.displayName="ThumbnailTile";const Jo=30,Mi=({target:e,min:t,max:n,selected:r,blacklisted:o=[],onSelect:i})=>{const a=y.exports.useMemo(()=>{const h=[],f=new Set(o.map(m=>Number(m)));t<=0&&h.push(-1);for(let m=Math.max(0,t);m<=n;m++)f.has(m)||h.push(m);return h},[t,n,o]),[l,s]=y.exports.useState(Jo),c=y.exports.useRef(null),d=y.exports.useRef(i);d.current=i;const p=y.exports.useRef(a);p.current=a;const g=y.exports.useRef(r);g.current=r;const v=y.exports.useRef(l);v.current=l;const x=y.exports.useCallback(h=>{d.current(h)},[]);y.exports.useEffect(()=>{const h=a.indexOf(r);h!==-1&&h>=Jo?s(Math.min(a.length,h+6)):s(Jo),c.current&&(h>0?setTimeout(()=>{var m;const f=(m=c.current)==null?void 0:m.querySelector(`[data-value="${r}"]`);f&&f.scrollIntoView({block:"nearest",behavior:"auto"})},60):c.current.scrollTop=0)},[e.kind,e.id,e.gender]);const w=y.exports.useCallback(()=>{const h=c.current;!h||h.scrollHeight-h.scrollTop-h.clientHeight<240&&s(f=>Math.min(f+Jo,a.length))},[a.length]);y.exports.useEffect(()=>{const h=f=>{var D;const m=f.target,E=(D=m==null?void 0:m.tagName)==null?void 0:D.toLowerCase();if(E==="input"||E==="textarea"||(m==null?void 0:m.isContentEditable))return;const A=f.key;if(A!=="ArrowUp"&&A!=="ArrowDown"&&A!=="ArrowLeft"&&A!=="ArrowRight")return;const M=p.current;if(!M||M.length===0)return;const S=g.current;let _=M.indexOf(S);_===-1&&(_=0);let P=_;if(A==="ArrowLeft"){if(_<=0)return;P=_-1}else if(A==="ArrowRight"){if(_>=M.length-1)return;P=_+1}else if(A==="ArrowUp"){if(_-3<0)return;P=_-3}else if(A==="ArrowDown")if(_+3>=M.length){const U=Math.floor((M.length-1)/3)*3;if(_<U)P=M.length-1;else return}else P=_+3;if(P===_)return;if(f.preventDefault(),P>=v.current){const U=Math.min(M.length,Math.max(v.current+Jo,P+6));s(U)}const R=M[P];x(R),setTimeout(()=>{if(c.current){const U=c.current.querySelector(`[data-value="${R}"]`);U&&U.scrollIntoView({block:"nearest",behavior:"auto"})}},16)};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[x]);const k=y.exports.useMemo(()=>a.slice(0,l),[a,l]);return u(p4,{ref:c,onScroll:w,children:u(h4,{children:k.map(h=>u(I2,{target:e,value:h,selected:h===r,onSelect:x},h))})})},w4=b.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${T(10)};
`,C4=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${T(8)};
`,k4=b.span`
  font-size: ${T(11)};
  color: ${({theme:e})=>`rgb(${e.mutedTextColor||"144, 146, 150"})`};
  font-weight: 500;
`,S4=b.div`
  display: flex;
  align-items: center;
  background-color: ${({theme:e})=>`rgb(${e.surfaceBackground||"37, 38, 43"})`};
  border: ${({theme:e})=>`1px solid rgba(${e.borderColorSoft||"55, 58, 64"}, 1)`};
  border-radius: ${T(6)};
  overflow: hidden;
  transition: all 0.15s ease;
  
  &:hover {
    background-color: ${({theme:e})=>`rgb(${e.primaryBackgroundSelected||"55, 58, 64"})`};
    border-color: ${({theme:e})=>`rgb(${e.mutedTextColorSoft||"92, 95, 102"})`};
  }
`,Hp=b.button`
  width: ${T(32)};
  height: ${T(32)};
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    width: ${T(12)};
    height: ${T(12)};
    color: ${({theme:e})=>`rgb(${e.mutedTextColorSoft||"92, 95, 102"})`};
    transition: color 0.2s ease;
  }
  
  &:hover {
    background: ${({theme:e})=>`rgba(${e.accentColor||"66, 140, 255"}, 0.15)`};
    border-color: ${({theme:e})=>`1px solid rgba(${e.borderColorSoft||"55, 58, 64"}, 1)`};
    
    svg {
      color: ${({theme:e})=>`rgb(${e.accentColor||"66, 140, 255"})`};
    }
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    
    &:hover {
      background: transparent;
      
      svg {
        color: ${({theme:e})=>`rgb(${e.mutedTextColorSoft||"92, 95, 102"})`};
      }
    }
  }
`,E4=b.input`
  flex: 1;
  text-align: center;
  font-size: ${T(12)};
  color: ${({theme:e})=>`rgb(${e.fontColor||"193, 194, 197"})`};
  font-weight: 500;
  min-width: ${T(50)};
  background: transparent;
  border: none;
  outline: none;
  height: ${T(32)};
  font-family: 'Nexa-Book', sans-serif;
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  -moz-appearance: textfield;
`,eo=({title:e,min:t=0,max:n=255,blacklisted:r=[],defaultValue:o,clientValue:i,onChange:a,thumbnail:l})=>{const s=y.exports.useRef(null),c=jy(),d=function(h,f){if(!f||f.length===0)return!1;for(var m=0;m<f.length;m++){const E=Number(f[m]);if(!isNaN(E)&&E===h)return!0}return!1},p=function(h){return h<t?h=n:h>n&&(h=t),h},g=function(h,f,m,E,A,M){let S=p(h);if(!f||f.length===0)return S;if(m===0){if(!d(S,f))return S;m=S>E?1:-1}if(!d(S,f))return S;let _=S,P=0;const R=M-A+1;do if(_=p(_+m),P++,P>=R)return S;while(d(_,f));return _},v=y.exports.useCallback((h,f,m)=>g(h,r,f,m,t,n),[t,n,r]),x=y.exports.useCallback((h,f)=>{let m;if(h==null||Number.isNaN(h))return;if(typeof h=="string"){if(m=parseInt(h,10),isNaN(m))return}else m=h;const A=v(m,f,o!==void 0?o:i);a(A)},[v,a,o,i]),w=e?`${e} (${n})`:void 0,k=o!==void 0?o:i;return C(w4,{children:[w&&u(C4,{children:u(k4,{children:w})}),C(S4,{children:[u(Hp,{type:"button",onClick:()=>x(k-1,-1),children:u(br,{strokeWidth:2,stroke:"currentColor"})}),u(E4,{type:"number",ref:s,value:o,onChange:h=>x(h.target.value,0)}),u(Hp,{type:"button",onClick:()=>x(k+1,1),children:u(Hn,{strokeWidth:2,stroke:"currentColor"})})]}),l&&c&&u(Mi,{target:l,min:t,max:n,selected:k,blacklisted:r,onSelect:h=>x(h,0)})]})},$4=b.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: ${({$ruler:e})=>e?"0.8rem":"0.4rem"};
`,A4=b.label`
  color: #ffffff;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`,O4=b.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
`,T4=b.input`
  background-color: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 2.2rem;
  width: 2.5rem;
  height: 2rem;
  color: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }

  &:focus {
    border-color: #e6cd00;
  }
`,M4=b.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
`,P4=b.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 20px;
  background: transparent;
  cursor: pointer;
  outline: none;
  margin: 0;

  /* Track */
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    background: linear-gradient(
      to right,
      #ffffff 0%,
      #ffffff ${({$progress:e})=>e}%,
      rgba(0, 0, 0, 0.5) ${({$progress:e})=>e}%,
      rgba(0, 0, 0, 0.5) 100%
    );
    border-radius: 9999px;
    border: none;
  }

  &::-moz-range-track {
    width: 100%;
    height: 6px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 9999px;
  }

  &::-moz-range-progress {
    height: 6px;
    background: #ffffff;
    border-radius: 9999px;
  }

  /* Thumb */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    margin-top: -3px;
    background-color: #e6cd00;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
    border-radius: 2px;
    border: none;
    cursor: pointer;
    transition: transform 0.1s ease;

    &:hover {
      transform: scale(1.15);
    }
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background-color: #e6cd00;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
    border-radius: 2px;
    border: none;
    cursor: pointer;
  }
`,_4=b.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 0.35rem;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
`,I4=({label:e,min:t=0,max:n=100,step:r=1,middle:o=null,ruler:i=!1,value:a,setValue:l,disabled:s=!1})=>{const c=y.exports.useId(),[d,p]=y.exports.useState(a),g=y.exports.useRef(!1),v=y.exports.useRef(a),x=y.exports.useRef(null),w=y.exports.useRef(0),k=y.exports.useRef(l);k.current=l,y.exports.useEffect(()=>{g.current||(p(a),v.current=a)},[a]),y.exports.useEffect(()=>()=>{x.current&&clearTimeout(x.current)},[]);const h=y.exports.useCallback(R=>{v.current=R;const D=Date.now(),U=40;if(D-w.current>=U)x.current&&(clearTimeout(x.current),x.current=null),w.current=D,k.current(R);else if(!x.current){const Y=U-(D-w.current);x.current=setTimeout(()=>{x.current=null,w.current=Date.now(),k.current(v.current)},Y)}},[]),f=y.exports.useCallback(()=>{x.current&&(clearTimeout(x.current),x.current=null),w.current=Date.now(),k.current(v.current)},[]),m=y.exports.useCallback(R=>{const D=parseFloat(R.target.value);isNaN(D)||(p(D),h(D))},[h]),E=y.exports.useCallback(()=>{g.current=!0},[]),A=y.exports.useCallback(()=>{g.current=!1,f()},[f]),M=y.exports.useCallback(R=>{const D=parseFloat(R.target.value);if(!isNaN(D)){const U=Math.min(n,Math.max(t,D));p(U),v.current=U,k.current(U)}},[n,t]),S=isNaN(d)?t:d,_=n>t?Math.max(0,Math.min(100,(S-t)/(n-t)*100)):0,P=o!==null?o:Math.round((t+n)/2);return C($4,{$ruler:i,children:[e&&u(A4,{htmlFor:c,children:e}),C(O4,{children:[u(T4,{id:c,type:"number",min:t,max:n,step:r,value:Number(S.toFixed(r<.1?2:r<1?1:0)),onChange:M,disabled:s}),C(M4,{children:[u(P4,{type:"range",min:t,max:n,step:r,value:S,onChange:m,onPointerDown:E,onPointerUp:A,onTouchStart:E,onTouchEnd:A,$progress:_,disabled:s}),i&&C(_4,{children:[u("span",{children:t}),o!=null&&u("span",{children:P}),u("span",{children:n})]})]})]})]})};var Bt=y.exports.memo(I4);const $e=y.exports.memo(({min:e,max:t,factor:n=1,title:r,defaultValue:o=0,onChange:i})=>u(Bt,{label:r,min:e,max:t,step:n,value:o,setValue:i,ruler:!0}));$e.displayName="RangeInput";const R4=({settings:e,storedData:t,data:n,handleHeadBlendChange:r})=>{const{locales:o}=Vo();if(!o)return null;const i=o.headBlend;return C(Tt,{children:[C(hn,{title:i.shape.title,children:[u(eo,{title:i.shape.firstOption,min:e.shapeFirst.min,max:e.shapeFirst.max,defaultValue:n.shapeFirst,clientValue:t.shapeFirst,onChange:a=>r("shapeFirst",a)}),u(eo,{title:i.shape.secondOption,min:e.shapeSecond.min,max:e.shapeSecond.max,defaultValue:n.shapeSecond,clientValue:t.shapeSecond,onChange:a=>r("shapeSecond",a)}),u($e,{title:i.shape.mix,min:e.shapeMix.min,max:e.shapeMix.max,factor:e.shapeMix.factor,defaultValue:n.shapeMix,onChange:a=>r("shapeMix",a)})]}),C(hn,{title:i.skin.title,children:[u(eo,{title:i.skin.firstOption,min:e.skinFirst.min,max:e.skinFirst.max,defaultValue:n.skinFirst,clientValue:t.skinFirst,onChange:a=>r("skinFirst",a)}),u(eo,{title:i.skin.secondOption,min:e.skinSecond.min,max:e.skinSecond.max,defaultValue:n.skinSecond,clientValue:t.skinSecond,onChange:a=>r("skinSecond",a)}),u($e,{title:i.skin.mix,min:e.skinMix.min,max:e.skinMix.max,factor:e.skinMix.factor,defaultValue:n.skinMix,onChange:a=>r("skinMix",a)})]}),C(hn,{title:i.race.title,children:[u(eo,{title:i.race.shape,min:e.shapeThird.min,max:e.shapeThird.max,defaultValue:n.shapeThird,clientValue:t.shapeThird,onChange:a=>r("shapeThird",a)}),u(eo,{title:i.race.skin,min:e.skinThird.min,max:e.skinThird.max,defaultValue:n.skinThird,clientValue:t.skinThird,onChange:a=>r("skinThird",a)}),u($e,{title:i.race.mix,min:e.thirdMix.min,max:e.thirdMix.max,factor:e.thirdMix.factor,defaultValue:n.thirdMix,onChange:a=>r("thirdMix",a)})]})]})},z4=({settings:e,storedData:t,data:n,handleFaceFeatureChange:r})=>{const{locales:o}=Vo();if(!o)return null;const i=o.faceFeatures;return C(Tt,{children:[C(hn,{title:i.nose.title,children:[u($e,{title:i.nose.width,min:e.noseWidth.min,max:e.noseWidth.max,factor:e.noseWidth.factor,defaultValue:n.noseWidth,onChange:a=>r("noseWidth",a)}),u($e,{title:i.nose.height,min:e.nosePeakHigh.min,max:e.nosePeakHigh.max,factor:e.nosePeakHigh.factor,defaultValue:n.nosePeakHigh,onChange:a=>r("nosePeakHigh",a)}),u($e,{title:i.nose.size,min:e.nosePeakSize.min,max:e.nosePeakSize.max,factor:e.nosePeakSize.factor,defaultValue:n.nosePeakSize,onChange:a=>r("nosePeakSize",a)}),u($e,{title:i.nose.boneHeight,min:e.noseBoneHigh.min,max:e.noseBoneHigh.max,factor:e.noseBoneHigh.factor,defaultValue:n.noseBoneHigh,onChange:a=>r("noseBoneHigh",a)}),u($e,{title:i.nose.peakHeight,min:e.nosePeakLowering.min,max:e.nosePeakLowering.max,factor:e.nosePeakLowering.factor,defaultValue:n.nosePeakLowering,onChange:a=>r("nosePeakLowering",a)}),u($e,{title:i.nose.boneTwist,min:e.noseBoneTwist.min,max:e.noseBoneTwist.max,factor:e.noseBoneTwist.factor,defaultValue:n.noseBoneTwist,onChange:a=>r("noseBoneTwist",a)})]}),C(hn,{title:i.eyebrows.title,children:[u($e,{title:i.eyebrows.height,min:e.eyeBrownHigh.min,max:e.eyeBrownHigh.max,factor:e.eyeBrownHigh.factor,defaultValue:n.eyeBrownHigh,onChange:a=>r("eyeBrownHigh",a)}),u($e,{title:i.eyebrows.depth,min:e.eyeBrownForward.min,max:e.eyeBrownForward.max,factor:e.eyeBrownForward.factor,defaultValue:n.eyeBrownForward,onChange:a=>r("eyeBrownForward",a)})]}),C(hn,{title:i.cheeks.title,children:[u($e,{title:i.cheeks.boneHeight,min:e.cheeksBoneHigh.min,max:e.cheeksBoneHigh.max,factor:e.cheeksBoneHigh.factor,defaultValue:n.cheeksBoneHigh,onChange:a=>r("cheeksBoneHigh",a)}),u($e,{title:i.cheeks.boneWidth,min:e.cheeksBoneWidth.min,max:e.cheeksBoneWidth.max,factor:e.cheeksBoneWidth.factor,defaultValue:n.cheeksBoneWidth,onChange:a=>r("cheeksBoneWidth",a)}),u($e,{title:i.cheeks.width,min:e.cheeksWidth.min,max:e.cheeksWidth.max,factor:e.cheeksWidth.factor,defaultValue:n.cheeksWidth,onChange:a=>r("cheeksWidth",a)})]}),C(hn,{title:i.eyesAndMouth.title,children:[u($e,{title:i.eyesAndMouth.eyesOpening,min:e.eyesOpening.min,max:e.eyesOpening.max,factor:e.eyesOpening.factor,defaultValue:n.eyesOpening,onChange:a=>r("eyesOpening",a)}),u($e,{title:i.eyesAndMouth.lipsThickness,min:e.lipsThickness.min,max:e.lipsThickness.max,factor:e.lipsThickness.factor,defaultValue:n.lipsThickness,onChange:a=>r("lipsThickness",a)})]}),C(hn,{title:i.jaw.title,children:[u($e,{title:i.jaw.width,min:e.jawBoneWidth.min,max:e.jawBoneWidth.max,factor:e.jawBoneWidth.factor,defaultValue:n.jawBoneWidth,onChange:a=>r("jawBoneWidth",a)}),u($e,{title:i.jaw.size,min:e.jawBoneBackSize.min,max:e.jawBoneBackSize.max,factor:e.jawBoneBackSize.factor,defaultValue:n.jawBoneBackSize,onChange:a=>r("jawBoneBackSize",a)})]}),C(hn,{title:i.chin.title,children:[u($e,{title:i.chin.lowering,min:e.chinBoneLowering.min,max:e.chinBoneLowering.max,factor:e.chinBoneLowering.factor,defaultValue:n.chinBoneLowering,onChange:a=>r("chinBoneLowering",a)}),u($e,{title:i.chin.length,min:e.chinBoneLenght.min,max:e.chinBoneLenght.max,factor:e.chinBoneLenght.factor,defaultValue:n.chinBoneLenght,onChange:a=>r("chinBoneLenght",a)}),u($e,{title:i.chin.size,min:e.chinBoneSize.min,max:e.chinBoneSize.max,factor:e.chinBoneSize.factor,defaultValue:n.chinBoneSize,onChange:a=>r("chinBoneSize",a)}),u($e,{title:i.chin.hole,min:e.chinHole.min,max:e.chinHole.max,factor:e.chinHole.factor,defaultValue:n.chinHole,onChange:a=>r("chinHole",a)})]}),u(hn,{title:i.neck.title,children:u($e,{title:i.neck.thickness,min:e.neckThickness.min,max:e.neckThickness.max,factor:e.neckThickness.factor,defaultValue:n.neckThickness,onChange:a=>r("neckThickness",a)})})]})},L4=b.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  background: rgba(0, 0, 0, 0.75);
  z-index: 99999;
  font-family: 'Montserrat', sans-serif;

  & > div {
    background: rgba(10, 10, 10, 0.95);
    border: 1px solid rgba(230, 205, 0, 0.5);
    border-radius: 5px;
    padding: 2rem 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
    max-width: 420px;
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: 'Montserrat', sans-serif;
  }

  span {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.4;
  }
`,D4=b.div`
  display: flex;
  gap: 0.8rem;
  width: 100%;
  justify-content: center;

  button {
    min-width: 110px;
    padding: 10px 18px;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    /* Accept (first) */
    &:first-child {
      background-color: #e6cd00;
      border: 1px solid #e6cd00;
      color: #111111;

      &:hover {
        background-color: #ffea1e;
        border-color: #ffea1e;
      }
    }

    /* Decline / Cancel (last) */
    &:last-child {
      background-color: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #ffffff;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.4);
      }
    }

    &:active {
      transform: scale(0.98);
    }
  }
`,Up=({title:e,description:t,accept:n,decline:r,handleAccept:o,handleDecline:i})=>C(L4,{children:[u("p",{children:e}),u("span",{children:t}),C(D4,{children:[u("button",{type:"button",onClick:o,children:n}),u("button",{type:"button",onClick:i,children:r})]})]}),ou=b.div`
  position: relative;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  background: transparent !important;
`;b.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  z-index: 1000;
  font-family: 'Montserrat', sans-serif;
  background: transparent !important;
  user-select: none;
`;const F4=b.div`
  width: clamp(480px, 34vw, 550px);
  max-width: 94vw;
  max-height: 92vh;
  background: rgba(14, 15, 20, 0.96);
  border: 1.5px solid rgba(229, 192, 88, 0.45);
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.92), 0 0 32px rgba(229, 192, 88, 0.2);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  margin-right: clamp(24px, 3.5vw, 60px);
  box-sizing: border-box;
  animation: slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 1440px) {
    width: clamp(440px, 35vw, 490px);
    margin-right: clamp(16px, 2.5vw, 40px);
  }

  @media (max-width: 1024px) {
    width: clamp(400px, 44vw, 450px);
    margin-right: 16px;
  }
`,N4=b.div`
  width: 100%;
  padding: 10px 14px 10px 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  max-height: clamp(520px, 76vh, 690px);
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(229, 192, 88, 0.35);
    border-radius: 3px;
  }
`;b.div`
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.95),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.4),
    transparent
  );
  width: 40rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  box-sizing: border-box;

  @media (max-width: 1280px) {
    zoom: 0.85;
  }
  @media (max-width: 1024px) {
    zoom: 0.72;
  }
  @media (max-width: 800px) {
    zoom: 0.55;
  }
`;b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 3rem 2.8rem 1.8rem 2.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;b.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
  gap: 1.2rem;
  height: calc(100% - 110px);
  margin-top: 0.8rem;
  overflow: hidden;
`;b.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
  height: 100%;
  overflow: hidden;
`;b.div`
  width: 100%;
  height: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 4px;
  contain: content;

  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background: #e6cd00;
  }
`;b.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 0.4rem;
  flex-shrink: 0;
`;b.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 1.15rem;
    background-color: #e6cd00;
    border-radius: 2px;
  }
`;const V4=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.2rem;
`,B4=b.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 5px;
  border: 1px solid ${({$active:e})=>e?"#e6cd00":"rgba(255, 255, 255, 0.12)"};
  background: ${({$active:e})=>e?"#e6cd00":"rgba(0, 0, 0, 0.4)"};
  color: ${({$active:e})=>e?"#111111":"rgba(255, 255, 255, 0.75)"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #e6cd00;
    color: ${({$active:e})=>e?"#111111":"#ffffff"};
    background: ${({$active:e})=>e?"#ffea1e":"rgba(230, 205, 0, 0.2)"};
  }
`;b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
  gap: 0.8rem;
  flex-shrink: 0;
`;b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  white-space: nowrap;
`;const R2=b.div`
  position: absolute;
  left: calc(100% + 1rem);
  bottom: 2rem;
  z-index: 999;
  animation: fadeIn 0.15s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Ro=`calc(100vh - ${T(24)})`;b.div`
  display: flex;
  align-items: flex-start;
  height: ${Ro};
  max-height: ${Ro};
  margin: ${xn(12,10,18)} ${xn(12,10,18)} ${xn(12,10,18)} 0;
  box-sizing: border-box;
  overflow: hidden;
`;b.div`
  display: flex;
  align-items: stretch;
  flex: none;
  height: ${Ro};
  max-height: ${Ro};
  min-height: 0;
  background: ${({theme:e})=>`rgba(${e.primaryBackground||"20, 20, 20"}, 0.96)`};
  border: ${({theme:e})=>`1px solid rgb(${e.borderColor||"68, 68, 68"})`};
  border-radius: ${T(8)};
  box-shadow: ${T(4)} ${T(4)} ${T(28)} rgba(0, 0, 0, 0.65);
  position: relative;
  z-index: 1;
  overflow: hidden;
  box-sizing: border-box;
`;b.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: ${xn(280,240,340)};
  width: ${xn(400,300,540)};
  min-height: 0;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;b.div`
  padding: ${T(16)} ${T(16)} ${T(14)};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: ${T(12)};
  border-bottom: ${({theme:e})=>`1px solid rgba(${e.borderColor||"44, 46, 51"}, 1)`};
`;b.div`
  width: ${T(40)};
  height: ${T(40)};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>`rgb(${e.surfaceBackground||"37, 38, 43"})`};
  border: ${({theme:e})=>`1px solid rgba(${e.borderColorSoft||"55, 58, 64"}, 1)`};
  border-radius: ${T(8)};
  
  svg {
    color: ${({theme:e})=>`rgb(${e.accentColor||"66, 140, 255"})`};
    width: ${T(20)};
    height: ${T(20)};
  }
`;b.div`
  flex: 1;
  
  h1 {
    font-size: ${T(14)};
    font-weight: 600;
    color: ${({theme:e})=>`rgb(${e.fontColor||"193, 194, 197"})`};
    margin: 0 0 ${T(2)} 0;
  }
  
  p {
    font-size: ${T(11)};
    color: ${({theme:e})=>`rgb(${e.mutedTextColor||"144, 146, 150"})`};
    margin: 0;
  }
`;b.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 0;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>`rgb(${e.secondaryBackground||"16, 17, 19"})`};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>`rgb(${e.borderColorSoft||"55, 58, 64"})`};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>`rgb(${e.accentColor||"66, 140, 255"})`};
  }
`;b.div`
  display: flex;
  gap: ${T(8)};
  padding: ${T(16)} ${T(16)} ${T(20)};
  flex-shrink: 0;
  background: ${({theme:e})=>`rgb(${e.surfaceBackgroundAlt||"20, 21, 23"})`};
  border-top: ${({theme:e})=>`1px solid rgba(${e.borderColor||"44, 46, 51"}, 1)`};
`;const yc=b.button`
  flex: 1;
  padding: ${T(8)} ${T(14)};
  border-radius: ${T(4)};
  font-size: ${T(12)};
  font-weight: 600;
  font-family: 'Nexa-Book', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${({variant:e,theme:t})=>e==="primary"?`
    background-color: rgba(${t.accentColor||"66, 140, 255"}, 0.2);
    border: 1px solid rgb(${t.accentColor||"66, 140, 255"});
    color: rgb(${t.accentColor||"66, 140, 255"});
    
    &:hover {
      background-color: rgba(${t.accentColor||"66, 140, 255"}, 0.25);
      border-color: rgb(${t.accentColor||"66, 140, 255"});
    }
    
    &:active {
      transform: scale(0.98);
    }
  `:`
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgb(${t.fontColor||"193, 194, 197"});
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-color: rgb(${t.accentColor||"66, 140, 255"});
      color: rgb(${t.accentColor||"66, 140, 255"});
    }
    
    &:active {
      transform: scale(0.98);
    }
  `}
`;b.div`
  width: ${T(72)};
  flex-shrink: 0;
  height: ${Ro};
  max-height: ${Ro};
  min-height: 0;
  background: ${({theme:e})=>`rgb(${e.primaryBackground||"20, 20, 20"})`};
  border: ${({theme:e})=>`1px solid rgb(${e.borderColor||"68, 68, 68"})`};
  border-radius: ${T(12)};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${T(16)} 0 ${T(16)} 0;
  gap: ${T(4)};
  overflow-y: auto;
  box-sizing: border-box;
  box-shadow: 10px 0 40px rgba(0, 0, 0, 0.5);
  position: relative;

  &::-webkit-scrollbar {
    width: 0;
  }
`;b.button`
  width: ${T(56)};
  height: ${T(56)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${T(4)};
  border-radius: ${T(8)};
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({active:e,theme:t})=>e?`rgba(${t.accentColor||"66, 140, 255"}, 0.2)`:"transparent"};
  border: ${({active:e,theme:t})=>e?`1px solid rgb(${t.accentColor||"66, 140, 255"})`:`1px solid rgba(${t.borderColor||"44, 46, 51"}, 1)`};
  box-shadow: ${({active:e,theme:t})=>e?`0 0 0 1px rgba(${t.accentColor||"66, 140, 255"}, 0.2)`:"none"};
  
  svg {
    width: ${T(18)};
    height: ${T(18)};
    color: ${({active:e,theme:t})=>e?`rgb(${t.accentColor||"66, 140, 255"})`:`rgb(${t.mutedTextColorSoft||"92, 95, 102"})`};
    transition: color 0.2s ease;
  }
  
  span {
    font-size: ${T(9)};
    font-weight: 500;
    color: ${({active:e,theme:t})=>e?`rgb(${t.fontColor||"193, 194, 197"})`:`rgb(${t.mutedTextColorSoft||"92, 95, 102"})`};
    transition: color 0.2s ease;
  }
  
  &:hover {
    background: ${({active:e,theme:t})=>e?`rgba(${t.accentColor||"66, 140, 255"}, 0.2)`:`rgb(${t.surfaceBackground||"37, 38, 43"})`};
    border-color: ${({active:e,theme:t})=>e?`rgb(${t.accentColor||"66, 140, 255"})`:`rgb(${t.borderColorSoft||"55, 58, 64"})`};
    
    svg {
      color: ${({active:e,theme:t})=>e?`rgb(${t.accentColorHover||"120, 176, 255"})`:`rgb(${t.accentColor||"66, 140, 255"})`};
    }
    
    span {
      color: ${({active:e,theme:t})=>e?`rgb(${t.fontColor||"193, 194, 197"})`:`rgb(${t.accentColor||"66, 140, 255"})`};
    }
  }
`;b.div`
  border-bottom: ${({theme:e})=>`1px solid rgba(${e.borderColor||"44, 46, 51"}, 1)`};
`;b.button`
  width: 100%;
  padding: ${T(12)} ${T(16)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: ${({theme:e})=>`rgb(${e.surfaceBackground||"37, 38, 43"})`};
    
    span { color: ${({theme:e})=>`rgb(${e.accentColor||"66, 140, 255"})`}; }
    svg { color: ${({theme:e})=>`rgb(${e.accentColor||"66, 140, 255"})`}; }
  }
  
  span {
    font-size: ${T(12)};
    font-weight: 500;
    color: ${({theme:e})=>`rgb(${e.fontColor||"193, 194, 197"})`};
    transition: color 0.2s ease;
  }
  
  svg {
    width: ${T(14)};
    height: ${T(14)};
    color: ${({theme:e})=>`rgb(${e.mutedTextColor||"144, 146, 150"})`};
    transition: transform 0.25s ease, color 0.2s ease;
    transform: ${({expanded:e})=>e?"rotate(180deg)":"rotate(0)"};
  }
`;b.div`
  padding: ${T(16)} ${T(16)} ${T(18)};
  display: flex;
  flex-direction: column;
  gap: ${T(16)};
`;b.div`
  display: flex;
  flex-direction: column;
  gap: ${T(6)};
`;b.label`
  font-size: ${T(11)};
  color: ${({theme:e})=>`rgb(${e.mutedTextColor||"144, 146, 150"})`};
  font-weight: 500;
  font-family: 'Nexa-Book', sans-serif;
`;b.div`
  display: flex;
  align-items: center;
  background-color: ${({theme:e})=>`rgb(${e.surfaceBackground||"37, 38, 43"})`};
  border: ${({theme:e})=>`1px solid rgba(${e.borderColorSoft||"55, 58, 64"}, 1)`};
  border-radius: ${T(6)};
  overflow: hidden;
  transition: all 0.15s ease;
  
  &:hover {
    background-color: ${({theme:e})=>`rgb(${e.primaryBackgroundSelected||"55, 58, 64"})`};
    border-color: ${({theme:e})=>`rgb(${e.mutedTextColorSoft||"92, 95, 102"})`};
  }
`;b.button`
  width: ${T(32)};
  height: ${T(32)};
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: 'Nexa-Book', sans-serif;
  
  svg {
    width: ${T(12)};
    height: ${T(12)};
    color: ${({theme:e})=>`rgb(${e.mutedTextColorSoft||"92, 95, 102"})`};
  }
  
  &:hover {
    background: ${({theme:e})=>`rgb(${e.borderColorSoft||"55, 58, 64"})`};
    
    svg {
      color: ${({theme:e})=>`rgb(${e.fontColor||"193, 194, 197"})`};
    }
  }
`;b.span`
  flex: 1;
  text-align: center;
  font-size: ${T(12)};
  color: ${({theme:e})=>`rgb(${e.fontColor||"193, 194, 197"})`};
  font-weight: 500;
  font-family: 'Nexa-Book', sans-serif;
`;b.div`
  width: 100%;
  display: flex;
  gap: ${T(8)};

  > div {
    flex: 1;
  }
`;b.div`
  width: 100%;
  padding: ${T(14)} ${T(16)};
  background-color: ${({theme:e})=>`rgb(${e.surfaceBackground||"37, 38, 43"})`};
  border: ${({theme:e})=>`1px solid rgba(${e.borderColor||"44, 46, 51"}, 1)`};
  border-radius: ${T(8)};
  display: flex;
  flex-direction: column;
  gap: ${T(14)};
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: ${({theme:e})=>`rgb(${e.primaryBackgroundSelected||"55, 58, 64"})`};
    border-color: ${({theme:e})=>`rgb(${e.borderColorSoft||"55, 58, 64"})`};
  }
`;b.div`
  display: flex;
  gap: ${T(8)};
  width: 100%;
  margin-top: ${T(4)};
`;const j4=b.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
`,H4=b.div`
  padding: ${T(14)} ${T(16)};
  border-bottom: ${({theme:e})=>`1px solid rgba(${e.borderColor||"44, 46, 51"}, 1)`};
  font-size: ${T(13)};
  font-weight: 600;
  color: ${({theme:e})=>`rgb(${e.fontColor||"193, 194, 197"})`};
  font-family: 'Nexa-Book', sans-serif;
`,U4=b.div`
  padding: ${T(12)} ${T(16)} ${T(16)};
  border-bottom: ${({theme:e})=>`1px solid rgba(${e.borderColor||"44, 46, 51"}, 1)`};

  &:last-of-type {
    border-bottom: none;
  }
`,W4=b.div`
  font-size: ${T(11)};
  font-weight: 500;
  color: ${({theme:e})=>`rgb(${e.mutedTextColor||"144, 146, 150"})`};
  margin-bottom: ${T(10)};
  font-family: 'Nexa-Book', sans-serif;
`,G4=b.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>`rgb(${e.secondaryBackground||"16, 17, 19"})`};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>`rgb(${e.borderColorSoft||"55, 58, 64"})`};
    border-radius: 4px;
  }
`,Y4=b.div`
  flex-shrink: 0;
  display: flex;
  gap: ${T(8)};
  padding: ${T(16)} ${T(16)} ${T(20)};
  background: ${({theme:e})=>`rgb(${e.surfaceBackgroundAlt||"20, 21, 23"})`};
  border-top: ${({theme:e})=>`1px solid rgba(${e.borderColor||"44, 46, 51"}, 1)`};
`,Z4=Md`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${xn(8,6,12)};
  padding: ${xn(10,8,14)} ${xn(16,12,22)} ${xn(12,10,16)};
  background: ${e=>`rgba(${e.theme.primaryBackground||"20, 20, 20"}, 0.96)`};
  border: ${e=>`1px solid rgb(${e.theme.borderColor||"68, 68, 68"})`};
  border-radius: ${xn(8,6,12)};
  box-shadow: ${T(4)} ${T(8)} ${T(24)} rgba(0, 0, 0, 0.55);
  z-index: 100;
`;b.h2`
  margin: 0;
  padding: 0 ${T(4)};
  font-size: ${T(10)};
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({theme:e})=>`rgb(${e.mutedTextColor||"144, 146, 150"})`};
  text-align: center;
  font-family: 'Nexa-Book', sans-serif;
  line-height: 1.2;
`;b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;b.div`
  ${Z4};
  bottom: ${xn(20,14,36)};
  top: auto;
`;b.div`
  height: 1px;
  margin: ${T(2)} 0;
  background: ${e=>`rgba(${e.theme.borderColorSoft||"85, 85, 85"}, 0.6)`};
`;b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${T(8)};
`;b.button`
  width: ${T(44)};
  height: ${T(44)};
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: ${({active:e,theme:t})=>e?`rgba(${t.accentColor||"66, 140, 255"}, 0.2)`:"rgba(255, 255, 255, 0.05)"};
  border: ${({active:e,theme:t})=>e?`1px solid rgb(${t.accentColor||"66, 140, 255"})`:"1px solid rgba(255, 255, 255, 0.1)"};
  border-radius: ${T(4)};
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: 'Nexa-Book', sans-serif;

  svg {
    width: ${T(21)};
    height: ${T(21)};
    color: ${({active:e,theme:t})=>e?`rgb(${t.accentColor||"66, 140, 255"})`:`rgb(${t.mutedTextColor||"144, 146, 150"})`};
    transition: color 0.15s ease;
  }

  &:hover {
    background-color: ${({active:e,theme:t})=>e?`rgba(${t.accentColor||"66, 140, 255"}, 0.2)`:"rgba(255, 255, 255, 0.1)"};
    border-color: ${({active:e,theme:t})=>e?`rgb(${t.accentColor||"66, 140, 255"})`:"rgba(255, 255, 255, 0.2)"};

    svg {
      color: ${({active:e,theme:t})=>e?`rgb(${t.accentColor||"66, 140, 255"})`:`rgb(${t.fontColor||"193, 194, 197"})`};
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;b.div`
  display: flex;
  align-items: center;
  justify-content: center;

  kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: ${T(28)};
    height: ${T(28)};
    padding: 0 ${T(8)};
    background: ${e=>`rgb(${e.theme.surfaceBackground||"37, 38, 43"})`};
    border: ${e=>`1px solid rgba(${e.theme.borderColorSoft||"55, 58, 64"}, 1)`};
    border-radius: ${T(4)};
    font-size: ${T(12)};
    font-weight: 600;
    color: ${e=>`rgb(${e.theme.accentColor||"66, 140, 255"})`};
    font-family: 'Nexa-Book', sans-serif;
    line-height: 1;
    cursor: default;
  }
`;b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${T(24)};
`;var Q4=!1;function X4(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function K4(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var q4=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!Q4:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(K4(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=X4(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var o;return(o=r.parentNode)==null?void 0:o.removeChild(r)}),this.tags=[],this.ctr=0},e}(),pt="-ms-",Ml="-moz-",we="-webkit-",z2="comm",Rd="rule",zd="decl",J4="@import",L2="@keyframes",e3="@layer",t3=Math.abs,cs=String.fromCharCode,n3=Object.assign;function r3(e,t){return lt(e,0)^45?(((t<<2^lt(e,0))<<2^lt(e,1))<<2^lt(e,2))<<2^lt(e,3):0}function D2(e){return e.trim()}function o3(e,t){return(e=t.exec(e))?e[0]:e}function Ce(e,t,n){return e.replace(t,n)}function bc(e,t){return e.indexOf(t)}function lt(e,t){return e.charCodeAt(t)|0}function Xi(e,t,n){return e.slice(t,n)}function Tn(e){return e.length}function Ld(e){return e.length}function Oa(e,t){return t.push(e),e}function i3(e,t){return e.map(t).join("")}var ds=1,zo=1,F2=0,zt=0,Ue=0,Bo="";function fs(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ds,column:zo,length:a,return:""}}function ei(e,t){return n3(fs("",null,null,"",null,null,0),e,{length:-e.length},t)}function a3(){return Ue}function l3(){return Ue=zt>0?lt(Bo,--zt):0,zo--,Ue===10&&(zo=1,ds--),Ue}function Wt(){return Ue=zt<F2?lt(Bo,zt++):0,zo++,Ue===10&&(zo=1,ds++),Ue}function Rn(){return lt(Bo,zt)}function Qa(){return zt}function oa(e,t){return Xi(Bo,e,t)}function Ki(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function N2(e){return ds=zo=1,F2=Tn(Bo=e),zt=0,[]}function V2(e){return Bo="",e}function Xa(e){return D2(oa(zt-1,wc(e===91?e+2:e===40?e+1:e)))}function s3(e){for(;(Ue=Rn())&&Ue<33;)Wt();return Ki(e)>2||Ki(Ue)>3?"":" "}function u3(e,t){for(;--t&&Wt()&&!(Ue<48||Ue>102||Ue>57&&Ue<65||Ue>70&&Ue<97););return oa(e,Qa()+(t<6&&Rn()==32&&Wt()==32))}function wc(e){for(;Wt();)switch(Ue){case e:return zt;case 34:case 39:e!==34&&e!==39&&wc(Ue);break;case 40:e===41&&wc(e);break;case 92:Wt();break}return zt}function c3(e,t){for(;Wt()&&e+Ue!==47+10;)if(e+Ue===42+42&&Rn()===47)break;return"/*"+oa(t,zt-1)+"*"+cs(e===47?e:Wt())}function d3(e){for(;!Ki(Rn());)Wt();return oa(e,zt)}function f3(e){return V2(Ka("",null,null,null,[""],e=N2(e),0,[0],e))}function Ka(e,t,n,r,o,i,a,l,s){for(var c=0,d=0,p=a,g=0,v=0,x=0,w=1,k=1,h=1,f=0,m="",E=o,A=i,M=r,S=m;k;)switch(x=f,f=Wt()){case 40:if(x!=108&&lt(S,p-1)==58){bc(S+=Ce(Xa(f),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:S+=Xa(f);break;case 9:case 10:case 13:case 32:S+=s3(x);break;case 92:S+=u3(Qa()-1,7);continue;case 47:switch(Rn()){case 42:case 47:Oa(p3(c3(Wt(),Qa()),t,n),s);break;default:S+="/"}break;case 123*w:l[c++]=Tn(S)*h;case 125*w:case 59:case 0:switch(f){case 0:case 125:k=0;case 59+d:h==-1&&(S=Ce(S,/\f/g,"")),v>0&&Tn(S)-p&&Oa(v>32?Gp(S+";",r,n,p-1):Gp(Ce(S," ","")+";",r,n,p-2),s);break;case 59:S+=";";default:if(Oa(M=Wp(S,t,n,c,d,o,l,m,E=[],A=[],p),i),f===123)if(d===0)Ka(S,t,M,M,E,i,p,l,A);else switch(g===99&&lt(S,3)===110?100:g){case 100:case 108:case 109:case 115:Ka(e,M,M,r&&Oa(Wp(e,M,M,0,0,o,l,m,o,E=[],p),A),o,A,p,l,r?E:A);break;default:Ka(S,M,M,M,[""],A,0,l,A)}}c=d=v=0,w=h=1,m=S="",p=a;break;case 58:p=1+Tn(S),v=x;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&l3()==125)continue}switch(S+=cs(f),f*w){case 38:h=d>0?1:(S+="\f",-1);break;case 44:l[c++]=(Tn(S)-1)*h,h=1;break;case 64:Rn()===45&&(S+=Xa(Wt())),g=Rn(),d=p=Tn(m=S+=d3(Qa())),f++;break;case 45:x===45&&Tn(S)==2&&(w=0)}}return i}function Wp(e,t,n,r,o,i,a,l,s,c,d){for(var p=o-1,g=o===0?i:[""],v=Ld(g),x=0,w=0,k=0;x<r;++x)for(var h=0,f=Xi(e,p+1,p=t3(w=a[x])),m=e;h<v;++h)(m=D2(w>0?g[h]+" "+f:Ce(f,/&\f/g,g[h])))&&(s[k++]=m);return fs(e,t,n,o===0?Rd:l,s,c,d)}function p3(e,t,n){return fs(e,t,n,z2,cs(a3()),Xi(e,2,-2),0)}function Gp(e,t,n,r){return fs(e,t,n,zd,Xi(e,0,r),Xi(e,r+1,-1),r)}function ko(e,t){for(var n="",r=Ld(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function h3(e,t,n,r){switch(e.type){case e3:if(e.children.length)break;case J4:case zd:return e.return=e.return||e.value;case z2:return"";case L2:return e.return=e.value+"{"+ko(e.children,r)+"}";case Rd:e.value=e.props.join(",")}return Tn(n=ko(e.children,r))?e.return=e.value+"{"+n+"}":""}function m3(e){var t=Ld(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function g3(e){return function(t){t.root||(t=t.return)&&e(t)}}var x3=function(t,n,r){for(var o=0,i=0;o=i,i=Rn(),o===38&&i===12&&(n[r]=1),!Ki(i);)Wt();return oa(t,zt)},v3=function(t,n){var r=-1,o=44;do switch(Ki(o)){case 0:o===38&&Rn()===12&&(n[r]=1),t[r]+=x3(zt-1,n,r);break;case 2:t[r]+=Xa(o);break;case 4:if(o===44){t[++r]=Rn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=cs(o)}while(o=Wt());return t},y3=function(t,n){return V2(v3(N2(t),n))},Yp=new WeakMap,b3=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Yp.get(r))&&!o){Yp.set(t,!0);for(var i=[],a=y3(n,i),l=r.props,s=0,c=0;s<a.length;s++)for(var d=0;d<l.length;d++,c++)t.props[c]=i[s]?a[s].replace(/&\f/g,l[d]):l[d]+" "+a[s]}}},w3=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function B2(e,t){switch(r3(e,t)){case 5103:return we+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return we+e+Ml+e+pt+e+e;case 6828:case 4268:return we+e+pt+e+e;case 6165:return we+e+pt+"flex-"+e+e;case 5187:return we+e+Ce(e,/(\w+).+(:[^]+)/,we+"box-$1$2"+pt+"flex-$1$2")+e;case 5443:return we+e+pt+"flex-item-"+Ce(e,/flex-|-self/,"")+e;case 4675:return we+e+pt+"flex-line-pack"+Ce(e,/align-content|flex-|-self/,"")+e;case 5548:return we+e+pt+Ce(e,"shrink","negative")+e;case 5292:return we+e+pt+Ce(e,"basis","preferred-size")+e;case 6060:return we+"box-"+Ce(e,"-grow","")+we+e+pt+Ce(e,"grow","positive")+e;case 4554:return we+Ce(e,/([^-])(transform)/g,"$1"+we+"$2")+e;case 6187:return Ce(Ce(Ce(e,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),e,"")+e;case 5495:case 3959:return Ce(e,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return Ce(Ce(e,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+pt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+e+e;case 4095:case 3583:case 4068:case 2532:return Ce(e,/(.+)-inline(.+)/,we+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tn(e)-1-t>6)switch(lt(e,t+1)){case 109:if(lt(e,t+4)!==45)break;case 102:return Ce(e,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+Ml+(lt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~bc(e,"stretch")?B2(Ce(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(lt(e,t+1)!==115)break;case 6444:switch(lt(e,Tn(e)-3-(~bc(e,"!important")&&10))){case 107:return Ce(e,":",":"+we)+e;case 101:return Ce(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+we+(lt(e,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+pt+"$2box$3")+e}break;case 5936:switch(lt(e,t+11)){case 114:return we+e+pt+Ce(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return we+e+pt+Ce(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return we+e+pt+Ce(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return we+e+pt+e+e}return e}var C3=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case zd:t.return=B2(t.value,t.length);break;case L2:return ko([ei(t,{value:Ce(t.value,"@","@"+we)})],o);case Rd:if(t.length)return i3(t.props,function(i){switch(o3(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ko([ei(t,{props:[Ce(i,/:(read-\w+)/,":"+Ml+"$1")]})],o);case"::placeholder":return ko([ei(t,{props:[Ce(i,/:(plac\w+)/,":"+we+"input-$1")]}),ei(t,{props:[Ce(i,/:(plac\w+)/,":"+Ml+"$1")]}),ei(t,{props:[Ce(i,/:(plac\w+)/,pt+"input-$1")]})],o)}return""})}},k3=[C3],S3=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(w){var k=w.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var o=t.stylisPlugins||k3,i={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(w){for(var k=w.getAttribute("data-emotion").split(" "),h=1;h<k.length;h++)i[k[h]]=!0;l.push(w)});var s,c=[b3,w3];{var d,p=[h3,g3(function(w){d.insert(w)})],g=m3(c.concat(o,p)),v=function(k){return ko(f3(k),g)};s=function(k,h,f,m){d=f,v(k?k+"{"+h.styles+"}":h.styles),m&&(x.inserted[h.name]=!0)}}var x={key:n,sheet:new q4({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return x.sheet.hydrate(l),x},E3=!0;function j2(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(r+=o+" ")}),r}var Dd=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||E3===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},H2=function(t,n,r){Dd(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function $3(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var A3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},O3=!1,T3=/[A-Z]|^ms/g,M3=/_EMO_([^_]+?)_([^]*?)_EMO_/g,U2=function(t){return t.charCodeAt(1)===45},Zp=function(t){return t!=null&&typeof t!="boolean"},iu=Yh(function(e){return U2(e)?e:e.replace(T3,"-$&").toLowerCase()}),Qp=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(M3,function(r,o,i){return Mn={name:o,styles:i,next:Mn},o})}return A3[t]!==1&&!U2(t)&&typeof n=="number"&&n!==0?n+"px":n},P3="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function qi(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return Mn={name:o.name,styles:o.styles,next:Mn},o.name;var i=n;if(i.styles!==void 0){var a=i.next;if(a!==void 0)for(;a!==void 0;)Mn={name:a.name,styles:a.styles,next:Mn},a=a.next;var l=i.styles+";";return l}return _3(e,t,n)}case"function":{if(e!==void 0){var s=Mn,c=n(e);return Mn=s,qi(e,t,c)}break}}var d=n;if(t==null)return d;var p=t[d];return p!==void 0?p:d}function _3(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=qi(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object"){var l=a;t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":Zp(l)&&(r+=iu(i)+":"+Qp(i,l)+";")}else{if(i==="NO_COMPONENT_SELECTOR"&&O3)throw new Error(P3);if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)Zp(a[s])&&(r+=iu(i)+":"+Qp(i,a[s])+";");else{var c=qi(e,t,a);switch(i){case"animation":case"animationName":{r+=iu(i)+":"+c+";";break}default:r+=i+"{"+c+"}"}}}}return r}var Xp=/label:\s*([^\s;{]+)\s*(;|$)/g,Mn;function Fd(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,o="";Mn=void 0;var i=e[0];if(i==null||i.raw===void 0)r=!1,o+=qi(n,t,i);else{var a=i;o+=a[0]}for(var l=1;l<e.length;l++)if(o+=qi(n,t,e[l]),r){var s=i;o+=s[l]}Xp.lastIndex=0;for(var c="",d;(d=Xp.exec(o))!==null;)c+="-"+d[1];var p=$3(o)+c;return{name:p,styles:o,next:Mn}}var I3=function(t){return t()},R3=sf["useInsertionEffect"]?sf["useInsertionEffect"]:!1,W2=R3||I3,Cc=!1,G2=y.exports.createContext(typeof HTMLElement!="undefined"?S3({key:"css"}):null);G2.Provider;var Y2=function(t){return y.exports.forwardRef(function(n,r){var o=y.exports.useContext(G2);return t(n,o,r)})},Z2=y.exports.createContext({}),Nd={}.hasOwnProperty,kc="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",z3=function(t,n){var r={};for(var o in n)Nd.call(n,o)&&(r[o]=n[o]);return r[kc]=t,r},L3=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Dd(n,r,o),W2(function(){return H2(n,r,o)}),null},D3=Y2(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[kc],i=[r],a="";typeof e.className=="string"?a=j2(t.registered,i,e.className):e.className!=null&&(a=e.className+" ");var l=Fd(i,void 0,y.exports.useContext(Z2));a+=t.key+"-"+l.name;var s={};for(var c in e)Nd.call(e,c)&&c!=="css"&&c!==kc&&!Cc&&(s[c]=e[c]);return s.className=a,n&&(s.ref=n),y.exports.createElement(y.exports.Fragment,null,y.exports.createElement(L3,{cache:t,serialized:l,isStringTag:typeof o=="string"}),y.exports.createElement(o,s))}),F3=D3,re=function(t,n){var r=arguments;if(n==null||!Nd.call(n,"css"))return y.exports.createElement.apply(void 0,r);var o=r.length,i=new Array(o);i[0]=F3,i[1]=z3(t,n);for(var a=2;a<o;a++)i[a]=r[a];return y.exports.createElement.apply(null,i)};(function(e){var t;(function(n){})(t||(t=e.JSX||(e.JSX={})))})(re||(re={}));function Vd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Fd(t)}function N3(){var e=Vd.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var V3=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var a=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))a=e(i);else{a="";for(var l in i)i[l]&&l&&(a&&(a+=" "),a+=l)}break}default:a=i}a&&(o&&(o+=" "),o+=a)}}return o};function B3(e,t,n){var r=[],o=j2(e,r,n);return r.length<2?n:o+t(r)}var j3=function(t){var n=t.cache,r=t.serializedArr;return W2(function(){for(var o=0;o<r.length;o++)H2(n,r[o],!1)}),null},H3=Y2(function(e,t){var n=!1,r=[],o=function(){if(n&&Cc)throw new Error("css can only be used during render");for(var c=arguments.length,d=new Array(c),p=0;p<c;p++)d[p]=arguments[p];var g=Fd(d,t.registered);return r.push(g),Dd(t,g,!1),t.key+"-"+g.name},i=function(){if(n&&Cc)throw new Error("cx can only be used during render");for(var c=arguments.length,d=new Array(c),p=0;p<c;p++)d[p]=arguments[p];return B3(t.registered,o,V3(d))},a={css:o,cx:i,theme:y.exports.useContext(Z2)},l=e.children(a);return n=!0,y.exports.createElement(y.exports.Fragment,null,y.exports.createElement(j3,{cache:t,serializedArr:r}),l)});function U3(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function jo(e,t){if(e==null)return{};var n,r,o=Cn(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Lo(e){return Lo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Lo(e)}var Q2={},X2={exports:{}},W3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",G3=W3,Y3=G3;function K2(){}function q2(){}q2.resetWarningCache=K2;var Z3=function(){function e(r,o,i,a,l,s){if(s!==Y3){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:q2,resetWarningCache:K2};return n.PropTypes=n,n};X2.exports=Z3();Object.defineProperty(Q2,"__esModule",{value:!0});var au=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kp=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),J2=y.exports,ti=em(J2),Q3=X2.exports,qe=em(Q3);function em(e){return e&&e.__esModule?e:{default:e}}function X3(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n}function K3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q3(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function J3(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var qp={position:"absolute",top:0,left:0,visibility:"hidden",height:0,overflow:"scroll",whiteSpace:"pre"},eb=["extraWidth","injectStyles","inputClassName","inputRef","inputStyle","minWidth","onAutosize","placeholderIsMinWidth"],tb=function(t){return eb.forEach(function(n){return delete t[n]}),t},Jp=function(t,n){n.style.fontSize=t.fontSize,n.style.fontFamily=t.fontFamily,n.style.fontWeight=t.fontWeight,n.style.fontStyle=t.fontStyle,n.style.letterSpacing=t.letterSpacing,n.style.textTransform=t.textTransform},tm=typeof window!="undefined"&&window.navigator?/MSIE |Trident\/|Edge\//.test(window.navigator.userAgent):!1,e0=function(){return tm?"_"+Math.random().toString(36).substr(2,12):void 0},Bd=function(e){J3(t,e),Kp(t,null,[{key:"getDerivedStateFromProps",value:function(r,o){var i=r.id;return i!==o.prevId?{inputId:i||e0(),prevId:i}:null}}]);function t(n){K3(this,t);var r=q3(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return r.inputRef=function(o){r.input=o,typeof r.props.inputRef=="function"&&r.props.inputRef(o)},r.placeHolderSizerRef=function(o){r.placeHolderSizer=o},r.sizerRef=function(o){r.sizer=o},r.state={inputWidth:n.minWidth,inputId:n.id||e0(),prevId:n.id},r}return Kp(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.copyInputStyles(),this.updateInputWidth()}},{key:"componentDidUpdate",value:function(r,o){o.inputWidth!==this.state.inputWidth&&typeof this.props.onAutosize=="function"&&this.props.onAutosize(this.state.inputWidth),this.updateInputWidth()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"copyInputStyles",value:function(){if(!(!this.mounted||!window.getComputedStyle)){var r=this.input&&window.getComputedStyle(this.input);!r||(Jp(r,this.sizer),this.placeHolderSizer&&Jp(r,this.placeHolderSizer))}}},{key:"updateInputWidth",value:function(){if(!(!this.mounted||!this.sizer||typeof this.sizer.scrollWidth=="undefined")){var r=void 0;this.props.placeholder&&(!this.props.value||this.props.value&&this.props.placeholderIsMinWidth)?r=Math.max(this.sizer.scrollWidth,this.placeHolderSizer.scrollWidth)+2:r=this.sizer.scrollWidth+2;var o=this.props.type==="number"&&this.props.extraWidth===void 0?16:parseInt(this.props.extraWidth)||0;r+=o,r<this.props.minWidth&&(r=this.props.minWidth),r!==this.state.inputWidth&&this.setState({inputWidth:r})}}},{key:"getInput",value:function(){return this.input}},{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"select",value:function(){this.input.select()}},{key:"renderStyles",value:function(){var r=this.props.injectStyles;return tm&&r?ti.default.createElement("style",{dangerouslySetInnerHTML:{__html:"input#"+this.state.inputId+"::-ms-clear {display: none;}"}}):null}},{key:"render",value:function(){var r=[this.props.defaultValue,this.props.value,""].reduce(function(l,s){return l!=null?l:s}),o=au({},this.props.style);o.display||(o.display="inline-block");var i=au({boxSizing:"content-box",width:this.state.inputWidth+"px"},this.props.inputStyle),a=X3(this.props,[]);return tb(a),a.className=this.props.inputClassName,a.id=this.state.inputId,a.style=i,ti.default.createElement("div",{className:this.props.className,style:o},this.renderStyles(),ti.default.createElement("input",au({},a,{ref:this.inputRef})),ti.default.createElement("div",{ref:this.sizerRef,style:qp},r),this.props.placeholder?ti.default.createElement("div",{ref:this.placeHolderSizerRef,style:qp},this.props.placeholder):null)}}]),t}(J2.Component);Bd.propTypes={className:qe.default.string,defaultValue:qe.default.any,extraWidth:qe.default.oneOfType([qe.default.number,qe.default.string]),id:qe.default.string,injectStyles:qe.default.bool,inputClassName:qe.default.string,inputRef:qe.default.func,inputStyle:qe.default.object,minWidth:qe.default.oneOfType([qe.default.number,qe.default.string]),onAutosize:qe.default.func,onChange:qe.default.func,placeholder:qe.default.string,placeholderIsMinWidth:qe.default.bool,style:qe.default.object,value:qe.default.any};Bd.defaultProps={minWidth:1,injectStyles:!0};var nb=Q2.default=Bd;function ps(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rb(e,t){if(Lo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Lo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nm(e){var t=rb(e,"string");return Lo(t)=="symbol"?t:t+""}function t0(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,nm(r.key),r)}}function hs(e,t,n){return t&&t0(e.prototype,t),n&&t0(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Sc(e,t){return Sc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Sc(e,t)}function ms(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Sc(e,t)}function Fn(e,t,n){return(t=nm(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ob(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function st(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?n0(Object(n),!0).forEach(function(r){ob(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):n0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Pl(e){return Pl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Pl(e)}function ib(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function ab(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lb(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:ab(e)}function gs(e){var t=ib();return function(){var r=Pl(e),o;if(t){var i=Pl(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return lb(this,o)}}var _l=function(){};function sb(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function ub(e,t,n){var r=[n];if(t&&e)for(var o in t)t.hasOwnProperty(o)&&t[o]&&r.push("".concat(sb(e,o)));return r.filter(function(i){return i}).map(function(i){return String(i).trim()}).join(" ")}var r0=function(t){return Array.isArray(t)?t.filter(Boolean):Lo(t)==="object"&&t!==null?[t]:[]},rm=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=jo(t,["className","clearValue","cx","getStyles","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"]);return st({},n)};function jd(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function om(e){return jd(e)?window.pageYOffset:e.scrollTop}function Il(e,t){if(jd(e)){window.scrollTo(0,t);return}e.scrollTop=t}function cb(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/,o=document.documentElement;if(t.position==="fixed")return o;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return o}function db(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Ta(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:_l,o=om(e),i=t-o,a=10,l=0;function s(){l+=a;var c=db(l,o,i,n);Il(e,c),l<n?window.requestAnimationFrame(s):r(e)}s()}function fb(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),o=t.offsetHeight/3;r.bottom+o>n.bottom?Il(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+o,e.scrollHeight)):r.top-o<n.top&&Il(e,Math.max(t.offsetTop-o,0))}function pb(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function o0(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function hb(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var im=!1,mb={get passive(){return im=!0}},Ma=typeof window!="undefined"?window:{};Ma.addEventListener&&Ma.removeEventListener&&(Ma.addEventListener("p",_l,mb),Ma.removeEventListener("p",_l,!1));var gb=im;function xb(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,o=e.placement,i=e.shouldScroll,a=e.isFixedPosition,l=e.theme,s=l.spacing,c=cb(n),d={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return d;var p=c.getBoundingClientRect(),g=p.height,v=n.getBoundingClientRect(),x=v.bottom,w=v.height,k=v.top,h=n.offsetParent.getBoundingClientRect(),f=h.top,m=window.innerHeight,E=om(c),A=parseInt(getComputedStyle(n).marginBottom,10),M=parseInt(getComputedStyle(n).marginTop,10),S=f-M,_=m-k,P=S+E,R=g-E-k,D=x-m+E+A,U=E+k-M,Y=160;switch(o){case"auto":case"bottom":if(_>=w)return{placement:"bottom",maxHeight:t};if(R>=w&&!a)return i&&Ta(c,D,Y),{placement:"bottom",maxHeight:t};if(!a&&R>=r||a&&_>=r){i&&Ta(c,D,Y);var j=a?_-A:R-A;return{placement:"bottom",maxHeight:j}}if(o==="auto"||a){var K=t,F=a?S:P;return F>=r&&(K=Math.min(F-A-s.controlHeight,t)),{placement:"top",maxHeight:K}}if(o==="bottom")return i&&Il(c,D),{placement:"bottom",maxHeight:t};break;case"top":if(S>=w)return{placement:"top",maxHeight:t};if(P>=w&&!a)return i&&Ta(c,U,Y),{placement:"top",maxHeight:t};if(!a&&P>=r||a&&S>=r){var J=t;return(!a&&P>=r||a&&S>=r)&&(J=a?S-M:P-M),i&&Ta(c,U,Y),{placement:"top",maxHeight:J}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(o,'".'))}return d}function vb(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Ec=function(t){return t==="auto"?"bottom":t},yb=function(t){var n,r=t.placement,o=t.theme,i=o.borderRadius,a=o.spacing,l=o.colors;return n={label:"menu"},Fn(n,vb(r),"100%"),Fn(n,"backgroundColor",l.neutral0),Fn(n,"borderRadius",i),Fn(n,"boxShadow","0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"),Fn(n,"marginBottom",a.menuGutter),Fn(n,"marginTop",a.menuGutter),Fn(n,"position","absolute"),Fn(n,"width","100%"),Fn(n,"zIndex",1),n},am=y.exports.createContext({getPortalPlacement:null}),lm=function(e){ms(n,e);var t=gs(n);function n(){var r;ps(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=t.call.apply(t,[this].concat(i)),r.state={maxHeight:r.props.maxMenuHeight,placement:null},r.getPlacement=function(l){var s=r.props,c=s.minMenuHeight,d=s.maxMenuHeight,p=s.menuPlacement,g=s.menuPosition,v=s.menuShouldScrollIntoView,x=s.theme;if(!!l){var w=g==="fixed",k=v&&!w,h=xb({maxHeight:d,menuEl:l,minHeight:c,placement:p,shouldScroll:k,isFixedPosition:w,theme:x}),f=r.context.getPortalPlacement;f&&f(h),r.setState(h)}},r.getUpdatedProps=function(){var l=r.props.menuPlacement,s=r.state.placement||Ec(l);return st(st({},r.props),{},{placement:s,maxHeight:r.state.maxHeight})},r}return hs(n,[{key:"render",value:function(){var o=this.props.children;return o({ref:this.getPlacement,placerProps:this.getUpdatedProps()})}}]),n}(y.exports.Component);lm.contextType=am;var bb=function(t){var n=t.children,r=t.className,o=t.cx,i=t.getStyles,a=t.innerRef,l=t.innerProps;return re("div",ne({css:i("menu",t),className:o({menu:!0},r),ref:a},l),n)},wb=function(t){var n=t.maxHeight,r=t.theme.spacing.baseUnit;return{maxHeight:n,overflowY:"auto",paddingBottom:r,paddingTop:r,position:"relative",WebkitOverflowScrolling:"touch"}},Cb=function(t){var n=t.children,r=t.className,o=t.cx,i=t.getStyles,a=t.innerProps,l=t.innerRef,s=t.isMulti;return re("div",ne({css:i("menuList",t),className:o({"menu-list":!0,"menu-list--is-multi":s},r),ref:l},a),n)},sm=function(t){var n=t.theme,r=n.spacing.baseUnit,o=n.colors;return{color:o.neutral40,padding:"".concat(r*2,"px ").concat(r*3,"px"),textAlign:"center"}},kb=sm,Sb=sm,um=function(t){var n=t.children,r=t.className,o=t.cx,i=t.getStyles,a=t.innerProps;return re("div",ne({css:i("noOptionsMessage",t),className:o({"menu-notice":!0,"menu-notice--no-options":!0},r)},a),n)};um.defaultProps={children:"No options"};var cm=function(t){var n=t.children,r=t.className,o=t.cx,i=t.getStyles,a=t.innerProps;return re("div",ne({css:i("loadingMessage",t),className:o({"menu-notice":!0,"menu-notice--loading":!0},r)},a),n)};cm.defaultProps={children:"Loading..."};var Eb=function(t){var n=t.rect,r=t.offset,o=t.position;return{left:n.left,position:o,top:r,width:n.width,zIndex:1}},$b=function(e){ms(n,e);var t=gs(n);function n(){var r;ps(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=t.call.apply(t,[this].concat(i)),r.state={placement:null},r.getPortalPlacement=function(l){var s=l.placement,c=Ec(r.props.menuPlacement);s!==c&&r.setState({placement:s})},r}return hs(n,[{key:"render",value:function(){var o=this.props,i=o.appendTo,a=o.children,l=o.className,s=o.controlElement,c=o.cx,d=o.innerProps,p=o.menuPlacement,g=o.menuPosition,v=o.getStyles,x=g==="fixed";if(!i&&!x||!s)return null;var w=this.state.placement||Ec(p),k=pb(s),h=x?0:window.pageYOffset,f=k[w]+h,m={offset:f,position:g,rect:k},E=re("div",ne({css:v("menuPortal",m),className:c({"menu-portal":!0},l)},d),a);return re(am.Provider,{value:{getPortalPlacement:this.getPortalPlacement}},i?_c.exports.createPortal(E,i):E)}}]),n}(y.exports.Component),Ab=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":null,pointerEvents:n?"none":null,position:"relative"}},Ob=function(t){var n=t.children,r=t.className,o=t.cx,i=t.getStyles,a=t.innerProps,l=t.isDisabled,s=t.isRtl;return re("div",ne({css:i("container",t),className:o({"--is-disabled":l,"--is-rtl":s},r)},a),n)},Tb=function(t){var n=t.theme.spacing;return{alignItems:"center",display:"flex",flex:1,flexWrap:"wrap",padding:"".concat(n.baseUnit/2,"px ").concat(n.baseUnit*2,"px"),WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"}},Mb=function(t){var n=t.children,r=t.className,o=t.cx,i=t.innerProps,a=t.isMulti,l=t.getStyles,s=t.hasValue;return re("div",ne({css:l("valueContainer",t),className:o({"value-container":!0,"value-container--is-multi":a,"value-container--has-value":s},r)},i),n)},Pb=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},_b=function(t){var n=t.children,r=t.className,o=t.cx,i=t.innerProps,a=t.getStyles;return re("div",ne({css:a("indicatorsContainer",t),className:o({indicators:!0},r)},i),n)},i0,Ib={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},dm=function(t){var n=t.size,r=jo(t,["size"]);return re("svg",ne({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Ib},r))},Hd=function(t){return re(dm,ne({size:20},t),re("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},fm=function(t){return re(dm,ne({size:20},t),re("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},pm=function(t){var n=t.isFocused,r=t.theme,o=r.spacing.baseUnit,i=r.colors;return{label:"indicatorContainer",color:n?i.neutral60:i.neutral20,display:"flex",padding:o*2,transition:"color 150ms",":hover":{color:n?i.neutral80:i.neutral40}}},Rb=pm,zb=function(t){var n=t.children,r=t.className,o=t.cx,i=t.getStyles,a=t.innerProps;return re("div",ne({css:i("dropdownIndicator",t),className:o({indicator:!0,"dropdown-indicator":!0},r)},a),n||re(fm,null))},Lb=pm,Db=function(t){var n=t.children,r=t.className,o=t.cx,i=t.getStyles,a=t.innerProps;return re("div",ne({css:i("clearIndicator",t),className:o({indicator:!0,"clear-indicator":!0},r)},a),n||re(Hd,null))},Fb=function(t){var n=t.isDisabled,r=t.theme,o=r.spacing.baseUnit,i=r.colors;return{label:"indicatorSeparator",alignSelf:"stretch",backgroundColor:n?i.neutral10:i.neutral20,marginBottom:o*2,marginTop:o*2,width:1}},Nb=function(t){var n=t.className,r=t.cx,o=t.getStyles,i=t.innerProps;return re("span",ne({},i,{css:o("indicatorSeparator",t),className:r({"indicator-separator":!0},n)}))},Vb=N3(i0||(i0=U3([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Bb=function(t){var n=t.isFocused,r=t.size,o=t.theme,i=o.colors,a=o.spacing.baseUnit;return{label:"loadingIndicator",color:n?i.neutral60:i.neutral20,display:"flex",padding:a*2,transition:"color 150ms",alignSelf:"center",fontSize:r,lineHeight:1,marginRight:r,textAlign:"center",verticalAlign:"middle"}},lu=function(t){var n=t.delay,r=t.offset;return re("span",{css:Vd({animation:"".concat(Vb," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":null,height:"1em",verticalAlign:"top",width:"1em"},"","")})},hm=function(t){var n=t.className,r=t.cx,o=t.getStyles,i=t.innerProps,a=t.isRtl;return re("div",ne({css:o("loadingIndicator",t),className:r({indicator:!0,"loading-indicator":!0},n)},i),re(lu,{delay:0,offset:a}),re(lu,{delay:160,offset:!0}),re(lu,{delay:320,offset:!a}))};hm.defaultProps={size:4};var jb=function(t){var n=t.isDisabled,r=t.isFocused,o=t.theme,i=o.colors,a=o.borderRadius,l=o.spacing;return{label:"control",alignItems:"center",backgroundColor:n?i.neutral5:i.neutral0,borderColor:n?i.neutral10:r?i.primary:i.neutral20,borderRadius:a,borderStyle:"solid",borderWidth:1,boxShadow:r?"0 0 0 1px ".concat(i.primary):null,cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:l.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms","&:hover":{borderColor:r?i.primary:i.neutral30}}},Hb=function(t){var n=t.children,r=t.cx,o=t.getStyles,i=t.className,a=t.isDisabled,l=t.isFocused,s=t.innerRef,c=t.innerProps,d=t.menuIsOpen;return re("div",ne({ref:s,css:o("control",t),className:r({control:!0,"control--is-disabled":a,"control--is-focused":l,"control--menu-is-open":d},i)},c),n)},Ub=function(t){var n=t.theme.spacing;return{paddingBottom:n.baseUnit*2,paddingTop:n.baseUnit*2}},Wb=function(t){var n=t.children,r=t.className,o=t.cx,i=t.getStyles,a=t.Heading,l=t.headingProps,s=t.innerProps,c=t.label,d=t.theme,p=t.selectProps;return re("div",ne({css:i("group",t),className:o({group:!0},r)},s),re(a,ne({},l,{selectProps:p,theme:d,getStyles:i,cx:o}),c),re("div",null,n))},Gb=function(t){var n=t.theme.spacing;return{label:"group",color:"#999",cursor:"default",display:"block",fontSize:"75%",fontWeight:"500",marginBottom:"0.25em",paddingLeft:n.baseUnit*3,paddingRight:n.baseUnit*3,textTransform:"uppercase"}},Yb=function(t){var n=t.getStyles,r=t.cx,o=t.className,i=rm(t);i.data;var a=jo(i,["data"]);return re("div",ne({css:n("groupHeading",t),className:r({"group-heading":!0},o)},a))},Zb=function(t){var n=t.isDisabled,r=t.theme,o=r.spacing,i=r.colors;return{margin:o.baseUnit/2,paddingBottom:o.baseUnit/2,paddingTop:o.baseUnit/2,visibility:n?"hidden":"visible",color:i.neutral80}},Qb=function(t){return{label:"input",background:0,border:0,fontSize:"inherit",opacity:t?0:1,outline:0,padding:0,color:"inherit"}},Xb=function(t){var n=t.className,r=t.cx,o=t.getStyles,i=rm(t),a=i.innerRef,l=i.isDisabled,s=i.isHidden,c=jo(i,["innerRef","isDisabled","isHidden"]);return re("div",{css:o("input",t)},re(nb,ne({className:r({input:!0},n),inputRef:a,inputStyle:Qb(s),disabled:l},c)))},Kb=function(t){var n=t.theme,r=n.spacing,o=n.borderRadius,i=n.colors;return{label:"multiValue",backgroundColor:i.neutral10,borderRadius:o/2,display:"flex",margin:r.baseUnit/2,minWidth:0}},qb=function(t){var n=t.theme,r=n.borderRadius,o=n.colors,i=t.cropWithEllipsis;return{borderRadius:r/2,color:o.neutral80,fontSize:"85%",overflow:"hidden",padding:3,paddingLeft:6,textOverflow:i?"ellipsis":null,whiteSpace:"nowrap"}},Jb=function(t){var n=t.theme,r=n.spacing,o=n.borderRadius,i=n.colors,a=t.isFocused;return{alignItems:"center",borderRadius:o/2,backgroundColor:a&&i.dangerLight,display:"flex",paddingLeft:r.baseUnit,paddingRight:r.baseUnit,":hover":{backgroundColor:i.dangerLight,color:i.danger}}},mm=function(t){var n=t.children,r=t.innerProps;return re("div",r,n)},e6=mm,t6=mm;function n6(e){var t=e.children,n=e.innerProps;return re("div",n,t||re(Hd,{size:14}))}var gm=function(t){var n=t.children,r=t.className,o=t.components,i=t.cx,a=t.data,l=t.getStyles,s=t.innerProps,c=t.isDisabled,d=t.removeProps,p=t.selectProps,g=o.Container,v=o.Label,x=o.Remove;return re(H3,null,function(w){var k=w.css,h=w.cx;return re(g,{data:a,innerProps:st({className:h(k(l("multiValue",t)),i({"multi-value":!0,"multi-value--is-disabled":c},r))},s),selectProps:p},re(v,{data:a,innerProps:{className:h(k(l("multiValueLabel",t)),i({"multi-value__label":!0},r))},selectProps:p},n),re(x,{data:a,innerProps:st({className:h(k(l("multiValueRemove",t)),i({"multi-value__remove":!0},r))},d),selectProps:p}))})};gm.defaultProps={cropWithEllipsis:!0};var r6=function(t){var n=t.isDisabled,r=t.isFocused,o=t.isSelected,i=t.theme,a=i.spacing,l=i.colors;return{label:"option",backgroundColor:o?l.primary:r?l.primary25:"transparent",color:n?l.neutral20:o?l.neutral0:"inherit",cursor:"default",display:"block",fontSize:"inherit",padding:"".concat(a.baseUnit*2,"px ").concat(a.baseUnit*3,"px"),width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",":active":{backgroundColor:!n&&(o?l.primary:l.primary50)}}},o6=function(t){var n=t.children,r=t.className,o=t.cx,i=t.getStyles,a=t.isDisabled,l=t.isFocused,s=t.isSelected,c=t.innerRef,d=t.innerProps;return re("div",ne({css:i("option",t),className:o({option:!0,"option--is-disabled":a,"option--is-focused":l,"option--is-selected":s},r),ref:c},d),n)},i6=function(t){var n=t.theme,r=n.spacing,o=n.colors;return{label:"placeholder",color:o.neutral50,marginLeft:r.baseUnit/2,marginRight:r.baseUnit/2,position:"absolute",top:"50%",transform:"translateY(-50%)"}},a6=function(t){var n=t.children,r=t.className,o=t.cx,i=t.getStyles,a=t.innerProps;return re("div",ne({css:i("placeholder",t),className:o({placeholder:!0},r)},a),n)},l6=function(t){var n=t.isDisabled,r=t.theme,o=r.spacing,i=r.colors;return{label:"singleValue",color:n?i.neutral40:i.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2,maxWidth:"calc(100% - ".concat(o.baseUnit*2,"px)"),overflow:"hidden",position:"absolute",textOverflow:"ellipsis",whiteSpace:"nowrap",top:"50%",transform:"translateY(-50%)"}},s6=function(t){var n=t.children,r=t.className,o=t.cx,i=t.getStyles,a=t.isDisabled,l=t.innerProps;return re("div",ne({css:i("singleValue",t),className:o({"single-value":!0,"single-value--is-disabled":a},r)},l),n)},u6={ClearIndicator:Db,Control:Hb,DropdownIndicator:zb,DownChevron:fm,CrossIcon:Hd,Group:Wb,GroupHeading:Yb,IndicatorsContainer:_b,IndicatorSeparator:Nb,Input:Xb,LoadingIndicator:hm,Menu:bb,MenuList:Cb,MenuPortal:$b,LoadingMessage:cm,NoOptionsMessage:um,MultiValue:gm,MultiValueContainer:e6,MultiValueLabel:t6,MultiValueRemove:n6,Option:o6,Placeholder:a6,SelectContainer:Ob,SingleValue:s6,ValueContainer:Mb},c6=function(t){return st(st({},u6),t.components)};function $c(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function d6(e){if(Array.isArray(e))return $c(e)}function f6(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function p6(e,t){if(e){if(typeof e=="string")return $c(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$c(e,t):void 0}}function h6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xm(e){return d6(e)||f6(e)||p6(e)||h6()}var a0=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function m6(e,t){return!!(e===t||a0(e)&&a0(t))}function g6(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!m6(e[n],t[n]))return!1;return!0}function x6(e,t){t===void 0&&(t=g6);var n,r=[],o,i=!1;function a(){for(var l=[],s=0;s<arguments.length;s++)l[s]=arguments[s];return i&&n===this&&t(l,r)||(o=e.apply(this,l),i=!0,n=this,r=l),o}return a}var v6={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},y6=function(t){return re("span",ne({css:v6},t))},b6={guidance:function(t){var n=t.isSearchable,r=t.isMulti,o=t.isDisabled,i=t.tabSelectsValue,a=t.context;switch(a){case"menu":return"Use Up and Down to choose options".concat(o?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,o=r===void 0?"":r,i=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(o,", deselected.");case"select-option":return i?"option ".concat(o," is disabled. Select another option."):"option ".concat(o,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,o=r===void 0?{}:r,i=t.options,a=t.label,l=a===void 0?"":a,s=t.selectValue,c=t.isDisabled,d=t.isSelected,p=function(w,k){return w&&w.length?"".concat(w.indexOf(k)+1," of ").concat(w.length):""};if(n==="value"&&s)return"value ".concat(l," focused, ").concat(p(s,o),".");if(n==="menu"){var g=c?" disabled":"",v="".concat(d?"selected":"focused").concat(g);return"option ".concat(l," ").concat(v,", ").concat(p(i,o),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},w6=function(t){var n=t.ariaSelection,r=t.focusedOption,o=t.focusedValue,i=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,c=s.ariaLiveMessages,d=s.getOptionLabel,p=s.inputValue,g=s.isMulti,v=s.isOptionDisabled,x=s.isSearchable,w=s.menuIsOpen,k=s.options,h=s.screenReaderStatus,f=s.tabSelectsValue,m=s["aria-label"],E=s["aria-live"],A=y.exports.useMemo(function(){return st(st({},b6),c||{})},[c]),M=y.exports.useMemo(function(){var D="";if(n&&A.onChange){var U=n.option,Y=n.removedValue,j=n.value,K=function(G){return Array.isArray(G)?null:G},F=Y||U||K(j),J=st({isDisabled:F&&v(F),label:F?d(F):""},n);D=A.onChange(J)}return D},[n,v,d,A]),S=y.exports.useMemo(function(){var D="",U=r||o,Y=!!(r&&l&&l.includes(r));if(U&&A.onFocus){var j={focused:U,label:d(U),isDisabled:v(U),isSelected:Y,options:k,context:U===r?"menu":"value",selectValue:l};D=A.onFocus(j)}return D},[r,o,d,v,A,k,l]),_=y.exports.useMemo(function(){var D="";if(w&&k.length&&A.onFilter){var U=h({count:i.length});D=A.onFilter({inputValue:p,resultsMessage:U})}return D},[i,p,w,A,k,h]),P=y.exports.useMemo(function(){var D="";if(A.guidance){var U=o?"value":w?"menu":"input";D=A.guidance({"aria-label":m,context:U,isDisabled:r&&v(r),isMulti:g,isSearchable:x,tabSelectsValue:f})}return D},[m,r,o,g,v,x,w,A,f]),R="".concat(S," ").concat(_," ").concat(P);return re(y6,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text"},a&&re(on.Fragment,null,re("span",{id:"aria-selection"},M),re("span",{id:"aria-context"},R)))},Ac=[{base:"A",letters:"A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"},{base:"AA",letters:"\uA732"},{base:"AE",letters:"\xC6\u01FC\u01E2"},{base:"AO",letters:"\uA734"},{base:"AU",letters:"\uA736"},{base:"AV",letters:"\uA738\uA73A"},{base:"AY",letters:"\uA73C"},{base:"B",letters:"B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"},{base:"C",letters:"C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"},{base:"D",letters:"D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"},{base:"DZ",letters:"\u01F1\u01C4"},{base:"Dz",letters:"\u01F2\u01C5"},{base:"E",letters:"E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"},{base:"F",letters:"F\u24BB\uFF26\u1E1E\u0191\uA77B"},{base:"G",letters:"G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"},{base:"H",letters:"H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"},{base:"I",letters:"I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"},{base:"J",letters:"J\u24BF\uFF2A\u0134\u0248"},{base:"K",letters:"K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"},{base:"L",letters:"L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"},{base:"LJ",letters:"\u01C7"},{base:"Lj",letters:"\u01C8"},{base:"M",letters:"M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"},{base:"N",letters:"N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"},{base:"NJ",letters:"\u01CA"},{base:"Nj",letters:"\u01CB"},{base:"O",letters:"O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"},{base:"OI",letters:"\u01A2"},{base:"OO",letters:"\uA74E"},{base:"OU",letters:"\u0222"},{base:"P",letters:"P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"},{base:"Q",letters:"Q\u24C6\uFF31\uA756\uA758\u024A"},{base:"R",letters:"R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"},{base:"S",letters:"S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"},{base:"T",letters:"T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"},{base:"TZ",letters:"\uA728"},{base:"U",letters:"U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"},{base:"V",letters:"V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"},{base:"VY",letters:"\uA760"},{base:"W",letters:"W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"},{base:"X",letters:"X\u24CD\uFF38\u1E8A\u1E8C"},{base:"Y",letters:"Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"},{base:"Z",letters:"Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"},{base:"a",letters:"a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"},{base:"aa",letters:"\uA733"},{base:"ae",letters:"\xE6\u01FD\u01E3"},{base:"ao",letters:"\uA735"},{base:"au",letters:"\uA737"},{base:"av",letters:"\uA739\uA73B"},{base:"ay",letters:"\uA73D"},{base:"b",letters:"b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"},{base:"c",letters:"c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"},{base:"d",letters:"d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"},{base:"dz",letters:"\u01F3\u01C6"},{base:"e",letters:"e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"},{base:"f",letters:"f\u24D5\uFF46\u1E1F\u0192\uA77C"},{base:"g",letters:"g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"},{base:"h",letters:"h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"},{base:"hv",letters:"\u0195"},{base:"i",letters:"i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"},{base:"j",letters:"j\u24D9\uFF4A\u0135\u01F0\u0249"},{base:"k",letters:"k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"},{base:"l",letters:"l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"},{base:"lj",letters:"\u01C9"},{base:"m",letters:"m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"},{base:"n",letters:"n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"},{base:"nj",letters:"\u01CC"},{base:"o",letters:"o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"},{base:"oi",letters:"\u01A3"},{base:"ou",letters:"\u0223"},{base:"oo",letters:"\uA74F"},{base:"p",letters:"p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"},{base:"q",letters:"q\u24E0\uFF51\u024B\uA757\uA759"},{base:"r",letters:"r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"},{base:"s",letters:"s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"},{base:"t",letters:"t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"},{base:"tz",letters:"\uA729"},{base:"u",letters:"u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"},{base:"v",letters:"v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"},{base:"vy",letters:"\uA761"},{base:"w",letters:"w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"},{base:"x",letters:"x\u24E7\uFF58\u1E8B\u1E8D"},{base:"y",letters:"y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"},{base:"z",letters:"z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"}],C6=new RegExp("["+Ac.map(function(e){return e.letters}).join("")+"]","g"),vm={};for(var su=0;su<Ac.length;su++)for(var uu=Ac[su],cu=0;cu<uu.letters.length;cu++)vm[uu.letters[cu]]=uu.base;var ym=function(t){return t.replace(C6,function(n){return vm[n]})},k6=x6(ym),l0=function(t){return t.replace(/^\s+|\s+$/g,"")},S6=function(t){return"".concat(t.label," ").concat(t.value)},E6=function(t){return function(n,r){var o=st({ignoreCase:!0,ignoreAccents:!0,stringify:S6,trim:!0,matchFrom:"any"},t),i=o.ignoreCase,a=o.ignoreAccents,l=o.stringify,s=o.trim,c=o.matchFrom,d=s?l0(r):r,p=s?l0(l(n)):l(n);return i&&(d=d.toLowerCase(),p=p.toLowerCase()),a&&(d=k6(d),p=ym(p)),c==="start"?p.substr(0,d.length)===d:p.indexOf(d)>-1}};function $6(e){e.in,e.out,e.onExited,e.appear,e.enter,e.exit;var t=e.innerRef;e.emotion;var n=jo(e,["in","out","onExited","appear","enter","exit","innerRef","emotion"]);return re("input",ne({ref:t},n,{css:Vd({label:"dummyInput",background:0,border:0,fontSize:"inherit",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(0)"},"","")}))}var A6=function(t){t.preventDefault(),t.stopPropagation()};function O6(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,o=e.onTopArrive,i=e.onTopLeave,a=y.exports.useRef(!1),l=y.exports.useRef(!1),s=y.exports.useRef(0),c=y.exports.useRef(null),d=y.exports.useCallback(function(k,h){if(c.current!==null){var f=c.current,m=f.scrollTop,E=f.scrollHeight,A=f.clientHeight,M=c.current,S=h>0,_=E-A-m,P=!1;_>h&&a.current&&(r&&r(k),a.current=!1),S&&l.current&&(i&&i(k),l.current=!1),S&&h>_?(n&&!a.current&&n(k),M.scrollTop=E,P=!0,a.current=!0):!S&&-h>m&&(o&&!l.current&&o(k),M.scrollTop=0,P=!0,l.current=!0),P&&A6(k)}},[]),p=y.exports.useCallback(function(k){d(k,k.deltaY)},[d]),g=y.exports.useCallback(function(k){s.current=k.changedTouches[0].clientY},[]),v=y.exports.useCallback(function(k){var h=s.current-k.changedTouches[0].clientY;d(k,h)},[d]),x=y.exports.useCallback(function(k){if(!!k){var h=gb?{passive:!1}:!1;typeof k.addEventListener=="function"&&k.addEventListener("wheel",p,h),typeof k.addEventListener=="function"&&k.addEventListener("touchstart",g,h),typeof k.addEventListener=="function"&&k.addEventListener("touchmove",v,h)}},[v,g,p]),w=y.exports.useCallback(function(k){!k||(typeof k.removeEventListener=="function"&&k.removeEventListener("wheel",p,!1),typeof k.removeEventListener=="function"&&k.removeEventListener("touchstart",g,!1),typeof k.removeEventListener=="function"&&k.removeEventListener("touchmove",v,!1))},[v,g,p]);return y.exports.useEffect(function(){if(!!t){var k=c.current;return x(k),function(){w(k)}}},[t,x,w]),function(k){c.current=k}}var s0=["boxSizing","height","overflow","paddingRight","position"],u0={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function c0(e){e.preventDefault()}function d0(e){e.stopPropagation()}function f0(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function p0(){return"ontouchstart"in window||navigator.maxTouchPoints}var h0=!!(typeof window!="undefined"&&window.document&&window.document.createElement),ni=0,to={capture:!1,passive:!1};function T6(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,o=y.exports.useRef({}),i=y.exports.useRef(null),a=y.exports.useCallback(function(s){if(!!h0){var c=document.body,d=c&&c.style;if(r&&s0.forEach(function(x){var w=d&&d[x];o.current[x]=w}),r&&ni<1){var p=parseInt(o.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,v=window.innerWidth-g+p||0;Object.keys(u0).forEach(function(x){var w=u0[x];d&&(d[x]=w)}),d&&(d.paddingRight="".concat(v,"px"))}c&&p0()&&(c.addEventListener("touchmove",c0,to),s&&(s.addEventListener("touchstart",f0,to),s.addEventListener("touchmove",d0,to))),ni+=1}},[]),l=y.exports.useCallback(function(s){if(!!h0){var c=document.body,d=c&&c.style;ni=Math.max(ni-1,0),r&&ni<1&&s0.forEach(function(p){var g=o.current[p];d&&(d[p]=g)}),c&&p0()&&(c.removeEventListener("touchmove",c0,to),s&&(s.removeEventListener("touchstart",f0,to),s.removeEventListener("touchmove",d0,to)))}},[]);return y.exports.useEffect(function(){if(!!t){var s=i.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){i.current=s}}var M6=function(){return document.activeElement&&document.activeElement.blur()},P6={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function _6(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,o=r===void 0?!0:r,i=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,c=O6({isEnabled:o,onBottomArrive:i,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),d=T6({isEnabled:n}),p=function(v){c(v),d(v)};return re(on.Fragment,null,n&&re("div",{onClick:M6,css:P6}),t(p))}var I6=function(t){return t.label},R6=function(t){return t.label},z6=function(t){return t.value},L6=function(t){return!!t.isDisabled},D6={clearIndicator:Lb,container:Ab,control:jb,dropdownIndicator:Rb,group:Ub,groupHeading:Gb,indicatorsContainer:Pb,indicatorSeparator:Fb,input:Zb,loadingIndicator:Bb,loadingMessage:Sb,menu:yb,menuList:wb,menuPortal:Eb,multiValue:Kb,multiValueLabel:qb,multiValueRemove:Jb,noOptionsMessage:kb,option:r6,placeholder:i6,singleValue:l6,valueContainer:Tb},F6={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},N6=4,bm=4,V6=38,B6=bm*2,j6={baseUnit:bm,controlHeight:V6,menuGutter:B6},du={borderRadius:N6,colors:F6,spacing:j6},H6={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:o0(),captureMenuScroll:!o0(),closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:E6(),formatGroupLabel:I6,getOptionLabel:R6,getOptionValue:z6,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:L6,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!hb(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:"0",tabSelectsValue:!0};function m0(e,t,n,r){var o=Sm(e,t,n),i=Em(e,t,n),a=km(e,t),l=Rl(e,t);return{type:"option",data:t,isDisabled:o,isSelected:i,label:a,value:l,index:r}}function wm(e,t){return e.options.map(function(n,r){if(n.options){var o=n.options.map(function(a,l){return m0(e,a,t,l)}).filter(function(a){return g0(e,a)});return o.length>0?{type:"group",data:n,options:o,index:r}:void 0}var i=m0(e,n,t,r);return g0(e,i)?i:void 0}).filter(function(n){return!!n})}function Cm(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,xm(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function U6(e,t){return Cm(wm(e,t))}function g0(e,t){var n=e.inputValue,r=n===void 0?"":n,o=t.data,i=t.isSelected,a=t.label,l=t.value;return(!Am(e)||!i)&&$m(e,{label:a,value:l,data:o},r)}function W6(e,t){var n=e.focusedValue,r=e.selectValue,o=r.indexOf(n);if(o>-1){var i=t.indexOf(n);if(i>-1)return n;if(o<t.length)return t[o]}return null}function G6(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var km=function(t,n){return t.getOptionLabel(n)},Rl=function(t,n){return t.getOptionValue(n)};function Sm(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function Em(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Rl(e,t);return n.some(function(o){return Rl(e,o)===r})}function $m(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var Am=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},Y6=1,Om=function(e){ms(n,e);var t=gs(n);function n(r){var o;return ps(this,n),o=t.call(this,r),o.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},o.blockOptionHover=!1,o.isComposing=!1,o.commonProps=void 0,o.initialTouchX=0,o.initialTouchY=0,o.instancePrefix="",o.openAfterFocus=!1,o.scrollToFocusedOptionOnUpdate=!1,o.userIsDragging=void 0,o.controlRef=null,o.getControlRef=function(i){o.controlRef=i},o.focusedOptionRef=null,o.getFocusedOptionRef=function(i){o.focusedOptionRef=i},o.menuListRef=null,o.getMenuListRef=function(i){o.menuListRef=i},o.inputRef=null,o.getInputRef=function(i){o.inputRef=i},o.focus=o.focusInput,o.blur=o.blurInput,o.onChange=function(i,a){var l=o.props,s=l.onChange,c=l.name;a.name=c,o.ariaOnChange(i,a),s(i,a)},o.setValue=function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"set-value",l=arguments.length>2?arguments[2]:void 0,s=o.props,c=s.closeMenuOnSelect,d=s.isMulti;o.onInputChange("",{action:"set-value"}),c&&(o.setState({inputIsHiddenAfterUpdate:!d}),o.onMenuClose()),o.setState({clearFocusValueOnUpdate:!0}),o.onChange(i,{action:a,option:l})},o.selectOption=function(i){var a=o.props,l=a.blurInputOnSelect,s=a.isMulti,c=a.name,d=o.state.selectValue,p=s&&o.isOptionSelected(i,d),g=o.isOptionDisabled(i,d);if(p){var v=o.getOptionValue(i);o.setValue(d.filter(function(x){return o.getOptionValue(x)!==v}),"deselect-option",i)}else if(!g)s?o.setValue([].concat(xm(d),[i]),"select-option",i):o.setValue(i,"select-option");else{o.ariaOnChange(i,{action:"select-option",name:c});return}l&&o.blurInput()},o.removeValue=function(i){var a=o.props.isMulti,l=o.state.selectValue,s=o.getOptionValue(i),c=l.filter(function(p){return o.getOptionValue(p)!==s}),d=a?c:c[0]||null;o.onChange(d,{action:"remove-value",removedValue:i}),o.focusInput()},o.clearValue=function(){var i=o.state.selectValue;o.onChange(o.props.isMulti?[]:null,{action:"clear",removedValues:i})},o.popValue=function(){var i=o.props.isMulti,a=o.state.selectValue,l=a[a.length-1],s=a.slice(0,a.length-1),c=i?s:s[0]||null;o.onChange(c,{action:"pop-value",removedValue:l})},o.getValue=function(){return o.state.selectValue},o.cx=function(){for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return ub.apply(void 0,[o.props.classNamePrefix].concat(a))},o.getOptionLabel=function(i){return km(o.props,i)},o.getOptionValue=function(i){return Rl(o.props,i)},o.getStyles=function(i,a){var l=D6[i](a);l.boxSizing="border-box";var s=o.props.styles[i];return s?s(l,a):l},o.getElementId=function(i){return"".concat(o.instancePrefix,"-").concat(i)},o.getComponents=function(){return c6(o.props)},o.buildCategorizedOptions=function(){return wm(o.props,o.state.selectValue)},o.getCategorizedOptions=function(){return o.props.menuIsOpen?o.buildCategorizedOptions():[]},o.buildFocusableOptions=function(){return Cm(o.buildCategorizedOptions())},o.getFocusableOptions=function(){return o.props.menuIsOpen?o.buildFocusableOptions():[]},o.ariaOnChange=function(i,a){o.setState({ariaSelection:st({value:i},a)})},o.onMenuMouseDown=function(i){i.button===0&&(i.stopPropagation(),i.preventDefault(),o.focusInput())},o.onMenuMouseMove=function(i){o.blockOptionHover=!1},o.onControlMouseDown=function(i){var a=o.props.openMenuOnClick;o.state.isFocused?o.props.menuIsOpen?i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&o.onMenuClose():a&&o.openMenu("first"):(a&&(o.openAfterFocus=!0),o.focusInput()),i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&i.preventDefault()},o.onDropdownIndicatorMouseDown=function(i){if(!(i&&i.type==="mousedown"&&i.button!==0)&&!o.props.isDisabled){var a=o.props,l=a.isMulti,s=a.menuIsOpen;o.focusInput(),s?(o.setState({inputIsHiddenAfterUpdate:!l}),o.onMenuClose()):o.openMenu("first"),i.preventDefault(),i.stopPropagation()}},o.onClearIndicatorMouseDown=function(i){i&&i.type==="mousedown"&&i.button!==0||(o.clearValue(),i.stopPropagation(),o.openAfterFocus=!1,i.type==="touchend"?o.focusInput():setTimeout(function(){return o.focusInput()}))},o.onScroll=function(i){typeof o.props.closeMenuOnScroll=="boolean"?i.target instanceof HTMLElement&&jd(i.target)&&o.props.onMenuClose():typeof o.props.closeMenuOnScroll=="function"&&o.props.closeMenuOnScroll(i)&&o.props.onMenuClose()},o.onCompositionStart=function(){o.isComposing=!0},o.onCompositionEnd=function(){o.isComposing=!1},o.onTouchStart=function(i){var a=i.touches,l=a&&a.item(0);!l||(o.initialTouchX=l.clientX,o.initialTouchY=l.clientY,o.userIsDragging=!1)},o.onTouchMove=function(i){var a=i.touches,l=a&&a.item(0);if(!!l){var s=Math.abs(l.clientX-o.initialTouchX),c=Math.abs(l.clientY-o.initialTouchY),d=5;o.userIsDragging=s>d||c>d}},o.onTouchEnd=function(i){o.userIsDragging||(o.controlRef&&!o.controlRef.contains(i.target)&&o.menuListRef&&!o.menuListRef.contains(i.target)&&o.blurInput(),o.initialTouchX=0,o.initialTouchY=0)},o.onControlTouchEnd=function(i){o.userIsDragging||o.onControlMouseDown(i)},o.onClearIndicatorTouchEnd=function(i){o.userIsDragging||o.onClearIndicatorMouseDown(i)},o.onDropdownIndicatorTouchEnd=function(i){o.userIsDragging||o.onDropdownIndicatorMouseDown(i)},o.handleInputChange=function(i){var a=i.currentTarget.value;o.setState({inputIsHiddenAfterUpdate:!1}),o.onInputChange(a,{action:"input-change"}),o.props.menuIsOpen||o.onMenuOpen()},o.onInputFocus=function(i){o.props.onFocus&&o.props.onFocus(i),o.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(o.openAfterFocus||o.props.openMenuOnFocus)&&o.openMenu("first"),o.openAfterFocus=!1},o.onInputBlur=function(i){if(o.menuListRef&&o.menuListRef.contains(document.activeElement)){o.inputRef.focus();return}o.props.onBlur&&o.props.onBlur(i),o.onInputChange("",{action:"input-blur"}),o.onMenuClose(),o.setState({focusedValue:null,isFocused:!1})},o.onOptionHover=function(i){o.blockOptionHover||o.state.focusedOption===i||o.setState({focusedOption:i})},o.shouldHideSelectedOptions=function(){return Am(o.props)},o.onKeyDown=function(i){var a=o.props,l=a.isMulti,s=a.backspaceRemovesValue,c=a.escapeClearsValue,d=a.inputValue,p=a.isClearable,g=a.isDisabled,v=a.menuIsOpen,x=a.onKeyDown,w=a.tabSelectsValue,k=a.openMenuOnFocus,h=o.state,f=h.focusedOption,m=h.focusedValue,E=h.selectValue;if(!g&&!(typeof x=="function"&&(x(i),i.defaultPrevented))){switch(o.blockOptionHover=!0,i.key){case"ArrowLeft":if(!l||d)return;o.focusValue("previous");break;case"ArrowRight":if(!l||d)return;o.focusValue("next");break;case"Delete":case"Backspace":if(d)return;if(m)o.removeValue(m);else{if(!s)return;l?o.popValue():p&&o.clearValue()}break;case"Tab":if(o.isComposing||i.shiftKey||!v||!w||!f||k&&o.isOptionSelected(f,E))return;o.selectOption(f);break;case"Enter":if(i.keyCode===229)break;if(v){if(!f||o.isComposing)return;o.selectOption(f);break}return;case"Escape":v?(o.setState({inputIsHiddenAfterUpdate:!1}),o.onInputChange("",{action:"menu-close"}),o.onMenuClose()):p&&c&&o.clearValue();break;case" ":if(d)return;if(!v){o.openMenu("first");break}if(!f)return;o.selectOption(f);break;case"ArrowUp":v?o.focusOption("up"):o.openMenu("last");break;case"ArrowDown":v?o.focusOption("down"):o.openMenu("first");break;case"PageUp":if(!v)return;o.focusOption("pageup");break;case"PageDown":if(!v)return;o.focusOption("pagedown");break;case"Home":if(!v)return;o.focusOption("first");break;case"End":if(!v)return;o.focusOption("last");break;default:return}i.preventDefault()}},o.instancePrefix="react-select-"+(o.props.instanceId||++Y6),o.state.selectValue=r0(r.value),o}return hs(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput()}},{key:"componentDidUpdate",value:function(o){var i=this.props,a=i.isDisabled,l=i.menuIsOpen,s=this.state.isFocused;(s&&!a&&o.isDisabled||s&&l&&!o.menuIsOpen)&&this.focusInput(),s&&a&&!o.isDisabled&&this.setState({isFocused:!1},this.onMenuClose),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(fb(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close"}),this.props.onMenuClose()}},{key:"onInputChange",value:function(o,i){this.props.onInputChange(o,i)}},{key:"focusInput",value:function(){!this.inputRef||this.inputRef.focus()}},{key:"blurInput",value:function(){!this.inputRef||this.inputRef.blur()}},{key:"openMenu",value:function(o){var i=this,a=this.state,l=a.selectValue,s=a.isFocused,c=this.buildFocusableOptions(),d=o==="first"?0:c.length-1;if(!this.props.isMulti){var p=c.indexOf(l[0]);p>-1&&(d=p)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[d]},function(){return i.onMenuOpen()})}},{key:"focusValue",value:function(o){var i=this.state,a=i.selectValue,l=i.focusedValue;if(!!this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var c=a.length-1,d=-1;if(!!a.length){switch(o){case"previous":s===0?d=0:s===-1?d=c:d=s-1;break;case"next":s>-1&&s<c&&(d=s+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:a[d]})}}}},{key:"focusOption",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",i=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(!!l.length){var s=0,c=l.indexOf(a);a||(c=-1),o==="up"?s=c>0?c-1:l.length-1:o==="down"?s=(c+1)%l.length:o==="pageup"?(s=c-i,s<0&&(s=0)):o==="pagedown"?(s=c+i,s>l.length-1&&(s=l.length-1)):o==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(du):st(st({},du),this.props.theme):du}},{key:"getCommonProps",value:function(){var o=this.clearValue,i=this.cx,a=this.getStyles,l=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,p=d.isMulti,g=d.isRtl,v=d.options,x=this.hasValue();return{clearValue:o,cx:i,getStyles:a,getValue:l,hasValue:x,isMulti:p,isRtl:g,options:v,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var o=this.state.selectValue;return o.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var o=this.props,i=o.isClearable,a=o.isMulti;return i===void 0?a:i}},{key:"isOptionDisabled",value:function(o,i){return Sm(this.props,o,i)}},{key:"isOptionSelected",value:function(o,i){return Em(this.props,o,i)}},{key:"filterOption",value:function(o,i){return $m(this.props,o,i)}},{key:"formatOptionLabel",value:function(o,i){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(o,{context:i,inputValue:a,selectValue:l})}else return this.getOptionLabel(o)}},{key:"formatGroupLabel",value:function(o){return this.props.formatGroupLabel(o)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var o=this.props,i=o.isDisabled,a=o.isSearchable,l=o.inputId,s=o.inputValue,c=o.tabIndex,d=o.form,p=this.getComponents(),g=p.Input,v=this.state.inputIsHidden,x=this.commonProps,w=l||this.getElementId("input"),k={"aria-autocomplete":"list","aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"]};return a?u(g,{...x,autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:w,innerRef:this.getInputRef,isDisabled:i,isHidden:v,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:d,type:"text",value:s,...k}):u($6,{id:w,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:_l,onFocus:this.onInputFocus,readOnly:!0,disabled:i,tabIndex:c,form:d,value:"",...k})}},{key:"renderPlaceholderOrValue",value:function(){var o=this,i=this.getComponents(),a=i.MultiValue,l=i.MultiValueContainer,s=i.MultiValueLabel,c=i.MultiValueRemove,d=i.SingleValue,p=i.Placeholder,g=this.commonProps,v=this.props,x=v.controlShouldRenderValue,w=v.isDisabled,k=v.isMulti,h=v.inputValue,f=v.placeholder,m=this.state,E=m.selectValue,A=m.focusedValue,M=m.isFocused;if(!this.hasValue()||!x)return h?null:y.exports.createElement(p,{...g,key:"placeholder",isDisabled:w,isFocused:M},f);if(k){var S=E.map(function(P,R){var D=P===A;return y.exports.createElement(a,{...g,components:{Container:l,Label:s,Remove:c},isFocused:D,isDisabled:w,key:"".concat(o.getOptionValue(P)).concat(R),index:R,removeProps:{onClick:function(){return o.removeValue(P)},onTouchEnd:function(){return o.removeValue(P)},onMouseDown:function(Y){Y.preventDefault(),Y.stopPropagation()}},data:P},o.formatOptionLabel(P,"value"))});return S}if(h)return null;var _=E[0];return u(d,{...g,data:_,isDisabled:w,children:this.formatOptionLabel(_,"value")})}},{key:"renderClearIndicator",value:function(){var o=this.getComponents(),i=o.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!i||s||!this.hasValue()||c)return null;var p={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return u(i,{...a,innerProps:p,isFocused:d})}},{key:"renderLoadingIndicator",value:function(){var o=this.getComponents(),i=o.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,c=l.isLoading,d=this.state.isFocused;if(!i||!c)return null;var p={"aria-hidden":"true"};return u(i,{...a,innerProps:p,isDisabled:s,isFocused:d})}},{key:"renderIndicatorSeparator",value:function(){var o=this.getComponents(),i=o.DropdownIndicator,a=o.IndicatorSeparator;if(!i||!a)return null;var l=this.commonProps,s=this.props.isDisabled,c=this.state.isFocused;return u(a,{...l,isDisabled:s,isFocused:c})}},{key:"renderDropdownIndicator",value:function(){var o=this.getComponents(),i=o.DropdownIndicator;if(!i)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return u(i,{...a,innerProps:c,isDisabled:l,isFocused:s})}},{key:"renderMenu",value:function(){var o=this,i=this.getComponents(),a=i.Group,l=i.GroupHeading,s=i.Menu,c=i.MenuList,d=i.MenuPortal,p=i.LoadingMessage,g=i.NoOptionsMessage,v=i.Option,x=this.commonProps,w=this.state.focusedOption,k=this.props,h=k.captureMenuScroll,f=k.inputValue,m=k.isLoading,E=k.loadingMessage,A=k.minMenuHeight,M=k.maxMenuHeight,S=k.menuIsOpen,_=k.menuPlacement,P=k.menuPosition,R=k.menuPortalTarget,D=k.menuShouldBlockScroll,U=k.menuShouldScrollIntoView,Y=k.noOptionsMessage,j=k.onMenuScrollToTop,K=k.onMenuScrollToBottom;if(!S)return null;var F=function(V,W){var q=V.type,O=V.data,ie=V.isDisabled,B=V.isSelected,ye=V.label,me=V.value,ge=w===O,oe=ie?void 0:function(){return o.onOptionHover(O)},Ne=ie?void 0:function(){return o.selectOption(O)},Te="".concat(o.getElementId("option"),"-").concat(W),se={id:Te,onClick:Ne,onMouseMove:oe,onMouseOver:oe,tabIndex:-1};return y.exports.createElement(v,{...x,innerProps:se,data:O,isDisabled:ie,isSelected:B,key:Te,label:ye,type:q,value:me,isFocused:ge,innerRef:ge?o.getFocusedOptionRef:void 0},o.formatOptionLabel(V.data,"menu"))},J;if(this.hasOptions())J=this.getCategorizedOptions().map(function(I){if(I.type==="group"){var V=I.data,W=I.options,q=I.index,O="".concat(o.getElementId("group"),"-").concat(q),ie="".concat(O,"-heading");return y.exports.createElement(a,{...x,key:O,data:V,options:W,Heading:l,headingProps:{id:ie,data:I.data},label:o.formatGroupLabel(I.data)},I.options.map(function(B){return F(B,"".concat(q,"-").concat(B.index))}))}else if(I.type==="option")return F(I,"".concat(I.index))});else if(m){var L=E({inputValue:f});if(L===null)return null;J=u(p,{...x,children:L})}else{var G=Y({inputValue:f});if(G===null)return null;J=u(g,{...x,children:G})}var Z={minMenuHeight:A,maxMenuHeight:M,menuPlacement:_,menuPosition:P,menuShouldScrollIntoView:U},te=u(lm,{...x,...Z,children:function(I){var V=I.ref,W=I.placerProps,q=W.placement,O=W.maxHeight;return u(s,{...x,...Z,innerRef:V,innerProps:{onMouseDown:o.onMenuMouseDown,onMouseMove:o.onMenuMouseMove},isLoading:m,placement:q,children:u(_6,{captureEnabled:h,onTopArrive:j,onBottomArrive:K,lockEnabled:D,children:function(ie){return u(c,{...x,innerRef:function(ye){o.getMenuListRef(ye),ie(ye)},isLoading:m,maxHeight:O,focusedOption:w,children:J})}})})}});return R||P==="fixed"?u(d,{...x,appendTo:R,controlElement:this.controlRef,menuPlacement:_,menuPosition:P,children:te}):te}},{key:"renderFormField",value:function(){var o=this,i=this.props,a=i.delimiter,l=i.isDisabled,s=i.isMulti,c=i.name,d=this.state.selectValue;if(!(!c||l))if(s)if(a){var p=d.map(function(x){return o.getOptionValue(x)}).join(a);return u("input",{name:c,type:"hidden",value:p})}else{var g=d.length>0?d.map(function(x,w){return u("input",{name:c,type:"hidden",value:o.getOptionValue(x)},"i-".concat(w))}):u("input",{name:c,type:"hidden"});return u("div",{children:g})}else{var v=d[0]?this.getOptionValue(d[0]):"";return u("input",{name:c,type:"hidden",value:v})}}},{key:"renderLiveRegion",value:function(){var o=this.commonProps,i=this.state,a=i.ariaSelection,l=i.focusedOption,s=i.focusedValue,c=i.isFocused,d=i.selectValue,p=this.getFocusableOptions();return u(w6,{...o,ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:c,selectValue:d,focusableOptions:p})}},{key:"render",value:function(){var o=this.getComponents(),i=o.Control,a=o.IndicatorsContainer,l=o.SelectContainer,s=o.ValueContainer,c=this.props,d=c.className,p=c.id,g=c.isDisabled,v=c.menuIsOpen,x=this.state.isFocused,w=this.commonProps=this.getCommonProps();return C(l,{...w,className:d,innerProps:{id:p,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:x,children:[this.renderLiveRegion(),C(i,{...w,innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:x,menuIsOpen:v,children:[C(s,{...w,isDisabled:g,children:[this.renderPlaceholderOrValue(),this.renderInput()]}),C(a,{...w,isDisabled:g,children:[this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator()]})]}),this.renderMenu(),this.renderFormField()]})}}],[{key:"getDerivedStateFromProps",value:function(o,i){var a=i.prevProps,l=i.clearFocusValueOnUpdate,s=i.inputIsHiddenAfterUpdate,c=o.options,d=o.value,p=o.menuIsOpen,g=o.inputValue,v={};if(a&&(d!==a.value||c!==a.options||p!==a.menuIsOpen||g!==a.inputValue)){var x=r0(d),w=p?U6(o,x):[],k=l?W6(i,x):null,h=G6(i,w);v={selectValue:x,focusedOption:h,focusedValue:k,clearFocusValueOnUpdate:!1}}var f=s!=null&&o!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{};return st(st(st({},v),f),{},{prevProps:o})}}]),n}(y.exports.Component);Om.defaultProps=H6;var Z6={defaultInputValue:"",defaultMenuIsOpen:!1,defaultValue:null},Q6=function(t){var n,r;return r=n=function(o){ms(a,o);var i=gs(a);function a(){var l;ps(this,a);for(var s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];return l=i.call.apply(i,[this].concat(c)),l.select=void 0,l.state={inputValue:l.props.inputValue!==void 0?l.props.inputValue:l.props.defaultInputValue,menuIsOpen:l.props.menuIsOpen!==void 0?l.props.menuIsOpen:l.props.defaultMenuIsOpen,value:l.props.value!==void 0?l.props.value:l.props.defaultValue},l.onChange=function(p,g){l.callProp("onChange",p,g),l.setState({value:p})},l.onInputChange=function(p,g){var v=l.callProp("onInputChange",p,g);l.setState({inputValue:v!==void 0?v:p})},l.onMenuOpen=function(){l.callProp("onMenuOpen"),l.setState({menuIsOpen:!0})},l.onMenuClose=function(){l.callProp("onMenuClose"),l.setState({menuIsOpen:!1})},l}return hs(a,[{key:"focus",value:function(){this.select.focus()}},{key:"blur",value:function(){this.select.blur()}},{key:"getProp",value:function(s){return this.props[s]!==void 0?this.props[s]:this.state[s]}},{key:"callProp",value:function(s){if(typeof this.props[s]=="function"){for(var c,d=arguments.length,p=new Array(d>1?d-1:0),g=1;g<d;g++)p[g-1]=arguments[g];return(c=this.props)[s].apply(c,p)}}},{key:"render",value:function(){var s=this,c=this.props;c.defaultInputValue,c.defaultMenuIsOpen,c.defaultValue;var d=jo(c,["defaultInputValue","defaultMenuIsOpen","defaultValue"]);return u(t,{...d,ref:function(g){s.select=g},inputValue:this.getProp("inputValue"),menuIsOpen:this.getProp("menuIsOpen"),onChange:this.onChange,onInputChange:this.onInputChange,onMenuClose:this.onMenuClose,onMenuOpen:this.onMenuOpen,value:this.getProp("value")})}}]),a}(y.exports.Component),n.defaultProps=Z6,r},X6=Q6(Om),K6=X6;const q6=l2`
  [class*="TattooDropdown"][class*="__option"] {
    background-color: transparent !important;
    color: ${({theme:e})=>`rgb(${e.fontColor||"193, 194, 197"})`} !important;
  }
  [class*="TattooDropdown"][class*="__option--is-focused"] {
    background-color: ${({theme:e})=>`rgb(${e.surfaceBackground||"37, 38, 43"})`} !important;
    color: ${({theme:e})=>`rgb(${e.fontColor||"193, 194, 197"})`} !important;
  }
  [class*="TattooDropdown"][class*="__option--is-selected"] {
    background-color: ${({theme:e})=>`rgb(${e.borderColor||"44, 46, 51"})`} !important;
    color: ${({theme:e})=>`rgb(${e.fontColor||"193, 194, 197"})`} !important;
  }
`,x0=b.div`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${T(16)};
`,J6=b.div`
  display: flex;
  gap: ${T(8)};
  width: 100%;
`,e8=e=>{const t=e!=null&&e.fontColor?`rgb(${e.fontColor})`:"#C1C2C5",n=e!=null&&e.mutedTextColorSoft?`rgb(${e.mutedTextColorSoft})`:"#5c5f66",r=e!=null&&e.secondaryBackground?`rgb(${e.secondaryBackground})`:"#1A1B1E",o=e!=null&&e.surfaceBackground?`rgb(${e.surfaceBackground})`:"#25262b",i=e!=null&&e.borderColor?`rgb(${e.borderColor})`:"#2C2E33",a=e!=null&&e.borderColorSoft?`rgb(${e.borderColorSoft})`:"#373A40",l=e!=null&&e.accentColor?`rgb(${e.accentColor})`:"rgb(66, 140, 255)",s=e!=null&&e.secondaryBackground?`rgb(${e.secondaryBackground})`:"#101113";return{control:c=>({...c,marginTop:0,width:"100%",minWidth:0,background:r,backgroundColor:r,fontSize:"13px",color:t,border:`1px solid ${i}`,borderRadius:"8px",outline:"none",boxShadow:"none",minHeight:"40px"}),placeholder:c=>({...c,fontSize:"14px",color:n}),input:c=>({...c,fontSize:"14px",color:t}),singleValue:c=>({...c,fontSize:"14px",color:t,border:"none",outline:"none"}),indicatorContainer:c=>({...c,borderColor:a,color:l}),dropdownIndicator:c=>({...c,borderColor:a,color:l}),menuPortal:c=>({...c,color:t,zIndex:10050}),menu:c=>({...c,background:r,backgroundColor:r,position:"absolute",marginBottom:"10px",borderRadius:"8px",border:`1px solid ${i}`,boxShadow:"0 4px 20px rgba(0, 0, 0, 0.5)"}),menuList:c=>({...c,background:r,backgroundColor:r,borderRadius:"4px","&::-webkit-scrollbar":{width:"4px"},"&::-webkit-scrollbar-track":{background:s},"&::-webkit-scrollbar-thumb":{borderRadius:"4px",background:a}}),option:(c,{isFocused:d,isSelected:p})=>({...c,borderRadius:"6px",width:"97%",marginLeft:"auto",marginRight:"auto",backgroundColor:p?i:d?o:"transparent",color:t,cursor:"pointer",fontFamily:"Nexa-Book, sans-serif"})}},t8=({items:e,tattoosApplied:t,handleApplyTattoo:n,handlePreviewTattoo:r,handleDeleteTattoo:o,settings:i})=>{var P,R,D,U;const l=y.exports.useRef(null),[s,c]=y.exports.useState(e==null?void 0:e[0]),[d,p]=y.exports.useState(.1);y.exports.useEffect(()=>{e&&e.length>0?c(e[0]):c(void 0)},[e]);const{locales:g}=Vo(),v=(s==null?void 0:s.label)||"",x=y.exports.useCallback(()=>{var j;if(!t||!s)return .1;const{name:Y}=s;for(let K=0;K<t.length;K++){const{name:F}=t[K];if(F===Y)return(j=t[K].opacity)!=null?j:.1}return .1},[s,t])();y.exports.useEffect(()=>{p(x)},[x]);const w=y.exports.useRef(e);w.current=e;const k=y.exports.useRef(s);k.current=s;const h=y.exports.useRef(d);h.current=d,y.exports.useEffect(()=>{const Y=j=>{var I;const K=j.target,F=(I=K==null?void 0:K.tagName)==null?void 0:I.toLowerCase();if(F==="input"||F==="textarea"||(K==null?void 0:K.isContentEditable))return;const J=j.key;if(J!=="ArrowUp"&&J!=="ArrowDown"&&J!=="ArrowLeft"&&J!=="ArrowRight")return;const L=w.current;if(!L||L.length===0)return;const G=k.current,Z=G?L.findIndex(V=>V.name===G.name):0;let te=Z===-1?0:Z;if(J==="ArrowLeft"||J==="ArrowUp"){if(te<=0)return;te-=1}else if(J==="ArrowRight"||J==="ArrowDown"){if(te>=L.length-1)return;te+=1}if(te!==Z&&te>=0&&te<L.length){j.preventDefault();const V=L[te];c(V),r(V,h.current)}};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[r]);const f=(Y,{action:j})=>{j==="select-option"&&(Y==null?void 0:Y.value)&&(r(Y.value,d),c(Y.value))},m=y.exports.useCallback(Y=>{p(Y),s&&r(s,Y)},[s]),E=()=>{setTimeout(()=>{var K;const Y=(K=e==null?void 0:e[0])!=null&&K.zone?"TattooDropdown"+e[0].zone+"__option--is-selected":"__option--is-selected",j=document.getElementsByClassName(Y)[0];j&&j.scrollIntoView({behavior:"auto",block:"start",inline:"nearest"})},100)},A=y.exports.useCallback(()=>{if(!t||!s)return!1;const{name:Y}=s;for(let j=0;j<t.length;j++){const{name:K}=t[j];if(K===Y)return!0}return!1},[t,s])();if(!g)return null;if(!e||e.length===0||!s)return u(x0,{children:u("div",{style:{color:"#888888",textAlign:"center",padding:"1.5rem",fontSize:"0.85rem"},children:"Nenhuma tatuagem dispon\xEDvel nesta categoria."})});const M=y.exports.useContext(Io),S=e8(M),_="TattooDropdown"+(((P=e[0])==null?void 0:P.zone)||"zone");return C(x0,{children:[u(q6,{}),u(K6,{ref:l,styles:S,options:e.map(Y=>({value:Y,label:Y.label})),value:{value:s,label:v},onChange:f,onMenuOpen:E,className:_,classNamePrefix:_,menuPortalTarget:document.body,menuShouldScrollIntoView:!0}),u($e,{title:((R=g.tattoos)==null?void 0:R.opacity)||"Opacidade",min:i.opacity.min,max:i.opacity.max,factor:i.opacity.factor,defaultValue:d,clientValue:x,onChange:Y=>m(Y)}),u(J6,{children:A?u(yc,{variant:"secondary",onClick:()=>o(s),children:((D=g.tattoos)==null?void 0:D.delete)||"Remover"}):u(yc,{variant:"primary",onClick:()=>n(s,d),children:((U=g.tattoos)==null?void 0:U.apply)||"Aplicar"})})]})},n8=({settings:e,data:t,storedData:n,handleApplyTattoo:r,handlePreviewTattoo:o,handleDeleteTattoo:i,handleClearTattoos:a,activeZone:l})=>{var p,g;const{locales:s}=Vo(),{items:c}=e,d=l&&c[l]!==void 0?[l]:Object.keys(c).filter(v=>v!=="ZONE_HAIR");return s?C(j4,{children:[C(G4,{children:[!l&&u(H4,{children:((p=s.tattoos)==null?void 0:p.title)||"Tatuagens"}),d.map(v=>{var k,h,f;const x=c[v]||[],w=((h=(k=s.tattoos)==null?void 0:k.items)==null?void 0:h[v])||(v==="ZONE_HAIR"?"Micropigmenta\xE7\xE3o":v);return C(U4,{children:[!l&&u(W4,{children:w}),u(t8,{handlePreviewTattoo:o,handleApplyTattoo:r,handleDeleteTattoo:i,items:x,tattoosApplied:(f=t[v])!=null?f:null,settings:e})]},v)})]}),u(Y4,{children:u(yc,{variant:"primary",onClick:()=>a(),style:{width:"100%"},children:((g=s.tattoos)==null?void 0:g.deleteAll)||"Remover Todas as Tatuagens"})})]}):null},Tm=[{hex:"#1C1F21",index:0},{hex:"#272A2C",index:1},{hex:"#312E2C",index:2},{hex:"#35261C",index:3},{hex:"#4B321F",index:4},{hex:"#5C3B24",index:5},{hex:"#6D4C35",index:6},{hex:"#6B503B",index:7},{hex:"#765C45",index:8},{hex:"#7F684E",index:9},{hex:"#99815D",index:10},{hex:"#A79369",index:11},{hex:"#AF9C70",index:12},{hex:"#BBA063",index:13},{hex:"#D6B97B",index:14},{hex:"#DAC38E",index:15},{hex:"#9F7F59",index:16},{hex:"#845039",index:17},{hex:"#682B1F",index:18},{hex:"#61120C",index:19},{hex:"#640F0A",index:20},{hex:"#7C140F",index:21},{hex:"#A02E19",index:22},{hex:"#B64B28",index:23},{hex:"#A2502F",index:24},{hex:"#AA4E2B",index:25},{hex:"#626262",index:26},{hex:"#808080",index:27},{hex:"#AAAAAA",index:28},{hex:"#C5C5C5",index:29},{hex:"#463955",index:30},{hex:"#5A3F6B",index:31},{hex:"#763C76",index:32},{hex:"#ED74E3",index:33},{hex:"#EB4B93",index:34},{hex:"#F299BC",index:35},{hex:"#04959E",index:36},{hex:"#025F86",index:37},{hex:"#023974",index:38},{hex:"#3FA16A",index:39},{hex:"#217C61",index:40},{hex:"#185C55",index:41},{hex:"#B6C034",index:42},{hex:"#70A90B",index:43},{hex:"#439D13",index:44},{hex:"#DCB857",index:45},{hex:"#E5B103",index:46},{hex:"#E69102",index:47},{hex:"#F28831",index:48},{hex:"#FB8057",index:49},{hex:"#E28B58",index:50},{hex:"#D1593C",index:51},{hex:"#CE3120",index:52},{hex:"#AD0903",index:53},{hex:"#880302",index:54},{hex:"#1F1814",index:55},{hex:"#291F19",index:56},{hex:"#2E221B",index:57},{hex:"#37291E",index:58},{hex:"#2E2218",index:59},{hex:"#231B15",index:60},{hex:"#020202",index:61},{hex:"#706C66",index:62},{hex:"#9D7A50",index:63}],v0=[{hex:"#992532",index:0},{hex:"#c8395d",index:1},{hex:"#bd516c",index:2},{hex:"#b8637a",index:3},{hex:"#a6526b",index:4},{hex:"#b1434c",index:5},{hex:"#7f3133",index:6},{hex:"#a4645d",index:7},{hex:"#c18779",index:8},{hex:"#cba096",index:9},{hex:"#c6918f",index:10},{hex:"#ab6f63",index:11},{hex:"#b06050",index:12},{hex:"#a84c33",index:13},{hex:"#b47178",index:14},{hex:"#ca7f92",index:15},{hex:"#ed9cbe",index:16},{hex:"#e775a4",index:17},{hex:"#de3e81",index:18},{hex:"#b34c6e",index:19},{hex:"#712739",index:20},{hex:"#4f1f2a",index:21},{hex:"#aa222f",index:22},{hex:"#de2034",index:23},{hex:"#cf0813",index:24},{hex:"#e55470",index:25},{hex:"#dc3fb5",index:26},{hex:"#c227b2",index:27},{hex:"#a01ca9",index:28},{hex:"#6e1875",index:29},{hex:"#731465",index:30},{hex:"#56165c",index:31},{hex:"#6d1a9d",index:32},{hex:"#1b3771",index:33},{hex:"#1d4ea7",index:34},{hex:"#1e74bb",index:35},{hex:"#21a3ce",index:36},{hex:"#25c2d2",index:37},{hex:"#23cca5",index:38},{hex:"#27c07d",index:39},{hex:"#1b9c32",index:40},{hex:"#148604",index:41},{hex:"#70d041",index:42},{hex:"#c5ea34",index:43},{hex:"#e1e32f",index:44},{hex:"#ffdd26",index:45},{hex:"#fac026",index:46},{hex:"#f78a27",index:47},{hex:"#fe5910",index:48},{hex:"#be6e19",index:49},{hex:"#f7c97f",index:50},{hex:"#fbe5c0",index:51},{hex:"#f5f5f5",index:52},{hex:"#b3b4b3",index:53},{hex:"#919191",index:54},{hex:"#564e4e",index:55},{hex:"#180e0e",index:56},{hex:"#58969e",index:57},{hex:"#4d6f8c",index:58},{hex:"#1a2b55",index:59},{hex:"#a07e6b",index:60},{hex:"#826355",index:61},{hex:"#6d5346",index:62},{hex:"#3e2d27",index:63}],r8={colors_type_1:Tm,colors_type_2:v0,colors_type_3:v0},o8=b.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: relative;
`,i8=b.label`
  color: #ffffff;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`,a8=b.div`
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(230, 205, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 38px;
  position: relative;
  border-radius: 3px;
  cursor: pointer;
  padding: 0.25rem;
  transition: border-color 0.2s;

  &:hover {
    border-color: #e6cd00;
    background-color: rgba(0, 0, 0, 0.3);
  }
`,l8=b.div`
  background-color: ${({$bgColor:e})=>e};
  width: 100%;
  height: 100%;
  border-radius: 3px;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.4);
`,s8=b.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
`,u8=b.ul`
  background-color: rgba(10, 10, 10, 0.98);
  border: 1px solid rgba(230, 205, 0, 0.4);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.85);
  width: 100%;
  padding: 0.8rem;
  position: absolute;
  top: 45px;
  border-radius: 4px;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.35rem;
  max-height: 220px;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 9999;
`,c8=b.li`
  background-color: ${({$bgColor:e})=>e};
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 3px;
  cursor: pointer;
  border: ${({$active:e})=>e?"2px solid #e6cd00":"1px solid rgba(255, 255, 255, 0.15)"};
  transition: transform 0.1s, border-color 0.1s;

  &:hover {
    transform: scale(1.15);
    border-color: #e6cd00;
  }
`,Vn=({label:e,value:t,paletteType:n="colors_type_1",onChange:r})=>{const[o,i]=y.exports.useState(!1),a=r8[n]||Tm,l=a[t]||a[0],s=l?l.hex:"#1C1F21";return C(o8,{children:[u(i8,{children:e}),u(a8,{onClick:()=>i(c=>!c),children:u(l8,{$bgColor:s})}),o&&C(Tt,{children:[u(s8,{onClick:()=>i(!1)}),u(u8,{children:a.map((c,d)=>u(c8,{$bgColor:c.hex,$active:c.index===t,onClick:()=>{r(c.index,c.color_type),i(!1)}},`${c.index}-${d}`))})]})]})},d8=b.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: rgba(14, 14, 14, 0.96);
  border: 1px solid rgba(230, 205, 0, 0.4);
  width: 300px;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7);
  z-index: 50;
  contain: content;
  animation: fadeIn 0.15s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,f8=({hasMainColor:e,mainColor:t=0,onMainColorChange:n,colorPickerType:r="colors_type_1",hasSecondaryColor:o,secondaryColor:i=0,onSecondaryColorChange:a,hasOpacity:l,opacity:s=1,onOpacityChange:c,hasVariation:d,variation:p=0,maxVariation:g=0,onVariationChange:v})=>C(d8,{children:[e&&n&&u(Vn,{label:"Cor 1",value:t,paletteType:r,onChange:n}),o&&a&&u(Vn,{label:"Cor 2",value:i,paletteType:r,onChange:a}),l&&c&&u(Bt,{label:"Opacidade",min:0,max:1,step:.01,ruler:!0,value:s,setValue:c}),d&&v&&g>0&&u(Bt,{label:"Varia\xE7\xE3o",min:0,max:g,step:1,ruler:!0,value:p,setValue:v})]});var Mm=on.memo(f8),p8="./assets/jaquetas.04e7ddf1.png",h8="./assets/camisas.3e223525.png",m8="./assets/calcas.7c68322e.png",g8="./assets/acessorios.a0f89721.png",x8="./assets/maos.a1110074.png",v8="./assets/chapeus.1135f178.png",y8="./assets/oculos.1c3af2ba.png",b8="./assets/sapatos.e16f3a59.png",w8="./assets/mochilas.5274b475.png",C8="./assets/brincos.ba639b63.png",k8="./assets/adesivos.4b65982e.png",S8="./assets/coletes.388765f1.png",E8="./assets/mascaras.c95a2390.png",$8="./assets/pulseiras.2959d6f2.png",A8="./assets/relogios.a177f377.png";const y0=b.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  user-select: none;
  box-sizing: border-box;
`,Pa=b.div`
  display: flex;
  gap: 8px;
  width: 100%;
`,vt=b.button`
  position: relative;
  height: ${({$height:e})=>e||"92px"};
  flex: ${({$flex:e})=>e!==void 0?e:1};
  min-width: 0;
  background: #121318;
  border: 1.5px solid ${({$active:e})=>e?"#E5C058":"rgba(229, 192, 88, 0.38)"};
  box-shadow: ${({$active:e})=>e?"0 0 18px rgba(229, 192, 88, 0.5), inset 0 0 10px rgba(229, 192, 88, 0.2)":"0 4px 14px rgba(0, 0, 0, 0.6)"};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
  outline: none;

  &:hover {
    border-color: #F5D77F;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8), 0 0 18px rgba(229, 192, 88, 0.45);

    img {
      transform: scale(1.04);
      filter: brightness(1.02);
    }
  }

  &:active {
    transform: translateY(0);
  }
`,yt=b.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease;
  filter: brightness(0.9);
`,bt=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.08) 0%,
    rgba(0, 0, 0, 0.25) 50%,
    rgba(10, 11, 15, 0.92) 100%
  );
  pointer-events: none;
  z-index: 1;
`,wt=b.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
  pointer-events: none;
`,Ct=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 14px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.95));

  svg {
    width: 15px;
    height: 15px;
  }
`,kt=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background: #E5C058;
    box-shadow: 0 0 8px rgba(229, 192, 88, 0.85);
  }
`,St=b.span`
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.95);
  line-height: 1;
`,O8=({page:e,onSelectCategory:t,activeCategoryId:n})=>e===1?C(y0,{children:[C(Pa,{children:[C(vt,{$height:"132px",$active:n==="comp_11",onClick:()=>t("comp_11"),children:[u(yt,{src:p8,alt:"Jaquetas"}),u(bt,{}),C(wt,{children:[u(Ct,{children:u(A2,{})}),u(kt,{children:u(St,{children:"JAQUETAS"})})]})]}),C(vt,{$height:"132px",$active:n==="comp_8",onClick:()=>t("comp_8"),children:[u(yt,{src:h8,alt:"Camisas"}),u(bt,{}),C(wt,{children:[u(Ct,{children:u(Id,{})}),u(kt,{children:u(St,{children:"CAMISAS"})})]})]})]}),C("div",{style:{display:"flex",gap:"8px",width:"100%"},children:[C(vt,{$height:"228px",$flex:"0.95",$active:n==="comp_4",onClick:()=>t("comp_4"),children:[u(yt,{src:m8,alt:"Cal\xE7as"}),u(bt,{}),C(wt,{children:[u(Ct,{children:u(w2,{})}),u(kt,{children:u(St,{children:"CAL\xC7AS"})})]})]}),C("div",{style:{display:"flex",flexDirection:"column",gap:"8px",flex:"2.05",minWidth:0},children:[C(vt,{$height:"110px",$flex:"none",$active:n==="comp_7",onClick:()=>t("comp_7"),children:[u(yt,{src:g8,alt:"Acess\xF3rios"}),u(bt,{}),C(wt,{children:[u(Ct,{children:u(S2,{})}),u(kt,{children:u(St,{children:"ACESS\xD3RIOS"})})]})]}),C(Pa,{children:[C(vt,{$height:"110px",$active:n==="comp_3",onClick:()=>t("comp_3"),children:[u(yt,{src:x8,alt:"M\xE3os"}),u(bt,{}),C(wt,{children:[u(Ct,{children:u(b2,{})}),u(kt,{children:u(St,{style:{fontSize:"9px"},children:"M\xC3OS"})})]})]}),C(vt,{$height:"110px",$active:n==="prop_0",onClick:()=>t("prop_0"),children:[u(yt,{src:v8,alt:"Chap\xE9us"}),u(bt,{}),C(wt,{children:[u(Ct,{children:u(O2,{})}),u(kt,{children:u(St,{style:{fontSize:"9px"},children:"CHAP\xC9US"})})]})]}),C(vt,{$height:"110px",$active:n==="prop_1",onClick:()=>t("prop_1"),children:[u(yt,{src:y8,alt:"\xD3culos"}),u(bt,{}),C(wt,{children:[u(Ct,{children:u(T2,{})}),u(kt,{children:u(St,{style:{fontSize:"9px"},children:"\xD3CULOS"})})]})]})]})]})]}),C(vt,{$height:"130px",$flex:"none",$active:n==="comp_6",onClick:()=>t("comp_6"),children:[u(yt,{src:b8,alt:"Sapatos"}),u(bt,{}),C(wt,{children:[u(Ct,{children:u(k2,{})}),u(kt,{children:u(St,{children:"SAPATOS"})})]})]})]}):u(y0,{children:C("div",{style:{display:"flex",flexDirection:"row",gap:"8px",width:"100%"},children:[C("div",{style:{display:"flex",flexDirection:"column",gap:"8px",flex:"0.95",minWidth:0},children:[C(vt,{$height:"249px",$flex:"none",$active:n==="comp_5",onClick:()=>t("comp_5"),children:[u(yt,{src:w8,alt:"Mochilas"}),u(bt,{}),C(wt,{children:[u(Ct,{children:u(C2,{})}),u(kt,{children:u(St,{children:"MOCHILAS"})})]})]}),C(vt,{$height:"249px",$flex:"none",$active:n==="comp_1",onClick:()=>t("comp_1"),children:[u(yt,{src:E8,alt:"M\xE1scaras"}),u(bt,{}),C(wt,{children:[u(Ct,{children:u(y2,{})}),u(kt,{children:u(St,{children:"M\xC1SCARAS"})})]})]})]}),C("div",{style:{display:"flex",flexDirection:"column",gap:"8px",flex:"1.5",minWidth:0},children:[C(Pa,{children:[C(vt,{$height:"145px",$active:n==="prop_2",onClick:()=>t("prop_2"),children:[u(yt,{src:C8,alt:"Brincos"}),u(bt,{}),C(wt,{children:[u(Ct,{children:u(M2,{})}),u(kt,{children:u(St,{style:{fontSize:"9px"},children:"BRINCOS"})})]})]}),C(vt,{$height:"145px",$active:n==="comp_10",onClick:()=>t("comp_10"),children:[u(yt,{src:k8,alt:"Adesivos"}),u(bt,{}),C(wt,{children:[u(Ct,{children:u($2,{})}),u(kt,{children:u(St,{style:{fontSize:"9px"},children:"ADESIVOS"})})]})]})]}),C(vt,{$height:"198px",$flex:"none",$active:n==="comp_9",onClick:()=>t("comp_9"),children:[u(yt,{src:S8,alt:"Coletes"}),u(bt,{}),C(wt,{children:[u(Ct,{children:u(E2,{})}),u(kt,{children:u(St,{children:"COLETES"})})]})]}),C(Pa,{children:[C(vt,{$height:"147px",$active:n==="prop_7",onClick:()=>t("prop_7"),children:[u(yt,{src:$8,alt:"Pulseiras"}),u(bt,{}),C(wt,{children:[u(Ct,{children:u(_2,{})}),u(kt,{children:u(St,{style:{fontSize:"9px"},children:"PULSEIRAS"})})]})]}),C(vt,{$height:"147px",$active:n==="prop_6",onClick:()=>t("prop_6"),children:[u(yt,{src:A8,alt:"Rel\xF3gios"}),u(bt,{}),C(wt,{children:[u(Ct,{children:u(P2,{})}),u(kt,{children:u(St,{style:{fontSize:"9px"},children:"REL\xD3GIOS"})})]})]})]})]})]})}),T8=b.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px 12px 20px;
  background: rgba(14, 15, 20, 0.96);
  border-bottom: 1.5px solid rgba(229, 192, 88, 0.35);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 12px rgba(229, 192, 88, 0.08);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-sizing: border-box;
  user-select: none;
`,b0=b.div`
  display: flex;
  align-items: center;
  gap: 3px;
  background: rgba(20, 22, 28, 0.9);
  border: 1px solid rgba(229, 192, 88, 0.3);
  border-radius: 9999px;
  padding: 2px 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
`,_a=b.button`
  background: transparent;
  border: none;
  color: rgba(229, 192, 88, 0.75);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.15s ease;
  outline: none;

  &:hover {
    color: #ffffff;
    background: rgba(229, 192, 88, 0.25);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`,w0=b.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({$active:e})=>e?"radial-gradient(circle, #f5d77f 0%, #e5c058 100%)":"rgba(30, 32, 40, 0.95)"};
  border: 1.5px solid ${({$active:e})=>e?"#ffffff":"rgba(229, 192, 88, 0.5)"};
  color: ${({$active:e})=>e?"#111111":"#E5C058"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  transition: all 0.15s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5), ${({$active:e})=>e?"0 0 14px rgba(229, 192, 88, 0.5)":"none"};

  &:hover {
    border-color: #f5d77f;
    transform: scale(1.06);
    color: ${({$active:e})=>e?"#111111":"#ffffff"};
  }
`,M8=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1;
  cursor: default;
  gap: 1px;
`,P8=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #E5C058;
  text-transform: uppercase;
`,_8=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: linear-gradient(180deg, #FFFFFF 0%, #F5D77F 42%, #D4AF37 75%, #996515 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.9));
`,I8=({cameraType:e,onPrevCamera:t,onNextCamera:n,onToggleCamera:r,hasCustomization:o=!0,isCustomizationOpen:i=!1,onToggleCustomization:a,onPrevVariation:l,onNextVariation:s})=>C(T8,{children:[C(b0,{children:[u(_a,{onClick:t,title:"C\xE2mera Anterior",children:u(br,{size:16})}),u(w0,{onClick:r,title:`Foco de C\xE2mera: ${e}`,$active:e!=="default",children:u($y,{size:15})}),u(_a,{onClick:n,title:"Pr\xF3xima C\xE2mera",children:u(Hn,{size:16})})]}),C(M8,{children:[u(P8,{children:"LOJA DE"}),u(_8,{children:"ROUPAS"})]}),C(b0,{children:[u(_a,{onClick:l,title:"Varia\xE7\xE3o de Textura Anterior",children:u(br,{size:16})}),u(w0,{onClick:a,$active:i,title:"Varia\xE7\xF5es de Textura & Cores",children:u(Sy,{size:15})}),u(_a,{onClick:s,title:"Pr\xF3xima Varia\xE7\xE3o de Textura",children:u(Hn,{size:16})})]})]}),R8=b.footer`
  width: 100%;
  padding: 12px 16px 14px 16px;
  background: rgba(14, 15, 20, 0.96);
  border-top: 1.5px solid rgba(229, 192, 88, 0.25);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  box-sizing: border-box;
  user-select: none;
`,z8=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`,L8=b.div`
  display: flex;
  align-items: center;
  background: rgba(22, 24, 32, 0.9);
  border: 1px solid rgba(229, 192, 88, 0.3);
  border-radius: 9999px;
  padding: 3px 8px;
  gap: 4px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
`,C0=b.button`
  background: transparent;
  border: none;
  color: rgba(229, 192, 88, 0.7);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.15s ease;
  outline: none;

  &:hover {
    color: #ffffff;
    background: rgba(229, 192, 88, 0.2);
  }

  &:active {
    transform: scale(0.9);
  }
`,k0=b.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.5px;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 3px 8px;
  border-radius: 9999px;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);

  ${({$active:e})=>e?`
    background: rgba(229, 192, 88, 0.2);
    border: 1.5px solid #E5C058;
    color: #ffffff;
    box-shadow: 0 0 12px rgba(229, 192, 88, 0.45);
  `:`
    background: transparent;
    border: 1.5px solid transparent;
    color: rgba(255, 255, 255, 0.4);

    &:hover {
      color: #E5C058;
      background: rgba(255, 255, 255, 0.05);
    }
  `}
`,D8=b.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,S0=b.div`
  height: 3px;
  border-radius: 9999px;
  transition: all 0.25s ease;

  ${({$active:e})=>e?`
    width: 14px;
    background: #E5C058;
    box-shadow: 0 0 8px rgba(229, 192, 88, 0.6);
  `:`
    width: 6px;
    background: rgba(255, 255, 255, 0.2);
  `}
`,F8=b.button`
  height: 40px;
  padding: 0 20px;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(38, 30, 18, 0.95), rgba(20, 16, 10, 0.98));
  border: 1.5px solid #E5C058;
  box-shadow: 0 0 20px rgba(229, 192, 88, 0.35), inset 0 0 10px rgba(229, 192, 88, 0.15);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  outline: none;

  svg {
    color: #E5C058;
    transition: transform 0.2s ease;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(55, 44, 25, 0.98), rgba(30, 24, 15, 0.98));
    border-color: #F5D77F;
    box-shadow: 0 0 26px rgba(229, 192, 88, 0.55), inset 0 0 14px rgba(229, 192, 88, 0.25);
    transform: translateY(-1px);

    svg {
      transform: translateX(-2px);
    }
  }

  &:active {
    transform: scale(0.96);
  }
`,N8=b.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
`,fu=b.button`
  flex: 1;
  height: clamp(40px, 5.2vh, 46px);
  padding: 0 clamp(8px, 1vw, 14px);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(10.5px, 1.35vh, 12px);
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-sizing: border-box;

  ${({$variant:e})=>e==="gold"?`
    background: linear-gradient(135deg, #F5D77F 0%, #E5C058 50%, #C8A135 100%);
    border: 1.5px solid #F5D77F;
    color: #111111;
    box-shadow: 0 4px 18px rgba(229, 192, 88, 0.4);

    svg {
      color: #111111;
      stroke-width: 3px;
    }

    &:hover {
      background: linear-gradient(135deg, #ffffff 0%, #F5D77F 50%, #E5C058 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 22px rgba(229, 192, 88, 0.6);
    }
  `:`
    background: rgba(16, 18, 24, 0.95);
    border: 1.5px solid rgba(229, 192, 88, 0.38);
    color: #E5C058;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6);

    svg {
      color: #E5C058;
    }

    &:hover {
      background: rgba(26, 28, 38, 0.98);
      border-color: #F5D77F;
      color: #ffffff;
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.8), 0 0 14px rgba(229, 192, 88, 0.3);

      svg {
        color: #ffffff;
      }
    }
  `}

  &:active {
    transform: translateY(0);
  }
`,V8=({page:e,onPageChange:t,isDetailView:n=!1,onBackToMosaic:r,onExit:o,onSave:i})=>u(R8,{children:n?C(N8,{children:[C(fu,{$variant:"dark",onClick:r,title:"Voltar para Categorias",children:[u(br,{size:16}),u("span",{children:"CATEGORIAS"})]}),C(fu,{$variant:"dark",onClick:o,title:"Sair da Loja de Roupas",children:[u(gc,{size:16}),u("span",{children:"SAIR"})]}),i&&C(fu,{$variant:"gold",onClick:i,title:"Salvar e Aplicar Roupa",children:[u(Qi,{size:16}),u("span",{children:"SALVAR"})]})]}):C(Tt,{children:[C(z8,{children:[C(L8,{children:[u(C0,{onClick:()=>t(e===1?2:1),title:"P\xE1gina Anterior",children:u(br,{size:16})}),u(k0,{$active:e===1,onClick:()=>t(1),children:"01"}),u(k0,{$active:e===2,onClick:()=>t(2),children:"02"}),u(C0,{onClick:()=>t(e===1?2:1),title:"Pr\xF3xima P\xE1gina",children:u(Hn,{size:16})})]}),C(D8,{children:[u(S0,{$active:e===1}),u(S0,{$active:e===2})]})]}),C(F8,{onClick:o,children:[u(gc,{size:18}),"VOLTAR"]})]})}),B8=b.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1.1vh, 12px);
  box-sizing: border-box;
  padding: 4px 2px;
  overflow: hidden;
`,j8=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  padding: 2px 2px;
  box-sizing: border-box;
  flex-shrink: 0;
`,H8=b.div`
  display: flex;
  align-items: center;
  gap: clamp(8px, 1vw, 12px);
  min-width: 0;
`,U8=b.button`
  width: clamp(34px, 4.8vh, 40px);
  height: clamp(34px, 4.8vh, 40px);
  border-radius: 12px;
  background: rgba(18, 20, 26, 0.95);
  border: 1.5px solid rgba(229, 192, 88, 0.45);
  color: #E5C058;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6);

  &:hover {
    border-color: #F5D77F;
    background: rgba(229, 192, 88, 0.2);
    color: #ffffff;
    transform: translateX(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.8), 0 0 14px rgba(229, 192, 88, 0.35);
  }

  &:active {
    transform: scale(0.95);
  }
`,W8=b.div`
  font-size: clamp(24px, 3.4vh, 32px);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.8));
`,G8=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  gap: 2px;
`,Y8=b.h2`
  font-family: 'Cinzel', 'Playfair Display', 'Montserrat', serif;
  font-size: clamp(17px, 2.4vh, 22px);
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;
  line-height: 1.05;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
`,Z8=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(7px, 0.95vh, 8.5px);
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: rgba(229, 192, 88, 0.85);
  white-space: nowrap;
`,Q8=b.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: clamp(5px, 0.7vh, 7px) clamp(10px, 1.2vw, 14px);
  background: rgba(22, 24, 32, 0.92);
  border: 1.5px solid rgba(229, 192, 88, 0.4);
  border-radius: 9999px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;

  span {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(9px, 1.2vh, 11px);
    font-weight: 800;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: #ffffff;
    white-space: nowrap;
  }
`,X8=b.div`
  color: #E5C058;
  font-size: clamp(13px, 1.7vh, 15px);
  display: flex;
  align-items: center;
  justify-content: center;
`,K8=b.form`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
`,q8=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  height: clamp(34px, 4.6vh, 40px);
  background: rgba(18, 20, 26, 0.95);
  border: 1.5px solid rgba(229, 192, 88, 0.35);
  border-radius: 10px;
  padding: 0 12px;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &:focus-within {
    border-color: #E5C058;
    box-shadow: 0 0 12px rgba(229, 192, 88, 0.3);
    background: rgba(24, 26, 34, 0.98);
  }
`,J8=b.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(10px, 1.3vh, 12px);
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;

  &::placeholder {
    color: rgba(255, 255, 255, 0.38);
    font-weight: 600;
  }
`,ew=b.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: clamp(34px, 4.6vh, 40px);
  padding: 0 clamp(16px, 1.8vw, 24px);
  background: linear-gradient(135deg, #F5D77F 0%, #E5C058 50%, #C8A135 100%);
  border: 1.5px solid #F5D77F;
  border-radius: 10px;
  color: #111111;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(11px, 1.4vh, 13px);
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 14px rgba(229, 192, 88, 0.35);

  &:hover {
    background: linear-gradient(135deg, #ffffff 0%, #F5D77F 50%, #E5C058 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(229, 192, 88, 0.55);
  }

  &:active {
    transform: translateY(0);
  }
`,tw=b.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`,E0=({categoryTitle:e,categoryIcon:t,totalItems:n=0,onBack:r,onSearchSubmit:o,children:i})=>{const[a,l]=y.exports.useState("");return C(B8,{children:[C(j8,{children:[C(H8,{children:[u(U8,{onClick:r,title:"Voltar para Categorias",children:u(br,{size:20})}),t&&u(W8,{children:t}),C(G8,{children:[u(Y8,{children:e}),u(Z8,{children:"SELECIONE UMA PE\xC7A PARA EXPERIMENTAR"})]})]}),C(Q8,{children:[u(X8,{children:u(Id,{})}),C("span",{children:[n," ITENS"]})]})]}),C(K8,{onSubmit:c=>{c.preventDefault();const d=parseInt(a.trim(),10);!isNaN(d)&&d>=0&&o(d)},children:[C(q8,{children:[u(_d,{size:15,color:"#E5C058"}),u(J8,{type:"text",placeholder:"BUSCAR POR ID",value:a,onChange:c=>l(c.target.value)})]}),u(ew,{type:"submit",children:"IR"})]}),u(tw,{children:i})]})};b.div`

  position: fixed;

  left: ${T(12)};

  top: 50%;

  transform: translateY(-50%);

  z-index: 1001;

  width: ${T(56)};

  padding: ${T(10)} ${T(8)};

  background: ${({theme:e})=>`rgb(${e.primaryBackground||"26, 27, 30"})`};

  border: 1px solid ${({theme:e})=>`rgb(${e.borderColor||"44, 46, 51"})`};

  border-radius: ${T(12)};

  box-shadow: 0 ${T(4)} ${T(20)} rgba(0, 0, 0, 0.5);

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: ${T(6)};

  font-family: 'Nexa-Book', sans-serif;

`;b.button`

  width: ${T(38)};

  height: ${T(38)};

  flex-shrink: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 0;

  background: ${({active:e,theme:t})=>e?`rgba(${t.accentColor||"66, 140, 255"}, 0.2)`:"rgba(255, 255, 255, 0.05)"};

  border: 1px solid

    ${({active:e,theme:t})=>e?`rgb(${t.accentColor||"66, 140, 255"})`:`rgb(${t.borderColor||"44, 46, 51"})`};

  border-radius: ${T(6)};

  color: ${({active:e,theme:t})=>e?`rgb(${t.accentColor||"66, 140, 255"})`:`rgb(${t.fontColor||"193, 194, 197"})`};

  cursor: pointer;

  transition: all 0.2s ease;

  font-family: 'Nexa-Book', sans-serif;



  svg {

    width: ${T(16)};

    height: ${T(16)};

    flex-shrink: 0;

  }



  &:hover {

    background: ${({active:e,theme:t})=>e?`rgba(${t.accentColor||"66, 140, 255"}, 0.2)`:"rgba(255, 255, 255, 0.1)"};

    border-color: ${({theme:e})=>`rgb(${e.accentColor||"66, 140, 255"})`};

    color: ${({theme:e})=>`rgb(${e.accentColor||"66, 140, 255"})`};

  }

`;b.div`

  width: ${T(32)};

  height: ${T(1)};

  flex-shrink: 0;

  background: ${({theme:e})=>`rgb(${e.borderColor||"44, 46, 51"})`};

  margin: ${T(2)} 0;

`;function xs(e,t,n={}){return r=>u("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:e,height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",...n,...r,children:t})}const nw=xs("0 0 24 24",C("g",{fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[u("circle",{cx:"6",cy:"6",r:"3"}),u("circle",{cx:"6",cy:"18",r:"3"}),u("line",{x1:"20",y1:"4",x2:"8.12",y2:"15.88"}),u("line",{x1:"14.47",y1:"14.48",x2:"20",y2:"20"}),u("line",{x1:"8.12",y1:"8.12",x2:"12",y2:"12"})]})),rw=()=>C("svg",{width:"22",height:"34",viewBox:"0 0 24 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[C("defs",{children:[C("linearGradient",{id:"poleGlow",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u("stop",{offset:"0%",stopColor:"#888",stopOpacity:"0.4"}),u("stop",{offset:"50%",stopColor:"#FFF",stopOpacity:"0.9"}),u("stop",{offset:"100%",stopColor:"#444",stopOpacity:"0.6"})]}),C("linearGradient",{id:"goldCap",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u("stop",{offset:"0%",stopColor:"#FFE082"}),u("stop",{offset:"50%",stopColor:"#D4AF37"}),u("stop",{offset:"100%",stopColor:"#997A15"})]}),C("pattern",{id:"barberStripes",width:"12",height:"12",patternTransform:"rotate(45 0 0)",patternUnits:"userSpaceOnUse",children:[u("line",{x1:"0",y1:"0",x2:"0",y2:"12",stroke:"#E53935",strokeWidth:"3"}),u("line",{x1:"3",y1:"0",x2:"3",y2:"12",stroke:"#FFFFFF",strokeWidth:"3"}),u("line",{x1:"6",y1:"0",x2:"6",y2:"12",stroke:"#1E88E5",strokeWidth:"3"}),u("line",{x1:"9",y1:"0",x2:"9",y2:"12",stroke:"#FFFFFF",strokeWidth:"3"})]})]}),u("ellipse",{cx:"12",cy:"4",rx:"6",ry:"3",fill:"url(#goldCap)"}),u("rect",{x:"7",y:"5",width:"10",height:"2",fill:"url(#goldCap)"}),u("rect",{x:"7",y:"7",width:"10",height:"24",rx:"1",fill:"url(#barberStripes)"}),u("rect",{x:"7",y:"7",width:"10",height:"24",rx:"1",fill:"url(#poleGlow)",style:{mixBlendMode:"overlay"}}),u("rect",{x:"7",y:"7",width:"10",height:"24",rx:"1",stroke:"rgba(255,255,255,0.4)",strokeWidth:"0.8"}),u("rect",{x:"7",y:"31",width:"10",height:"2",fill:"url(#goldCap)"}),u("ellipse",{cx:"12",cy:"34",rx:"6",ry:"3",fill:"url(#goldCap)"})]}),ow=xs("0 0 24 24",u("path",{fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",d:"M9 18l6-6-6-6"})),Pm=xs("0 0 24 24",u("path",{fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",d:"M15 18l-6-6 6-6"})),iw=xs("0 0 24 24",C("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[u("line",{x1:"4",y1:"21",x2:"4",y2:"14"}),u("line",{x1:"4",y1:"10",x2:"4",y2:"3"}),u("line",{x1:"12",y1:"21",x2:"12",y2:"12"}),u("line",{x1:"12",y1:"8",x2:"12",y2:"3"}),u("line",{x1:"20",y1:"21",x2:"20",y2:"16"}),u("line",{x1:"20",y1:"12",x2:"20",y2:"3"}),u("line",{x1:"1",y1:"14",x2:"7",y2:"14"}),u("line",{x1:"9",y1:"8",x2:"15",y2:"8"}),u("line",{x1:"17",y1:"16",x2:"23",y2:"16"})]})),aw=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: clamp(8px, 1.1vh, 12px) clamp(12px, 1.4vw, 16px);
  background: rgba(14, 15, 20, 0.94);
  border: 1.5px solid rgba(229, 192, 88, 0.35);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7), 0 0 16px rgba(229, 192, 88, 0.08);
  box-sizing: border-box;
  user-select: none;
  gap: 10px;
  flex-shrink: 0;
`,lw=b.div`
  display: flex;
  align-items: center;
  gap: clamp(8px, 1vw, 12px);
  min-width: 0;
`,sw=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(32px, 4.2vh, 38px);
  height: clamp(32px, 4.2vh, 38px);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(229, 192, 88, 0.22) 0%, rgba(20, 22, 28, 0.95) 100%);
  border: 1.5px solid rgba(229, 192, 88, 0.55);
  box-shadow: 0 0 12px rgba(229, 192, 88, 0.28);
  color: #e5c058;
  font-size: clamp(16px, 2.2vh, 20px);
  flex-shrink: 0;
`,uw=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  min-width: 0;
`,cw=b.h1`
  font-family: 'Cinzel', 'Playfair Display', 'Georgia', serif;
  font-size: clamp(16px, 2.2vh, 20px);
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.05;
  background: linear-gradient(180deg, #ffffff 0%, #f7df99 45%, #d4af37 80%, #996515 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.9));
  white-space: nowrap;
`,dw=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(6.5px, 0.85vh, 7.5px);
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #e5c058;
  opacity: 0.9;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,fw=b.div`
  display: flex;
  align-items: center;
  gap: 6px;
  text-align: right;
  flex-shrink: 0;
`,pw=b.div`
  font-size: clamp(14px, 2vh, 18px);
  color: #e5c058;
  display: flex;
  align-items: center;
  justify-content: center;
`,hw=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0px;
`,mw=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(6.5px, 0.9vh, 8px);
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #ffffff;
`,gw=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(5.5px, 0.75vh, 7px);
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: rgba(229, 192, 88, 0.8);
`,xw=()=>C(aw,{children:[C(lw,{children:[u(sw,{children:u(nw,{})}),C(uw,{children:[u(cw,{children:"BARBEARIA"}),u(dw,{children:"ESTILO \xC9 UMA FORMA DE IDENTIDADE"})]})]}),C(fw,{children:[u(pw,{children:u(rw,{})}),C(hw,{children:[u(mw,{children:"NOVO ESTILO"}),u(gw,{children:"MAIS HIST\xD3RIAS"})]})]})]});var vw="./assets/cabelo.33287a7b.png",yw="./assets/sobrancelhas.9fb89850.png",bw="./assets/olhos.e3db5428.png",ww="./assets/barba.3a2f0e60.png",Cw="./assets/maquiagens.da98e07c.png",kw="./assets/pele.70ba0e0f.png",Sw="./assets/pelo_corporal.6b28e931.png";const Ew=b.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: clamp(4px, 0.8vh, 8px);
  user-select: none;
  box-sizing: border-box;
  overflow: hidden;
`,$w=b.div`
  display: flex;
  align-items: center;
  gap: clamp(6px, 0.8vw, 10px);
  padding: 0 2px;
  flex-shrink: 0;
  height: clamp(20px, 3vh, 26px);
`,Aw=b.span`
  font-family: 'Cinzel', 'Playfair Display', 'Montserrat', serif;
  font-size: clamp(12px, 1.6vh, 14.5px);
  font-weight: 900;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: #e5c058;
  white-space: nowrap;
`,Ow=b.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,Tw=b.div`
  height: 1px;
  width: clamp(18px, 2vw, 26px);
  background: linear-gradient(90deg, rgba(229, 192, 88, 0.6) 0%, rgba(229, 192, 88, 0.1) 100%);
  flex-shrink: 0;
`,Mw=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(7px, 0.95vh, 8.5px);
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Pw=b.div`
  display: flex;
  flex-direction: column;
  gap: clamp(4px, 0.7vh, 7px);
  width: 100%;
  flex: 1;
  min-height: 0;
  justify-content: space-between;
`,$0=b.div`
  display: flex;
  gap: clamp(4px, 0.7vh, 7px);
  width: 100%;
  flex: 1;
  min-height: 0;
`,Bn=b.button`
  position: relative;
  height: 100%;
  min-height: clamp(38px, 5.4vh, 52px);
  flex: ${({$flex:e})=>e||1};
  background: #14151b;
  border: 1.5px solid ${({$active:e})=>e?"#e5c058":"rgba(229, 192, 88, 0.25)"};
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
  outline: none;
  box-shadow: ${({$active:e})=>e?"0 0 14px rgba(229, 192, 88, 0.35), 0 3px 10px rgba(0, 0, 0, 0.6)":"0 3px 10px rgba(0, 0, 0, 0.5)"};

  &:hover {
    border-color: #e5c058;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.7), 0 0 14px rgba(229, 192, 88, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`,Ar=b.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
  display: block;
  border-radius: 9px;
  transition: transform 0.25s ease, filter 0.25s ease;

  ${Bn}:hover & {
    transform: scale(1.02);
    filter: brightness(1.06);
  }
`,Or=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 80% 50%, rgba(229, 192, 88, 0.08) 0%, transparent 60%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${Bn}:hover & {
    opacity: 1;
  }
`,_w=({onSelectCategory:e,activeCategoryId:t})=>C(Ew,{children:[C($w,{children:[u(Aw,{children:"CATEGORIAS"}),C(Ow,{children:[u(Tw,{}),u(Mw,{children:"ESCOLHA O QUE DESEJA PERSONALIZAR"})]})]}),C(Pw,{children:[C(Bn,{$active:t==="hair",onClick:()=>e("hair"),"aria-label":"Cabelo \u2014 Corte, estilo e cor",children:[u(Ar,{src:vw,alt:"Cabelo \u2014 Corte, estilo e cor"}),u(Or,{})]}),C($0,{children:[C(Bn,{$active:t==="eyebrows",onClick:()=>e("eyebrows"),"aria-label":"Sobrancelhas \u2014 Formato e cor",children:[u(Ar,{src:yw,alt:"Sobrancelhas \u2014 Formato e cor"}),u(Or,{})]}),C(Bn,{$active:t==="eyes",onClick:()=>e("eyes"),"aria-label":"Olhos \u2014 Cor, \xEDris e detalhes",children:[u(Ar,{src:bw,alt:"Olhos \u2014 Cor, \xEDris e detalhes"}),u(Or,{})]})]}),C(Bn,{$active:t==="beard",onClick:()=>e("beard"),"aria-label":"Barba \u2014 Estilo e densidade",children:[u(Ar,{src:ww,alt:"Barba \u2014 Estilo e densidade"}),u(Or,{})]}),C($0,{children:[C(Bn,{$active:t==="makeUp",onClick:()=>e("makeUp"),"aria-label":"Maquiagens \u2014 Sombras, batons e mais",children:[u(Ar,{src:Cw,alt:"Maquiagens \u2014 Sombras, batons e mais"}),u(Or,{})]}),C(Bn,{$active:t==="skin",onClick:()=>e("skin"),"aria-label":"Pele \u2014 Tons, textura e detalhes",children:[u(Ar,{src:kw,alt:"Pele \u2014 Tons, textura e detalhes"}),u(Or,{})]})]}),C(Bn,{$active:t==="chestHair",onClick:()=>e("chestHair"),"aria-label":"Pelo Corporal \u2014 Intensidade e estilo",children:[u(Ar,{src:Sw,alt:"Pelo Corporal \u2014 Intensidade e estilo"}),u(Or,{})]})]})]}),Ia=[{index:0,label:"Verde",hex:"#2E7D32"},{index:1,label:"Esmeralda",hex:"#00897B"},{index:2,label:"Azul Claro",hex:"#039BE5"},{index:3,label:"Azul Oceano",hex:"#1565C0"},{index:4,label:"Castanho Claro",hex:"#8D6E63"},{index:5,label:"Castanho M\xE9dio",hex:"#6D4C41"},{index:6,label:"Castanho Escuro",hex:"#3E2723"},{index:7,label:"Avel\xE3",hex:"#A1887F"},{index:8,label:"Cinza Escuro",hex:"#455A64"},{index:9,label:"Cinza Claro",hex:"#90A4AE"},{index:10,label:"Rosa",hex:"#EC407A"},{index:11,label:"Amarelo",hex:"#FDD835"},{index:12,label:"Roxo",hex:"#8E24AA"},{index:13,label:"Preto",hex:"#1A1A1A"},{index:14,label:"Verde Claro",hex:"#7CB342"},{index:15,label:"Azul Celeste",hex:"#00ACC1"},{index:16,label:"\xC2mbar",hex:"#FFB300"},{index:17,label:"Mel",hex:"#FB8C00"},{index:18,label:"Violeta",hex:"#5E35B1"},{index:19,label:"Rubi",hex:"#C2185B"},{index:20,label:"Ciano",hex:"#00E5FF"},{index:21,label:"Dourado",hex:"#FFD700"},{index:22,label:"Prata",hex:"#CFD8DC"},{index:23,label:"Turquesa",hex:"#26A69A"},{index:24,label:"Safira",hex:"#0D47A1"}],Iw=b.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  user-select: none;
`,Rw=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`,zw=b.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Lw=b.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(30, 32, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #e5c058;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;

  &:hover {
    background: #e5c058;
    color: #111111;
    transform: scale(1.05);
  }
`,Dw=b.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`,Fw=b.h2`
  margin: 0;
  padding: 0;
  font-family: 'Cinzel', 'Playfair Display', 'Montserrat', serif;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #ffffff;
`,Nw=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(229, 192, 88, 0.7);
`,A0=b.div`
  display: flex;
  gap: 6px;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 4px;

  &::-webkit-scrollbar {
    height: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(229, 192, 88, 0.3);
    border-radius: 3px;
  }
`,An=b.button`
  padding: 6px 14px;
  border-radius: 8px;
  background: ${({$active:e})=>e?"#e5c058":"rgba(26, 28, 36, 0.85)"};
  border: 1px solid ${({$active:e})=>e?"#e5c058":"rgba(255, 255, 255, 0.1)"};
  color: ${({$active:e})=>e?"#111111":"rgba(255, 255, 255, 0.75)"};
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    border-color: #e5c058;
    color: ${({$active:e})=>e?"#111111":"#ffffff"};
  }
`,Tr=b.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding-right: 4px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(229, 192, 88, 0.4);
    border-radius: 4px;
  }
`,Vt=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 14px;
  background: rgba(20, 22, 28, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
`,pu=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #e5c058;
`,Vw=b.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  width: 100%;
`,Bw=b.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 4px;
  background: ${({$active:e})=>e?"rgba(229, 192, 88, 0.15)":"rgba(28, 30, 40, 0.85)"};
  border: 1.5px solid ${({$active:e})=>e?"#e5c058":"rgba(255, 255, 255, 0.08)"};
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: #e5c058;
    transform: translateY(-2px);
  }
`,jw=b.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, ${({$color:e})=>e} 0%, #111111 100%);
  border: 2px solid ${({$active:e})=>e?"#ffffff":"rgba(255, 255, 255, 0.2)"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
`,Hw=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 9.5px;
  font-weight: 800;
  color: #ffffff;
`,Uw=({category:e,onBack:t,data:n,appearanceSettings:r,isMale:o,onHairChange:i,onHeadOverlayChange:a,onEyeColorChange:l})=>{var k,h,f,m,E,A,M;const[s,c]=y.exports.useState("makeUp"),[d,p]=y.exports.useState("blemishes"),[g,v]=y.exports.useState("primary"),x=y.exports.useRef(n.eyeColor);x.current=n.eyeColor,y.exports.useEffect(()=>{if(e!=="eyes")return;const S=_=>{var K;const P=_.target,R=(K=P==null?void 0:P.tagName)==null?void 0:K.toLowerCase();if(R==="input"||R==="textarea"||(P==null?void 0:P.isContentEditable))return;const D=_.key;if(D!=="ArrowUp"&&D!=="ArrowDown"&&D!=="ArrowLeft"&&D!=="ArrowRight")return;const U=Ia.length,Y=Ia.findIndex(F=>F.index===x.current);let j=Y===-1?0:Y;if(D==="ArrowLeft"){if(j<=0)return;j-=1}else if(D==="ArrowRight"){if(j>=U-1)return;j+=1}else if(D==="ArrowUp"){if(j-5<0)return;j-=5}else if(D==="ArrowDown"){if(j+5>=U)return;j+=5}j!==Y&&j>=0&&j<U&&(_.preventDefault(),l(Ia[j].index))};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[e,l]);const w={hair:{title:"CABELO",subtitle:"CORTE, ESTILO E COR"},eyebrows:{title:"SOBRANCELHAS",subtitle:"FORMATO E COR"},eyes:{title:"OLHOS",subtitle:"COR, \xCDRIS E DETALHES"},beard:{title:"BARBA",subtitle:"ESTILO E DENSIDADE"},makeUp:{title:"MAQUIAGENS",subtitle:"SOMBRAS, BATONS E MAIS"},skin:{title:"PELE",subtitle:"TONS, TEXTURA E DETALHES"},chestHair:{title:"PELO CORPORAL",subtitle:"INTENSIDADE E ESTILO"}};return C(Iw,{children:[u(Rw,{children:C(zw,{children:[u(Lw,{onClick:t,title:"Voltar para as Categorias",children:u(Pm,{})}),C(Dw,{children:[u(Fw,{children:w[e].title}),u(Nw,{children:w[e].subtitle})]})]})}),e==="hair"&&C(Tr,{children:[C(Vt,{children:[u(pu,{children:"ESTILO DO CORTE"}),u(Mi,{target:{kind:"component",id:2,gender:o?"male":"female"},min:r.hair.style.min,max:r.hair.style.max,selected:n.hair.style,blacklisted:(h=(k=r.hair.blacklist)==null?void 0:k.drawables)!=null?h:[],onSelect:S=>i("style",S)})]}),C(Vt,{children:[C("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u(pu,{children:"PALETA DE CORES"}),C("div",{style:{display:"flex",gap:"4px"},children:[u(An,{$active:g==="primary",onClick:()=>v("primary"),children:"COR PRIM\xC1RIA"}),u(An,{$active:g==="highlight",onClick:()=>v("highlight"),children:"MECHAS"})]})]}),g==="primary"?u(Vn,{label:"Cor Principal",paletteType:"colors_type_1",value:n.hair.color,onChange:S=>i("color",S)}):u(Vn,{label:"Cor das Mechas",paletteType:"colors_type_1",value:n.hair.highlight,onChange:S=>i("highlight",S)})]})]}),e==="eyebrows"&&C(Tr,{children:[C(Vt,{children:[u(Bt,{label:"Formato da Sobrancelha",min:r.headOverlays.eyebrows.style.min,max:r.headOverlays.eyebrows.style.max,value:n.headOverlays.eyebrows.style,setValue:S=>a("eyebrows","style",S)}),u(Bt,{label:"Densidade / Opacidade",min:0,max:1,step:.05,value:n.headOverlays.eyebrows.opacity,setValue:S=>a("eyebrows","opacity",S)})]}),u(Vt,{children:u(Vn,{label:"Cor da Sobrancelha",paletteType:"colors_type_1",value:(f=n.headOverlays.eyebrows.color)!=null?f:0,onChange:S=>a("eyebrows","color",S)})})]}),e==="eyes"&&u(Tr,{children:C(Vt,{children:[u(pu,{children:"COR DA \xCDRIS"}),u(Vw,{children:Ia.map(S=>C(Bw,{$active:n.eyeColor===S.index,onClick:()=>l(S.index),children:[u(jw,{$color:S.hex,$active:n.eyeColor===S.index}),u(Hw,{children:S.label})]},S.index))})]})}),e==="beard"&&C(Tr,{children:[C(Vt,{children:[u(Bt,{label:"Estilo da Barba",min:r.headOverlays.beard.style.min,max:r.headOverlays.beard.style.max,value:n.headOverlays.beard.style,setValue:S=>a("beard","style",S)}),u(Bt,{label:"Densidade / Volume",min:0,max:1,step:.05,value:n.headOverlays.beard.opacity,setValue:S=>a("beard","opacity",S)})]}),u(Vt,{children:u(Vn,{label:"Cor da Barba",paletteType:"colors_type_1",value:(m=n.headOverlays.beard.color)!=null?m:0,onChange:S=>a("beard","color",S)})})]}),e==="makeUp"&&C(Tr,{children:[C(A0,{children:[u(An,{$active:s==="makeUp",onClick:()=>c("makeUp"),children:"SOMBRA DOS OLHOS"}),u(An,{$active:s==="lipstick",onClick:()=>c("lipstick"),children:"BATOM"}),u(An,{$active:s==="blush",onClick:()=>c("blush"),children:"BLUSH"})]}),C(Vt,{children:[u(Bt,{label:`Estilo de ${s==="makeUp"?"Sombra":s==="lipstick"?"Batom":"Blush"}`,min:r.headOverlays[s].style.min,max:r.headOverlays[s].style.max,value:n.headOverlays[s].style,setValue:S=>a(s,"style",S)}),u(Bt,{label:"Intensidade",min:0,max:1,step:.05,value:n.headOverlays[s].opacity,setValue:S=>a(s,"opacity",S)})]}),u(Vt,{children:u(Vn,{label:"Cor Principal",paletteType:"colors_type_2",value:(E=n.headOverlays[s].color)!=null?E:0,onChange:S=>a(s,"color",S)})}),s!=="blush"&&u(Vt,{children:u(Vn,{label:"Cor Secund\xE1ria",paletteType:"colors_type_2",value:(A=n.headOverlays[s].secondColor)!=null?A:0,onChange:S=>a(s,"secondColor",S)})})]}),e==="skin"&&C(Tr,{children:[C(A0,{children:[u(An,{$active:d==="blemishes",onClick:()=>p("blemishes"),children:"MANCHAS"}),u(An,{$active:d==="ageing",onClick:()=>p("ageing"),children:"RUGAS"}),u(An,{$active:d==="complexion",onClick:()=>p("complexion"),children:"ASPECTO"}),u(An,{$active:d==="sunDamage",onClick:()=>p("sunDamage"),children:"SOL"}),u(An,{$active:d==="moleAndFreckles",onClick:()=>p("moleAndFreckles"),children:"SARDAS"})]}),C(Vt,{children:[u(Bt,{label:`Tipo de ${d==="blemishes"?"Manchas":d==="ageing"?"Rugas":d==="complexion"?"Aspecto":d==="sunDamage"?"Danos do Sol":"Sardas"}`,min:r.headOverlays[d].style.min,max:r.headOverlays[d].style.max,value:n.headOverlays[d].style,setValue:S=>a(d,"style",S)}),u(Bt,{label:"Intensidade / Visibilidade",min:0,max:1,step:.05,value:n.headOverlays[d].opacity,setValue:S=>a(d,"opacity",S)})]})]}),e==="chestHair"&&C(Tr,{children:[C(Vt,{children:[u(Bt,{label:"Estilo dos Pelos do Peito",min:r.headOverlays.chestHair.style.min,max:r.headOverlays.chestHair.style.max,value:n.headOverlays.chestHair.style,setValue:S=>a("chestHair","style",S)}),u(Bt,{label:"Densidade / Volume",min:0,max:1,step:.05,value:n.headOverlays.chestHair.opacity,setValue:S=>a("chestHair","opacity",S)})]}),u(Vt,{children:u(Vn,{label:"Cor do Pelo Corporal",paletteType:"colors_type_1",value:(M=n.headOverlays.chestHair.color)!=null?M:0,onChange:S=>a("chestHair","color",S)})})]})]})},Ww=b.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: clamp(40px, 5.8vh, 50px);
  padding: 0 2px;
  box-sizing: border-box;
  user-select: none;
  gap: 12px;
  flex-shrink: 0;
`,_m=b.button`
  display: flex;
  align-items: center;
  gap: clamp(6px, 0.8vw, 10px);
  padding: 0 clamp(10px, 1.2vw, 16px);
  height: clamp(38px, 5.5vh, 46px);
  background: rgba(32, 14, 18, 0.92);
  border: 1.5px solid rgba(239, 68, 68, 0.65);
  border-radius: 12px;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.2);

  &:hover {
    background: rgba(48, 18, 24, 0.98);
    border-color: #ef4444;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(239, 68, 68, 0.4), 0 0 12px rgba(239, 68, 68, 0.25);
  }

  &:active {
    transform: translateY(0);
  }
`,Gw=b.div`
  font-size: clamp(14px, 2vh, 17px);
  color: #ef4444;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  transition: transform 0.2s ease;

  ${_m}:hover & {
    transform: translateX(-2px);
  }
`,Yw=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
`,Zw=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(10px, 1.3vh, 12px);
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
`,Qw=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(6.5px, 0.85vh, 7.5px);
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
`,Xw=b.div`
  display: flex;
  align-items: center;
  gap: clamp(6px, 0.8vw, 10px);
  background: rgba(16, 18, 24, 0.92);
  border: 1.5px solid rgba(255, 255, 255, 0.12);
  border-radius: 9999px;
  padding: 0 clamp(8px, 1vw, 14px);
  height: clamp(34px, 5vh, 42px);
  box-sizing: border-box;
  flex-shrink: 0;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6);
`,O0=b.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.55);
  font-size: clamp(13px, 1.8vh, 16px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  transition: all 0.18s ease;
  outline: none;

  &:hover {
    color: #e5c058;
    transform: scale(1.18);
  }
`,Kw=b.div`
  display: flex;
  align-items: center;
  gap: clamp(5px, 0.6vw, 7px);
`,qw=b.button`
  width: ${({$active:e})=>e?"clamp(7px, 1vh, 8px)":"clamp(5px, 0.7vh, 6px)"};
  height: ${({$active:e})=>e?"clamp(7px, 1vh, 8px)":"clamp(5px, 0.7vh, 6px)"};
  border-radius: 50%;
  background: ${({$active:e})=>e?"#e5c058":"rgba(255, 255, 255, 0.28)"};
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  transition: all 0.2s ease;
  outline: none;
  box-shadow: ${({$active:e})=>e?"0 0 8px #e5c058":"none"};

  &:hover {
    background: #e5c058;
  }
`,Jw=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,e9=b.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(38px, 5.5vh, 46px);
  height: clamp(38px, 5.5vh, 46px);
  min-width: clamp(38px, 5.5vh, 46px);
  background: ${({$active:e})=>e?"rgba(229, 192, 88, 0.22)":"rgba(18, 20, 26, 0.92)"};
  border: 1.5px solid ${({$active:e})=>e?"#e5c058":"rgba(229, 192, 88, 0.35)"};
  border-radius: 12px;
  color: ${({$active:e})=>e?"#e5c058":"#ffffff"};
  font-size: clamp(16px, 2.2vh, 19px);
  cursor: pointer;
  outline: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({$active:e})=>e?"0 0 14px rgba(229, 192, 88, 0.4)":"0 4px 14px rgba(0, 0, 0, 0.6)"};

  &:hover {
    border-color: #e5c058;
    color: #e5c058;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.7), 0 0 14px rgba(229, 192, 88, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`,t9=b.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 clamp(10px, 1.2vw, 16px);
  height: clamp(38px, 5.5vh, 46px);
  background: linear-gradient(135deg, #e5c058 0%, #b89127 100%);
  border: 1px solid #e5c058;
  border-radius: 12px;
  color: #111111;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(10px, 1.3vh, 11.5px);
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px rgba(229, 192, 88, 0.35);

  &:hover {
    background: linear-gradient(135deg, #f3d47a 0%, #c8a135 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(229, 192, 88, 0.55);
  }

  &:active {
    transform: translateY(0);
  }
`,n9=({isDetailView:e=!1,onBackToMosaic:t,onExit:n,onSave:r,isCustomizationOpen:o=!1,onToggleCustomization:i,activeDotIndex:a=0,totalDots:l=4,onDotSelect:s})=>C(Ww,{children:[C(_m,{onClick:()=>{e&&t?t():n()},title:e?"Voltar para as Categorias":"Sair da Barbearia",children:[u(Gw,{children:"\u2190"}),C(Yw,{children:[u(Zw,{children:"VOLTAR"}),u(Qw,{children:e?"CATEGORIAS":"SAIR DA BARBEARIA"})]})]}),C(Xw,{children:[u(O0,{onClick:()=>{if(s){const c=a-1<0?l-1:a-1;s(c)}},title:"P\xE1gina Anterior",children:u(Pm,{})}),u(Kw,{children:Array.from({length:l}).map((c,d)=>u(qw,{$active:d===a,onClick:()=>s&&s(d),title:`P\xE1gina ${d+1}`},d))}),u(O0,{onClick:()=>{if(s){const c=(a+1)%l;s(c)}},title:"Pr\xF3xima P\xE1gina",children:u(ow,{})})]}),C(Jw,{children:[i&&u(e9,{$active:o,onClick:i,title:"Ajustes R\xE1pidos de Cores e Tons",children:u(iw,{})}),e&&r&&C(t9,{onClick:r,title:"Confirmar e Salvar Visual",children:[u(Zy,{style:{fontSize:"14px"}}),u("span",{children:"SALVAR"})]})]})]}),r9=b.div`
  position: absolute;
  right: clamp(20px, 3vw, 48px);
  top: 50%;
  transform: translateY(-50%);
  width: clamp(380px, 31vw, 540px);
  height: min(88vh, 840px);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1.2vh, 12px);
  box-sizing: border-box;
  z-index: 1000;
  pointer-events: auto;
  user-select: none;
  animation: slideInRight 0.22s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateY(-50%) translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateY(-50%) translateX(0);
    }
  }

  @media (max-width: 1440px) {
    width: clamp(360px, 33vw, 480px);
  }

  @media (max-width: 1024px) {
    width: clamp(340px, 40vw, 440px);
    right: 16px;
  }
`,o9=b.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  background: rgba(14, 15, 20, 0.94);
  border: 1.5px solid rgba(229, 192, 88, 0.35);
  border-radius: 16px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(229, 192, 88, 0.1);
  display: flex;
  flex-direction: column;
  padding: clamp(10px, 1.2vw, 14px);
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`,i9=({data:e,storedData:t,appearanceSettings:n,isMale:r,activeCamera:o,onToggleCamera:i,onToggleGender:a,onHairChange:l,onHeadOverlayChange:s,onEyeColorChange:c,onExit:d,onSave:p})=>{const[g,v]=y.exports.useState(null),[x,w]=y.exports.useState(!1),[k,h]=y.exports.useState(0),f=A=>{v(A),A==="hair"||A==="eyebrows"||A==="eyes"||A==="beard"||A==="makeUp"||A==="skin"?ee.post("appearance_set_camera","head"):ee.post("appearance_set_camera","body")},m=()=>{v(null),ee.post("appearance_set_camera","head")};return C(r9,{onClick:A=>A.stopPropagation(),onMouseDown:A=>A.stopPropagation(),children:[u(xw,{title:"BARBEARIA",subtitle:"ESTILO \xC9 UMA FORMA DE IDENTIDADE"}),u(o9,{children:g?u(Uw,{category:g,onBack:m,data:e,storedData:t,appearanceSettings:n,isMale:r,onHairChange:l,onHeadOverlayChange:s,onEyeColorChange:c}):u(_w,{onSelectCategory:f,activeCategoryId:g||void 0})}),u(n9,{isDetailView:!!g,onBackToMosaic:m,onExit:d,onSave:p,isCustomizationOpen:x,onToggleCustomization:()=>w(A=>!A),activeDotIndex:k,totalDots:4,onDotSelect:A=>{h(A);const M=["hair","eyebrows","beard","makeUp"];M[A]&&f(M[A])}}),x&&u(R2,{style:{left:"auto",right:"calc(100% + 12px)",bottom:"0"},children:u(Mm,{hasMainColor:!0,mainColor:e.hair.color,onMainColorChange:A=>l("color",A),colorPickerType:"colors_type_1",hasSecondaryColor:!0,secondaryColor:e.hair.highlight,onSecondaryColorChange:A=>l("highlight",A),hasOpacity:!1,opacity:1,onOpacityChange:()=>{},hasVariation:!1,variation:0,maxVariation:0,onVariationChange:()=>{}})})]})},a9=({size:e=28,color:t="#E5C058"})=>C("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u("path",{d:"M14 6L20 12M20 12L34 26M20 12L12 20M34 26L38 30M34 26L26 34M38 30L42 34M38 30L30 38M42 34L44 36M42 34L36 40",stroke:t,strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),u("path",{d:"M8 32L6 42L16 40L38 18L30 10L8 32Z",stroke:t,strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),u("path",{d:"M6 42L2 46",stroke:t,strokeWidth:"2.5",strokeLinecap:"round"}),u("circle",{cx:"16",cy:"16",r:"3",stroke:t,strokeWidth:"2"}),u("circle",{cx:"24",cy:"24",r:"2.5",stroke:t,strokeWidth:"2"})]}),Im=({size:e=22,color:t="#E5C058"})=>C("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u("path",{d:"M12 3C7.58 3 4 6.58 4 11C4 13.5 5.15 15.73 7 17.18V21H17V17.18C18.85 15.73 20 13.5 20 11C20 6.58 16.42 3 12 3Z",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u("path",{d:"M9 11C9 11 10.5 12 12 12C13.5 12 15 11 15 11",stroke:t,strokeWidth:"1.8",strokeLinecap:"round"})]}),Rm=({size:e=22,color:t="#E5C058"})=>C("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u("path",{d:"M6 4L9 8H15L18 4L21 8L18 13V21H6V13L3 8L6 4Z",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u("path",{d:"M12 8V18M9 14H15",stroke:t,strokeWidth:"1.8",strokeLinecap:"round"})]}),zm=({size:e=22,color:t="#E5C058"})=>C("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u("path",{d:"M19 12C19 12 21 8 18 5C15 2 12 4 10 7C8 10 5 11 3 13C2 14 2 17 5 18C8 19 12 18 14 15C16 16 18 15 19 12Z",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u("path",{d:"M12 9C13 11 15 12 17 11",stroke:t,strokeWidth:"1.8",strokeLinecap:"round"})]}),Lm=({size:e=22,color:t="#E5C058"})=>u("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:u("path",{d:"M8 3V10L7 17L5 21H9L10 16L11 9M16 3V10L17 17L19 21H15L14 16L13 9",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Dm=({size:e=22,color:t="#E5C058"})=>C("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u("path",{d:"M4 14C4 8 8 3 16 3C18 3 20 4.5 20 7C20 9.5 17.5 11 15 11C15 13 16 15 17 17M6 18C7 19.5 9 21 12 21",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u("circle",{cx:"8",cy:"8",r:"1",fill:t}),u("circle",{cx:"11",cy:"7",r:"1",fill:t}),u("circle",{cx:"14",cy:"7",r:"1",fill:t}),u("circle",{cx:"9",cy:"11",r:"1",fill:t}),u("circle",{cx:"12",cy:"10",r:"1",fill:t})]}),l9=({size:e=18,color:t="#E5C058"})=>C("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u("path",{d:"M3 21L12 12M12 12L15 9L20 14L17 17L12 12ZM15 9L18 6L21 9L18 12M15 9L12 12",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u("line",{x1:"2",y1:"2",x2:"6",y2:"6",stroke:t,strokeWidth:"2",strokeLinecap:"round"})]}),s9=({size:e=54,opacity:t=.35})=>C("svg",{width:e,height:e,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{opacity:t},children:[u("path",{d:"M32 14C36 8 46 10 46 18C46 26 34 32 32 38C30 32 18 26 18 18C18 10 28 8 32 14Z",stroke:"#E5C058",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),u("path",{d:"M32 38C32 46 26 54 20 56M32 44C36 48 44 48 48 44",stroke:"#E5C058",strokeWidth:"1.5",strokeLinecap:"round"}),u("path",{d:"M26 22C30 20 34 20 38 22M28 26C30 28 34 28 36 26",stroke:"#E5C058",strokeWidth:"1.2",strokeLinecap:"round"})]}),u9=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 18px;
  background: rgba(12, 13, 17, 0.96);
  border-bottom: 1.5px solid rgba(229, 192, 88, 0.25);
  box-sizing: border-box;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  user-select: none;
`,c9=b.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 25%;
`,d9=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(229, 192, 88, 0.15) 0%, rgba(20, 22, 28, 0.8) 100%);
  border: 1.5px solid rgba(229, 192, 88, 0.5);
  box-shadow: 0 0 14px rgba(229, 192, 88, 0.25);
  flex-shrink: 0;
`,f9=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
`,p9=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #E5C058;
  margin-bottom: 1px;
`,h9=b.h1`
  font-family: 'Montserrat', 'Cinzel', serif;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.05;
  background: linear-gradient(180deg, #FFFFFF 0%, #F5D77F 40%, #D4AF37 75%, #996515 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
`,m9=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 3px;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 28px;
    height: 1px;
    background: rgba(229, 192, 88, 0.5);
  }

  span {
    font-family: 'Montserrat', sans-serif;
    font-size: 8.5px;
    font-weight: 700;
    letter-spacing: 2.2px;
    text-transform: uppercase;
    color: rgba(229, 192, 88, 0.85);
  }
`,g9=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 25%;
  text-align: right;
  gap: 2px;
`,T0=b.span`
  font-family: 'Caveat', 'Brush Script MT', 'Montserrat', cursive;
  font-size: 13px;
  font-style: italic;
  color: rgba(229, 192, 88, 0.75);
  line-height: 1.2;
`,x9=b.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgba(229, 192, 88, 0.85);

  svg {
    stroke-width: 1.8;
  }
`,v9=({title:e="TATUAGEM",subtitle:t="EST\xDADIO DE",tagline:n="ARTE NA SUA HIST\xD3RIA"})=>C(u9,{children:[u(c9,{children:u(d9,{children:u(a9,{size:26,color:"#E5C058"})})}),C(f9,{children:[u(p9,{children:t}),u(h9,{children:e}),u(m9,{children:u("span",{children:n})})]}),C(g9,{children:[u(T0,{children:"Mais que tatuagens,"}),C(x9,{children:[u(T0,{style:{color:"#E5C058"},children:"identidade."}),u(ky,{size:12,color:"#E5C058"})]})]})]});var Fm="./assets/cabeca.e40c82ba.png",Nm="./assets/torso.0225a41c.png",Vm="./assets/bracos.d1dcdef7.png",Bm="./assets/pernas.81fa6654.png",jm="./assets/micropigmentacao.7ad746f9.png";const y9=b.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  user-select: none;
`,M0=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  width: 100%;
`,ri=b.div`
  position: relative;
  height: ${({$isFullWidth:e})=>e?"78px":"142px"};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  border: 1.5px solid ${({$active:e})=>e?"#E5C058":"rgba(229, 192, 88, 0.28)"};
  box-shadow: ${({$active:e})=>e?"0 0 16px rgba(229, 192, 88, 0.45), inset 0 0 10px rgba(229, 192, 88, 0.2)":"0 4px 14px rgba(0, 0, 0, 0.6)"};
  background-color: #121318;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:hover {
    border-color: #f5d77f;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8), 0 0 18px rgba(229, 192, 88, 0.4);

    .bg-image {
      transform: scale(1.04);
      filter: brightness(1.05);
    }

    .chevron-icon {
      transform: translateX(3px);
      color: #ffffff;
    }
  }

  &:active {
    transform: scale(0.98);
  }
`,oi=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('${({$src:e})=>e}') center center / cover no-repeat;
  transition: transform 0.3s ease, filter 0.3s ease;
  z-index: 1;
`,ii=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(10, 11, 15, 0.95) 0%,
    rgba(10, 11, 15, 0.6) 50%,
    rgba(10, 11, 15, 0.2) 100%
  );
  z-index: 2;
`,ai=b.div`
  position: relative;
  z-index: 3;
  padding: 8px 10px 8px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  background: rgba(14, 15, 20, 0.85);
  border-top: 1px solid rgba(229, 192, 88, 0.15);
`,li=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
`,si=b.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.5px solid rgba(229, 192, 88, 0.6);
  background: rgba(20, 22, 28, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ui=b.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,ci=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #ffffff;
  line-height: 1.1;
  white-space: nowrap;
`,di=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 7.5px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: rgba(229, 192, 88, 0.85);
  line-height: 1.1;
  margin-top: 2px;
  white-space: nowrap;
`,fi=b.div`
  color: rgba(229, 192, 88, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.2s ease, color 0.2s ease;
`,b9=[{id:"ZONE_HEAD",title:"CABE\xC7A",subtitle:"TATUAGENS NO ROSTO E CR\xC2NIO",image:Fm,icon:u(Im,{size:16,color:"#E5C058"})},{id:"ZONE_TORSO",title:"TORSO",subtitle:"TATUAGENS NO PEITO E ABD\xD4MEN",image:Nm,icon:u(Rm,{size:16,color:"#E5C058"})},{id:"ZONE_ARMS",title:"BRA\xC7OS",subtitle:"TATUAGENS NOS BRA\xC7OS",image:Vm,icon:u(zm,{size:16,color:"#E5C058"})},{id:"ZONE_LEGS",title:"PERNAS",subtitle:"TATUAGENS NAS PERNAS",image:Bm,icon:u(Lm,{size:16,color:"#E5C058"})},{id:"ZONE_HAIR",title:"MICROPIGMENTA\xC7\xC3O",subtitle:"DETALHES E MICROPIGMENTA\xC7\xC3O",image:jm,icon:u(Dm,{size:16,color:"#E5C058"}),isFullWidth:!0}],w9=({onSelectCategory:e,activeCategoryId:t})=>C(y9,{children:[C(M0,{children:[C(ri,{$active:t==="ZONE_HEAD",onClick:()=>e("ZONE_HEAD"),children:[u(oi,{className:"bg-image",$src:Fm}),u(ii,{}),C(ai,{children:[C(li,{children:[u(si,{children:u(Im,{size:16,color:"#E5C058"})}),C(ui,{children:[u(ci,{children:"CABE\xC7A"}),u(di,{children:"TATUAGENS NO ROSTO E CR\xC2NIO"})]})]}),u(fi,{className:"chevron-icon",children:u(Hn,{size:16})})]})]}),C(ri,{$active:t==="ZONE_TORSO",onClick:()=>e("ZONE_TORSO"),children:[u(oi,{className:"bg-image",$src:Nm}),u(ii,{}),C(ai,{children:[C(li,{children:[u(si,{children:u(Rm,{size:16,color:"#E5C058"})}),C(ui,{children:[u(ci,{children:"TORSO"}),u(di,{children:"TATUAGENS NO PEITO E ABD\xD4MEN"})]})]}),u(fi,{className:"chevron-icon",children:u(Hn,{size:16})})]})]})]}),C(M0,{children:[C(ri,{$active:t==="ZONE_ARMS",onClick:()=>e("ZONE_ARMS"),children:[u(oi,{className:"bg-image",$src:Vm}),u(ii,{}),C(ai,{children:[C(li,{children:[u(si,{children:u(zm,{size:16,color:"#E5C058"})}),C(ui,{children:[u(ci,{children:"BRA\xC7OS"}),u(di,{children:"TATUAGENS NOS BRA\xC7OS"})]})]}),u(fi,{className:"chevron-icon",children:u(Hn,{size:16})})]})]}),C(ri,{$active:t==="ZONE_LEGS",onClick:()=>e("ZONE_LEGS"),children:[u(oi,{className:"bg-image",$src:Bm}),u(ii,{}),C(ai,{children:[C(li,{children:[u(si,{children:u(Lm,{size:16,color:"#E5C058"})}),C(ui,{children:[u(ci,{children:"PERNAS"}),u(di,{children:"TATUAGENS NAS PERNAS"})]})]}),u(fi,{className:"chevron-icon",children:u(Hn,{size:16})})]})]})]}),C(ri,{$isFullWidth:!0,$active:t==="ZONE_HAIR",onClick:()=>e("ZONE_HAIR"),children:[u(oi,{className:"bg-image",$src:jm}),u(ii,{}),C(ai,{children:[C(li,{children:[u(si,{children:u(Dm,{size:16,color:"#E5C058"})}),C(ui,{children:[u(ci,{children:"MICROPIGMENTA\xC7\xC3O"}),u(di,{children:"DETALHES E MICROPIGMENTA\xC7\xC3O"})]})]}),u(fi,{className:"chevron-icon",children:u(Hn,{size:16})})]})]})]}),C9=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  user-select: none;
`,k9=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(229, 192, 88, 0.2);
`,S9=b.button`
  background: rgba(22, 25, 34, 0.85);
  border: 1px solid rgba(229, 192, 88, 0.35);
  border-radius: 9999px;
  color: #E5C058;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 5px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;

  &:hover {
    background: rgba(229, 192, 88, 0.2);
    border-color: #E5C058;
    color: #ffffff;
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.96);
  }
`,E9=b.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`,$9=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #ffffff;
`,A9=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 9.5px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #E5C058;
`,P0=b.div`
  display: flex;
  gap: 6px;
  width: 100%;
  margin-top: 2px;
`,Ra=b.button`
  flex: 1;
  padding: 6px 8px;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;

  ${({$active:e})=>e?`
    background: linear-gradient(135deg, rgba(229, 192, 88, 0.25), rgba(180, 140, 40, 0.35));
    border: 1.5px solid #E5C058;
    color: #ffffff;
    box-shadow: 0 0 10px rgba(229, 192, 88, 0.3);
  `:`
    background: rgba(18, 20, 26, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.6);

    &:hover {
      background: rgba(26, 30, 40, 0.95);
      border-color: rgba(229, 192, 88, 0.3);
      color: #E5C058;
    }
  `}
`,O9=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(16, 18, 24, 0.9);
  border: 1px solid rgba(229, 192, 88, 0.25);
  border-radius: 8px;
  padding: 6px 10px;
  width: 100%;
  box-sizing: border-box;

  svg {
    color: rgba(229, 192, 88, 0.7);
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    font-size: 11.5px;
    font-weight: 600;

    &::placeholder {
      color: rgba(255, 255, 255, 0.35);
      font-size: 11px;
    }
  }
`,T9=b.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: rgba(16, 18, 24, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 8px 12px;
  box-sizing: border-box;
`,M9=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);

  span.val {
    color: #E5C058;
    font-weight: 800;
  }
`,P9=b.input`
  width: 100%;
  height: 4px;
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #E5C058;
    border: 2px solid #ffffff;
    box-shadow: 0 0 8px rgba(229, 192, 88, 0.6);
    cursor: pointer;
    transition: transform 0.1s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.15);
  }
`,_9=b.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-right: 4px;
  max-height: 250px;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(229, 192, 88, 0.35);
    border-radius: 3px;
  }
`,I9=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-radius: 8px;
  background: ${({$isSelected:e})=>e?"rgba(32, 38, 52, 0.95)":"rgba(18, 20, 26, 0.85)"};
  border: 1px solid
    ${({$isSelected:e,$isApplied:t})=>t?"#22c55e":e?"#E5C058":"rgba(255, 255, 255, 0.08)"};
  box-shadow: ${({$isSelected:e})=>e?"0 0 10px rgba(229, 192, 88, 0.25)":"none"};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background: rgba(30, 34, 46, 0.95);
    border-color: ${({$isApplied:e})=>e?"#4ade80":"#E5C058"};
    transform: translateX(2px);
  }
`,R9=b.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 65%;
`,z9=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 11.5px;
  font-weight: 700;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,L9=b.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 8.5px;
  font-weight: 600;
  color: rgba(229, 192, 88, 0.75);
  text-transform: uppercase;
  margin-top: 1px;
`,D9=b.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,F9=b.span`
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid #22c55e;
  color: #4ade80;
  font-family: 'Montserrat', sans-serif;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 3px;
`,_0=b.button`
  height: 28px;
  padding: 0 10px;
  border-radius: 6px;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  outline: none;
  transition: all 0.15s ease;

  ${({$variant:e})=>e==="delete"?`
    background: rgba(239, 68, 68, 0.2);
    border: 1px solid #ef4444;
    color: #fca5a5;
    &:hover {
      background: #ef4444;
      color: #ffffff;
    }
  `:e==="apply"?`
    background: rgba(229, 192, 88, 0.2);
    border: 1px solid #E5C058;
    color: #ffffff;
    &:hover {
      background: #E5C058;
      color: #111111;
      box-shadow: 0 0 10px rgba(229, 192, 88, 0.5);
    }
  `:`
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.8);
    &:hover {
      background: rgba(255, 255, 255, 0.18);
      color: #ffffff;
    }
  `}
`,N9=({category:e,onBack:t,data:n,settings:r,isMale:o,handleApplyTattoo:i,handlePreviewTattoo:a,handleDeleteTattoo:l})=>{const[s,c]=y.exports.useState(""),[d,p]=y.exports.useState(()=>e==="ZONE_ARMS"?"ZONE_LEFT_ARM":e==="ZONE_LEGS"?"ZONE_LEFT_LEG":e),[g,v]=y.exports.useState(1),[x,w]=y.exports.useState(null),k=b9.find(P=>P.id===e),h=y.exports.useMemo(()=>e==="ZONE_ARMS"||e==="ZONE_LEGS"?d:e,[e,d]),f=y.exports.useMemo(()=>{var R;return(((R=r.items)==null?void 0:R[h])||[]).filter(D=>!!(o&&D.hashMale!==""||!o&&D.hashFemale!==""))},[r.items,h,o]),m=y.exports.useMemo(()=>{if(!s.trim())return f;const P=s.toLowerCase();return f.filter(R=>R.label.toLowerCase().includes(P)||R.name.toLowerCase().includes(P)||R.collection&&R.collection.toLowerCase().includes(P))},[f,s]),E=y.exports.useMemo(()=>n[h]||[],[n,h]),A=y.exports.useCallback(P=>E.some(R=>R.name===P),[E]),M=P=>{w(P.name),a(P,g)},S=P=>{A(P.name)?l(P):i(P,g)},_=P=>{const R=parseFloat(P.target.value);if(v(R),x){const D=f.find(U=>U.name===x);D&&a(D,R)}};return C(C9,{children:[C(k9,{children:[C(S9,{onClick:t,children:[u(br,{size:14})," CATEGORIAS"]}),C(E9,{children:[u($9,{children:(k==null?void 0:k.title)||e}),C(A9,{children:[f.length," op\xE7\xF5es dispon\xEDveis"]})]})]}),e==="ZONE_ARMS"&&C(P0,{children:[u(Ra,{$active:d==="ZONE_LEFT_ARM",onClick:()=>p("ZONE_LEFT_ARM"),children:"Bra\xE7o Esquerdo"}),u(Ra,{$active:d==="ZONE_RIGHT_ARM",onClick:()=>p("ZONE_RIGHT_ARM"),children:"Bra\xE7o Direito"})]}),e==="ZONE_LEGS"&&C(P0,{children:[u(Ra,{$active:d==="ZONE_LEFT_LEG",onClick:()=>p("ZONE_LEFT_LEG"),children:"Perna Esquerda"}),u(Ra,{$active:d==="ZONE_RIGHT_LEG",onClick:()=>p("ZONE_RIGHT_LEG"),children:"Perna Direita"})]}),C(O9,{children:[u(_d,{size:14}),u("input",{type:"text",placeholder:"Buscar tatuagem por nome...",value:s,onChange:P=>c(P.target.value)})]}),C(T9,{children:[C(M9,{children:[u("span",{children:"Intensidade / Opacidade"}),C("span",{className:"val",children:[Math.round(g*100),"%"]})]}),u(P9,{type:"range",min:.1,max:1,step:.05,value:g,onChange:_})]}),u(_9,{children:m.length===0?u("div",{style:{padding:"24px",textAlign:"center",color:"rgba(255, 255, 255, 0.4)",fontSize:"11px",fontFamily:"Montserrat, sans-serif"},children:"Nenhuma tatuagem encontrada."}):m.map(P=>{const R=A(P.name),D=x===P.name;return C(I9,{$isApplied:R,$isSelected:D,onClick:()=>M(P),children:[C(R9,{children:[u(z9,{children:P.label||P.name}),u(L9,{children:P.collection||h.replace("ZONE_","")})]}),u(D9,{children:R?C(Tt,{children:[C(F9,{children:[u(Qi,{size:11})," APLICADA"]}),u(_0,{$variant:"delete",onClick:U=>{U.stopPropagation(),l(P)},title:"Remover tatuagem",children:u(Ey,{size:12})})]}):u(_0,{$variant:"apply",onClick:U=>{U.stopPropagation(),S(P)},children:"APLICAR"})})]},P.name)})})]})},V9=b.footer`
  width: 100%;
  padding: 12px 16px 14px 16px;
  background: rgba(12, 13, 17, 0.96);
  border-top: 1.5px solid rgba(229, 192, 88, 0.2);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  box-sizing: border-box;
  user-select: none;
  position: relative;
`,I0=b.button`
  height: 40px;
  padding: 0 20px;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(55, 15, 22, 0.95), rgba(28, 8, 12, 0.98));
  border: 1.5px solid rgba(239, 68, 68, 0.85);
  box-shadow: 0 0 18px rgba(239, 68, 68, 0.35), inset 0 0 10px rgba(239, 68, 68, 0.15);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  outline: none;

  svg {
    color: #ef4444;
    transition: transform 0.2s ease;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(75, 20, 30, 0.98), rgba(38, 12, 18, 0.98));
    border-color: #f87171;
    box-shadow: 0 0 24px rgba(239, 68, 68, 0.5), inset 0 0 14px rgba(239, 68, 68, 0.25);
    transform: translateY(-1px);

    svg {
      transform: translateX(-2px);
    }
  }

  &:active {
    transform: scale(0.96);
  }
`,B9=b.button`
  height: 40px;
  padding: 0 20px;
  border-radius: 9999px;
  background: rgba(20, 24, 32, 0.92);
  border: 1.5px solid rgba(229, 192, 88, 0.6);
  box-shadow: 0 0 14px rgba(229, 192, 88, 0.25), inset 0 0 8px rgba(229, 192, 88, 0.1);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  outline: none;

  &:hover {
    background: rgba(30, 36, 48, 0.98);
    border-color: #f5d77f;
    box-shadow: 0 0 20px rgba(229, 192, 88, 0.45);
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.96);
  }
`,j9=b.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 90px;
`,H9=b.button`
  height: 38px;
  padding: 0 18px;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(22, 55, 30, 0.95), rgba(12, 35, 18, 0.98));
  border: 1.5px solid rgba(34, 197, 94, 0.85);
  box-shadow: 0 0 16px rgba(34, 197, 94, 0.3), inset 0 0 10px rgba(34, 197, 94, 0.15);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  outline: none;

  svg {
    color: #4ade80;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(30, 75, 40, 0.98), rgba(16, 45, 24, 0.98));
    border-color: #4ade80;
    box-shadow: 0 0 22px rgba(34, 197, 94, 0.5);
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.96);
  }
`,U9=({isDetailView:e=!1,onBackToMosaic:t,onExit:n,onClear:r,onSave:o})=>C(V9,{children:[e?C(I0,{onClick:t,style:{height:"38px",padding:"0 16px",fontSize:"12px"},children:[u(br,{size:16}),"CATEGORIAS"]}):C(I0,{onClick:n,children:[u(gc,{size:18}),"VOLTAR"]}),C(B9,{onClick:r,title:"Remover / Limpar Tatuagens",children:[u(l9,{size:18,color:"#E5C058"}),"LIMPAR"]}),u(j9,{children:e&&o?C(H9,{onClick:o,children:[u(Qi,{size:16}),"SALVAR"]}):C("div",{style:{display:"flex",alignItems:"center",opacity:.6},children:[u("span",{style:{color:"rgba(229, 192, 88, 0.5)",fontSize:"18px",marginRight:"6px",letterSpacing:"2px"},children:"..."}),u(s9,{size:38,opacity:.6})]})})]}),W9=b.div`
  width: 440px;
  max-width: 92vw;
  background: rgba(14, 15, 20, 0.96);
  border: 1.5px solid rgba(229, 192, 88, 0.35);
  border-radius: 20px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.85), 0 0 25px rgba(229, 192, 88, 0.15);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: visible;
  margin-right: 5rem;
  box-sizing: border-box;
  animation: slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 1440px) {
    width: 410px;
    margin-right: 3.5rem;
  }

  @media (max-width: 1024px) {
    width: 365px;
    margin-right: 1.5rem;
  }
`,G9=b.div`
  width: 100%;
  padding: 10px 12px 14px 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 440px;
  overflow: hidden;
`,Y9=({data:e,storedData:t,appearanceSettings:n,isMale:r,activeCamera:o,onToggleCamera:i,handleApplyTattoo:a,handlePreviewTattoo:l,handleDeleteTattoo:s,handleClearTattoos:c,onExit:d,onSave:p})=>{const[g,v]=y.exports.useState(null),x=k=>{v(k),k==="ZONE_HEAD"||k==="ZONE_HAIR"?ee.post("appearance_set_camera","head"):k==="ZONE_LEGS"?ee.post("appearance_set_camera","bottom"):ee.post("appearance_set_camera","body")},w=()=>{v(null),ee.post("appearance_set_camera","body")};return C(W9,{children:[u(v9,{title:"TATUAGEM",subtitle:"EST\xDADIO DE",tagline:"ARTE NA SUA HIST\xD3RIA"}),u(G9,{children:g?u(N9,{category:g,onBack:w,data:e.tattoos,storedData:t.tattoos,settings:n.tattoos,isMale:r,handleApplyTattoo:a,handlePreviewTattoo:l,handleDeleteTattoo:s,handleClearTattoos:c}):u(w9,{onSelectCategory:x,activeCategoryId:g||void 0})}),u(U9,{isDetailView:!!g,onBackToMosaic:w,onExit:d,onClear:c,onSave:p,isMale:r})]})},pi=!1,Z9=()=>{var nf;const{display:e,setDisplay:t,locales:n,setLocales:r}=Vo(),o=y.exports.useRef(!1),i=y.exports.useRef(0),[a,l]=y.exports.useState(void 0),[s,c]=y.exports.useState("clothing"),[d,p]=y.exports.useState(void 0),[g,v]=y.exports.useState(void 0),[x,w]=y.exports.useState(void 0),[k,h]=y.exports.useState(tu),[f,m]=y.exports.useState(nu),[E,A]=y.exports.useState(my),[M,S]=y.exports.useState(!1),[_,P]=y.exports.useState(!1);y.exports.useState("components");const[R,D]=y.exports.useState("default"),[U,Y]=y.exports.useState("en"),[j,K]=y.exports.useState("clothing"),[F,J]=y.exports.useState("comp_11"),[L,G]=y.exports.useState(0),[Z,te]=y.exports.useState("body"),[I,V]=y.exports.useState(!1),[W,q]=y.exports.useState("mosaic"),[O,ie]=y.exports.useState(1),B=y.exports.useMemo(()=>["default","head","body","bottom"],[]),ye=y.exports.useCallback(()=>{D($=>{const z=$==="head"?"body":"head";return te(z==="head"?"head":"body"),ee.post("appearance_set_camera",z),z})},[]),me=y.exports.useCallback(()=>{const $=B.indexOf(R),z=B[($+1)%B.length];D(z),te(z==="head"?"head":"body"),ee.post("appearance_set_camera",z)},[B,R]),ge=y.exports.useCallback(()=>{const $=B.indexOf(R),z=B[($-1+B.length)%B.length];D(z),te(z==="head"?"head":"body"),ee.post("appearance_set_camera",z)},[B,R]),oe=y.exports.useCallback($=>{G(z=>{const H=(z+$)%360;return H<0?Math.round(H+360):Math.round(H)}),ee.post("appearance_rotate_ped",$)},[]),Ne=y.exports.useCallback($=>{J($),q("detail"),["prop_0","prop_1","prop_2","comp_1","hair","beard"].includes($)?(D("head"),te("head"),ee.post("appearance_set_camera","head")):["comp_4","comp_6"].includes($)?(D("bottom"),te("body"),ee.post("appearance_set_camera","bottom")):(D("body"),te("body"),ee.post("appearance_set_camera","body"))},[]),Te=y.exports.useRef(0),se=y.exports.useRef(null),Ve=y.exports.useCallback(()=>{se.current!==null&&(cancelAnimationFrame(se.current),se.current=null);const $=Te.current;Math.abs($)>.1&&(Te.current=0,G(z=>{const H=(z+$)%360;return H<0?Math.round(H+360):Math.round(H)}),ee.post("appearance_rotate_ped",$))},[]);y.exports.useEffect(()=>()=>{se.current!==null&&cancelAnimationFrame(se.current)},[]);const xe=y.exports.useCallback($=>{$.button===0&&$.target===$.currentTarget&&(o.current=!0,i.current=$.clientX,Te.current=0,$.preventDefault())},[]),Ge=y.exports.useCallback($=>{$.button===0&&(o.current=!0,i.current=$.clientX,Te.current=0,$.preventDefault())},[]),zn=y.exports.useCallback($=>{if(!o.current)return;const z=$.clientX-i.current;i.current=$.clientX;const H=-z*3;Te.current+=H,se.current===null&&(se.current=requestAnimationFrame(()=>{se.current=null;const X=Te.current;Math.abs(X)>.1&&(Te.current=0,G(le=>{const Pe=(le+X)%360;return Pe<0?Math.round(Pe+360):Math.round(Pe)}),ee.post("appearance_rotate_ped",X))}))},[]),Be=y.exports.useCallback(()=>{o.current&&(o.current=!1,Ve())},[Ve]),qn=y.exports.useCallback(()=>{o.current&&(o.current=!1,Ve())},[Ve]),Sr=qs(e.appearance,null,{from:{transform:"translateX(-50px)",opacity:0},enter:{transform:"translateY(0)",opacity:1},leave:{transform:"translateX(-50px)",opacity:0}}),Dt=qs(M,null,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}}),ae=qs(_,null,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}});y.exports.useCallback(()=>{ee.post("appearance_turn_around")},[]),y.exports.useCallback($=>{A({...E,[$]:!E[$]}),E[$]?ee.post("appearance_wear_clothes",{data:d,key:$}):ee.post("appearance_remove_clothes",$)},[d,E,A]),y.exports.useCallback($=>{Y($),ee.post("appearance_set_locale",$).then(z=>r(z))},[Y,r]),y.exports.useCallback($=>{h({...tu,[$]:!k[$]}),m(nu),k[$]?ee.post("appearance_set_camera","default"):ee.post("appearance_set_camera",$)},[k,h,m]),y.exports.useCallback(()=>{m({left:!f.left,right:!1}),f.left?ee.post("appearance_set_camera","current"):ee.post("appearance_rotate_camera","left")},[m,f]),y.exports.useCallback(()=>{m({left:!1,right:!f.right}),f.right?ee.post("appearance_set_camera","current"):ee.post("appearance_rotate_camera","right")},[m,f]);const Me=y.exports.useCallback(()=>{S(!0)},[S]),Ln=y.exports.useCallback(()=>{P(!0)},[P]),Yr=y.exports.useCallback(async $=>{$&&await ee.post("appearance_save",d),S(!1)},[S,d]),an=y.exports.useCallback(async $=>{$&&await ee.post("appearance_exit"),P(!1)},[P]),ia=y.exports.useCallback(async $=>{const{appearanceSettings:z,appearanceData:H}=await ee.post("appearance_change_model",$);w(z),p(H)},[p,w]),Hm=y.exports.useCallback(($,z)=>{if(!d)return;const H={...d.headBlend,[$]:z},X={...d,headBlend:H};p(X),ee.post("appearance_change_head_blend",H)},[d,p]),Um=y.exports.useCallback(($,z)=>{if(!d)return;const H={...d.faceFeatures,[$]:z},X={...d,faceFeatures:H};p(X),ee.post("appearance_change_face_feature",H)},[d,p]),Jn=y.exports.useCallback(async($,z)=>{if(!d||!x)return;const H={...d.hair,[$]:z},X={...d,hair:H};p(X);const le=await ee.post("appearance_change_hair",H),Pe={...x,hair:le};w(Pe)},[d,p,x,w]);y.exports.useCallback(async $=>{if(!d||!x)return;const{tattoos:z}=d,H={...z},X=x.tattoos.items.ZONE_HAIR[$];H[X.zone]||(H[X.zone]=[]),H[X.zone]=[X],await ee.post("appearance_apply_tattoo",H),p({...d,tattoos:H})},[x,d,p]);const Sn=y.exports.useCallback(($,z,H)=>{if(!d)return;const X={...d.headOverlays[$],[z]:H},le={...d,headOverlays:{...d.headOverlays,[$]:X}};p(le),ee.post("appearance_change_head_overlay",{...d.headOverlays,[$]:X})},[d,p]),Ud=y.exports.useCallback($=>{if(!d)return;const z={...d,eyeColor:$};p(z),ee.post("appearance_change_eye_color",$)},[d,p]),vs=y.exports.useCallback(async($,z)=>{if(!d||!x)return;const H=d.components.find(he=>he.component_id===$);if(!H)return;const X={...H,drawable:z,texture:0},Pe=[...d.components.filter(he=>he.component_id!==$),X],Ye={...d,components:Pe};p(Ye);const Ze=await ee.post("appearance_change_component",X),Qe=[...x.components.filter(he=>he.component_id!==$),Ze],Xe={...x,components:Qe};w(Xe)},[d,p,x,w]),Wd=y.exports.useCallback(async($,z)=>{if(!d||!x)return;const H=d.components.find(he=>he.component_id===$);if(!H)return;const X={...H,texture:z},Pe=[...d.components.filter(he=>he.component_id!==$),X],Ye={...d,components:Pe};p(Ye);const Ze=await ee.post("appearance_change_component",X),Qe=[...x.components.filter(he=>he.component_id!==$),Ze],Xe={...x,components:Qe};w(Xe)},[d,p,x,w]),ys=y.exports.useCallback(async($,z)=>{if(!d||!x)return;const H=d.props.find(he=>he.prop_id===$);if(!H)return;const X={...H,drawable:z,texture:0},Pe=[...d.props.filter(he=>he.prop_id!==$),X],Ye={...d,props:Pe};p(Ye);const Ze=await ee.post("appearance_change_prop",X),Qe=[...x.props.filter(he=>he.prop_id!==$),Ze],Xe={...x,props:Qe};w(Xe)},[d,p,x,w]),Gd=y.exports.useCallback(async($,z)=>{if(!d||!x)return;const H=d.props.find(he=>he.prop_id===$);if(!H)return;const X={...H,texture:z},Pe=[...d.props.filter(he=>he.prop_id!==$),X],Ye={...d,props:Pe};p(Ye);const Ze=await ee.post("appearance_change_prop",X),Qe=[...x.props.filter(he=>he.prop_id!==$),Ze],Xe={...x,props:Qe};w(Xe)},[d,p,x,w]),aa=y.exports.useMemo(()=>{if(!!d)return d.model==="mp_m_freemode_01"||d.model==="mp_f_freemode_01"},[d]),Dn=y.exports.useMemo(()=>{if(!!d)return d.model==="mp_m_freemode_01"},[d]),Wm=y.exports.useCallback(()=>{ia(Dn?"mp_f_freemode_01":"mp_m_freemode_01")},[Dn,ia]),Yd=y.exports.useCallback(async($,z)=>{if(!d)return;$.opacity=z;const{tattoos:H}=d,X=JSON.parse(JSON.stringify({...H}));X[$.zone]||(X[$.zone]=[]),X[$.zone].push($),await ee.post("appearance_apply_tattoo",{tattoo:$,updatedTattoos:X})&&p({...d,tattoos:X})},[d,p]),Zd=y.exports.useCallback(($,z)=>{if(!d)return;$.opacity=z;const{tattoos:H}=d;ee.post("appearance_preview_tattoo",{data:H,tattoo:$})},[d]),Qd=y.exports.useCallback(async $=>{if(!d)return;const{tattoos:z}=d,H=z;H[$.zone]=H[$.zone].filter(X=>X.name!==$.name),await ee.post("appearance_delete_tattoo",H),p({...d,tattoos:H})},[d,p]),Xd=y.exports.useCallback(async()=>{if(!d)return;const{tattoos:$}=d,z={...$};for(var H in z)H!=="ZONE_HAIR"&&(z[H]=[]);await ee.post("appearance_delete_tattoo",z),p({...d,tattoos:z})},[d,p]);y.exports.useEffect(()=>{n||ee.post("appearance_get_locales").then($=>r($)),ee.onEvent("appearance_display",$=>{t({appearance:!0,asynchronous:$.asynchronous}),$.thumbnailBatchSize&&($.thumbnailBatchSize,void 0)}),ee.onEvent("appearance_hide",()=>{t({appearance:!1,asynchronous:!1}),p(mc),v(mc),h(tu),m(nu)})},[]);const Kd=y.exports.useCallback(async $=>{const z=X=>{const le=X;le!=null&&le.appearanceSettings&&w(le.appearanceSettings)},H=X=>{const le=X;(le==null?void 0:le.config)&&(le==null?void 0:le.appearanceData)&&(l(le.config),v(le.appearanceData),p(le.appearanceData))};if($)z(await ee.post("appearance_get_settings")),H(await ee.post("appearance_get_data"));else{const[X,le]=await Promise.all([ee.post("appearance_get_settings"),ee.post("appearance_get_data")]);z(X),H(le)}},[]);y.exports.useEffect(()=>{if(!e.appearance)return;let $=!1;return Kd(e.asynchronous).catch(z=>{$||console.error("[Appearance]",z)}),()=>{$=!0}},[e.appearance,e.asynchronous,Kd]);const er=y.exports.useMemo(()=>a||void 0,[a,s]);y.exports.useCallback(()=>{p(_p),v(_p)},[]);const Xt=y.exports.useMemo(()=>{const $=er!=null?er:a;if(!$)return[];const z=[];return($.components||$.props)&&z.push({id:"clothing",label:"Roupas"}),$.headOverlays&&z.push({id:"barber",label:"Barbearia"}),$.tattoos&&aa&&z.push({id:"tattoos",label:"Tatuagens"}),$.headBlend&&aa&&z.push({id:"genetics",label:"Gen\xE9tica"}),$.faceFeatures&&aa&&z.push({id:"face",label:"Rosto"}),$.ped&&z.push({id:"ped",label:"Modelos"}),z},[er,a,aa]);y.exports.useEffect(()=>{Xt.length>0&&!Xt.some($=>$.id===j)&&K(Xt[0].id)},[Xt,j]);const tt=y.exports.useMemo(()=>{var z,H,X,le,Pe,Ye,Ze,gt,Qe,Xe,he,ln,sn,be,ue;const $=er!=null?er:a;if(!$)return[];if(j==="clothing"){const ce=[];return(z=$.componentConfig)!=null&&z.jackets&&ce.push({id:"comp_11",title:"JAQUETAS",icon:u(A2,{})}),(H=$.componentConfig)!=null&&H.shirts&&ce.push({id:"comp_8",title:"CAMISAS",icon:u(Id,{})}),(X=$.componentConfig)!=null&&X.lowerBody&&ce.push({id:"comp_4",title:"CAL\xC7AS",icon:u(w2,{})}),(le=$.componentConfig)!=null&&le.scarfAndChains&&ce.push({id:"comp_7",title:"ACESS\xD3RIOS",icon:u(S2,{})}),(Pe=$.componentConfig)!=null&&Pe.shoes&&ce.push({id:"comp_6",title:"SAPATOS",icon:u(k2,{})}),(Ye=$.componentConfig)!=null&&Ye.bodyArmor&&ce.push({id:"comp_9",title:"COLETES",icon:u(E2,{})}),(Ze=$.componentConfig)!=null&&Ze.masks&&ce.push({id:"comp_1",title:"M\xC1SCARAS",icon:u(y2,{})}),(gt=$.componentConfig)!=null&&gt.bags&&ce.push({id:"comp_5",title:"MOCHILAS",icon:u(C2,{})}),(Qe=$.propConfig)!=null&&Qe.ear&&ce.push({id:"prop_2",title:"BRINCOS",icon:u(M2,{})}),(Xe=$.propConfig)!=null&&Xe.bracelets&&ce.push({id:"prop_7",title:"BRACELETES",icon:u(_2,{})}),(he=$.propConfig)!=null&&he.watches&&ce.push({id:"prop_6",title:"REL\xD3GIO",icon:u(P2,{})}),(ln=$.propConfig)!=null&&ln.hats&&ce.push({id:"prop_0",title:"CHAP\xC9US",icon:u(O2,{})}),(sn=$.propConfig)!=null&&sn.glasses&&ce.push({id:"prop_1",title:"\xD3CULOS",icon:u(T2,{})}),(be=$.componentConfig)!=null&&be.upperBody&&ce.push({id:"comp_3",title:"M\xC3OS",icon:u(b2,{})}),(ue=$.componentConfig)!=null&&ue.decals&&ce.push({id:"comp_10",title:"ADESIVOS",icon:u($2,{})}),ce}return j==="barber"?[{id:"hair",title:"Cabelo",icon:u(Jy,{})},{id:"beard",title:"Barba",icon:u(Ky,{})},{id:"eyebrows",title:"Sobrancelhas",icon:u(qy,{})},{id:"chestHair",title:"Pelos do Peito",icon:u(a4,{})},{id:"eyes",title:"Olhos",icon:u(Xy,{})},{id:"makeUp",title:"Maquiagem",icon:u(t4,{})},{id:"blush",title:"Blush",icon:u(Dp,{})},{id:"lipstick",title:"Batom",icon:u(o4,{})},{id:"blemishes",title:"Manchas",icon:u(Dp,{})},{id:"ageing",title:"Rugas",icon:u(e4,{})},{id:"complexion",title:"Aspecto",icon:u(n4,{})},{id:"sunDamage",title:"Danos do Sol",icon:u(r4,{})},{id:"moleAndFreckles",title:"Sardas",icon:u(i4,{})}]:j==="tattoos"?[{id:"ZONE_TORSO",title:"Torso",icon:u(l4,{})},{id:"ZONE_HEAD",title:"Cabe\xE7a",icon:u(Yy,{})},{id:"ZONE_LEFT_ARM",title:"Bra\xE7o Esq",icon:u(Fp,{})},{id:"ZONE_RIGHT_ARM",title:"Bra\xE7o Dir",icon:u(Fp,{style:{transform:"scaleX(-1)"}})},{id:"ZONE_LEFT_LEG",title:"Perna Esq",icon:u(Np,{})},{id:"ZONE_RIGHT_LEG",title:"Perna Dir",icon:u(Np,{style:{transform:"scaleX(-1)"}})},{id:"ZONE_HAIR",title:"Micropigmenta\xE7\xE3o",icon:u(s4,{})}]:j==="genetics"?[{id:"parents",title:"Gen\xE9tica",icon:u(u4,{})}]:j==="face"?[{id:"features",title:"Rosto",icon:u(c4,{})}]:j==="ped"?[{id:"model",title:"Modelo",icon:u(d4,{})}]:[]},[er,a,j]);y.exports.useEffect(()=>{tt.length>0&&!tt.some($=>$.id===F)&&J(tt[0].id)},[tt,F]),y.exports.useEffect(()=>{!e.appearance||j==="tattoos"&&(F==="ZONE_HEAD"||F==="ZONE_HAIR"?(ee.post("appearance_set_camera","head"),te("head")):F==="ZONE_LEFT_LEG"||F==="ZONE_RIGHT_LEG"?(ee.post("appearance_set_camera","bottom"),te("body")):(ee.post("appearance_set_camera","body"),te("body")))},[e.appearance,j,F]);const Kt=y.exports.useMemo(()=>tt.find($=>$.id===F)||tt[0],[tt,F]),qd=(nf=Kt==null?void 0:Kt.title)!=null?nf:"Customiza\xE7\xE3o";y.exports.useCallback(()=>{if(tt.length===0)return;const z=(tt.findIndex(H=>H.id===F)-1+tt.length)%tt.length;J(tt[z].id)},[tt,F]),y.exports.useCallback(()=>{if(tt.length===0)return;const z=(tt.findIndex(H=>H.id===F)+1)%tt.length;J(tt[z].id)},[tt,F]);const Jd=y.exports.useMemo(()=>{var $,z,H,X,le,Pe,Ye,Ze,gt,Qe,Xe,he,ln,sn,be,ue,ce,Ft;if(!x)return 0;if(F.startsWith("comp_")){const He=parseInt(F.replace("comp_",""),10),Nt=x.components.find(nt=>nt.component_id===He);if(!Nt)return 0;const Zr=(z=($=Nt.drawable)==null?void 0:$.min)!=null?z:0,Qr=(X=(H=Nt.drawable)==null?void 0:H.max)!=null?X:0,Xr=(Pe=(le=Nt.blacklist)==null?void 0:le.drawables)!=null?Pe:[],Kr=new Set(Xr.map(nt=>Number(nt)));let tr=0;for(let nt=Math.max(0,Zr);nt<=Qr;nt++)Kr.has(nt)||tr++;return tr}if(F.startsWith("prop_")){const He=parseInt(F.replace("prop_",""),10),Nt=x.props.find(nt=>nt.prop_id===He);if(!Nt)return 0;const Zr=(Ze=(Ye=Nt.drawable)==null?void 0:Ye.min)!=null?Ze:-1,Qr=(Qe=(gt=Nt.drawable)==null?void 0:gt.max)!=null?Qe:0,Xr=(he=(Xe=Nt.blacklist)==null?void 0:Xe.drawables)!=null?he:[],Kr=new Set(Xr.map(nt=>Number(nt)));let tr=0;for(let nt=Math.max(0,Zr);nt<=Qr;nt++)Kr.has(nt)||tr++;return tr}if(F==="hair"){const He=(be=(sn=(ln=x.hair)==null?void 0:ln.style)==null?void 0:sn.min)!=null?be:0;return((Ft=(ce=(ue=x.hair)==null?void 0:ue.style)==null?void 0:ce.max)!=null?Ft:0)-He+1}return 0},[x,F]),Ee=y.exports.useMemo(()=>{var $,z,H,X,le,Pe,Ye,Ze,gt,Qe,Xe,he,ln,sn;if(!d||!x)return{hasCustomization:!1};if(F.startsWith("comp_")){const be=parseInt(F.replace("comp_",""),10),ue=d.components.find(He=>He.component_id===be),ce=x.components.find(He=>He.component_id===be),Ft=(z=($=ce==null?void 0:ce.texture)==null?void 0:$.max)!=null?z:0;return{hasCustomization:Ft>0,hasVariation:Ft>0,variation:(H=ue==null?void 0:ue.texture)!=null?H:0,maxVariation:Ft,onVariationChange:He=>Wd(be,He)}}if(F.startsWith("prop_")){const be=parseInt(F.replace("prop_",""),10),ue=d.props.find(He=>He.prop_id===be),ce=x.props.find(He=>He.prop_id===be),Ft=(le=(X=ce==null?void 0:ce.texture)==null?void 0:X.max)!=null?le:0;return{hasCustomization:Ft>0,hasVariation:Ft>0,variation:(Pe=ue==null?void 0:ue.texture)!=null?Pe:0,maxVariation:Ft,onVariationChange:He=>Gd(be,He)}}if(F==="hair"){const be=(gt=(Ze=(Ye=x.hair)==null?void 0:Ye.texture)==null?void 0:Ze.max)!=null?gt:0;return{hasCustomization:!0,hasMainColor:!0,mainColor:d.hair.color,onMainColorChange:ue=>Jn("color",ue),hasSecondaryColor:!0,secondaryColor:d.hair.highlight,onSecondaryColorChange:ue=>Jn("highlight",ue),colorPickerType:"colors_type_1",hasVariation:be>0,variation:d.hair.texture,maxVariation:be,onVariationChange:ue=>Jn("texture",ue)}}if(["beard","eyebrows","chestHair"].includes(F)){const be=F,ue=d.headOverlays[be];return{hasCustomization:!0,hasMainColor:!0,mainColor:(Qe=ue==null?void 0:ue.color)!=null?Qe:0,onMainColorChange:ce=>Sn(be,"color",ce),colorPickerType:"colors_type_1",hasOpacity:!0,opacity:(Xe=ue==null?void 0:ue.opacity)!=null?Xe:1,onOpacityChange:ce=>Sn(be,"opacity",ce)}}if(["makeUp","blush","lipstick"].includes(F)){const be=F,ue=d.headOverlays[be];return{hasCustomization:!0,hasMainColor:!0,mainColor:(he=ue==null?void 0:ue.color)!=null?he:0,onMainColorChange:ce=>Sn(be,"color",ce),colorPickerType:be==="makeUp"?"colors_type_3":"colors_type_2",hasOpacity:!0,opacity:(ln=ue==null?void 0:ue.opacity)!=null?ln:1,onOpacityChange:ce=>Sn(be,"opacity",ce)}}if(["blemishes","ageing","complexion","sunDamage","moleAndFreckles"].includes(F)){const be=F,ue=d.headOverlays[be];return{hasCustomization:!0,hasOpacity:!0,opacity:(sn=ue==null?void 0:ue.opacity)!=null?sn:1,onOpacityChange:ce=>Sn(be,"opacity",ce)}}return{hasCustomization:!1}},[d,x,F,Wd,Gd,Jn,Sn]);y.exports.useEffect(()=>{Ee.hasCustomization||V(!1)},[Ee.hasCustomization]);const ef=y.exports.useCallback($=>{if(F.startsWith("comp_")){const z=parseInt(F.replace("comp_",""),10);vs(z,$)}else if(F.startsWith("prop_")){const z=parseInt(F.replace("prop_",""),10);ys(z,$)}else F==="hair"?Jn("style",$):["beard","eyebrows","chestHair","makeUp","blush","lipstick","blemishes","ageing","complexion","sunDamage","moleAndFreckles"].includes(F)&&Sn(F,"style",$)},[F,vs,ys,Jn,Sn]),Gm=y.exports.useCallback(()=>{var $,z;if(Ee.onVariationChange){const H=($=Ee.variation)!=null?$:0,X=(z=Ee.maxVariation)!=null?z:0;if(X<=0)return;const le=H-1<0?X:H-1;Ee.onVariationChange(le)}},[Ee]),Ym=y.exports.useCallback(()=>{var $,z;if(Ee.onVariationChange){const H=($=Ee.variation)!=null?$:0,X=(z=Ee.maxVariation)!=null?z:0;if(X<=0)return;const le=H+1>X?0:H+1;Ee.onVariationChange(le)}},[Ee]);y.exports.useEffect(()=>{const $=z=>{var X,le;const H=(le=(X=z.target)==null?void 0:X.tagName)==null?void 0:le.toLowerCase();H==="input"||H==="textarea"||(z.code==="KeyA"||z.key==="a"||z.key==="A"?oe(-15):z.code==="KeyD"||z.key==="d"||z.key==="D"?oe(15):z.key==="ArrowLeft"&&W==="mosaic"&&j==="clothing"?ie(1):z.key==="ArrowRight"&&W==="mosaic"&&j==="clothing"?ie(2):z.key==="Escape"&&(I?V(!1):W==="detail"&&j==="clothing"?q("mosaic"):Ln()))};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[I,W,j,oe,Ln,ie]);const En=n||null;if(!e.appearance||!a||!x||!d||!g||!En)return null;const Zm=(()=>{var $,z;if(Xt.length===1)switch(Xt[0].id){case"clothing":return"LOJA DE ROUPAS";case"barber":return"BARBEARIA";case"tattoos":return"TATUAGENS";case"genetics":case"face":return"CRIADOR DE PERSONAGEM"}return((z=($=En.header)==null?void 0:$.title)!=null?z:"APAR\xCANCIA").toUpperCase()})(),tf=()=>{var $,z,H,X,le,Pe,Ye,Ze,gt,Qe,Xe,he,ln,sn,be,ue,ce,Ft,He,Nt,Zr,Qr,Xr,Kr,tr,nt,rf;if(F.startsWith("comp_")){const Ke=parseInt(F.replace("comp_",""),10),xt=d.components.find(un=>un.component_id===Ke),Ae=x.components.find(un=>un.component_id===Ke),Er=(z=($=Ae==null?void 0:Ae.drawable)==null?void 0:$.min)!=null?z:0,Ho=(X=(H=Ae==null?void 0:Ae.drawable)==null?void 0:H.max)!=null?X:0,Uo=(le=xt==null?void 0:xt.drawable)!=null?le:0,bs=(Ye=(Pe=Ae==null?void 0:Ae.blacklist)==null?void 0:Pe.drawables)!=null?Ye:[];return u(Mi,{target:{kind:"component",id:Ke,gender:Dn?"male":"female"},min:Er,max:Ho,selected:Uo,blacklisted:bs,onSelect:un=>vs(Ke,un)})}if(F.startsWith("prop_")){const Ke=parseInt(F.replace("prop_",""),10),xt=d.props.find(un=>un.prop_id===Ke),Ae=x.props.find(un=>un.prop_id===Ke),Er=(gt=(Ze=Ae==null?void 0:Ae.drawable)==null?void 0:Ze.min)!=null?gt:-1,Ho=(Xe=(Qe=Ae==null?void 0:Ae.drawable)==null?void 0:Qe.max)!=null?Xe:0,Uo=(he=xt==null?void 0:xt.drawable)!=null?he:-1,bs=(sn=(ln=Ae==null?void 0:Ae.blacklist)==null?void 0:ln.drawables)!=null?sn:[];return u(Mi,{target:{kind:"prop",id:Ke,gender:Dn?"male":"female"},min:Er,max:Ho,selected:Uo,blacklisted:bs,onSelect:un=>ys(Ke,un)})}if(F==="hair")return u(Mi,{target:{kind:"component",id:2,gender:Dn?"male":"female"},min:x.hair.style.min,max:x.hair.style.max,selected:d.hair.style,blacklisted:(ue=(be=x.hair.blacklist)==null?void 0:be.drawables)!=null?ue:[],onSelect:Ke=>Jn("style",Ke)});if(F==="eyes")return u($e,{title:"Cor dos Olhos",min:(Ft=(ce=x.eyeColor)==null?void 0:ce.min)!=null?Ft:0,max:(Nt=(He=x.eyeColor)==null?void 0:He.max)!=null?Nt:24,defaultValue:d.eyeColor,clientValue:g.eyeColor,onChange:Ud});if(["beard","eyebrows","chestHair","makeUp","blush","lipstick","blemishes","ageing","complexion","sunDamage","moleAndFreckles"].includes(F)){const Ke=F,xt=x.headOverlays[Ke],Ae=d.headOverlays[Ke],Er=g.headOverlays[Ke],Ho=(Zr=Kt==null?void 0:Kt.title)!=null?Zr:Ke;return u($e,{title:Ho,min:(Xr=(Qr=xt==null?void 0:xt.style)==null?void 0:Qr.min)!=null?Xr:0,max:(tr=(Kr=xt==null?void 0:xt.style)==null?void 0:Kr.max)!=null?tr:0,defaultValue:(nt=Ae==null?void 0:Ae.style)!=null?nt:0,clientValue:(rf=Er==null?void 0:Er.style)!=null?rf:0,onChange:Uo=>Sn(Ke,"style",Uo)})}if(j==="tattoos"){const Ke=(()=>(x.tattoos.items[F]||[]).filter(Ae=>!!(Dn&&Ae.hashMale!==""||!Dn&&Ae.hashFemale!=="")))();return u(n8,{activeZone:F,settings:{...x.tattoos,items:{...x.tattoos.items,[F]:Ke}},data:d.tattoos,storedData:g.tattoos,handleApplyTattoo:Yd,handlePreviewTattoo:Zd,handleDeleteTattoo:Qd,handleClearTattoos:Xd})}return j==="genetics"?u(R4,{settings:x.headBlend,storedData:g.headBlend,data:d.headBlend,handleHeadBlendChange:Hm}):j==="face"?u(z4,{settings:x.faceFeatures,storedData:g.faceFeatures,data:d.faceFeatures,handleFaceFeatureChange:Um}):j==="ped"?u(Fy,{settings:x.ped,storedData:g.model,data:d.model,handleModelChange:ia}):null},Qm=j==="barber"||Xt.length===1&&Xt[0].id==="barber",Xm=j==="tattoos"||Xt.length===1&&Xt[0].id==="tattoos",Km=Qm?C(ou,{onMouseDown:xe,onMouseMove:zn,onMouseUp:Be,onMouseLeave:qn,style:{cursor:o.current?"grabbing":"default",justifyContent:"center"},children:[pi,u(i9,{data:d,storedData:g,appearanceSettings:x,isMale:!!Dn,activeCamera:R,onToggleCamera:ye,onToggleGender:Wm,onStartDrag:Ge,onHairChange:Jn,onHeadOverlayChange:Sn,onEyeColorChange:Ud,onExit:Ln,onSave:Me,isDev:pi})]}):Xm?C(ou,{onMouseDown:xe,onMouseMove:zn,onMouseUp:Be,onMouseLeave:qn,style:{cursor:o.current?"grabbing":"default"},children:[pi,u(Y9,{data:d,storedData:g,appearanceSettings:x,isMale:!!Dn,activeCamera:R,onToggleCamera:ye,handleApplyTattoo:Yd,handlePreviewTattoo:Zd,handleDeleteTattoo:Qd,handleClearTattoos:Xd,onExit:Ln,onSave:Me,isDev:pi})]}):C(ou,{onMouseDown:xe,onMouseMove:zn,onMouseUp:Be,onMouseLeave:qn,style:{cursor:o.current?"grabbing":"default",justifyContent:"flex-end"},children:[pi,I&&Ee.hasCustomization&&u(R2,{style:{position:"relative",left:"auto",right:"auto",marginRight:"16px",zIndex:100},children:u(Mm,{hasMainColor:Ee.hasMainColor,mainColor:Ee.mainColor,onMainColorChange:Ee.onMainColorChange,colorPickerType:Ee.colorPickerType,hasSecondaryColor:Ee.hasSecondaryColor,secondaryColor:Ee.secondaryColor,onSecondaryColorChange:Ee.onSecondaryColorChange,hasOpacity:Ee.hasOpacity,opacity:Ee.opacity,onOpacityChange:Ee.onOpacityChange,hasVariation:Ee.hasVariation,variation:Ee.variation,maxVariation:Ee.maxVariation,onVariationChange:Ee.onVariationChange})}),C(F4,{children:[u(I8,{title:j==="clothing"?"CLOTH STORE":Zm,cameraType:R,onPrevCamera:ge,onNextCamera:me,onToggleCamera:ye,hasCustomization:Ee.hasCustomization,isCustomizationOpen:I,onToggleCustomization:()=>V($=>!$),onPrevVariation:Gm,onNextVariation:Ym}),Xt.length>1&&u("div",{style:{padding:"6px 12px",background:"rgba(15, 16, 20, 0.95)",borderBottom:"1px solid rgba(255, 255, 255, 0.06)"},children:u(V4,{children:Xt.map($=>u(B4,{$active:j===$.id,onClick:()=>{K($.id),$.id==="clothing"&&q("mosaic")},children:$.label},$.id))})}),u(N4,{children:j==="clothing"&&W==="mosaic"?u(O8,{page:O,onSelectCategory:Ne,activeCategoryId:F}):j==="clothing"&&W==="detail"?u(E0,{categoryTitle:qd,categoryIcon:Kt==null?void 0:Kt.icon,totalItems:Jd,onBack:()=>q("mosaic"),onSearchSubmit:ef,children:tf()}):u(E0,{categoryTitle:qd,categoryIcon:Kt==null?void 0:Kt.icon,totalItems:Jd,onBack:()=>K("clothing"),onSearchSubmit:ef,children:tf()})}),u(V8,{page:O,onPageChange:ie,isDetailView:j==="clothing"&&W==="detail",onBackToMosaic:()=>q("mosaic"),onExit:Ln,onSave:Me,onRotateLeft:()=>oe(-15),onRotateRight:()=>oe(15)})]})]});return C(Tt,{children:[Sr.map(({item:$,key:z,props:H})=>$&&u(eu.div,{style:H,children:Km},z)),Dt.map(({item:$,key:z,props:H})=>$&&u(eu.div,{style:H,children:u(Up,{title:En.modal.save.title,description:En.modal.save.description,accept:En.modal.accept,decline:En.modal.decline,handleAccept:()=>Yr(!0),handleDecline:()=>Yr(!1)})},z)),ae.map(({item:$,key:z,props:H})=>$&&u(eu.div,{style:H,children:u(Up,{title:En.modal.exit.title,description:En.modal.exit.description,accept:En.modal.accept,decline:En.modal.decline,handleAccept:()=>an(!0),handleDecline:()=>an(!1)})},z))]})},hu={...hy},Q9=()=>{const[e,t]=y.exports.useState(hu),n=y.exports.useCallback(async()=>{const r=await ee.post("get_theme_configuration"),o=r&&typeof r=="object"&&!Array.isArray(r)?{...hu,...r}:hu;t(o)},[]);return y.exports.useEffect(()=>{n().catch(console.error)},[n]),u(Ev,{children:C(v5,{theme:e,children:[u(Z9,{}),u(k5,{})]})})},X9=document.getElementById("root"),K9=jh(X9);K9.render(C(on.StrictMode,{children:[u(Q9,{}),u(py,{})]}));
