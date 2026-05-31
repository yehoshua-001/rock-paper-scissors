// Computer choice logic
function getComputerChoice() {
    const computerChoice = Math.random();
    return computerChoice;
}

// Human choice logic
function getHumanChoice() {
    const humanChoice = prompt("Choose: rock, paper, or scissors?");
    return humanChoice;
}

// Declaring players score variables
const computerScore = 0
const humanScore = 0