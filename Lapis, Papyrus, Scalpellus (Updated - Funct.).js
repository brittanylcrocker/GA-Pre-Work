const player = {
  currentChoice:"null"
}
                
const computer = {
  currentChoice:"null"
}

const choices = ["Lapis", "Papyrus","Scalpellus"];

// Adding HTML elements to the DOM
// const h2 = document.createElement("h2")

// const h1 = document.querySelector("h1")
// document.body.appendChild(h2)
// 

// Randomly generate choice
function computerChooses() {
const randomIndex = Math.floor(Math.random() * choices.length)
computer.currentChoice = choices[randomIndex]
}

player.currentChoice = choices[1]

// Comparison of Choices
function compareChoices(){
  computerChooses()
if (computer.currentChoice === player.currentChoice) {
  displayResult("It's a tie! Computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice)
}

 else if (computer.currentChoice === choices[0] ) {
  if (player.currentChoice === choices[2]) {
    displayResult("The Computer wins! Computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice)
  } else {
      displayResult("The Player wins! Computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice)
    }
  }

else if (computer.currentChoice === choices[0] ) {
  if (player.currentChoice === choices[1]) {
    displayResult("The Player wins! Computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice)
  } else {
      displayResult("The Computer wins! Computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice)
    }
  }

else if (computer.currentChoice === choices[2] ) {
  if (player.currentChoice === choices[1]) {
    displayResult("The Computer wins! Computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice)
  } else {
      displayResult("The Player wins! Computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice)
    }
  }
}

function displayResult (result) {
  const resultText = document.createElement("p")
  resultText.innerText = result
  document.body.appendChild(resultText)
}

compareChoices()

