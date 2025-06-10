function getComputerChoice () {
    // randomly return the following strings “rock”, “paper” or “scissors”.
    let computer;
    let num = Math.random()
    if (num <= 0.333333) {
        computer = "rock";
    } else if (num > 0.333333 && num <= 0.66666 ) {
        computer = "paper";
    } else if (num > 0.666666 && num <= 1) {
        computer = "scissors";
    }
    return computer;
}

function getHumanChoice () {
    let human = prompt("Choose rock, paper, or scissors ")
    return human;
}

function scoreKeeper() {
    if (humanScore > computerScore ) {
        console.log("You are winning!");
    } else if (humanScore < computerScore) {
        console.log("You are loosing! Don't let A.I take over!!");
    } else if (humanScore == computerScore) {
        console.log("It's a tie! Lock in!");
    } else {
        console.log("Broken");
    }
}

let humanScore = 0;
let computerScore = 0;

let humanSelection = getHumanChoice().toLowerCase();
let computerSelection = getComputerChoice().toLowerCase();

function PlayRound (humanChoice, computerChoice) {
    if (humanChoice == "rock" &&
            computerChoice == "paper") {
            computerScore++;
            console.log("You loose! Paper beats rock");
    } else if (humanChoice == "paper" &&
            computerChoice == "rock") {
            humanScore++;
            console.log("You win! Paper beats rock");
    } else if (humanChoice == "scissors" &&
            computerChoice == "paper") {
            humanScore++;
            console.log("You win! Scissors beats paper");
    } else if (humanChoice == "paper" &&
            computerChoice == "scissors") {
            computerScore++;
            console.log("You loose! Scissors beats paper"); 
    } else if (humanChoice == "rock" &&
            computerChoice == "scissors") {
            humanScore++;
            console.log("You win! Rock beats scissors");
    } else if (humanChoice == "scissors" &&
            computerChoice == "rock") {
            computerScore++;
            console.log("You loose! Rock beats scissors");
        } else if (humanChoice == computerChoice) {
            console.log("No one wins! Its a tie");
        } else {
            console.error("Invalid output");
        }
    return 0;
}

function PlayGame() {
    PlayRound(humanSelection, computerSelection);
    console.log("The score is " + humanScore + " to " + computerScore);
    humanSelection = getHumanChoice().toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    PlayRound(humanSelection, computerSelection);
    console.log("The score is " + humanScore + " to " + computerScore);
    humanSelection = getHumanChoice().toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    PlayRound(humanSelection, computerSelection);
    console.log("The score is " + humanScore + " to " + computerScore);
    humanSelection = getHumanChoice().toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    PlayRound(humanSelection, computerSelection);
    console.log("The score is " + humanScore + " to " + computerScore);
    humanSelection = getHumanChoice().toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    PlayRound(humanSelection, computerSelection);
    console.log("The score is " + humanScore + " to " + computerScore);
    scoreKeeper();
}

PlayGame();