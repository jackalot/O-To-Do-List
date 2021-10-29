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

eval("function CreateProject (projectName, toDoListTitle, dueDate, priority, notes, checklist)\n{\n    return { projectName, toDoListTitle, dueDate, priority, notes, checklist }\n}\nconst newObj = CreateProject(\"project\", \"new title\", \"new dudedate\", \"new priority\", \"notes are cool\", [\"checklist item one\", \"checklist item 2\"]);\nlocalStorage.setItem(`${newObj.projectName}`, JSON.stringify(newObj));\nlet retrieved = localStorage.getItem(`${newObj.projectName}`);\nlet objectAfter = JSON.parse(retrieved);\nconsole.log(objectAfter.projectName);\n\n//# sourceURL=webpack://O-To-Do-List/./src/index.js?");

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