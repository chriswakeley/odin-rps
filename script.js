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

function determinePlayerWon(playerSelection, computerSelection){
    if(playerSelection === "Rock"){
        return computerSelection === "Scissors" ? true : false;
    }
    if(playerSelection === "Scissors"){
        return computerSelection === "Paper" ? true : false;
    }
    return computerSelection === "Rock" ? true : false;
}

function incrementScoreIcons(scoreIconList){
    for(let i = 0; i < scoreIconList.length; i++){
        if(!scoreIconList[i].classList.contains("won-round")){
            scoreIconList[i].classList.toggle("won-round");
            if(i === scoreIconList.length - 1){
                return true;
            }
            return false;
        }
    }
}

function playRound(e){
    const computerSelection = getComputerChoice();
    const computerButton = document.querySelector(`.computer .${computerSelection.toLocaleLowerCase()}`);
    const playerSelection = e.target.textContent;
    const gameInfo = document.querySelector('.game-info');
    if(playerSelection === computerSelection){
        gameInfo.textContent = "It's a Tie";
        e.target.classList.toggle("tie-button");
        computerButton.classList.toggle("tie-button");
    }
    else{
        const didPlayerWin = determinePlayerWon(playerSelection, computerSelection);
        let matchOver = false;
        if (didPlayerWin){
            gameInfo.textContent = "You won this round";
            e.target.classList.toggle("won-button");
            computerButton.classList.toggle("lost-button");
            const humanScoreIcons = document.querySelectorAll(".human .score-icon");
            matchOver = incrementScoreIcons(humanScoreIcons);
        }
        else {
            gameInfo.textContent = "You lost this round";
            e.target.classList.toggle("lost-button");
            computerButton.classList.toggle("won-button");
            const computerScoreIcons = document.querySelectorAll(".computer .score-icon");
            matchOver = incrementScoreIcons(computerScoreIcons);
        }
        if(matchOver){
            if(didPlayerWin){
                gameInfo.textContent = "You win the match";
            }
            else{
                gameInfo.textContent = "You lost the match";
            }
            document.querySelectorAll(".human .game-button").forEach(button => {
                button.removeEventListener('click', playRound);
            });
        }
    }
}

function endTransition(e){
    if(e.propertyName !== "border-left-color") return;
    if(this.classList.contains("won-button")) this.classList.toggle("won-button");
    if(this.classList.contains("lost-button")) this.classList.toggle("lost-button");
    if(this.classList.contains("tie-button")) this.classList.toggle("tie-button");
}

document.querySelectorAll(".human .game-button").forEach(button => {
    button.addEventListener('click', playRound);
});

document.querySelectorAll(".game-button").forEach(button => {
    button.addEventListener('transitionend', endTransition);
});



