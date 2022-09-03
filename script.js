
/*function caseInsensitive(input){
    let rockreg = /Rock/i;
    let scissorsreg = /Scissors/i;
    let paperreg = /paper/i;
    if(rockreg.test(input)) {return "Rock";}
    else if(scissorsreg.test(input)) {return "Scissors";}
    else if(paperreg.test(input)) {return  "Paper";}
}
*/
//Adjust this algorithm to be more random, to many 0s.
const possibleChoices = ["Rock","Paper","Scissors"];
function computerPlay(){
    return Math.floor(Math.random() * possibleChoices.length);
}
let outcomes = ["You Win","You Lost","Draw","You Win","You Lost"]
function playRound(playerSelection,computerSelection){
    alert(outcomes[(playerSelection - computerSelection) + 2]);
    alert(computerSelection);
}

const rockChoice = document.getElementById('rock');
const paperChoice = document.getElementById('paper');
const scissorsChoice = document.getElementById('scissors');
const compSelection = computerPlay();
rockChoice.addEventListener('click',playRound.bind(this,0,compSelection));
paperChoice.addEventListener('click',playRound.bind(this,1,compSelection));
scissorsChoice.addEventListener('click',playRound.bind(this,2,compSelection));





/*function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i ++){
        let result = playRound(prompt("Rock paper or scissors: "), computerPlay());
        result);
        if(result == "You lost"){computerScore ++;}
        else if(result == "Player wins"){playerScore ++;}
    }
    "Player scores: ",playerScore,"Computer scores: ", computerScore);
}
game();
*/

