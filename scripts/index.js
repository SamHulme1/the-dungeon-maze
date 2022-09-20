window.addEventListener("load", updateScoreArea());
let form = document.getElementById("game-form");
form.addEventListener("submit",handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    let username = document.getElementById("adventurer-name").value;
    window.localStorage.setItem("username", username);
    form.submit();
}

/**-update score area 
 * this function updates the score area when the user has attained a score 
 * its based on the last user who played the game
 * if the score isnt assigned a value yet then the area doesn't display
 */
function updateScoreArea (){
    let scoreArea = document.getElementById("highscore-area");
    let name = localStorage.getItem("username");
    let score = JSON.parse(localStorage.getItem("highScore"));
    let rank = localStorage.getItem("rank");
    if (score == null){
        scoreArea.innerHTML=`<p>You don't have a score yet</p>`;
    } else {
        scoreArea.innerHTML= `<p class=paragraph-text> Last user highscore <br> Name:${name} <br> Score:${score} <br> Rank:${rank} <br> can you beat them? </p>`;

    }

}

