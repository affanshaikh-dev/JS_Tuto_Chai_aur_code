let ranNum = Math.floor(Math.random() * 100 + 1);
let submit = document.querySelector("#sub")
let userInput = document.querySelector("#guessField")
let guesses = document.querySelector(".guesses")
let remaining = document.querySelector(".lastResult")
let LowOrHi = document.querySelector(".LowOrHi")
let startOver = document.querySelector(".result")

let p = document.createElement("p")
let prevGuess = []
let playGame = true
let numGuess = 0

if(playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        let guess = parseInt(userInput.value)
        console.log(guess);
        validGuess(guess)
    })
}

const validGuess = (guess) => {
    if(isNaN(guess)) {
        alert("Plz Enter a Valid Number");
    } else if (guess < 1 && guess > 100) {
        alert("Plz Enter Number which is Greater than 1 and smaller than 100")
    } else {
        prevGuess.push(guess)
        if (numGuess === 9) {
            displayGuess(guess)
            displayMessage(`Game Over, Random Number is ${ranNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

const checkGuess = (guess) => {
    if (guess === ranNum) {
        displayMessage(`Great! You Guessed it right`)
        endGame()
    } else if (guess < ranNum) {
        displayMessage(`Number is Too Low Try Again!`)
    } else if (guess > ranNum) {
        displayMessage(`Number is Too High Try Again!`)
    }
}

const displayGuess = (guess) => {
    userInput.value = ''
    guesses.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}

const displayMessage = (message) => {
    LowOrHi.innerHTML = `<h3>${message}</h3>`
}

const endGame = () => {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id='newGame'>Start New Game</button>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

const newGame = () => {
    const newGame = document.querySelector('#newGame')
    newGame.addEventListener('click', () => {
        ranNum = Math.floor(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 0
        guesses.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}
