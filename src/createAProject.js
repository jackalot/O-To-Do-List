//when you search for a project that doesnt exist
//we call this module
import hideProject from './hideProject';
function CreateProject (projectName) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("Project-div");
    projectDiv.id = localStorage.getItem(`${projectName}`);
    const body = document.querySelector("body");
    body.appendChild(projectDiv);
        const projectHeaderDiv = document.createElement("div");
        projectHeaderDiv.classList.add("project-header");
        projectDiv.appendChild(projectHeaderDiv);
            const H2Name = document.createElement("h2");
            H2Name.textContent = localStorage.getItem(`${projectName}`);
            const displayBtn = document.createElement("button");
            displayBtn.textContent = "Display Project To-Do-List";
            displayBtn.addEventListener('click', ()=> {
                console.log("click");
                hideProject(localStorage.getItem(`${projectName}`));
            });
            displayBtn.classList.add("display-items");
            projectHeaderDiv.appendChild(H2Name);
            projectHeaderDiv.appendChild(displayBtn);
        const ul = document.createElement("ul");
        projectDiv.appendChild(ul);
}
export default CreateProject;
