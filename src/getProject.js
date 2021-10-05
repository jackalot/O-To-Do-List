//gets the project contents, returns it as an object
function getProject (projectName) {
const projectUL = document.querySelector(`#${projectName} > ul`).childNodes;
    let projchildren = {};
    for(var pop in projectUL)
    {
      projchildren[pop] = projectUL[pop];
    }
    console.log(projchildren)
}
//found out there's an even simpler way to do hide the project so all this was useless, keeping in case needed for later
export default getProject;