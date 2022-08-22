let game = {
    inventory: [],
    items: [],
    room: [], 
    health : ['heart']
}

/**
 * Generator Functions
 */

/**
 * This function generates a randomRoom and then pushes the item to the room array in game
 */

function generateRoom() {
    game.room = [];
    let randomRoom = Math.floor(Math.random()*10) +1;
    if (randomRoom === 1){
        game.room.push('hidden Chamber');
        roomImage = document.getElementsByClassName("output-image").src = "";
    } else if (randomRoom === 2){
        game.room.push('large room');
        roomImage = document.getElementsByClassName("output-image").src = "img/largeroom-1.jpg";
    } else if (randomRoom === 3){
        game.room.push('large room two');
        roomImage = document.getElementsByClassName("output-image").src = "img/largeroom-2.jpg";
    } else if (randomRoom === 4){
        game.room.push('small room');
    } else if (randomRoom === 5){
        game.room.push('small room two');
    } else if (randomRoom === 6){
        game.room.push('bedroom');
    } else if (randomRoom === 7){
        game.room.push('well');
    } else if (randomRoom === 8){
        game.room.push('locked door');
    } else {
        game.room.push('corridoor');
    }
    return game.room;
}

/**
 * This function generates a randomItem and then pushes the item to the items array in game
 */

function generateItem() {
    game.items = [];
    let randomItem = Math.floor(Math.random()*10) +1;
    if (randomItem === 1){
        game.items.push('a potion');
    } else if (randomItem === 2){
        game.items.push('a sword');
    } else if (randomItem === 3){
        game.items.push('an axe');
    } else if (randomItem === 4){
        game.items.push('a key');
    } else {
        game.items.push('nothing');
    }
    return game.items;
}

function createGameArea() {
    generateItem(); 
    generateRoom();
    let generatedOutput = document.getElementById("game-output-area");
    generatedOutput.innerHTML = `
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-6 nopadding">
                <div class="output-image-container">
                    <img class ="output-image" src="img/bedroom.jpg" alt="the dugeon maze title image">
                </div>
            </div>
            <div class="col-12 col-md-6 nopadding">
                <div class="output-text-container">
                    <p class="paragraph-text">
                    ${game.room} ${game.items}
                    </p> 
                </div>
            </div>   
        </div> `
}

/**
 * This function adds the item found to the inventory and resets the items in the game array
 */
function addToInventory(){
  let itemFound = game.items[0];
  game.inventory.push(itemFound);
  game.items = [];
}

/**
 * This function increases the health in the game key back to maximum
 */
 function drinkPotion(){
    if(game.inventory.includes("potion")){
        while(game.health.length < 5){
            game.health.push('heart');
            let hp = document.querySelector('#hp-remaining');
            let addHeart = hp.cloneNode(true);
            hp.after(addHeart);
          }
    } else {
        alert("You don't have a potion");
    }
    
  }

  
 /**
 * This function will be called whenever the game needs to reset or when the user starts the game
 */

 function startNewGame(){
    game.inventory = [];
    game.items = [];
    game.room = [];
    game.health = ['heart', 'heart','heart','heart','heart'];
    generateRoom();
    generateItem();
 }

 /**
 * This function will be called whenever the user starts a new turn
 */

 function startNewTurn(){
    game.items = [];
    game.room = [];
    generateRoom();
    generateItem();
    //game.health? game.inventory?
 }

module.exports = { game, generateItem, generateRoom, addToInventory, drinkPotion, startNewGame, startNewTurn };