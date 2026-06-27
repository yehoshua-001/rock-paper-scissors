// DOM elements
const choices = ['rock', 'paper', 'scissors'];
const displayRound = document.querySelector('#round');
const result = document.querySelector('#result');
const playerScore = document.querySelector('#playerScore');
const botScore = document.querySelector('#botScore');

// Global variables
let computerScore = 0;
let humanScore = 0;
const winningScore = 5;
let round = 1;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        result.textContent = `DRAW`;
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
        result.textContent = `${humanChoice.toUpperCase()} > ${computerChoice.toUpperCase()}`;
        playerScore.textContent = `${humanScore}`;
    }
    function lose(){
        computerScore++;
        result.textContent = `${humanChoice.toUpperCase()} < ${computerChoice.toUpperCase()}`;
        botScore.textContent = `${computerScore}`;
    }
    round++;

    // Spawn create 'Play again?' button
    function playAgainBtn(){
        const addBtn = document.querySelector('.addBtn');
        const playAgainBtn = document.createElement('a');
        playAgainBtn.textContent = 'Play again?';
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

    // Celebration effects using 'confetti.js.org' library
    function celebration(){
        const duration = 15 * 1e3,
        animationEnd = Date.now() + duration,
        defaults = {
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 0
        };
        function randomInRange(min, max){
            return Math.random() * (max - min) + min;
        }
        const interval = setInterval(function(){
            const timeLeft = animationEnd - Date.now();
            if(timeLeft <= 0) return clearInterval(interval);
            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, {
                particleCount,
                origin: {
                    x: randomInRange(.1, .3),
                    y: Math.random() - .2
            }
        }));
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: {
                x: randomInRange(.7, .9),
                y: Math.random() - .2
                }
            }));
        }, 250);
    }

    // Game winner logic
    const removeBtn = document.querySelector('.choices')
    if(humanScore === winningScore){
        result.setAttribute('style', 'font-size: 4rem;');
        result.textContent = 'You win!';
        removeBtn.remove();
        playAgainBtn();
        celebration();
    }
    else if(computerScore === winningScore){
        result.setAttribute('style', 'font-size: 4rem;');
        result.textContent = 'Computer wins!';
        removeBtn.remove();
        playAgainBtn();
        celebration();
    }
}

// Choices buttons for player to choose their checker, calls back playRound(),
// generate computer choice randomly, and animate the hands for every click.
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function(){
        const humanChoice = button.getAttribute('id');
        // Get computer choice
        const randomNum = Math.floor(Math.random() * choices.length);
        const computerChoice = choices[randomNum];
        const humanChoiceImg = document.querySelector('#humanChoiceImg');
        const computerChoiceImg = document.querySelector('#computerChoiceImg');
        displayRound.textContent = `Round ${round}`;
        humanChoiceImg.setAttribute(`src`, `./images/player/rock.png`);
        computerChoiceImg.setAttribute(`src`, `./images/computer/rock.png`);
        result.textContent ="ROCK PAPER SCISSORS";
        setTimeout(() => {
            playRound(humanChoice, computerChoice);
            humanChoiceImg.setAttribute(`src`, `./images/player/${humanChoice}.png`);
            computerChoiceImg.setAttribute(`src`, `./images/computer/${computerChoice}.png`);
        }, 2000);
        humanChoiceImg.style.animation = 'shakeHuman 0.5s ease-in-out 3';
        computerChoiceImg.style.animation = 'shakeComputer 0.5s ease-in-out 3';
    });
})

// To reset the animation for every click
const hands = document.querySelectorAll('img');
hands.forEach(hand => {
    hand.addEventListener("animationend", function(){
        const humanHand = document.querySelector('#humanChoiceImg');
        const computerHand = document.querySelector('#computerChoiceImg');
        humanHand.style.animation = '';
        computerHand.style.animation = '';
    });
});
