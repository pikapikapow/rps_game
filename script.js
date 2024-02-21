const btns = document.querySelectorAll(".btn");
const userChoice = document.querySelector("#user-choice");
const compChoice = document.querySelector("#computer-choice");

console.log(compChoice);

function whenClicked() {
  // console.log("clicked");
  // console.log(this.dataset.choice);
  userChoice.innerHTML = this.innerHTML;
  getRandom();
}

function getRandom() {
  let randNum = Math.floor(Math.random() * btns.length);
  // console.log(randNum);
  // console.log(btns[randNum]);
  compChoice.innerHTML = btns[randNum].innerHTML;
}

btns.forEach((btn) => btn.addEventListener("click", whenClicked));
