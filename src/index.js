const OpenBtn = document.querySelector(".open-button");
console.log({OpenBtn});
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