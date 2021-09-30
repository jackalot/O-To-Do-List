import './style.css';
import makeToDoItem from './makeItem';
import checkForProject from './checkForProject';
import importToDoItemToDom from './importItem';

function start () {
    const item = makeToDoItem("title input", "this is a description input", "Due Date Now", "High priority", "super confused and just a test", ["finish", "this", "project"]);

}