//Methods to select Single elements in the page
// document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);

//Set Attributes
document.getElementById('app-title').title = 'Shopping List';

document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');
//Get/change content

console.log(title.textContent);
title.textContent = 'Hello Dom';
title.innerText = 'Hello Again';

title.innerHTML = '<strong>Shopping List</strong>';

//Change style

title.style.color = 'red';
title.style.backgroundColor = 'orange';
title.style.padding = '10px';
title.style.borderRadius = '10px';


//Document.querySeletor()
//document.querySelector()

// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#app-title'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('li:nth-child(2)').innerText);

// const secondItem = document.querySelector('li:nth-child(2)');
// secondItem.innerText = 'Apple Juice';
// secondItem.style.color = 'red';
// console.log(secondItem);

const thridItem = document.querySelector('li:nth-child(3)');
thridItem.innerText = 'Mapera Juice';
thridItem.style.color = 'green'
console.log(thridItem);

const fourthItem = document.querySelector('li:nth-child(4)');
fourthItem.innerText = 'Chinsobobo';

console.log(fourthItem);

const firstItem = document.querySelector('li:nth-child(1)');
firstItem.innerText = 'Avocado';
firstItem.style.backgroundColor = 'orange'

console.log(firstItem);

