// const buttonElement = document.querySelector(".js-button");

// const eventListener = () => {
//   console.log("click");
// };
// buttonElement.addEventListener("click", eventListener);

// buttonElement.removeEventListener("click", eventListener);

// buttonElement.addEventListener("click", () => {
//   console.log("click2");
// });

// greeting();
// function greeting() {
//   console.log("hello");
// }
// greeting();

// const num = 2;
// const function1 = function () {
//   console.log("hello2");
// };

// console.log(function1);
// console.log(typeof function1);
// function1();

// const object1 = {
//   num: 2,
//   fun: function () {
//     console.log("hello3");
//   },
// };
// object1.fun();

// function display(param) {
//   console.log(param);
// }
// display(2);

// function run(param) {
//   param();
// }

// run(function () {
//   console.log("hello4");
// });

setTimeout(function () {
  console.log("timeout");
  console.log("timeout2");
}, 3000);

console.log("next line");

setInterval(function () {
  console.log("interval");
}, 3000);

console.log("next linee");