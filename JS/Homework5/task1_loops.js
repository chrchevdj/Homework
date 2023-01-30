/* Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC!" */

function concatenateArrayOfStrings (arr) {
    let concatenatedStrings = arr.join(" ");
    console.log(concatenatedStrings);
    return concatenatedStrings;
}

let array = ["Aneta", "Stankovska", "is", "a", "SEDC", "student"];
let myString = concatenateArrayOfStrings(array);


// Solution using loops (which is very inefficient)
function concatenateArrayOfStringsTwo (arr) {
    let concatenatedStrings = "";
    for (let word of arr) {
        concatenatedStrings += " ";
        concatenatedStrings += word;
    }
    console.log(concatenatedStrings.trim());
    return concatenatedStrings;
}

let arrayTwo = ["Aneta", "Stankovska", "is", "learning", "JavaScript"];
let myStringTwo = concatenateArrayOfStringsTwo (arrayTwo);