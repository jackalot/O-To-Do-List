import './style.css';
import makeToDoItem from './makeItem';
import checkForProject from './checkForProject';
import importToDoItemToDom from './importItem';
import CreateProject from './createAProject';
let projects = [];

const addContentBtn = document.querySelector("button");
addContentBtn.addEventListener("click", () => {
    const projectInput = window.prompt("Which project is this to do item? (if it is a new project, just insert the name) No spaces for this!");
    const titleInput = window.prompt("What is the title of your to-do item?");
    const descInput = window.prompt("Whats the description for it?");
    const priorityInput = window.prompt("What priority does this have?");
    const dudeDateInput = window.prompt("When is this due?")
    const notesInput = window.prompt("Any additional notes?");
    const checkListInput = window.prompt("For the checklist, insert one of the things you want in there?");
    const allInputs = {
        projectInput: projectInput,
        titleInput: titleInput,
        descInput: descInput,
        priorityInput: priorityInput,
        dudeDateInput: dudeDateInput,
        notesInput: notesInput,
        checkListInput: checkListInput,
    }
    start (allInputs);
})
function start (allInputs) {
    const item = makeToDoItem(allinputs.projectInput, allinputs.titleInput, allinputs.descInput, allinputs.dudeDateInput, allinputs.priorityInput, allinputs.notesInput, allinputs.[checkListInput]); // actual use
    const item = makeToDoItem("projectInput", "titleInput", "descInput", "dudeDateInput", "priorityInput", "notesInput", ["checkListInput"]); //debugging
    localStorage.setItem(`${item.ProjectTitle}`, JSON.stringify(item));
    //console.log(item);
    //console.log(item.checklist);
    const projectIsAvailable = checkForProject(item.ProjectTitle, projects);
    projects.push(item.ProjectTitle);
    console.log(projects);
    //const projectIsAvailable = checkForProject("projectInput", projects); //debugging
    //console.log(projectIsAvailable);
    if(projectIsAvailable) //its not false so it returned one of the project strings
    {
        let split = item.ProjectTitle.split(" ");
        let joined = split.join("-");
        importToDoItemToDom(item, joined);
    }
    else if(!projectIsAvailable)
    {
        //console.log("creating project");
        //Note = make sure before passing in value theres no spaces
        let split = item.ProjectTitle.split(" ");
        let joined = split.join("-");
       CreateProject(joined);
       importToDoItemToDom(item, joined)
    }
}
//start();
//make an edit/delete button
/*
function CreateProject (projectName, toDoListTitle, dueDate, priority, notes, checklist)
{
    return { projectName, toDoListTitle, dueDate, priority, notes, checklist }
}
const newObj = CreateProject("project", "new title", "new dudedate", "new priority", "notes are cool", ["checklist item one", "checklist item 2"]);
localStorage.setItem(`${newObj.projectName}`, JSON.stringify(newObj));
let retrieved = localStorage.getItem(`${newObj.projectName}`);
let objectAfter = JSON.parse(retrieved);
console.log(objectAfter.projectName);
*/