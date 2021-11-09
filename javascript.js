
let computerOptions = ["rock","paper","scissors"];

function d20 (computeroptions) { /// returns random  choice
    return computerChoice = computerOptions[Math.floor((Math.random()*computeroptions.length))];
  
};

function compare(){
    if(userChoice === computerChoice){
        console.log(tie)
    }
    else if (userChoice === "rock"){
        if (computerChoice === "paper"){
            console.log("Rock wins")
        }
    }
    else if (userChoice === "paper"){
        if (computerChoice === "rock"){
            console.log("Paper wins")
        }
    }
     else if (userChoice === "scissors"){
         if (computerChoice === "paper"){
             console.log("Scissors wins")
         }
     }   
};