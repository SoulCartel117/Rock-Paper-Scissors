

let computerOptions = ["rock","paper","scissors"];

function computerSelection (computeroptions) { /// returns random  choice
    return computerChoice = computerOptions[Math.floor((Math.random()*computeroptions.length))];
  
};

function rock(){
    let img = document.createElement("IMG");
    img.src= "images/boulder.jpg";
    $('#image').html(img); 
    console.log("rock selected");
    return userChoice = "rock";
};

function paper(){
    let img = document.createElement("IMG");
    img.src= "images/paper.png";
    $('#image').html(img); 
    console.log("paper selected");
    return userChoice = "paper";
};

function scissors(){
    let img = document.createElement("IMG");
    img.src= "images/scissors.jpg";
    $('#image').html(img); 
    console.log("scissors selected");
    return userChoice = "scissors";
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