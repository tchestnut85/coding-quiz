var timerClock = document.getElementById("timer");
var quizArea = document.getElementById("question");
var startButton = document.getElementById("button");
var buttonWrap = document.getElementById("button-wrapper");
var quizWrapper = document.getElementById("quiz-wrapper");
var answerList = document.getElementById("answer-list");
var intro = document.getElementById("intro");

// var interval = setInterval();
var scoreCounter = 120;
var remainingTime = scoreCounter;
var currentQuestion = 0;
var userInitials = "";



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
        choices: ["script.js", "readme.md", "index.html", "style.css"],
        correct: "index.html"
    },
    {
        question: "Question 4: Arrays in JavaScript can be used to store:", 
        choices: ["strings", "integers", "other arrays", "all of the above"],
        correct: "all of the above"
    },
    {
        question: "Question 5: The condition in an if/else statement must be enclosed in:", 
        choices: ["quotes", "curley braces", "parentheses", "commas"],
        correct: "parentheses"
    }
];



// TIMER FUNCTION
// Clicking the Start button begins timer countdown and displays 1 of 5 questions
function timer() {
    interval = setInterval(function() {
        if (remainingTime > 0) {
            timerClock.textContent = remainingTime;
            remainingTime--;
        } else {
            timerClock.textContent = "";
            clearInterval(remainingTime);
        }
    }, 1000);
};

// function endTimer() {
//     if (questions[4][i] === onclick)
//     clearInterval;
// }

function getQuestion() {
    intro.remove();
    startButton.remove();
    var question = questions[currentQuestion];
    if (document.getElementById("question").textContent = question.question); {
    answerList.innerHTML = "";
    var lastQuestion = questions[4][1];
    // console.log(lastQuestion);
    for (var i = 0; i < question.choices.length; i++) {
        var newItem = document.createElement("li");
        newItem.textContent = question.choices[i];
        answerList.appendChild(newItem);
        newItem.addEventListener("click", questionClick)
        // if (i > 4) {
        //     endQuiz;
        // }
    }
    // if (questions.[4][1] === onclick.questions.[4][1]) {
    //     clearInterval(remainingTime);
    // }
    // }
    // if (question > question.choices.length) {
    //     endQuiz();
    }
};

function questionClick() {
    var question = questions[currentQuestion];
    if (question.correct === this.textContent) {
        var correctAlert = document.createElement("p"); 
        correctAlert.textContent = "YOU ANSWERED CORRECT!";
        buttonWrap.appendChild(correctAlert);
        currentQuestion++;
        getQuestion();
    } else if (question.correct < this.textContent || question.correct > this.textContent) {
        var wrongAlert = document.createElement("p");
        wrongAlert.textContent = "YOU ANSWERED WRONG!";
        buttonWrap.appendChild(wrongAlert);
        remainingTime = remainingTime - 20;
        currentQuestion++;
        getQuestion();
        // Need to figure out how to remove correctAlert and wrongAlert: ;
    } 
}; 

function endQuiz() {
    // need to stop timer
    clearInterval(remainingTime);

    localStorage.setItem("score", scoreCounter);
    console.log(scoreCounter);

    // need to create a text input for user to write in name or initials
    localStorage.setItem("initials", userInitials);
    console.log(userInitials);

    location.assign("./score.html");
};

// save which answer user clicks on and see if equals correct answer

startButton.addEventListener("click", getQuestion);
startButton.addEventListener("click", timer);


// When you answer a question, another questions appears

// If a question is answered wrong, time is subtracted from the timer

// When timer runs out, you are brought to the high score pag
// and can save your initials in localStorage
