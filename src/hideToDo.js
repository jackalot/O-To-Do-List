//Same as hideProject but for the item
function hideToDo (ToDoItem, project) {
    const ItemDiv = document.querySelector(`#${ToDoItem.title}-body`);
    console.log(ToDoItem.title);
    console.log(ItemDiv);
    if (ItemDiv.style.display === "none")
    {
        ItemDiv.style.display = "block";
    }
    else {
        ItemDiv.style.display = "none";
    }
}
export default hideToDo;