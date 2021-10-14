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

eval("//this module pattern will handle manipulating the form when it comes to the dom IE. clicking open form opens it, clicking new project adds in 'add a new project' field\nconst formDomManupulate = (function(doc) {\n    const OpenBtn = doc.querySelector(\".open-button\");\n    OpenBtn.addEventListener(\"click\", openForm);\n    //Grab the form itself, and hide it\n    const form  = doc.querySelector(\".form-popup\");\n    form.style.display = \"none\";\n\n    function openForm() {\n     form.style.display = \"block\";\n    }\n    //Get the close form button, and add the corresponding function\n    const closeBtn = doc.querySelector(\".btn-cancel\");\n    closeBtn.addEventListener(\"click\", closeForm);\n    function closeForm() {\n        form.style.display = \"none\";\n    }\n    //grab the project menu and the field, set the field to none by default\n    const selectProjectMenu = doc.querySelector(\".Project-Name\");//The actual menu\n    const newProjectInput = doc.querySelector(\".new-project\"); //The field that adds a new project\n    newProjectInput.style.display = \"none\";\n    //Every click on the select menu will call the AddProjElement(); \n    selectProjectMenu.addEventListener('click', () => {\n        AddNewElement(selectProjectMenu, newProjectInput, \"NewProject\");\n    })\n    //Same thing as the project menu, but for the todolist title\n    const selectTitleMenu = doc.querySelector(\".To-Do-List-title\");//The actual menu\n    const newTitleInput = doc.querySelector(\".New-To-Do-List-title\"); //The field that adds a new title\n    newTitleInput.style.display = \"none\";\n    //Every click on the select menu will call the AddTitleElement(); \n    selectTitleMenu.addEventListener('click', () => {\n        AddNewElement(selectTitleMenu, newTitleInput, \"NewToDoListTitle\");\n    })\n    //instead of making a seperate function per element, just do this\n    function AddNewElement(menuElement, inputElement, newValue) {\n        if(menuElement.value === newValue)\n        {\n            inputElement.style.display = \"block\";\n        }\n        else\n        {\n            inputElement.style.display = \"none\";\n        }\n    }\n    //This is the start of the checklist section\n    const checkListUl = doc.querySelector(\".To-Do-List-checklist\"); //the UL element that holds the checklist\n    const addListBtn = doc.querySelector(\".To-Do-List-checklist-addListItem\"); //button that adds to the list\n    checkForButton(); //call this now so all delete buttons have their delete functions\n    function checkForButton () {\n        //console.log(checkListUl.className);\n        let AlllistItems = doc.querySelectorAll(`.${checkListUl.className} > li`); //find all the list items \n        //console.log(AlllistItems);\n        for(i = 0; i < AlllistItems.length; i++) \n        {\n            console.log(AlllistItems[i]);\n            let btn = doc.querySelector(`${AlllistItems[i].tagName} > button`); //if we have a button in a list item, its our delete button\n            if(btn)\n            {\n                btn.addEventListener(\"click\", () => {\n                    deleteListItem(btn);\n                })\n            }\n        }\n    }\n   function deleteListItem(btn) { //actual delete function\n        //console.log(\"this button is \" + btn.className);\n        let parentLI = btn.parentNode; //get the li node\n        //console.log(\"parentLI = \" + parentLI);\n        let parentUL = parentLI.parentNode; // get the entire UL \n        //console.log(\"parentUL = \" + parentUL);\n        parentUL.removeChild(parentLI); // to remove the list item itself\n    }\n    addListBtn.addEventListener(\"click\", addListItem); //add the function below it to the button add List Item\n    function addListItem() { //adds a list item to the check list inputs\n        console.log(\"click\");\n        const newLI = doc.createElement(\"li\"); //our list item which holds the content\n        const textBox = doc.createElement(\"input\"); //the input which we store data in\n        textBox.type = \"text\";\n        textBox.placeholder = \"type a checklist item here\";\n        textBox.classList.add(\"To-Do-List-checklist-item\");\n        const deleteButton = doc.createElement(\"button\"); //delete button which we create, then immediately add its function to\n        deleteButton.addEventListener(\"click\", () => {\n            deleteListItem(deleteButton);\n        })\n        deleteButton.classList.add(\"To-Do-List-checklist-deleteListItem\");\n        deleteButton.textContent = \"Delete this item!\";\n        //now add all those elements to the DOM\n        checkListUl.appendChild(newLI);\n        newLI.appendChild(textBox);\n        newLI.appendChild(deleteButton);\n    }\n    return {  };\n})(document);\nconst formDataManipulate = (() => {\n    function storeProjectTitle()\n    {\n        const selectProjectMenu = document.querySelector(\".Project-Name\");\n        if(selectProjectMenu.value === \"NewProject\")\n        {\n            const newProjectInput = document.querySelector(\".new-project-input\");\n            let projectValue = newProjectInput.value;\n            //console.log(\"NewProject \" + projectValue);\n            if(typeof(Storage) !== \"undefined\") {\n                if(localStorage.projectTitles)\n                {\n                    //projectTitles has been made\n                   let projectArray = localStorage.getItem(\"projectTitles\"); //create a projectArray variable from local storage\n                   projectArray = JSON.parse(projectArray); //parse it into a javascript array we can use\n                   projectArray.push(projectArray); //push it\n                   localStorage.setItem(\"projectTitles\", JSON.stringify(projectArray));\n                }\n                else //projectTitles has not been made yet\n                {\n                    let projectArray = []; // new array to store all titles\n                    projectArray.push(projectValue); //push the projectValue onto that array\n                    console.log(\"ProjectArray is \" + projectArray);\n                    localStorage.setItem(\"projectTitles\", JSON.stringify(projectArray)); //store in local storage as a strigified array.\n                }\n            }\n        }\n        else\n        {\n            console.log(\"old project\" + selectProjectMenu.value);\n        }\n    }\n    //Starts the store data functions\n    function startStoring ()\n    {\n        storeProjectTitle();\n    }\n     //This would go in the DOM module, but since Data module comes after, it wouldnt call this function\n     const submitBtn = document.querySelector(\".Submit-Button\")\n     submitBtn.addEventListener(\"click\", startStoring);\n    return { startStoring };\n})();\n\n//# sourceURL=webpack://O-To-Do-List/./src/index.js?");

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