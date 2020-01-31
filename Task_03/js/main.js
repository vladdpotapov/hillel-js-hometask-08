// TASK #03:

// Вывести таблицу 10 × 10, заполненную числами от 1 до 100 (таблица создаётся динамически).

const button = document.getElementById('button');
button.addEventListener('click', function() {
    createTable();
    createCells();
});


// const table = document.getElementById('table');

// for (let i = 1; i <= 100; i++) {
//     let cell = document.createElement('div');
//         cell.setAttribute('class', 'cell');
//         cell.innerHTML = i;
//         table.appendChild(cell);
// }