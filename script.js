// //DOM
// console.dir(window.document)

// console.log(document.body.innerHTML);

// console.log(document.links[0]);

// document.body.innerHTML = '<h1> I am in the DOM </h1>'
// document.write('Hello for DOM')

// Method to select HTML --Super Important

console.log(document.getElementById('main'));
const main = document.getElementById('main');
// main.innerHTML = '<h1>Hello From Main</h1>'

document.querySelector('#main h1').innerText = 'hello';