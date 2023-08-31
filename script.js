//Traversig the DOM - Element
//Get the hild elemets
let output;

const parent = document.querySelector('.parent');
output = parent.children[2].innerText;
output = parent.children[2].className;
output = parent.children[2].nodeName;

parent.children[0].innerText = 'More cool stuf';
parent.children[1].innerText = 'Changed';
parent.children[2].innerText = 'Wow';

parent.children[1].style.backgroundColor = 'orange';

parent.firstElementChild.innerText = 'Child one';
parent.lastElementChild.innerText = 'Child one';

//Get Parent Element from a Child
const child = document.querySelector('.child')

output = child.parentElement;

child.parentElement.style.border = '1px solid yellow';
child.parentElement.style.padding = '20px';

Sibling Elements

const secondItem = document.querySelector('.child:nth-child(2)')
output = secondItem;
output = secondItem.nextElementSibling; //select the next Sibling property


console.log(output);

