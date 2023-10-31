            let computerSelection = ''
            let playerSelection = ''
            // Create a function that gives each option
            function getComputerChoice(){
                // create a ramdom variable ranging from 1 to 3
                let variable = Math.floor((Math.random()*3)+1);
                let pcOption = '';
                    if (variable === 1){
                        pcOption = 'rock';
                    }else if (variable === 2){
                        pcOption = 'paper';
                    }else{
                        pcOption = 'scissors';
                    }
                return pcOption; 
            }

            let userOption = ''
            do{
            // Ask for an option
            userOption = prompt('Rock, paper or scissor?', 'Write your answer').toLocaleLowerCase();

            }while(userOption !== 'rock' & userOption !== 'paper' & userOption !== 'scissors');

            

            // Create a function that receive pcOption and userOption and compare them 
            function startPlay(pcOption, userOption){
                 // Show both options

                console.log(`PC: ${pcOption} and User: ${userOption}`);

                if(pcOption === userOption){
                    console.log('Nobody wins, play again!')
                }else if(pcOption === 'rock' & userOption === 'scissors'){
                    console.log('PC wins')
                }else if(pcOption === 'rock' & userOption === 'paper'){
                    console.log('USER wins')
                }else if(pcOption === 'scissors' & userOption === 'paper'){
                    console.log('PC wins')
                }else if(pcOption === 'scissors' & userOption === 'rock'){
                    console.log('USER wins')
                }else if(pcOption === 'paper' & userOption === 'rock'){
                    console.log('PC wins')
                }else if(pcOption === 'paper' & userOption === 'scissors'){
                    console.log('USER wins')
                }
            }
            startPlay(getComputerChoice(), userOption)