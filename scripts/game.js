let game = {
    inventory: [],
    items: [],
    room: [], 
    health : ['heart', 'heart','heart','heart','heart']
}

/**
 * Generator Functions
 */

/**
 * This function generates a randomRoom and then pushes the item to the room array in game
 */

function generateRoom() {
    let randomRoom = Math.floor(Math.random()*10) +1;
    if (randomRoom === 1){
        game.room.push('corridoor');
    } else if (randomRoom === 2){
        game.room.push('large room');
    } else if (randomRoom === 3){
        game.room.push('large room two');
    } else if (randomRoom === 5){
        game.room.push('small room');
    } else if (randomRoom === 6){
        game.room.push('small room two');
    } else if (randomRoom === 7){
        game.room.push('bedroom');
    } else if (randomRoom === 8){
        game.room.push('well');
    } else if (randomRoom === 9){
        game.room.push('locked door');
    } else {
        game.room.push('cave in');
    }
}

/**
 * This function generates a randomItem and then pushes the item to the items array in game
 */

function generateItem() {
    let randomItem = Math.floor(Math.random()*10) +1;
    if (randomItem === 1){
        game.items.push('potion');
    } else if (randomItem === 2){
        game.items.push('sword');
    } else if (randomItem === 3){
        game.items.push('axe');
    } else if (randomItem === 4){
        game.items.push('key');
    } else {
        game.items.push('nothing');
    }
    return game.items;
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
   while(game.health.length < 5){
     game.health.push('heart');
   }
 }
 /**
 * This function will be called whenever the game needs to reset
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