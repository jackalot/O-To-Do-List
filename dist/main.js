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

eval("//this module pattern will handle manipulating the form when it comes to the dom\nconst formDomManupulate = (function(doc) {\n    const OpenBtn = doc.querySelector(\".open-button\");\n    OpenBtn.addEventListener(\"click\", () => {\n        openForm();\n    });\n    const form  = document.querySelector(\".form-popup\");\n    form.style.display = \"none\";\n\n    function openForm() {\n     form.style.display = \"block\";\n    }\n\n    const closeBtn = doc.querySelector(\".btn-cancel\");\n    closeBtn.addEventListener(\"click\", () => {\n        closeForm();\n    });\n    function closeForm() {\n        form.style.display = \"none\";\n    }\n    const selectProjectMenu = document.querySelector(\".Project-Name\");//The actual menu\n    const newProjectInput = document.querySelector(\".new-project\");\n    newProjectInput.style.display = \"none\";\n    selectProjectMenu.addEventListener('click', () => {\n        AddProjElement();\n    })\n    function AddProjElement() { //when a select project element is clicked, it triggers this function\n        if(selectProjectMenu.value === \"NewProject\")\n        {\n         newProjectInput.style.display = \"block\";\n        }\n        else\n        {\n            newProjectInput.style.display = \"none\";\n        }\n    }\n})(document);\n\n//# sourceURL=webpack://O-To-Do-List/./src/index.js?");

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