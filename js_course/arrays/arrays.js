const todoListEl = document.querySelector("#todo-list");

const todoList = [];

function addTodo() {
  const inputEl = document.querySelector(".js-input");
  const name = inputEl.value;
  todoList.unshift(name);
  console.log(todoList);
  todoListEl.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    let listEl = document.createElement("li");
    listEl.textContent = todoList[i];
    todoListEl.appendChild(listEl);
  }

  //   let listEl = document.createElement("li");
  //   listEl.textContent = name;
  //   todoListEl.appendChild(listEl);
  inputEl.value = "";
}

// for (let i = 0; i < todoList.length; i++) {
//   let listEl = document.createElement("li");
//   listEl.textContent = todoList[i];
//   todoListEl.appendChild(listEl);
// }

// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// for (let j = 1; j <= 5; j++) {
//   console.log(j);
// }

// const bucketList = [
//   "Finish writing report",
//   "Buy groceries",
//   "Call mom",
//   "Go for a run",
//   "Schedule dentist appointment",
//   "Pay bills",
//   "Clean the house",
//   "Read a chapter of a book",
//   "Organize desk",
//   "Plan weekend activities",
// ];

// for (let i = 0; i < bucketList.length; i++) {
//   console.log(bucketList[i]);
// }

// const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i];
// }

// console.log(total);

// let newArr = [];

// for (let i = 0; i < numbers.length; i++) {
//   newArr.push(numbers[i] * 2);
// }

// console.log(newArr);
