// Retrieve high scores from local storage
const highscores = JSON.parse(localStorage.getItem('highscores')) || [];

// Sort high scores in descending order
highscores.sort((a, b) => b.score - a.score);

// Display high scores on the HTML page
const scoresList = document.querySelector('#highscores');
highscores.forEach((score) => {
  const scoreElement = document.createElement('li');
  scoreElement.textContent = `${score.initials}: ${score.score}`;
  scoresList.appendChild(scoreElement);
});

var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clearData);