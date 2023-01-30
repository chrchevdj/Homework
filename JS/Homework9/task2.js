/* HOMEWORK PART 2
Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML
*/

let resultElement = document.getElementById("result");
let selectElement = document.getElementById("books");

function Book (title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;

    this.checkReadingStatus = function () {
        if (this.readingStatus === true) {
            return `Already read '${this.title}' by ${this.author}.`
        } else if (this.readingStatus === false) {
            return `You still need to read '${this.title}' by ${this.author}.`
        } else {
            return `No information about the reading status was found for the selected book`
        }
    }
}

let arrOfBooks = [];
arrOfBooks.push(new Book("Frankenstein", "Mary Shelley", true));
arrOfBooks.push(new Book("Foundation", "Isaac Asimov", false));
arrOfBooks.push(new Book("Solaris", "Stanislaw Lem", true));
arrOfBooks.push(new Book("Neuromancer", "William Gibson", false));
arrOfBooks.push(new Book("Hyperion", "Dan Simmons", true));
arrOfBooks.push(new Book("Jurassic Park", "Michael Crichton", false));


selectElement.addEventListener('change', function() {
    let value = selectElement.value;
    resultElement.innerText = "";
    resultElement.innerText += arrOfBooks[value].checkReadingStatus();
})