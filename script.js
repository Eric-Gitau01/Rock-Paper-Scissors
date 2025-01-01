// const score = JSON.parse(localStorage.getItem('score')) || {
//     wins: 0,
//     losses: 0,
//     ties: 0
// }


// function playGame(playerMove) {
//     const randomMove = Math.random();
//     let computerMove = ''
//     let result = ''

   
//     if (randomMove >= 0 && randomMove < 1 / 3 ) {
//         computerMove = 'rock'
//     } else if (randomMove >= 1 / 3 && randomMove < 2 / 3 ) {
//         computerMove = 'paper'
//     } else {
//         computerMove = 'scissors'
//     }

//     if (playerMove === 'rock') {
//         if (computerMove === 'rock') {
//             result = 'tie'
//         } else if (computerMove === 'paper') {
//             result = 'lose'
//         } else if ( computerMove === 'scissors') {
//             result = 'win'
//         }
//     } else if (playerMove === 'paper'){
//         if (computerMove === 'rock') {
//             result = 'lose'
//         } else if (computerMove === 'paper') {
//             result = 'tie'
//         } else if ( computerMove === 'scissors') {
//             result = 'win'
//         }
//     } else if (playerMove === 'scissior') {
//         if (computerMove === 'rock') {
//             result = 'win'
//         } else if (computerMove === 'paper') {
//             result = 'lose'
//         } else if ( computerMove === 'scissors') {
//             result = 'tie'
//         }    
//     }
    
//     if (result === 'win') {
//         score.wins++
//     } else if (result === 'lose') {
//         score.losses++
//     } else if ( result === 'tie') {
//         score.tie++
//     }

//     localStorage.setItem('score', JSON.stringify(score))
//     alert( `You chose ${playerMove} Computer chose ${computerMove}. You ${result}.
// wins: ${score.wins}, losses: ${score.losses}, ties: ${score.tie}`)

// }

// function rock() {
//    playGame('rock')
// }




// function paper() {
//     playGame('paper')
// }

// function scissior() {
//     playGame('scissior')
// }

// function resetGame() {
//     score.wins = 0
//     score.losses = 0
//     score.tie = 0
//     localStorage.removeItem('score')
//     alert('Game reset. Wins: 0, Losses: 0, Ties: 0')
// }



   
const showQualityBtn = document.querySelector('.showQuality-btn')
const addItemBtn = document.querySelector('.addItem-btn')
const add2 = document.querySelector('.+2')
const add3 = document.querySelector('.+3-btn')
const add4 = document.querySelector('.+4-btn')
const add5 = document.querySelector('.+5-btn')
const removeItemBtn = document.querySelector('.removeItem-btn')
const substract2 = document.querySelector('.-2-btn')
const substract3 = document.querySelector('.-3-btn')
const resetBtn = document.querySelector('.reset-btn') 



function updateCartQuality(change) {
    if (cartQuality + change > 10) {
        console.log('cart is full')
    } else if (cartQuality + change < 10) {
        console.log('cart is not empty')
    }

    cartQuality += change
    console.log(`cart quality ${cartQuality}`)
}

addItemBtn.addEventListener('click', function(){
    updateCartQuality(1)
})