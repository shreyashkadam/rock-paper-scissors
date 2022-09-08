const rspArr = ['Rock', 'Paper', 'Scissor'];

function getComputerChoice(){
    // algorithm to find random whole number 
    // between any two whole numbers => return Math.floor(Math.random() * (max - min + 1)) + min
    let randNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return rspArr[randNum - 1];    
};

let computerSelection = getComputerChoice();

let playerSelection = prompt();

function declareWinner(computerSelection, playerSelection){
    let computerSelectionLower = computerSelection.toLowerCase();
    let playerSelectionLower = playerSelection.toLowerCase();
    if(computerSelectionLower == playerSelectionLower){
        return "Draw! No one wins";
    } else if(computerSelectionLower == 'rock') {
        if(playerSelectionLower == 'paper'){
            return "You Win! Paper beats Rock";
        } else if(playerSelectionLower == 'scissor'){
            return "You Lose! Rock beats Scissor";
        }
    } else if(computerSelectionLower == 'paper') {
        if(playerSelectionLower == 'rock'){
            return "You Lose! Paper beats Rock";
        } else if(playerSelectionLower == 'scissor'){
            return "You Win! Scissor beats Paper";
        }
    } else if(computerSelectionLower == 'scissor') {
        if(playerSelectionLower == 'rock'){
            return "You Win! Rock beats Scissor";
        } else if(playerSelectionLower == 'paper'){
            return "You Lose! Scissor beats Paper";
        }
    }
}

console.log(computerSelection);
console.log(playerSelection);
console.log(declareWinner(computerSelection, playerSelection));
