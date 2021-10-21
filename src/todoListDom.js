//adds items to the todolist
const toDoListAddToDom = (() => {
    const toDoList = document.querySelector(".To-Do-List");
   function displayProjectTitle () {
        let Retrieved = localStorage.getItem("projectTitles"); //create a Retrieved variable from local storage
        let projectTitles = JSON.parse(Retrieved); //parse it into a javascript array we can use
        if(projectTitles !== null)
        {
            for(let i=0; i < projectTitles.length; i++)
            {
                //create some elements for this titlte
                const Ul = document.createElement("Ul");
                const h1 = document.createElement("h1");
                const titleDiv = document.createElement("div")
                //assign each element what they need
                titleDiv.classList.add("Project-Titles"); 
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
            }
        }
    }
    console.log("hi");
    const loadBtn = document.querySelector(".load-button");
     loadBtn.addEventListener("click", displayProjectTitle)
})(document);
export default toDoListAddToDom;