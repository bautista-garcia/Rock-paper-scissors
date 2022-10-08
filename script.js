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



function computerPlay(){
    const randomIndex =  Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];

}

function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

const selectionButtons = document.querySelectorAll('[data-selection]')
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection; //Uses data-selection property from html
        const selection = SELECTIONS.find(selection => selection.name === selectionName) //We use find to access the array element that matches our player selection with all of its properties
        makeSelection(selection);
    })
})

function makeSelection(selection){
    const computerSelection = computerPlay();
    
    yourWinner = isWinner(selection,computerSelection);
    computerWinner = isWinner(computerSelection,selection);

    if(yourWinner) incrementScore(playerScore);
    if(computerWinner) incrementScore(computerScore);
}

function isWinner(selection,opponentSelection){
    return selection.beats === opponentSelection.name;
}

/*
function playGame(){
    rockChoice.addEventListener('click',()=> {playRound(0,computerPlay()); rounds ++;});
    paperChoice.addEventListener('click',()=> {playRound(1,computerPlay()); rounds ++});
    scissorsChoice.addEventListener('click',()=> {playRound(2,computerPlay()); rounds ++});
    playerScore = 0;
    computerScore = 0;
    if(rounds == 5){
        rockChoice.removeEventListener('click',()=> {playRound(0,computerPlay()); rounds ++;});
        paperChoice.removeEventListener('click',()=> {playRound(1,computerPlay()); rounds ++});
        scissorsChoice.removeEventListener('click',()=> {playRound(2,computerPlay()); rounds ++});
        alert('Hellooooo');
    }
    return;
}
playGame();

/*Overview: -Adjust this algorithm to be more random, to many 0s
-Adjust the five rounds stuff to remove the event listeners after five clicks.
*/
