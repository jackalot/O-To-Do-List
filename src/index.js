import './style.css';
import makeToDoItem from './makeItem';
import checkForProject from './checkForProject';
import importToDoItemToDom from './importItem';
import CreateProject from './createAProject';
let projects = ["test1", "test2"]; //since I am too lazy to refactor modules to work with objects

const addContentBtn = document.querySelector("button");
addContentBtn.addEventListener("click", () => {
    const projectInput = window.prompt("Which project is this to do item? (if it is a new project, just insert the name)");
    const titleInput = window.prompt("What is the title of your to-do item?");
    const descInput = window.prompt("Whats the description for it?");
    const priorityInput = window.prompt("What priority does this have?");
    const dudeDateInput = window.prompt("When is this due?")
    const notesInput = window.prompt("Any additional notes?");
    const checkListInput = window.prompt("For the checklist, insert one of the things you want in there?");
    start (projectInput, titleInput, descInput, priorityInput, dudeDateInput, notesInput, checkListInput);
})
function start (projectInput, titleInput, descInput, priorityInput, dudeDateInput, notesInput, checkListInput) {
    const item = makeToDoItem(titleInput, descInput, dudeDateInput, priorityInput, notesInput, [checkListInput]); // actual use
    //const item = makeToDoItem("titleInput", "descInput", "dudeDateInput", "priorityInput", "notesInput", ["checkListInput"]); //debugging
    console.log(item);
    console.log(item.checklist);
    const projectIsAvailable = checkForProject(projectInput, projects);
    //const projectIsAvailable = checkForProject("projectInput", projects); //debugging
    //console.log(projectIsAvailable);
    if(projectIsAvailable) //its not false so it returned one of the project strings
    {
        importToDoItemToDom(item, projectIsAvailable);
    }
    else if(!projectIsAvailable)
    {
        //console.log("creating project");
        //Note = make sure before passing in value theres no spaces
       CreateProject(projectInput); //actual use
       //CreateProject("projectInput"); //debugging
       importToDoItemToDom(item, projectInput) //actual use
       importToDoItemToDom(item, "projectInput");//debugging
    }
}
//start();
//make an edit/delete button