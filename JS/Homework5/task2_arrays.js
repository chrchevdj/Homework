/* Write a function that will take an array of 5 numbers as an argument and return the sum.

Print it in the console or in alert

BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.

LOOPING STRUCTURES
INTRODUCTION
Sometimes a script needs to repeat the same series of steps over and over again
In programming language, performing the same task over and over is called a loop 
Several different types */


function validateNumber (num) {
    if (typeof num === "number") {
        return true;
    } else {
        console.log("Error!");
        return false;
    }
}


function sumNumbers (arr) {
    let sum = 0;
    for (let num of arr) {
        if (validateNumber(num) === false) {
            return
        } else {
            sum +=num;
        }
        
    } 
    // console.log(sum);
    return sum;
}

let arrayOfNumbers = [2, 3, 4, 5, 6];
let calculateSumOfNumbers = sumNumbers(arrayOfNumbers);
console.log(calculateSumOfNumbers);
