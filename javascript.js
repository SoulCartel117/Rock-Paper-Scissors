

let computerOptions = ["rock","paper","scissors"];

function d20 (computeroptions) { /// returns random  choice
    return computerChoice = computerOptions[Math.floor((Math.random()*computeroptions.length))];
  
};

function rock(){
    let x = document.getElementsByClassName("user-selection");
    x.innerHTML= <img src="images/boulder.jpg"></img>;
};

function paper(){
    let x = document.getElementsByClassName("user-selection");
    x.innerHTML= <img src="images/paper.png"></img>;
};

function scissors(){
    let x = document.getElementsByClassName("user-selection");
    x.innerHTML= <img src="images/scissors.jpg"></img>;
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