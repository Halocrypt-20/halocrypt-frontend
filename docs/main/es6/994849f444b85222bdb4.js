(()=>{var e={386:(e,t,n)=>{"use strict";function r(e,t,n){if(!(null==e||e instanceof Text||t===n)){for(var r in null==e._listeners&&(e._listeners={}),null!=t?null==e._listeners&&(e.onclick=U):t=A,null==n&&(n=A),n)r in t||(delete e._listeners[r],e.removeEventListener(r,o));for(var i in t){var a=t[i],l=n[i];l!==a&&(null==l&&e.addEventListener(i,o),e._listeners[i]=a)}}}function o(e){return this._listeners[e.type].call(this,e)}n.d(t,{ZP:()=>de,A:()=>ue,gr:()=>re,wA:()=>R,HY:()=>U,F0:()=>se,Qn:()=>ae,Er:()=>ce,az:()=>E,uX:()=>le,sY:()=>ee});var i="undefined"!=typeof Promise,a="undefined"!=typeof requestAnimationFrame,l=setTimeout,s=i?Promise.prototype.then.bind(Promise.resolve()):l,u={deferImplementation:s,scheduleRender:a?function(e){return requestAnimationFrame(e)}:s,eagerlyHydrate:!0,beforeHookRender:null},c=[],d=[];function p(){h(c)}function m(){h(d)}function h(e){for(var t;t=e.pop();)v(t)}function f(e){var t=e.name;return"componentDidMount"===t?c.push(e):"componentDidUpdate"===t?d.push(e):void v(e)}function v(e){var t=e.args,n=e.bind,r=e.name;n._lastLifeCycleMethod=r;var o=n[r],a=!!n.componentDidCatch;if(i)Promise.resolve().then(()=>o&&o.apply(n,t)).catch(e=>{if(a)return n.componentDidCatch(e);throw e});else try{o.apply(n,t)}catch(e){if(a)return n.componentDidCatch(e);throw e}}var _={key:1,ref:1,children:1};function g(e){return e in _}function y(e,t,n){n=n||"";var r=e.style;if("string"!=typeof t){var o="string"==typeof n;if(o)r.cssText="";else for(var i in n)i in t||(r[i]="");for(var a in t){var l=t[a];(o||l!==n[a])&&(r[a]=l)}}else r.cssText=t}function b(e,t,n){var r=Array.isArray;r(t)&&(t=t.join(" ").trim()),r(n)&&(n=n.join(" ").trim()),t!==n&&M(e,"className",t)}function C(e,t,n){N(e,t,n,"_renders"),N(e,t,n,"_renderedBy")}var D={_dom:"_FragmentDomNodeChildren",_FragmentDomNodeChildren:"_dom"};function N(e,t,n,r){var o=e;if(o){var i=D[t];return i&&(o[i]=null),o[t]=n,N(o[r],t,n,r)}}function M(e,t,n){return t in e?e[t]=null==n?"":n:null==n?e.removeAttribute(t):e.setAttribute(t,n)}function S(e,t){null!=t&&N(e,"_parentDom",t,"_renderedBy")}function x(e,t){if(null!=e&&e!==A){x(e._renders,t);var n=e._component;t||null==n||(n.setState=U,n._VNode=null,f({name:"componentWillUnmount",bind:n}));var o=e._children;if(o)for(;o.length;)x(o.pop(),t);!function(e,t){var n=e._dom;t||null==n||(!(e.type===V)&&r(n,null,e.events),function(e){z(w,e)}(n),function(e){if(null!=e){var t=e.parentNode;t&&t.removeChild(e)}}(n)),function(e,t){if(!t&&null!=e){var n=e._nextSibDomVNode;if(null!=n){var r=n._dom,o=r&&r.previousSibling;C(n,"_prevSibDomVNode",o&&o._VNode)}var i=e._prevSibDomVNode;if(null!=i){var a=i._dom,l=a&&a.nextSibling;C(i,"_nextSibDomVNode",l&&l._VNode),z(I,e)}}}(e,t)}(e,t)}}var w={_VNode:1,_listeners:1,onclick:1},I={events:1,_FragmentDomNodeChildren:1,_children:1,_component:1,_depth:1,_dom:1,_nextSibDomVNode:1,_prevSibDomVNode:1,_renderedBy:1,_renders:1,_parentDom:1};function z(e,t){if(null!=t)for(var n in e)t[n]=null}var A={},P=[];function j(e,t,n){return function e(t,n,r,o){if(!t)return n;for(var i=0;i<t.length;i++){var a=t[i];Array.isArray(a)?e(a,n,r,o):o&&null==a||n.push(r?r(a):a)}return n}(e,[],t,n)}function L(e){return"o"===e[0]&&"n"===e[1]}var T=A.hasOwnProperty,k="assign"in Object?A.constructor.assign:function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)T.call(n,r)&&(e[r]=n[r])}return e},V=Object.freeze({});function E(e,t){if(null==e||"boolean"==typeof e)return null;null==t&&(t=A);var n=t.ref,r=t.key,o="string"==typeof e?{}:null;t=F(t,o);for(var i=P,a=arguments.length,l=new Array(a>2?a-2:0),s=2;s<a;s++)l[s-2]=arguments[s];return l.length&&null==t.children&&(i=j(l)),null!=t.children&&(i=j([t.children])),t.children=i,O(e,t,o,r,n)}function O(e,t,n,r,o){var i={type:"string"==typeof e?e.toLowerCase():e,props:t,events:n,key:r,ref:o,_dom:null,_children:null,_component:null,_nextSibDomVNode:null,_renders:null,_renderedBy:null,_prevSibDomVNode:null,_FragmentDomNodeChildren:null,_parentDom:null,_depth:0,__self:null};return i.__self=i,i}var U=function(){},Q={key:1,ref:1};function F(e,t){var n={},r=null!=t;for(var o in e)null==Q[o]&&(n[o]=e[o],r&&L(o)&&(t[o.substr(2).toLowerCase()]=e[o]));return n}function B(e){return null==e||"boolean"==typeof e?E(V):"string"==typeof e||"number"==typeof e?O(null,String(e)):Array.isArray(e)?E(U,null,e):null!=e._dom?O(e.type,e.props,e.events,e.key,null):e}function H(e,t,n,r){return function(e,t,n,r,o){for(var i=e.type===U,a=t.length,l=Math.max(a,n.length),s=0;s<l;s++){var u=t[s]||(s<a?E(V):null),c=n[s]||A;if(null==c._nextSibDomVNode){var d=i?e._nextSibDomVNode:null;null!=d&&N(u,"_nextSibDomVNode",d,"_renderedBy")}K(u,c,r,null,o),i&&W(e,u,s)}}(e,e._children||P,(t||A)._children||P,n,r)}function W(e,t,n){null!=t&&null!=t._nextSibDomVNode&&N(e,"_nextSibDomVNode",t._nextSibDomVNode,"_renderedBy");var r=t&&(t._dom||t._FragmentDomNodeChildren),o=e._FragmentDomNodeChildren;null==o&&N(e,"_FragmentDomNodeChildren",o=[],"_renderedBy"),o[n]=r}var Y=[];class R{constructor(e){this.state={},this.props=e}render(e,t){return null}setState(e){if(this._oldState=k({},this.state),this._nextState=k({},this.state),"function"==typeof e){var t=e(this._nextState,this.props);if(null==t)return;k(this._nextState,t)}else k(this._nextState,e);var n;this.state=this._nextState,(n=this)._dirty=!0,1===Y.push(n)&&u.scheduleRender(Z)}forceUpdate(e){var t=!1!==e;this.base=K(this._VNode,k({},this._VNode),this._VNode._parentDom,t,{depth:this._depth}),"function"==typeof e&&e(),p(),m()}}function Z(){var e;for(Y.sort((e,t)=>e._depth-t._depth);e=Y.pop();)e._dirty&&(e._dirty=!1,e.forceUpdate(!1))}var G=e=>"function"==typeof e&&e!==U,J={_nextSibDomVNode:1,_prevSibDomVNode:1};function q(e,t){if(t._renders=e,e)for(var n in e._renderedBy=t,J)e[n]=t[n]}function $(e){return this.constructor(e)}function X(e,t,n){var r,o=k({},e.state||A,e._nextState||A),i=null!=(r=t.getDerivedStateFromProps)?k({},r(n.props,o)):null;i&&k(o,i),e._nextState=o}function K(e,t,n,o,i){if("boolean"==typeof e&&(e=null),null==t&&(t=A),null!=e){if(e===A)return null;if(!((a=e)&&a.__self===a||(console.warn("component not of expected type =>",a),0)))return null;var a;if(t===e)return e._dom;!function(e,t){if(t!==A&&null!=e&&null!=t){var n=t._prevSibDomVNode;null==e._prevSibDomVNode&&null!=n&&(C(e,"_prevSibDomVNode",n),C(n,"_nextSibDomVNode",e));var r=t._nextSibDomVNode;null==e._nextSibDomVNode&&null!=r&&(C(e,"_nextSibDomVNode",r),C(r,"_prevSibDomVNode",e))}}(e,t);var l=t.type,s=e.type,u=G(s);s===l&&u&&(e._component=t._component),s!==l&&(x(t),t=A);var c,d,p=e;if("string"!=typeof e.props&&s!==V&&(e._children=(d=(c=e).props.children)===P?(c.props.children=void 0,[]):j([d],B),e=function(e,t,n,r){var o;return null!=e&&G(o=e.type)?(t=t||A,function(e){var t=e.prototype;return!(!t||!t.render)}(o)?function(e,t,n,r){var o,i=e.type,a=e._component;if(null!=a){if(null!=a.shouldComponentUpdate&&!n&&!1===a.shouldComponentUpdate(e.props,a._nextState||a.state))return A;X(a,i,e),f({bind:a,name:"componentWillUpdate",args:[e.props,a._nextState]}),o="componentDidUpdate"}else o="componentDidMount",a=new i(e.props),e._component=a,X(a,i,e),f({bind:a,name:"componentWillMount"}),a._depth=++r.depth;a._VNode=e;var l=a._oldState,s=t.props;a.state=a._nextState,a._oldState=null,a._nextState=null,a.props=e.props;var u=B(a.render(a.props,a.state));return f({bind:a,name:o,args:"componentDidUpdate"===o?[s,l]:[]}),q(u,e),u}(e,t,n,r):function(e,t){var n,r,o=e.type;return e._component?r=e._component:(r=new R(e.props),e._component=r,r.render=$,r.constructor=o,r.props=e.props),n=B(r.render(e.props)),r._depth=++t.depth,q(n,e),n}(e,r)):e}(e,t,o,i)),G(t.type)&&(t=t._renders),e!==p)return K(e,t,n,o,i);if(l=t.type,s=e.type,S(e,n),s===U)return H(e,t,n,i);var m=t;return l!==s&&(t=null),function(e,t,n){var o,i=(t=t||A)===A,a=t._dom;(o=e.type!==t.type||null==a?function(e){if("string"==typeof e.props)return document.createTextNode("");var t=e.type;return t===V?document.createComment(""):document.createElement(t)}(e):a)._VNode=e,function(e,t,n){if(t.type!==V){if(n=n||A,"string"==typeof t.props)return function(e,t,n){return t===n||(e.nodeValue=t)}(e,t.props,n.props);var o=n.props||A,i=t.props;null!=o&&function(e,t,n){for(var r in t)r in n||M(e,r,null)}(e,o,i),function(e,t,n){for(var r in n)if(!L(r)&&!g(r)){var o=n[r],i=t[r];o!==i&&("className"!==(r="class"===r?"className":r)?"style"!==r?M(e,r,o):y(e,o,i):b(e,o,i))}}(e,o,i),r(e,t.events,n.events)}}(o,e,i?null:t),C(e,"_dom",o),function e(t,n){t&&(null!=t._component?t._component.base=n:e(t._renderedBy,n))}(e,o),i&&function(e,t,n){var r=function(e){if(e){var t=e._dom;if(t)return t;var n=e._FragmentDomNodeChildren;return n?function e(t){for(var n=0;n<t.length;n++){var r=t[n];if(Array.isArray(r)){var o=e(r);if(o)return o}else if(r)return r}}(n):void 0}}(e._nextSibDomVNode),o=e._dom;o&&(function(e,t,n){var r,o=!0;t&&t!==e&&(o=!1,r=t),!o&&r?n.insertBefore(e,r):n.appendChild(e)}(o,r,t),function(e){var t=e._dom;null==e._parentDom&&S(e,t.parentNode);var n=e._nextSibDomVNode;if(null==n){var r=t.nextSibling;null!=r&&(n=r._VNode)}C(n,"_prevSibDomVNode",e),C(e,"_nextSibDomVNode",n);var o=e._prevSibDomVNode;if(null==o){var i=t.previousSibling;null!=i&&(o=i._VNode)}C(o,"_nextSibDomVNode",e),C(e,"_prevSibDomVNode",o)}(e))}(e,n)}(e,t,n),H(e,t,e._dom,i),x(m,!0),e._dom}x(t)}function ee(e,t){var n=E(U,null,e);t.hasChildNodes()&&function(e,t){for(var n;n=e.firstChild;)e.removeChild(n)}(t),K(n,null,t,!1,{depth:0}),p(),m()}function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}class re extends R{constructor(e,t){var{componentPromise:n,fallbackComponent:r}=e;super(e,t),this.state={ready:!1,componentPromise:n,finalComponent:null,fallbackComponent:r}}static getDerivedStateFromProps(e,t){var n=t||{};return n.componentPromise===e.componentPromise||null!=e.componentPromise&&(n.componentPromise=e.componentPromise,n.ready=!1,n.finalComponent=null),n}render(e,t){var{eager:n=!0,loadComponent:r=!1}=e,o=ne(e,["eager","loadComponent","componentPromise","fallbackComponent"]),{ready:i,finalComponent:a}=t;if(!n&&!r||i||this.loadComponent(),i)return E(a,o);var l=ne(o,["children"]);return null!=this.state.fallbackComponent?E(this.state.fallbackComponent,l):oe}loadComponent(){return this.state.componentPromise().then(e=>{this.setState({ready:!0,finalComponent:e})})}}var oe=E("div",null,"Loading.."),ie=[],ae={subscribe(e){ie.includes(e)||ie.push(e)},unsubscribe(e){for(var t=0;t<ie.length;t++)if(ie[t]===e)return ie.splice(t,1)},emit(e,t){for(var n of ie)n(e,t)},unsubscribeAll(){ie.length=0}};function le(e){window.history.replaceState(A,document.title,e),ae.emit(e,{type:"redirect",native:!1})}class se extends R{static __emitter(){ae.emit(se.getPath+se.getQs,{type:"popstate",native:!0})}componentWillMount(){ae.subscribe(this._routeChangeHandler),window.addEventListener("popstate",se.__emitter)}componentWillUnmount(){window.removeEventListener("popstate",se.__emitter),this.props.destroySubscriptionOnUnmount&&ae.unsubscribeAll()}absolute(e){return new URL(e||"",location.protocol+"//"+location.host).toString()}getCurrentComponent(){return this.getPathComponent(se.getPath)||[]}_routeChangeHandler(){var[e,t]=this.getCurrentComponent();this.setState({component:e,match:t})}_notFoundComponent(){return E("div",null,'The Requested URL "'+this.absolute(se.getPath)+'" was not found')}static get getPath(){return location.pathname}static get getQs(){return location.search}getPathComponent(e){for(var t of this.state.routes){var{regex:n,component:r}=t,o=n.exec(e);if(o)return[r,o]}return[]}initComponents(e){var t=[];for(var n of e)null!=n.props&&null!=n.props.path&&t.push({regex:n.props.path,component:n});return t}constructor(e,t){var{children:n,fallbackComponent:r}=e;super(ne(e,["children","fallbackComponent"]),t),r=r||this._notFoundComponent.bind(this),this.state={routes:this.initComponents(n),fallbackComponent:r};var[o,i]=this.getCurrentComponent();this.state.component=o,this.state.match=i,this._routeChangeHandler=this._routeChangeHandler.bind(this)}componentDidMount(){}render(){var e,t=ne(this.props,["children"]),n=te({match:this.state.match},t);return null!=this.state.component&&null!=this.state.match?k((e=this.state.component).props,n):e=E(this.state.fallbackComponent,n),e.__self||(e=E(e,n)),E(U,null,e)}}function ue(e){var{native:t,href:n,onClick:r}=e,o=ne(e,["native","href","onClick"]);return o.href=n,t||null==n||(o.onClick=t=>function(e,t,n){e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),function(e){window.history.pushState(A,document.title,e),ae.emit(e,{type:"load",native:!1})}(t),null!=n&&n(e,t))}(t,e.href,r)),E("a",o)}function ce(e){return RegExp("^"+e+"(/?)$")}const de=R},961:(e,t,n)=>{"use strict";var r=n(386);function o(e){return(0,r.az)(r.A,{href:"/",class:["hoverable"].concat(e.class||[]),style:{backgroundImage:'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjEuMjMgNDU2IiBmaWxsPSJub25lIiBzdHJva2U9IiNmNzk5MzEiIHN0cm9rZS13aWR0aD0iNiI+PHBhdGggZD0iTTE4LjE2IDU3LjMybDg3LjY2LTUzLjM2YTEuMTggMS4xOCAwIDAgMSAxLjc1IDEuMzRMNjYuMTQgMTQ1LjIyYS4xNS4xNSAwIDAgMS0uMjggMEwxNy40MyA2MC4wOGEyLjA3IDIuMDcgMCAwIDEgLjczLTIuNzZ6bTIzOS4zLTMxTDY3LjIyIDE0NC44M2EuNTIuNTIgMCAwIDEtLjc4LS42TDEwNy45MiA0LjVhMi4xMiAyLjEyIDAgMCAxIDIuMzItMS40OWwxNDYuNiAyMC4zM2ExLjYyIDEuNjIgMCAwIDEgLjYzIDIuOTd6Ii8+PHBhdGggZD0iTTE3LjMgNTguMzdMMy4wNCAyODAuNzJhLjQ1LjQ1IDAgMCAwIC44Ni4yMmw2Mi0xMzUuNyIvPjxwYXRoIGQ9Ik00LjkzIDI4My45bDEzNC43IDQ5LjQgMzEuOS0xMDEuMUwzLjk3IDI3OS42Yy0xLjYyIDMuMTguMzUgNC4wNS45NiA0LjN6Ii8+PHBhdGggZD0iTTY2LjQ0IDE0NC4yM2wxMDQuMSA5MC45NCA4Ni0yMDUuNjdhMS4yMiAxLjIyIDAgMCAwLTEuNzctMS41MXpNMy4wNCAyODIuMTdsMTc3LjQzIDE3MC40OGEuNS41IDAgMCAwIC44My0uNTFsLTQwLjQ2LTEyMi42OHoiLz48cGF0aCBkPSJNMTcwLjU0IDIzOC43N2wxMC45MiAyMTMuMTJhLjQ2LjQ2IDAgMCAxLS45LjE2bC0zOC41OC0xMTguNzh6Ii8+PHBhdGggZD0iTTI1Ny45OCAyNmwtNzUuOTQgNDI2LjhhLjI2LjI2IDAgMCAxLS41MSAwbC0xMS0yMTR6Ii8+PC9zdmc+")',height:`${e.size}px`,width:`${e.size}px`,backgroundPosition:"center",backgroundRepeat:"no-repeat",display:"inline-block",margin:"auto"}})}n.d(t,{Z:()=>o})},659:()=>{},536:()=>{},628:()=>{},157:()=>{},994:()=>{}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce((t,r)=>(n.f[r](e,t),t),[])),n.u=e=>e+"/es6/c1fde68abf8d7b432070.js",n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="",(()=>{var e={179:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((n,r)=>{o=e[t]=[n,r]});r.push(o[2]=i);var a,l=n.p+n.u(t),s=document.createElement("script");s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.src=l;var u=new Error;a=r=>{a=()=>{},s.onerror=s.onload=null,clearTimeout(c);var i=(()=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o))return o[1]})();if(i){var l=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+l+": "+d+")",u.name="ChunkLoadError",u.type=l,u.request=d,i(u)}};var c=setTimeout(()=>{a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}};var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=function(t){for(var r,i,a=t[0],l=t[1],s=t[3],u=0,c=[];u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&c.push(e[i][0]),e[i]=0;for(r in l)n.o(l,r)&&(n.m[r]=l[r]);for(s&&s(n),o&&o(t);c.length;)c.shift()()};var o=r})(),(()=>{"use strict";var e=n(386);n(994),n(536),n(157),n(628),n(659);const t=function(){if("object"==typeof globalThis)return globalThis;Object.defineProperty(Object.prototype,"___this",{get:function(){return this},configurable:!0}),___this.globalThis=___this;const e=___this;return delete Object.prototype.___this,e}(),r=(t.Symbol,{}),o=r.constructor,i=r.hasOwnProperty;"undefined"!=typeof window&&(window.navigator&&!!window.navigator.userAgent||window.document&&document.createElement),"undefined"!=typeof self&&!!self.postMessage&&t.importScripts,"function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout;const a="keys"in o?o.keys:function(e){const t=[];for(const n in e)i.call(e,n)&&t.push(n);return t},l="entries"in o?o.entries:function(e){const t=a(e);let n=t.length;const r=Array(n);for(;n--;){const o=t[n];r[n]=[o,e[o]]}return r};function s(){return"Loading.."}const u=e=>e.default,c={"/":()=>n.e(827).then(n.bind(n,827)).then(u)},d=function(t){return(0,e.az)("main",{class:["router-app",t.compactLayout?"compact":"free-form"],children:(0,e.az)(e.F0,{children:l(c).map(([n,r])=>(0,e.az)("section",{"data-application-state":n,path:(0,e.Er)(n),children:(0,e.az)(e.gr,{componentPromise:r,compactLayout:t.compactLayout,fallbackComponent:s})}))})})};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const m=class extends e.wA{constructor(...t){super(...t),p(this,"state",{currentPath:e.F0.getPath}),p(this,"__routeChange",e=>{this.setState({currentPath:e})})}componentDidMount(){e.Qn.subscribe(this.__routeChange)}componentWillUnmount(){e.Qn.unsubscribe(this.__routeChange)}};var h=n(961);const f=[{text:"Leaderboard",path:"/leaderboard"},{text:"Rules",path:"/rules"},{text:"Play",path:"/play"},{text:"FAQ",path:"/faq"}],v=(t,n)=>f.map(({text:r,path:o})=>o!==t?(0,e.az)(e.A,{style:n,href:`${o}`,class:["heading-text","heading-link","hoverable"],children:(0,e.az)("span",{children:r})}):null),_={instagram:"https://www.instagram.com/halocrypt/",discord:"https://discord.gg/",twitter:"https://twitter.com",github:"/github-info"},g=t=>["instagram","twitter","discord","github"].map(n=>{const r=_[n],o="/"===r[0],i=o?e.A:"a",a=o?null:"_blank";return(0,e.az)(i,{style:t,target:a,class:`${n} social-logo`,href:r})}),y=g();class b extends m{render(t,n){return(0,e.az)("header",{"static-desktop":!0,children:["/"===n.currentPath?(0,e.az)("div",{class:"social-links",children:y}):(0,e.az)(h.Z,{size:"60"}),(0,e.az)("div",{class:"header-links",children:v(n.currentPath)})]})}}const C=g({margin:"auto"}),D=C.length;class N extends m{constructor(...e){var t,n,r;super(...e),r=()=>this.setState(e=>({enabledMenu:!e.enabledMenu})),(n="_toggleMenu")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}componentWillUpdate(){const e=document.querySelector("main");e&&(e.style.transform=this.state.enabledMenu?"scale(0.9)":"unset")}render(t,n){return(0,e.az)(e.HY,{children:[(0,e.az)("header",{children:[(0,e.az)("div",{class:"hamburger-menu",onClick:this._toggleMenu}),"/"===n.currentPath?(0,e.az)(h.Z,{size:"60"}):(0,e.az)(e.A,{href:"/",class:"heading-text halocrypt-text",children:"Halocrypt"})]}),n.enabledMenu?(0,e.az)("div",{class:"mask",onClick:this._toggleMenu}):null,(0,e.az)("div",{class:"swipeable-menu-container"+(n.enabledMenu?" expanded":""),children:[(0,e.az)("div",{class:"app-routes-mob",children:v(this.state.currentPath)}),(0,e.az)("div",{class:"social-links-mob",style:{"grid-template-columns":`repeat(${D}, 1fr)`,marginBottom:"5px"},children:C})]})]})}}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class S extends e.ZP{constructor(...e){super(...e),M(this,"state",{windowWidth:innerWidth}),M(this,"onWidthChange",()=>{const e=window.innerWidth;this.setState({windowWidth:e})})}componentDidMount(){window.addEventListener("resize",this.onWidthChange)}render(t,n){return n.windowWidth<600?(0,e.az)(N,{}):(0,e.az)(b,{})}}class x extends e.ZP{componentDidMount(){const t=e.F0.getQs;let n;(n=new URLSearchParams(t).get("__loader"))&&(0,e.uX)(n)}render(t,n){return(0,e.az)(e.HY,{children:[(0,e.az)(S,{}),(0,e.az)(d,{})]})}}(0,e.sY)((0,e.az)(x,{}),document.getElementById("app-mount"))})()})();