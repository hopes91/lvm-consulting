!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){document.querySelectorAll('[href^="#"]');e.exports=function(e){e.preventDefault();var t=.5,n=window.pageYOffset,r=e.currentTarget.href.replace(/[^#]*(.*)/,"$1"),o=document.querySelector(r).getBoundingClientRect().top,i=null;requestAnimationFrame((function e(u){null===i&&(i=u);var a=u-i;var c=null;c=o<0?Math.max(n-a/t,n+o):Math.min(n+a/t,n+o);window.scrollTo(0,c);c!==n+o?requestAnimationFrame(e):location.hash=r}))}},function(e,t,n){n(2),n(3),n(4),n(0),e.exports=n(5)},function(e,t,n){var r=n(0),o=document.querySelector(".arrow-up");window.addEventListener("scroll",(function(){window.pageYOffset>window.innerHeight/3&&(o.style.display="inline-block",o.setAttribute("tabindex","0")),0===window.pageYOffset&&(o.style.display="none",o.setAttribute("tabindex","-1"))})),o.addEventListener("click",(function(e){r(e)}))},function(e,t){window.addEventListener("load",(function(){document.querySelector(".current-year").textContent=(new Date).getFullYear()}))},function(e,t,n){var r=n(0),o=document.querySelectorAll(".info-header .section-title"),i=function(){window.innerWidth<=1024?o.forEach((function(e,t){switch(t){case 0:e.setAttribute("href","#info-investment");break;case 1:e.setAttribute("href","#info-revenue");break;case 2:e.setAttribute("href","#info-safety")}})):o.forEach((function(e){return e.removeAttribute("href")}))},u=function(e){window.innerWidth<=1024&&r(e)};window.addEventListener("load",i),window.addEventListener("resize",i),o.forEach((function(e){return e.addEventListener("click",u)}))},function(e,t){var n=function(){var e=document.querySelector("header .title");window.innerWidth<=800?e.textContent="С Уважением \r\nк Вашей Истории \r\nи Вашим Финансам":window.innerWidth<=1350?e.textContent="С Уважением \r\nк Вашей Истории и Вашим Финансам":e.textContent="С Уважением к Вашей Истории и Вашим Финансам"};window.addEventListener("load",n),window.addEventListener("resize",n)}]);