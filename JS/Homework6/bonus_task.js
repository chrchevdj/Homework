/* Create a recipe page from inputs

Ask the user for the name of the recipe
Ask the user how many ingredients do we need for the recipe
Ask the user for the name of every ingredient
Print the name of the recipe in the HTML as heading element, ex: h1-h6
Print all ingredients as an unordered list in the HTML
Extra: Use a table if you want to be fancy :) */

let changedh1 = document.querySelector("h3");
let changedDiv = document.querySelector("div");

let recipeName = prompt("Please enter the name of the recipe");
changedh1.innerHTML = `Today we are cooking ${recipeName}.`

// let numberOfIngredients = parseInt(prompt("Please enter the number of ingredients"));
// if (isNaN(numberOfIngredients)) {
//     alert("Please enter a valid number");
// }
// console.log(numberOfIngredients);

let numberOfIngredients = parseInt(prompt("Please enter the number of ingredients"));
while (isNaN(numberOfIngredients)) {
    numberOfIngredients = prompt("Please enter a valid number");
}
console.log(numberOfIngredients);

function printIngredients (numberOfIngredients, element) {
let ingredients = [];
element.innerHTML = "";
let table = "";
table += "<table>";
table += "<tr>"
table += `<th> Total ingredients </th>`
// element.innerHTML += "<ul>"
for (let ingredient = 0; ingredient < (numberOfIngredients); ingredient++) {
    let ingredientName = prompt("Please enter an ingredient");
    ingredients.push(ingredientName);
    // table += `<tr style="border: 1px solid black"><td style="border: 1px solid black">${ingredientName}</td></tr>` // not good way
    table += `<tr><td>${ingredientName}</td></tr>`
}
// element.innerHTML += "</ul>";
table += "</tr>";
table += "</table>";
console.log(ingredients);
element.innerHTML = table;
return ingredients;
}
let test = printIngredients(numberOfIngredients, changedDiv);
console.log(test);




