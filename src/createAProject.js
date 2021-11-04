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
        const body = document.querySelector("body");
        const projectDiv = createNewElement("div", "Project-div", body, null, `${projectName}-ProjectDiv`)
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
        const projectHeaderDiv = document.querySelector(`#${projectName}-ProjectHeader`);
        if(projectHeaderDiv === null)
        {
        createProjectHeader(projectName);
        createProjectHeadingName(projectName); //one recursive function to call it again, as a project header should exist now
        }
        else
        {
         const H2Name = createNewElement("h2", "project-Heading", projectHeaderDiv, null, `${projectName}-ProjectH2`);
         H2Name.textContent = "this is some test text";
        }
    }
   
    function createProjectDisplayButton(projectName) {
        const projectHeaderDiv = document.querySelector(`#${projectName}-ProjectHeader`);
        if(projectHeaderDiv === null)
        {
            createProjectHeader(projectName);
            createProjectDisplayButton(projectName); //one recursive function to call it again, as a project header should exist now
        }
        else
        {
            const displayBtn = createNewElement("button", "display-items", projectHeaderDiv, null, `${projectName}-displayButton`)
            displayBtn.textContent = "Display Project To-Do-List";
            displayBtn.addEventListener('click', ()=> {
                console.log("click");
                hideProject(localStorage.getItem(`${projectName}`));
            });
        }
    }
    
    function createProjectUL (projectName) {
        const projectDiv = document.querySelector(`#${projectName}-ProjectDiv`);
        if(projectDiv === null)
        {
            createProjectDiv(projectName);
            createProjectUL(projectName);
        }
        const ul = createNewElement("ul", "project-UL", projectDiv, null, `${projectName}-ul`);
        console.log(ul)
    }
        createProjectHeadingName(projectName);
        createProjectDisplayButton(projectName);
        createProjectUL(projectName);
}
export default CreateProject;
