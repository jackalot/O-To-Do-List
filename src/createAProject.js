//when you search for a project that doesnt exist
//we call this module
import getProject from './getProject';
function CreateProject (projectName) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("Project-div");
    projectDiv.id = projectName;
    const body = document.querySelector("body");
    body.appendChild(projectDiv);
        const projectHeaderDiv = document.createElement("div");
        projectHeaderDiv.classList.add("project-header");
        projectDiv.appendChild(projectHeaderDiv);
            const H2Name = document.createElement("h2");
            H2Name.textContent = projectName;
            const displayBtn = document.createElement("button");
            displayBtn.textContent = "Display Project To-Do-List";
            displayBtn.addEventListener('click', ()=> {
                console.log("click");
                getProject(projectName);
            });
            displayBtn.classList.add("display-items");
            projectHeaderDiv.appendChild(H2Name);
            projectHeaderDiv.appendChild(displayBtn);
        const ul = document.createElement("ul");
        projectDiv.appendChild(ul);
}
export default CreateProject;
