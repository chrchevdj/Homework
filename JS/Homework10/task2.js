/* HOMEWORK PART 2
Create a header generator

Create two inputs, one for text and one for color
Create a button that says: generate h1
Create an h3 element for messages
When the button is clicked create a new header below the inputs and button
The new header should have the text and color from the inputs
If the person enters an invalid color or an empty text show an error message to the message element
 You must use JQuery to complete the task
*/

let inputText = $("input").first();
let inputColor = $("input:last");
let displayTextElement = $("h1");
let button = $("button");

button.click(function () {
    $(".container").html("");
    let newH1 = $(document.createElement("h1"));
    newH1.text(`${inputText.val()}`);
    newH1.css("color", inputColor.val());
    if (newH1.css("color") === "") {
        $("h3").text("The given color is not a valid css color");
        return;
    }
    $(".container").append(newH1);
})