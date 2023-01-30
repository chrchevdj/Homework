console.log("Connected")

let buttons = document.getElementsByTagName("button")

let generateJokeBtn = buttons[0];
let resultDiv = document.getElementById("joke")

function getJoke(){
    $.ajax({
        url:"https://api.chucknorris.io/jokes/random",
        method: "GET",

         success: function(response){
            console.log(response)
            console.log(response.value)

            printJoke(resultDiv, response.value)

         }, 

         error: function(error){
            console.log(error)
         }
    })
}

generateJokeBtn.addEventListener("click", function(){
    getJoke()
})

function printJoke(element, joke){
element.innerHTML = joke;
}


function multliplyNumbers(numberOne, numberTwo){
    // let result = numberOne * numberTwo;
    console.log(numberOne / numberTwo);
  
    // return result;
  }

  multliplyNumbers(2,10)


  let count = function(number){
   //200
   let counter = 0;
    while(number >= 0){
        number = number / 10 // 20 
        counter++
        if(number < 1){
            return counter
        }
    }
  }
  
  let result = count(20000)
  console.log(result)
  