
function getComputerChoice() {
    const RPS = ["rock", "paper", "scissors"];
    return RPS[Math.floor(Math.random() * RPS.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return ["Tie", 0];
    }
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return ["You Win! Rock beats Scissors", 1];
        } else {
            return ["You Lose! Paper beats Rock", -1];
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return ["You Win! Paper beats Rock", 1];
        } else {
            return ["You Lose! Scissors beats Paper", -1];
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return ["You Win! Scissors beats Paper", 1];
        } else {
            return ["You Lose! Rock beats Scissors", -1];
        }
    }
}

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper, or Scissors?")
        let gameResult = playRound(playerSelection, getComputerChoice());
        score += gameResult[1];
        console.log(gameResult[0]);
    }
    if (score > 0) {
        console.log(`You won with a score of ${score}`);
    } else {
        console.log(`You lost! with a score of ${score}`);
    }
}

game();