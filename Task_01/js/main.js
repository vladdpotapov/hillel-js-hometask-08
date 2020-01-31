// TASK #01:

// Имеется текстовое поле на странице. 
// При фокусировке на этом поле сбоку появляется <div> с информацией. 
// При пропаже фокуса - <div> так же пропадает.

const input = document.getElementById('input');
const wrap  = document.getElementById('input-wrap');

wrap.addEventListener('click', function() {
    let tooltip = document.createElement('div');
    tooltip.setAttribute('id', 'tooltip');
    tooltip.innerHTML = 'Enter something';
    wrap.appendChild(tooltip);
});

input.addEventListener('blur', function(){
    tooltip.remove();
});