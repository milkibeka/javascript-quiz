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
  }