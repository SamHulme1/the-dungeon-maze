let form = document.getElementById("game-form");
form.addEventListener("submit",handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    username = document.getElementById("adventurer-name").value;
    window.localStorage.setItem("username", username);
    form.submit();

}

function storeScore() {
    let highScore = score;
    window.localStorage.setItem("highScore", JSON.stringify(highScore));
}

function storeRank() {
    let ranking = rank;
    window.localStorage.setItem("rank", JSON.stringify(ranking))
}




