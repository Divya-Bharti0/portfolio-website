// Example clock functionality
function displayTime() {
    const timeElement = document.querySelector('.fas.fa-clock');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    timeElement.textContent = timeString;
}

// Call the displayTime function every second
setInterval(displayTime, 1000);
