// Variables
let response = document.getElementById('response');
let input = document.getElementById('input');
let btnInput = document.getElementById('btnInput');
let tries = document.getElementById('tries')
let count = 0;

//Constants
const min = 1;
const max = 50;

//Random number
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
const randomNum = getRandomIntInclusive(min, max);

// Input button and where the magic happens 
function getInputValue(){
    let number = document.getElementById("input").value;    

        if(document.getElementById("input").value.length == 0) {
          message = "Please enter a number"; 
        }
        else if (number < randomNum) {
          message = "Too low!";
          count = count + 1;          
          document.getElementById("try"+count).style.color = "#F44336";          
        }
        else if (number > randomNum) {         
          message = "Too high!";
          count = count + 1;          
          document.getElementById("try"+count).style.color = "#F44336";
        }
        else if (number == randomNum) {
          message = "You win";
          count = count + 1;          
          document.getElementById("try"+count).style.color = "#F44336"; 
          document.getElementById("input").value = "";  
          document.getElementById("input").disabled = true;         
        }        
        response.innerHTML = message;                   
    } 
  
    // Reset button
  function getReset(){ 
     for(let i = 1; i < 11; i = i + 1 ) {
      document.getElementById("try"+i).style.color = "white";
      document.getElementById("input").value = ""; 
      document.getElementById("input").disabled = false;   
      count = 0;
  } 
    } 


    

  

    

    

    




 





