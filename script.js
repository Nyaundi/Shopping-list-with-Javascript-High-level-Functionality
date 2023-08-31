//Traversig the DOM - Element

const listItems = document.querySelectorAll('.item');

console.log(listItems[1].innerHTML);

listItems.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 1) {
        item.innerHTML = `paawpaw
        <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
      </button>`
    }

    if (index === 0 ){
        item.innerHTML = `Amabere
        <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
      </button>`
    }

    if (index === 0) {
        item.remove();
    }
});

const modClear = document.querySelector('.btn-clear')

console.log(modClear.innerText);

modClear.style.backgroundColor = ' #7b38d8 ';
modClear.style.padding = '20px';
modClear.style.width = '200px'
modClear.style.display = 'inline-block';

const classFilter = document.querySelector('.filter');

console.log(classFilter);
classFilter.style.backgroundColor = ' #7b38d8 ';
classFilter.style.padding = '20px'
