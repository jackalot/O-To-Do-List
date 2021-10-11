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
let selectMenuValue = document.querySelector(".Project-Name").value;
    if(selectMenuValue === "NewProject")
    {
        console.log("new project?");
    }