// 'Rock, Paper, Scissors' Game
//global variables
const optionsArr = ['rock', 'paper', 'scissors', '1', '2', '3']
let playerScore = 0
let computerScore = 0
let rounds = 5

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
    let selection
    do {
        selection = (window.prompt(`Introduce your option:\n [1] Rock 🪨  \n [2] Paper 📃 \n [3] Scissors ✂️ \nRound: ${rounds === 1 ? 'last' : rounds}`)).toLowerCase().trim();
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
            default:
                return false
        }
    } while (!optionsArr.includes(selection))
}

// compare both selection and return the winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection) {
        if (computerSelection === playerSelection) {
            rounds -= 1
            return alert(`No one gets a point! \nBoth have ${computerSelection} \nPlayer: ${playerScore} Computer: ${computerScore}`)
        } else if (
            computerSelection === 'paper' && playerSelection === 'rock' ||
            computerSelection === 'scissors' && playerSelection === 'paper' ||
            computerSelection === 'paper' && playerSelection === 'rock'
        ) {
            computerScore += 1
            rounds -= 1
            return alert(`Point for computer! 🦾 \n${computerSelection} beats ${playerSelection} \nPlayer: ${playerScore} Computer: ${computerScore}`)
        } else {
            playerScore += 1
            rounds -= 1
            return alert(`Point for you! 🙌  \n${playerSelection} beats ${computerSelection} \nPlayer: ${playerScore} Computer: ${computerScore}`)
        }
    } else {
        alert('Please introduce a valid selection')
    }
}

// play game
function game() {
    do {
        playRound(playerSelection(), computerPlay())
    } while (rounds > 0)

    // game results
    if (playerScore > computerScore) {
        return alert(`Rounds Completed!\n You win! 🏆 \n Player: ${playerScore} Computer: ${computerScore}`)
    } else if (playerScore < computerScore) {
        return alert(`Rounds Completed!\n Computer wins! 🤖 \n Player: ${playerScore} Computer: ${computerScore}`)
    } else {
        return alert(`Rounds Completed!\n Nobody wins! \n Player: ${playerScore} Computer: ${computerScore} \n Please play again!`)
    }
}

game()
