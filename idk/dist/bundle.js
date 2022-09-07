/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ \"./assets/js/modals.js\");\n\nlet [showOrderModal] = Object(_modals__WEBPACK_IMPORTED_MODULE_0__[\"ORDER_MODAL\"])();\n\nif (catalogJSON) {\n  let [showShopItemModal] = Object(_modals__WEBPACK_IMPORTED_MODULE_0__[\"SHOP_ITEM_MODAL\"])();\n  const items = document.querySelectorAll(\".catalog__items--item\");\n  items.forEach(item => {\n    const itemId = parseInt(item.getAttribute(\"data-item-id\"));\n    const object = catalogJSON[itemId];\n    item.querySelector(\".catalog__items--item--button\").addEventListener(\"click\", () => {\n      showShopItemModal(object);\n    });\n  });\n}\n\n//# sourceURL=webpack:///./assets/js/app.js?");

/***/ }),

/***/ "./assets/js/modals.js":
/*!*****************************!*\
  !*** ./assets/js/modals.js ***!
  \*****************************/
/*! exports provided: ORDER_MODAL, SHOP_ITEM_MODAL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ORDER_MODAL\", function() { return ORDER_MODAL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHOP_ITEM_MODAL\", function() { return SHOP_ITEM_MODAL; });\nconst generateDefaultModal = (id, title, content) => {\n  return `\n        <div class=\"modal\" id=\"${id}\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal__title\">\n                    <div class=\"modal__title--left\">\n                        <h3>${title}</h3>\n                    </div>\n                    <div class=\"modal__title--line\"></div>\n                    <div class=\"modal__title--right\">\n                        <i class=\"material-icons\">close</i>\n                    </div>\n                </div>\n                <div class=\"modal__content\">\n                    ${content}\n                </div>\n            </div>\n        </div>\n    `;\n};\n\nconst showModal = modal => {\n  modal.classList.remove(\"toggling-out\");\n  modal.classList.add(\"show\");\n};\n\nconst closeModal = modal => {\n  modal.classList.add(\"toggling-out\");\n  setTimeout(() => {\n    modal.classList.remove(\"show\");\n    modal.classList.remove(\"toggling-out\");\n  }, 200);\n};\n\nconst bindEvents = modal => {\n  modal.querySelector(\".modal__title--right i\").addEventListener(\"click\", () => {\n    closeModal(modal);\n  });\n};\n\nconst ORDER_MODAL = () => {\n  const container = document.querySelector(\"#order-modal\");\n\n  const show = data => {\n    console.log(data);\n  };\n\n  return [show];\n};\nconst SHOP_ITEM_MODAL = () => {\n  let container = null;\n\n  const colorPicker = items => {\n    let pickerItems = Object.entries(items).map(value => {\n      return `<div class=\"color__picker--item\" style=\"--background: ${value[1].color};\">\n                    <div class=\"color__picker--item--color\" style=\"background: ${value[1].color};\"></div>\n                    <div class=\"color__picker--item--label\">\n                        ${value[1].label}\n                    </div>\n                </div> `;\n    });\n    let pickerHTML = `<input type=\"hidden\" name=\"color\" />\n            <div class=\"color__picker\">\n                ${pickerItems.join(\"\")}\n            </div>`;\n    let picker = document.createElement(\"div\");\n    picker.classList.add(\"color__picker--wrapper\");\n    picker.innerHTML = pickerHTML;\n    return picker;\n  };\n\n  const SPEC_SELECTOR = {\n    \"colors\": {\n      label: \"Цвета\",\n      generator: items => colorPicker(items)\n    }\n  };\n\n  const show = data => {\n    if (container) {\n      let content = container.querySelector(\".modal__content\");\n      let selectSpecs = [];\n      let specs = ``;\n      Object.entries(data.specs_select).map(spec => {\n        let key = spec[0],\n            value = spec[1];\n        let generateValue = SPEC_SELECTOR[key].generator(value);\n        let specElement = document.createElement(\"div\");\n        specElement.classList.add(\"catalog__popup--meta--right--specs--item\");\n        specElement.innerHTML = `<div class=\"catalog__popup--meta--right--specs--item--title\">\n                        ${SPEC_SELECTOR[key].label}\n                    </div>\n                    <div class=\"catalog__popup--meta--right--specs--item--input\"></div>`;\n        specElement.querySelector(\".catalog__popup--meta--right--specs--item--input\").appendChild(generateValue);\n        selectSpecs.push(specElement);\n      });\n      Object.entries(data.specs).map(spec => {\n        let key = spec[0],\n            value = spec[1];\n        specs += `\n                    <div class=\"catalog__popup--specs--item\">\n                        <b>${value.label}</b>\n                        <span>${value.value}</span>\n                    </div>\n                `;\n      });\n\n      if (specs !== \"\") {\n        specs = `<div class=\"catalog__popup--specs\">${specs}</div>`;\n      }\n\n      content.innerHTML = `\n                <div class=\"catalog__popup\">\n                    <div class=\"catalog__popup--meta\">\n                        <div class=\"catalog__popup--meta--left\">\n                            <img src=\"${data.picture}\" />\n                        </div>\n                        <div class=\"catalog__popup--meta--right\">\n                            <div class=\"catalog__popup--meta--right--title\">\n                                <h3>${data.title}</h3>\n                                <span>${data.price} тг.</span>\n                            </div>\n                            ${selectSpecs.length !== 0 ? `<div class=\"catalog__popup--meta--right--specs\"></div>` : \"\"}\n                        </div>\n                    </div>\n                    ${specs}\n                </div>\n            `;\n      selectSpecs.forEach(value => {\n        content.querySelector(\".catalog__popup--meta--right--specs\").appendChild(value);\n      });\n    }\n\n    showModal(container);\n  };\n\n  const modalHTML = generateDefaultModal(\"order-modal\", \"Покупка товара\", ``);\n  const modalElement = document.createElement(\"div\");\n  modalElement.innerHTML = modalHTML;\n  container = modalElement.querySelector(\".modal\");\n  bindEvents(container);\n  document.body.prepend(container);\n  modalElement.remove();\n  return [show];\n};\ndocument.addEventListener(\"mouseup\", e => {\n  let modal = document.querySelector(\".modal.show\");\n\n  if (modal) {\n    if (e.target === modal) {\n      closeModal(modal);\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  ORDER_MODAL\n});\n\n//# sourceURL=webpack:///./assets/js/modals.js?");

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./assets/scss/app.scss?");

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./assets/js/app.js ./assets/scss/app.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./assets/js/app.js */\"./assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! ./assets/scss/app.scss */\"./assets/scss/app.scss\");\n\n\n//# sourceURL=webpack:///multi_./assets/js/app.js_./assets/scss/app.scss?");

/***/ })

/******/ });