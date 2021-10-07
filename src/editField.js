//Edit each field,                               //ElementType is for the item object so we can change it depending on the field we're on
function editField(element, promptMessage, item, elementType) {
const input = window.prompt(promptMessage);
element.textContent = input;
item[elementType] = input; //work on this
console.log(item);
}
export default editField;