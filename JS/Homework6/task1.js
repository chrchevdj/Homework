/* Change the page with JavaScript

Change the text of all paragraphs and headers with javascript
Note:The html must not be changed */

let firsth1 = document.getElementById("myTitle");
firsth1.innerText = "I changed the text, and it is still a cool page!";

let firstParagraph = document.querySelector("p");
firstParagraph.innerText = "Yes, the exercise is very easy!";

let secondParagraph = document.getElementsByClassName("paragraph second")[0];
secondParagraph.innerText = "Well, it is, I agree!";

// let secondParagraph = document.querySelector(".second");
// secondParagraph.innerText = "Bla bla bla";

let textTag = document.getElementsByTagName("text")[0];
textTag.innerText = "I changed the text in the <text> element";

let lasth1 = document.querySelectorAll("h1")[1];
lasth1.innerText = "Yes, I changed the text in the last h1 element";

// let lasth1 = document.getElementsByClassName("anotherDiv")[0].nextElementSibling.firstElementChild;
// lasth1.innerText = "Bla, bla, bla";

let firsth3 = document.querySelector("h3");
firsth3.innerText = "Finally, I changed the text to the last element in the HTML file";