let game = {
    inventory: [],
    items: [],
    room: ''
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
}









module.exports = { game, generateItem };