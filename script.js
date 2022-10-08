const SELECTIONS = [
    {
        name: 'rock',
        emoji: '🪨',
        beats: 'scissors'
    }
    ,
    {
        name: 'paper',
        emoji: '📄',
        beats: 'rock'
    }
    ,
    {
        name: 'scissors',
        emoji: '✂️',
        beats: 'paper'
    }
]

const playerScore = document.querySelector('[data-your-score]');
const computerScore = document.querySelector('[data-computer-score]');
const finalScore = document.querySelector('[data-game-score]');



function computerPlay(){
    const randomIndex =  Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];

}

function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function resetScore(scoreSpan){
    scoreSpan.innerText = '0';
}

const selectionButtons = document.querySelectorAll('[data-selection]')
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection; //Uses data-selection property from html
        const selection = SELECTIONS.find(selection => selection.name === selectionName) //We use find to access the array element that matches our player selection with all of its properties
        makeSelection(selection); //The round is played when the button is clicked
    })
})

function isWinner(selection,opponentSelection){
    return selection.beats === opponentSelection.name;
}


function makeSelection(selection){
    const computerSelection = computerPlay();
    
    yourWinner = isWinner(selection,computerSelection);
    computerWinner = isWinner(computerSelection,selection);

    if(yourWinner) incrementScore(playerScore);
    if(computerWinner) incrementScore(computerScore);

    console.log(finalScore.innerText)

    if((parseInt(computerScore.innerText) + parseInt(playerScore.innerText)) == 5) {
        if(parseInt(computerScore.innerText) == '3') {
            finalScore.innerText = 'Computer Wins'
        } 
        else {
            finalScore.innerText = 'Player wins'; 
        }
        resetScore(playerScore)
        resetScore(computerScore)
    }
}

