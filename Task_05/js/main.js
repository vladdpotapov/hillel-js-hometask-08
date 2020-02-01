const button = document.getElementById('button');
const frame  = document.getElementById('content-frame');
let voteBox;
let voteButton;
let voteCounterBox;
let voteCounter;

button.addEventListener('click', function() {;
    createVoteInterface();
});

function createVoteBox() {
    let box = document.createElement('div');
    box.setAttribute('class', 'vote-box');
    box.setAttribute('id', 'vote-box');
    frame.appendChild(box);
    return box;
}

function createVoteButtons() {
    for (let i = 1; i <= 5; i++) {
        let btn = document.createElement('button');
        btn.setAttribute('id', 'vote-button' + i);
        btn.setAttribute('class', 'vote-button');
        voteBox.appendChild(btn);
    }
    return voteBox;
}

function createCounterBox() {
    let counter = document.createElement('div');
    counter.setAttribute('class', 'counter-box');
    frame.appendChild(counter);  
    return counter;
}

function createCounters() {
    for (let i = 1; i <= 5; i++) {
        let count = document.createElement('div');
        count.setAttribute('class', 'counter');
        count.innerHTML = 'digit';
        voteCounterBox.appendChild(count);
    }
    return count;
}

function createVoteInterface() {
    voteBox = createVoteBox();
    voteButton = createVoteButtons();
    voteCounterBox = createCounterBox();
    voteCounter = createCounters();
}

