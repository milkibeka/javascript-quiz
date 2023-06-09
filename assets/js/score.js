// Retrieve high scores from local storage
var highscores = JSON.parse(localStorage.getItem('highscores')) || [];

// Sort high scores in descending order
highscores.sort((a, b) => b.score - a.score);

// Display high scores on the HTML page
var scoresList = document.getElementById("highscores");
highscores.forEach((score) => {
  var scoreElement = document.createElement('li');
  scoreElement.textContent = `${score.initials}: ${score.score}`;
  scoresList.appendChild(scoreElement);
});

var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clearData);

function clearData() {
    localStorage.removeItem("highscores");

// Clear the list elements from the HTML
    scoresList.innerHTML = ''; 
  }