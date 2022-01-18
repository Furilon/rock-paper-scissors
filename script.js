function computerPlay() {
    number = Math.floor(Math.random() * 3)

    if (number == 0) {
        return ('rock')
    } else if (number == 1) {
        return ('paper')
    } else return ('scissors')
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == "paper") ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return(1);
        } else if (playerSelection == computerSelection) {
            console.log('It\'s a tie!');
            return(0);
        } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return(2);
        }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick rock, paper, or scissors!");
        let computerSelection = computerPlay();
        let outcome = playRound(playerSelection, computerSelection);
        if (outcome == 1) {
            playerScore++;
            console.log(playerScore, computerScore);
        } else if (outcome == 2) {
            computerScore++;
            console.log(playerScore, computerScore);
        } else {
            console.log(playerScore, computerScore);
        }
    }

    if (playerScore > computerScore) {
        console.log(`You Won! ${playerScore}:${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You Lost! ${playerScore}:${computerScore}`)
    } else if (computerScore == playerScore) {
        console.log(`It's a tie! ${playerScore}:${computerScore}`);
    }
}