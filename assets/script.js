var timerClock = document.getElementById("timer");
var quizSection = document.getElementById("quiz");
var startButton = document.getElementById("button");
var quizWrapper = document.getElementById("quiz-wrapper");
var answerList = document.getElementById("answer-list");
var intro = document.getElementById("intro");

var scoreCounter = 60;
var remainingTime = scoreCounter;
var currentQuestion = 0;


var questions = [ 
    {
        question: "Question 1: What type of data contains text in JavaScript?", 
        choices: ["integers", "strings", "classes", "script"],
        correct: "strings"
    },
    {
        question: "Question 2: Which of the following should link CSS styling to HTML elements?", 
        choices: ["classes", "id", "flexbox", "grid"],
        correct: "classes"
    },
    {
        question: "Question 3: What file must be in a directory for a website to function?", 
        choices: ["style.js", "README.md", "index.html", "style.css"],
        correct: "index.html"
    },
    {
        question: "Question 4: Arrays in JavaScript can be used to store:", 
        choices: ["strings", "integers", "other arrays", "all of the above"],
        correct: "all of the above"
    },
    {
        question: "Question 5: The condition in an if/else statement must be enclosed in:", 
        choices: ["quotes", "curley braces", "parenthesis", "commas"],
        correct: "parenthesis"
    }
];



// TIMER FUNCTION
// Clicking the Start button begins timer countdown and displays 1 of 5 questions
function timer() {
    var interval = setInterval(function() {
        if (remainingTime > 0) {
            timerClock.textContent = remainingTime;
            remainingTime--;
        } else {
            clearInterval(interval);
            // show high score page - how to link another html page through a function?
        }
    }, 1000);
}

function getQuestion() {
    intro.remove();
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
    // console.log(this);
    if (question.correct === this.textContent) {
        var correctAlert = document.createElement("p"); 
        correctAlert.textContent = "YOU ANSWERED CORRECT! YOU'RE SO SMART!!";
        quizWrapper.appendChild(correctAlert);
        currentQuestion++;
    } else if (question.correct = !this.textContent) {
        remainingTime = remainingTime - 20;
        currentQuestion++;
        // show high score page
        // remove(correctAlert);
    } else {
        currentQuestion++;
        // currentQuestion === questions.length;
    }
    getQuestion();
}




// save which answer user clicks on and see if equals correct answer

startButton.addEventListener("click", getQuestion);
startButton.addEventListener("click", timer);


// When you answer a question, another questions appears

// If a question is answered wrong, time is subtracted from the timer

// When timer runs out, you are brought to the high score pag
// and can save your initials in localStorage
