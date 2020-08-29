var timerClock = document.getElementById("timer");
var quizSection = document.getElementById("quiz");
var startButton = document.getElementById("button");

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