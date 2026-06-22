// DOM elements
const choices = ['rock', 'paper', 'scissors'];
const displayRound = document.querySelector('#round');
const compare = document.querySelector('#compare');
const result = document.querySelector('#result');
const score = document.querySelector('#score');

// Global variables
let computerScore = 0;
let humanScore = 0;
const winningScore = 5;
let round = 1;

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
}

function playRound(humanChoice){
    humanChoice = humanChoice;
    computerChoice = getComputerChoice();
    displayRound.textContent = `Round: ${round}`;
    compare.textContent = `You chose ${humanChoice.toUpperCase()}. Computer chose ${computerChoice.toUpperCase()}.`;
    // Comparing
    if(humanChoice === computerChoice){
        result.textContent = `It is draw!`;
        score.textContent = `You ${humanScore} | ${computerScore} Computer`;
    }
    else{
        if(humanChoice === "rock"){
            if(computerChoice === "scissors"){
                win();
            }
            else{
                lose();
            }
        }
        else if(humanChoice === "paper"){
            if(computerChoice === "rock"){
                win();
            }
            else{
                lose();
            }
        }
        else if(humanChoice === "scissors"){
            if(computerChoice === "paper"){
                win();
            }
            else{
                lose();
            }
        }
    }
    function win(){
        humanScore++;
        result.textContent = `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
        score.textContent = `You ${humanScore} | ${computerScore} Computer`;
    }
    function lose(){
        computerScore++;
        result.textContent = `Computer wins! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`;
        score.textContent = `You ${humanScore} | ${computerScore} Computer`;
    }
    round++;

    if(humanScore === winningScore){
        alert("You won the game!");
        useraAgreed = confirm("Play again?");
        if (useraAgreed === true){
            round = 1;
            displayRound.textContent = `Round: ${round}`;
            compare.textContent = ``;
            result.textContent = ``;
            humanScore = 0;
            computerScore = 0;
            score.textContent = `You ${humanScore} | ${computerScore} Computer`;
        }
    }
    else if(computerScore === winningScore){
        alert("Computer wins the game!");
        useraAgreed = confirm("Play again?");
        if (useraAgreed === true){
            round = 1;
            displayRound.textContent = `Round: ${round}`;
            humanScore = 0;
            computerScore = 0;
            score.textContent = `You ${humanScore} | ${computerScore} Computer`;
        }
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        const humanChoice = button.getAttribute('id');
        playRound(humanChoice);
    });
})
