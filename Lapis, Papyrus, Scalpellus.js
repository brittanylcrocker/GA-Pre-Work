const player = {
  currentChoice:"null"
}
                
const computer = {
  currentChoice:"null"
}

const choices = ["Lapis", "Papyrus","Scalpellus"];

// Adding HTML elements to the DOM
const h2 = document.createElement("h2")

const h1 = document.querySelector("h1")
document.body.appendChild(h2)
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
  h2.innerHTML=("It's a tie! Computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice)
}

 else if (computer.currentChoice === choices[0] ) {
  if (player.currentChoice === choices[2]) {
    h2.innerHTML=("The Computer wins! Computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice)
  } else {
      h2.innerHTML=("The Player wins! Computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice)
    }
  }

else if (computer.currentChoice === choices[0] ) {
  if (player.currentChoice === choices[1]) {
    h2.innerHTML=("The Player wins! Computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice)
  } else {
      h2.innerHTML=("The Computer wins! Computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice)
    }
  }

else if (computer.currentChoice === choices[2] ) {
  if (player.currentChoice === choices[1]) {
    h2.innerHTML=("The Computer wins! Computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice)
  } else {
      h2.innerHTML=("The Player wins! Computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice)
    }
  }
}



compareChoices()

