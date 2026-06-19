function letsPlay() {
    alert("Let's play Rock Paper Scissor!")
}
letsPlay();

// Global variables
let computerScore = 0
let humanScore = 0
let round = 1

// DOM elements
const buttons = document.querySelectorAll('button');
const choices = ['rock', 'paper', 'scissors'];
const displayRound = document.querySelector('#round');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const result = document.querySelector('#result');
const score = document.querySelector('#score');

// Computer choice logic which randomly selects a number from 3 choices
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
}

// Single round logic
function playRound(humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = getComputerChoice();
    displayRound.textContent = `Round: ${round}`;
    player.textContent = `You chose ${humanChoice.toUpperCase()}`;
    computer.textContent = `Computer chose ${computerChoice.toUpperCase()}`;
    // Comparing results
    if (humanChoice === computerChoice) {
        result.textContent = `It is draw!`;
        score.textContent = `You ${humanScore} | ${computerScore} Computer`;
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
        result.textContent = `You won! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
        score.textContent = `You ${humanScore} | ${computerScore} Computer`;
    }
    // Function to call if lose
    function lose() {
        computerScore++;
        result.textContent = `Computer won! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`;
        score.textContent = `You ${humanScore} | ${computerScore} Computer`;
    }
    round++;
}

// Human choice logic for each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const humanChoice = button.getAttribute('id');
        playRound(humanChoice);
    })
});


