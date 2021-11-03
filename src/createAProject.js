//creates the project DOM elements and appends them
import hideProject from './hideProject';
function CreateProject (projectName) {
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
    //creates the projectDiv and appends it to the body
    function createProjectDiv(projectName) {
        console.log('createProjectDiv');
        const body = document.querySelector("body");
        const projectDiv = createNewElement("div", "Project-div", body, null, `${projectName}-ProjectDiv`)
        //console.log(projectDiv);
    }
    function createProjectHeader(projectName) {
        //console.log('createProjectHeader');
        const projectDiv = document.querySelector(`#${projectName}-ProjectDiv`);
        if(projectDiv === null)
        {
            createProjectDiv(projectName);
        }
        const projectHeaderDiv = createNewElement("div", "project-header", projectDiv, null,  `${projectName}-ProjectHeader`);
        //console.log(projectHeaderDiv);
    }
    function createProjectHeadingName(projectName) {
        //console.log('createProjectHeadingName');
        const projectHeaderDiv = document.querySelector(`#${projectName}-ProjectHeader`);
        if(projectHeaderDiv === null)
        {
        createProjectHeader(projectName);
        }
         const H2Name = createNewElement("h2", "project-Heading", projectHeaderDiv, null, `${projectName}-ProjectH2`);
         H2Name.textContent = localStorage.getItem(`${projectName}`);
         console.log(H2Name);
    }
   
    function createProjectDisplayButton(projectName) {
        console.log('createProjectDisplayButton');
        const projectHeaderDiv = document.querySelector(`#${projectName}-ProjectHeader`);
        if(projectHeaderDiv === null)
        {
            createProjectHeader(projectName);
        }
            const displayBtn = createNewElement("button", "display-items", projectHeaderDiv, null, null)
            console.log(displayBtn);
            displayBtn.textContent = "Display Project To-Do-List";
            displayBtn.addEventListener('click', ()=> {
                console.log("click");
                hideProject(localStorage.getItem(`${projectName}`));
            });
    }
    
    function createProjectUL (wholeDocument) {
        const projectDiv = document.querySelector(`#${projectName}-ProjectDiv`);
        if(projectDiv === null)
        {
            createProjectDiv(projectName);
        }
        const ul = createNewElement("ul", "project-UL", projectDiv, null, null);
        console.log(ul)
    }
    createProjectDisplayButton(projectName);
    createProjectHeadingName(projectName)

    createProjectUL(projectName);
    /*
    the wholeDocument object is messy, so instead of using one giant object just make a small object that only stores
    relevant elements for the next function
    since we create, apply a class, and appendCHild, make a function that does that in one go.
    the fact that every function depends on createProjectDiv is a problem to begin with, so probably make it so any function that needs an
    element from another function could call that function
    I.E: anything that needs createProjectHeader to be called can call it.
    */
}
export default CreateProject;
