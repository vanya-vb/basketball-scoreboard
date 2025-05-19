const team1Container = document.getElementById('team-1');
const team2Container = document.getElementById('team-2');

const scoreContainerTeam1 = team1Container.querySelector('.score-container');
const scoreContainerTeam2 = team2Container.querySelector('.score-container');

const pointsContainerTeam1 = team1Container.querySelector('.points-container');
const pointsContainerTeam2 = team2Container.querySelector('.points-container');

const newGameBtn = document.getElementById('new-game-btn');

const team1 = {
    score: 0,
    container: scoreContainerTeam1,
    pointsContainer: pointsContainerTeam1
}

const team2 = {
    score: 0,
    container: scoreContainerTeam2,
    pointsContainer: pointsContainerTeam2
}

pointsContainerTeam1.addEventListener('click', (e) => handleScoreUpdate(e, team1));
pointsContainerTeam2.addEventListener('click', (e) => handleScoreUpdate(e, team2));

function handleScoreUpdate(e, team) {
    if (e.target.classList.contains("btn-1")) {
        team.score++;
    } else if (e.target.classList.contains("btn-2")) {
        team.score += 2;
    } else if (e.target.classList.contains("btn-3")) {
        team.score += 3;
    }

    render(team.container, team.score)
}

function render(container, score) {
    container.textContent = score;
}

newGameBtn.addEventListener('click', resetGame)

function resetGame() {
    [team1, team2].forEach(team => {
        team.score = 0;
        render(team.container, team.score);
    })
}

