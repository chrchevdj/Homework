/* Print all numbers from an array and the sum

Create an array with numbers
Print all numbers from the array in a list element, in a new HTML page
Print out the sum of all of the numbers below the list
Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11) */

let numbersArray = [5, 17, 93, 76, 3, 29];

let firstDiv = document.getElementById("mainDiv").firstElementChild;
let sumOfNumbers = document.getElementById("mainDiv").lastElementChild;

function printArrayElements (array, element) {
    element.innerHTML = "";
    element.innerHTML += "<ul>";
    for (let i = 0; i < array.length; i++) {
        element.innerHTML += `<li>${array[i]}<li>`;
    }
    element.innerHTML += "</ul>";
}

let changedFirstDiv = printArrayElements (numbersArray, firstDiv);

function sumNum (array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
    return sum;
}

let test = sumNum(numbersArray);

function sumArrayElements (array, element) {
    element.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        element.innerHTML += array[i];
        element.innerHTML += " + ";
        if (i === array.length - 1) {
            element.innerHTML += array[i];
            element.innerHTML += " = ";
        }
    }
    let sumOfArrayNumbers = sumNum(array);
    element.innerHTML += sumOfArrayNumbers;
}

let changedLastP = sumArrayElements (numbersArray, sumOfNumbers);