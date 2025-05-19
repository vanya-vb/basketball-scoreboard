const team1Container = document.getElementById('team-1');
const team2Container = document.getElementById('team-2');

const scoreContainerTeam1 = team1Container.querySelector('.score-container');
const scoreContainerTeam2 = team2Container.querySelector('.score-container');

const pointsContainerTeam1 = team1Container.querySelector('.points-container');
const pointsContainerTeam2 = team2Container.querySelector('.points-container');

const newGameBtn = document.getElementById('new-game-btn');

let scoreTeam1 = 0;
let scoreTeam2 = 0;

pointsContainerTeam1.addEventListener('click', (e) => {
    if (e.target.classList.contains("btn-1")) {
        scoreTeam1++;
    } else if (e.target.classList.contains("btn-2")) {
        scoreTeam1 += 2;
    } else if (e.target.classList.contains("btn-3")) {
        scoreTeam1 += 3;
    }

    render(scoreContainerTeam1, scoreTeam1)
});

pointsContainerTeam2.addEventListener('click', (e) => {
    if (e.target.classList.contains("btn-1")) {
        scoreTeam2++;
    } else if (e.target.classList.contains("btn-2")) {
        scoreTeam2 += 2;
    } else if (e.target.classList.contains("btn-3")) {
        scoreTeam2 += 3;
    }

    render(scoreContainerTeam2, scoreTeam2)
});

function render(container, score) {
    container.textContent = score;
}

newGameBtn.addEventListener('click', resetGame)

function resetGame() {
    scoreTeam1 = 0;
    scoreContainerTeam1.textContent = scoreTeam1;

    scoreTeam2 = 0;
    scoreContainerTeam2.textContent = scoreTeam2;
}

