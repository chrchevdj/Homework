/* Title: Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"] */

let myNames = ["Aneta", "Trajan", "Nikola", "Bob"];
let mySurnames = ["Stankovska", "Stevkovski", "Dalchevski", "Bobsky"];


function orderedFullNames (names, surnames) {
    let resultArray = [];
    for (let i = 0; i < names.length; i++) {
        resultArray.push(`${i+1}.  ${names[i]} ${surnames[i]}`);
    }
    // console.log(resultArray);
    return resultArray;
}

let test = orderedFullNames(myNames, mySurnames);
console.log(test);
