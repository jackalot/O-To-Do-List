//this module pattern will handle manipulating the form when it comes to the dom
const formDomManupulate = (function(doc) {
    const OpenBtn = doc.querySelector(".open-button");
    OpenBtn.addEventListener("click", () => {
        openForm();
    });
    const form  = document.querySelector(".form-popup");
    form.style.display = "none";

    function openForm() {
     form.style.display = "block";
    }

    const closeBtn = doc.querySelector(".btn-cancel");
    closeBtn.addEventListener("click", () => {
        closeForm();
    });
    function closeForm() {
        form.style.display = "none";
    }
    const selectProjectMenu = document.querySelector(".Project-Name");//The actual menu
    const newProjectInput = document.querySelector(".new-project");
    newProjectInput.style.display = "none";
    selectProjectMenu.addEventListener('click', () => {
        AddProjElement();
    })
    function AddProjElement() { //when a select project element is clicked, it triggers this function
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