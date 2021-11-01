function makeToDoItem (ProjectTitle, ToDoListtitle, description, dueDate, priority, notes, checklist) {  
    //store the string as projectName-todolistTitle-what we need
    return { ProjectTitle, ToDoListtitle, description, dueDate, priority, notes, checklist};
}
export default makeToDoItem;