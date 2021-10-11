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
selectProjectMenu.addEventListener('click', () => {
    AddProjElement();
})
function AddProjElement() { //when a select project element is clicked, it triggers this function
    if(selectProjectMenu.value === "NewProject")
    {
     console.log("add the 'add project' element to the dom");
    }
    else
    {
        console.log("dont need to add any elements in");
    }
}