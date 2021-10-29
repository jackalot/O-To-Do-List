function CreateProject (projectName, toDoListTitle, dueDate, priority, notes, checklist)
{
    localStorage.setItem(`${projectName}`, projectName);
    localStorage.setItem(`${projectName}-${toDoListTitle}`, toDoListTitle);
    localStorage.setItem(`${projectName}-${dueDate}`, dueDate);
    localStorage.setItem(`${projectName}-${priority}`, priority);
    localStorage.setItem(`${projectName}-${notes}`, notes);
    localStorage.setItem(`${projectName}-${checklist}`, checklist);
    return { projectName, toDoListTitle, dueDate, priority, notes, checklist }
}
CreateProject("project", "new title", "new dudedate", "new priority", "notes are cool", ["checklist item one", "checklist item 2"]);