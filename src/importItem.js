import hideToDo from "./hideToDo";
import addToCheckList from "./addToChecklist";
import removeCheckListItem from "./deleteCheckListItem";
import editField from "./editField";
import deleteTodoList from "./deleteToDoList";
//put the item and list it under its individual project
function importToDoItemToDom (item, joinedProjectName) {
const projectUL = document.querySelector(`#${joinedProjectName}-ul`);
//console.log(`#${joinedProjectName}-ul`);
//console.log(projectUL);
    if(projectUL === null)
    {
        console.log("it doesnt exist")
    }
    else
    {
        function createNewElement(element, elementClassList, parent, child, id) {
            const newElement = document.createElement(element);
            newElement.classList.add(elementClassList);
            newElement.id = id;
            if(parent != null)
            {
                parent.appendChild(newElement);
            }
            else
            {
                if(child != null)
                {
                    newElement.appendChild(child);
                }
            }
            return newElement;
        }
        function createToDoItem() {
            console.log("createToDoItem")
            const ToDoItem = createNewElement("li", "To-Do-Item", projectUL, null, `${joinedProjectName}-${item.ToDoListtitle}-toDoItemDiv`);
        }
        //This is the div element that holds the header, and other info
        function createItemTextDiv() {
            const ToDoItem = document.querySelector(`#${joinedProjectName}-${item.ToDoListtitle}-toDoItemDiv`);
            if(ToDoItem === null)
            {
                createToDoItem();
                createItemTextDiv(); //call this function again now that todo item has been created
            }
            else
            {
                const itemTextDiv = createNewElement("div", "Item-Text", ToDoItem, null, `${joinedProjectName}-${item.ToDoListtitle}-itemTextDiv`);
            }
        }
        //This is the headerdiv that has the title of the item and a button to collapses it
        function createItemHeader() {
            const itemTextDiv = document.querySelector(`#${joinedProjectName}-${item.ToDoListtitle}-itemTextDiv`);
            if(itemTextDiv === null)
            {
                createItemTextDiv();
                createItemHeader(); //call this function again now that itemTextDiv has been created
            }
            else
            {
                const itemHeader = createNewElement("div", "Item-Header", itemTextDiv, null,`${joinedProjectName}-${item.ToDoListtitle}-ItemHeaderDiv`)
            }
        }
        function createItemHeading() {
            const itemHeader = document.querySelector(`#${joinedProjectName}-${item.ToDoListtitle}-itemTextDiv`);
            if(itemHeader === null)
            {
                createItemHeader();
                createItemHeading(); //call this function again now that itemHeader has been created
            }
            else
            {
                const headerH3 = createNewElement("h3", "Item-Heading", itemHeader, null,`${joinedProjectName}-${item.ToDoListtitle}-ItemHeading`);
               let retrieved = localStorage.getItem(`${item.projectTitle}`);
              let objectAfter = JSON.parse(retrieved);
              headerH3.textContent = objectAfter.projectTitle;
            }
        }
        function createItemBodyDisplayButton() {
            const itemHeader = document.querySelector(`#${joinedProjectName}-${item.ToDoListtitle}-itemTextDiv`);
            if(itemHeader === null)
            {
                createItemHeader();
                createItemBodyDisplayButton(); //call this function again now that itemHeader has been created
            }
            else
            {
                const validDisplayBtn = document.querySelector(`#${joinedProjectName}-${item.ToDoListtitle}-ItemBodyDisplayButton`);
                if(!validDisplayBtn) //if one hasnt been made yet, create a new one
                {
                    const displayBtn = createNewElement("button", "display-items", itemHeader, null, `${joinedProjectName}-${item.ToDoListtitle}-ItemBodyDisplayButton`);
                    displayBtn.textContent = "Display To-Do-List";
                }
                const itemBody = document.querySelector(`#${joinedProjectName}-${item.ToDoListtitle}-itemBody`); //find the itemBody
                if(itemBody === null) { //if its null do the usual call its function and call this one
                    createItemBody();
                    createItemBodyDisplayButton(); //call this function again now that itemBody has been created
                }
                else
                {
                    validDisplayBtn.addEventListener('click', ()=> {
                        console.log("click");
                        hideToDo(itemBody); 
                    });
                }
            }
        } 
        //stores the rest of the items, like due date, checklist, priority, description, etc.
        function createItemBody() {
            const ToDoItem = document.querySelector(`#${joinedProjectName}-${item.ToDoListtitle}-toDoItemDiv`);
            if(ToDoItem === null)
            {
                createToDoItem();
                createItemBody(); //call this function again now that todo item has been created
            }
            else
            {
                const itemBody = createNewElement("div", "Item-Body", ToDoItem, null, `${joinedProjectName}-${item.ToDoListtitle}-itemBody`);
            }            
        }
        function createDueDateField() {
            const itemBody = document.querySelector(`#${joinedProjectName}-${item.ToDoListtitle}-itemBody`); //find the itemBody
            if(itemBody === null)
            {
                createItemBody();
                createDueDateField(); //call this function again now that todo item has been created
            }
            else
            {
                const dueDateh3 = createNewElement("p", "Due-Date", itemBody, null, `${joinedProjectName}-${item.ToDoListtitle}-dueDate`);
                let retrieved = localStorage.getItem(`${item.projectTitle}`);
                let objectAfter = JSON.parse(retrieved);
                dueDateh3.textContent = objectAfter.dueDate; 
            }
        }
        function createPriorityField() {
            const itemBody = document.querySelector(`#${joinedProjectName}-${item.ToDoListtitle}-itemBody`); //find the itemBody
            if(itemBody === null)
            {
                createItemBody();
                createPriorityField(); //call this function again now that itemBody has been created
            }
            else
            {
                const priorityH4 = createNewElement("h4", "Priority", itemBody, null, `${joinedProjectName}-${item.ToDoListtitle}-priority`);
                let retrieved = localStorage.getItem(`${item.projectTitle}`);
                let objectAfter = JSON.parse(retrieved);
                priorityH4.textContent = objectAfter.priority; 
            }
        }
        function createChecklistDiv() {
            const itemBody = document.querySelector(`#${joinedProjectName}-${item.ToDoListtitle}-itemBody`); //find the itemBody
            if(itemBody === null)
            {
                createItemBody();
                createChecklistDiv(); //call this function again now that itemBody has been created
            }
            const checkListDiv = createNewElement("div", "checklist-Div", itemBody, "", `${joinedProjectName}-${item.ToDoListtitle}-checkListDiv`);
        }
        createItemHeading();
        createItemBodyDisplayButton();
        createDueDateField();
        createPriorityField();
        createChecklistDiv();
    /*
        //console.log(ul);
        //Elements are created the same way its sorted in html
        //This is the list element that holds everything
        const ToDoItem = document.createElement("li");
        ToDoItem.classList.add("To-Do-Item");
        ul.appendChild(ToDoItem);
        //This is the div element that holds the header, and other info
            const itemTextDiv = document.createElement("div");
            itemTextDiv.classList.add("Item-Text");
            ToDoItem.appendChild(itemTextDiv);
                //This is the headerdiv that has the title of the item and a button to collapses it
                const itemHeader = document.createElement("div");
                itemHeader.classList.add("Item-Header");
                itemTextDiv.appendChild(itemHeader);
                    const headerH3 = document.createElement("h3");
                    headerH3.textContent = localStorage.getItem(`${joinedProjectName}-${item.title}-title`);
                    itemHeader.appendChild(headerH3);
                        const displayBtn = document.createElement("button");
                        displayBtn.textContent = "Display To-Do-List";
                        displayBtn.addEventListener('click', ()=> {
                            console.log("click");
                            hideToDo(itemBody);
                        });
                        itemHeader.appendChild(displayBtn);
                        displayBtn.classList.add("display-items");
                /*END HEADER DIV */
                /*Item Body Begin */
    /*            const itemBody = document.createElement("div");
                itemBody.classList.add("Item-Body");
                itemBody.id = localStorage.getItem(`${joinedProjectName}-${item.title}-title`) + "-body";
                ToDoItem.appendChild(itemBody);
                    const dueDateh3 = document.createElement("h3");
                    dueDateh3.textContent = localStorage.getItem(`${joinedProjectName}-${item.title}-dueDate`);
                    dueDateh3.classList.add("Due-Date");
                    itemBody.appendChild(dueDateh3);
                    const priorityh4 = document.createElement("h4");
                    priorityh4.textContent = localStorage.getItem(`${joinedProjectName}-${item.title}-priority`);
                    priorityh4.classList.add("Priority");
                    itemBody.appendChild(priorityh4);
                    const descriptionP = document.createElement("p");
                    descriptionP.textContent =  localStorage.getItem(`${joinedProjectName}-${item.title}-description`);
                    itemBody.appendChild(descriptionP);
                        /*BEGIN Check list */
                        //This is the div that holds the check list
    /*                    const checkListDiv = document.createElement("div");
                        itemBody.appendChild(checkListDiv);
                            const listNoteP = document.createElement("p");
                            listNoteP.classList.add("list-note");
                            listNoteP.textContent = "Your check list for this To-Do-List:"
                            checkListDiv.appendChild(listNoteP);
      */                      /*Un-ordered list begin */
     /*                       const checklistUL = document.createElement("ul");
                            //for loop that loops through checklist and lists them
                            for(let i = 0; i < item.checklist.length; i++)
                            {
                                let newlistItem = document.createElement("li");
                                newlistItem.textContent = item.checklist[i];
                                checklistUL.appendChild(newlistItem);
                            }
       */                     /* END unordered list and checklist*/
     /*                       itemBody.appendChild(checklistUL);
                        const additionalNotesP = document.createElement("p");
                        additionalNotesP.textContent = item.notes;
                        itemBody.appendChild(additionalNotesP);
       */                 /*BEGIN item box div */
      /*                  const itemBoxDiv = document.createElement("div");
                        itemBoxDiv.classList.add("Item-Box");
                        
                            //make a button that edits the to-do-list header
                            const editHeaderBtn = document.createElement("button");
                            editHeaderBtn.textContent = "Edit To Do list Header";
                            editHeaderBtn.addEventListener('click', () => {
                                editField(headerH3, "Whats the name of this todo list?", item, "title")
                            })
                            ToDoItem.appendChild(itemBoxDiv);
                            itemBoxDiv.appendChild(editHeaderBtn);
                            //make a button that edits the due date
                            const editDueDateBtn = document.createElement("button");
                            editDueDateBtn.textContent = "Edit Due Date";
                            editDueDateBtn.addEventListener('click', () => {
                                editField(dueDateh3, "What time is this due?", item, "duedate")
                            })
                            itemBoxDiv.appendChild(editDueDateBtn);
                            //make a button that edits the priority
                            const editPriorityBtn = document.createElement("button");
                            editPriorityBtn.textContent = "Edit Priority";
                            editPriorityBtn.addEventListener('click', () => {
                                editField(priorityh4, "Whats the priority of this task?", item, "priority")
                            })
                            itemBoxDiv.appendChild(editPriorityBtn);
                            //make a button that adds items to the checklist
                            const addToChecklistBtn = document.createElement("button");
                            addToChecklistBtn.textContent = "Add to checklist";
                            addToChecklistBtn.addEventListener('click', () => {
                                addToCheckList(checklistUL, item);
                            })
                            itemBoxDiv.appendChild(addToChecklistBtn);
                            //make a button that removes items from the checklist.
                            const removeFromChecklist = document.createElement("button");
                            removeFromChecklist.textContent = "Remove from checklist";
                            removeFromChecklist.addEventListener('click', () => {
                                removeCheckListItem(checklistUL, item);
                            })
                            itemBoxDiv.appendChild(removeFromChecklist);
                            //make a button that edits the priority
                            const editNotesBtn = document.createElement("button");
                            editNotesBtn.textContent = "Edit Additional Notes";
                            editNotesBtn.addEventListener('click', () => {
                                editField(additionalNotesP, "What additional notes do you have?", item, "notes")
                            })
                            itemBoxDiv.appendChild(editNotesBtn);
                            const deleteToDoListBtn = document.createElement("button");
                            deleteToDoListBtn.textContent = "Delete To-Do List";
                            deleteToDoListBtn.addEventListener('click', () => {
                                deleteTodoList(ul, ToDoItem, item);
                            })
                            itemBoxDiv.appendChild(deleteToDoListBtn);
                            
        */                    /*END item box div */
                /*END Item Body*/
    }
}
export default importToDoItemToDom;