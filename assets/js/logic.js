var myQuestions=quizQuestions;
var startbtn= document.getElementById("start");
var startscrn=document.getElementById("start-screen");
var questionscrn=document.getElementById("questions");
var startbtn= document.getElementById("start");
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