
let uScore = 0;
let cScore = 0;
let tie = 0;
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
        tie++;
            $("#tie-score").text(`${tie}`);
    }
    else if (userChoice === "rock"){
        if (computerChoice === "scissors"){
            console.log("Rock wins");
            uScore++;
            $("#user-score").text(`${uScore}`);
        }
        if (computerChoice === "paper"){
            console.log("Paper wins");
            cScore++;
            $("#comp-score").text(`${cScore}`);
        }
    }
    else if (userChoice === "paper"){
        if (computerChoice === "rock"){
            console.log("Paper wins");
            uScore++;
            $("#user-score").text(" "+`${uScore}`);
        }
        if (computerChoice === "scissors"){
            console.log("Scissors wins");
            cScore++;
            $("#comp-score").text(" "+`${cScore}`);
        }
    }
     else if (userChoice === "scissors"){
        if (computerChoice === "paper"){
             console.log("Scissors wins");
             uScore++;
            $("#user-score").text(" "+`${uScore}`);
        }
        if (computerChoice === "rock"){
            console.log("Rock wins");
            cScore++;
            $("#comp-score").text(" "+`${cScore}`);
        }
     }   
};