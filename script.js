// Computer choice logic which randomly selects a number from 3 choices
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Human choice logic which allows the user to input their choice
function getHumanChoice() {
    const humanChoice = prompt("Choose: rock, paper, or scissors?");
    return humanChoice;
}

// Initializing variables that will be used to play the game or the logic of the whole game
let computerScore = 0
let humanScore = 0
let round = 1

function playGame() {
    // Loop the game 5 times because it will play for 5 rounds
    // And calling playRound() each round
    for (i = 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);        
    }

    // Single round logic
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        console.log(`Round ${round}`)
        console.log(`You chose ${humanChoice} | Computer chose ${computerChoice}`)
        // Comparing results
        if (humanChoice === computerChoice) {
            console.log(`It is draw! You both chose ${humanChoice}.`)
            console.log(`You ${humanScore} | ${computerScore} Computer`)
        } else {
            if (humanChoice === "rock") {
                if (computerChoice === "scissors") {
                    win();
                } else {
                    lose();
                }
            } else if (humanChoice === "paper") {
                if (computerChoice === "rock") {
                    win();
                } else {
                    lose();
                }
            } else if (humanChoice === "scissors") {
                if (computerChoice === "paper") {
                    win();
                } else {
                    lose();
                }
            }
        }
        // Function to call if win
        function win() {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            console.log(`You ${humanScore} | ${computerScore} Computer`)
        }
        // Function to call if lose
        function lose() {
            computerScore++;
            console.log(`Computer wins! ${computerChoice} beats ${humanChoice}.`)
            console.log(`You ${humanScore} | ${computerScore} Computer`)
        }
        round++;
    }
}
playGame();