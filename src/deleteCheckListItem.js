//deletes a specific checklist item
function removeCheckListItem (myCheckList, item) {
    const ListItem = window.prompt("what do you want to remove this checklist? (Type it exactly as it appears or it will not work)");
    let Index = item.checklist.indexOf(ListItem);

    let copy = [
        ...item.checklist.slice(0, Index),
        ...item.checklist.slice(Index + 1),
    ]
    console.log("Copy is " + copy);
    item.checklist = copy.slice(0);
    console.log("Item.checklist is " + item.checklist);
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
export default removeCheckListItem;