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

eval("//this module pattern will handle manipulating the form when it comes to the dom IE. clicking open form opens it, clicking new project adds in 'add a new project' field\nconst formDomManupulate = (function(doc) {\n    const OpenBtn = doc.querySelector(\".open-button\");\n    OpenBtn.addEventListener(\"click\", openForm);\n    //Grab the form itself, and hide it\n    const form  = doc.querySelector(\".form-popup\");\n    form.style.display = \"none\";\n\n    function openForm() {\n     form.style.display = \"block\";\n    }\n    //Get the close form button, and add the corresponding function\n    const closeBtn = doc.querySelector(\".btn-cancel\");\n    closeBtn.addEventListener(\"click\", closeForm);\n    function closeForm() {\n        form.style.display = \"none\";\n    }\n    //grab the project menu and the field, set the field to none by default\n    const selectProjectMenu = doc.querySelector(\".Project-Name\");//The actual menu\n    const newProjectInput = doc.querySelector(\".new-project\"); //The field that adds a new project\n    newProjectInput.style.display = \"none\";\n    //Every click on the select menu will call the AddProjElement(); \n    selectProjectMenu.addEventListener('click', () => {\n        AddNewElement(selectProjectMenu, newProjectInput, \"NewProject\");\n    })\n    //Same thing as the project menu, but for the todolist title\n    const selectTitleMenu = doc.querySelector(\".To-Do-List-title\");//The actual menu\n    const newTitleInput = doc.querySelector(\".New-To-Do-List-title\"); //The field that adds a new title\n    newTitleInput.style.display = \"none\";\n    //Every click on the select menu will call the AddTitleElement(); \n    selectTitleMenu.addEventListener('click', () => {\n        AddNewElement(selectTitleMenu, newTitleInput, \"NewToDoListTitle\");\n    })\n    //instead of making a seperate function per element, just do this\n    function AddNewElement(menuElement, inputElement, newValue) {\n        if(menuElement.value === newValue)\n        {\n            inputElement.style.display = \"block\";\n        }\n        else\n        {\n            inputElement.style.display = \"none\";\n        }\n    }\n\n    const checkListUl = doc.querySelector(\".To-Do-List-checklist\"); //the UL element that holds the checklist\n    const addListBtn = doc.querySelector(\".To-Do-List-checklist-addListItem\");\n    checkForButton();\n    function checkForButton () {\n        //console.log(checkListUl.className);\n        let AlllistItems = doc.querySelectorAll(`.${checkListUl.className} > li`);\n        //console.log(AlllistItems);\n        for(i = 0; i < AlllistItems.length; i++)\n        {\n            //console.log(AlllistItems[i]);\n            let btn = doc.querySelector(`${AlllistItems[i].tagName} > button`);\n            if(btn)\n            {\n                btn.addEventListener(\"click\", () => {\n                    deleteListItem(AlllistItems[i]);\n                })\n            }\n        }\n    }\n   function deleteListItem(listItem) {\n    console.log(\"delete \" + listItem);\n    }\n})(document);\n\n//# sourceURL=webpack://O-To-Do-List/./src/index.js?");

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