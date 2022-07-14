//Returns a random choice from computer
let possibleChoices = ["Scissors","Paper","Rock"];
function computerPlay(){
    return Math.floor(Math.random() * possibleChoices.length);
}
//Makes selection case insensitive
function caseInsensitive(input){
    let rockreg = /Rock/i;
    let scissorsreg = /Scissors/i;
    let paperreg = /paper/i;
    if(rockreg.test(input)) {return "Rock";}
    else if(scissorsreg.test(input)) {return "Scissors";}
    else if(paperreg.test(input)) {return  "Paper";}
}
//One round of Rock-paper-scissors

let outcomes = ["You lost","Player wins","Draw","You lost","Player wins"]
function playRound(uncheckedPlayerSelection,computerSelection){
    let playerSelection = possibleChoices.indexOf(caseInsensitive(uncheckedPlayerSelection));
    return outcomes[(playerSelection - computerSelection) + 2];
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i ++){
        let result = playRound(prompt("Rock paper or scissors: "), computerPlay());
        console.log(result);
        if(result == "You lost"){computerScore ++;}
        else if(result == "Player wins"){playerScore ++;}
    }
    console.log("Player scores: ",playerScore,"Computer scores: ", computerScore);
}
game();


