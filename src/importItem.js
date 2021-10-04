//put the item and list it under its individual project
function importToDoItemToDom (item, project) {
const projectDiv = document.querySelector('#' + project);
//console.log(projectDiv);
    if(projectDiv === null)
    {
        console.log("it doesnt exist")
    }
    else
    {
        //when we get to making projects, assume theres a ul already made
        const ul = document.querySelector(`#${project} > ul`);
        console.log(ul);
        //Elements are created the same way its sorted in html
        //This is the list element that holds everything
        const ToDoItem = document.createElement("li");
        ToDoItem.classList.add("To-Do-Item");
        ul.appendChild(ToDoItem);
        //This is the div element that holds the header, and other info
            const itemTextDiv = document.createElement("div");
            itemTextDiv.classList.add("Item-Text");
            ToDoItem.appendChild(itemTextDiv);
                //This is the headerdiv that has the title of the item and a button to collaps it
                const itemHeader = document.createElement("div");
                itemHeader.classList.add("Item-Header");
                itemTextDiv.appendChild(itemHeader);
                    const headerH3 = document.createElement("h3");
                    headerH3.textContent = item.title;
                    itemHeader.appendChild(headerH3);
                /*END HEADER DIV */
                /*Due-Date, Priority, description */
                const dueDateh3 = document.createElement("h3");
                dueDateh3.textContent = item.dueDate;
                dueDateh3.classList.add("Due-Date");
                itemTextDiv.appendChild(dueDateh3);
                const priorityh4 = document.createElement("h4");
                priorityh4.textContent = item.priority;
                priorityh4.classList.add("Priority");
                itemTextDiv.appendChild(priorityh4);
                const descriptionP = document.createElement("p");
                descriptionP.textContent = item.description;
                itemTextDiv.appendChild(descriptionP);
                /*END Due-Date, Priority, description */
                /*BEGIN Check list */
                //This is the div that holds the check list
                const checkListDiv = document.createElement("div");
                itemTextDiv.appendChild(checkListDiv);
                    const listNoteP = document.createElement("p");
                    listNoteP.classList.add("list-note");
                    listNoteP.textContent = "Your check list for this To-Do-List:"
                    checkListDiv.appendChild(listNoteP);
                    /*Un-ordered list begin */
                    const checklistUL = document.createElement("ul");
                    //for loop that loops through checklist and lists them
                    for(let i = 0; i < item.checklist.length; i++)
                    {
                        let newlistItem = document.createElement("li");
                        newlistItem.textContent = item.checklist[i];
                        checklistUL.appendChild(newlistItem);
                    }
                    /* END unordered list*/
                    itemTextDiv.appendChild(checklistUL);
                const additionalNotesP = document.createElement("p");
                additionalNotesP.textContent = item.notes;
                itemTextDiv.appendChild(additionalNotesP);
                /*BEGIN item box div */
                const itemBoxDiv = document.createElement("div");
                itemBoxDiv.classList.add("Item-Box");
                ToDoItem.appendChild(itemBoxDiv);
                    const editBtn = document.createElement("button");
                    editBtn.textContent = "Edit to do list";
                    itemBoxDiv.appendChild(editBtn);
                    /*END item box div */
    }
}
export default importToDoItemToDom;