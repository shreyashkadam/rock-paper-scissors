const rspArr = ['rock', 'paper', 'scissor'];
let playerCount = 0;
let computerCount = 0;

const rock = document.getElementById('rock-btn');
const paper = document.getElementById('paper-btn');
const scissor = document.getElementById('scissor-btn');
const refresh = document.getElementById('refresh')

const container = document.querySelector('.container');
const scoreContainer = document.querySelector('.score-container');
const winnerContainer = document.querySelector('.winner-container')

const newDiv = document.createElement('div');
newDiv.classList.add('new-div');

const compDiv = document.createElement('div');
newDiv.classList.add('comp-div');

const playerDiv = document.createElement('div');
newDiv.classList.add('player-div');

const winnerDiv = document.createElement('div');
winnerDiv.classList.add('winner-div');


rock.addEventListener('click', () => {
    clickRound('rock')
});
paper.addEventListener('click', () => {
    clickRound('paper')
});
scissor.addEventListener('click', () => {
    clickRound('scissor')
});
refresh.addEventListener('click', () => {
    window.location.reload();
});

function clickRound(rsp) {
    newDiv.textContent = playRound(rsp);
    container.appendChild(newDiv);
    updateScores();
    checkScores();
}

function updateScores() {
    playerDiv.textContent = 'Your Score: ' + playerCount;
    compDiv.textContent = 'Computer Score: ' + computerCount;

    scoreContainer.appendChild(playerDiv);
    scoreContainer.appendChild(compDiv);
}

function checkScores() {
    if (playerCount == 5) {
        winnerDiv.textContent = 'You Won, Computer Lost!';
        rock.remove();
        paper.remove();
        scissor.remove();
    } else if (computerCount == 5) {
        winnerDiv.textContent = 'You Lost, Computer Won!';
        rock.remove();
        paper.remove();
        scissor.remove();
    }
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
        return ("Draw! No one wins");
    } else if (computerSelection == 'rock') {
        if (playerSelection == 'paper') {
            playerCount++;
            return ("You Win! Paper beats Rock");
        } else if (playerSelection == 'scissor') {
            computerCount++;
            return ("You Lose! Rock beats Scissor");
        }
    } else if (computerSelection == 'paper') {
        if (playerSelection == 'rock') {
            computerCount++;
            return ("You Lose! Paper beats Rock");
        } else if (playerSelection == 'scissor') {
            playerCount++
            return ("You Win! Scissor beats Paper");
        }
    } else if (computerSelection == 'scissor') {
        if (playerSelection == 'rock') {
            playerCount++;
            return ("You Win! Rock beats Scissor");
        } else if (playerSelection == 'paper') {
            computerCount++;
            return ("You Lose! Scissor beats Paper");
        }
    }
}
