function computerPlay() {
    let choices = ['Rock', 'Scissors', 'Paper'];

    let randomChoice = choices[Math.floor(Math.random() * choices.length)];

    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    let playerSelection = prompt("What do you choose?")
    let computerSelection = computerPlay();

    console.log('You picked: ' + playerSelection.toUpperCase())


}


console.log(playRound(playerSelection, computerSelection));