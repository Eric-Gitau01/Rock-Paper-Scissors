let computerMove = '';  // Declare a variable to store the computer's move

// Function to randomly pick the computer's move
function pickComputerMove() {
    let randomNumber = Math.random();  // Generate a random number between 0 and 1

    // If the random number is between 0 and 1/3, the computer chooses 'rock'
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    // If the random number is between 1/3 and 2/3, the computer chooses 'paper'
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    // If the random number is between 2/3 and 1, the computer chooses 'scissors'
    } else {
        computerMove = 'scissors';
    }
}

// Function to determine the result based on the player's move and the computer's move
function getResult(playerMove) {
    let result = '';  // Declare a variable to store the result

    // If the player's move is the same as the computer's move, it's a tie
    if (playerMove === computerMove) {
        result = 'It\'s a tie!';
    // Check if the player wins based on the rules of rock-paper-scissors
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        result = 'You win!';
    // If the player doesn't tie or win, the player loses
    } else {
        result = 'You lose!';
    }

    return result;  // Return the result of the game
}

// Function that runs when the player selects 'rock'
function rock() {
    pickComputerMove();  // Call function to randomly pick the computer's move
    const result = getResult('rock');  // Get the result of the game with 'rock' as the player's move
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerMove}`;  // Update the HTML to show the computer's move
    document.getElementById('result').textContent = result;  // Update the HTML to show the result of the game
}

// Function that runs when the player selects 'paper'
function paper() {
    pickComputerMove();  // Call function to randomly pick the computer's move
    const result = getResult('paper');  // Get the result of the game with 'paper' as the player's move
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerMove}`;  // Update the HTML to show the computer's move
    document.getElementById('result').textContent = result;  // Update the HTML to show the result of the game
}

// Function that runs when the player selects 'scissors'
function scissors() {
    pickComputerMove();  // Call function to randomly pick the computer's move
    const result = getResult('scissors');  // Get the result of the game with 'scissors' as the player's move
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerMove}`;  // Update the HTML to show the computer's move
    document.getElementById('result').textContent = result;  // Update the HTML to show the result of the game
}
