

let computerOptions = ["rock","paper","scissors"];

function computerSelection (computeroptions) { /// returns random  choice
    computerChoice = computerOptions[Math.floor((Math.random()*3))];
    console.log("computer -- "+ computerChoice);
    return computer();
};

function computer(){
    if (computerChoice === "rock"){
        let img = document.createElement("IMG");
        img.src= "images/boulder.jpg";
        $('#computerImage').html(img); 
        return compare();
    }
    else if (computerChoice === "paper"){
        let img = document.createElement("IMG");
        img.src= "images/paper.png";
        $('#computerImage').html(img); 
        return compare();
    }
    else if (computerChoice === "scissors"){
        let img = document.createElement("IMG");
        img.src= "images/scissors.jpg";
        $('#computerImage').html(img); 
        return compare();
    }
};

function rock(){
    let img = document.createElement("IMG");
    img.src= "images/boulder.jpg";
    $('#image').html(img); 
    console.log("user -- rock");
    userChoice = "rock";
    return computerSelection();
};

function paper(){
    let img = document.createElement("IMG");
    img.src= "images/paper.png";
    $('#image').html(img); 
    console.log("user -- paper");
    userChoice = "paper";
    return computerSelection();
};

function scissors(){
    let img = document.createElement("IMG");
    img.src= "images/scissors.jpg";
    $('#image').html(img); 
    console.log("user -- scissors");
    userChoice = "scissors";
    return computerSelection();
};


function compare(){
    if(userChoice === computerChoice){
        console.log("tie")
    }
    else if (userChoice === "rock"){
        if (computerChoice === "scissors"){
            console.log("Rock wins");
        }
        if (computerChoice === "paper"){
            console.log("Paper wins");
        }
    }
    else if (userChoice === "paper"){
        if (computerChoice === "rock"){
            console.log("Paper wins");
        }
        if (computerChoice === "scissors"){
            console.log("Scissors wins");
        }
    }
     else if (userChoice === "scissors"){
        if (computerChoice === "paper"){
             console.log("Scissors wins")
        }
        if (computerChoice === "rock"){
            console.log("Rock wins");
        }
     }   
};