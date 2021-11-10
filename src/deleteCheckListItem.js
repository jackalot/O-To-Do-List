//deletes a specific checklist item
function removeCheckListItem (myCheckList, item) {
    const ListItem = window.prompt("what do you want to remove this checklist? (Type it exactly as it appears or it will not work)");
    let Index = item.checklist.indexOf(ListItem);
    //make a copy of the checklist array without the item we are removing
    let copy = [
        ...item.checklist.slice(0, Index - 1),
        ...item.checklist.slice(Index + 1),
    ]
    console.log("Copy is " + copy);
    item.checklist = copy.slice(0); //make items checklist = the copy so that it no longer has it in the array
    console.log("Item.checklist is " + item.checklist);
    //just in case we have to, delete everything in the dom
    while(myCheckList.firstChild)
    {
        console.log(myCheckList.firstChild);
        myCheckList.removeChild(myCheckList.firstChild);
    }
    //if theres nothing else on the dom, start putting our brand new check list
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