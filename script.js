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

function endGame() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

let gameOver = false;
function scoreKeeper() {

    if (gameOver) {
        return "The game is over\n Reload page to play again!";
    }

    if (gameOver == false) {
        if (humanScore >= 5) {
            gameOver = true;
            endGame();
            return "The human wins!\n AI will rue this day!";
        }
        if (computerScore >= 5) {
            gameOver = true;
            endGame();
            return "The AI wins\n Society is doomed and were all cooked\n );";
        }
        if (humanScore > computerScore ) {
         return "You are winning!\n The score is " + humanScore + " to " + computerScore;
        }
        if (humanScore < computerScore) {
            return "You are loosing! Don't let A.I take over!!\n The score is " + humanScore + " to " + computerScore;
        }
        if (humanScore == computerScore) {
            return "It's a tie! Lock in!\n The score is " + humanScore + " to " + computerScore;
        }
  }

 
}

let humanScore = 0;
let computerScore = 0;

function playRockRound () {
    if (gameOver) {
        return endGame();
    }
    let humanChoice = "rock";
    let computerChoice = getComputerChoice().toLowerCase();

    if (humanChoice == "rock" &&
            computerChoice == "paper") {
            computerScore++;
            console.log("You loose! Paper beats rock");
    } else if (humanChoice == "rock" &&
            computerChoice == "scissors") {
            humanScore++;
            console.log("You win! Rock beats scissors");
    } else if (humanChoice == computerChoice) {
            console.log("No one wins! Its a tie");
        } else {
            console.error("Invalid output");
        }
    console.log("Human: " + humanChoice + "\n Computer: " + computerChoice);
    return 0;
}

function playPaperRound () {
    if (gameOver) {
        return endGame();
    }
    let humanChoice = "paper";
    let computerChoice = getComputerChoice().toLowerCase();

    if (humanChoice == "paper" &&
            computerChoice == "rock") {
            humanScore++;
            console.log("You win! Paper beats rock");
    } else if (humanChoice == "paper" &&
            computerChoice == "scissors") {
            computerScore++;
            console.log("You loose! Scissors beats paper"); 
    } else if (humanChoice == computerChoice) {
            console.log("No one wins! Its a tie");
    } else {
            console.error("Invalid output");
    }
    console.log("Human: " + humanChoice + "\n Computer: " + computerChoice);
    return 0;
}

function playScissorsRound () {
    if (gameOver) {
        return endGame();
    }

    let humanChoice = "scissors"
    let computerChoice = getComputerChoice().toLowerCase();

    if (humanChoice == "scissors" &&
            computerChoice == "paper") {
            humanScore++;
            console.log("You win! Scissors beats paper");
    } else if (humanChoice == "scissors" &&
            computerChoice == "rock") {
            computerScore++;
            console.log("You loose! Rock beats scissors");
        } else if (humanChoice == computerChoice) {
            console.log("No one wins! Its a tie");
        } else {
            console.error("Invalid output");
        }
    console.log("Human: " + humanChoice + "\n Computer: " + computerChoice);
    return 0;
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const score = document.querySelector("h1")
score.innerText = scoreKeeper();

rock.addEventListener('click', () => {
    playRockRound();
    score.innerText = scoreKeeper();
});

paper.addEventListener('click', () => {
    playPaperRound();
    score.innerText = scoreKeeper();
});

scissors.addEventListener('click', () => {
    playScissorsRound();
    score.innerText = scoreKeeper();
})
