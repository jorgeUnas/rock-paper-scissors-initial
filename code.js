//Declare variables 

let computerSelection = ''
let playerSelection = ''

//Get the PC selection 

function getComputerChoice(){
   let selection = Math.floor(Math.random()*3)+1;
   if(selection === 1) {
        computerSelection = 'rock';
   }else if (selection === 2) {
        computerSelection = 'paper';
   }else{
       computerSelection = 'scissors';
   }
   return computerSelection;
}

