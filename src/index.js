import './style.css';
import makeToDoItem from './makeItem';
import checkForProject from './checkForProject';
import importToDoItemToDom from './importItem';
import CreateProject from './createAProject';
let projects = ["test1", "test2"]; //since I am too lazy to refactor modules to work with objects
function start () {
    const projectInput = window.prompt("Which project is this to do item? (if it is a new project, just insert the name)");
    const titleInput = window.prompt("What is the title of your to-do item?");
    const descInput = window.prompt("Whats the description for it?");
    const priorityInput = window.prompt("What priority does this have?");
    const dudeDateInput = window.prompt("When is this due?");
    const notesInput = window.prompt("Any additional notes?");
    const checkListInput = window.prompt("For the checklist, insert one of the things you want in there?");
    const item = makeToDoItem(titleInput, descInput, priorityInput, dudeDateInput, notesInput, [checkListInput]);
    //console.log(item);
    const projectIsAvailable = checkForProject(projectInput, projects);
    //console.log(projectIsAvailable);
    if(projectIsAvailable) //its not false so it returned one of the project strings
    {
        importToDoItemToDom(item, projectIsAvailable);
    }
    else if(!projectIsAvailable)
    {
        console.log("creating project");
        //Note = make sure before passing in value theres no spaces
       CreateProject(projectInput);
       importToDoItemToDom(item, projectInput)
    }
}
start();