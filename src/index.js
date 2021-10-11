//this module pattern will handle manipulating the form when it comes to the dom
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
})(document);