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
    return "Your choice was " + human;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

let humanAnswer = human;
let computerAnswer = computer;

// let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();

function PlayRound (humanChoice, computerChoice) {
    if (humanChoice == "rock" || humanChoice == "Rock" || humanChoice == "ROCK" &&
        computerChoice == "paper" || computerChoice == "Paper" || computerChoice == "PAPER") {
            computerScore++;
            return "You loose! Paper beats rock";
        }
    if (humanChoice == "paper" || humanChoice == "Paper" || humanChoice == "PAPER" &&
        computerChoice == "rock" || computerChoice == "Rock" || computerChoice == "ROCK") {
            humanScore++;
            return "You win! Paper beats rock";
        }
     if (humanChoice == "scissors" || humanChoice == "Scissors" || humanChoice == "SCISSORS" &&
        computerChoice == "paper" || computerChoice == "Paper" || computerChoice == "PAPER") {
            humanScore++;
            return "You win! Scissors beats paper";
        }
    if (humanChoice == "paper" || humanChoice == "Paper" || humanChoice == "PAPER" &&
        computerChoice == "scissors" || computerChoice == "Scissors" || computerChoice == "SCISSORS") {
            computerScore++;
            return "You loose! Scissors beats paper";
        }
    if (humanChoice == "rock" || humanChoice == "Rock" || humanChoice == "ROCK" &&
        computerChoice == "scissors" || computerChoice == "Scissors" || computerChoice == "SCISSORS") {
            humanScore++;
            return "You win! Rock beats scissors";
        }
    if (humanChoice == "scissors" || humanChoice == "Scissors" || humanChoice == "SCISSORS" &&
        computerChoice == "rock" || computerChoice == "Rock" || computerChoice == "ROCK") {
            computerScore++;
            return "You loose! Rock beats scissors";
        }
}
// Try to play one round. Figure out how to get human function to prompt twice
console.log(PlayRound(humanAnswer, computerAnswer));