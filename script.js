//Computer randomly choosing rock, paper, scissors
function computerPlay() {
    let weapons = ["rock", "paper", "scissors"];
    let weapon = weapons[Math.floor(Math.random()*weapons.length)];
    return weapon;
}
//Logic of RPS
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "Computer wins!";
        } else {
            return "You won!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "Computer wins!";
        } else {
            return "You won!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "Computer wins!";
        } else {
            return "You won!";
        }
    }
  }

//Five rounds of the game
function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log("You choosed " + playerSelection);
        console.log("Computer choosed " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
     }
  }

const playerSelection= "rock".toLowerCase();
const computerSelection = computerPlay();

game();
