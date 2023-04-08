let numberAlienOwn = 0;
let numberUserOwn = 0;

document.getElementById("reload").addEventListener("click", () => {
  location.reload();
});

function showResult() {
  if (numberAlienOwn === 0 && numberUserOwn === 0) {
    document.getElementById("result").style.display = "none";
  } else {
    document.getElementById("result").style.display = "flex";
  }

  return (document.getElementById(
    "result"
  ).innerHTML = `<div class="board" id="board">
        
        <p class="round">After round ${clickCounter}</p>
        <p>Your score is: <span class="score">${numberUserOwn}</span></p>
        <p>Alien's score is: <span class="score">${numberAlienOwn}</span></p>
      </div>
      <div class="winner" id="winner">
        <p>${
          numberAlienOwn == numberUserOwn
            ? "It was a tie; <br> Please play again"
            : numberAlienOwn > numberUserOwn
            ? "Alien is the Winner!"
            : "You are the Winner!"
        }</p>
        
        ${
          numberAlienOwn == numberUserOwn
            ? ""
            : numberAlienOwn > numberUserOwn
            ? "<img src='./images/zerator.gif' alt='winner' />"
            : "<img src='./images/kids.gif' alt='winner' />"
        }
      </div>`);
}

const Choices = ["Rock", "Paper", "Scissor"];

function getAlienChoice() {
  return Choices[Math.floor(Math.random() * Choices.length)];
}

let playerSelection = "x";
let clickCounter = 0;

document.getElementById("choices").addEventListener("click", (e) => {
  playerSelection = e.target.value.toString().toUpperCase();
  const alienSelection = getAlienChoice().toUpperCase();
  clickCounter += 1;

  if (clickCounter <= 5) {
    if (alienSelection === playerSelection) {
      document.getElementById(
        "round"
      ).innerText = `You selected ${playerSelection} and Alien also selected ${alienSelection}. It was a tie!`;
      showResult();
    } else if (alienSelection === "ROCK" && playerSelection === "PAPER") {
      document.getElementById(
        "round"
      ).innerText = `You selected ${playerSelection} and Alien selected ${alienSelection}. You Won!`;

      console.log("You Won");
      numberUserOwn += 1;
      showResult();
    } else if (alienSelection === "ROCK" && playerSelection === "SCISSOR") {
      document.getElementById(
        "round"
      ).innerText = `You selected ${playerSelection} and Alien selected ${alienSelection}. Alien Won!`;

      console.log("alien Won");
      numberAlienOwn += 1;
      showResult();
    } else if (alienSelection === "PAPER" && playerSelection === "SCISSOR") {
      document.getElementById(
        "round"
      ).innerText = `You selected ${playerSelection} and Alien selected ${alienSelection}. You Won!`;

      console.log("You Won");
      numberUserOwn += 1;
      showResult();
    } else if (alienSelection === "PAPER" && playerSelection === "ROCK") {
      document.getElementById(
        "round"
      ).innerText = `You selected ${playerSelection} and Alien selected ${alienSelection}. Alien Won!`;

      console.log("alien Won");
      numberAlienOwn += 1;
      showResult();
    } else if (alienSelection === "SCISSOR" && playerSelection === "ROCK") {
      document.getElementById(
        "round"
      ).innerText = `You selected ${playerSelection} and Alien selected ${alienSelection}. You Won!`;

      console.log("You Won");
      numberUserOwn += 1;
      showResult();
    } else if (alienSelection === "SCISSOR" && playerSelection === "PAPER") {
      document.getElementById(
        "round"
      ).innerText = `You selected ${playerSelection} and Alien selected ${alienSelection}. Alien Won!`;

      console.log("alien Won");
      numberAlienOwn += 1;
      showResult();
    }
    if (clickCounter === 5) {
      document.getElementById("reload").style.display = "block";
    }
  } else {
    document.getElementById(
      "round"
    ).innerText = `You already played 5 round. Please reload to play again.`;
    // document.getElementById("reload").style.display = "block";
  }
});
