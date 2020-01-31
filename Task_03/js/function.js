function createTable() {
    let table = document.createElement('div');
    table.setAttribute('id', 'table');
    document.body.appendChild(table);
    return table;
}

function createCells() {
    for (let i = 1; i <= 100; i++) {
        let tableCell = document.createElement('div');
        tableCell.setAttribute('class', 'cell');
        tableCell.innerHTML = i;
        table.appendChild(tableCell);
    }
}