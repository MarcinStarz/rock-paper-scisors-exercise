const choicePlayer = document.querySelector('.youChoice');
const choicePC = document.querySelector('.pcChoice');

const divPlayer = document.createElement('img');
divPlayer.classList.add('choicePlayer');

const divPC = document.createElement('img');
divPC.classList.add('choicePC');

const winnerContainer = document.querySelector('#winnerContainer')
const winnerLoser = document.createElement('span');

const playerPoints = document.querySelector('.playerScore')
const pcPoints = document.querySelector('.pcScore')
let counterPlayer = 0;
let counterPC = 0;

//Player choosing r/p/s
const btnRock = document.getElementsByClassName('rock')[0];
btnRock.addEventListener('click', function() {
    if (counterPlayer == 5 || counterPC == 5) {
        return;
    }
    let playerSelection = 'rock';
    let computerSelection = computerPlay();
    
    divPlayer.src = "icons/png/rock.png"
    choicePlayer.appendChild(divPlayer);
    let divPC = imgPC(computerSelection);
    choicePC.appendChild(divPC);
    
    playRound(playerSelection, computerSelection);
    gameWinner();
});
//Buttons r/p/s
const btnPaper = document.getElementsByClassName('paper')[0];
btnPaper.addEventListener('click', function() {
    if (counterPlayer == 5 || counterPC == 5) {
        return;
    }
    let playerSelection = 'paper';
    let computerSelection = computerPlay();
    
    divPlayer.src = "icons/png/paper.png"
    choicePlayer.appendChild(divPlayer);
    let divPC = imgPC(computerSelection);
    choicePC.appendChild(divPC);
    
    playRound(playerSelection, computerSelection);
    gameWinner();
});

const btnScissors = document.getElementsByClassName('scissors')[0];
btnScissors.addEventListener('click', function() {
    if (counterPlayer == 5 || counterPC == 5) {
        return;
    }
    let playerSelection = 'scissors';
    let computerSelection = computerPlay();
    
    divPlayer.src = "icons/png/scissors.png"
    choicePlayer.appendChild(divPlayer);
    let divPC = imgPC(computerSelection);
    choicePC.appendChild(divPC);
    
    playRound(playerSelection, computerSelection);
    gameWinner();
});

//Computer randomly choosing RPS
function computerPlay() {
    let weaponsPC = ["rock", "paper", "scissors"];
    let weaponPC = weaponsPC[Math.floor(Math.random()*weaponsPC.length)];
    return weaponPC;
}

function imgPC(computerSelection) {
    if (computerSelection == 'rock') {
        divPC.src = "icons/png/rock.png";
        return divPC;
    } else if (computerSelection == 'paper') {
        divPC.src = "icons/png/paper.png";
        return divPC;
    } else {
        divPC.src = "icons/png/scissors.png";
        return divPC;
    }
}
//Logic of RPS
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        winnerLoser.textContent = 'DRAW!';
        winnerContainer.appendChild(winnerLoser);
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            winnerLoser.textContent = 'COMPUTER WON!';
            winnerContainer.appendChild(winnerLoser);
            counterPC++;
            pcPoints.textContent = counterPC.toString();
        } else {
            winnerLoser.textContent = 'YOU WON!';
            winnerContainer.appendChild(winnerLoser);
            counterPlayer++;
            playerPoints.textContent = counterPlayer.toString();
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            winnerLoser.textContent = 'COMPUTER WON!';
            winnerContainer.appendChild(winnerLoser);
            counterPC++;
            pcPoints.textContent = counterPC.toString();
        } else {
            winnerLoser.textContent = 'YOU WON!';
            winnerContainer.appendChild(winnerLoser);
            counterPlayer++;
            playerPoints.textContent = counterPlayer.toString();
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            winnerLoser.textContent = 'COMPUTER WON!';
            winnerContainer.appendChild(winnerLoser);
            counterPC++;
            pcPoints.textContent = counterPC.toString();
        } else {
            winnerLoser.textContent = 'YOU WON!';
            winnerContainer.appendChild(winnerLoser);
            counterPlayer++;
            playerPoints.textContent = counterPlayer.toString();
        }
    }
  }
//Function summarizing who is the winner
  function gameWinner() {
      if (counterPC == 5 && counterPlayer == 5 ) {
        winnerLoser.textContent = "GAME OVER. IT'S A DRAW.";
        winnerContainer.appendChild(winnerLoser);
      } else if (counterPlayer > counterPC && counterPlayer == 5) {
        winnerLoser.textContent = "GAME OVER. YOU WON!";
        winnerContainer.appendChild(winnerLoser);
      } else if (counterPlayer < counterPC && counterPC == 5)
        winnerLoser.textContent = "GAME OVER. YOU LOST.";
        winnerContainer.appendChild(winnerLoser);
  }



