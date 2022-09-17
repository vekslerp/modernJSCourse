let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;

// Get child nodes
val = list.childNodes;
val = list.childNodes[3];
val = list.childNodes[3].nodeName;
val = list.childNodes[3].nodeType;

// NODE TYPES
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[1];
val = list.children[1].textContent = 'Hello';
// Children of children
val = list.children[3].children;

// First child
val = list.firstChild
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount; 

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.previousElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);