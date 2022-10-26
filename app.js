const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

//User choice displayed on click
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    
    if(randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if(randomNumber === 2) {
        computerChoice = 'Scissors'
    }
    if(randomNumber === 3) {
        computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

//Get Result
function getResult() {
    if (computerChoice === userChoice) {
        result = "Draw!"
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'Win!'
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = 'Lose!'
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = 'Win!'
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'Lose!'
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = 'Win!'
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'Lose!'
    }
    resultDisplay.innerHTML = result
}
