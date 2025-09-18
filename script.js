let humanScore = 0;
let computerScore = 0;
let rounds = 0;
let finalWinner = '';

function playRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    referee(humanSelection, computerSelection);
}

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    if(randomChoice == 1){
        randomChoice = 'rock';
    }else if(randomChoice == 2){
        randomChoice = "paper";
    }else if(randomChoice == 3){
        randomChoice = "scissor";
    }
    
    return randomChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Please Input Your Choice");
    return humanChoice;
}

function referee(humanSelection, computerSelection) {
    let winner;
    
    const rules = {
        rock: "paper",
        paper: "scissors",
        scissors: "rock"
    }

    if(humanSelection === computerSelection){
        console.log('It\'s a tie');
        return;
    }

    if(rules[humanSelection] == computerSelection) {
        // computer win
        winner = "Computer";
        computerScore++;
    }else {
        // human win
        winner = "Human";
        humanScore++;
    }

    console.log("Round #" + (rounds + 1));
    console.log("Human: " + humanSelection + " | Computer: " + computerSelection);
    console.log("Winner: " + winner);
    console.log("Scores: Human: " + humanScore + " Computer: " + computerScore);

    rounds++;
}

function resetValues() {
    humanScore = 0;
    computerScore = 0;
    rounds = 0;
    finalWinner = "";

    document.getElementById("round-count").textContent = '';
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function playGame() {
    resetValues();

    while (rounds < 5) {
        playRound();
    }

    finalWinner = humanScore > computerScore ? 'Human' : 'Computer';
    alert('Final winner: ' + finalWinner);

    document.getElementById("round-count").textContent = rounds + " Rounds";
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;

    document.getElementById("play-button").textContent = 'Play Again';
}


// generate random pick for computer `getComputerChoice`
// get human pick `getHumanChoice`