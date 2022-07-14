//Returns a random choice from computer
function computerPlay(){
    return Math.floor(Math.random() * compOutcomes.length);
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
//One round of RPS
let possibleChoices = ["Scissors","Paper","Rock"];
let outcomes = ["You lost","Player wins","Draw","You lost","Player wins"]
function playRound(uncheckedPlayerSelection,computerSelection){
    let playerSelection = possibleChoices.indexOf(caseInsensitive(uncheckedPlayerSelection));
    return outcomes[(playerSelection - computerSelection) + 2];
}
console.log(playRound("Rock",0));



