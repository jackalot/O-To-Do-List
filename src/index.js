import './style.css';
import makeToDoItem from './makeItem';
import checkForProject from './checkForProject';
import importToDoItemToDom from './importItem';
let projects = ["test1", "test2"];
function start () {
    const item = makeToDoItem("title input", "this is a description input", "Due Date Now", "High priority", "super confused and just a test", ["finish", "this", "project"]);
    console.log(item);
    const projectIsAvailable = checkForProject("test1", projects);
    console.log(projectIsAvailable);
    if(projectIsAvailable) //its not false so it returned one of the project strings
    {
        importToDoItemToDom(item, projectIsAvailable);
    }
    else if(!projectIsAvailable)
    {
        //create project module
    }
}
start();