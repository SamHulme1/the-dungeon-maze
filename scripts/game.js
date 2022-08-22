let game = {
    inventory: [],
    items: [],
    room: [], 
    health : ['heart','heart','heart','heart','heart']
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
    roomImage = document.getElementsByClassName("output-image");
    if (randomRoom === 1){
        game.room.push('You come accross a partial cave-in, after moving some of the rubble, you discover a small passageway "I shouldnt have had that extra large breakfast" you think to yourself as you just about squeeze through. After following the passage for several minutes you feel the walls begin to move back and open up into a small chamber inside you find a');
        roomImage.src = "";
    } else if (randomRoom === 2){
        game.room.push('You approach two large ajar doors, which guard a large room. Inside the room sits a large retangular table infront of a roaring fireplace. On the table rest a number of plates a goblets with what smell like some sort of ale inside. Opposite the fire there is a larger throne sized chair made of old weponry. The room also features several small paintings and a cupboard containing strange victuals "guess ill skip lunch then" you think to yourself after smelling some of the food. After searching the room you find a ');
        roomImage = document.getElementsByClassName("output-image").src = "img/largeroom-1.jpg";
    } else if (randomRoom === 3){
        game.room.push('The passageway suddenly opens up into a large carved out room. Inside the room you can see an alter and what look like small wooden benches. "Maybe this used to be some kind of worshiping area" you think to yourself as you move further into the room. On the walls hang several small daggers and a number of simialrly sized painting depicting some sort of goblin god. There is a large pipe organ. several disguarded sheets with what looks like music written on them line the floor "or tourture chamber you laugh to yourself" After looking around some more you find a ');
        roomImage = document.getElementsByClassName("output-image").src = "img/largeroom-2.jpg";
    } else if (randomRoom === 4){
        game.room.push('After following a long corridoor for sometime, you come across a small dimply lit room. Inside the room is a small round table with cards layed out ontop of it. Further back in the room are two small size jail cells with the remains of somesort of humanoid creatures inside. It looks like whoever locked these poor souls inside didnt like loosing after inspecting the room further you find a ');
    } else if (randomRoom === 5){
        game.room.push('At the end of the path you see a small closed door, you knock a few times and to your suprise ... nobody answers. "well at least I tried" you think to yourself as you try the handle. The door falls open and inside you can see large crates, barrels and other storage containers you decide to open them. Inside you find a ');
    } else if (randomRoom === 6){
        game.room.push('You enter a medium sized room, inside the room are several small sized beds. At the bottom of each bed sits a small wooden trunk. The walls are decorated with colourful dyed fabrics. Mainly green though. Afterall, it is a goblins favorite colour. There are several small hanging lanterns making sure that the room is well lit. You look through the trunks and discover a ');
    } else if (randomRoom === 7){
        game.room.push('"well, well what do we have here" you say as you approach a large stone well. The well well has long since emptied but the pully system still works. Just about, you pull the bucket out and inside find a  ');
    } else if (randomRoom === 8){
        game.room.push(' You come acoss a large stone locked door. You try everything but the door wont move without its proper key. Youre forced to turn back. On the plus side you find a ');
    } else {
        game.room.push('You follow a long corridoor. On the walls hang metal lanterns the corridoor is make from rock, rock and somemore rock. Whilst you walk down the corridoor you find a ');
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
        game.items.push('potion');
    } else if (randomItem === 2){
        game.items.push('diamond ring');
    } else if (randomItem === 3){
        game.items.push('bag of gold Coins');
    } else if (randomItem === 4){
        game.items.push('key');
    } else if (randomItem === 5){
        game.items.push('bag of silver coins');
    } else if (randomItem === 6){
        game.items.push('bronse statue');
    } else if (randomItem === 7){
        game.items.push('bag of jemstones');
    } else if (randomItem === 8){
        game.items.push('crystal dagger');  
    } else {
        game.items.push('old pair of socks');
    }
    addToInventory();
    return game.items;
}

function createGameArea() {
    generateItem(); 
    generateRoom();
    let generatedOutput = document.getElementById("output-text");
    generatedOutput.innerHTML = `
    <p class="paragraph-text"> ${game.room} ${game.items}</p> `;
}

/**
 * This function adds the item found to the inventory and resets the items in the game array
 */
function addToInventory(){
  let itemFound = game.items[0];
  game.inventory.push(itemFound);
  let userInventory = document.getElementById("itemsInInventory");
  userInventory.innerHTML = `${game.inventory}`;
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