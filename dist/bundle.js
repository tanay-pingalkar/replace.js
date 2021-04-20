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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.replace = void 0;
const regex_1 = __webpack_require__(4);
const replace = (name, content) => {
    let html = window.initialHTML;
    window.variables.forEach((element, i) => {
        let newContent;
        if (element.name === name)
            newContent = content;
        else
            newContent = element.content;
        html = html.replaceAll(regex_1.keyWordRegex(element.name), newContent);
        window.variables[i].content = newContent;
        const funcs = window.initialHTML.match(regex_1.functionRegex(element.name));
        if (funcs != null) {
            funcs.forEach((func) => {
                let onlyfunc = func.slice(2, func.length - 2);
                onlyfunc = onlyfunc.replace("&gt;", ">");
                let res;
                if (typeof newContent === "string") {
                    res = eval(`const func=${onlyfunc};func("${newContent}")`);
                }
                else {
                    res = eval(`const func=${onlyfunc};func(${newContent})`);
                }
                html = html.replaceAll(func, res);
            });
        }
    });
    document.body.innerHTML = html;
    return content;
};
exports.replace = replace;


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bool = void 0;
const replace_1 = __webpack_require__(2);
class Bool {
    constructor(name, content = false) {
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
    swap() {
        this.content = !this.content;
        replace_1.replace(this.name, this.content);
    }
    get val() {
        return this.content;
    }
}
exports.Bool = Bool;


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.functionRegex = exports.keyWordRegex = void 0;
const keyWordRegex = (name) => {
    return new RegExp(`\\{\\{[\\s]*?${name}[\\s]*?\\}\\}`, "g");
};
exports.keyWordRegex = keyWordRegex;
const functionRegex = (name) => {
    return new RegExp(`\\{\\{[\\s\\n]*?\\(${name}\\)=(>|&gt)[\\w\\W\s]*?\\}\\}`, "g");
};
exports.functionRegex = functionRegex;


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
const boolean_1 = __webpack_require__(3);
const string_1 = __webpack_require__(1);
const replace_1 = __webpack_require__(2);
window.initialHTML = document.body.innerHTML;
window.variables = [];
window.Str = string_1.Str;
window.replace = replace_1.replace;
window.Bool = boolean_1.Bool;

})();

/******/ })()
;