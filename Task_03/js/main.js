// TASK #03:

// Вывести таблицу 10 × 10, заполненную числами от 1 до 100 (таблица создаётся динамически).
const table = document.getElementById('table');

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        let cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        cell.innerHTML = i * j;
        table.appendChild(cell);
    }
}