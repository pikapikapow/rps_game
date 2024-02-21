const btns = document.querySelectorAll(".btn");

function whenClicked() {
  console.log("clicked");
  console.log(this.dataset.choice);
}

btns.forEach((btn) => btn.addEventListener("click", whenClicked));
