let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");


let result = document.querySelector(".result");
let userRock = 0;
let userPaper = 0;
let userScissors = 0;
let computerChoice;
let computerPick = 0;
let computerScorePage = document.querySelector(".computerScore");
let userScorePage = document.querySelector(".userScore");

let computerScore = 0;
let userScore = 0;

computerScorePage.innerText = `Computer = ${computerScore}`;
userScorePage.innerText = `You = ${userScore}`;




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
        computerScorePage.innerText = `Computer = ${computerScore}`;
        userScorePage.innerText = `You = ${userScore}`;
    }
    else if (userRock > 0 && computerChoice === 1) {
        result.innerText = "Computer chose Paper, You LOSE! ❌";
        computerScore += 1;
        computerScorePage.innerText = `Computer = ${computerScore}`;
        userScorePage.innerText = `You = ${userScore}`;
    }
    else if (userRock > 0 && computerChoice === 2) {
        result.innerText = "Computer chose Scissors, You win! 🎊";
        userScore += 1;
        computerScorePage.innerText = `Computer = ${computerScore}`;
        userScorePage.innerText = `You = ${userScore}`;
    }
    else if (userPaper > 0 && computerChoice === 0) {
        result.innerText = "Computer chose Rock, You win! 🎊";
        userScore += 1;
        computerScorePage.innerText = `Computer = ${computerScore}`;
        userScorePage.innerText = `You = ${userScore}`;
    }
    else if (userPaper > 0 && computerChoice === 1) {
        result.innerText = "Computer chose Paper, Its a Tie 😀";
        computerScorePage.innerText = `Computer = ${computerScore}`;
        userScorePage.innerText = `You = ${userScore}`;
    }
    else if (userPaper > 0 && computerChoice === 2) {
        result.innerText = "Computer chose Scissors, You LOSE! ❌";
        computerScore += 1;
        computerScorePage.innerText = `Computer = ${computerScore}`;
        userScorePage.innerText = `You = ${userScore}`;
    }
    else if (userScissors > 0 && computerChoice === 0) {
        result.innerText = "Computer chose Rock, You LOSE! ❌";
        computerScore += 1;
        computerScorePage.innerText = `Computer = ${computerScore}`;
        userScorePage.innerText = `You = ${userScore}`;
    }
    else if (userScissors > 0 && computerChoice === 1) {
        result.innerText = "Computer chose Paper, You win! 🎊";
        userScore += 1;
        computerScorePage.innerText = `Computer = ${computerScore}`;
        userScorePage.innerText = `You = ${userScore}`;
    }
    else if (userScissors > 0 && computerChoice === 2) {
        result.innerText = "Computer chose Scissors, Its a Tie 😀";
        computerScorePage.innerText = `Computer = ${computerScore}`;
        userScorePage.innerText = `You = ${userScore}`;
    }
    else {
        result.innerText = "Error";
    }
}
