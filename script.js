//Computer randomly choosing RPS
function computerPlay() {
    let weaponsPC = ["rock", "paper", "scissors"];
    let weaponPC = weaponsPC[Math.floor(Math.random()*weaponsPC.length)];
    return weaponPC;
}

//Player choosing RPS
function playerPlay() {
    let weaponsPlayer = ["rock", "paper", "scissors"];
    let weaponPick = prompt('Type in your weapon (rock/paper/scissors): ', '').toLowerCase().trim();
    if (weaponsPlayer.includes(weaponPick)) {
        return weaponPick;
    } else {
        return weaponPick = prompt("Wrong value! Try again:", '');
    }
}

//Logic of RPS
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            return "Computer wins!";
        } else {
            playerScore++;
            return "You won!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++;
            return "Computer wins!";
        } else {
            playerScore++;
            return "You won!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            return "Computer wins!";
        } else {
            playerScore++;
            return "You won!";
        }
    }
  }

//Five rounds of the game
function game() {
    for (let i = 0; i < 5; i++) {
        console.log("ROUND " + ++round);
        let computerSelection = computerPlay();
        let playerSelection = playerPlay();
        console.log("You choosed " + playerSelection);
        console.log("Computer choosed " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player: " + playerScore + " Computer: " + computerScore);
     }
  }

//Choosing a winner
function winner() {
    if (playerScore == computerScore) {
        return "DRAW";
    } else if (playerScore > computerScore) {
        return "YOU WON THE GAME!";
    } else {
        return "THE COMPUTER WON THE GAME!";
    }
}

let playerScore = 0;
let computerScore = 0;
let round = 0

game();
console.log(winner());
