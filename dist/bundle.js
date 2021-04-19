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
        window.variables.push({
            name: name,
            content: content,
        });
        this.name = name;
        this.content = content;
        replace_1.replace(this.name, this.content);
    }
    set(content) {
        this.content = content;
        replace_1.replace(this.name, this.content);
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
    get val() {
        return this.content;
    }
    slice(start, end) {
        if (end)
            this.set(this.content.slice(start, end));
        else
            this.set(this.content.slice(start));
    }
    replace(keyword, content) {
        this.set(this.content.replace(keyword, content));
    }
    replaceAll(keyword, content) {
        this.set(this.content.replaceAll(keyword, content));
    }
}
exports.Str = Str;


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.replace = void 0;
const replace = (name, content) => {
    let html = window.initialHTML;
    window.variables.forEach((element, i) => {
        if (element.name === name) {
            html = html.replaceAll(`{{ ${name} }}`, content);
            window.variables[i].content = content;
        }
        html = html.replaceAll(`{{ ${element.name} }}`, element.content);
    });
    const reg = new RegExp(`\\{\\{\\s\\(${name}\\)=>{?[a-zA-Z0-9\\W]*?}?\\s\\}\\}`, "g");
    const funcs = window.initialHTML.match(reg);
    if (funcs === null) {
        document.body.innerHTML = html;
        return content;
    }
    funcs.forEach((func) => {
        let onlyfunc = func.slice(2, func.length - 2);
        const res = eval(`const func=${onlyfunc};func("${content}")`);
        console.log(window.initialHTML.replaceAll(func, res));
        html = html.replaceAll(func, res);
    });
    document.body.innerHTML = html;
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
window.variables = [];
window.Str = string_1.Str;
window.replace = replace_1.replace;

})();

/******/ })()
;