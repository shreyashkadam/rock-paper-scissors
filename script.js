const rspArr = ['rock', 'paper', 'scissor'];

const rock = document.getElementById('rock-btn');
const paper = document.getElementById('paper-btn');
const scissor = document.getElementById('scissor-btn');

const container = document.querySelector('.container');

const newDiv = document.createElement('div');
newDiv.classList.add('new-div');


rock.addEventListener('click', () => {
    newDiv.textContent = playRound('rock');
    container.appendChild(newDiv);
});
paper.addEventListener('click', () => {
    newDiv.textContent = playRound('paper');
    container.appendChild(newDiv);
});
scissor.addEventListener('click', () => {
    newDiv.textContent = playRound('scissor');
    container.appendChild(newDiv);
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
        return("Draw! No one wins");
    } else if (computerSelection == 'rock') {
        if (playerSelection == 'paper') {
            return("You Win! Paper beats Rock");
        } else if (playerSelection == 'scissor') {
            return("You Lose! Rock beats Scissor");
        }
    } else if (computerSelection == 'paper') {
        if (playerSelection == 'rock') {
            return("You Lose! Paper beats Rock");
        } else if (playerSelection == 'scissor') {
            return("You Win! Scissor beats Paper");
        }
    } else if (computerSelection == 'scissor') {
        if (playerSelection == 'rock') {
            return("You Win! Rock beats Scissor");
        } else if (playerSelection == 'paper') {
            return("You Lose! Scissor beats Paper");
        }
    }
}
