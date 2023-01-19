console.log(`---Exercises 1---`)
/*1.	Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1
*/
givenArray = [10, 2, 3, 5];

function find(array, item) {
  if (array.length === 0) {
    return false;
  }

  let newAr = [];

  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      newAr.push(array[i]);
      return (`${i}: ${array[i]}`);
    } 
  }
  return -1;
}
let result = find(givenArray, 2);
console.log(result);

console.log(`---Exercises 2---`)
/*
2.	Create a function that goes through an array of numbers.  If the number is odd, it should be incremented by one ( + 1 ) if the number is even, it should be decremented by one ( - 1 ). Return the modified array.
Make sure the array provided is not empty, if it is empty, return false;
BONUS: Make sure it works if the array provided contains different data types then numbers ( strings, booleans etc.). Only elements of datatype number are taken into consideration.
*/

/* Approach
 - Create function that goes throu array of numbers - done
 - make sure the array is not empthy if it is return false - done
 - create an empthy array - done
 - create an itteration - done
 - create a condition that detects if is a number or not - done
 - and if is a number th condition to be applied and to push into the new array - done
 - return the nea array- done
 - print the new array - done
*/

let mixedArray = ["Hello world", false, 25, true, null, "George", 20, 10, 100 ];

function choose(arr) {
  if (arr.length === 0) {
    return false;
  }
  let newAr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (arr[i] % 2 == 0) {
        arr[i] -= 1;
        newAr.push(arr[i]);
      } else if (arr[i] % 2 == 1) {
        arr[i] += 1;
        newAr.push(arr[i]);
      }
    }
  }
  return newAr;
}
let exe2 = choose(mixedArray);
console.log(exe2);

/*-------------------------------------------------------------*/
console.log(`---Exercises 3---`)
/*
3.	Create a function that accepts an array of objects as parameters. The object should have the properties: studentName, studentLastname, studentGrades. studentName & studentLastname are strings, but studentGrades should be an array of 10 numbers. The function should return a new array of the full names of the students that have an average score more than 8.
Example: 
a.	Provided: 
[ {
   studentName: “Bob”; 
   studentLastname: “Bobski”; 
   studentGrades: [10, 10, 10, 10, 7, 9, 6, 10, 6, 9]
  },
{
   studentName: “John”; 
   studentLastname: “Doe”; 
   studentGrades: [6, 6, 6, 10, 6, 7, 7, 7, 7, 6]
  },
 ]
-	Returns: [ “Bob Bobski” ]
*/

/*
Create a function that accept array of objects as parametar
create a new array
make an itteration that will give the averate score
*/
function grades(studentGrades){
  let sum =0;
  for(let i =0; i<studentGrades.length; i++ ){
    sum +=studentGrades[i]
  }
  return sum/studentGrades.length
  } 


let studS =
[{
  studentName: "Bob", 
  studentLastname: "Bobski",
  studentGrades: [10, 10, 10, 10, 7, 9, 6, 10, 6, 9]
 },
{
  studentName: "John", 
  studentLastname: "Doe", 
  studentGrades: [6, 6, 6, 10, 6, 7, 7, 7, 7, 6]
 },]

for(let i= 0; i < studS.length; i++){
  let grade = studS[i].studentGrades 
  let total = grades(grade)
  if(total >= 8){
    console.log(`${studS[i].studentName} ${studS[i].studentLastname}`)
  }  
}



/*-------------------------------------------------------------*/
console.log(`---Exercises 4---`)
/*
4.	Create movie library app. “As a user, I would like to add a movie to the movie library, and print all the movies on the screen that are in the library.”

Requirements:
a.	The new movie added should have the properties: movieName, movieDirector, movieGenre, movieCoverImg, movieReleaseDate.
b.	Take the corresponding values from HTML inputs.
c.	On the html have a button “Add Movie”, when clicked the movie should be added to the movie library list.
d.	Print all the movies from the movie library list in the HTML with the corresponding information.
e.	BONUS: Next to the printed movie information, create a button “Remove movie”, when clicked it should remove that movie from the list.
/*-------------------------------------------------------------*/
/*
4.	Create movie library app. “As a user, I would like to add a movie to the movie library, and print all the movies on the screen that are in the library.”

Requirements:
a.	The new movie added should have the properties: movieName, movieDirector, movieGenre, movieCoverImg, movieReleaseDate.
b.	Take the corresponding values from HTML inputs.
c.	On the html have a button “Add Movie”, when clicked the movie should be added to the movie library list.
d.	Print all the movies from the movie library list in the HTML with the corresponding information.
e.	BONUS: Next to the printed movie information, create a button “Remove movie”, when clicked it should remove that movie from the list.
*/


let movieName = document.getElementById("movieName");
let movieDirector = document.getElementById("movieDirector");
let movieGenre = document.getElementById("movieGenre");
let movieCoverImg = document.getElementById("movieCoverImg");
let movieReleaseDate = document.getElementById("movieReleaseDate");

let buttons = document.getElementsByTagName("button");
let results = document.getElementById("results");

let addBtn = buttons[0];

let id = 0;

let idToEdit = null;

function generateId(){
  id += 1;
  return id
}

function Movie(id, movieName, movieDirector, movieGenre, movieCoverImage, movieReleaseDate){
  this.id = id;
  this.movieName = movieName;
  this.movieDirector = movieDirector;
  this.movieGenre = movieGenre;
  this.movieCoverImg = movieCoverImage;
  this.movieReleaseData = movieReleaseDate;
}

let moviesDB = [];

addBtn.addEventListener("click", function(event) {
  event.preventDefault()
  
  let doWeEditMovie = false; //flag

  for(let movie of moviesDB){
    if(movie.id === idToEdit){
      movie.movieName = movieName.value;
      movie.movieDirector = movieDirector.value;
      movie.movieGenre = movieGenre.value;
      movie.movieCoverImg = movieCoverImg.value;
      movie.movieReleaseData = movieReleaseDate.value;

      doWeEditMovie = true;
    }
  }

  if(doWeEditMovie === false){ // we do not edit movie, we add new movie
    let movie = new Movie(generateId(), movieName.value, movieDirector.value, movieGenre.value, movieCoverImg.value, movieReleaseDate.value);
    moviesDB.push(movie);
  }
 
  

  printMovies(moviesDB, results)
  clearInputs();

  idToEdit = null;
})

function printMovies(movies, elementToPrintIn){
  elementToPrintIn.innerHTML = "";

  for(let i = 0; i < movies.length; i++){
    //console.log(movies[i]) //element of current iteration, that is movie object
    elementToPrintIn.innerHTML += 
    `
      <div class="movieCard">
          <h3>${movies[i].movieName}</h3>
          <img width="300" height="350" src="${movies[i].movieCoverImg}" alt=${movies[i].movieName} />
          <button value="${movies[i].id}" onclick="removeFromList(this, moviesDB)"> Remove Movie </button>
          <button value="${movies[i].id}" onclick="editFromList(this, moviesDB)"> Edit Movie </button>
      </div>
    `

  }
}

function removeFromList(target,  movies){
  console.log("I am clicked")
  console.log(target)
  console.log(movies)
  
  let listOfRemaningMovies = [];
  
  for(let i = 0; i < movies.length; i++){
    if(movies[i].id !== Number(target.value)){
      listOfRemaningMovies.push(movies[i])
    }
  }

  console.log("Remaining: ", listOfRemaningMovies)
  moviesDB = listOfRemaningMovies;
  printMovies(moviesDB, results);

}

function editFromList(target,  movies){
 
  let movieTobeEdited = {};
  
  for(let i = 0; i < movies.length; i++){
    if(movies[i].id === Number(target.value)){
      movieTobeEdited = movies[i]
    }
  }


  
  movieName.value = movieTobeEdited.movieName
  movieDirector.value = movieTobeEdited.movieDirector
  movieGenre.value = movieTobeEdited.movieGenre
  movieCoverImg.value = movieTobeEdited.movieCoverImg
  movieReleaseDate.value = movieTobeEdited.movieReleaseData
  idToEdit = movieTobeEdited.id

}

function clearInputs(){
  movieName.value = ""
  movieDirector.value = ""
  movieGenre.value = ""
  movieCoverImg.value = ""
  movieReleaseDate.value = ""
}