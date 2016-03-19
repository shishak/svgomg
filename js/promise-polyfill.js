(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";window.Promise=require("es6-promise").Promise;
//# sourceMappingURL=out.js.map

},{"es6-promise":3}],2:[function(require,module,exports){
function drainQueue(){if(!draining){draining=!0;for(var e,o=queue.length;o;){e=queue,queue=[];for(var r=-1;++r<o;)e[r]();o=queue.length}draining=!1}}function noop(){}var process=module.exports={},queue=[],draining=!1;process.nextTick=function(e){queue.push(e),draining||setTimeout(drainQueue,0)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.binding=function(e){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(e){throw new Error("process.chdir is not supported")},process.umask=function(){return 0};
},{}],3:[function(require,module,exports){
(function (process,global){
(function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){return"object"==typeof t&&null!==t}function r(t){U=t}function o(t){B=t}function i(){var t=process.nextTick,e=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);return Array.isArray(e)&&"0"===e[1]&&"10"===e[2]&&(t=setImmediate),function(){t(f)}}function u(){return function(){N(f)}}function s(){var t=0,e=new J(f),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function c(){var t=new MessageChannel;return t.port1.onmessage=f,function(){t.port2.postMessage(0)}}function a(){return function(){setTimeout(f,1)}}function f(){for(var t=0;z>t;t+=2){var e=V[t],n=V[t+1];e(n),V[t]=void 0,V[t+1]=void 0}z=0}function l(){try{var t=require,e=t("vertx");return N=e.runOnLoop||e.runOnContext,u()}catch(n){return a()}}function p(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function h(){return new TypeError("A promises callback cannot return that same promise.")}function d(t){try{return t.then}catch(e){return et.error=e,et}}function v(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function y(t,e,n){B(function(t){var r=!1,o=v(n,e,function(n){r||(r=!0,e!==n?g(t,n):A(t,n))},function(e){r||(r=!0,E(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,E(t,o))},t)}function m(t,e){e._state===Z?A(t,e._result):e._state===tt?E(t,e._result):j(e,void 0,function(e){g(t,e)},function(e){E(t,e)})}function b(t,n){if(n.constructor===t.constructor)m(t,n);else{var r=d(n);r===et?E(t,et.error):void 0===r?A(t,n):e(r)?y(t,n,r):A(t,n)}}function g(e,n){e===n?E(e,_()):t(n)?b(e,n):A(e,n)}function w(t){t._onerror&&t._onerror(t._result),S(t)}function A(t,e){t._state===X&&(t._result=e,t._state=Z,0!==t._subscribers.length&&B(S,t))}function E(t,e){t._state===X&&(t._state=tt,t._result=e,B(w,t))}function j(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+Z]=n,o[i+tt]=r,0===i&&t._state&&B(S,t)}function S(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,u=0;u<e.length;u+=3)r=e[u],o=e[u+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function T(){this.error=null}function P(t,e){try{return t(e)}catch(n){return nt.error=n,nt}}function x(t,n,r,o){var i,u,s,c,a=e(r);if(a){if(i=P(r,o),i===nt?(c=!0,u=i.error,i=null):s=!0,n===i)return void E(n,h())}else i=o,s=!0;n._state!==X||(a&&s?g(n,i):c?E(n,u):t===Z?A(n,i):t===tt&&E(n,i))}function C(t,e){try{e(function(e){g(t,e)},function(e){E(t,e)})}catch(n){E(t,n)}}function M(t,e){var n=this;n._instanceConstructor=t,n.promise=new t(p),n._validateInput(e)?(n._input=e,n.length=e.length,n._remaining=e.length,n._init(),0===n.length?A(n.promise,n._result):(n.length=n.length||0,n._enumerate(),0===n._remaining&&A(n.promise,n._result))):E(n.promise,n._validationError())}function O(t){return new rt(this,t).promise}function k(t){function e(t){g(o,t)}function n(t){E(o,t)}var r=this,o=new r(p);if(!$(t))return E(o,new TypeError("You must pass an array to race.")),o;for(var i=t.length,u=0;o._state===X&&i>u;u++)j(r.resolve(t[u]),void 0,e,n);return o}function I(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function Y(t){var e=this,n=new e(p);return E(n,t),n}function q(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function F(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function D(t){this._id=ct++,this._state=void 0,this._result=void 0,this._subscribers=[],p!==t&&(e(t)||q(),this instanceof D||F(),C(this,t))}function K(){var t;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;n&&"[object Promise]"===Object.prototype.toString.call(n.resolve())&&!n.cast||(t.Promise=at)}var L;L=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var N,U,W,$=L,z=0,B=({}.toString,function(t,e){V[z]=t,V[z+1]=e,z+=2,2===z&&(U?U(f):W())}),G="undefined"!=typeof window?window:void 0,H=G||{},J=H.MutationObserver||H.WebKitMutationObserver,Q="undefined"!=typeof process&&"[object process]"==={}.toString.call(process),R="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,V=new Array(1e3);W=Q?i():J?s():R?c():void 0===G&&"function"==typeof require?l():a();var X=void 0,Z=1,tt=2,et=new T,nt=new T;M.prototype._validateInput=function(t){return $(t)},M.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},M.prototype._init=function(){this._result=new Array(this.length)};var rt=M;M.prototype._enumerate=function(){for(var t=this,e=t.length,n=t.promise,r=t._input,o=0;n._state===X&&e>o;o++)t._eachEntry(r[o],o)},M.prototype._eachEntry=function(t,e){var r=this,o=r._instanceConstructor;n(t)?t.constructor===o&&t._state!==X?(t._onerror=null,r._settledAt(t._state,e,t._result)):r._willSettleAt(o.resolve(t),e):(r._remaining--,r._result[e]=t)},M.prototype._settledAt=function(t,e,n){var r=this,o=r.promise;o._state===X&&(r._remaining--,t===tt?E(o,n):r._result[e]=n),0===r._remaining&&A(o,r._result)},M.prototype._willSettleAt=function(t,e){var n=this;j(t,void 0,function(t){n._settledAt(Z,e,t)},function(t){n._settledAt(tt,e,t)})};var ot=O,it=k,ut=I,st=Y,ct=0,at=D;D.all=ot,D.race=it,D.resolve=ut,D.reject=st,D._setScheduler=r,D._setAsap=o,D._asap=B,D.prototype={constructor:D,then:function(t,e){var n=this,r=n._state;if(r===Z&&!t||r===tt&&!e)return this;var o=new this.constructor(p),i=n._result;if(r){var u=arguments[r-1];B(function(){x(r,o,u,i)})}else j(n,o,t,e);return o},"catch":function(t){return this.then(null,t)}};var ft=K,lt={Promise:at,polyfill:ft};"function"==typeof define&&define.amd?define(function(){return lt}):"undefined"!=typeof module&&module.exports?module.exports=lt:"undefined"!=typeof this&&(this.ES6Promise=lt),ft()}).call(this);
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":2}]},{},[1])


//# sourceMappingURL=promise-polyfill.js.map
