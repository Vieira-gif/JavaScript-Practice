/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numero12": () => (/* binding */ numero12),
/* harmony export */   "Produto": () => (/* binding */ Produto),
/* harmony export */   "nome": () => (/* binding */ nome),
/* harmony export */   "sobrenome2": () => (/* binding */ sobrenome),
/* harmony export */   "idade": () => (/* binding */ idade),
/* harmony export */   "soma": () => (/* binding */ soma)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nome = 'João';
var sobrenome = 'Vieira';
var idade = 17;
var numero12 = 12;
/* const cpfNaoExportado = 12312415
export const cpfExportado = 12312415611 */

function soma(a, b) {
  return a + b;
}
/* // Uma default por script
export default function Dfault (x, y) {
  return x - y
}

export {nome as default, sobrenome, idade, Dfault} */


var Produto = function Produto(nome, cor) {
  _classCallCheck(this, Produto);

  this.nome = nome;
  this.cor = cor;
};


/***/ })

/******/ 	});
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1.js */ "./src/modulo1.js");

/*
//     Qualquer nome ira ser a função default
import funcaoDefault from './modulo1.js'
console.log(funcaoDefault(5, 1))
*/

/*
import * as MeuModulo, {nome, sobrenome, idade} from './modulo1.js'
console.log(MeuModulo.cpfExportado)
console.log(nome, sobrenome, idade)
*/

var nome = 'Luiz';
var sobrenome = 'Miranda';
var p1 = new _modulo1_js__WEBPACK_IMPORTED_MODULE_0__.Produto('Camiseta', 'Verde');
console.log(_modulo1_js__WEBPACK_IMPORTED_MODULE_0__.nome, _modulo1_js__WEBPACK_IMPORTED_MODULE_0__.sobrenome2, _modulo1_js__WEBPACK_IMPORTED_MODULE_0__.idade);
console.log(nome, sobrenome);
console.log((0,_modulo1_js__WEBPACK_IMPORTED_MODULE_0__.soma)(1, 2));
console.log(_modulo1_js__WEBPACK_IMPORTED_MODULE_0__.numero12);
console.log(p1);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map