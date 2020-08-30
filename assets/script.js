var timerClock = document.getElementById("timer");
var quizArea = document.getElementById("question");
var startButton = document.getElementById("button");
var buttonWrap = document.getElementById("button-wrapper");
var quizWrapper = document.getElementById("quiz-wrapper");
var answerList = document.getElementById("answer-list");
var intro = document.getElementById("intro");
var userInput = document.createElement("div");
var highScoreContent = document.getElementById("high-scores");
var initials = document.createElement("li");
var initialsList = document.getElementById("initials-list");
var scores = document.createElement("li");
var scoreList = document.getElementById("score-list");

var interval;
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

var length = questions.length;


// TIMER FUNCTION
// Clicking the Start button begins timer countdown and displays 1 of 5 questions
function timer() {
    interval = setInterval(function() {
        if (remainingTime > 0) {
            timerClock.textContent = remainingTime;
            remainingTime--;
        }
    }, 1000);
};

function getQuestion() {
    intro.remove();
    startButton.remove();
    var question = questions[currentQuestion];
    console.log(question, currentQuestion);
    
    // if (question.textContent === undefined) {
    //     endQuiz();
    // }

    if (document.getElementById("question").textContent = question.question); {
        answerList.innerHTML = "";
    
    
    for (var i = 0; i < question.choices.length; i++) {
        var newItem = document.createElement("li");
        newItem.textContent = question.choices[i];
        answerList.appendChild(newItem);
        newItem.addEventListener("click", questionClick)
    }
    
    }   
};


function questionClick() {
    var question = questions[currentQuestion];
    if (question.correct === this.textContent) {
        var correctAlert = document.createElement("p"); 
        correctAlert.textContent = "YOU ANSWERED CORRECT!";
        buttonWrap.appendChild(correctAlert);
        setTimeout(function(){correctAlert.textContent = ""}, 1500);
        currentQuestion++;
        getQuestion();
    } else if (question.correct < this.textContent || question.correct > this.textContent) {
        var wrongAlert = document.createElement("p");
        wrongAlert.textContent = "YOU ANSWERED WRONG!";
        buttonWrap.appendChild(wrongAlert);
        setTimeout(function(){wrongAlert.textContent = ""}, 1500);
        remainingTime = remainingTime - 20;
        currentQuestion++;
        getQuestion();
    } 
}; 


function endQuiz() {
    // need to stop timer
    
    location.assign("./score.html");

    // text input for user to write in name or initials
    userInput.innerHTML = "<label for='userName'>Initials:</label><input type='text' id='name' name='userName' placeholder='Enter Initials Here'></input>"
    highScoreContent.appendChild("userInput");

    localStorage.setItem("initials", userInitials);
    console.log(userInitials);
    initials.textContent = userInitials;
    initialsList.appendChild(initials);
    
    localStorage.setItem("score", scoreCounter);
    console.log(scoreCounter);
    scores.textContent = scoreCounter;
    scoreList.appendChild(scores);


    // in case of switching to a single line to display initials/name and score:
    // initials.textContent = userInitials + "has a score of " + scoreCounter;
    // initialsList.appendChild();
};

// save which answer user clicks on and see if equals correct answer

startButton.addEventListener("click", getQuestion);
startButton.addEventListener("click", timer);


// When you answer a question, another questions appears

// If a question is answered wrong, time is subtracted from the timer

// When timer runs out, you are brought to the high score pag
// and can save your initials in localStorage
