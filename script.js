
/*function caseInsensitive(input){
    let rockreg = /Rock/i;
    let scissorsreg = /Scissors/i;
    let paperreg = /paper/i;
    if(rockreg.test(input)) {return "Rock";}
    else if(scissorsreg.test(input)) {return "Scissors";}
    else if(paperreg.test(input)) {return  "Paper";}
}
*/

const possibleChoices = ["Rock","Paper","Scissors"];
function computerPlay(){
    return Math.floor(Math.random() * possibleChoices.length);
}
let outcomes = ["You lost","Player wins","Draw","You lost","Player wins"]
//Adjust playRound algorithm to display the correct result
function playRound(playerSelection,computerSelection){
    console.log(outcomes[(playerSelection - computerSelection) + 2]);
}

const rockChoice = document.getElementById('rock');
const paperChoice = document.getElementById('paper');
const scissorsChoice = document.getElementById('scissors');

rockChoice.addEventListener('click',playRound.bind(this,0,computerPlay()));
paperChoice.addEventListener('click',playRound.bind(this,1,computerPlay()));
scissorsChoice.addEventListener('click',playRound.bind(this,2,computerPlay()));





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

