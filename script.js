//KEYBOARD INPUTS


// const itemInput = document.getElementById('Item-input');

// const onKeyPress = (e) => {
//     console.log('keypress');
// };

// itemInput.addEventListener('keypress', onKeyPress);

const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};

const onKeyUp = (e) => {
    console.log('keyUp');
};

const onKeyDown = (e) => {
    console.log('keyDown');
};



// itemInput.addEventListener('keypress', onKeyPress);

// itemInput.addEventListener('keypress', onKeyUp);

itemInput.addEventListener('keydown', onKeyDown);