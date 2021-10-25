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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoListDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoListDom */ \"./src/todoListDom.js\");\n\n//this module pattern will handle manipulating the form when it comes to the dom IE. clicking open form opens it, clicking new project adds in 'add a new project' field\nconst formDomManupulate = (function(doc) {\n    const OpenBtn = doc.querySelector(\".open-button\");\n    OpenBtn.addEventListener(\"click\", openForm);\n    //Grab the form itself, and hide it\n    const form  = doc.querySelector(\".form-popup\");\n    form.style.display = \"none\";\n    //updates all fields\n    updateAllFields();\n    function updateAllFields() {\n        AddToDropdown(\".Project-Name\", \"projectTitles\", \"NewProject\");\n        let Retrieved = localStorage.getItem(\"projectTitles\"); //create a Retrieved variable from local storage\n        let projectArray = JSON.parse(Retrieved);\n        if(projectArray)\n        {\n            AddToDropdown(\".To-Do-List-title\", projectArray[0], \"NewToDoListTitle\");\n        }\n    }\n    function openForm() {\n     form.style.display = \"block\";\n    }\n    //Get the close form button, and add the corresponding function\n    const closeBtn = doc.querySelector(\".btn-cancel\");\n    closeBtn.addEventListener(\"click\", closeForm);\n    function closeForm() {\n        form.style.display = \"none\";\n    }\n    //grab the project menu and the field, set the field to none by default\n    const selectProjectMenu = doc.querySelector(\".Project-Name\");//The actual menu\n    const newProjectInput = doc.querySelector(\".new-project\"); //The field that adds a new project\n    newProjectInput.style.display = \"none\";\n    //Every click on the select menu will call the AddProjElement(); \n    selectProjectMenu.addEventListener('click', () => {\n        AddNewElement(selectProjectMenu, newProjectInput, \"NewProject\");\n        AddToDropdown(\".To-Do-List-title\", selectProjectMenu.value, \"NewToDoListTitle\");\n    })\n    //Same thing as the project menu, but for the todolist title\n    const selectTitleMenu = doc.querySelector(\".To-Do-List-title\");//The actual menu\n    const newTitleInput = doc.querySelector(\".New-To-Do-List-title\"); //The field that adds a new title\n    newTitleInput.style.display = \"none\";\n    //Every click on the select menu will call the AddTitleElement(); \n    selectTitleMenu.addEventListener('click', () => {\n        AddNewElement(selectTitleMenu, newTitleInput, \"NewToDoListTitle\");\n    })\n    //instead of making a seperate function per element, just do this\n    function AddNewElement(menuElement, inputElement, newValue) {\n        if(menuElement.value === newValue)\n        {\n            inputElement.style.display = \"block\";\n        }\n        else\n        {\n            inputElement.style.display = \"none\";\n        }\n    }\n    //This is the start of the checklist section\n    const checkListUl = doc.querySelector(\".To-Do-List-checklist\"); //the UL element that holds the checklist\n    const addListBtn = doc.querySelector(\".To-Do-List-checklist-addListItem\"); //button that adds to the list\n    checkForButton(); //call this now so all delete buttons have their delete functions\n    function checkForButton () {\n        let AlllistItems = doc.querySelectorAll(`.${checkListUl.className} > li`); //find all the list items \n        for(let i = 0; i < AlllistItems.length; i++) \n        {\n            let btn = doc.querySelector(`${AlllistItems[i].tagName} > button`); //if we have a button in a list item, its our delete button\n            if(btn)\n            {\n                btn.addEventListener(\"click\", () => {\n                    deleteListItem(btn);\n                })\n            }\n        }\n    }\n   function deleteListItem(btn) { //actual delete function\n        let parentLI = btn.parentNode; //get the li node\n        let parentUL = parentLI.parentNode; // get the entire UL \n        parentUL.removeChild(parentLI); // to remove the list item itself\n    }\n    addListBtn.addEventListener(\"click\", addListItem); //add the function below it to the button add List Item\n    function addListItem() { //adds a list item to the check list inputs\n        const newLI = doc.createElement(\"li\"); //our list item which holds the content\n        const textBox = doc.createElement(\"input\"); //the input which we store data in\n        textBox.type = \"text\";\n        textBox.placeholder = \"type a checklist item here\";\n        textBox.classList.add(\"To-Do-List-checklist-item\");\n        const deleteButton = doc.createElement(\"button\"); //delete button which we create, then immediately add its function to\n        deleteButton.addEventListener(\"click\", () => {\n            deleteListItem(deleteButton);\n        })\n        deleteButton.classList.add(\"To-Do-List-checklist-deleteListItem\");\n        deleteButton.textContent = \"Delete this item!\";\n        //now add all those elements to the DOM\n        checkListUl.appendChild(newLI);\n        newLI.appendChild(textBox);\n        newLI.appendChild(deleteButton);\n    }\n    //DropdownVariable refers to whether we are getting the title or project name\n    /* dropdownVariables can be: projectTitles or projectvalue (if we are tdl titles dropdown) */\n    function AddToDropdown (dropdownClassName, dropdownsVariable, newItemValue) {\n        //console.log(dropdownClassName, dropdownsVariable, newItemValue);\n        const Retrieved = localStorage.getItem(dropdownsVariable);\n        const array = JSON.parse(Retrieved);\n        const dropDown = document.querySelector(dropdownClassName);\n        dropDown.options.length = 0;\n       // console.log(dropDown);\n        if(array !== null)\n        {\n            for(let i = 0; i < array.length; i++)\n            {\n               let newOption = new Option(array[i], array[i]);\n               dropDown.add(newOption, undefined);\n            }\n        }\n        //add newItemValue\n        let lastOption = new Option(newItemValue, newItemValue);\n        dropDown.add(lastOption, undefined);\n    }\n    return { closeForm, AddToDropdown};\n})(document);\n//Handles saving data from all form inputs\nconst formDataManipulate = (() => {\n    const getCircularReplacer = () => {//for project titles since it gives a circular reference errors\n        const seen = new WeakSet();\n        return (key, value) => {\n          if (typeof value === \"object\" && value !== null) {\n            if (seen.has(value)) {\n              return;\n            }\n            seen.add(value);\n          }\n          return value;\n        };\n      };\n      \n    function storeProjectTitle()\n    {\n        const selectProjectMenu = document.querySelector(\".Project-Name\");\n        if(selectProjectMenu.value === \"NewProject\")\n        {\n            const newProjectInput = document.querySelector(\".new-project-input\");\n            let projectValue = newProjectInput.value;\n            //console.log(\"NewProject \" + projectValue);\n          \n                if(typeof(Storage) !== \"undefined\") {\n                    if(localStorage.projectTitles)\n                    {\n                        //projectTitles has been made\n                        //console.log(\"localStorage.projectTitles exists\")\n                       let Retrieved = localStorage.getItem(\"projectTitles\"); //create a Retrieved variable from local storage\n                       let projectArray = JSON.parse(Retrieved); //parse it into a javascript array we can use\n                        let projectIndex =projectArray.indexOf(projectValue); //This is if the project already exists, we won't just add more of the same name to local storage\n                        if(projectIndex === -1) //if it doesnt exist already\n                        {\n                        projectArray.push(projectValue); //push it\n                        localStorage.setItem(\"projectTitles\", JSON.stringify(projectArray, getCircularReplacer()));\n                        }\n                        formDomManupulate.AddToDropdown(\".Project-Name\", \"projectTitles\", \"NewProject\");\n                    }\n                    else //projectTitles has not been made yet\n                    {\n                       // console.log(\"localStorage.projectTitles will now exist\")\n                        let projectArray = []; // new array to store all titles\n                        projectArray.push(projectValue); //push the projectValue onto that array\n                        //console.log(\"ProjectArray is \" + projectArray);\n                        localStorage.setItem(\"projectTitles\",  JSON.stringify(projectArray, getCircularReplacer())); //store in local storage as a strigified array.\n                        formDomManupulate.AddToDropdown(\".Project-Name\", \"projectTitles\", \"NewProject\");\n                    }\n                }\n        }\n        else\n        {\n            console.log(\"old project\" + selectProjectMenu.value);\n        }\n    }\n    function storeToDoListTitle() {\n        const toDoListMenu = document.querySelector(\".To-Do-List-title\");\n        if(toDoListMenu.value === \"NewToDoListTitle\")\n        {\n            const newProjectInput = document.querySelector(\".new-project-input\");\n            let projectValue = newProjectInput.value;\n            const newToDoListTitleInput = document.querySelector(\".new-To-Do-List-title\");\n            if(typeof(Storage) !== \"undefined\") {\n                if(localStorage[projectValue])\n                {\n                    //projectValue has been made\n                   let Retrieved = localStorage.getItem(projectValue); //create a Retrieved variable from local storage\n                   let ToDoListTitles = JSON.parse(Retrieved); //parse it into a javascript array we can use\n                   let titleIndex = ToDoListTitles.indexOf(newToDoListTitleInput.value); //This is if the project already exists, we won't just add more of the same name to local storage\n                    if(titleIndex === -1) //if it doesnt exist already\n                    {\n                        ToDoListTitles.push(newToDoListTitleInput.value); //push it\n                        localStorage.setItem(projectValue , JSON.stringify(ToDoListTitles, getCircularReplacer()));\n                    }\n                    formDomManupulate.AddToDropdown(\".To-Do-List-title\", projectValue, \"NewToDoListTitle\");\n                }\n                else //whatever projectValue is has not been made yet\n                {\n                    //console.log(\"localStorage.projectValue-ToDoListTitles will now exist\")\n                    let ToDoListTitles = []; // new array to store all titles\n                    ToDoListTitles.push(newToDoListTitleInput.value); //push the newToDoListTitleInput.value onto that array\n                    //console.log(\"ToDoListTitles is \" + ToDoListTitles);\n                    localStorage.setItem(projectValue ,  JSON.stringify(ToDoListTitles, getCircularReplacer())); //store in local storage as a stringified array.\n                    formDomManupulate.AddToDropdown(\".To-Do-List-title\", projectValue, \"NewToDoListTitle\");\n                }\n            }\n        }\n        else\n        {\n            console.log(\"old ToDoList\" + toDoListMenu.value);\n        }\n    }\n    /* StoreSingleField, in an attempt to shorten making multiple functions:\n    * inputType = the type of input we are storing, ex. description, notes, dueDate\n    * className = the class name for the input fied we are searching, ex. .To-Do-List-notes, .To-Do-List-dueDate, .To-Do-List-description\n    */ \n    function StoreSingleField(inputType, className) {\n        const selectProjectMenu = document.querySelector(\".Project-Name\");\n        let projectValue = \"\";\n        if(selectProjectMenu.value !== \"NewProject\")\n        {\n            projectValue = selectProjectMenu.value;\n        }\n        else\n        {\n            const newProjectInput = document.querySelector(\".new-project-input\");\n            projectValue = newProjectInput.value;\n        }\n        const toDoListMenu = document.querySelector(\".To-Do-List-title\");\n        let titleValue = \"\";\n        if(toDoListMenu.value !== \"NewToDoListTitle\")\n        {\n            titleValue = toDoListMenu.value;\n        }\n        else\n        {\n            const newToDoListTitleInput = document.querySelector(\".new-To-Do-List-title\");\n             titleValue = newToDoListTitleInput.value;\n        }\n        console.log(\"projectvalue is \" + projectValue + \" and titleValue is \" + titleValue);\n        const ourField = document.querySelector(className).value;\n        if(typeof(Storage) !== \"undefined\")\n        {\n            localStorage.setItem(`${projectValue}-${titleValue}-${inputType}`, JSON.stringify(ourField));\n        }\n            \n        \n    }\n    function storeCheckList() \n    {\n        if(selectProjectMenu.value !== \"NewProject\")\n        {\n            projectValue = selectProjectMenu.value;\n        }\n        else\n        {\n            const newProjectInput = document.querySelector(\".new-project-input\");\n            projectValue = newProjectInput.value;\n        }\n        const toDoListMenu = document.querySelector(\".To-Do-List-title\");\n        let titleValue = \"\";\n        if(toDoListMenu.value !== \"NewToDoListTitle\")\n        {\n            titleValue = toDoListMenu.value;\n        }\n        else\n        {\n            const newToDoListTitleInput = document.querySelector(\".new-To-Do-List-title\");\n             titleValue = newToDoListTitleInput.value;\n        }\n        let fullCheckList = [];\n        let input = document.querySelectorAll(`li > .To-Do-List-checklist-item`); //if we have a textbox in a list item\n        if(input)\n        {\n            input.forEach(element => {\n                fullCheckList.push(element.value);\n            });\n        }\n        console.log(\"fullChecklist is: \" + fullCheckList);\n        localStorage.setItem(`${projectValue}-${titleValue}-checkList` ,  JSON.stringify(fullCheckList, getCircularReplacer())); //store in local storage as a strigified array.\n    }\n    //Starts the store data functions\n    function startStoring ()\n    {\n        let validate = formValidation.validateAll();\n        if(validate)\n        {\n        storeProjectTitle();\n        storeToDoListTitle();\n        StoreSingleField(\"description\", \".To-Do-List-description\");\n        StoreSingleField(\"notes\", \".To-Do-List-notes\");\n        StoreSingleField(\"dueDate\", \".To-Do-List-dueDate\");\n        storeCheckList();\n        formDomManupulate.closeForm();\n        }\n    }\n     //This would go in the DOM module, but since Data module comes after, it wouldnt call this function\n     const submitBtn = document.querySelector(\".Submit-Button\")\n     submitBtn.addEventListener(\"click\", () => {\n         //console.log(\"submit got clicked\");\n         startStoring();\n     });\n    return { startStoring };\n})();\nconst formValidation = (() => {\n    function validateAll() {\n        let projectTitle = validateProjectTitle();\n        console.log(projectTitle)\n        if(projectTitle)\n        {\n            let ToDolistTitle = validateToDoListTitle();\n            if(ToDolistTitle)\n            {\n                return true;\n            } \n        }\n    }\n    const warningtext = document.querySelector(\".warning-errors\");\n    function validateProjectTitle() {\n        const selectProjectMenu = document.querySelector(\".Project-Name\");\n        if(selectProjectMenu.value === \"NewProject\")\n        {\n            const projectInput = document.querySelector(\".new-project-input\");\n            if(projectInput.value === \"\")\n            {\n                warningtext.textContent = \"Error: You can not have an empty project name!\";\n                return false; // invalid\n            }\n            else if(projectInput.value[0] === \" \")\n            {\n                warningtext.textContent = \"Error: You can not have project name start with a space!\";\n                return false; // invalid\n            }\n            else\n            {\n                warningtext.textContent = \"\";\n                return true; // valid\n            }\n        }\n        else\n        {\n            return true; //this value was made before so it has to be valid\n        }\n    }\n    function validateToDoListTitle() { \n        const toDoListMenu = document.querySelector(\".To-Do-List-title\");\n        if(toDoListMenu.value === \"NewToDoListTitle\")\n        {\n            const newToDoListTitleInput = document.querySelector(\".new-To-Do-List-title\");\n            if(newToDoListTitleInput.value === \"\")\n            {\n                warningtext.textContent = \"Error: You can not have an empty ToDoList Title!\";\n                return false; // invalid\n            }\n            else if(newToDoListTitleInput.value[0] === \" \")\n            {\n                warningtext.textContent = \"Error: You can not have ToDoList Title start with a space!\";\n                return false; // invalid\n            }\n            else\n            {\n                warningtext.textContent = \"\";\n                return true; // valid\n            }\n        }\n        else\n        {\n            return true; //this value was made before so it has to be valid\n        }\n\n    }    \n    return { validateAll } ;\n})();\n\n//# sourceURL=webpack://O-To-Do-List/./src/index.js?");

/***/ }),

/***/ "./src/todoListDom.js":
/*!****************************!*\
  !*** ./src/todoListDom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//adds items to the todolist\nconst toDoListAddToDom = (() => {\n    const toDoList = document.querySelector(\".To-Do-List\");\n   function displayProjectTitle () {\n        let Retrieved = localStorage.getItem(\"projectTitles\"); //create a Retrieved variable from local storage\n        let projectTitles = JSON.parse(Retrieved); //parse it into a javascript array we can use\n        if(projectTitles !== null)\n        {\n            toDoList.textContent = \"\";\n            for(let i=0; i < projectTitles.length; i++)\n            {\n                //create some elements for this title\n                const Ul = document.createElement(\"Ul\");\n                const h1 = document.createElement(\"h1\");\n                const projectBody = document.createElement(\"div\")\n                /* Begin elements for the edit button and form */\n                const editBtn = document.createElement(\"button\");\n                editBtn.textContent = 'Edit: ' + projectTitles[i];\n                const form = document.createElement(\"div\");\n                form.classList.add(\"project-titles-edit-To-Do-List\");\n\n                //assign each element what they need\n                projectBody.classList.add(\"project-titles-To-Do-List\"); \n                //ids cant have spaces so split this project title\n                let split = projectTitles[i].split(\" \");\n                //join them\n                let joined = split.join('-');\n                //and now make it equal this project\n                projectBody.id = joined;\n                h1.textContent = projectTitles[i];\n                //append them to the dom\n                toDoList.append(projectBody);\n                projectBody.append(h1);\n                projectBody.append(Ul);\n                projectBody.append(form);\n                projectBody.append(editBtn);\n                let projDetails = {\n                    Ul: Ul,\n                    Name: projectTitles[i],\n                    Id: joined,\n                };\n                displayToDoListTitles(projDetails);\n            }\n        }\n    }\n    const loadBtn = document.querySelector(\".load-button\");\n     loadBtn.addEventListener(\"click\", displayProjectTitle);\n    function displayToDoListTitles(projDetails) {\n        let Retrieved = localStorage.getItem(projDetails.Name); //retrieve items based off the project name\n        let ToDoListTitles = JSON.parse(Retrieved); //parse it into a javascript array we can use\n        console.log(ToDoListTitles);\n        for(let i = 0; i < ToDoListTitles.length; i++)\n        {\n            const Ul = document.createElement(\"ul\");\n            //ids cant have spaces so split this ToDoList title\n            let split = ToDoListTitles[i].split(\" \");\n            //join them\n            let joined = split.join('-');\n            //and now make it equal this ToDoList title\n            Ul.id = joined;\n            const h2 = document.createElement(\"h2\");\n            h2.textContent = ToDoListTitles[i];\n            projDetails.Ul.append(Ul);\n            Ul.append(h2)\n            let TDLtitleDetails = { //Todolist title details, too long of a name, tdl will mean todolist for now on\n                Ul: Ul,\n                Name: ToDoListTitles[i],\n                Id: joined,\n            }\n            displaySingleField(projDetails, TDLtitleDetails, \"description\");\n            displaySingleField(projDetails, TDLtitleDetails, \"dueDate\");\n            displaySingleField(projDetails, TDLtitleDetails, \"notes\");\n            displayCheckList(projDetails, TDLtitleDetails);\n        }\n    }\n    function displaySingleField(projDetails, TDLtitleDetails, fieldName) {\n        let Retrieved = localStorage.getItem(`${projDetails.Name}-${TDLtitleDetails.Name}-${fieldName}`);\n        console.log(Retrieved);\n        const paragraph = document.createElement(\"p\");\n        paragraph.textContent = Retrieved;\n        paragraph.classList.add(`${fieldName}-To-Do-List`);\n        TDLtitleDetails.Ul.append(paragraph);\n    }\n    function displayCheckList(projDetails, TDLtitleDetails)\n    {\n        const Retrieved = localStorage.getItem(`${projDetails.Name}-${TDLtitleDetails.Name}-checkList`);\n        const checkList = JSON.parse(Retrieved);\n        console.log(checkList);\n        let Ul = document.createElement(\"ul\");\n        TDLtitleDetails.Ul.append(Ul);\n        for(let i = 0; i < checkList.length; i++)\n        {\n            let paragraph = document.createElement(\"p\");\n            paragraph.textContent = checkList[i];\n            Ul.append(paragraph);\n        }\n    }\n})(document);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoListAddToDom);\n\n//# sourceURL=webpack://O-To-Do-List/./src/todoListDom.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;