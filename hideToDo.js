//Same as hideProject but for the item
function hideToDo (ToDoItem) {
    const ItemDiv = document.querySelector(`#${ToDoItem} > ul`);
    if (ItemDiv.style.display === "none")
    {
        ItemDiv.style.display = "block";
    }
    else {
        ItemDiv.style.display = "none";
    }
}
export default hideToDo;