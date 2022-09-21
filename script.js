const rspArr = ['rock', 'paper', 'scissor'];
let playerCount = 0;
let computerCount = 0;

const rock = document.getElementById('rock-btn');
const paper = document.getElementById('paper-btn');
const scissor = document.getElementById('scissor-btn');

const container = document.querySelector('.container');
const scoreContainer = document.querySelector('.score-container');

const newDiv = document.createElement('div');
newDiv.classList.add('new-div');

const compDiv = document.createElement('div');
newDiv.classList.add('comp-div');

const playerDiv = document.createElement('div');
newDiv.classList.add('player-div');


rock.addEventListener('click', () => {
    newDiv.textContent = playRound('rock');
    container.appendChild(newDiv);
    updateScores();
});
paper.addEventListener('click', () => {
    newDiv.textContent = playRound('paper');
    container.appendChild(newDiv);
    updateScores();
});
scissor.addEventListener('click', () => {
    newDiv.textContent = playRound('scissor');
    container.appendChild(newDiv);
    updateScores();
});

function updateScores(){
    playerDiv.textContent = 'Your Score: ' + playerCount;
    compDiv.textContent = 'Computer Score: ' + computerCount;

    scoreContainer.appendChild(playerDiv);
    scoreContainer.appendChild(compDiv);
}


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
            playerCount++;
            return("You Win! Paper beats Rock");
        } else if (playerSelection == 'scissor') {
            computerCount++;
            return("You Lose! Rock beats Scissor");
        }
    } else if (computerSelection == 'paper') {
        if (playerSelection == 'rock') {
            computerCount++;
            return("You Lose! Paper beats Rock");
        } else if (playerSelection == 'scissor') {
            playerCount++
            return("You Win! Scissor beats Paper");
        }
    } else if (computerSelection == 'scissor') {
        if (playerSelection == 'rock') {
            playerCount++;
            return("You Win! Rock beats Scissor");
        } else if (playerSelection == 'paper') {
            computerCount++;
            return("You Lose! Scissor beats Paper");
        }
    }
}
