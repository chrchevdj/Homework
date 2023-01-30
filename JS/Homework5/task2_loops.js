/* Title: Looping structures

Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space. */

function loopNumbers (number) {
    let result = [];
    for (let num = 0; num <= number; num++) {
        result.push(num);
        if (num % 2 === 0) {
            result.push("\n");
        } else {
            result.push(" ");
        }
    }
    result = result.join("")
    console.log(result);
    return result;
}

let countNumbers = loopNumbers(23);