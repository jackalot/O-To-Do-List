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
            console.log(AlllistItems[i]);
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
    /* StoreSingleField, in an attempt to shorten making multiple functions:
    *inputType = the type of input we are storing, ex. description, notes, dueDate
    className = the class name for the input fied we are searching: .To-Do-List-notes, .To-Do-List-dueDate, .To-Do-List-description
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
    //Starts the store data functions
    function startStoring ()
    {
        storeProjectTitle();
        storeToDoListTitle();
        StoreSingleField("description", ".To-Do-List-description");
        StoreSingleField("notes", ".To-Do-List-notes");
        StoreSingleField("dueDate", ".To-Do-List-dueDate");
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