const nameList = document.getElementById('name-list');
const scoreList = document.getElementById('score-list');

// function to display names and high scores

displayScores = () => {
    const scores = JSON.parse(localStorage.getItem('totalScore'));

    if (!(scores && scores.length)) {
        return;
    }

    for (const score of scores) {
        let row = document.createElement('tr');
        nameList.appendChild(row);

        let nameEl = document.createElement('td');
        nameEl.className = 'name-el';
        nameEl.innerHTML = `<span>${score.name}</span>`;
        row.appendChild(nameEl);

        let scoreEl = document.createElement('td');
        // nameEl.className = 'name-el';
        scoreEl.innerHTML = `<span>${score.score}</span>`;
        row.appendChild(scoreEl);
    }
};

displayScores();