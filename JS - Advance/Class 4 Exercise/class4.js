/*
Homework
Exercise 1
Make 3 anonymous functions (function expressions)

Function that takes a number through a parameter and returns how many digits that number has
Function that takes a number through a parameter and returns if its even or odd
Function that takes a number through a parameter and returns if its positive or negative

BONUS: Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console. Ex: Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative
*/
console.log(
  `Function that takes a number through a parameter and returns how many digits that number has`
);

let countOfDigits = function (number) {
  if (typeof number === "number") {
    let counter = 0;
    while (number >= 0) {
      number = number / 10;
      counter++;
      if (number < 1) {
        return counter;
      }
    }
  } else {
    console.log("Input is not a number");
  }
};
let result = countOfDigits(500000);
console.log(`The number of digits it is:`, result);

console.log(`-----------------------------------`);

console.log(
  `Function that takes a number through a parameter and returns if its even or odd`
);

let evenOrOdd = function (number) {
  if (typeof number === "number") {
    if (number % 2 == 0) {
      return `The number is EVEN`;
    } else if (number % 2 == 1) {
      return `The number is ODD`;
    }
  } else {
    console.log("Input is not a number");
  }
};
let evenAndOddresult = evenOrOdd(53);
console.log(evenAndOddresult);

console.log(`-----------------------------------`);

console.log(
  `Function that takes a number through a parameter and returns if its positive or negative`
);

let positiveOrNegative = function (number) {
  if (typeof number === "number") {
    if (number < 0) {
      return `Number is negative`;
    } else if (number > 0) {
      return `Number is positive`;
    }
  } else {
    console.log("Input is not a number");
  }
};
let positiveOrNegativeResult = positiveOrNegative(-150);
console.log(positiveOrNegativeResult);

console.log(`-----------------------------------`);

console.log(
  `BONUS: Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console. Ex: Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative`
);

let code3Functions = function (number) {
  return `Code: \n getNumberStats(${number});\n Console: ${countOfDigits(
    number
  )} Digits,\n ${evenOrOdd(number)},\n ${positiveOrNegative(number)}`;
};
let code3FunctionsResult = code3Functions(2);
console.log(code3FunctionsResult);

console.log(`-----------------------------------`);

/*
Exercise 2
Create a function that takes a string and returns the number (count) of vowels contained within it. (Use anonymous functions/Arrow functions for the implementation)

Ex: Code: countVowels("Pineapple"); Console: 4 vowels

BONUS: Provide the input from the HTML, and print the result on the HTML.
*/

let paragraphs = document.getElementById("result");
let inputs = document.getElementById("input");
let changeBtn = document.getElementById("changeBtn");

let countVowels = (str) => {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
      paragraphs.innerHTML = `<p>${str[i]}</p>`;
    }
  }

  return count;
};

changeBtn.addEventListener("click", (event) => {
  let inputs = input.value;
  let countVowelsResult = countVowels(inputs);
  paragraphs.innerHTML = `<p>Number of vowels: ${countVowelsResult}</p>`;
});
