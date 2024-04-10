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

const nums = [10, 20, 30];
nums[2] = 99;
function getLastValue(Array) {
  console.log(Array[Array.length - 1]);
}

getLastValue([20, 30, 42]);

function arraySwap(array) {
  const lastIndex = array.length - 1;

  const lastValue = array[lastIndex];
  const firstValue = array[0];

  array[0] = lastValue;
  array[lastIndex] = firstValue;

  return array;
}
console.log(arraySwap([22, 32, 47, 21, 90, 37]));

for (let i = 0; i <= 5; i++) {
  console.log(i * 2);
}

for (let i = 5; i >= 0; i -= 1) {
  console.log(i);
}

// let i = 0;

// while (i <= 5) {
//   console.log(i * 2);
//   i++;
// }

// let j = 5;

// while (j >= 0) {
//   console.log(i);
//   j -= 1;
// }

const array = [1, 2, 3];
const result = [];

for (let i = 0; i < array.length; i++) {
  result.push(array[i] + 1);
}

console.log(result);

function addOne(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
  }

  return result;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));
