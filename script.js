let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function getPLayerChoice(userInput) {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors')
        return userInput;
    else
        console.log('Invalid input, please choose between rock, paper, or scissors.');

}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection){
    const computerSelection = getComputerChoice();
    let result = "";
    let outcome = 0;

    if (playerSelection === computerSelection)
        outcome = 0;
    else if (computerSelection === 'rock')
    {
        if (playerSelection === 'paper')
            outcome = 1;
        else
            outcome = 2;
    }
    else if (computerSelection === 'paper')
    {
        if (playerSelection === 'rock')
            outcome = 2;
        else
            outcome = 1;
    }   
    else
    {
        if (playerSelection === 'rock')
            outcome = 1;
        else
            outcome = 2;
    }

    switch (outcome){
        case 0: result = 'Tie! You were close!';  break;
        case 1: result = 'Won! Congrats!'; playerScore++; break;
        case 2: result = 'Lost! Better luck on the next one!'; computerScore++;
    }

    if (computerScore == 5){
        result += '<br><br>I won the game! Reload the page to play again!'; disableButtons();}
    else if (playerScore == 5){
        result += '<br><br>You won the game! Reload the page to play again!'; disableButtons();}

    document.getElementById('result').innerHTML = result;
    document.getElementById('score').innerHTML = 'You: ' + playerScore + ' Computer: ' + computerScore;

    return;
}

function game(){
    //const playerSelection = getPLayerChoice(prompt('Rock..Paper..Scissors!! (What do you throw?)'));
    const playerSelection = getPLayerChoice('');
    const computerSelection = getComputerChoice();

    console.log('You threw: ' + playerSelection);
    console.log('The computer threw: ' + computerSelection)

    console.log(playRound(playerSelection,computerSelection));
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

//game();