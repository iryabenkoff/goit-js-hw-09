!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc");function u(e,n){var o=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(n){n.preventDefault();var o=n.currentTarget.elements;console.log("formsEl :",o);for(var t=Number(o.amount.value),r=Number(o.delay.value),a=Number(o.step.value),l=1;l<=t;l+=1)u(l,r).then((function(n){var o=n.i,t=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.i,t=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),r+=a}))}();
//# sourceMappingURL=03-promises.82ea977c.js.map
