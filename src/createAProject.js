//creates the project DOM elements and appends them
import hideProject from './hideProject';
function CreateProject (projectName) {
    //creates the projectDiv and appends it to the body
    function createProjectDiv(projectName) {
        const wholeDocument = {};
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("Project-div");
        projectDiv.id = localStorage.getItem(`${projectName}`);
        wholeDocument.projectDiv = projectDiv;
        const body = document.querySelector("body");
        body.appendChild(projectDiv);
        wholeDocument.body = body;
        wholeDocument.projectName = projectName;
        createProjectHeader(wholeDocument)
    }
    createProjectDiv(projectName);
    function createProjectHeader(wholeDocument) {
        const projectHeaderDiv = document.createElement("div");
        projectHeaderDiv.classList.add("project-header");
        wholeDocument.projectHeaderDiv = projectHeaderDiv;
        wholeDocument.projectDiv.appendChild(projectHeaderDiv);
        createProjectHeadingName(wholeDocument);
    }
    function createProjectHeadingName(wholeDocument) {
        const H2Name = document.createElement("h2");
            H2Name.textContent = localStorage.getItem(`${wholeDocument.projectName}`);
            wholeDocument.H2Name = H2Name;
            wholeDocument.projectHeaderDiv.appendChild(H2Name);
            createProjectDisplayButton(wholeDocument);
    }
    function createProjectDisplayButton(wholeDocument) {
        const displayBtn = document.createElement("button");
            displayBtn.textContent = "Display Project To-Do-List";
            displayBtn.addEventListener('click', ()=> {
                console.log("click");
                hideProject(localStorage.getItem(`${wholeDocument.projectName}`));
            });
            displayBtn.classList.add("display-items");
            wholeDocument.displayBtn = displayBtn;
            wholeDocument.projectHeaderDiv.appendChild(displayBtn);
            createProjectUL(wholeDocument);
    }
    function createProjectUL (wholeDocument) {
        const ul = document.createElement("ul");
        wholeDocument.ul = ul;
        wholeDocument.projectDiv.appendChild(ul);
        console.log(wholeDocument);
    }
}
export default CreateProject;
