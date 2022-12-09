
//global variables
let playerScore = 0
let computerScore = 0

// generate computer random selection
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


// compare both selection and return the winner
function playRound(playerSelection, computerSelection) {
    let currentPlayerSelection = document.getElementById('playerSelection')
    currentPlayerSelection.innerText = playerSelection
    let currentComputerSelection = document.getElementById('computerSelection')
    currentComputerSelection.innerText = computerSelection

    if (
        computerSelection === 'paper' && playerSelection === 'rock' ||
        computerSelection === 'scissors' && playerSelection === 'paper' ||
        computerSelection === 'rock' && playerSelection === 'scissors'
    ) {
        computerScore += 1
        updateInfo('computerScore')
    }

    if (
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'rock' && computerSelection === 'scissors'
    ) {
        playerScore += 1
        updateInfo('playerScore')
    }
}

// play game
// function game() {
//     do {
//         playRound(playerSelection(), computerPlay())
//     } while (rounds > 0)

//     // game results
//     if (playerScore > computerScore) {
//         return alert(`Rounds Completed!\n You win! 🏆 \n Player: ${playerScore} Computer: ${computerScore}`)
//     } else if (playerScore < computerScore) {
//         return alert(`Rounds Completed!\n Computer wins! 🤖 \n Player: ${playerScore} Computer: ${computerScore}`)
//     } else {
//         return alert(`Rounds Completed!\n Nobody wins! \n Player: ${playerScore} Computer: ${computerScore} \n Please play again!`)
//     }
// }

// game()


// create a new element

// const paragraph = document.createElement('p')
// paragraph.innerHTML = `Hey I'm red!`
// paragraph.style.color = 'red'

// const header = document.createElement('h3')
// header.innerHTML = `I'm a blue h3`
// header.setAttribute('style', 'color: blue')


// const body = document.querySelector('body')

// body.appendChild(paragraph)
// body.appendChild(header)


// functions
const closePopup = (popupID) => {
    const selectedPopup = document.getElementById(popupID)
    selectedPopup.style.display = 'none'
}

const startGame = () => {
    const gameBoard = document.getElementById('gameBoard')
    gameBoard.style.display = 'block'
    const selectedName = document.getElementById('selectedName').value
    const playerName = document.getElementById('playerName')
    if (selectedName.length > 1) {
        playerName.innerText = selectedName
    }
}

const updateInfo = (winnerID) => {
    if (playerScore === 5 || computerScore === 5) {
        closePopup('gameBoard')
        const popupEnd = document.getElementById('end')
        popupEnd.style.display = 'flex'

        const message = document.createElement('p')
        // game results
        if (playerScore > computerScore) {
            message.innerText= `Rounds Completed!\n You win! 🏆 \n Player: ${playerScore} Computer: ${computerScore}`
        } else if (playerScore < computerScore) {
            message.innerText= `Rounds Completed!\n Computer wins! 🤖 \n Player: ${playerScore} Computer: ${computerScore}`
        } else {
            message.innerText= `Rounds Completed!\n Nobody wins! \n Player: ${playerScore} Computer: ${computerScore} \n Please play again!`
        }

        const msgContainer = document.getElementById('msgContainer')
        msgContainer.appendChild(message)

    } else {
        let currentWinner = document.getElementById(winnerID)
        if (winnerID === 'playerScore') {
            currentWinner.innerText = playerScore
        }
        if (winnerID === 'computerScore') {
            currentWinner.innerText = computerScore
        }
    }
}

const reset = () => {
    window.location.reload();
}
