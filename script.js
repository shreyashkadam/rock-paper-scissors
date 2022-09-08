const rspArr = ['Rock', 'Paper', 'Scissor'];

function getComputerChoice(){
    // algorithm to find random whole number 
    // between any two whole numbers => return Math.floor(Math.random() * (max - min + 1)) + min
    let randNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return rspArr[randNum - 1];    
};

let computerSelection = getComputerChoice();