parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var t=document.querySelector(".share"),s=document.querySelector(".popup-desktop"),e=document.querySelectorAll(".popup-desktop button"),o=document.querySelector(".bottom-sect");t.addEventListener("click",function(){s.classList.toggle("show"),window.matchMedia("(max-width: 640px)").matches?s.classList.add("no-after"):s.classList.remove("no-after"),window.matchMedia("(max-width: 640px)").matches?o.classList.add("no-padding"):o.classList.remove("no-padding")}),e.forEach(function(t){t.addEventListener("click",function(){s.classList.toggle("show"),s.classList.contains("show")||o.classList.remove("no-padding")})}),document.addEventListener("click",function(e){e.target.closest("button")===t||e.target.closest(".popup-desktop")||e.target.closest(".popup-desktop button")||(s.classList.remove("show"),s.classList.contains("show")||o.classList.remove("no-padding"))}),window.addEventListener("resize",function(){s.classList.contains("show")&&window.matchMedia("(min-width: 640px)").matches&&(o.classList.remove("no-padding"),s.classList.remove("no-after"))});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/article-preview-component.5642c52d.js.map