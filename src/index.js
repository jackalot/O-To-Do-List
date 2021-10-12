//this module pattern will handle manipulating the form when it comes to the dom IE. clicking open form opens it, clicking new project adds in 'add a new project' field
const formDomManupulate = (function(doc) {
    const OpenBtn = doc.querySelector(".open-button");
    OpenBtn.addEventListener("click", openForm);
    //Grab the form itself, and hide it
    const form  = document.querySelector(".form-popup");
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
    const selectProjectMenu = document.querySelector(".Project-Name");//The actual menu
    const newProjectInput = document.querySelector(".new-project"); //The field that adds a new project
    newProjectInput.style.display = "none";
    //Every click on the select menu will call the AddProjElement(); 
    selectProjectMenu.addEventListener('click', () => {
        AddProjElement();
    })
    function AddProjElement() {
        if(selectProjectMenu.value === "NewProject")
        {
         newProjectInput.style.display = "block";
        }
        else
        {
            newProjectInput.style.display = "none";
        }
    }
    //Same thing as the project menu, but for the todolist title
    const selectTitleMenu = document.querySelector(".To-Do-List-title");//The actual menu
    const newTitleInput = document.querySelector(".New-To-Do-List-title"); //The field that adds a new title
    newTitleInput.style.display = "none";
    //Every click on the select menu will call the AddTitleElement(); 
    selectTitleMenu.addEventListener('click', () => {
        AddTitleElement();
    })
    function AddTitleElement() {
        if(selectTitleMenu.value === "NewToDoListTitle")
        {
            newTitleInput.style.display = "block";
        }
        else
        {
            newTitleInput.style.display = "none";
        }
    }
})(document);