function makeToDoItem (title, description, dueDate, priority, notes, checklist, projectName) {  
    //store the string as projectName-todolistTitle-what we need
    localStorage.setItem(`${projectName}-${title}-title`, title);
    localStorage.setItem(`${projectName}-${title}-description`, description);
    localStorage.setItem(`${projectName}-${title}-dueDate`, dueDate);
    localStorage.setItem(`${projectName}-${title}-priority`, priority);
    localStorage.setItem(`${projectName}-${title}-notes`, notes);
    localStorage.setItem(`${projectName}-${title}-checklist`, checklist);
    return {  title, description, dueDate, priority, notes, checklist};
}
export default makeToDoItem;