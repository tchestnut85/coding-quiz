var timerClock = document.getElementById("timer");
var quizSection = document.getElementById("quiz");
var startButton = document.getElementById("button");

var answerList = document.getElementById("answer-list");

var currentQuestion = 0;
var scoreCounter = 0;


var questions = [ 
    {
        question: "What color is the sky?", 
        choices: ["blue", "green", "red", "black"],
        correct: "answer1"
    },
    {
        question: "Quetion 2: Write out question in here...", 
        choices: ["one", "html", "css", "js"],
        correct: "answer1"
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
    var remainingTime = 30;

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
        //increase score
    } else {
        // deduct from score
    }
    // 0 1 2 3 4 , when current question = 4
    currentQuestion++ 
    if (currentQuestion === questions.length) {
        // show high score page
    }
    getQuestion();
}




// save which answer user clicks on and see if equals correct answer

getQuestion();

// startButton.onclick = timer;
startButton.addEventListener("click", timer);


// When you answer a question, another questions appears

// If a question is answered wrong, time is subtracted from the timer

// When timer runs out, you are brought to the high score pag
// and can save your initials in localStorae

