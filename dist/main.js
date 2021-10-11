/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const OpenBtn = document.querySelector(\".open-button\");\n//console.log({OpenBtn});\nOpenBtn.addEventListener(\"click\", () => {\n    openForm();\n});\nconst form  = document.querySelector(\".form-popup\");\nform.style.display = \"none\";\nfunction openForm() {\n form.style.display = \"block\";\n}\nfunction closeForm() {\n    form.style.display = \"none\";\n}\nconst selectProjectMenu = document.querySelector(\".Project-Name\");//The actual menu\nconst selectProjectOptions = selectProjectMenu.childNodes;\nselectProjectMenu.addEventListener('click', () => {\n    AddProjElement();\n})\nfunction AddProjElement() { //when a select project element is clicked, it triggers this function\n    if(selectProjectMenu.value === \"NewProject\")\n    {\n     console.log(\"add the 'add project' element to the dom\");\n    }\n    else\n    {\n        console.log(\"dont need to add any elements in\");\n    }\n}\n\n//# sourceURL=webpack://O-To-Do-List/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;