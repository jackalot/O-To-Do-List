function hideProject (projectName) {
    const projectDiv = document.querySelector(`#${projectName}-ul`);
    if (projectDiv.style.display === "none")
    {
        projectDiv.style.display = "block";
    }
    else {
        projectDiv.style.display = "none";
    }
}
export default hideProject;