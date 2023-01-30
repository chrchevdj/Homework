/* CREATE A DYNAMIC TABLE
Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! :) */

let rowsInput = document.getElementById("rows");
let columnInput = document.getElementById("columns");
let calculateButton = document.getElementById("calculate");
let tablecontainer = document.getElementById("container");


function createTable (rowNumber, columnNumber) {
    let result = [];
    for (let i = 0; i < rowNumber; i++) {
        result.push("<tr>");
        for (let j = 0; j < columnNumber; j ++) {
            result.push(`<td>row:${i+1}, col:${j+1}</td>`)
        }
        result.push("</tr>")
    }
    result = result.join("");
    return result;
}

calculateButton.addEventListener('click', () => {
    let rows = parseInt(rowsInput.value);
    let columns = parseInt(columnInput.value);
    // Check for invalid/empty inputs
    if (isNaN(rows) || isNaN(columns)) {
        alert("Please ensure that both inputs are numbers");
        return;
    }
    // Check for negative numbers
    if (rows <= 0 || columns <=0) {
        alert("Please enter a valid positive number");
        return;
    }
    tablecontainer.innerHTML = createTable(rows, columns);

})