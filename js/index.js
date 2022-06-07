let playerWinCount = 0;
let computerWinCount = 0;
let totalRoundsPlayed = 0;

function playerWon() {
  playerWinCount++;
  totalRoundsPlayed++;
}
function computerWon() {
  computerWinCount++;
  totalRoundsPlayed++;
}
function draw() {
  totalRoundsPlayed++;
}
function printCurrentStat() {
  console.log("Player won: " + playerWinCount);
  console.log("Computer won: " + computerWinCount);
  console.log("Total rounds played: " + totalRoundsPlayed);
}
function computerPlay() {
  let play = '';
  let randomNum = Math.random();
  if(randomNum >= 0 && randomNum < 0.33) {
    play = 'rock';
  } else if(randomNum >= 0.33 && randomNum < 0.66) {
    play = 'paper';
  } else if(randomNum >= 0.66 && randomNum < 1) {
    play = 'scissors';
  }
  return play;
}
function userPlay() {
  let play = '';
  let randomNum = Math.random();
  if(randomNum >= 0 && randomNum < 0.33) {
    play = 'rock';
  } else if(randomNum >= 0.33 && randomNum < 0.66) {
    play = 'paper';
  } else if(randomNum >= 0.66 && randomNum < 1) {
    play = 'scissors';
  }
  return play;
}
let computerSelection = computerPlay();
let playerSelection = '';
// playerWon, computerWon
function playRound(playerSelection, computerSelection) {
  if((playerSelection === 'rock' && computerSelection === 'rock')
  || (playerSelection === 'paper' && computerSelection === 'paper')
  || (playerSelection === 'scissors' && computerSelection === 'scissors')) {
    console.log("Draw! Both players played: " + playerSelection);
    draw();

  } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log("You win! Rock beats scissors");
    playerWon();
  } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log("You Lose! Computer's rock beats scissors");
    computerWon();
  } else if(playerSelection === 'paper' && computerSelection === 'rock') {
    console.log("You Win! Paper beats rock");
    playerWon();
  } else if(playerSelection === 'rock' && computerSelection === 'paper') {
    console.log("You Lose! Computer's paper beats rock");
    computerWon();
  } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log("You Win! Scissors beats paper");
    playerWon();
  } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log("You Lose! Computer's scissors beats paper");
    computerWon();
  }
}

/*
/ Let the user know we are playing a game out of 5
/ When the user clicks a "PLAY" button, begin the game.
/ Count the wins for each player (And show it on the screen)
/ At the end of 5 turns, let the user know who won.
/
*/


// Change player score in HTML
function displayPlayerScore() {
  let playerScore = document.querySelector(".player-won-count");
  playerScore.textContent = playerWinCount;
}
function displayComputerScore() {
  let computerScore = document.querySelector(".computer-won-count");
  computerScore.textContent = computerWinCount;
}
function displayTotalRounds() {
  let totalRounds = document.querySelector(".total-rounds-count");
  totalRounds.textContent = totalRoundsPlayed;
}
function changePlayerImage(play) {
  let playerImage = document.querySelector(".player-played");
  console.log(playerImage);
  console.log(play);
  if(play === 'rock') {
    playerImage.src = "./img/rock.jpeg";
  } else if(play === 'paper') {
    playerImage.src  = "./img/paper.jpeg";
  } else if(play === 'scissors') {
    playerImage.src  = "./img/scissors.jpeg";
  }
}
function changeComputerImage(play) {
  let computerImage = document.querySelector(".computer-played");
  if(play === 'rock') {
    computerImage.src = "./img/rock.jpeg";
  } else if(play === 'paper') {
    computerImage.src  = "./img/paper.jpeg";
  } else if(play === 'scissors') {
    computerImage.src  = "./img/scissors.jpeg";
  }
}
function gameEnded() {
  let message = document.querySelector(".game-end-notification");
  if(playerWinCount === 5) {
    message.innerHTML = "Player Won! Game Ended.";
    return true;
  } else if(computerWinCount === 5) {
    message.innerHTML = "Opponent Won! Game Ended.";
    return true;
  }
  return false;
}
function game() {
  if(!gameEnded()) {
    console.log("Playing game now!"); // is working
    computerSelection = computerPlay();
    playerSelection = userPlay();
    console.log(playRound(playerSelection, computerSelection));
    printCurrentStat();
    displayPlayerScore();
    displayComputerScore();
    displayTotalRounds();
    changePlayerImage(playerSelection);
    changeComputerImage(computerSelection);
  }
}
