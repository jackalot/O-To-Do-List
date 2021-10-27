//adds items to the todolist
const toDoListAddToDom = (() => {
    const toDoList = document.querySelector(".To-Do-List");
    function createEditForm(variableToEdit, variableType) {
        let split = variableToEdit.split(" ");
                //join them
         let joined = split.join('-');
        const editBtn = document.createElement("button");
            editBtn.textContent = 'Edit: ' + variableToEdit;
        editBtn.addEventListener("click", () => {
            editProjectFields.displayForm(form);
        })
        const form = document.createElement("div");
            form.classList.add(`${joined}-Edit-Form-To-Do-List`);
        const textBox = document.createElement("input");
        textBox.classList.add(`edit-${joined}-form`)
        textBox.type = "text";
        textBox.name = "Edit-" + joined;
        textBox.placeholder = "Enter the new value here!"
        form.append(textBox);
        const submitBtn = document.createElement("button");
        submitBtn.textContent = "Click to Submit changes!";
        submitBtn.addEventListener("click", () => {
            editProjectFields.hideForm(form);
            if(variableType === "project-title")
            {
            editProjectFields.editProjectName(variableToEdit)
            }
            
        })
        form.append(submitBtn);
        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Close: " + variableToEdit + " edit form";
        closeBtn.addEventListener("click", () => {
             editProjectFields.hideForm(form);
            });
        form.append(closeBtn);
        form.style.display = "none";
        return { editBtn, form, textBox, closeBtn }
    }
   function displayProjectTitle () {
        let Retrieved = localStorage.getItem("projectTitles"); //create a Retrieved variable from local storage
        let projectTitles = JSON.parse(Retrieved); //parse it into a javascript array we can use
        if(projectTitles !== null)
        {
            toDoList.textContent = "";
            for(let i=0; i < projectTitles.length; i++)
            {
                //create some elements for this title
                const Ul = document.createElement("Ul");
                const h1 = document.createElement("h1");
                const projectBody = document.createElement("div");
                const projectHeader = document.createElement("div")
                /* Begin elements for the edit button and form */
                const editFormDetails = createEditForm(projectTitles[i], 'project-title');
                //assign each element what they need
                projectBody.classList.add("project-titles-To-Do-List");
                projectHeader.classList.add("project-Header-To-Do-List") 
                //ids cant have spaces so split this project title
                let split = projectTitles[i].split(" ");
                //join them
                let joined = split.join('-');
                //and now make it equal this project
                projectBody.id = joined;
                h1.textContent = projectTitles[i];
                //append them to the dom
                toDoList.append(projectBody);
                projectBody.append(projectHeader);
                projectHeader.append(h1);
                projectHeader.append(editFormDetails.editBtn);
                projectHeader.append(editFormDetails.form);
                projectBody.append(Ul);
                let projDetails = {
                    Ul: Ul,
                    Name: projectTitles[i],
                    Id: joined,
                };
                displayToDoListTitles(projDetails);
            }
        }
    }
    const loadBtn = document.querySelector(".load-button");
     loadBtn.addEventListener("click", displayProjectTitle);
    function displayToDoListTitles(projDetails) {
        let Retrieved = localStorage.getItem(projDetails.Name); //retrieve items based off the project name
        let ToDoListTitles = JSON.parse(Retrieved); //parse it into a javascript array we can use
        //console.log(ToDoListTitles);
        for(let i = 0; i < ToDoListTitles.length; i++)
        {
            const Ul = document.createElement("ul");
            //ids cant have spaces so split this ToDoList title
            let split = ToDoListTitles[i].split(" ");
            //join them
            let joined = split.join('-');
            //and now make it equal this ToDoList title
            Ul.id = joined;
            const h2 = document.createElement("h2");
            h2.textContent = ToDoListTitles[i];
            projDetails.Ul.append(Ul);
            Ul.append(h2)
            let TDLtitleDetails = { //Todolist title details, too long of a name, tdl will mean todolist for now on
                Ul: Ul,
                Name: ToDoListTitles[i],
                Id: joined,
            }
            displaySingleField(projDetails, TDLtitleDetails, "description");
            displaySingleField(projDetails, TDLtitleDetails, "dueDate");
            displaySingleField(projDetails, TDLtitleDetails, "notes");
            displayCheckList(projDetails, TDLtitleDetails);
        }
    }
    function displaySingleField(projDetails, TDLtitleDetails, fieldName) {
        let Retrieved = localStorage.getItem(`${projDetails.Name}-${TDLtitleDetails.Name}-${fieldName}`);
        //console.log(Retrieved);
        const paragraph = document.createElement("p");
        paragraph.textContent = Retrieved;
        paragraph.classList.add(`${fieldName}-To-Do-List`);
        TDLtitleDetails.Ul.append(paragraph);
    }
    function displayCheckList(projDetails, TDLtitleDetails)
    {
        const Retrieved = localStorage.getItem(`${projDetails.Name}-${TDLtitleDetails.Name}-checkList`);
        const checkList = JSON.parse(Retrieved);
        //console.log(checkList);
        let Ul = document.createElement("ul");
        TDLtitleDetails.Ul.append(Ul);
        for(let i = 0; i < checkList.length; i++)
        {
            let paragraph = document.createElement("p");
            paragraph.textContent = checkList[i];
            Ul.append(paragraph);
        }
    }
})(document);
//This module handles all of the 
const editProjectFields = (() => {
    const getCircularReplacer = () => {//for project titles since it gives a circular reference errors
        const seen = new WeakSet();
        return (key, value) => {
          if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
              return;
            }
            seen.add(value);
          }
          return value;
        };
      };
    function displayForm (form) {
        form.style.display = "block";
    }
    function hideForm (form) {
        form.style.display = "none";
    }
    //ourProject will be a object that holds all the project data
    function editProjectName(projectTitle) {
        let split = projectTitle.split(" ");
                //join them
         let joined = split.join('-');
        const newName = document.querySelector(`.edit-${joined}-form`).value;
        //console.log("newName: " + newName);
        const oldName = projectTitle;
        let TDLTitlesRetrieved = localStorage.getItem(oldName); //retrieve items based off the old name
        //console.log("TDLTitlesRetrieved: " + TDLTitlesRetrieved);
        let ToDoListTitles = JSON.parse(TDLTitlesRetrieved);
        //console.log("ToDoListTitles: " + ToDoListTitles);
        for(let i = 0; i < ToDoListTitles.length; i++)
        {
            //set the new item equal to the old items
            //console.log("current query is: " + `${oldName}`)
            //Our project holds an array of todolist titles, so get the individual projectTitle which is the old name
            let oldToDoListTitles = localStorage.getItem(`${oldName}`)
            //console.log("oldToDoListTitles: " + oldToDoListTitles);
            //get the old names properties and store them to the new name
            localStorage.setItem(`${newName}-${ToDoListTitles[i]}`, oldToDoListTitles);
            localStorage.setItem(`${newName}`, localStorage.getItem(`${oldName}`));
            localStorage.removeItem(`${oldName}`);
            localStorage.setItem(`${newName}-${ToDoListTitles[i]}-description`, localStorage.getItem(`${oldName}-${ToDoListTitles[i]}-description`));
            localStorage.removeItem(`${oldName}-${ToDoListTitles[i]}`);
            localStorage.removeItem(`${oldName}-${ToDoListTitles[i]}-description`);
            localStorage.setItem(`${newName}-${ToDoListTitles[i]}-notes`, localStorage.getItem(`${oldName}-${ToDoListTitles[i]}-notes`));
            localStorage.removeItem(`${oldName}-${ToDoListTitles[i]}-notes`);
            localStorage.setItem(`${newName}-${ToDoListTitles[i]}-dueDate`, localStorage.getItem(`${oldName}-${ToDoListTitles[i]}-dueDate`));
            localStorage.removeItem(`${oldName}-${ToDoListTitles[i]}-dueDate`);
            localStorage.setItem(`${newName}-${ToDoListTitles[i]}-checkList`, localStorage.getItem(`${oldName}-${ToDoListTitles[i]}-checkList`));
            localStorage.removeItem(`${oldName}-${ToDoListTitles[i]}-checkList`);
            //i.e old value is "this is a project name, this is a to do list title"
            //new value is "taco, this is a to do list title" 
            let Retrieved = localStorage.getItem("projectTitles"); //create a Retrieved variable from local storage
                       let projectArray = JSON.parse(Retrieved); //parse it into a javascript array we can use
                       const index = projectArray.indexOf(oldName);
                       console.log(index);
                       if(index > -1) {
                           projectArray.splice(index, 1);
                           projectArray.push(newName);
                       }
                        localStorage.setItem("projectTitles", JSON.stringify(projectArray, getCircularReplacer()));
                        
        }
    }
    return {displayForm, hideForm, editProjectName};
})();
export default toDoListAddToDom;