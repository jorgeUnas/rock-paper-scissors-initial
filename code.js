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

//get a computer selection

computerSelection = getComputerChoice();

//Compare the choices 

    let result = '';
    if (playerSelection === computerSelection){
        result = 'There is not winner'
    }else if (playerSelection === 'paper' & computerSelection == 'rock'){
        playerVictoriesNumber++
        result = 'You Win! Paper beats Rock';
    }else if (playerSelection === 'paper' & computerSelection == 'scissors'){
        computerVictoriesNumber++
        result = 'You Losse! Scissors beats Paper';
    }else if (playerSelection === 'rock' & computerSelection == 'scissors'){
        playerVictoriesNumber++
        result = 'You Win! Rock beats Scissors';
    }else if (playerSelection === 'rock' & computerSelection == 'paper'){
        computerVictoriesNumber++
        result = 'You Losse! Paper beats Rock';
    }else if (playerSelection === 'scissors' & computerSelection == 'paper'){
        playerVictoriesNumber++
        result = 'You Win! Scissors beats Paper';
    }else if (playerSelection === 'scissors' & computerSelection == 'rock'){
        computerVictoriesNumber++
        result = 'You Losse! Rock beats Scissors';
    };
    return result;
}


//Show the results and  the winner 
    

//crate a function game()
function game() {
    // play the round 5 times
   let i = 1;
    while (i <= 5 ) {
        document.write(`${i} Round: ${playRound(playerSelection, computerSelection)} <br>`);
       
        i++
    }

//return the winner 
if (computerVictoriesNumber == playerVictoriesNumber) {
    return `<h2>You were even! </h2>`
}else if(computerVictoriesNumber < playerVictoriesNumber){
    return `<h2> Congratulations!! You have won the game. </h2>`
}else{
    return `<h2> You losse the game =( </h2>`
}
}

document.write(game())

document.write(`<br> Player victories: ${playerVictoriesNumber} <br>`);
document.write(`Computer victories: ${computerVictoriesNumber} <br>`);