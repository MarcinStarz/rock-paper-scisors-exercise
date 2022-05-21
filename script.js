const choicePlayer = document.querySelector('.youChoice');
const choicePC = document.querySelector('.pcChoice');

// Create icons with chosen r/p/s 
const divPlayer = document.createElement('img');
divPlayer.classList.add('choicePlayer');

const divPC = document.createElement('img');
divPC.classList.add('choicePC');

// Selector for player counter below
const youScore = document.querySelector('.youScore')
// Create score counters for player
const you = document.createElement('span');
you.classList.add('you');
you.textContent = 'YOU';

const playerScore = document.createElement('span');
playerScore.classList.add('playerScore');
playerScore.textContent = '0';

// Selector for computer counter below
const computerScore = document.querySelector('.computerScore')
// Create score counters for PC
const pc = document.createElement('span');
pc.classList.add('pc');
pc.textContent = 'PC';


const pcScore = document.createElement('span');
pcScore.classList.add('pcScore');
pcScore.textContent = '0';

// VS span
const vs = document.querySelector('.vs');

// Winner container
const winnerContainer = document.querySelector('#winnerContainer')
const winnerLoser = document.createElement('span');

let counterPlayer = 0;
let counterPC = 0;

let hideCounter = document.querySelector('#counterContainer').style.display = 'none';


// Player choosing r/p/s
const btnRock = document.getElementsByClassName('rock')[0];
btnRock.addEventListener('click', function() {
    hideCounter = document.querySelector('#counterContainer').style.display = '';
    youScore.appendChild(you);
    youScore.appendChild(playerScore);
    computerScore.appendChild(pc);
    computerScore.appendChild(pcScore);
    vs.textContent = 'VS';

    
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
    removeThem();
});
//Buttons r/p/s
const btnPaper = document.getElementsByClassName('paper')[0];
btnPaper.addEventListener('click', function() {
    hideCounter = document.querySelector('#counterContainer').style.display = '';
    youScore.appendChild(you);
    youScore.appendChild(playerScore);
    computerScore.appendChild(pc);
    computerScore.appendChild(pcScore);
    vs.textContent = 'VS';

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
    removeThem();
});

const btnScissors = document.getElementsByClassName('scissors')[0];
btnScissors.addEventListener('click', function() {
    hideCounter = document.querySelector('#counterContainer').style.display = '';
    youScore.appendChild(you);
    youScore.appendChild(playerScore);
    computerScore.appendChild(pc);
    computerScore.appendChild(pcScore);
    vs.textContent = 'VS';

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
    removeThem();
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
            const pcPoints = document.querySelector('.pcScore')
            winnerLoser.textContent = 'COMPUTER WON!';
            winnerContainer.appendChild(winnerLoser);
            counterPC++;
            pcPoints.textContent = counterPC.toString();
        } else {
            const playerPoints = document.querySelector('.playerScore')
            winnerLoser.textContent = 'YOU WON!';
            winnerContainer.appendChild(winnerLoser);
            counterPlayer++;
            playerPoints.textContent = counterPlayer.toString();
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            const pcPoints = document.querySelector('.pcScore')
            winnerLoser.textContent = 'COMPUTER WON!';
            winnerContainer.appendChild(winnerLoser);
            counterPC++;
            pcPoints.textContent = counterPC.toString();
        } else {
            const playerPoints = document.querySelector('.playerScore')
            winnerLoser.textContent = 'YOU WON!';
            winnerContainer.appendChild(winnerLoser);
            counterPlayer++;
            playerPoints.textContent = counterPlayer.toString();
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            const pcPoints = document.querySelector('.pcScore')
            winnerLoser.textContent = 'COMPUTER WON!';
            winnerContainer.appendChild(winnerLoser);
            counterPC++;
            pcPoints.textContent = counterPC.toString();
        } else {
            const playerPoints = document.querySelector('.playerScore')
            winnerLoser.textContent = 'YOU WON!';
            winnerContainer.appendChild(winnerLoser);
            counterPlayer++;
            playerPoints.textContent = counterPlayer.toString();
        }
    }
}
//Function summarizing who is the winner
function gameWinner() {
    if (counterPC == 5 && counterPlayer == 5) {
        winnerLoser.textContent = "GAME OVER. IT'S A DRAW.";
        winnerContainer.appendChild(winnerLoser);
    } else if (counterPlayer > counterPC && counterPlayer == 5) {
        winnerLoser.textContent = "GAME OVER. YOU WON!";
        winnerContainer.appendChild(winnerLoser);
    } else if (counterPlayer < counterPC && counterPC == 5)
    winnerLoser.textContent = "GAME OVER. YOU LOST.";
    winnerContainer.appendChild(winnerLoser);
}

// RESTART THE GAME
let restartButton = document.querySelector('#restart').style.display = 'none';
let parentButtons = document.querySelector('#buttons')
function removeThem() {
    if (counterPC == 5 || counterPlayer == 5) {
        parentButtons.remove();
        restartButton = document.querySelector('#restart').style.display = '';
    } else return;
};


