//Search for the project name and if that project has this name, return that project
function checkForProject (name, projects) {
    if(projects.length === 0)
    {
        return false;
    }
    for(let i = 0; i < projects.length; i++)
    {
        if(projects[i] === name)
        {
            return projects[i];
        }
    }
}
export default checkForProject;