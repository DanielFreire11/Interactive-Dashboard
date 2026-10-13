// Array to store the user's tasks.
let myTasks = [];

// Calculate the user's weekly task goal.
function weeklyGoal(userName, dailyGoal, bonusTasks) {

    // Calculate the weekly goal using five workdays.
    let weeklyGoal = dailyGoal * 5;

    // Add the bonus tasks to the weekly goal.
    let totalGoal = weeklyGoal + bonusTasks;

    // Create the output message.
    let output = "User: " + userName + "<br>" +
                 "Total Weekly Goal: " + totalGoal;

    // Display the result on the webpage.
    document.getElementById("goal-message").innerHTML = output;
}

// Handle the weekly goal form submission.
document.getElementById("goal-form").addEventListener("submit", function(event) {

    // Prevent the form from submitting and reloading the page.
    event.preventDefault();

    // Get the values entered by the user.
    let userName = document.getElementById("user-name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    // Call the weeklyGoal function.
    weeklyGoal(userName, dailyGoal, bonusTasks);
});


// ----------------------------------------
// Weekly Task Manager
// ----------------------------------------

// Get the task input and button.
const taskName = document.getElementById("task-name");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Create an unordered list dynamically.
const userTasks = document.createElement("ul");

// Assign an ID to the unordered list.
userTasks.id = "user-tasks";

// Append the unordered list to the task-list container.
taskList.appendChild(userTasks);

// Handle the Add Task button click.
addTaskButton.addEventListener("click", function() {

    // Get the task entered by the user.
    let taskText = taskName.value.trim();

    // Do not add an empty task.
    if (taskText === "") {
        return;
    }

    // Store the task in the array.
    myTasks.push(taskText);

    // Create a new list item.
    let listItem = document.createElement("li");

    // Add the task text to the list item.
    listItem.textContent = taskText;

    // Append the list item to the unordered list.
    userTasks.appendChild(listItem);

    // Clear the input field.
    taskName.value = "";
});