const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const recentScore = localStorage.getItem('recentScore')
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

finalScore.innerText = recentScore;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = false;
})

saveHighScore = e => {

    e.preventDefault();
    const score = {
        score: recentScore,
        name: username.value
    };

    highscores.push(score);
    highscores.sort((a, b) => a.score - b.score);
    highscores.splice(10);

    localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.assign("/html/highscores.html");

    highscores.push(score);
};