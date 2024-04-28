let userMove;
let computerMove = "";

function rps() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";

    console.log(computerMove);
  }
}
let result = "";

function checkResults(userMove) {
  if (userMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  } else if (userMove === "scissors") {
    if (computerMove === "scissors") {
      result = "Tie.";
    } else if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    }
  } else if (userMove === "paper") {
    if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    } else if (computerMove === "rock") {
      result = "You win.";
    }
  }

  alert(`You picked ${userMove}. Computer picked ${computerMove}. ${result}`);
}

function greet(name) {
  if (name) {
    console.log(`Hello ${name}!`);
  } else if (!name) {
    console.log("Hi there!");
  }
}

greet("Simon");
greet("George");
greet();

//Temperature converter
function convertToFahrenheit(celsius) {
  let fahrenheitResult = Math.round(celsius * 1.8 + 32);
  return fahrenheitResult;
}

convertToFahrenheit(25);
// console.log(convertToFahrenheit(25));

function convertToCelsius(fahrenheit) {
  let celsiusResult = Math.round((fahrenheit - 32) * 0.556);
  return celsiusResult;
}

convertToCelsius(77);
// console.log(convertToCelsius(77));

function convertTemperature(degrees, unit) {
  if (unit === "C") {
    let temp = convertToFahrenheit(degrees);
    // console.log(temp);
    let stringTemp = temp.toString();
    unit = "F";
    let newTemp = stringTemp + unit;
    return newTemp;
  } else if (unit === "F") {
    let temp = convertToCelsius(degrees);
    let stringTemp = temp.toString();
    unit = "C";
    let newTemp = stringTemp + " " + unit;
    return newTemp;
  } else {
    console.log("That is not a valid temperature unit.");
  }

  // return newTemp.ToString();

  let finalTemp = newTemp.toString();

  return finalTemp;
}

console.log(convertTemperature(91, "F"));

// Calculator function

let cartQuantity = 0;

// Display the cart quantity when the page loads.
displayCartQuantity();

function updateCartQuantity(change) {
  if (cartQuantity + change > 10) {
    alert("The cart is full");
    return;
  }

  if (cartQuantity + change < 0) {
    alert("Not enough items in the cart");
    return;
  }

  cartQuantity += change;

  // Display the cart quantity after updating.
  displayCartQuantity();
}

function displayCartQuantity() {
  document.querySelector(
    ".js-cart-quantity"
  ).innerHTML = `Cart quantity: ${cartQuantity}`;
}

console.log(document.querySelector("#btn"));
document.querySelector("#btn").innerHTML = "9b done!";

function displayMessage() {
  const inputElement = document.querySelector(".js-name-input");
  document.querySelector(
    ".js-message"
  ).innerHTML = `Your name is: ${inputElement.value}`;
}

let calculation = localStorage.getItem("calculation") || "";

// Display the calculation when the page first loads.
displayCalculation();

function updateCalculation(value) {
  calculation += value;

  // Display the calculation on the page
  // instead of console.log
  displayCalculation();

  localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
  document.querySelector(".js-calculation").innerHTML = calculation;
}
