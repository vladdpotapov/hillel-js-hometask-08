// Get HTML Collection of buttons and divs:
const buttons = document.getElementsByClassName('button');
const counterBoxes = document.getElementsByClassName('poll__counter-box');

// Function takes IDs of each element of collections:
for(let i = 0; i < buttons.length; i++) {
    createCounter(buttons[i].id, counterBoxes[i].id);
}
