function getComputerChoice () {
    // randomly return the following strings “rock”, “paper” or “scissors”.
    let string
    let num = Math.random()
    if (num <= 0.333333) {
        string = "rock"
    } else if (num > 0.333333 && num <= 0.66666 ) {
        string = "paper"
    } else if (num > 0.666666 && num <= 1) {
        string = "scissors"
    }
    return string
}

