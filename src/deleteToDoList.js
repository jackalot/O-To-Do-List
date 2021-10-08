function deleteTodoList (todoListDiv, item) {
    const confirmation = window.prompt("Are you sure you want to delete this to do list? The list is " + item.title + ". (say yes or no)").toLowerCase();
    if(confirmation === 'yes')
    {
        while(todoListDiv.firstChild)
        {
            console.log(todoListDiv.firstChild);
            todoListDiv.removeChild(todoListDiv.firstChild);
        }
        for(key in item)
        {
            delete key;
        }
        todoListDiv.parentNode.removeChild(todoListDiv);
    }
    console.log(item);
}
export default deleteTodoList;