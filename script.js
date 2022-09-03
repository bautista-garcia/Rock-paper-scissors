
let rounds = 0;
let playerScore,computerScore;
const possibleChoices = ["Rock","Paper","Scissors"];
function computerPlay(){
    return Math.floor(Math.random() * possibleChoices.length);
}
let outcomes = ["Round Won","Round Lost","Round Drawn","Round Won","Round Lost"]
function playRound(playerSelection,computerSelection){
    let result = (playerSelection - computerSelection) + 2;
    alert(outcomes[result]);
    if(outcomes[result] == 'Round Won'){playerScore ++;}
    else if(outcomes[result] == 'Round Lost'){computerScore ++;}
    else{playerScore ++; computerScore ++;}
}
const rockChoice = document.getElementById('rock');
const paperChoice = document.getElementById('paper');
const scissorsChoice = document.getElementById('scissors');


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
