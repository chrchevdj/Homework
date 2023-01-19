console.log(`---Exercise 1---`)
/*
## Exercise 1
 - Create a function that makes api call to the url: "https://swapi.dev/api/people"
 - After you retrieve the data print the first character in the HTML.
 - Example: 
   - Character Name: Luke Skywalker
   - Character Height: 172
   - Character BirthYear: 19BBY
*/
let myBtn = document.getElementById("mtBtn");
let myDiv = document.getElementById("results");

myBtn.addEventListener("click", function () {
  let xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    console.log(xhttp);
    let parsedResponse = JSON.parse(xhttp.responseText);
    console.log(parsedResponse);

    console.log("Way 1");

    for(let person of parsedResponse.results){
        myDiv.innerHTML += `Name: ${person.name} <br/> Height: ${person.height} <br/> BirthYear: ${person.birth_year}<br/>`
        console.log(person.name)
        break        
    }

    // console.log("Way 2");

    // for(let i =0; i<parsedResponse.results.length; i++){
    //     myDiv.innerHTML = `Name: ${parsedResponse.results[i].name} <br/> Height: ${parsedResponse.results[i].height} <br/> BirthYear: ${parsedResponse.results[i].birth_year}<br/>`
    //     console.log(parsedResponse.results[i].name)
    // }

    // console.log("Way 3");

    // myDiv.innerHTML = `Name: ${parsedResponse.results[0].name} <br/> Height: ${parsedResponse.results[0].height} <br/> BirthYear: ${parsedResponse.results[0].birth_year}<br/>`;
    // console.log(parsedResponse.results[0].name);
  };
  xhttp.open("GET", "https://swapi.dev/api/people");
  xhttp.send();
});
console.log(`---Exercise 2---`)
/*
## Exercise 2
  - Create a function that makes api call to the url "https://swapi.dev/api/planets"
  - After the data is retrived print the planets on the HTML
*/

let myBtn2 = document.getElementById("mtBtn2");
let myDiv2 = document.getElementById("results2");

myBtn2.addEventListener("click", function () {
  let xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    console.log(xhttp);
    let parsedResponse2 = JSON.parse(xhttp.responseText);
    console.log(parsedResponse2);

    for(let planets of parsedResponse2.results){
        myDiv2.innerHTML += `Name: ${planets.name} <br/> `
        console.log(planets.name)    
    }
  };
  xhttp.open("GET", "https://swapi.dev/api/planets");
  xhttp.send();
});

console.log(`---Exercise 3---`)
/*
## BONUS: Exercise 3
  - Find out in the documentation how can you request for "specific character resource"
  - Using that url, make API request to get the data
  - After you get the data, create a function that is going to print it in the HTML the properties: "birth_year, eye_color, name, homeworld"
  - IMPORTANT: the property homeworld, should be informations of the homeworld not the url ;)
  - HINT: You would have to do, a api request with the homeworld property value to retrieve it's infomartion.
*/