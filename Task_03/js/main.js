// TASK #03:

// Вывести таблицу 10 × 10, заполненную числами от 1 до 100 (таблица создаётся динамически).

const button = document.getElementById('button');
button.addEventListener('click', function() {
    createTable();
    createCells();
});
