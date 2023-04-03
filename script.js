function getComputerChoice(){
    let randomNumber = Math.random()*3;
    if (randomNumber < 1){
        return "Rock";
    }
    if (randomNumber < 2){
        return "Paper";
    }
    return "Scissors";
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a Tie";
    }
    if(playerSelection === "Rock"){
        return computerSelection === "Scissors" ? "You win" : "You lose";
    }
    if(playerSelection === "Scissors"){
        return computerSelection === "Paper" ? "You win" : "You lose";
    }
    return computerSelection === "Rock" ? "You win" : "You lose";
}

function getPlayerChoice(){
    while(true){
        let input = prompt("Enter your choice ('Rock', 'Paper', 'Scissors')");
        if (input.toLowerCase() === "rock" || 
            input.toLowerCase() === "paper" ||
            input.toLowerCase() === "scissors"){
                return input.substring(0, 1).toUpperCase() + input.substring(1).toLowerCase();
            }
        console.log(`Error: "${input}" is not a valid choice`);
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    console.log("I challenge you to a best of 5 match of Rock, Paper, Scissors");

    while(playerScore < 3 && computerScore < 3){

        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let outcome = playRound(playerChoice, computerChoice);
        console.log(outcome);
        if (outcome === "You win"){
            playerScore++;
        }
        else if (outcome === "You lose"){
            computerScore++;
        }
        console.log(`Your score is ${playerScore} and my score is ${computerScore}`);
    }
    if(playerScore > computerScore){
        console.log("Looks like you beat me");
    }
    else {
        console.log("Thought so, I win");
    }
}

game();