
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
    const rpsChoices = document.querySelectorAll(".rps-choice");
    console.log(rpsChoices.length);
    rpsChoices.forEach((choice) => {
        choice.addEventListener('click', () => {
            const playerChoice = choice.id;
            let body = document.querySelector("body");
            resultSection = document.querySelector("#result");
            pscoreSection = document.querySelector("#player-score");
            cscoreSection = document.querySelector("#comp-score");
            const result = playRound(playerChoice, getComputerChoice());
            playerScore = result[1] == 1 ? playerScore + 1 : playerScore;
            compScore = result[1] == -1 ? compScore + 1 : compScore;
            resultSection.textContent = result[0];
            pscoreSection.textContent = `Your Score: ${playerScore}`;
            cscoreSection.textContent = `Computer Score: ${compScore}`;
            
            if ((playerScore == 5 || compScore == 5) && !won) {
                won = true;
                const winResult = document.createElement('div');
                winResult.textContent = playerScore == 5
                    ? "YOU WIN THIS TIME!!! Dare to try again!?"
                    : "You will never beat me! Better luck next time.";

                const tryAgain = document.createElement('button');
                tryAgain.textContent = "Try Again";
                tryAgain.addEventListener('click', () => {
                    won = false;
                    winResult.remove();
                    tryAgain.remove();
                    playerScore = 0;
                    compScore = 0;
                    resultSection.textContent = "";
                    const BREAK = document.createElement('br');
                    resultSection.appendChild(BREAK)
                    pscoreSection.textContent = `Your Score: ${playerScore}`;
                    cscoreSection.textContent = `Computer Score: ${compScore}`;
                });

                body.appendChild(winResult);
                body.appendChild(tryAgain)
            }
        });
    });
}


let playerScore = 0;
let compScore = 0;
let won = false;
game();