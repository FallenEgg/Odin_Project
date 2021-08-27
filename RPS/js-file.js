function computerPlay() {
   var choices = ['Rock', 'Scissors', 'Paper']; 

   var randomChoice = choices[Math.floor(Math.random() * choices.length)];

   return randomChoice;
}

function playRound (playerSelection, computerSelection) {


    
}

const playerSelection = "rock"
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));