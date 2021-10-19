//this module pattern will handle manipulating the form when it comes to the dom IE. clicking open form opens it, clicking new project adds in 'add a new project' field
const formDomManupulate = (function(doc) {
    const OpenBtn = doc.querySelector(".open-button");
    OpenBtn.addEventListener("click", openForm);
    //Grab the form itself, and hide it
    const form  = doc.querySelector(".form-popup");
    form.style.display = "none";

    function openForm() {
     form.style.display = "block";
    }
    //Get the close form button, and add the corresponding function
    const closeBtn = doc.querySelector(".btn-cancel");
    closeBtn.addEventListener("click", closeForm);
    function closeForm() {
        form.style.display = "none";
    }
    //grab the project menu and the field, set the field to none by default
    const selectProjectMenu = doc.querySelector(".Project-Name");//The actual menu
    const newProjectInput = doc.querySelector(".new-project"); //The field that adds a new project
    newProjectInput.style.display = "none";
    //Every click on the select menu will call the AddProjElement(); 
    selectProjectMenu.addEventListener('click', () => {
        AddNewElement(selectProjectMenu, newProjectInput, "NewProject");
    })
    //Same thing as the project menu, but for the todolist title
    const selectTitleMenu = doc.querySelector(".To-Do-List-title");//The actual menu
    const newTitleInput = doc.querySelector(".New-To-Do-List-title"); //The field that adds a new title
    newTitleInput.style.display = "none";
    //Every click on the select menu will call the AddTitleElement(); 
    selectTitleMenu.addEventListener('click', () => {
        AddNewElement(selectTitleMenu, newTitleInput, "NewToDoListTitle");
    })
    //instead of making a seperate function per element, just do this
    function AddNewElement(menuElement, inputElement, newValue) {
        if(menuElement.value === newValue)
        {
            inputElement.style.display = "block";
        }
        else
        {
            inputElement.style.display = "none";
        }
    }
    //This is the start of the checklist section
    const checkListUl = doc.querySelector(".To-Do-List-checklist"); //the UL element that holds the checklist
    const addListBtn = doc.querySelector(".To-Do-List-checklist-addListItem"); //button that adds to the list
    checkForButton(); //call this now so all delete buttons have their delete functions
    function checkForButton () {
        //console.log(checkListUl.className);
        let AlllistItems = doc.querySelectorAll(`.${checkListUl.className} > li`); //find all the list items 
        //console.log(AlllistItems);
        for(i = 0; i < AlllistItems.length; i++) 
        {
            //console.log(AlllistItems[i]);
            let btn = doc.querySelector(`${AlllistItems[i].tagName} > button`); //if we have a button in a list item, its our delete button
            if(btn)
            {
                btn.addEventListener("click", () => {
                    deleteListItem(btn);
                })
            }
        }
    }
   function deleteListItem(btn) { //actual delete function
        //console.log("this button is " + btn.className);
        let parentLI = btn.parentNode; //get the li node
        //console.log("parentLI = " + parentLI);
        let parentUL = parentLI.parentNode; // get the entire UL 
        //console.log("parentUL = " + parentUL);
        parentUL.removeChild(parentLI); // to remove the list item itself
    }
    addListBtn.addEventListener("click", addListItem); //add the function below it to the button add List Item
    function addListItem() { //adds a list item to the check list inputs
        console.log("click");
        const newLI = doc.createElement("li"); //our list item which holds the content
        const textBox = doc.createElement("input"); //the input which we store data in
        textBox.type = "text";
        textBox.placeholder = "type a checklist item here";
        textBox.classList.add("To-Do-List-checklist-item");
        const deleteButton = doc.createElement("button"); //delete button which we create, then immediately add its function to
        deleteButton.addEventListener("click", () => {
            deleteListItem(deleteButton);
        })
        deleteButton.classList.add("To-Do-List-checklist-deleteListItem");
        deleteButton.textContent = "Delete this item!";
        //now add all those elements to the DOM
        checkListUl.appendChild(newLI);
        newLI.appendChild(textBox);
        newLI.appendChild(deleteButton);
    }
    return { closeForm };
})(document);
//Handles saving data from all form inputs
const formDataManipulate = (() => {
    const getCircularReplacer = () => {//for project titles since it gives a circular reference errors
        const seen = new WeakSet();
        return (key, value) => {
          if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
              return;
            }
            seen.add(value);
          }
          return value;
        };
      };
      
    function storeProjectTitle()
    {
        const selectProjectMenu = document.querySelector(".Project-Name");
        if(selectProjectMenu.value === "NewProject")
        {
            const newProjectInput = document.querySelector(".new-project-input");
            let projectValue = newProjectInput.value;
            //console.log("NewProject " + projectValue);
          
                if(typeof(Storage) !== "undefined") {
                    if(localStorage.projectTitles)
                    {
                        //projectTitles has been made
                        //console.log("localStorage.projectTitles exists")
                       let Retrieved = localStorage.getItem("projectTitles"); //create a Retrieved variable from local storage
                       let projectArray = JSON.parse(Retrieved); //parse it into a javascript array we can use
                        let projectIndex =projectArray.indexOf(projectValue); //This is if the project already exists, we won't just add more of the same name to local storage
                        if(projectIndex === -1) //if it doesnt exist already
                        {
                        projectArray.push(projectValue); //push it
                        localStorage.setItem("projectTitles", JSON.stringify(projectArray, getCircularReplacer()));
                        }
                    }
                    else //projectTitles has not been made yet
                    {
                       // console.log("localStorage.projectTitles will now exist")
                        let projectArray = []; // new array to store all titles
                        projectArray.push(projectValue); //push the projectValue onto that array
                        //console.log("ProjectArray is " + projectArray);
                        localStorage.setItem("projectTitles",  JSON.stringify(projectArray, getCircularReplacer())); //store in local storage as a strigified array.
                    }
                }
        }
        else
        {
            console.log("old project" + selectProjectMenu.value);
        }
    }
    function storeToDoListTitle() {
        const toDoListMenu = document.querySelector(".To-Do-List-title");
        if(toDoListMenu.value === "NewToDoListTitle")
        {
            const newProjectInput = document.querySelector(".new-project-input");
            let projectValue = newProjectInput.value;
            const newToDoListTitleInput = document.querySelector(".new-To-Do-List-title");
            if(typeof(Storage) !== "undefined") {
                if(localStorage[projectValue])
                {
                    //projectValue has been made
                    //onsole.log("localStorage.projectTitles exists")
                   let Retrieved = localStorage.getItem(projectValue); //create a Retrieved variable from local storage
                   let ToDoListTitles = JSON.parse(Retrieved); //parse it into a javascript array we can use
                   let titleIndex = ToDoListTitles.indexOf(newToDoListTitleInput.value); //This is if the project already exists, we won't just add more of the same name to local storage
                    if(titleIndex === -1) //if it doesnt exist already
                    {
                        ToDoListTitles.push(newToDoListTitleInput.value); //push it
                        localStorage.setItem(projectValue , JSON.stringify(ToDoListTitles, getCircularReplacer()));
                    }
                }
                else //whatever projectValue is has not been made yet
                {
                    //console.log("localStorage.projectValue-ToDoListTitles will now exist")
                    let ToDoListTitles = []; // new array to store all titles
                    ToDoListTitles.push(newToDoListTitleInput.value); //push the newToDoListTitleInput.value onto that array
                    //console.log("ToDoListTitles is " + ToDoListTitles);
                    localStorage.setItem(projectValue ,  JSON.stringify(ToDoListTitles, getCircularReplacer())); //store in local storage as a stringified array.
                }
            }
        }
        else
        {
            console.log("old ToDoList" + toDoListMenu.value);
        }
    }
    /* StoreSingleField, in an attempt to shorten making multiple functions:
    * inputType = the type of input we are storing, ex. description, notes, dueDate
    * className = the class name for the input fied we are searching, ex. .To-Do-List-notes, .To-Do-List-dueDate, .To-Do-List-description
    */ 
    function StoreSingleField(inputType, className) {
        const newProjectInput = document.querySelector(".new-project-input");
        const projectValue = newProjectInput.value;
        const newToDoListTitleInput = document.querySelector(".new-To-Do-List-title");
        const TitleValue = newToDoListTitleInput.value;
        const ourField = document.querySelector(className).value;
        if(typeof(Storage) !== "undefined")
        {
            localStorage.setItem(`${projectValue}-${TitleValue}-${inputType}`, JSON.stringify(ourField));
        }
    }
    function storeCheckList() 
    {
        const newProjectInput = document.querySelector(".new-project-input");
        const projectValue = newProjectInput.value;
        const newToDoListTitleInput = document.querySelector(".new-To-Do-List-title");
        const TitleValue = newToDoListTitleInput.value;
        let fullCheckList = [];
        if(typeof(Storage) !== "undefined") {
            if(localStorage[`${projectValue}-${TitleValue}-checkList`])
            {
                //fullCheckList has been made in localStorage
                let Retrieved = localStorage.getItem("projectTitles"); //create a Retrieved variable from local storage
                fullCheckList = JSON.parse(Retrieved); //parse it into a javascript array we can use
            }
        }
        let input = document.querySelectorAll(`li > .To-Do-List-checklist-item`); //if we have a textbox in a list item
        if(input)
        {
            input.forEach(element => {
                fullCheckList.push(element.value);
            });
        }
        console.log("fullChecklist is: " + fullCheckList);
        localStorage.setItem(`${projectValue}-${TitleValue}-checkList` ,  JSON.stringify(fullCheckList, getCircularReplacer())); //store in local storage as a strigified array.
    }
    //Starts the store data functions
    function startStoring ()
    {
        storeProjectTitle();
        storeToDoListTitle();
        StoreSingleField("description", ".To-Do-List-description");
        StoreSingleField("notes", ".To-Do-List-notes");
        StoreSingleField("dueDate", ".To-Do-List-dueDate");
        storeCheckList();
    }
     //This would go in the DOM module, but since Data module comes after, it wouldnt call this function
     const submitBtn = document.querySelector(".Submit-Button")
     submitBtn.addEventListener("click", () => {
         console.log("submit got clicked");
         formDomManupulate.closeForm();
         startStoring();
     });
    return { startStoring };
})();