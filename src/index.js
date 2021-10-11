const OpenBtn = document.querySelector(".open-button");
console.log({OpenBtn});
OpenBtn.addEventListener("click", () => {
    openForm();
});
function openForm() {
 const form  = document.querySelector("form-popup");
 form.style.display = "block";
}
function closeForm() {
    const form  = document.querySelector("form-popup");
    form.style.display = "none";
}