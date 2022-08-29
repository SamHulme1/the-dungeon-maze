/**-----------------------------------------------------------------------------------game object */ 
const game = {
    inventory: [],
    items: [],
    room: [], 
    monster: [],
    attack: [],
    health : [],
    monsterHealth : [],
    score : 0
};



/**-----------------------------------------------------------------------------------game buttons */ 
const nextRoomButton = document.getElementById("next-room");
const attackButton = document.getElementById("attack");
const blockButton = document.getElementById("block");
const potionButton = document.getElementById("drink-potion");

/**-----------------------------------------------------------------------------------game buttons functions */

initiateGame();

function resetGame() {
    createHealth();
    game.inventory = [];
    game.items = [];
    game.room = [];
    game.monster = [];
    game.attack = [];
    game.monsterHealth = [];
    game.score = 0;
    blockButton.disabled = true;
    attackButton.disabled = true;
    potionButton.disabled = true;
    nextRoomButton.disabled = false;
    let roomImage = document.getElementById("output-image");
    roomImage.innerHTML = ` <img class ="hero-image center" src="img/tavern.jpg" alt="the dugeon maze title image">`;
    let generatedOutput = document.getElementById("output-text");
    generatedOutput.innerHTML = `<p class="paragraph-text">
    The dungeon of the once great king ... is renowned for it's many treasures but also it's deadly inhabitents. You've come across hard times in resent months, the harvests have been poor, and you have been forced to find other means of accumulating income. So you ended up here. In this inn on the otherside of the world. Many others like you have come to seek their fortune but many will fail. You decide to have one last ale before calling it a day. You'll enter the maze at first light. 
    press continue to start your adventure. 
</p> `

}

function initiateGame() {
    createHealth();
    blockButton.disabled = true;
    attackButton.disabled = true;
    potionButton.disabled = true;
}

function newTurn(){
    generateItem(); 
    generateRoom();
    generateMonster();
    createMonsterHealth();
    nextRoomButton.disabled  = true;
    blockButton.disabled = false;
    attackButton.disabled = false;
    potionButton.disabled = false;
    let generatedOutput = document.getElementById("output-text");
    if (game.room.includes(' You come acoss a large stone locked door. You try the lock with the key in your inventory. The door snaps open revealing a large throne room. On the throne sits the skeletol remains of the king. You watch as they slowly twitch and come to life. You must now fight the dungeons boss!')){
        createBossHealth();
        generatedOutput.innerHTML = `<p class="paragraph-text">${game.room}</p>`;
    } else {
        generatedOutput.innerHTML = `
        <p class="paragraph-text"> ${game.room} ${game.monster} ${game.items}</p> `;
    };
}

function drinkPotion(){
  if(game.inventory.includes("potion")){
    while(game.health.length < 5){
        let hp = document.getElementById('hp-remaining');
        let heart = document.createElement('i');
        heart.className = "fa-solid fa-heart";
        hp.appendChild(heart);
        game.health.push("Heart");
    }
  } else {
    alert("You don't have a potion");
  }
}
function block(){
  fight();
  if (game.attack.includes("Monster Blocks")) {
    alert("You both block");
  } else if (game.attack.includes("Monster Attacks")){
    alert("You block the monster");
  } else if (game.attack.includes("Monster Hits")){
    alert("You try and block the monster but they're too fast");
    damage();
  }
  game.attack = [];
}

function attack(){
    fight();
    if (game.attack.includes("Monster Blocks")) {
        alert("The monster blocks your hit");
    } else if (game.attack.includes("Monster Attacks")){
        alert("The monster attacks but they're too slow");
        monsterdamaged();
    } else if (game.attack.includes("Monster Hits")){
        alert("You try and hit the monster but they're too fast");
        damage();
    }
    game.attack = [];
}

/**
 * -----------------------------------------------------------------------------------Generator Functions
 */

/**
 * This function generates a randomRoom and then pushes the room to the room array in game, the room generated contains a text description which is then read later on in the code. At the start of the fuction the room array in the game is cleared so that a new value can be stored. 
 */

function generateRoom() {
    // reset the game room array
    game.room = [];
    // generate a random number 
    let randomRoom = Math.floor(Math.random()*10) +1;
    //store the element with the class name of output-image in variable room image
    let roomImage = document.getElementById("output-image");
    // if statement to assign the generated number a room
    if (randomRoom === 1){
        // push the room description to the room array
        game.room.push('You come accross a partial cave-in, after moving some of the rubble, you discover a small passageway "I shouldnt have had that extra large breakfast" you think to yourself as you just about squeeze through. After following the passage for several minutes you feel the walls begin to move back and open up into a small chamber inside you find a');
        // assign the correct image to the correct room. change the innerHTML of roomImage to relect this
        roomImage.innerHTML = ` <img class ="hero-image center" src="img/tavern.jpg" alt="the dugeon maze title image">`;
    } else if (randomRoom === 2){
        // push the room description to the room array
        game.room.push('You approach two large ajar doors, which guard a large room. Inside the room sits a large retangular table infront of a roaring fireplace. On the table rest a number of plates a goblets with what smell like some sort of ale inside. Opposite the fire there is a larger throne sized chair made of old weponry. The room also features several small paintings and a cupboard containing strange victuals "guess ill skip lunch then" you think to yourself after smelling some of the food. After searching the room you find a ');
         // assign the correct image to the correct room. change the innerHTML of roomImage to relect this
        roomImage.innerHTML = ` <img class ="hero-image center" src="img/largeroom-1.jpg" alt="the dugeon maze title image">`;
    } else if (randomRoom === 3){
        // push the room description to the room array
        game.room.push('The passageway suddenly opens up into a large carved out room. Inside the room you can see an alter and what look like small wooden benches. "Maybe this used to be some kind of worshiping area" you think to yourself as you move further into the room. On the walls hang several small daggers and a number of simialrly sized painting depicting some sort of goblin god. There is a large pipe organ. several disguarded sheets with what looks like music written on them line the floor "or tourture chamber you laugh to yourself" After looking around some more you find a ');
         // assign the correct image to the correct room. change the innerHTML of roomImage to relect this
        roomImage.innerHTML = ` <img class ="hero-image center" src="img/large-room-2.jpg" alt="the dugeon maze title image">`;
    } else if (randomRoom === 4){
        // push the room description to the room array
        game.room.push('After following a long corridoor for sometime, you come across a small dimply lit room. Inside the room is a small round table with cards layed out ontop of it. Further back in the room are two small size jail cells with the remains of somesort of humanoid creatures inside. It looks like whoever locked these poor souls inside didnt like loosing after inspecting the room further you find a ');
         // assign the correct image to the correct room. change the innerHTML of roomImage to relect this
        roomImage.innerHTML = ` <img class ="hero-image center" src="img/small-room-1.jpg" alt="the dugeon maze title image">`;
    } else if (randomRoom === 5){
        // push the room description to the room array
        game.room.push('At the end of the path you see a small closed door, you knock a few times and to your suprise ... nobody answers. "well at least I tried" you think to yourself as you try the handle. The door falls open and inside you can see large crates, barrels and other storage containers you decide to open them. Inside you find a ');
         // assign the correct image to the correct room. change the innerHTML of roomImage to relect this
        roomImage.innerHTML = ` <img class ="hero-image center" src="img/small-room-2.jpg" alt="the dugeon maze title image">`;
    } else if (randomRoom === 6){
        // push the room description to the room array
        game.room.push('You enter a medium sized room, inside the room are several small sized beds. At the bottom of each bed sits a small wooden trunk. The walls are decorated with colourful dyed fabrics. Mainly green though. Afterall, it is a goblins favorite colour. There are several small hanging lanterns making sure that the room is well lit. You look through the trunks and discover a ');
         // assign the correct image to the correct room. change the innerHTML of roomImage to relect this
        roomImage.innerHTML = ` <img class ="hero-image center" src="img/bedroom.jpg" alt="the dugeon maze title image">`;
    } else if (randomRoom === 7){
        // push the room description to the room array
        game.room.push('"well, well what do we have here" you say as you approach a large stone well. The well well has long since emptied but the pully system still works. Just about, you pull the bucket out and inside find a  ');
         // assign the correct image to the correct room. change the innerHTML of roomImage to relect this
        roomImage.innerHTML = ` <img class ="hero-image center" src="img/well.jpg" alt="the dugeon maze title image">`;
    } else if (randomRoom === 8){
        // push the room description to the room array
        if(game.inventory.includes("key")){
            game.room.push(' You come acoss a large stone locked door. You try the lock with the key in your inventory. The door snaps open revealing a large throne room. On the throne sits the skeletol remains of the king. You watch as they slowly twitch and come to life. You must now fight the dungeons boss!');
        } else {
            game.room.push(' You come acoss a large stone locked door. You try everything but the door wont move without its proper key. Youre forced to turn back. On the plus side you find a ');
            // assign the correct image to the correct room. change the innerHTML of roomImage to relect this
           roomImage.innerHTML = ` <img class ="hero-image center" src="img/locked-door.jpg" alt="the dugeon maze title image">`;
        };
    } else {
        // push the room description to the room array
        game.room.push('You follow a long corridoor. On the walls hang metal lanterns the corridoor is make from rock, rock and somemore rock. Whilst you walk down the corridoor you find a ');
         // assign the correct image to the correct room. change the innerHTML of roomImage to relect this
        roomImage.innerHTML = ` <img class ="hero-image center" src="img/corridoor.jpg" alt="the dugeon maze title image">`;
    }
     // return the generated value to the room array in the game object
    return game.room;
}

/**
 * This function generates a randomItem and then pushes the item to the items array in game it then calls the function addToInventory which passes the generated value to the inventory array in the game object.
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
    return game.items;
}

function generateMonster() {
    game.monster = [];
    createMonsterHealth ();
    let randomMonster = Math.floor(Math.random()*10) +1;
    if (randomMonster === 1){
        game.monster.push('old goblin guarding a ');
    } else if (randomMonster === 2){
        game.monster.push('giant rat guarding a ');
    } else if (randomMonster === 3){
        game.monster.push('mad old man, looks like hes been down here a while. He has a ');
    } else if (randomMonster === 4){
        game.monster.push('zombie who has a ');
    } else if (randomMonster === 5){
        game.monster.push('fearsome orc treasuring he fights fearsly over a ');
    } else if (randomMonster === 6){
        game.monster.push('red dragon smiling at you. How dare you try and steal his most treasured item a ');
    } else if (randomMonster === 7){
        game.monster.push('ogre scratching its head and looking at you, "hey dont you touch my "');
    } else if (randomMonster === 8){
        game.monster.push('crawling out of a small hole emerges a warewolf he carrys a ');  
    } else {
        game.monster.push('ghost of your mother wonders towards you, she hands you a ');
    }
    return game.monster;
}


/**Gameplay mechanics */

/**
 * This function adds the item found to the inventory and then manipulates the DOM to display what the user has in their inventory to them on the webpage.
 */
function addToInventory(){
  //get the first item in the game array
  let itemFound = game.items[0];
  //take this item and add it to the inventory array at the index of 0 removing no other items
  game.inventory.splice(0,0,itemFound);
  // get the element with the id of inventory
  let inventory = document.getElementById("inventory");
  // create a new element li
  let itemsInInventory = document.createElement("li");
  // get the inner html to be the value of the inventory array at the index of 0
  itemsInInventory.innerHTML = `${game.inventory[0]}`;
  // add the created child to the element with the id of inventory
  inventory.appendChild(itemsInInventory);
} 


function createMonsterHealth () {
    while(game.monsterHealth.length < 3){
        let monsterHp = document.getElementById("monster-hp");
        let monsterHeart = document.createElement(`i`);
        monsterHeart.className = "fa-solid fa-heart monster-heart";
        monsterHp.appendChild(monsterHeart);
        game.monsterHealth.push("Heart");
    
    }
}

function createHealth () {
    while(game.health.length < 5){
        let hp = document.getElementById("hp-remaining");
        let heart = document.createElement(`i`);
        heart.className = "fa-solid fa-heart";
        hp.appendChild(heart);
        game.health.push("Heart");
    
    }
}

function createBossHealth () {
    while(game.monsterHealth.length < 10){
        let monsterHp = document.getElementById("monster-hp");
        let monsterHeart = document.createElement(`i`);
        monsterHeart.className = "fa-solid fa-heart monster-heart";
        monsterHp.appendChild(monsterHeart);
        game.monsterHealth.push("Heart");
    
    }
}

function calculateScore () {
    console.log(game.score);
    let totalScore = game.score;
    for (let i = 0; i < game.inventory.length; i++) {
        if (game.inventory.includes("diamond ring")){
            200 + totalScore;
            console.log(game.score);
        } else if (game.inventory.includes("bag of gold coins")){
            150 + totalScore;
            console.log(game.score);
        } else if (game.inventory.includes("bag of silver coins")){
            50 + totalScore;
            console.log(game.score);
        }else if (game.inventory.includes("bronse statue")){
            20 + totalScore;
            console.log(game.score);
        }else if (game.inventory.includes("bag of jemstones")){
            500 + totalScore;
            console.log(game.score);
        }else if (game.inventory.includes("crystal dagger")){
            20 + totalScore;
            console.log(game.score);
        }else if (game.inventory.includes("old pair of socks")){
            0 + totalScore;
            console.log(game.score);
        };
        
    };
}

function dead(){
    nextRoomButton.disabled = true;
    attackButton.disabled = true;
    blockButton.disabled = true;
    potionButton.disabled = true;
    calculateScore();
    let deathScreen = document.getElementById("output-image");
    deathScreen.innerHTML = `<img class ="hero-image center" src="img/endgame.jpg" alt="the dugeon maze title image">`;
    let generatedOutput = document.getElementById("output-text");
    generatedOutput.innerHTML = `
    <p class="paragraph-text"> The dungeon claims another victim. Better luck next time! Score: ${game.score.valueOf()}</p>`;
}

/**gameplay combat mechanics */ 

function damage(){
    let recievedDamage = document.getElementById('hp-remaining');
    if (game.health.length >= 2){
        game.health.pop();
        recievedDamage.removeChild(recievedDamage.lastElementChild);
        console.log(game.health);
    } else {
        game.health.pop();
        recievedDamage.removeChild(recievedDamage.lastElementChild);
        alert("you died");
        dead();
    }//you died doesn't work if there arn't already hearts in the health array?
}

function monsterdamaged(){
    let deltDamage = document.getElementById("monster-hp");
    if (game.monsterHealth.length >= 2){
        game.monsterHealth.pop();
        deltDamage.removeChild(deltDamage.lastElementChild);
        console.log(game.monsterHealth);
    } else {
        alert("monster slain");
        game.monsterHealth.pop();
        deltDamage.removeChild(deltDamage.lastElementChild);
        addToInventory();
        console.log(game.monsterHealth);
        nextRoomButton.disabled = false;
    };
}

 
function fight (){
    let monsterAttack = Math.floor(Math.random()*3)+1;
    if (monsterAttack == 1) {
        game.attack.push("Monster Blocks");
    } else if(monsterAttack == 2) {
        game.attack.push("Monster Attacks");
    } else if(monsterAttack == 3) {
        game.attack.push("Monster Hits");
    }
    return game.attack;
        
}

function winGame(){

}
  
 /**
 * This function will be called whenever the game needs to reset or when the user starts the game
 */
 //will need to be changed later on to stop stats from reseting with every refresh


module.exports = { game, generateItem, generateRoom, addToInventory, drinkPotion, startNewGame, startNewTurn };