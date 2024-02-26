const btns = document.querySelectorAll(".btn");
const userChoice = document.querySelector("#user-choice");
const compChoice = document.querySelector("#computer-choice");
const statusEl = document.querySelector(".status");
const winCount = document.getElementById("win-counter");
const lossCount = document.getElementById("loss-counter");
const tieCount = document.getElementById("tie-counter");
const resetBtn = document.getElementById("reset");

// console.log(compChoice);

let countWin = 0;
let countLoss = 0;
let countTie = 0;

function whenClicked() {
  // console.log("clicked");
  // console.log(this.dataset.choice);
  userChoice.innerHTML = this.innerHTML;
  userChoice.dataset.choice = this.dataset.choice;
  getRandom();
  compChoices();
}

function getRandom() {
  let randNum = Math.floor(Math.random() * btns.length);
  // console.log(randNum);
  // console.log(btns[randNum]);
  compChoice.innerHTML = btns[randNum].innerHTML;
  compChoice.dataset.choice = btns[randNum].dataset.choice;

  // console.log(btns[randNum].dataset.choice);
}

function compChoices() {
  if (compChoice.dataset.choice === userChoice.dataset.choice) {
    statusEl.innerHTML = "You tied. Try again.";
    countTie++;
  } else if (
    compChoice.dataset.choice === "rock" &&
    userChoice.dataset.choice === "scissors"
  ) {
    statusEl.innerHTML = "You lost. Try again.";
    countLoss++;
  } else if (
    compChoice.dataset.choice === "rock" &&
    userChoice.dataset.choice === "paper"
  ) {
    statusEl.innerHTML = "You won! Good job.";
    countWin++;
  } else if (
    compChoice.dataset.choice === "scissors" &&
    userChoice.dataset.choice === "rock"
  ) {
    statusEl.innerHTML = "You won! Good job.";
    countWin++;
  } else if (
    compChoice.dataset.choice === "scissors" &&
    userChoice.dataset.choice === "paper"
  ) {
    statusEl.innerHTML = "You lost. Try again.";
    countLoss++;
  } else if (
    compChoice.dataset.choice === "paper" &&
    userChoice.dataset.choice === "scissors"
  ) {
    statusEl.innerHTML = "You won! Good job.";
    countWin++;
  } else {
    statusEl.innerHTML = "You lost. Try again.";
    countLoss++;
  }

  winCount.innerHTML = countWin;
  lossCount.innerHTML = countLoss;
  tieCount.innerHTML = countTie;
}

function resetCount() {
  countWin = 0;
  countLoss = 0;
  countTie = 0;
  console.log("Pie");
  winCount.innerHTML = countWin;
  lossCount.innerHTML = countLoss;
  tieCount.innerHTML = countTie;
}

resetBtn.addEventListener("click", resetCount);

btns.forEach((btn) => btn.addEventListener("click", whenClicked));
