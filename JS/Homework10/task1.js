/* HOMEWORK PART 1
CREATE A GREETING APP WITH JQUERY
Create an input
Create a button
When clicked the button should print a greet message in an h1 header
Ex: input: Petko output message: Hello there Petko!

You must use JQuery to complete the task
*/

let input = $("input");
let button = $("button");
let greetMessage = $("h1");

let blacklist = "1234567890+-=!@#$%^&*()_[]\\\"{}|;':,./<>?"

function checkCharacters (array, blacklist) {
    for (let char = 0; char < array.length; char++) {
        if (blacklist.includes(array[char])) {
            return false;
        }
    }
    return true;
}

$("button").click(function() {
    let myArr = input.val().split("");
    if (checkCharacters(myArr, blacklist) === false) {
        greetMessage.text("Please enter a name using only alphabetical characters")
    } else if (!input.val()) {
        greetMessage.text("Please enter somthing in the input field");
    } else {
        greetMessage.text(`Hello there ${input.val()}`);
    }
})


// $("button").click(function() {
//     if (input.val()) {
//         greetMessage.text(`Hello there ${input.val()}`);
//     } else {
//         greetMessage.text("Please enter a name");
//     }
// })



// let allowed = ["Space", "Backspace", "Delete"]

// input.keydown(function(e) {
//     console.log("Is in allowed: ", allowed.indexOf(e.code))
//     console.log(e.code);
//     console.log(e.code.startsWith("Key") === false && allowed.indexOf(e.code) === -1)
//     if (e.code.startsWith("Key") === false && allowed.indexOf(e.code) === -1) {
//         // alert("Wrong input")
//         e.preventDefault()
//         e.returnValue = false
//         e.cancelBubble = true
//         return false
//     }
// })