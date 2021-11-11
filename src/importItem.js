import hideToDo from "./hideToDo";
import addToCheckList from "./addToChecklist";
import removeCheckListItem from "./deleteCheckListItem";
import editField from "./editField";
import deleteTodoList from "./deleteToDoList";
//put the item and list it under its individual project
function importToDoItemToDom (item, joinedProjectName, joinedToDoListTitle) {
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
            const ToDoItem = createNewElement("li", "to-Do-Item", projectUL, null, `${joinedProjectName}-${joinedToDoListTitle}-toDoItemDiv`);
        }
        //This is the div element that holds the header, and other info
        function createItemTextDiv() {
            const ToDoItem = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-toDoItemDiv`);
            if(ToDoItem === null)
            {
                createToDoItem();
                createItemTextDiv(); //call this function again now that todo item has been created
            }
            else
            {
                const itemTextDiv = createNewElement("div", "item-Text", ToDoItem, null, `${joinedProjectName}-${joinedToDoListTitle}-itemTextDiv`);
            }
        }
        //This is the headerdiv that has the title of the item and a button to collapses it
        function createItemHeader() {
            const itemTextDiv = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-itemTextDiv`);
            if(itemTextDiv === null)
            {
                createItemTextDiv();
                createItemHeader(); //call this function again now that itemTextDiv has been created
            }
            else
            {
                const itemHeader = createNewElement("div", "item-Header", itemTextDiv, null,`${joinedProjectName}-${joinedToDoListTitle}-ItemHeaderDiv`)
            }
        }
        function createItemHeading() {
            const itemHeader = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-itemTextDiv`);
            if(itemHeader === null)
            {
                createItemHeader();
                createItemHeading(); //call this function again now that itemHeader has been created
            }
            else
            {
                const headerH3 = createNewElement("h3", "item-Heading", itemHeader, null,`${joinedProjectName}-${joinedToDoListTitle}-ItemHeading`);
               let retrieved = localStorage.getItem(`${item.projectTitle}`);
              let objectAfter = JSON.parse(retrieved);
              headerH3.textContent = objectAfter.ToDoListtitle;
            }
        }
        function createItemBodyDisplayButton() {
            const itemHeader = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-itemTextDiv`);
            if(itemHeader === null)
            {
                createItemHeader();
                createItemBodyDisplayButton(); //call this function again now that itemHeader has been created
            }
            else
            {
                const validDisplayBtn = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-ItemBodyDisplayButton`);
                if(!validDisplayBtn) //if one hasnt been made yet, create a new one
                {
                    const displayBtn = createNewElement("button", "display-Items", itemHeader, null, `${joinedProjectName}-${joinedToDoListTitle}-ItemBodyDisplayButton`);
                    displayBtn.textContent = "Display To-Do-List";
                }
                const itemBody = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-itemBody`); //find the itemBody
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
            const ToDoItem = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-toDoItemDiv`);
            if(ToDoItem === null)
            {
                createToDoItem();
                createItemBody(); //call this function again now that todo item has been created
            }
            else
            {
                const itemBody = createNewElement("div", "item-Body", ToDoItem, null, `${joinedProjectName}-${joinedToDoListTitle}-itemBody`);
            }            
        }
        function createDueDateField() {
            const itemBody = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-itemBody`); //find the itemBody
            if(itemBody === null)
            {
                createItemBody();
                createDueDateField(); //call this function again now that todo item has been created
            }
            else
            {
                const dueDateh3 = createNewElement("p", "due-Date", itemBody, null, `${joinedProjectName}-${joinedToDoListTitle}-dueDate`);
                let retrieved = localStorage.getItem(`${item.projectTitle}`);
                let objectAfter = JSON.parse(retrieved);
                dueDateh3.textContent = objectAfter.dueDate; 
            }
        }
        function createPriorityField() {
            const itemBody = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-itemBody`); //find the itemBody
            if(itemBody === null)
            {
                createItemBody();
                createPriorityField(); //call this function again now that itemBody has been created
            }
            else
            {
                const priorityH4 = createNewElement("h4", "priority", itemBody, null, `${joinedProjectName}-${joinedToDoListTitle}-priority`);
                let retrieved = localStorage.getItem(`${item.projectTitle}`);
                let objectAfter = JSON.parse(retrieved);
                priorityH4.textContent = objectAfter.priority; 
            }
        }
        function createChecklistDiv() {
            const itemBody = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-itemBody`); //find the itemBody
            if(itemBody === null)
            {
                createItemBody();
                createChecklistDiv(); //call this function again now that itemBody has been created
            }
            const checkListDiv = createNewElement("div", "checklist-Div", itemBody, null, `${joinedProjectName}-${joinedToDoListTitle}-checkListDiv`);
        }
        function createChecklistNote() {
            const checkListDiv = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-checkListDiv`); //find the checklistDiv
            if(checkListDiv === null)
            {
                createChecklistDiv();
                createChecklistNote(); //call this function again now that checklistDiv has been created
            }
            let validNote = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-checkList-Note`);
            if(validNote === null) //this can be called many times, so check if its been made before
            {
            const checkListNote = createNewElement("p", "checklist-Note", checkListDiv, null, `${joinedProjectName}-${joinedToDoListTitle}-checkList-Note`);
            checkListNote.textContent = "Your check list for this To-Do-List:";
            }
        }
        function createChecklistUL () {
            const checkListNote =  document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-checkList-Note`);
            const checkListDiv = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-checkListDiv`); //this isnt really needed for functionality its just for user readability
            if(checkListDiv === null)
            {
                createChecklistDiv();
                createChecklistUL(); //call this function again now that checklistDiv has been created
            }
            if(checkListNote === null)
            {
                createChecklistNote();
                createChecklistUL(); //call this function again now that checklistDiv has been created
            }
            let validChecklistUl = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-checkList-Ul`);
            if(validChecklistUl === null)
            {
                const checklistUL = createNewElement("ul", "checklist-Ul", checkListDiv, null, `${joinedProjectName}-${joinedToDoListTitle}-checkList-Ul`);
                //for loop that loops through checklist and lists them
                let retrieved = localStorage.getItem(`${item.projectTitle}`);
                let objectAfter = JSON.parse(retrieved);
                for(let i = 0; i < objectAfter.checklist.length; i++)        
                {
                    if(document.querySelector(`#${objectAfter[i]}`) === null)
                    {
                    let newListItem = createNewElement("li", "checklist-Item", checklistUL, null, `${objectAfter[i]}`)
                    newListItem.textContent = objectAfter.checklist[i];   
                    }
                }
            }    
        }
        function createAdditionalNotes() {
            const itemBody = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-itemBody`); //find the itemBody
            if(itemBody === null)
            {
                createItemBody();
                createAdditionalNotes(); //call this function again now that itemBody has been created
            }
            const additionalNotesP = createNewElement("p", "additional-Notes", itemBody, null, `${joinedProjectName}-${joinedToDoListTitle}-additionalNotes`);
            let retrieved = localStorage.getItem(`${item.projectTitle}`);
                let objectAfter = JSON.parse(retrieved);
            additionalNotesP.textContent = objectAfter.notes;
        }
        function createItemBoxDiv() {
            const ToDoItem = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-toDoItemDiv`);
            if(ToDoItem === null)
            {
                createToDoItem();
                createItemBoxDiv(); //call this function again now that todo item has been created
            }
            else
            {
                const itemBoxDiv = createNewElement("div", "item-Box", ToDoItem, null, `${joinedProjectName}-${joinedToDoListTitle}-itemBox`);
            }
        }
        function createEditHeaderBtn() {
            const itemBoxDiv = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-itemBox`);
            if(itemBoxDiv === null)
            {
                createItemBoxDiv();
                createEditHeaderBtn(); //call this function again now that todo item has been created
            }
            else
            {
                const headerH3 = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-ItemHeading`);
                const editHeaderBtn = createNewElement("button", "editHeaderBtn", itemBoxDiv, null, `${joinedProjectName}-${joinedToDoListTitle}-editHeaderBtn`);
                editHeaderBtn.textContent = "Edit To Do list Header";
                editHeaderBtn.addEventListener('click', () => {
                    editField(headerH3, "Whats the name of this todo list?", item, "ToDoListtitle")
                })
            }
        }
        function createDueDateBtn () {
            const itemBoxDiv = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-itemBox`);
            if(itemBoxDiv === null)
            {
                createItemBoxDiv();
                createDueDateBtn(); //call this function again now that todo item has been created
            }
            else
            {
                const dueDateh3 = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-dueDate`);
                const editDueDateBtn = createNewElement("button", "edit-Due-Date-Btn", itemBoxDiv, null, `${joinedProjectName}-${joinedToDoListTitle}-editDueDateBtn`);
                editDueDateBtn.textContent = "Edit Due Date";
                editDueDateBtn.addEventListener('click', () => {
                    editField(dueDateh3, "What time is this due?", item, "dueDate")
                })
            }
        }
        function createAddToChecklistBtn () {
            const checklistUl = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-checkList-Ul`);
            const itemBoxDiv = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-itemBox`);
            if(checklistUl === null)
            {
                createChecklistUL();
                createAddToChecklistBtn();
            }
            else
            {
                //make a button that adds items to the checklist
                const addToChecklistBtn = createNewElement("button", "add-To-Check-List-Btn", itemBoxDiv, null, `${joinedProjectName}-${joinedToDoListTitle}-addToChecklistBtn`)
                addToChecklistBtn.textContent = "Add to checklist";
                addToChecklistBtn.addEventListener('click', () => {
                    addToCheckList(checklistUl, item);
                })
            }
        }
        function createRemoveFromChecklistBtn () {
            const checklistUl = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-checkList-Ul`);
            const itemBoxDiv = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-itemBox`);
            if(itemBoxDiv === null)
            {
                createItemBoxDiv()
                createRemoveFromChecklistBtn();
            }
            else
            {
                if(checklistUl === null)
                {
                    createChecklistUL();
                    createRemoveFromChecklistBtn();
                }
                else
                {
                    //make a button that adds items to the checklist
                    const removeFromChecklistBtn = createNewElement("button", "remove-From-Check-List-Btn", itemBoxDiv, null, `${joinedProjectName}-${joinedToDoListTitle}-addToChecklistBtn`)
                    removeFromChecklistBtn.textContent = "Remove From checklist";
                    removeFromChecklistBtn.addEventListener('click', () => {
                        removeCheckListItem(checklistUl, item);
                    })
                }
            }
        }
        function createDeleteTodoListBtn () {
            const itemBoxDiv = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-itemBox`);
            if(itemBoxDiv === null)
            {
                createItemBoxDiv()
                createDeleteTodoListBtn();
            }
            else
            {
                
                const ToDoItem = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-toDoItemDiv`);
                const deleteToDoListBtn = createNewElement("button", "delete-To-Do-List-Btn", itemBoxDiv, null, `${joinedProjectName}-${joinedToDoListTitle}-deleteToDoListBtn`)
                deleteToDoListBtn.textContent = "Delete To-Do List";
                deleteToDoListBtn.addEventListener('click', () => {
                    deleteTodoList(projectUL, ToDoItem, item);
                })
            }
        }
        //doesnt include checklist buttons
        function createEditButtons(buttonClassName, fieldId, buttonText, editFieldMessage, fieldType) {
            const itemBoxDiv = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-itemBox`);
            if(itemBoxDiv === null)
            {
                createItemBoxDiv();
                createEditButtons(buttonClassName, fieldId, buttonText, editFieldMessage, fieldType);
            }
            else
            {
                const newButton = createNewElement("button", `${buttonClassName}`, itemBoxDiv, null, `${joinedProjectName}-${joinedToDoListTitle}-edit${fieldId}Btn`)
                const relatedField = document.querySelector(`#${joinedProjectName}-${joinedToDoListTitle}-${fieldId}`);
                newButton.textContent = `${buttonText}`;
                newButton.addEventListener('click', () => {
                    editField(relatedField, editFieldMessage, item, fieldType);
                })
            }
        }
        createItemHeading();
        createItemBodyDisplayButton();
        createDueDateField();
        createPriorityField();
        createAdditionalNotes();
        createEditHeaderBtn();
        createDueDateBtn();
        createEditButtons("edit-Priority-Btn", "priority", "Edit Priority", "Whats the priority of this task?", "priority");
        createAddToChecklistBtn();
        createRemoveFromChecklistBtn();
        createEditButtons("edit-Notes-Btn", "additionalNotes", "Edit Additional Notes", "What additional notes do you have?", "notes");
        createDeleteTodoListBtn();
    }
}
export default importToDoItemToDom;