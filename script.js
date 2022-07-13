//Returns a random choice from computer
let compOutcomes = ["Rock","Paper","Scissors"];
function computerPlay(){
    return compOutcomes[Math.floor(Math.random() * compOutcomes.length)];
}
//One round of RPS
let results = ["Ai Wins", "Draw","Human Wins"];
function rpsRound(ai,human){
    let computerSelection;
    let humanSelection;
    let rockreg = /Rock/i;
    let scissorsreg = /Scissors/i;
    let paperreg = /paper/i;
    if(rockreg.test(human)) {humanSelection = "Rock";}
    if(scissorsreg.test(human)) {humanSelection = "Scissors";}
    if(paperreg.test(human)) {humanSelection = "Paper";}
    computerSelection = ai;
    if(computerSelection == "Rock"){
        if(humanSelection == "Rock"){
            return results[1];
        }
        else if(humanSelection == "Paper"){
            return results[2];
        }
        else {
            return results[0];
        }

    }
    else if(computerSelection == "Paper"){
        if(humanSelection == "Rock"){
            return results[0];
        }
        else if(humanSelection == "Paper"){
            return results[1];
        }
        else {
            return results[2];
        }
    }
    else if(computerSelection == "Scissors"){
        if(humanSelection == "Rock"){
            return results[2];
        }
        else if(humanSelection == "Paper"){
            return results[1];
        }
        else {
            return results[0];
        }
    }   
}
console.log(rpsRound(computerPlay(),"rOCK"));
