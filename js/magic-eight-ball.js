// Array containing the possible Magic Eight Ball responses
let answers = [
    "Yes, definitely!",
    "It is certain.",
    "Without a doubt.",
    "Most likely.",
    "Ask again later.",
    "Cannot predict now.",
    "Don't count on it.",
    "My sources say no."
];

// Function to display a random Magic Eight Ball answer
function displayAnswer() {
    // Generate a random index from the answers array
    let index = Math.floor(Math.random() * answers.length);

    // Display the random answer in the circle
    let circle = document.getElementById("circle");
    circle.style.display = "block";
    circle.innerHTML = answers[index];
}

// Listen for a mouse click on the Magic Eight Ball
document.getElementById("ball").addEventListener("mousedown", function () {

    // Check if the user entered a question
    let question = document.getElementById("question");

    if (question.value.trim() === "") {
        alert("Please enter a yes/no question.");
    } else {
        // Display a random answer
        displayAnswer();
    }
});

// Hide the answer when the reset button is clicked
document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("circle").style.display = "none";
});
