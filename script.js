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
    console.log("You win");
    statusEl.classList.add("show");
  }
}
btns.forEach((btn) => btn.addEventListener("click", whenClicked));
