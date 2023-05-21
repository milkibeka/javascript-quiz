var myQuestions=quizQuestions;
var startbtn= document.getElementById("start");
var startscrn=document.getElementById("start-screen");
var questionscrn=document.getElementById("questions");
var startbtn= document.getElementById("start");
var timer=document.getElementById("time");
var timeLeft = myQuestions.length * 10;
var questionEl= document.getElementById("question-title")
var choicesEl=document.getElementById("choices");
var feedbackEl=document.getElementById("feedback")
var correctSound = document.getElementById("correctSound");
var wrongSound = document.getElementById("wrongSound");
var currentQuestionIndex=0;
var score=0;
var endScreen=document.getElementById("end-screen");
var finalScore = document.getElementById("final-score")
var submitBtn = document.getElementById("submit");
var initialsEl = document.getElementById("initials")

// Start Quiz

startbtn.addEventListener("click", startQuiz);

function startQuiz() {
    
    //Hide start screen
       startscrn.classList.add("hide");
       
    // Display questions screen
       questionscrn.classList.remove("hide");
    
        startTimer();
    
        showQuestions();
    };
    //Start Timer
function startTimer() {
    timerInterval = setInterval(function () {
      if (timeLeft > 0) {
        timeLeft--;
        timer.textContent = timeLeft;
      } else {
        completeQuiz(); 
      }
    }, 1000);
  }
// Show Questions
function showQuestions() {
  var currentQuestion = myQuestions[currentQuestionIndex];

  questionEl.textContent = currentQuestion.question;

  choicesEl.innerHTML = "";

  currentQuestion.choices.forEach(function (choice, i) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("value", choice);
    choiceBtn.textContent = i + 1 + ". " + choice;
    choiceBtn.onclick = answerSubmit;
    choicesEl.appendChild(choiceBtn);
  });
}
//Choose and answer and check if it is correct
function answerSubmit() {
    if (this.value !== myQuestions[currentQuestionIndex].answer) {
      timeLeft -= 10;
    if (timeLeft < 0) {
        timeLeft = 0;
        timer.textContent=timeLeft;
  
      }
      feedbackEl.textContent = "Wrong!";
     wrongSound.play(); 
    } else {
      feedbackEl.textContent = "Correct!";
      score+=10;
    correctSound.play();
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
  
    if (myQuestions.length > currentQuestionIndex + 1) {
      setTimeout(function () {
        showQuestions();
      }, 1000);
      currentQuestionIndex++; 
  
    } else {
      setTimeout(function () {
        completeQuiz();
      }, 1000);
    }
  }
  
// End Quiz
function completeQuiz() {
  if (timeLeft>0) {
    timeLeft=0;
    timer.innerText=timeLeft;
  };
clearInterval(timerInterval); 

//Hide questtions screen
 questionscrn.classList.add("hide");
 
// Display  end-screen
 endScreen.classList.remove("hide");
// Display  score
 finalScore.textContent = score;
}
// Save initials and final score to local storage
submitBtn.addEventListener("click", saveData);

function saveData() {
  // Retrieve existing data from local storage or initialize an empty array
  
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  // Create a new userInfo object
  var initials=initialsEl.value.toUpperCase();
  var newScore = {
    initials: initials,
    score: score
  };

  // Add the new userInfo to the existing data
  highscores.push(newScore);

  // Store the updated data back into local storage
  localStorage.setItem("highscores", JSON.stringify(highscores));
  
  // Navigate to "highscores.html"
  window.location.href = "highscores.html";
};