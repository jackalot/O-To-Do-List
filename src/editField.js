function editField(element, promptMessage, item) {
const input = window.prompt(promptMessage);
element.textContent = input;
item.dueDate = input;
}
export default editField;