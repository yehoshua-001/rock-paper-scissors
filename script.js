// DOM elements
const choices = ['rock', 'paper', 'scissors'];
const displayRound = document.querySelector('#round');
const result = document.querySelector('#result');
const symbol = document.querySelector('#symbol');
const playerScore = document.querySelector('#playerScore');
const botScore = document.querySelector('#botScore');

// Global variables
let computerScore = 0;
let humanScore = 0;
const winningScore = 5;
let round = 1;

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * choices.length);
    return computerChoice = choices[randomNum];
}

function playRound(humanChoice){
    computerChoice = getComputerChoice();
    const computerChoiceImg = document.querySelector('#computerChoiceImg');
    if(computerChoice === "rock"){
        computerChoiceImg.setAttribute("src", "./images/computer/rock.png");
    }
    else if(computerChoice === "paper"){
        computerChoiceImg.setAttribute("src", "./images/computer/paper.png");
    }
    else{
        computerChoiceImg.setAttribute("src", "./images/computer/scissors.png");
    }

    displayRound.textContent = `Round ${round}`;

    if(humanChoice === computerChoice){
        symbol.textContent = `=`;
        result.textContent = `Draw`;
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
        symbol.textContent = `>`
        result.textContent = `${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
        playerScore.textContent = `${humanScore}`;
    }
    function lose(){
        computerScore++;
        symbol.textContent = `<`
        result.textContent = `${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`;
        botScore.textContent = `${computerScore}`;
    }
    round++;
    const removeBtn = document.querySelector('.choices')
    const addBtn = document.querySelector('.addBtn');
    if(humanScore === winningScore){
        symbol.textContent = ``;
        result.setAttribute('style', 'font-size: 4rem;');
        result.textContent = `You win!`;
        removeBtn.remove();

        const playAgainBtn = document.createElement('a');
        playAgainBtn.textContent = 'Play again';
        playAgainBtn.setAttribute('id', 'playAgainBtn');
        playAgainBtn.setAttribute('href', 'game.html');
        playAgainBtn.classList.add('playAgainBtn');
        playAgainBtn.addEventListener('mouseenter', () => {
            playAgainBtn.classList.add('playAgainBtn-hovered');
        });
        playAgainBtn.addEventListener('mouseleave', () => {
            playAgainBtn.classList.remove('playAgainBtn-hovered');
        });
        addBtn.appendChild(playAgainBtn);
    }
    else if(computerScore === winningScore){
        symbol.textContent = ``;
        result.setAttribute('style', 'font-size: 4rem;');
        result.textContent = `Computer wins!`
        removeBtn.remove();

        const playAgainBtn = document.createElement('a');
        playAgainBtn.textContent = 'Play again';
        playAgainBtn.setAttribute('id', 'playAgainBtn');
        playAgainBtn.setAttribute('href', 'game.html');
        playAgainBtn.classList.add('playAgainBtn');
        playAgainBtn.addEventListener('mouseenter', () => {
            playAgainBtn.classList.add('playAgainBtn-hovered');
        });
        playAgainBtn.addEventListener('mouseleave', () => {
            playAgainBtn.classList.remove('playAgainBtn-hovered');
        });
        addBtn.appendChild(playAgainBtn);
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        const humanChoice = button.getAttribute('id');
        playRound(humanChoice);
    });
    button.addEventListener('click', function(){
        const playerChoice = button.getAttribute('id');
        const playerChoiceImg = document.querySelector('#playerChoiceImg');
        if(playerChoice === "rock"){
            playerChoiceImg.setAttribute("src", "./images/player/rock.png")
        }
        else if(playerChoice === "paper"){
            playerChoiceImg.setAttribute("src", "./images/player/paper.png")
        }
        else{
            playerChoiceImg.setAttribute("src", "./images/player/scissors.png")
        }
    });
})

