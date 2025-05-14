let rockBtn = document.getElementById("rock-btn");
let paperBtn = document.getElementById("paper-btn");
let scissorBtn = document.getElementById("scissor-btn");
let resultEl = document.getElementById("result-el");
let scoreEl = document.getElementById("score-el");
let resetBtn = document.getElementById("reset-btn");

console.log(resetBtn)

let score = JSON.parse(localStorage.getItem("score")) || {
    win: 0,
    losses: 0,
    tie: 0
};

scoreEl.textContent = `win: ${score.win}, losses: ${score.losses}, Ties: ${score.tie}`;

rockBtn.addEventListener("click", function () {
    playGame("rock");
});
paperBtn.addEventListener("click", function () {
    playGame("paper");
});
scissorBtn.addEventListener("click", function () {
    playGame("scissor");
});

resetBtn.addEventListener("click", function() {
    score = {
         win: 0,
        losses: 0,
        tie: 0
    }
    scoreEl.textContent = `win: ${score.win}, losses: ${score.losses}, Ties: ${score.tie}`;
    localStorage.removeItem("score")
    resultEl.textContent = "Score has been reset and removed from storage.";
})

function playGame(playermove) {
    let computerMove = '';
    const randomMove = Math.random();

    if (randomMove < 1 / 3) {
        computerMove = 'rock';
    } else if (randomMove < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissor';
    }

    let result = '';

    if (playermove === computerMove) {
        result = 'It\'s a tie';
        score.tie++
    } else if (
        (playermove === 'rock' && computerMove === 'scissor') ||
        (playermove === 'paper' && computerMove === 'rock') ||
        (playermove === 'scissor' && computerMove === 'paper')
    ) {
        result = 'you win';
        score.win++;
    } else {
        result = 'you lose';
        score.losses++;
    }

    localStorage.setItem("score", JSON.stringify(score));

    resultEl.innerHTML = `You <img src="images/${playermove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon"> computer`;

    scoreEl.textContent = `win: ${score.win}, losses: ${score.losses}, Ties: ${score.tie}`;
}

