import './style.css';
import makeToDoItem from './makeItem';
import checkForProject from './checkForProject';
import importToDoItemToDom from './importItem';
let projects = ["test1", "test2"];
function start () {
    const item = makeToDoItem("title input", "this is a description input", "Due Date Now", "High priority", "super confused and just a test", ["finish", "this", "project"]);
    console.log(item);
    const projectIsAvailable = checkForProject("ddsd", projects);
    console.log(projectIsAvailable);

}
start();