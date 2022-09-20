/* Unfinished Javascript for future scoreboard feature 
let scoreBoardArrayName = [];
let ScoreBoardArrayScore = [];
let ScoreBoardArrayRank = [];
localStorage.setItem("nameArray", JSON.stringify(scoreBoardArrayName));
localStorage.setItem("scoreArray", JSON.stringify(ScoreBoardArrayScore));
localStorage.setItem("rankArray", JSON.stringify(ScoreBoardArrayRank));
//create and set scoreboard

let scoreStatus = window.sessionStorage.getItem("ScoreReady");
JSON.parse(scoreStatus);
if (scoreStatus = true){
    updateScoreBoardArrays();
    updateScoreBoard();
    window.sessionStorage.clear();
} else {
    scoreStatus = false;
}

function updateScoreBoardArrays() {
    let names = localStorage.getItem("nameArray")
    JSON.parse(names);
    let scores = localStorage.getItem("scoreArray")
    JSON.parse(scores);
    let ranks = localStorage.getItem("rankArray")
    JSON.parse(ranks);
    let playerName = localStorage.getItem("username");
    let playerScore = localStorage.getItem("highScore");
    let playerRank = localStorage.getItem("rank");
    scoreBoardArrayName.push(playerName);
    ScoreBoardArrayScore.push(playerScore);
    ScoreBoardArrayRank.push(playerRank);
    localStorage.setItem("nameArray", JSON.stringify(scoreBoardArrayName));
    localStorage.setItem("scoreArray", JSON.stringify(ScoreBoardArrayScore));
    localStorage.setItem("rankArray", JSON.stringify(ScoreBoardArrayRank));
}

function updateScoreBoard(){
    let playerNameOnScoreBoard = document.getElementById("player-name");
    let playerScoreOnScoreBoard = document.getElementById("player-score");
    let PlayerRankOnScoreBoard = document.getElementById("player-rank");
    localStorage.getItem("nameArray");
    localStorage.getItem("scoreArray");
    localStorage.getItem("rankArray");
    for (names in scoreBoardArrayName) {
        let playerNameItem = document.createElement("li");
        playerNameItem.innerHTML = scoreBoardArrayName;
        playerNameOnScoreBoard.appendChild(playerNameItem);
    }
    for (scores in ScoreBoardArrayScore ){
        let playerScoreItem = document.createElement("li");
        playerScoreItem.innerHTML = ScoreBoardArrayScore;
        playerScoreOnScoreBoard.appendChild(playerScoreItem);
    }
    for (rank in ScoreBoardArrayRank) {
        let playerRankItem = document.createElement("li");
        playerRankItem.innerHTML = ScoreBoardArrayRank;
        PlayerRankOnScoreBoard.appendChild(playerRankItem);
    }
}

The bellow was removed from game.js when I realised I wouldn't have enough time to finish. 
I've kept all the files for referance and for if I want to finish this feature in the future:

function storeScore() {
        let highScore = score;
        window.localStorage.setItem("highScore", JSON.stringify(highScore));
    }
function storeRank() {
        let ranking = rank;
        window.localStorage.setItem("rank", JSON.stringify(ranking));
    }
function scoreIsReady() {
        let scoreReady = true;
        window.sessionStorage.setItem("ScoreReady", JSON.stringify(scoreReady));
    }

*/



