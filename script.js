// Function to set a dynamic greeting based on the current time
function setWelcomeMessage() {
  const message = document.getElementById("welcome-message"); // Selects the welcome message element
  const hour = new Date().getHours(); // Gets the current hour (0–23)

  // Update greeting based on time of day
  if (hour < 12) {
    message.textContent = "Good morning! Welcome to SWIFT";
  } else if (hour < 18) {
    message.textContent = "Good afternoon! Keep pushing";
  } else {
    message.textContent = "Good evening! Time to chill";
  }
}

// Run the welcome message function when the page loads
setWelcomeMessage();

// Get reference to the dark mode toggle button
const toggleButton = document.getElementById("mode-toggle");

// Add event listener to handle light/dark mode switching
toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode"); // Toggles the theme

  // Change button text depending on mode
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Switch to Light Mode";
  } else {
    toggleButton.textContent = "Switch to Dark Mode";
  }
});
