let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

let result = document.querySelector(".result");
let userRock = 0;
let userPaper = 0;
let userScissors = 0;
let computerChoice;
let computerPick;

//Function for computer choice process

function computerChoiceProcess() {
    computerPick = Math.floor(Math.random() * 3);

    if (computerPick === 0) {
        computerChoice = computerPick;
    } else if (computerPick === 1) {
        computerChoice = computerPick;
    } else {
        computerChoice = computerPick;
    }
}

rock.addEventListener("click", function () {
    userRock += 1;
    computerChoiceProcess();
    resultProcedure();
});

paper.addEventListener("click", function () {
    userPaper += 1;
    computerChoiceProcess();
    resultProcedure();
});
scissors.addEventListener("click", function () {
    userScissors += 1;
    computerChoiceProcess();
    resultProcedure();
});

//Function for result Procedure

function resultProcedure() {
    if (userRock > 0 && computerChoice === 0) {
        result.innerText = "Computer chose rock, Its a Tie 😀";
    } else if (userRock > 0 && computerChoice === 1) {
        result.innerText = "Computer chose Paper, You LOSE! ❌";
    } else if (userRock > 0 && computerChoice === 2) {
        result.innerText = "Computer chose Scissors, You win! 🎊";
    } else if (userPaper > 0 && computerChoice === 0) {
        result.innerText = "Computer chose Rock, You win! 🎊";
    } else if (userPaper > 0 && computerChoice === 1) {
        result.innerText = "Computer chose Paper, Its a Tie 😀";
    } else if (userPaper > 0 && computerChoice === 2) {
        result.innerText = "Computer chose Scissors, You LOSE! ❌";
    } else if (userScissors > 0 && computerChoice === 0) {
        result.innerText = "Computer chose Rock, You LOSE! ❌";
    } else if (userScissors > 0 && computerChoice === 1) {
        result.innerText = "Computer chose Paper, You win! 🎊";
    } else if (userScissors > 0 && computerChoice === 2) {
        result.innerText = "Computer chose Scissors, Its a Tie 😀";
    } else {
        result.innerText = "Error";
    }
}
