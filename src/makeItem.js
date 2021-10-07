function makeToDoItem (title, description, dueDate, priority, notes, checklist, projectName) {  
    //this is the only way thing i could think of
    localStorage.setItem(`${projectName}-title`, title);
    localStorage.setItem(`${projectName}-description`, description);
    localStorage.setItem(`${projectName}-dueDate`, dueDate);
    localStorage.setItem(`${projectName}-priority`, priority);
    localStorage.setItem(`${projectName}-notes`, notes);
    localStorage.setItem(`${projectName}-checklist`, checklist);
    return {  title, description, dueDate, priority, notes, checklist};
}
export default makeToDoItem;