(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var xhr=require("xhr");document.getElementById("wizardBtn").addEventListener("click",function(){console.log("Button Pressed --- ");var e=new XMLHttpRequest;e.onreadystatechange=function(){4==e.readyState&&200==e.status&&(console.log("success: ",e.responseText),document.getElementById("wizardBox").innerHTML=e.responseText)},e.open("GET","https://api.wheretheiss.at/v1/satellites",!0),e.send()});
},{"xhr":2}],2:[function(require,module,exports){
"use strict";function forEachArray(e,t){for(var r=0;r<e.length;r++)t(e[r])}function isEmpty(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function initParams(e,t,r){var n=e;return isFunction(t)?(r=t,"string"==typeof e&&(n={uri:e})):n=xtend(t,{uri:e}),n.callback=r,n}function createXHR(e,t,r){return t=initParams(e,t,r),_createXHR(t)}function _createXHR(e){function t(){4===i.readyState&&o()}function r(){var e=void 0;if(i.response?e=i.response:"text"!==i.responseType&&i.responseType||(e=i.responseText||i.responseXML),H)try{e=JSON.parse(e)}catch(t){}return e}function n(e){clearTimeout(d),e instanceof Error||(e=new Error(""+(e||"Unknown XMLHttpRequest Error"))),e.statusCode=0,s(e,a)}function o(){if(!c){var t;clearTimeout(d),t=e.useXDR&&void 0===i.status?200:1223===i.status?204:i.status;var n=a,o=null;0!==t?(n={body:r(),statusCode:t,method:l,headers:{},url:p,rawRequest:i},i.getAllResponseHeaders&&(n.headers=parseHeaders(i.getAllResponseHeaders()))):o=new Error("Internal XMLHttpRequest Error"),s(o,n,n.body)}}var s=e.callback;if("undefined"==typeof s)throw new Error("callback argument missing");s=once(s);var a={body:void 0,headers:{},statusCode:0,method:l,url:p,rawRequest:i},i=e.xhr||null;i||(i=e.cors||e.useXDR?new createXHR.XDomainRequest:new createXHR.XMLHttpRequest);var u,c,d,p=i.url=e.uri||e.url,l=i.method=e.method||"GET",f=e.body||e.data||null,R=i.headers=e.headers||{},h=!!e.sync,H=!1;if("json"in e&&(H=!0,R.accept||R.Accept||(R.Accept="application/json"),"GET"!==l&&"HEAD"!==l&&(R["content-type"]||R["Content-Type"]||(R["Content-Type"]="application/json"),f=JSON.stringify(e.json))),i.onreadystatechange=t,i.onload=o,i.onerror=n,i.onprogress=function(){},i.ontimeout=n,i.open(l,p,!h,e.username,e.password),h||(i.withCredentials=!!e.withCredentials),!h&&e.timeout>0&&(d=setTimeout(function(){c=!0,i.abort("timeout");var e=new Error("XMLHttpRequest timeout");e.code="ETIMEDOUT",n(e)},e.timeout)),i.setRequestHeader)for(u in R)R.hasOwnProperty(u)&&i.setRequestHeader(u,R[u]);else if(e.headers&&!isEmpty(e.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in e&&(i.responseType=e.responseType),"beforeSend"in e&&"function"==typeof e.beforeSend&&e.beforeSend(i),i.send(f),i}function noop(){}var window=require("global/window"),once=require("once"),isFunction=require("is-function"),parseHeaders=require("parse-headers"),xtend=require("xtend");module.exports=createXHR,createXHR.XMLHttpRequest=window.XMLHttpRequest||noop,createXHR.XDomainRequest="withCredentials"in new createXHR.XMLHttpRequest?createXHR.XMLHttpRequest:window.XDomainRequest,forEachArray(["get","put","post","patch","head","delete"],function(e){createXHR["delete"===e?"del":e]=function(t,r,n){return r=initParams(t,r,n),r.method=e.toUpperCase(),_createXHR(r)}});

},{"global/window":3,"is-function":4,"once":5,"parse-headers":8,"xtend":9}],3:[function(require,module,exports){
(function (global){
"undefined"!=typeof window?module.exports=window:"undefined"!=typeof global?module.exports=global:"undefined"!=typeof self?module.exports=self:module.exports={};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
function isFunction(o){var t=toString.call(o);return"[object Function]"===t||"function"==typeof o&&"[object RegExp]"!==t||"undefined"!=typeof window&&(o===window.setTimeout||o===window.alert||o===window.confirm||o===window.prompt)}module.exports=isFunction;var toString=Object.prototype.toString;

},{}],5:[function(require,module,exports){
function once(n){var o=!1;return function(){return o?void 0:(o=!0,n.apply(this,arguments))}}module.exports=once,once.proto=once(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return once(this)},configurable:!0})});

},{}],6:[function(require,module,exports){
function forEach(r,t,o){if(!isFunction(t))throw new TypeError("iterator must be a function");arguments.length<3&&(o=this),"[object Array]"===toString.call(r)?forEachArray(r,t,o):"string"==typeof r?forEachString(r,t,o):forEachObject(r,t,o)}function forEachArray(r,t,o){for(var n=0,a=r.length;a>n;n++)hasOwnProperty.call(r,n)&&t.call(o,r[n],n,r)}function forEachString(r,t,o){for(var n=0,a=r.length;a>n;n++)t.call(o,r.charAt(n),n,r)}function forEachObject(r,t,o){for(var n in r)hasOwnProperty.call(r,n)&&t.call(o,r[n],n,r)}var isFunction=require("is-function");module.exports=forEach;var toString=Object.prototype.toString,hasOwnProperty=Object.prototype.hasOwnProperty;

},{"is-function":4}],7:[function(require,module,exports){
function trim(r){return r.replace(/^\s*|\s*$/g,"")}exports=module.exports=trim,exports.left=function(r){return r.replace(/^\s*/,"")},exports.right=function(r){return r.replace(/\s*$/,"")};

},{}],8:[function(require,module,exports){
var trim=require("trim"),forEach=require("for-each"),isArray=function(r){return"[object Array]"===Object.prototype.toString.call(r)};module.exports=function(r){if(!r)return{};var e={};return forEach(trim(r).split("\n"),function(r){var t=r.indexOf(":"),i=trim(r.slice(0,t)).toLowerCase(),o=trim(r.slice(t+1));"undefined"==typeof e[i]?e[i]=o:isArray(e[i])?e[i].push(o):e[i]=[e[i],o]}),e};

},{"for-each":6,"trim":7}],9:[function(require,module,exports){
function extend(){for(var r={},e=0;e<arguments.length;e++){var t=arguments[e];for(var n in t)hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}module.exports=extend;var hasOwnProperty=Object.prototype.hasOwnProperty;

},{}]},{},[1]);
