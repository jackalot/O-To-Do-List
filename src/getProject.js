//gets the project contents, returns it as an object
function getProject (projectName) {
const projectUL = document.querySelector(`#${projectName} > ul`).childNodes;
    let projchildren = {};
    for(var pop in projectUL)
    {
      projchildren[pop] = obj[pop];
    }
    console.log(projchildren)
}
export default getProject;