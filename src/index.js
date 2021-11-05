function CreateProject (projectName, toDoListTitle, dueDate, priority, notes, checklist)
{
    return { projectName, toDoListTitle, dueDate, priority, notes, checklist }
}
const newObj = CreateProject("project", "new title", "new dudedate", "new priority", "notes are cool", ["checklist item one", "checklist item 2"]);
localStorage.setItem(`${newObj.projectName}`, JSON.stringify(newObj));
let retrieved = localStorage.getItem(`${newObj.projectName}`);
let objectAfter = JSON.parse(retrieved);
console.log(objectAfter.toDoListTitle);