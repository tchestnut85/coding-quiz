var timerClock = document.getElementById("timer");
var quizSection = document.getElementById("quiz");
var startButton = document.getElementById("button");

var questionOne = { 
    question: "Question 1: Write out question in here...", 
    answer: ["answer1", "answer2", "answer3", "answer4"],
};
var questionTwo = { 
    question: "Question 2: Write out question in here...", 
    answer: ["answer1", "answer2", "answer3", "answer4"],
};
var questionOThree = { 
    question: "Question 3: Write out question in here...", 
    answer: ["answer1", "answer2", "answer3", "answer4"],
};
var questionFour = { 
    question: "Question 4: Write out question in here...", 
    answer: ["answer1", "answer2", "answer3", "answer4"],
};
var questionFive = { 
    question: "Question 5: Write out question in here...", 
    answer: ["answer1", "answer2", "answer3", "answer4"],
};
// console.log(questionFive.answer[3]);
// console.log(questionFour.question);

// TIMER FUNCTION
// Clicking the Start button begins timer countdown and displays 1 of 5 questions
function timer() {
    var remainingTime = 30;

    var interval = setInterval(function() {
        if (remainingTime >= 0) {
            timerClock.textContent = remainingTime;
            remainingTime--;
        } else {
            // figure out later
        }
    }, 1000);
};

startButton.onclick = timer;

// When you answer a question, another questions appears

// If a question is answered wrong, time is subtracted from the timer

// When timer runs out, you are brought to the high score pag
// and can save your initials in localStorae

