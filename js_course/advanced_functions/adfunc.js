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

const arrowFunction = (param, param2) => {
  console.log("hello");
  return 5;
};
arrowFunction();

const oneParam = (param) => {
  console.log(param + 1);
};
oneParam(2);

const oneLine = () => 2 + 3;
console.log(oneLine());

const object2 = {
  method: () => {},
  method() {},
};

console.log(
  [1, -3, 5].filter((value, index) => {
    /*
  if (value >= 0) {
    return true;
  } else {
    return false;
  }
  */
    return value >= 0;
  })
);

console.log(
  [1, 1, 3].map((value, index) => {
    return value * 2;
  })
);

console.log([1, 1, 3].map((value) => value * 2));
