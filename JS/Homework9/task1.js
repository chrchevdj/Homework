/* CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
name
kind
speak (method)
this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

Bonus: enter the values from prompt or from HTML inputs
*/

function Animal (name, kind) {
    this.name = name;
    this.kind = kind;

    this.speak = function (greet) {
        console.log(`${name} says: ${greet}`);
        return `${name} says: ${greet}`;
    }
}

let nameElement = document.getElementById("name");
let kindElement = document.getElementById("kind");
let speakButton = document.getElementById("speak");
let displayElement = document.getElementById("display");

speakButton.addEventListener('click', function () {
    let name = nameElement.value;
    let kind = kindElement.value;
    let newAnimal = new Animal (name, kind);
    console.log(newAnimal);
    displayElement.innerHTML += newAnimal.speak("Hey Bro!");
    nameElement.value = "";
    kindElement.value = "";
})