// Digital Clock Function
function updateClock() {

    // Get the current date and time
    const now = new Date();

    // Get hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Determine AM or PM
    let session = "AM";

    if (hours >= 12) {
        session = "PM";
    }

    // Convert to 12-hour format
    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12;
    }

    // Add leading zeros
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Format the time
    const timeString = hours + ":" + minutes + ":" + seconds + " " + session;

    // Get the current calendar date
    const dateString = now.toLocaleDateString();

    // Update the HTML elements
    document.getElementById("clock-face").innerHTML = timeString;
    document.getElementById("calendar-date").innerHTML = dateString;
}

// Update the clock every second
updateClock();
setInterval(updateClock, 1000);