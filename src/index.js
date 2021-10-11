const OpenBtn = document.querySelector(".open-button");
//console.log({OpenBtn});
OpenBtn.addEventListener("click", () => {
    openForm();
});
const form  = document.querySelector(".form-popup");
form.style.display = "none";
function openForm() {
 form.style.display = "block";
}
function closeForm() {
    form.style.display = "none";
}
const selectProjectMenu = document.querySelector(".Project-Name");//The actual menu
const selectProjectOptions = selectProjectMenu.childNodes;
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