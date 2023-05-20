var myQuestions=quizQuestions;
var startbtn= document.getElementById("start");
var startscrn=document.getElementById("start-screen");
var questionscrn=document.getElementById("questions");
var startbtn= document.getElementById("start");
var timer=document.getElementById("time");
var timeLeft = myQuestions.length * 10;

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
