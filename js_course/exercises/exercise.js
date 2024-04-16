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

function addNum(array, num) {
  const newResult = [];

  for (let i = 0; i < array.length; i++) {
    newResult.push(array[i] + num);
  }

  return newResult;
}

console.log(addNum([22, 31, 42, 10], 2));

function addArrays(array, array2) {
  const newestResult = [];

  for (let i = 0; i < array.length; i++) {
    newestResult.push(array[i] + array2[i]);
  }

  return newestResult;
}

console.log(addArrays([5, 3, 2], [2, 4, 5]));

function countPositive(nums) {
  let positives = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 1) {
      positives++;
    }
  }
  return positives;
}

console.log(countPositive([22, 31, -5, -72]));

function minMax(nums) {
  const result = {
    min: nums[0],
    max: nums[0],
  };

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    if (value < result.min) {
      result.min = value;
    }

    if (value > result.max) {
      result.max = value;
    }
  }

  return result;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));

function minMax(nums) {
  const result = {
    min: null,
    max: null,
  };

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    if (result.min === null || value < result.min) {
      result.min = value;
    }

    if (result.max === null || value > result.max) {
      result.max = value;
    }
  }

  return result;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));

console.log(minMax([]));
console.log(minMax([3]));

function countWords(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // result[word] adds/accesses a property using whatever is
    // saved inside the 'word' variable.
    // If word = 'apple', result[word] will do result['apple']
    // If word = 'grape', result[word] will do result['grape']
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }

  return result;
}

console.log(countWords(["apple", "grape", "apple", "apple"]));
