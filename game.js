// 'Rock, Paper, Scissors' Game
// get random selection
function computerPlay() {
    const randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
    switch (randomNumber) {
        case 1:
            return 'rock'
        case 2:
            return 'paper'
        case 3:
            return 'scissors'
    }
}

// return player selection
function playerSelection() {
    const selection = (window.prompt('Introduce your option:\n [1] Rock 🪨  \n [2] Paper 📃 \n [3] Scissors ✂️')).toLowerCase();

    switch (selection) {
        case '1':
        case 'rock':
            return 'rock'
        case '2':
        case 'paper':
            return 'paper'
        case '3':
        case 'scissors':
            return 'scissors'
    }
}

let playerScore = 0
let computerScore = 0

// compare both selection and return the winner
function playRound(playerSelection, computerSelection) {
    if (!playerSelection) {
        return alert('Please introduce a valid selection')
    } else if (computerSelection === playerSelection) {
        return alert(`Both have ${computerSelection}. \n Please play again!`)
    } else if (
        computerSelection === 'paper' && playerSelection === 'rock' ||
        computerSelection === 'scissors' && playerSelection === 'paper' ||
        computerSelection === 'paper' && playerSelection === 'rock'
    ) {
        computerScore += 1
        return alert(`Point for computer! 🦾 \n${computerSelection} beats ${playerSelection} \nPlayer: ${playerScore} Computer: ${computerScore}`)
    } else {
        playerScore += 1
        return alert(`Point for you! 🙌  \n${playerSelection} beats ${computerSelection} \nPlayer: ${playerScore} Computer: ${computerScore}`)
    }
}

// play game
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection(), computerPlay())
    }
    if (playerScore > computerScore) {
        return alert(`You win! 🏆 \nScore: \nPlayer: ${playerScore} Computer: ${computerScore}`)
    } else if (playerScore < computerScore) {
        return alert(`Computer wins! 🤖 \nScore: \nPlayer: ${playerScore} Computer: ${computerScore}`)
    } else {
        return alert('Nobody wins. Please play again')
    }
}

game()
