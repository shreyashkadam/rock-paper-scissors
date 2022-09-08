const rspArr = ['Rock', 'Paper', 'Scissor'];
let playerCount = 0;
let computerCount = 0;
let computerSelection = null;
let playerSelection = null;

function getComputerChoice() {
    // algorithm to find random whole number 
    // between any two whole numbers => return Math.floor(Math.random() * (max - min + 1)) + min
    let randNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return rspArr[randNum - 1];
};

function getPlayerChoice() {
    let playerChoice = prompt();
    let playerChoiceLower = playerChoice.toLowerCase();

    if (playerChoiceLower === 'rock' || playerChoiceLower === 'paper' || playerChoiceLower === 'scissor') {
        return playerChoice;
    } else {
        alert("Enter correct Input!");
    }
};

function playRound(computerSelection, playerSelection) {
    let computerSelectionLower = computerSelection.toLowerCase();
    let playerSelectionLower = playerSelection.toLowerCase();
    if (computerSelectionLower == playerSelectionLower) {
        return "Draw! No one wins";
    } else if (computerSelectionLower == 'rock') {
        if (playerSelectionLower == 'paper') {
            playerCount ++;
            return "You Win! Paper beats Rock";
        } else if (playerSelectionLower == 'scissor') {
            computerCount ++;
            return "You Lose! Rock beats Scissor";
        }
    } else if (computerSelectionLower == 'paper') {
        if (playerSelectionLower == 'rock') {
            computerCount ++;
            return "You Lose! Paper beats Rock";
        } else if (playerSelectionLower == 'scissor') {
            playerCount ++;
            return "You Win! Scissor beats Paper";
        }
    } else if (computerSelectionLower == 'scissor') {
        if (playerSelectionLower == 'rock') {
            playerCount ++;
            return "You Win! Rock beats Scissor";
        } else if (playerSelectionLower == 'paper') {
            computerCount ++;
            return "You Lose! Scissor beats Paper";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        console.log(playRound(computerSelection, playerSelection));
    }

    if(playerCount > computerCount){
        console.log("Congrats! You Win The rounds")
    } else if( playerCount < computerCount){
        console.log("Bad Luck...You Lose The Rounds")
    } else{
        console.log("Draw! Try Again")
    }
}

game();

