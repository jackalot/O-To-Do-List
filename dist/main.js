/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"header {\\n    display: flex;\\n    flex-direction: row;\\n    background-color: black;\\n    justify-content: center;\\n}\\nheader h1 {\\n    background-color: white;\\n    padding-left: 5px;\\n    padding-right: 5px;\\n}\\n.To-Do-Item {\\n    background: gray;\\n    display: flex;\\n    flex-direction: row;\\n}\\n.To-Do-Item .Item-Text {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 20px;\\n}\\n.To-Do-Item .Item-Box {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n}\\n.To-Do-Item .Due-Date {\\n   border-radius: 20px;\\n   border-style: dashed;\\n}\\n.To-Do-Item .Priority {\\n    border-radius: 20px;\\n    border-style: dashed;\\n }\\n .To-Do-Item .Item-Header {\\n    display: flex;\\n    flex-direction: row;\\n }\\n .display-items {\\n     display: flex;\\n     flex-direction: row;\\n     justify-content: flex-end;\\n     margin-left: auto;\\n     height: 50px;\\n     background-color: green;\\n     border: solid white 1px;\\n     border-radius: 10%;\\n }\\n.display-items:hover {\\n    padding-top: 20px;\\nbackground: rgba(138, 233, 126, 0.424);\\n}\\n.display-items:focus {\\n    padding-top: 20px;\\n    background: rgba(0, 0, 0, 0.424);\\n}\\n .To-Do-Item .Item-Header h3 {\\n   border-bottom: solid black 5px;\\n }\\n .Project-div {\\n    background-color: rgb(75, 75, 75);\\n    padding: 10px;\\n }\\n .project-header {\\n     display: flex;\\n     flex-direction: row;\\n     justify-content: center;\\n }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://O-To-Do-List/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://O-To-Do-List/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://O-To-Do-List/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://O-To-Do-List/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://O-To-Do-List/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://O-To-Do-List/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://O-To-Do-List/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://O-To-Do-List/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://O-To-Do-List/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://O-To-Do-List/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addToChecklist.js":
/*!*******************************!*\
  !*** ./src/addToChecklist.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//myChecklist is the UL that holds all the list items, item is our TO-Do-Item\nfunction addToCheckList (myCheckList, item) {\n    const newListItem = window.prompt(\"what do you want to add to this checklist? (you have to click the button again if you want more than 1)\");\n    item.checklist.push(newListItem);\n    console.log(item.checklist);\n    //ADD empty checklist here\n    while(myCheckList.firstChild)\n    {\n        console.log(myCheckList.firstChild);\n        myCheckList.removeChild(myCheckList.firstChild);\n    }\n    if(!myCheckList.firstChild)\n    {\n        for(let i = 0; i < item.checklist.length; i++)\n        {\n            let newlistItem = document.createElement(\"li\");\n            newlistItem.textContent = item.checklist[i];\n            myCheckList.appendChild(newlistItem);\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addToCheckList);\n\n//# sourceURL=webpack://O-To-Do-List/./src/addToChecklist.js?");

/***/ }),

/***/ "./src/checkForProject.js":
/*!********************************!*\
  !*** ./src/checkForProject.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Search for the project name and if that project has this name, return that project\nfunction checkForProject (name, projects) {\n    if(projects.length === 0)\n    {\n        console.log(\"project length is 0\");\n        return false;\n    }\n    for(let i = 0; i < projects.length; i++)\n    {\n        if(projects[i] === name)\n        {\n            console.log(\"returned \" + projects[i] + \" at the index \" + i);\n            return projects[i];\n        }\n    }\n    console.log(\"returned false anyways\");\n    return false;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkForProject);\n\n//# sourceURL=webpack://O-To-Do-List/./src/checkForProject.js?");

/***/ }),

/***/ "./src/createAProject.js":
/*!*******************************!*\
  !*** ./src/createAProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hideProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hideProject */ \"./src/hideProject.js\");\n//when you search for a project that doesnt exist\n//we call this module\n\nfunction CreateProject (projectName) {\n    const projectDiv = document.createElement(\"div\");\n    projectDiv.classList.add(\"Project-div\");\n    projectDiv.id = projectName;\n    const body = document.querySelector(\"body\");\n    body.appendChild(projectDiv);\n        const projectHeaderDiv = document.createElement(\"div\");\n        projectHeaderDiv.classList.add(\"project-header\");\n        projectDiv.appendChild(projectHeaderDiv);\n            const H2Name = document.createElement(\"h2\");\n            H2Name.textContent = projectName;\n            const displayBtn = document.createElement(\"button\");\n            displayBtn.textContent = \"Display Project To-Do-List\";\n            displayBtn.addEventListener('click', ()=> {\n                console.log(\"click\");\n                (0,_hideProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectName);\n            });\n            displayBtn.classList.add(\"display-items\");\n            projectHeaderDiv.appendChild(H2Name);\n            projectHeaderDiv.appendChild(displayBtn);\n        const ul = document.createElement(\"ul\");\n        projectDiv.appendChild(ul);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateProject);\n\n\n//# sourceURL=webpack://O-To-Do-List/./src/createAProject.js?");

/***/ }),

/***/ "./src/hideProject.js":
/*!****************************!*\
  !*** ./src/hideProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction hideProject (projectName) {\n    const projectDiv = document.querySelector(`#${projectName} > ul`);\n    if (projectDiv.style.display === \"none\")\n    {\n        projectDiv.style.display = \"block\";\n    }\n    else {\n        projectDiv.style.display = \"none\";\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hideProject);\n\n//# sourceURL=webpack://O-To-Do-List/./src/hideProject.js?");

/***/ }),

/***/ "./src/hideToDo.js":
/*!*************************!*\
  !*** ./src/hideToDo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Same as hideProject but for the item\nfunction hideToDo (itemBody, project) {\n    //const ItemDiv = document.querySelector(`#${ToDoItem.title}-body`);\n   // console.log(ToDoItem.title);\n    //console.log(ItemDiv);\n    if (itemBody.style.display === \"none\")\n    {\n        itemBody.style.display = \"block\";\n    }\n    else {\n        itemBody.style.display = \"none\";\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hideToDo);\n\n//# sourceURL=webpack://O-To-Do-List/./src/hideToDo.js?");

/***/ }),

/***/ "./src/importItem.js":
/*!***************************!*\
  !*** ./src/importItem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hideToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hideToDo */ \"./src/hideToDo.js\");\n/* harmony import */ var _addToChecklist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addToChecklist */ \"./src/addToChecklist.js\");\n\n\n//put the item and list it under its individual project\nfunction importToDoItemToDom (item, project) {\nconst projectDiv = document.querySelector('#' + project);\n//console.log(projectDiv);\n    if(projectDiv === null)\n    {\n        console.log(\"it doesnt exist\")\n    }\n    else\n    {\n        //when we get to making projects, assume theres a ul already made\n        const ul = document.querySelector(`#${project} > ul`);\n        //console.log(ul);\n        //Elements are created the same way its sorted in html\n        //This is the list element that holds everything\n        const ToDoItem = document.createElement(\"li\");\n        ToDoItem.classList.add(\"To-Do-Item\");\n        ul.appendChild(ToDoItem);\n        //This is the div element that holds the header, and other info\n            const itemTextDiv = document.createElement(\"div\");\n            itemTextDiv.classList.add(\"Item-Text\");\n            ToDoItem.appendChild(itemTextDiv);\n                //This is the headerdiv that has the title of the item and a button to collaps it\n                const itemHeader = document.createElement(\"div\");\n                itemHeader.classList.add(\"Item-Header\");\n                itemTextDiv.appendChild(itemHeader);\n                    const headerH3 = document.createElement(\"h3\");\n                    headerH3.textContent = item.title;\n                    itemHeader.appendChild(headerH3);\n                        const displayBtn = document.createElement(\"button\");\n                        displayBtn.textContent = \"Display To-Do-List\";\n                        displayBtn.addEventListener('click', ()=> {\n                            console.log(\"click\");\n                            (0,_hideToDo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(itemBody);\n                        });\n                        itemHeader.appendChild(displayBtn);\n                        displayBtn.classList.add(\"display-items\");\n                /*END HEADER DIV */\n                /*Item Body Begin */\n                const itemBody = document.createElement(\"div\");\n                itemBody.classList.add(\"Item-Body\");\n                itemBody.id = item.title + \"-body\";\n                ToDoItem.appendChild(itemBody);\n                    const dueDateh3 = document.createElement(\"h3\");\n                    dueDateh3.textContent = item.dueDate;\n                    dueDateh3.classList.add(\"Due-Date\");\n                    itemBody.appendChild(dueDateh3);\n                    const priorityh4 = document.createElement(\"h4\");\n                    priorityh4.textContent = item.priority;\n                    priorityh4.classList.add(\"Priority\");\n                    itemBody.appendChild(priorityh4);\n                    const descriptionP = document.createElement(\"p\");\n                    descriptionP.textContent = item.description;\n                    itemBody.appendChild(descriptionP);\n                        /*BEGIN Check list */\n                        //This is the div that holds the check list\n                        const checkListDiv = document.createElement(\"div\");\n                        itemBody.appendChild(checkListDiv);\n                            const listNoteP = document.createElement(\"p\");\n                            listNoteP.classList.add(\"list-note\");\n                            listNoteP.textContent = \"Your check list for this To-Do-List:\"\n                            checkListDiv.appendChild(listNoteP);\n                            /*Un-ordered list begin */\n                            const checklistUL = document.createElement(\"ul\");\n                            //for loop that loops through checklist and lists them\n                            for(let i = 0; i < item.checklist.length; i++)\n                            {\n                                let newlistItem = document.createElement(\"li\");\n                                newlistItem.textContent = item.checklist[i];\n                                checklistUL.appendChild(newlistItem);\n                            }\n                            /* END unordered list and checklist*/\n                            itemBody.appendChild(checklistUL);\n                        const additionalNotesP = document.createElement(\"p\");\n                        additionalNotesP.textContent = item.notes;\n                        itemBody.appendChild(additionalNotesP);\n                        /*BEGIN item box div */\n                        const itemBoxDiv = document.createElement(\"div\");\n                        itemBoxDiv.classList.add(\"Item-Box\");\n                            //this is supposed to make a button called addToCheckListBtn but its not.\n                            const addToChecklistBtn = document.createElement(\"button\");\n                            addToChecklistBtn.textContent = \"Add to checklist\";\n                            addToChecklistBtn.addEventListener('click', () => {\n                                (0,_addToChecklist__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(checklistUL, item);\n                            })\n                            ToDoItem.appendChild(itemBoxDiv);\n                            itemBoxDiv.appendChild(addToChecklistBtn);\n                            /*END item box div */\n                /*END Item Body*/\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (importToDoItemToDom);\n\n//# sourceURL=webpack://O-To-Do-List/./src/importItem.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _makeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeItem */ \"./src/makeItem.js\");\n/* harmony import */ var _checkForProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkForProject */ \"./src/checkForProject.js\");\n/* harmony import */ var _importItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./importItem */ \"./src/importItem.js\");\n/* harmony import */ var _createAProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createAProject */ \"./src/createAProject.js\");\n\n\n\n\n\nlet projects = []; //since I am too lazy to refactor modules to work with objects\n\nconst addContentBtn = document.querySelector(\"button\");\naddContentBtn.addEventListener(\"click\", () => {\n    const projectInput = window.prompt(\"Which project is this to do item? (if it is a new project, just insert the name) No spaces for this!\");\n    const titleInput = window.prompt(\"What is the title of your to-do item?\");\n    const descInput = window.prompt(\"Whats the description for it?\");\n    const priorityInput = window.prompt(\"What priority does this have?\");\n    const dudeDateInput = window.prompt(\"When is this due?\")\n    const notesInput = window.prompt(\"Any additional notes?\");\n    const checkListInput = window.prompt(\"For the checklist, insert one of the things you want in there?\");\n    start (projectInput, titleInput, descInput, priorityInput, dudeDateInput, notesInput, checkListInput);\n})\nfunction start (projectInput, titleInput, descInput, priorityInput, dudeDateInput, notesInput, checkListInput) {\n    const item = (0,_makeItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(titleInput, descInput, dudeDateInput, priorityInput, notesInput, [checkListInput]); // actual use\n    //const item = makeToDoItem(\"titleInput\", \"descInput\", \"dudeDateInput\", \"priorityInput\", \"notesInput\", [\"checkListInput\"]); //debugging\n    //console.log(item);\n    //console.log(item.checklist);\n    const projectIsAvailable = (0,_checkForProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projectInput, projects);\n    projects.push(projectInput);\n    console.log(projects);\n    //const projectIsAvailable = checkForProject(\"projectInput\", projects); //debugging\n    //console.log(projectIsAvailable);\n    if(projectIsAvailable) //its not false so it returned one of the project strings\n    {\n        (0,_importItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(item, projectIsAvailable);\n    }\n    else if(!projectIsAvailable)\n    {\n        //console.log(\"creating project\");\n        //Note = make sure before passing in value theres no spaces\n       (0,_createAProject__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(projectInput); //actual use\n       //CreateProject(\"projectInput\"); //debugging\n       (0,_importItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(item, projectInput) //actual use\n       //importToDoItemToDom(item, \"projectInput\");//debugging\n    }\n}\n//start();\n//make an edit/delete button\n\n//# sourceURL=webpack://O-To-Do-List/./src/index.js?");

/***/ }),

/***/ "./src/makeItem.js":
/*!*************************!*\
  !*** ./src/makeItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makeToDoItem (title, description, dueDate, priority, notes, checklist) {   \n    return {  title, description, dueDate, priority, notes, checklist};\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeToDoItem);\n\n//# sourceURL=webpack://O-To-Do-List/./src/makeItem.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;