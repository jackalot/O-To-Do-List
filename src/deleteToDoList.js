function deleteTodoList (projectUL, todoListDiv, item) {
    const confirmation = window.prompt("Are you sure you want to delete this to do list? The list is " + item.ToDoListtitle + ". (say yes or no)").toLowerCase();
    if(confirmation === 'yes')
    {
        while(todoListDiv.firstChild)
        {
            console.log(todoListDiv.firstChild);
            todoListDiv.removeChild(todoListDiv.firstChild);
        }
        projectUL.removeChild(todoListDiv);
        localStorage.removeItem(`${item.projectTitle}`);
    }
    console.log(item);
}
export default deleteTodoList;