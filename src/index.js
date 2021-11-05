import './style.css';
import makeToDoItem from './makeItem';
import checkForProject from './checkForProject';
import importToDoItemToDom from './importItem';
import CreateProject from './createAProject';
let projects = [];

const addContentBtn = document.querySelector("button");
addContentBtn.addEventListener("click", () => {
    const projectTitle = window.prompt("Which project is this to do item? (if it is a new project, just insert the name) No spaces for this!");
    const toDoListTitle = window.prompt("What is the title of your to-do item?");
    const descInput = window.prompt("Whats the description for it?");
    const priority = window.prompt("What priority does this have?");
    const dueDate = window.prompt("When is this due?")
    const notes = window.prompt("Any additional notes?");
    const checkList = window.prompt("For the checklist, insert one of the things you want in there?");
    const allInputs = {
        projectTitle: projectTitle,
        toDoListTitle: toDoListTitle,
        descInput: descInput,
        priority: priority,
        dueDate: dueDate,
        notes: notes,
        checkList: checkList,
    }
    start (allInputs);
})
function start (allInputs) {
    //const item = makeToDoItem(allInputs.projectInput, allInputs.toDoListTitle, allInputs.descInput, allInputs.dueDate, allInputs.priority, allInputs.notes, allInputs.checkList); // actual use
    const item = makeToDoItem("projectInput", "toDoListTitle", "descInput", "dueDate", "priority", "notes", ["checkList"]); //debugging
    localStorage.setItem(`${item.projectTitle}`, JSON.stringify(item)); //make it so we can grab an object from local storage
    //console.log(item);
    //console.log(item.checklist);
    const projectIsAvailable = checkForProject(item.projectTitle, projects);
    projects.push(item.projectTitle);
    console.log(projects);
    //const projectIsAvailable = checkForProject("projectInput", projects); //debugging
    //console.log(projectIsAvailable);
    if(projectIsAvailable) //its not false so it returned one of the project strings
    {
        let split = item.projectTitle.split(" ");
        let joined = split.join("-");
        importToDoItemToDom(item, joined);
    }
    else if(!projectIsAvailable)
    {
        //console.log("creating project");
        //Note = make sure before passing in value theres no spaces
        let split = item.projectTitle.split(" ");
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
const newObj = CreateProject("project", "new title", "new dueDate", "new priority", "notes are cool", ["checklist item one", "checklist item 2"]);
localStorage.setItem(`${newObj.projectName}`, JSON.stringify(newObj));
let retrieved = localStorage.getItem(`${newObj.projectName}`);
let objectAfter = JSON.parse(retrieved);
console.log(objectAfter.projectName);
*/