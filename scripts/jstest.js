// Initialize points variable
let points = 0;

// Function to update the points display
function updatePointsDisplay() {
  const pointsDisplay = document.getElementById('pointsDisplay');
  pointsDisplay.textContent = 'Points: ' + points;
}

// Function to handle button click and increase points
function increasePoints() {
  points++;
  updatePointsDisplay();
}

// Add click event listeners to all buttons with class "pointButton"
const buttons = document.querySelectorAll('.pointButton');
buttons.forEach(button => {
  button.addEventListener('click', increasePoints);
});

// Initial update of the points display
updatePointsDisplay();