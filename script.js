const btns = document.querySelectorAll(".btn");
const userChoice = document.querySelector("#user-choice");
const compChoice = document.querySelector("#computer-choice");
const statusEl = document.querySelector(".status");

// console.log(compChoice);

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
  } else if (
    compChoice.dataset.choice === "rock" &&
    userChoice.dataset.choice === "scissors"
  ) {
    statusEl.innerHTML = "You lost. Try again.";
  } else if (
    compChoice.dataset.choice === "rock" &&
    userChoice.dataset.choice === "paper"
  ) {
    statusEl.innerHTML = "You won! Good job.";
  } else if (
    compChoice.dataset.choice === "scissors" &&
    userChoice.dataset.choice === "rock"
  ) {
    statusEl.innerHTML = "You won! Good job.";
  } else if (
    compChoice.dataset.choice === "scissors" &&
    userChoice.dataset.choice === "paper"
  ) {
    statusEl.innerHTML = "You lost. Try again.";
  } else if (
    compChoice.dataset.choice === "paper" &&
    userChoice.dataset.choice === "scissors"
  ) {
    statusEl.innerHTML = "You won! Good job.";
  } else {
    statusEl.innerHTML = "You lost. Try again.";
  }
}
btns.forEach((btn) => btn.addEventListener("click", whenClicked));
