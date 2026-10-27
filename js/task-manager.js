/* ----------------------------------------
   Weekly Goal Calculator
---------------------------------------- */

// Array to store the user's tasks as objects.
let myTasks = [];
let nextTaskId = 1;

// Calculate the user's weekly task goal.
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    let weeklyGoal = dailyGoal * 5;
    let totalGoal = weeklyGoal + bonusTasks;

    let output = "User: " + userName + "<br>" +
                 "Total Weekly Goal: " + totalGoal;

    document.getElementById("goal-message").innerHTML = output;
}

// Handle the weekly goal form submission.
document.getElementById("goal-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let userName = document.getElementById("user-name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});


/* ----------------------------------------
   Weekly Task Manager
---------------------------------------- */

// Get the HTML elements.
const taskForm = document.getElementById("task-form");
const taskNameInput = document.getElementById("task-name");
const taskPriorityInput = document.getElementById("task-priority");
const taskImportantInput = document.getElementById("task-important");
const userTasks = document.getElementById("user-tasks");
const deleteTaskListButton = document.getElementById("delete-task-list");
const addTaskButton = document.getElementById("add-task");

let editingTaskId = null;

// Log the complete task array as JSON.
function logTasks() {
    console.log(JSON.stringify(myTasks));
}

// Add a new task to the array.
function addTask(name, priority, isImportant) {
    const task = {
        id: nextTaskId++,
        name: name,
        priority: priority,
        isImportant: isImportant,
        isCompleted: false
    };

    myTasks.push(task);
    renderTasks();
    logTasks();
}

// Display all tasks using DOM nodes.
function renderTasks() {
    userTasks.replaceChildren();

    myTasks.forEach(function(task) {
        const listItem = document.createElement("li");
        listItem.classList.add("task-item");

        // Apply styles based on priority.
        listItem.style.borderLeft = "5px solid";

        if (task.priority === "High") {
            listItem.style.borderLeftColor = "#e53935";
        } else if (task.priority === "Medium") {
            listItem.style.borderLeftColor = "#f9a825";
        } else {
            listItem.style.borderLeftColor = "#2e7d32";
        }

        // Highlight important tasks in red.
        if (task.isImportant) {
            listItem.style.color = "red";
            listItem.style.backgroundColor = "#ffe5e5";
        }

        // Apply a strikethrough to completed tasks.
        if (task.isCompleted) {
            listItem.style.textDecoration = "line-through";
            listItem.style.opacity = "0.65";
        }

        // Display the task name and details.
        const taskNameSpan = document.createElement("span");
        taskNameSpan.textContent =
            task.name + " (Priority: " + task.priority + ") ";

        listItem.appendChild(taskNameSpan);

        if (task.isImportant) {
            const importantLabel = document.createElement("strong");
            importantLabel.textContent = " IMPORTANT";
            importantLabel.style.color = "red";
            listItem.appendChild(importantLabel);
        }

        // Create a button to mark the task complete.
        const completeButton = document.createElement("button");
        completeButton.type = "button";
        completeButton.textContent = task.isCompleted
            ? "Mark Incomplete"
            : "Mark Complete";

        completeButton.addEventListener("click", function() {
            toggleComplete(task.id);
        });

        // Create an edit button.
        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.textContent = "Edit";

        editButton.addEventListener("click", function() {
            editTask(task.id);
        });

        // Create a delete button.
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            deleteTask(task.id);
        });

        // Add buttons to the task item.
        listItem.appendChild(document.createTextNode(" "));
        listItem.appendChild(completeButton);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        userTasks.appendChild(listItem);
    });
}

// Mark a task as completed or incomplete.
function toggleComplete(id) {
    const task = myTasks.find(function(item) {
        return item.id === id;
    });

    if (task) {
        task.isCompleted = !task.isCompleted;
        renderTasks();
        logTasks();
    }
}

// Edit an existing task.
function editTask(id) {
    const task = myTasks.find(function(item) {
        return item.id === id;
    });

    if (!task) {
        return;
    }

    taskNameInput.value = task.name;
    taskPriorityInput.value = task.priority;
    taskImportantInput.checked = task.isImportant;

    editingTaskId = id;
    addTaskButton.textContent = "Save Changes";
    taskNameInput.focus();
}

// Delete one task.
function deleteTask(id) {
    myTasks = myTasks.filter(function(task) {
        return task.id !== id;
    });

    if (editingTaskId === id) {
        resetTaskForm();
    }

    renderTasks();
    logTasks();
}

// Delete the entire task list.
function deleteTaskList() {
    myTasks = [];
    resetTaskForm();
    renderTasks();
    logTasks();
}

// Reset the form after adding or editing a task.
function resetTaskForm() {
    taskForm.reset();
    editingTaskId = null;
    addTaskButton.textContent = "Add Task";
}

// Handle adding and editing tasks.
taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = taskNameInput.value.trim();
    const priority = taskPriorityInput.value;
    const isImportant = taskImportantInput.checked;

    if (name === "") {
        return;
    }

    if (editingTaskId !== null) {
        const task = myTasks.find(function(item) {
            return item.id === editingTaskId;
        });

        if (task) {
            task.name = name;
            task.priority = priority;
            task.isImportant = isImportant;
        }

        renderTasks();
        logTasks();
    } else {
        addTask(name, priority, isImportant);
    }

    resetTaskForm();
});

// Handle deleting all tasks.
deleteTaskListButton.addEventListener("click", deleteTaskList);

// Display the initial task list.
renderTasks();