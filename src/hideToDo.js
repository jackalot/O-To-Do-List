//Same as hideProject but for the item
function hideToDo (ToDoItem, project) {
    const ItemDiv = document.querySelector(`#${project} > Item-Text`);
    console.log(ItemDiv);
    if (ItemDiv.style.display === "none")
    {
        ItemDiv.style.dis

        play = "block";
    }
    else {
        ItemDiv.style.display = "none";
    }
}
export default hideToDo;