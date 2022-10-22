function getPLayerChoice(userInput) {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors')
        return userInput;
    else
        console.log('Invalid input, please choose between rock, paper, or scissors.')

}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function playRound(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection)
        return 'Tie';

    if (computerSelection === 'rock')
    {
        if (playerSelection === 'paper')
            return 'Won';
        else
            return 'Lose';
    }
    else if (computerSelection === 'paper')
    {
        if (playerSelection === 'rock')
            return 'Lose';
        else
            return 'Win';
    }
    else
    {
        if (playerSelection === 'rock')
            return 'Win';
        else
            return 'Lose';
    }
}

function game(){
    for (let i = 0; i < 5; i++)
    {
        const playerSelection = getPLayerChoice(prompt('Rock..Paper..Scissors!! (What do you throw?)'));
        const computerSelection = getComputerChoice();
    
        console.log('You threw: ' + playerSelection);
        console.log('The computer threw: ' + computerSelection)

        console.log(playRound(playerSelection,computerSelection));
    }
}

game();