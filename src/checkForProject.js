//Search for the project name and if that project has this name, return that project
function checkForProject (name, projects) {
    if(projects.length === 0)
    {
        //console.log("project length is 0");
        return false;
    }
    for(let i = 0; i < projects.length; i++)
    {
        if(projects[i] === name)
        {
            //console.log("returned " + projects[i] + " at the index " + i);
            return projects[i];
        }
    }
    //console.log("returned false anyways");
    return false;
}
export default checkForProject;