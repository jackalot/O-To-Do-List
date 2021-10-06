//myChecklist is the UL that holds all the list items, item is our TO-Do-Item
function addToCheckList (myCheckList, item) {
    const newListItem = window.prompt("what do you want to add to this checklist? (you have to click the button again if you want more than 1)");
    item.checklist.push(newListItem);
    console.log(item.checklist);
    //ADD empty checklist here
    while(myCheckList.firstChild)
    {
        console.log(myCheckList.firstChild);
        myCheckList.removeChild(myCheckList.firstChild);
    }
    if(!myCheckList.firstChild)
    {
        for(let i = 0; i < item.checklist.length; i++)
        {
            let newlistItem = document.createElement("li");
            newlistItem.textContent = item.checklist[i];
            myCheckList.appendChild(newlistItem);
        }
    }
}
export default addToCheckList;