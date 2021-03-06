var timerClock = document.getElementById("timer");
var timerClockValue = document.getElementById("timer").value;
var quizArea = document.getElementById("question");
var startButton = document.getElementById("startBtn");
var buttonWrap = document.getElementById("button-wrapper");
var answerResponse = document.getElementById("answer-response");
var mainContent = document.getElementById("quiz");
var quizWrapper = document.getElementById("quiz-wrapper");
var answerList = document.getElementById("answer-list");
var header = document.getElementById("header");
var body = document.getElementById("body");
var intro = document.getElementById("intro");
var userInput = document.createElement("div");
var highScoreContent = document.getElementById("high-scores");

var initialsItem = document.createElement("li");
var initialsList = document.getElementById("initials-list");
var userInitials = document.querySelector("#name");

var scores = document.createElement("li");
var scoreList = document.getElementById("score-list");
var interval;
var scoreCounter = 120;
var remainingTime = scoreCounter;
var currentQuestion = 0;
var submitButton = document.getElementById("testingBtn");
document.getElementById("endScreen").style.display = "none";


var questions = [
    {
        question: "Question 1: What type of data contains text in JavaScript?",
        choices: ["integers", "strings", "classes", "scrolls"],
        correct: "strings"
    },
    {
        question: "Question 2: Which of the following should link CSS styling to HTML elements?",
        choices: ["classes", "hobbits", "flexbox", "grid"],
        correct: "classes"
    },
    {
        question: "Question 3: What file must be in a directory for a website to function?",
        choices: ["script.js", "readme.md", "index.html", "hy.rule"],
        correct: "index.html"
    },
    {
        question: "Question 4: Arrays in JavaScript can be used to store:",
        choices: ["strings", "integers", "other arrays", "all of the above"],
        correct: "all of the above"
    },
    {
        question: "Question 5: The condition in an if/else statement must be enclosed in:",
        choices: ["quotes", "curley braces", "parentheses", "octothorps"],
        correct: "parentheses"
    }
];

var length = questions.length;


// TIMER FUNCTION
// Clicking the Start button begins timer countdown and displays 1 of 5 questions
function timer() {
    interval = setInterval(function () {
        if (remainingTime > 0) {
            remainingTime--;
            timerClock.textContent = remainingTime;
        }
    }, 1000);
};

// function to display each question
function getQuestion() {
    intro.remove();
    startButton.remove();
    var question = questions[currentQuestion];

    if (document.getElementById("question").textContent = question.question); {
        answerList.innerHTML = "";

        for (var i = 0; i < question.choices.length; i++) {
            var newItem = document.createElement("li");
            newItem.textContent = question.choices[i];
            answerList.appendChild(newItem);
            newItem.addEventListener("click", questionClick);
        }
    }
};

// function to remove time from timer if wrong answer selected
function questionClick() {
    var question = questions[currentQuestion];
    if (question.correct === this.textContent) {
        var correctAlert = document.createElement("p");
        correctAlert.textContent = "YOU ANSWERED CORRECT!";
        answerResponse.appendChild(correctAlert);
        setTimeout(function () { correctAlert.textContent = ""; }, 1500);
    } else if (question.correct < this.textContent || question.correct > this.textContent) {
        var wrongAlert = document.createElement("p");
        wrongAlert.textContent = "YOU ANSWERED WRONG!";
        answerResponse.appendChild(wrongAlert);
        setTimeout(function () { wrongAlert.textContent = ""; }, 1500);
        remainingTime = remainingTime - 20;
    }
    currentQuestion++;
    if (currentQuestion === questions.length) {
        endQuiz();
    } else {
        getQuestion();
    }
};

// remove quiz after answering all questions
function removeQuiz() {
    mainContent.remove();
};

// end the quiz and save name and score
function endQuiz() {
    userInput.innerHTML = "";
    document.getElementById("endScreen").style.display = "block";
    if (remainingTime >= 50) {
        document.getElementById("scoreDisplay").innerHTML = "Your Score: " + remainingTime + "! Good job!";
    } else {
        document.getElementById("scoreDisplay").innerHTML = "Your Score: " + remainingTime + "... try again!";
    };
    clearInterval(interval);
    removeQuiz();

    if (submitButton) {
        submitButton.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Your name and score have been saved!");
            var userInitialsValue = userInitials.value;
            if (localStorage.getItem("totalScore")) {
                var savedScores = localStorage.getItem("totalScore");
                var listOfScores = JSON.parse(savedScores);

                listOfScores.push({ name: userInitialsValue, score: remainingTime });

                localStorage.setItem("totalScore", JSON.stringify(listOfScores));
            } else {
                var listOfScores = [];
                listOfScores.push({ name: userInitialsValue, score: remainingTime });

                localStorage.setItem("totalScore", JSON.stringify(listOfScores));
            }
            location.replace('./score.html');
        });
    }
};

startButton.addEventListener("click", getQuestion);
startButton.addEventListener("click", timer);