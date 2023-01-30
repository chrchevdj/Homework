/* Write a JavaScript function that will return:

Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog to human years as well */

function calculateDogYears (input) {
    let calculatedDogYears = input * 7;
    return calculatedDogYears;
}

let newInput = prompt("Please enter human years:");
let parsedHumanYears = Number.parseInt(newInput);

if (!isNaN(parsedHumanYears)) {
    let dogYears = calculateDogYears(newInput);
    console.log(dogYears);
    alert(`${parsedHumanYears} human years are equal to ${dogYears} dog years`);
} else {
    console.log("Enter a valid year!");
}
