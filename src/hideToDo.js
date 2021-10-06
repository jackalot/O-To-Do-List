//Same as hideProject but for the item
function hideToDo (itemBody, project) {
    //const ItemDiv = document.querySelector(`#${ToDoItem.title}-body`);
   // console.log(ToDoItem.title);
    //console.log(ItemDiv);
    if (itemBody.style.display === "none")
    {
        itemBody.style.display = "block";
    }
    else {
        itemBody.style.display = "none";
    }
}
export default hideToDo;