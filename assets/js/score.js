// Retrieve high scores from local storage
const highscores = JSON.parse(localStorage.getItem('highscores')) || [];

// Sort high scores in descending order
highscores.sort((a, b) => b.score - a.score);