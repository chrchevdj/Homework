// ------------------------------------
// Task 1: Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.

function convertMinsToSecs (minutes, toLog) { // I aded the second parameter (toLog) so that it won't log the result when I use this function to convert hours to soconds in the task 3
    let seconds = minutes * 60;
    if (toLog === true) {
        console.log(`${minutes} minutes equal to ${seconds} seconds.`);
    }
    return seconds;
}

// convertMinsToSecs (5, true);
// convertMinsToSecs (3, false);
// convertMinsToSecs (2, true);


// ------------------------------------------------------
// Task 2: Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function incrementByOne (number)  {
    number ++;
    console.log(`The incremented number is ${number}`)
    return number;
}

// incrementByOne (5);
// incrementByOne (-3);
// incrementByOne (0);


// ----------------------------------
// Task 3: Convert Hours into Seconds
// Write a function that converts hours into seconds.
// Maybe you can use some function from previous tasks.

function convertHrsToSecs (hours) {
    let seconds = hours * convertMinsToSecs(60, false);
    console.log(`${hours} hours equal to ${seconds} seconds.`);
    return seconds;
}

// convertHrsToSecs (2);
// convertHrsToSecs (10);
// convertHrsToSecs (24);


// ---------------------------------------------
// Task 4: Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function returnRemainder (num1, num2) {
    let remainder = num1 % num2;
    console.log(`The remainder of division between ${num1} and ${num2} is ${remainder} `);
    return remainder; 
}

// returnRemainder (1, 3);
// returnRemainder (3, 4);
// returnRemainder (-9, -45);
// returnRemainder (5, 5);


// ------------------------
// Task 5: The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function countLegs (chickens, cows, pigs) {
    let totalLegs = chickens * 2 + cows * 4 + pigs * 4; 
    console.log(`The total number of legs is ${totalLegs}`);
    return totalLegs;
}

// countLegs (2, 3, 5);
// countLegs (1, 2, 3);
// countLegs (5, 2, 8);


// ----------------------------------------------
// Task 6: Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function compareLengthOfStrings (string1, string2) {
    let comparedLengths = string1.length === string2.length
    console.log(comparedLengths);
    return comparedLengths;

    // if (string1.length === string2.length) {  // ------ Second solution with if - else statement
    //     console.log("True");
    //     return true;
    // } else {
    //     console.log("False");
    //     return false;
    // }
}

// compareLengthOfStrings ("AB", "CD");
// compareLengthOfStrings ("ABC", "DE");
// compareLengthOfStrings ("hello", "SEDC");


// ---------------------------------------
// Task 7: Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

function isPlural (word) {
    if (word.endsWith('s')) {
        console.log(`${word} is a plural word.`);
        return;
    } else {
        console.log(`${word} is a singular word.`);
        return;
    }
}

// isPlural("changes");
// isPlural("change");
// isPlural("dudes");
// isPlural("magic");


// -----------------------------------
// Task 8: Case Insensitive Comparison
// Write a function that validates whether two strings are identical. Make it case insensitive.

function compareStrings (string1, string2) {
    if (string1.toLowerCase() === string2.toLowerCase()) {
        console.log("The copared strings are identical");
        return true;
    } else {
        console.log("The compared strings are not identical");
        return false;
    }
}

// compareStrings ("hello", "hELLo");
// compareStrings ("motive", "emotive");
// compareStrings ("venom", "VENOM");
// compareStrings ("mask", "mAskinG");


// --------------------------------------------------
// Task 9: Convert Number to Corresponding Month Name
// Create a function that takes a number and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

function returnMonth (number) {
    let month;
    switch (number) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "Septeber";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December"
            break;
        default:
            month = "Month with that number does not exist."
    }
    console.log(month);
    return month;
}

// returnMonth(3);
// returnMonth(12);
// returnMonth(6);
// returnMonth(23);


// Task 10: Truthy or Falsy?
// A value is said to be "truthy" if it evaluates to true in a Boolean context. All values are truthy in JavaScript unless they're one of the following:
// - false
// - null
// - undefined
// - 0
// - NaN
// - ""
// In JavaScript, an empty object and an empty array are both considered truthy, but an empty string is considered false when evaluated as a Boolean (this behavior is what we call falsey). Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsey.

function isTruthy (input) {
    if (input === false || input === null || input === undefined || input === 0 || input === "") {
        console.log("0");
        return 0;
    } else if (Object.is(input, NaN)) {
        console.log("The input is NaN");
    } else {
        console.log("1")
        return 1;
    }
}

// isTruthy (0);
// isTruthy (false);
// isTruthy ("");
// isTruthy ("false");
// isTruthy ("Ane");
// isTruthy (NaN);