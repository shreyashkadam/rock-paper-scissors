const rspArr = ['rock', 'paper', 'scissor'];

let rock = document.getElementById('rock-btn');
let paper = document.getElementById('paper-btn');
let scissor = document.getElementById('scissor-btn');


rock.addEventListener('click', () => {
    playRound('rock');
});
paper.addEventListener('click', () => {
    playRound('paper');
});
scissor.addEventListener('click', () => {
    playRound('scissor');
});


function getComputerChoice() {
    // algorithm to find random whole number 
    // between any two whole numbers => return Math.floor(Math.random() * (max - min + 1)) + min
    let randNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return rspArr[randNum - 1];
};

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (computerSelection == playerSelection) {
        console.log("Draw! No one wins");
    } else if (computerSelection == 'rock') {
        if (playerSelection == 'paper') {
            console.log("You Win! Paper beats Rock");
        } else if (playerSelection == 'scissor') {
            console.log("You Lose! Rock beats Scissor");
        }
    } else if (computerSelection == 'paper') {
        if (playerSelection == 'rock') {
            console.log("You Lose! Paper beats Rock");
        } else if (playerSelection == 'scissor') {
            console.log("You Win! Scissor beats Paper");
        }
    } else if (computerSelection == 'scissor') {
        if (playerSelection == 'rock') {
            console.log("You Win! Rock beats Scissor");
        } else if (playerSelection == 'paper') {
            console.log("You Lose! Scissor beats Paper");
        }
    }
}
