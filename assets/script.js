var timerClock = document.getElementById("timer");
var quizSection = document.getElementById("quiz");
var startButton = document.getElementById("button");
var quizWrapper = document.getElementById("quiz-wrapper");
var answerList = document.getElementById("answer-list");

var currentQuestion = 0;
var scoreCounter = 60;


var questions = [ 
    {
        question: "Question 1: What type of data contains text in JavaScript?", 
        choices: ["integers", "strings", "classes", "script"],
        correct: "strings"
    },
    {
        question: "Quetion 2: Which of the following should be link CSS styling to HTML elements?", 
        choices: ["classes", "id", "flexbox", "grid"],
        correct: "classes"
    },
    {
        question: "Question 3: Write out question in here...", 
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer1"
    },
    {
        question: "Question 4: Write out question in here...", 
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer1"
    },
    {
        question: "Question 5: Write out question in here...", 
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer1"
    }
];



// TIMER FUNCTION
// Clicking the Start button begins timer countdown and displays 1 of 5 questions
function timer() {
    var remainingTime = scoreCounter;

    var interval = setInterval(function() {
        if (remainingTime > 0) {
            timerClock.textContent = remainingTime;
            remainingTime--;
        } else {
            clearInterval(interval);
            // show high score page
        }
    }, 1000);
}

function getQuestion() {
    var question = questions[currentQuestion];
    document.getElementById("question").textContent = question.question;
    answerList.innerHTML = "";
    for (var i = 0; i < question.choices.length; i++) {
        var newItem = document.createElement("li");
        newItem.textContent = question.choices[i];
        answerList.appendChild(newItem);
        newItem.addEventListener("click", questionClick)
    }
}

function questionClick() {
    var question = questions[currentQuestion];
    console.log(this);
    if (question.correct === this.textContent) {
        var correctAlert = document.createElement("p"); 
        correctAlert.textContent = "YOU ANSWERED CORRECT! YOU'RE SO SMART!!";
        quizWrapper.appendChild(correctAlert);
    } else if {
        scoreCounter -= 20;
    }
    // 0 1 2 3 4 , when current question = 4
    currentQuestion++ 
    if (currentQuestion === questions.length) {
        // show high score page
    }
    // remove(correctAlert);
    getQuestion();
}




// save which answer user clicks on and see if equals correct answer

startButton.addEventListener("click", getQuestion);
startButton.addEventListener("click", timer);


// When you answer a question, another questions appears

// If a question is answered wrong, time is subtracted from the timer

// When timer runs out, you are brought to the high score pag
// and can save your initials in localStorae

