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


function playRound(playerSelection, computerSelection){
    
//get the user choice 
do{

playerSelection = prompt('Rock, paper or scissors?!').toLowerCase().trim();

if(playerSelection != 'rock' & playerSelection != 'paper' & playerSelection != 'scissors'){
alert('invalid option');
}

}while(playerSelection != 'rock' & playerSelection != 'paper' & playerSelection != 'scissors'); //Validate the user's choice 
