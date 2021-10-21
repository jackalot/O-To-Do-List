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
                toDoList.append(projectTitles[i]);
            }
        }
    }
    return { displayProjectTitle };
})(document);
export default toDoListAddToDom;