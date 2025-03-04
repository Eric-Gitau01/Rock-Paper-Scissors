function getcomputerMove() {
    let computerMove = '';
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
      computerMove = 'rock';
    } else if (randomNumber < 0.66) {
      computerMove = 'paper';
    }
    else {
      computerMove = 'scissors';
    }
    return computerMove;
}

function rock() {
    let computerMove = getcomputerMove();
    let resultEl = document.getElementById('result');
    let result = '';

    if (computerMove === 'paper') {
        result = 'You lose! computer choose paper and you choose rock.';
    } else if (computerMove === 'scissors') {
        result = 'You win! computer choose scissors and you choose rock.';
    }
    else {
        result = 'It\'s a tie! computer choose rock and you choose rock.';
    }
    resultEl.innerHTML = result;
}

function paper() {
    let computerMove = getcomputerMove();
    let resultEl = document.getElementById('result');
    let result = '';

    if (computerMove === 'rock') {
        result = 'You win! computer choose rock and you choose paper.';
    } else if (computerMove ==='scissors') {
        result = 'You lose! computer choose scissors and you choose paper.';
    }
    else {
        result = 'It\'s a tie! computer choose paper and you choose paper.';
    }
    resultEl.innerHTML = result;
}

function scissors() {
    let computerMove = getcomputerMove();
    let resultEl = document.getElementById('result');
    let result = '';

    if (computerMove === 'rock') {
        result = 'You lose! computer choose rock and you choose scissors.';
    } else if (computerMove === 'paper') {
        result = 'You win! computer choose paper and you choose scissors.';
    }
    else {
        result = 'It\'s a tie! computer choose scissors and you choose scissors.';
    }
    resultEl.innerHTML = result;
}