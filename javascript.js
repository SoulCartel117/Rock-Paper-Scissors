

let computerOptions = ["rock","paper","scissors"];

function d20 (computeroptions) { /// returns random  choice
    return computerChoice = computerOptions[Math.floor((Math.random()*computeroptions.length))];
  
};

function rock(){
    let x = document.getElementsByClassName("user-selection");
    x.innerHTML= "<img src='images/boulder.jpg'></img>";
    console.log("rock selected");
    return userChoice = "rock";
};

function paper(){
    let x = document.getElementsByClassName("user-selection");
    x.innerHTML= "<img src='images/paper.png'></img>";
    console.log("paper selected");
    return userChoice = "paper"
};

function scissors(){
    let x = document.getElementsByClassName("user-selection");
    x.innerHTML= "<img src='images/scissors.jpg'></img>";
    console.log("Scissors selected");
    return userChoice = "scissors"
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