//adds items to the todolist
const toDoListAddToDom = (() => {
    const toDoList = document.querySelector(".To-Do-List");
   function displayProjectTitle () {
        let Retrieved = localStorage.getItem("projectTitles"); //create a Retrieved variable from local storage
        let projectTitles = JSON.parse(Retrieved); //parse it into a javascript array we can use
        if(projectTitles !== null)
        {
            toDoList.textContent = "";
            for(let i=0; i < projectTitles.length; i++)
            {
                //create some elements for this titlte
                const Ul = document.createElement("Ul");
                const h1 = document.createElement("h1");
                const titleDiv = document.createElement("div")
                //assign each element what they need
                titleDiv.classList.add("project-titles-To-Do-List"); 
                //ids cant have spaces so split this project title
                let split = projectTitles[i].split(" ");
                //join them
                let joined = split.join('-');
                //and now make it equal this project
                titleDiv.id = joined;
                h1.textContent = projectTitles[i];
                //append them to the dom
                toDoList.append(titleDiv);
                titleDiv.append(h1);
                titleDiv.append(Ul);
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
        console.log(ToDoListTitles);
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
        }
    }
})(document);
export default toDoListAddToDom;