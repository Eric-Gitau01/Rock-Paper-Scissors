let resultEl = document.getElementById('result'); // Renamed variable to avoid conflict
let computerChoiceEl = document.getElementById('computer-choice');
let scoreEl = JSON.parse(localStorage.getItem('scoreEl'))|| {
    wins: 0,
    losses: 0,
    ties: 0,
};

function computerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    return computerMove;
}

function playGame(playerMove) {
    const computerChoice = computerMove();
    computerChoiceEl.textContent = `Computer chose: ${computerChoice}`;

    let gameResult = ''; // Renamed to avoid conflict with resultEl
    if (playerMove === 'rock') {
       if (computerChoice === 'rock') {
        gameResult = 'tie';
       } else if (computerChoice === 'paper') {
        gameResult = 'lose';
       } else if (computerChoice === 'scissors') {
        gameResult = 'win';
       }
    } else if (playerMove === 'paper') {
       if (computerChoice === 'rock') {
        gameResult = 'win';
       } else if (computerChoice === 'scissors') {
        gameResult = 'lose';
       } else if (computerChoice === 'paper') {
        gameResult = 'tie';
       }
    } else if (playerMove === 'scissors') {
       if (computerChoice === 'paper') {
        gameResult = 'win';
       } else if (computerChoice === 'rock') {
        gameResult = 'lose';
       } else if (computerChoice === 'scissors') {
        gameResult = 'tie';
       }
    }

    if (gameResult === 'win') {
        scoreEl.wins++;
    } else if (gameResult === 'tie') {
        scoreEl.draws++;
    } else {
        scoreEl.loses++;
    }

    localStorage.setItem('scoreEl', JSON.stringify(scoreEl));

    resultEl.innerText = `You picked ${playerMove} and the computer picked ${computerChoice}. Result: ${gameResult}
    Wins: ${scoreEl.wins}, Losses: ${scoreEl.loses}, Draws: ${scoreEl.draws}`;
}

function rock() {
    playGame('rock');
}

function paper() {
    playGame('paper');
}

function scissors() {
    playGame('scissors');
}

function resetBtn() {
    scoreEl.wins = 0;
    scoreEl.loses = 0;
    scoreEl.draws = 0;
    localStorage.removeItem('scoreEl');
    resultEl.innerText = 'Wins: 0, Losses: 0, Draws: 0';
}
