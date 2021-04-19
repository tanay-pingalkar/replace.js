/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Str = void 0;
const replace_1 = __webpack_require__(2);
class Str {
    constructor(name, content = "") {
        this.name = name;
        this.content = content;
        replace_1.replace(this.name, this.content);
        window.variables[this.name] = content;
    }
    set(content) {
        this.content = content;
        replace_1.replace(this.name, this.content);
        window.variables[this.name] = content;
    }
    if(state, callback) {
        if (this.content === state) {
            if (typeof callback === "string") {
                this.set(callback);
            }
            else {
                callback();
            }
            this.ifResult = true;
            return true;
        }
        else {
            function elseif() { }
            this.ifResult = false;
            return false;
        }
    }
    else(callback) {
        if (this.ifResult) {
            return false;
        }
        if (typeof callback === "string") {
            this.set(callback);
        }
        else {
            callback();
        }
        return true;
    }
    elif(state, callback) {
        if (this.ifResult) {
            return false;
        }
        if (this.content === state) {
            if (typeof callback === "string") {
                this.set(callback);
            }
            else {
                callback();
            }
            return true;
        }
        return false;
    }
}
exports.Str = Str;


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.replace = void 0;
const replace = (name, content) => {
    const searchKey = `{{ ${name} }}`;
    document.body.innerHTML = window.initialHTML.replaceAll(searchKey, content);
    return content;
};
exports.replace = replace;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const string_1 = __webpack_require__(1);
const replace_1 = __webpack_require__(2);
window.initialHTML = document.body.innerHTML;
window.variables = {};
window.Str = string_1.Str;
window.replace = replace_1.replace;

})();

/******/ })()
;