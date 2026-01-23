let table = document.getElementById("myTable");

// All rows
console.log(table.rows);

// First row
console.log(table.rows[0]);

// All cells of 2nd row
console.log(table.rows[1].cells);

// First cell of 2nd row
console.log(table.rows[1].cells[0].innerText);

// Last row
console.log(table.rows[table.rows.length - 1]);

// Last cell of last row
let lastRow = table.rows[table.rows.length - 1];
console.log(lastRow.cells[lastRow.cells.length - 1].innerText);
