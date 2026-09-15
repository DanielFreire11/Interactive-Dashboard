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

// Handle the button click.
document.getElementById("goal-btn").addEventListener("click", function(event) {

    // Prevent the form from submitting.
    event.preventDefault();

    // Get the values entered by the user.
    let userName = document.getElementById("user-name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    // Call the weeklyGoal function.
    weeklyGoal(userName, dailyGoal, bonusTasks);
});