function makeCounter() {
    let count = 1;
    return function() {
        return count++;
    }
}

// Getting IDs of buttons and divs, add event to buttons:
function createCounter(buttonId, counterId) {
    const voteButton = document.getElementById(buttonId); 
    const counterBox = document.getElementById(counterId);  
    let counter = makeCounter(); 
    voteButton.addEventListener('click', function(){
        counterBox.innerHTML = counter();
    });
}