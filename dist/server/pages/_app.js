"use strict";(()=>{var e={};e.id=888,e.ids=[888],e.modules={6041:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(167),o=n._(r(6689)),i=r(1687);async function u(e){let{Component:t,ctx:r}=e,n=await (0,i.loadGetInitialProps)(t,r);return{pageProps:n}}class s extends o.default.Component{render(){let{Component:e,pageProps:t}=this.props;return o.default.createElement(e,t)}}s.origGetInitialProps=u,s.getInitialProps=u,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1687:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return n},isAbsoluteUrl:function(){return i},getLocationOrigin:function(){return u},getURL:function(){return s},getDisplayName:function(){return a},isResSent:function(){return c},normalizeRepeatedSlashes:function(){return l},loadGetInitialProps:function(){return f},SP:function(){return d},ST:function(){return p},DecodeError:function(){return g},NormalizeError:function(){return m},PageNotFoundError:function(){return P},MissingStaticPage:function(){return y},MiddlewareNotFoundError:function(){return E},stringifyError:function(){return _}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function u(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=u();return e.substring(t.length)}function a(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function l(e){let t=e.split("?"),r=t[0];return r.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&c(r))return n;if(!n){let t='"'+a(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.';throw Error(t)}return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class m extends Error{}class P extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class E extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function _(e){return JSON.stringify({message:e.message,stack:e.stack})}},6689:e=>{e.exports=require("react")},167:(e,t)=>{t._=t._interop_require_default=function(e){return e&&e.__esModule?e:{default:e}}}};var t=require("../webpack-runtime.js");t.C(e);var r=t(t.s=6041);module.exports=r})();