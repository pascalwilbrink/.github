"use strict";(()=>{function S(c){return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},S(c)}function B(){"use strict";B=function(){return i};var c,i={},u=Object.prototype,s=u.hasOwnProperty,h=Object.defineProperty||function(r,t,e){r[t]=e.value},m=typeof Symbol=="function"?Symbol:{},l=m.iterator||"@@iterator",b=m.asyncIterator||"@@asyncIterator",v=m.toStringTag||"@@toStringTag";function d(r,t,e){return Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),r[t]}try{d({},"")}catch{d=function(e,n,a){return e[n]=a}}function D(r,t,e,n){var a=t&&t.prototype instanceof j?t:j,o=Object.create(a.prototype),f=new F(n||[]);return h(o,"_invoke",{value:z(r,e,f)}),o}function G(r,t,e){try{return{type:"normal",arg:r.call(t,e)}}catch(n){return{type:"throw",arg:n}}}i.wrap=D;var M="suspendedStart",$="suspendedYield",W="executing",C="completed",g={};function j(){}function _(){}function L(){}var N={};d(N,l,function(){return this});var P=Object.getPrototypeOf,k=P&&P(P(A([])));k&&k!==u&&s.call(k,l)&&(N=k);var T=L.prototype=j.prototype=Object.create(N);function Y(r){["next","throw","return"].forEach(function(t){d(r,t,function(e){return this._invoke(t,e)})})}function O(r,t){function e(a,o,f,p){var y=G(r[a],r,o);if(y.type!=="throw"){var x=y.arg,w=x.value;return w&&S(w)=="object"&&s.call(w,"__await")?t.resolve(w.__await).then(function(E){e("next",E,f,p)},function(E){e("throw",E,f,p)}):t.resolve(w).then(function(E){x.value=E,f(x)},function(E){return e("throw",E,f,p)})}p(y.arg)}var n;h(this,"_invoke",{value:function(o,f){function p(){return new t(function(y,x){e(o,f,y,x)})}return n=n?n.then(p,p):p()}})}function z(r,t,e){var n=M;return function(a,o){if(n===W)throw new Error("Generator is already running");if(n===C){if(a==="throw")throw o;return{value:c,done:!0}}for(e.method=a,e.arg=o;;){var f=e.delegate;if(f){var p=q(f,e);if(p){if(p===g)continue;return p}}if(e.method==="next")e.sent=e._sent=e.arg;else if(e.method==="throw"){if(n===M)throw n=C,e.arg;e.dispatchException(e.arg)}else e.method==="return"&&e.abrupt("return",e.arg);n=W;var y=G(r,t,e);if(y.type==="normal"){if(n=e.done?C:$,y.arg===g)continue;return{value:y.arg,done:e.done}}y.type==="throw"&&(n=C,e.method="throw",e.arg=y.arg)}}}function q(r,t){var e=t.method,n=r.iterator[e];if(n===c)return t.delegate=null,e==="throw"&&r.iterator.return&&(t.method="return",t.arg=c,q(r,t),t.method==="throw")||e!=="return"&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),g;var a=G(n,r.iterator,t.arg);if(a.type==="throw")return t.method="throw",t.arg=a.arg,t.delegate=null,g;var o=a.arg;return o?o.done?(t[r.resultName]=o.value,t.next=r.nextLoc,t.method!=="return"&&(t.method="next",t.arg=c),t.delegate=null,g):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function H(r){var t={tryLoc:r[0]};1 in r&&(t.catchLoc=r[1]),2 in r&&(t.finallyLoc=r[2],t.afterLoc=r[3]),this.tryEntries.push(t)}function I(r){var t=r.completion||{};t.type="normal",delete t.arg,r.completion=t}function F(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(H,this),this.reset(!0)}function A(r){if(r||r===""){var t=r[l];if(t)return t.call(r);if(typeof r.next=="function")return r;if(!isNaN(r.length)){var e=-1,n=function a(){for(;++e<r.length;)if(s.call(r,e))return a.value=r[e],a.done=!1,a;return a.value=c,a.done=!0,a};return n.next=n}}throw new TypeError(S(r)+" is not iterable")}return _.prototype=L,h(T,"constructor",{value:L,configurable:!0}),h(L,"constructor",{value:_,configurable:!0}),_.displayName=d(L,v,"GeneratorFunction"),i.isGeneratorFunction=function(r){var t=typeof r=="function"&&r.constructor;return!!t&&(t===_||(t.displayName||t.name)==="GeneratorFunction")},i.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,L):(r.__proto__=L,d(r,v,"GeneratorFunction")),r.prototype=Object.create(T),r},i.awrap=function(r){return{__await:r}},Y(O.prototype),d(O.prototype,b,function(){return this}),i.AsyncIterator=O,i.async=function(r,t,e,n,a){a===void 0&&(a=Promise);var o=new O(D(r,t,e,n),a);return i.isGeneratorFunction(t)?o:o.next().then(function(f){return f.done?f.value:o.next()})},Y(T),d(T,v,"Generator"),d(T,l,function(){return this}),d(T,"toString",function(){return"[object Generator]"}),i.keys=function(r){var t=Object(r),e=[];for(var n in t)e.push(n);return e.reverse(),function a(){for(;e.length;){var o=e.pop();if(o in t)return a.value=o,a.done=!1,a}return a.done=!0,a}},i.values=A,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(I),!t)for(var e in this)e.charAt(0)==="t"&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=c)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if(t.type==="throw")throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(x,w){return f.type="throw",f.arg=t,e.next=x,w&&(e.method="next",e.arg=c),!!w}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],f=o.completion;if(o.tryLoc==="root")return n("end");if(o.tryLoc<=this.prev){var p=s.call(o,"catchLoc"),y=s.call(o,"finallyLoc");if(p&&y){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(p){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!y)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&s.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&(t==="break"||t==="continue")&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var f=o?o.completion:{};return f.type=t,f.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(f)},complete:function(t,e){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if(a.type==="throw"){var o=a.arg;I(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},this.method==="next"&&(this.arg=c),g}},i}function R(c,i,u,s,h,m,l){try{var b=c[m](l),v=b.value}catch(d){u(d);return}b.done?i(v):Promise.resolve(v).then(s,h)}function J(c){return function(){var i=this,u=arguments;return new Promise(function(s,h){var m=c.apply(i,u);function l(v){R(m,s,h,l,b,"next",v)}function b(v){R(m,s,h,l,b,"throw",v)}l(void 0)})}}var K=function(i){var u=document.createElement("button");u.classList.add("button","button--copy-code"),u.type="button",u.innerText="Copy",u.addEventListener("click",function(){Q(u,i)}),V(u,i)},Q=function(){var c=J(B().mark(function i(u,s){var h;return B().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return h=s.querySelector("pre > code[data-lang]"),l.prev=1,l.next=4,navigator.clipboard.writeText(h.innerText);case 4:l.next=8;break;case 6:l.prev=6,l.t0=l.catch(1);case 8:return l.prev=8,U(u),l.finish(8);case 11:case"end":return l.stop()}},i,null,[[1,6,8,11]])}));return function(u,s){return c.apply(this,arguments)}}(),U=function(i){i.blur(),i.innerText="Copied!",setTimeout(function(){i.innerText="Copy"},2e3)},V=function(i,u){var s;u.insertBefore(i,u.firstChild);var h=document.createElement("div");h.classList.add("highlight-wrapper"),(s=u.parentNode)===null||s===void 0||s.insertBefore(h,u),h.appendChild(u)};document.querySelectorAll("div.highlight").forEach(function(c){return K(c)});})();
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
