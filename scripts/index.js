let form = document.getElementById("game-form");
form.addEventListener("submit",handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    let username = document.getElementById("adventurer-name").value;
    window.localStorage.setItem("username", username);
    form.submit();
}