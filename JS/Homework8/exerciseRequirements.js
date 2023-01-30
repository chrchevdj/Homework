// Task 1
//Declare a variable a.
//Assign the variable with the value of 7.
//Declare and asign a variable b with the value of 8.
//Declare a variable c and asign it the value of a + b.
//Print the value in the console.

let a = 7;
let b = 8;
let c = a + b;
console.log(c);

// Task 2
//Declare and asign an integer variable.
//Declare and asign a boolean variable.
//Declare and asign a string variable.
//Use the typeof operator to check the types of all assigned variables.

let int = 2;
let bool = true;
let str = "string"

console.log(typeof(int));
console.log(typeof(bool));
console.log(typeof(str));


// Task 3
//Declare 2 variables x and y and set them to 10 and 3.
//Declare and asign a variable that would be the result of division of 10 and 3.
//Declare and asign a variable that would be the whole part of the division of 10 and 3.
//Declare and asign a variable that would be the remainder of the division of 10 and 3.

let x = 10;
let y = 3;
let remainder = x % y;
console.log(remainder);

// Task 4
//Declare a variable name.
//Assign the variable to your name.
//Declare and assign a variable lastName with the value of your last name.
//Print Hello, and your name and last name in the console from the previous variables.
function greet (name, lastName) {
    console.log(`Hello ${name} ${lastName}!`)    
}

// let greetName = greet("Aneta", "Stankovska");

name = "Aneta";
let lastName = "Stankovska";
console.log(`Hello ${name} ${lastName}!`)

// Task 5
//Declare two number variables and assign them any number
//Write an if statement that prints the larger one in console
function isLarger (num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is larger than ${num2}`);
    } else {
        console.log(`${num2} is larger than ${num1}`)
    }
    //realno ovde treba da se napravi i proverka dali se ednakvi ama ako drzime na baranjata na zadacata toa e
}

// let checkLarger = isLarger(5, 9);

// Task 6
//Declare a variable and assign any number to it
//Write an if statement that finds out if a number is even OR larger than 100
//If it is print in the console: The number is cool!
let anyNum = 101;
if (anyNum >= 100) {
    console.log("The number is coo!")
}


// Task 7
//Write a JavaScript program that will convert denars to euros.
//One euro is 61.5 denars.
function toEuros (denars) {
    let euros = Math.round(denars / 61.5);
    return euros;
}

// let calculateEuros = toEuros(10000);
// console.log(calculateEuros);


// Task 8
//Declare a variable named day
//Initialize it with some day of the week as string
//Write a switch that prints "I am in SEDC" in console on the days you have classes in sedc
//Print "I am free" in console on all other days
let day = "Monday";
switch (day) {
    case "Monday":
    case "Wednesday":
    case "Saturday":
        console.log("I am in SEDC");
        break;
    case "Tuesday":
    case "Thursday": 
    case "Friday":
    case "Sunday":
        console.log("I am free");
        break;
}

// Task 9
//Declare and assign an array of 6 integers. Ex 5,6,15,42.
//Declare and assign an array of strings. Ex Nikola Trajan Dejan
//Print the first value of each array.
//Print the arrays.
//Change the values of the first element in both arrays.
//Assign a value to the 100 th member of the first array.
//Print how many elements the array has? 
//What is the value of the 99th element in the array.
//Write an example of push.
//Write an example of pop.
//What is the value of the 1000th element in both arrays?
//Write an if statement that prints "It's a cool number" if a number is even or larger than 100

let arrNums = [5, 6, 15, 42, 70, 85];
let arrStr = ["Nikola", "Trajan", "Aneta", "Bob", "John", "James"];

console.log(`First element of numbers array is ${arrNums[0]}, first element of strings array is ${arrStr}.`);

console.log(arrStr);
console.log(arrNums);

arrNums[0] = 50;
arrStr[0] = "Nikolina"

arrNums[99] = 99;

console.log(`The numbers array has ${arrNums.length} elements. The strings array has ${arrStr.length} elements`);

console.log(`The value of the 99th element in the numbers array is ${arrNums[98]}. The value of the 99th element in the strings array is ${arrStr[98]}`);

arrStr.push("Bobsky");
console.log(arrStr);

arrStr.pop();
console.log(arrStr);

// should remove Bobsky (rwmove one element starting at the 3rd index)
arrStr.splice(3, 1);
console.log(arrStr);

//Should kick out Nikolina and return back Nikola at the first place 
arrStr.splice(0, 1, "Nikola");
console.log(arrStr);

console.log(`The 1000th element in numbers string is ${arrNums[999]}. The 1000th element in strings array is ${arrStr[999]}`);

// Check for even numbers and numbers larger than 100
function checkEvenAndLarge (array) {
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2 === 0) || array[i] > 100) {
            console.log(`The number is ${array[i]}. It is a cool number`);
        }
    }
}
// checkEvenAndLarge([101, 90, 77, 56, 23, 15, 0, 5, 6])



// Task 10 Write a while loop that counts from 0 to 10. The numbers should be printed in the console.
function loopNumbers (start, stop) {
    let i = start
    while (i <= stop) {
        console.log(i);
        i++
    }
}

// let countToten = loopNumbers(2, 10);

// Task 11
//Write a for loop that counts from 1 to 20 but skips every second number.
//The numbers should be printed in the console.
function printOddNumbers (start, stop) {
    for (let i = start; i <= stop; i++) {
        if (i % 2 === 0) {
            continue
        }
        console.log(i);
    }
}

// let sountOddNumbers = printOddNumbers(6, 30)

// Task 12
//Write a JavaScript program that will find the sum of all items in the given array, make it dynamic, so the result will change if the array is changed. 
function findSumOfArray (array) {
    let sum = 0;
    for (let i = 0; i< array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// let findSum = findSumOfArray([2, 5, 10, 9, 17, 8, 20]);
// console.log(findSum);


// Task 13
//Write a JavaScript program that will find the sum of all positive numbers in the array.
function findSumOfPositiveNumbers (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i]
        }
    }
    return sum;
}

// let sumOfPositiveNumbers = findSumOfPositiveNumbers([5, -2, 10, -10, 7, 18, -30]);
// console.log(sumOfPositiveNumbers);


// Task 14
//Write javascript program that will take the items from a given array and make new aray with the same items in revers order.
// Using array.push()
function reverseArray (array) {
    let reversedArray = [];
    for (let i = array.length-1; i >= 0; i--) {
        reversedArray.push(array[i])
    }
    return reversedArray;
}

// let testReverseArray = reverseArray([1, 2, 3, 4, 5, 6]);
// console.log(testReverseArray);


// using array.unshift()
function reverseArray1 (array) {
    let reversedArray = [];
    for (let i = 0; i < array.length; i++) {
        reversedArray.unshift(array[i]);
    }
    return reversedArray;
}

// let testReverseArray1 = reverseArray1([1, 2, 3, 4, 5, 6]);
// console.log(testReverseArray1);

// Using reverse() function
function reverseArray2 (array) {
    let reversedArray = array.reverse(array);
    return reversedArray;
}

// let testReverseArray2 = reverseArray2([1, 2, 3, 4, 5, 6]);
// console.log(testReverseArray2);


// By swapping the elements in the same array
function reverseArray3 (array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp;
        temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}

// let testReverseArray3 = reverseArray3([1, 2, 3, 4, 5]);
// console.log(testReverseArray3);

// Task 15
//Write javascript program that will find the average value 
//from the all the item values in the given array.
function findAvg (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    // let averageValue = sum / array.length; 
    // return averageValue;
    return sum / array.length;
}

// let testFindAvg = findAvg([1, 2, 3, 4, 5]);
// console.log(`The average value is ${testFindAvg}`);


// Task 16
//Write a function that prints your name in the console
function printMyName () {
    console.log("Hello Aneta!")
}

// printMyName("Aneta");

// Task 17
//Write a function that accepts your name as an argument and returns "Hello NAME"
function printName (name) {
    console.log(`Hello ${name}!`)
}

// printName("Aneta");


// Task 18
//Write a function that accepts 2 numbers as arguments and returns the sum of the two
function sumOfTwoNumbers (number1, number2) {
    if (!isNaN(number1) && !isNaN(number2)) {
        let sum = number1 + number2;
        return sum;
    } else {
        return false
    }
}

// let testSumOfTwoNumbers = sumOfTwoNumbers(10, 50);
// console.log(testSumOfTwoNumbers);

// Task 19
//Write a function that takes a number and returns a message that tells you if the number is odd or even
function oddOrEven (number) {
    if (typeof number === "number" && number % 1 === 0) {
        if (number % 2 === 0) {
            console.log(`The number ${number} is even`);
        } else {
            console.log(`The number ${number} is odd`);
        }
    } else {
        console.log("The input is not valid.")
    }
} 

// oddOrEven(10.6);


// Task 20
//Write a function that takes an array of numbers and returns the number of numbers in the array that are even
function getEvenNumbers (array) {
    let counter = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            counter += 1;
        }
    }
    return counter;
}

// let testGetEvenNumbers = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(testGetEvenNumbers);

// Task 21
//Write an HTML h1 element and select it in javascript by id
let headingElement = document.getElementById("heading");

// Task 22
//Write two p elements and select them by class
let firstPElement = document.getElementsByClassName("first-p")[0];
let secondPElement = document.getElementsByClassName("second-p")[0];

// Task 23
//Write two h3 elements and select the first one by tag name
let firstHeadingThreeElement = document.getElementsByTagName[0];

// Task 24
//Write a div and inside it write one h1 and 2 p elements
//Select the second p element through the div element 
//Hint: You must select the div element and try to find p from there
let lastPElement = document.getElementsByTagName("div")[0].lastElementChild;
lastPElement.innerText = "This element has also been changed";

// Task 25
//Write a h1 element with some text inside of it
//Change the text inside the h1 with Javascript
let secondHeadingElement = document.getElementById("changed-heading");
secondHeadingElement.innerText = "This text has been changed";

// Task 26
//Write an ul element in HTML
//In the ul element add 5 new li elements with Javascript
let listElement = document.getElementById("list");

function addListElements (numberOfLiElements) {
    let result = [];
    for (let i = 0; i < numberOfLiElements; i++) {
        result.push(`<li>List element ${i + 1}</li>`);
        console.log(result)
    }
    result.join("");
    return result
}
listElement.innerHTML = addListElements(9);
