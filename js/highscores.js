const highScoresList = document.getElementById("highScoresList");
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

highscores.forEach(highscore => {
    var row = highScoresList.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = highscore.name;
    cell2.innerHTML = highscore.score;
});