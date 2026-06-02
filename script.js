// Computer choice logic
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

// Human choice logic
function getHumanChoice() {
    const humanChoice = prompt("Choose: rock, paper, or scissors?");
    return humanChoice;
}

// Variables
let computerScore = 0
let humanScore = 0
let round = 1

// Single round logic
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    console.log(`Round ${round}`)
    console.log(`You chose ${humanChoice}! Computer chose ${computerChoice}!`)
    // Comparing results
    if (humanChoice === computerChoice) {
        console.log(`It is draw! You both chose ${humanChoice}`)
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

    function win() {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        console.log(`Your score: ${humanScore}`)
        console.log(`Computer score: ${computerScore}`)
    }

    function lose() {
        computerScore++;
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}.`)
        console.log(`Your score: ${humanScore}`)
        console.log(`Computer score: ${computerScore}`)
    }
}
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);