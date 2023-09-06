//DOM Select Multiple Items -  use queryselectorall

// const listItems = document.querySelectorAll('.item');

// console.log(listItems[1].innerText);

// listItems.forEach((a, index) => {
//     a.style.color = 'red';

//     if (index === 1){
//         //a.remove();
//     }
//     if (index === 0){
//         a.innerHTML = ` Mangoes
//         <button class="remove-item btn-link text-red">
//           <i class="fa-solid fa-xmark"></i>
//         </button>`
//     }
// })

// Small practce
// const listUl = document.querySelectorAll('.item');

// listUl.forEach((a, index) => {
//     if (index === 0){
//         a.innerHTML = `Juju
//           <button class="remove-item btn-link text-red">
//           <i class="fa-solid fa-xmark"></i>
//         </button>`
//         a.style.background = 'Orange'
//     }
// })

//Traversig the DOM - Elements\

//Get child elements
let output; 
const parent =  document.querySelector('.parent');
output = parent.children[1].innerText;
output = parent.children[0].innerHTML;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'New child two'
parent.children[1].style.backgroundColor = 'orange'

parent.firstElementChild.innerText = 'changed'


//Get parent elements from a child

const child = document.querySelector('.child');

output =  child.parentElement;

console.log(output);

//Traversing the DOM - NODES
