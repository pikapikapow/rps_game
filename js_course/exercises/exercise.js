// const gamingtoggler = document.querySelector(".gaming");
// const musictoggler = document.querySelector(".music");
// const techtoggler = document.querySelector(".tech");

// console.log(
//   document.querySelector(".js-button").classList.contains("js-button")
// );

// gamingtoggler.addEventListener("click", function () {
//   gamingtoggler.classList.toggle("toggled");
//   musictoggler.classList.remove("toggled");
//   techtoggler.classList.remove("toggled");
// });

// musictoggler.addEventListener("click", function () {
//   musictoggler.classList.toggle("toggled");
//   techtoggler.classList.remove("toggled");
//   gamingtoggler.classList.remove("toggled");
// });

// techtoggler.addEventListener("click", function () {
//   techtoggler.classList.toggle("toggled");
//   gamingtoggler.classList.remove("toggled");
//   musictoggler.classList.remove("toggled");
// });

// const nums = [10, 20, 30];
// nums[2] = 99;
// function getLastValue(Array) {
//   console.log(Array[Array.length - 1]);
// }

// getLastValue([20, 30, 42]);

// function arraySwap(array) {
//   const lastIndex = array.length - 1;

//   const lastValue = array[lastIndex];
//   const firstValue = array[0];

//   array[0] = lastValue;
//   array[lastIndex] = firstValue;

//   return array;
// }
// console.log(arraySwap([22, 32, 47, 21, 90, 37]));

// for (let i = 0; i <= 5; i++) {
//   console.log(i * 2);
// }

// for (let i = 5; i >= 0; i -= 1) {
//   console.log(i);
// }

// // let i = 0;

// // while (i <= 5) {
// //   console.log(i * 2);
// //   i++;
// // }

// // let j = 5;

// // while (j >= 0) {
// //   console.log(i);
// //   j -= 1;
// // }

// const array = [1, 2, 3];
// const result = [];

// for (let i = 0; i < array.length; i++) {
//   result.push(array[i] + 1);
// }

// console.log(result);

// function addOne(array) {
//   const result = [];

//   for (let i = 0; i < array.length; i++) {
//     result.push(array[i] + 1);
//   }

//   return result;
// }

// console.log(addOne([1, 2, 3]));
// console.log(addOne([-2, -1, 0, 99]));

// function addNum(array, num) {
//   const newResult = [];

//   for (let i = 0; i < array.length; i++) {
//     newResult.push(array[i] + num);
//   }

//   return newResult;
// }

// console.log(addNum([22, 31, 42, 10], 2));

// function addArrays(array, array2) {
//   const newestResult = [];

//   for (let i = 0; i < array.length; i++) {
//     newestResult.push(array[i] + array2[i]);
//   }

//   return newestResult;
// }

// console.log(addArrays([5, 3, 2], [2, 4, 5]));

// function countPositive(nums) {
//   let positives = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= 1) {
//       positives++;
//     }
//   }
//   return positives;
// }

// console.log(countPositive([22, 31, -5, -72]));

// function minMax(nums) {
//   const result = {
//     min: nums[0],
//     max: nums[0],
//   };

//   for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];

//     if (value < result.min) {
//       result.min = value;
//     }

//     if (value > result.max) {
//       result.max = value;
//     }
//   }

//   return result;
// }

// console.log(minMax([1, -3, 5]));
// console.log(minMax([-2, 3, -5, 7, 10]));

// function minMax(nums) {
//   const result = {
//     min: null,
//     max: null,
//   };

//   for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];

//     if (result.min === null || value < result.min) {
//       result.min = value;
//     }

//     if (result.max === null || value > result.max) {
//       result.max = value;
//     }
//   }

//   return result;
// }

// console.log(minMax([1, -3, 5]));
// console.log(minMax([-2, 3, -5, 7, 10]));

// console.log(minMax([]));
// console.log(minMax([3]));

// function countWords(words) {
//   const result = {};

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];

//     // result[word] adds/accesses a property using whatever is
//     // saved inside the 'word' variable.
//     // If word = 'apple', result[word] will do result['apple']
//     // If word = 'grape', result[word] will do result['grape']
//     if (!result[word]) {
//       result[word] = 1;
//     } else {
//       result[word]++;
//     }
//   }

//   return result;
// }

// console.log(countWords(["apple", "grape", "apple", "apple"]));

// // let words = ["ello", "yum", "search", "woah"];

// // 11o and 11p exercises

// function searchArray(array) {
//   let index = -1;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "search") {
//       index = i;
//       break;
//     }
//   }
//   console.log(index);
// }

// searchArray(["search", "no", "search"]);

// searchArray(["there", "isnosearchhere"]);

// // 11q exercise

function searchIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }

  return -1;
}

searchIndex(["hehe", "huh", "hehe"], "hehe");

function unique(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    if (searchIndex(result, word) === -1) {
      result.push(word);
    }
  }

  // return result;
  console.log(result);
}

unique(["yellow", "yellow", "yellow"]);

// // 11r+11s exercises

// function removeEgg(foods) {
//   let reverseFoods = foods.reverse();
//   let newFoods = [];
//   let eggCount = 0;
//   for (let i = 0; i < reverseFoods.length; i++) {
//     if (reverseFoods[i].toLowerCase() === "egg" && eggCount < 2) {
//       eggCount++;

//       continue;
//     } else {
//       newFoods.push(reverseFoods[i]);
//     }
//   }
//   console.log(newFoods.reverse());
// }

// let foodArray = ["egg", "apple", "Egg", "eGg", "ham"];

// removeEgg(foodArray);

// // Challenge 11v

// function fizzBuzz() {
//   for (let i = 1; i <= 20; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("FizzBuzz");
//     } else if (i % 5 == 0) {
//       console.log("Buzz");
//     } else if (i % 3 == 0) {
//       console.log("Fizz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz();

const add = function () {
  console.log(2 + 3);
};

add();
add();

function runTwice(fun) {
  fun();
  fun();
}

runTwice(function () {
  console.log("12b");
});

function updateButton() {
  const button = document.querySelector(".js-button");

  setTimeout(() => {
    button.innerHTML = "Finished!";
  }, 1000);
}

let timeoutId;

function displayMessage() {
  const messageElement = document.querySelector(".js-message");
  messageElement.innerHTML = "Added";

  clearTimeout(timeoutId);

  timeoutId = setTimeout(function () {
    messageElement.innerHTML = "";
  }, 2000);
}

let i = 0;

setInterval(function () {
  i++;
}, 1000);

setInterval(function () {
  if (i > 0) {
    document.title = "(" + i + ") New messages";
  } else {
    document.title = "App";
  }
}, 10);

const multiply = (a, b) => a * b;

console.log(multiply(42, 2));

function countPositive(nums) {
  let positiveNumbers = 0;

  nums.forEach((num) => {
    if (num > 0) {
      positiveNumbers++;
    }
  });

  return positiveNumbers;
}

console.log(countPositive([11, -55, 22]));

function addNum(array, num) {
  return array.map((value) => value + num);
}

console.log(addNum([1, 9, 6], 2));
console.log(addNum([-2, -1, 0, 99], 2));

function removeEgg(foods) {
  return foods.filter((food) => food !== "egg");
}

console.log(removeEgg(["egg", "ice cream", "egg", "waffles", "steak"]));

function removeEgg(foods) {
  let eggsRemoved = 0;

  return foods.filter((food) => {
    if (food === "egg" && eggsRemoved < 2) {
      eggsRemoved++;
      return false;
    }

    return true;
  });
}

console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));
