//Returns a random choice from computer
let compOutcomes = ["Rock","Paper","Scissors"];
function computerPlay(){
    return compOutcomes[Math.floor(Math.random() * compOutcomes.length)];
}
//One round of RPS
let results = ["Ai Wins", "Draw","Human Wins"];
function rpsRound(ai,human){
    if(ai == "Rock"){
        if(human == "Rock"){
            return results[1];
        }
        else if(human == "Paper"){
            return results[2];
        }
        else {
            return results[0];
        }

    }
    else if(ai == "Paper"){
        if(human == "Rock"){
            return results[0];
        }
        else if(human == "Paper"){
            return results[1];
        }
        else {
            return results[2];
        }
    }
    else if(ai == "Scissors"){
        if(human == "Rock"){
            return results[2];
        }
        else if(human == "Paper"){
            return results[1];
        }
        else {
            return results[0];
        }
    }   
}
