function createElement(elementName, elementClass, elementClassDesc) {
    let element = document.createElement(elementName);
    element.setAttribute(elementClass, elementClassDesc);
    document.body.appendChild(element);
    return element;
}

function getRandomDigit(min, max) {
    let digit = Math.random() * (max - min) + min;
    return parseInt(digit);
}

function showRandomPicture() {
    let randomDigit = getRandomDigit(1, 9);
    imageElement.src = 'img/0' + randomDigit + '.jpg';
}