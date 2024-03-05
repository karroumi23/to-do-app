let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array to Store The Tasks
let arrayOfTasks = [];

// Add task
submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value); //add task to array of tasks
    input.value = ""; //empty input
  }
};
function addTaskToArray(taskText) {
  //task Data
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };

  //push task to Array of tasks
  arrayOfTasks.push(task);
}
