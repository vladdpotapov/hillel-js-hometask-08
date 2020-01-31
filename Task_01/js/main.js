
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