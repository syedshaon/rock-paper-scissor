let numberComputerOwn = 0;
let numberUserOwn = 0;

const playRound = () => {
  const Choices = ["Rock", "Paper", "Scissor"];

  function getComputerChoice() {
    return Choices[Math.floor(Math.random() * Choices.length)];
  }

  const computerSelection = getComputerChoice().toUpperCase();

  const playerSelection = prompt("Rock, Paper or Scissor???").toUpperCase();
  console.log(`You selected ${playerSelection}`);
  console.log(`Computer selected ${computerSelection}`);

  let playerSelectionValid = false;
  if (
    playerSelection === "ROCK" ||
    playerSelection === "PAPER" ||
    playerSelection === "SCISSOR"
  ) {
    playerSelectionValid = true;
  } else {
    playerSelectionValid = false;
    console.log("Please enter a valid entry");

    // location.reload();
  }

  if (playerSelectionValid) {
    // console.log(computerSelection, playerSelection);
    if (computerSelection === playerSelection) {
      console.log("It was a tie no one won!");
    } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
      console.log("You Won");
      numberUserOwn += 1;
    } else if (computerSelection === "ROCK" && playerSelection === "SCISSOR") {
      console.log("Computer Won");
      numberComputerOwn += 1;
    } else if (computerSelection === "PAPER" && playerSelection === "SCISSOR") {
      console.log("You Won");
      numberUserOwn += 1;
    } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
      console.log("Computer Won");
      numberComputerOwn += 1;
    } else if (computerSelection === "SCISSOR" && playerSelection === "ROCK") {
      console.log("You Won");
      numberUserOwn += 1;
    } else if (computerSelection === "SCISSOR" && playerSelection === "PAPER") {
      console.log("Computer Won");
      numberComputerOwn += 1;
    }
  }
};

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  console.log(
    `Computer worn ${numberComputerOwn} times, and you worn  ${numberUserOwn} times`
  );

  if (numberComputerOwn == numberUserOwn) {
    console.log("Overall, it was a tie. Play again?");
  } else if (numberComputerOwn > numberUserOwn) {
    console.log("Computer WON!");
  } else if (numberComputerOwn < numberUserOwn) {
    console.log("You WON!");
  }
}

game();
