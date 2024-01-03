let randomNumber = parseInt(Math.random() * 100+ 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesseslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const start = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    // to check all condition true or false not less than not more than not character
    if(isNaN(guess)){
        alert('Please enter a  number');
    } else if(guess < 1) {
        alert('Please enter a number more than 1');
    } else if(guess > 100) {
        alert('plaese enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if(numGuess === 11) {
            displayGuess(guess);
            displayMassage(`Game Over. Random Number is ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    //your guessing not equal to random number if yes then show you are winner || high || low
    if(guess === randomNumber) {
        displayMassage(`You guess it right`);
        endGame();
    } else if(guess < randomNumber) {
        displayGuess(`Number is too low`);
    } else if(guess > randomNumber) {
        displayGuess(`Number is too high`);
    }
}

function displayGuess(guess) {
    // clean the value guess your update and tell how much remains
    userInput.value = '';
    guesseslot.innerHTML += `${guess}`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMassage(mesaage) {
    // Low high message print from LowOrHigh
    lowOrHi.innerHTML = `<h2>${mesaage}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    start.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100+ 1);
    prevGuess = [];
    newGame = 1;
    guesseslot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    start.removeChild(p);
    playGame = true;

    });
}





