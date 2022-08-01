let game = {
    inventory: [],
    items: [],
    room: []
}

/**
 * Generator Functions
 */

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
}
/**
 * This function generates a randomRoom and then pushes the item to the items array in game
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









module.exports = { game, generateItem, generateRoom };