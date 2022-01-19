function computerPlay() {
    number = Math.floor(Math.random() * 3)

    if (number == 0) {
        return ('rock')
    } else if (number == 1) {
        return ('paper')
    } else return ('scissors')
}

function playRound(e) {
    const playerSelection = e.target.textContent.toLowerCase();
    const computerSelection = computerPlay();
    
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == "paper") ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        score.textContent = `${+playerScore + 1}:${computerScore}`;
        playerScore++;
    } else if (playerSelection == computerSelection) {
        result.textContent = 'It\'s a tie!';
    } else {
        result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        score.textContent = `${playerScore}:${+computerScore + 1}`;
        computerScore++;
    }
    
    checkWinner();
}

function checkWinner() {
    if (playerScore == 5) {
        result.textContent = `You won ${playerScore}:${computerScore}!`;
        score.textContent = '0:0';
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        result.textContent = `You lost ${playerScore}:${computerScore}!`;
        score.textContent = '0:0';
        playerScore = 0;
        computerScore = 0;
    }
}

const btns = document.querySelectorAll("button");
const result = document.getElementById('result');
const score = document.getElementById('score');
let playerScore = 0;
let computerScore = 0; 
btns.forEach(btn => btn.addEventListener('click', playRound));