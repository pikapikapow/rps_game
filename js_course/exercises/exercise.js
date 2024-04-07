const gamingtoggler = document.querySelector(".gaming");
const musictoggler = document.querySelector(".music");
const techtoggler = document.querySelector(".tech");

console.log(
  document.querySelector(".js-button").classList.contains("js-button")
);

gamingtoggler.addEventListener("click", function () {
  gamingtoggler.classList.toggle("toggled");
  musictoggler.classList.remove("toggled");
  techtoggler.classList.remove("toggled");
});

musictoggler.addEventListener("click", function () {
  musictoggler.classList.toggle("toggled");
  techtoggler.classList.remove("toggled");
  gamingtoggler.classList.remove("toggled");
});

techtoggler.addEventListener("click", function () {
  techtoggler.classList.toggle("toggled");
  gamingtoggler.classList.remove("toggled");
  musictoggler.classList.remove("toggled");
});
