let score = 0;
let rank = "";
let mobileFeedbackDisplay = document.getElementById("small-screen-output");
let outputText = document.getElementById("output-text");
let outputImage = document.getElementById("output-image");
window.addEventListener("load", function() {
    initiateGame();
    removeLoadScreen();
    welcomeMessage();
});
/**-initiabte game funtion
 * called when the user first enters the gamepage 
 * this function creates the users health for the first time
 * sets the button values for page
 * displays a welcome message to the user
 */
 function initiateGame() {
    createHealth();
    blockButton.disabled = true;
    blockButton.style.color = "#812b09";
    attackButton.disabled = true;
    attackButton.style.color = "#812b09";
    potionButton.disabled = true;
    potionButton.style.color = "#812b09";
    nextRoomButton.disabled = false;
    nextRoomButton.style.color = "#3da861";
}
/**-Welcome message
 * gets the users name from local storage assigns it to a variable and then uses
 * template literals to pass the value to an alert message. On smaller screens were alert messages 
 * dont display. Outputs the message to a seperate div called small-screen-output and stored in the global variable
 * mobileFeedbackDisplay
 * if the user doesn't have a username for some reason displays welcome mysterious one.
 */
 function welcomeMessage() {
    let username = localStorage.getItem("username");
    if (username == null) {
        alert(`Welcome to the dungeon mysterious one`);
        mobileFeedbackDisplay.innerHTML = `<p class="paragraph-text fade-in">Welcome to the dungeon mysterious one</p>`;
    } else {
        alert(`Welcome to the dungeon ${username}`);
        mobileFeedbackDisplay.innerHTML = `<p class="paragraph-text fade-in">Welcome to the dungeon ${username}</p>`;
    }
}
/**-remove load screen function
 * removes the loadscreen by setting its display to none
 */
function removeLoadScreen() {
    let loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display="none";
}
/**-game buttons functions */
/**-reset buttons functions
 * sets all arrays and values back to zero or empty
 * calls the create health function to create the users health
 * sets the output text and image to their original values from game-start.html
 * redisables buttons back to how they first appear
 */
document.getElementById("reset-game-btn").addEventListener("click", function resetGame() {
    score = 0;
    rank = "";
    game.health = [];
    game.inventory = [];
    game.items = [];
    game.room = [];
    game.monster = [];
    game.attack = [];
    game.monsterHealth = [];
    resetGameAreas();
    createHealth();
    blockButton.disabled = true;
    blockButton.style.color = "#812b09";
    attackButton.disabled = true;
    attackButton.style.color = "#812b09";
    potionButton.disabled = true;
    potionButton.style.color = "#812b09";
    nextRoomButton.disabled = false;
    nextRoomButton.style.color = "#3da861";
    outputImage.innerHTML = ` <img class="game-image fade-in" src="img/tavern.jpg" alt="the dugeon maze title image">`;
    outputText.innerHTML = `<p class="paragraph-text fade-in">
    The dungeon of the once great king Aleon is renowned for it's many treasures but also it's deadly inhabitents. You've come across hard times in resent months, the harvests have been poor, and you have been forced to find other means of accumulating income. So you ended up here. In this inn on the otherside of the world. Many others like you have come to seek their fortune but many will fail. You decide to have one last ale before calling it a day. You'll enter the maze at first light. 
    press the room button to start your adventure. 
    </p> `;
});
/**-new turn event/function
 * called when the user presses the next room button
 * calls the functions to generate the items, rooms, monsters. and create the monsters health.
 * disables the next room button preventing the user from moving onto the next room for now. 
 * uses an if statement to check if the room array contains the alternative locked door description. If it does, 
 * the user will be able to access the dungeon boss room. If it doesn't the inner html for the output text is built
 * using template literals from each of the arrays of item, room and monster. 
 * The alternative door description can only be reach if the user has a key. However, this is part of another function further down. 
 * when the user enters the boss room only the room array text is displayed. 
 */
document.getElementById("next-room").addEventListener("click", function newTurn() {
    generateItem();
    generateRoom();
    generateMonster();
    createMonsterHealth();
    nextRoomButton.disabled = true;
    nextRoomButton.style.color = "#812b09";
    blockButton.disabled = false;
    blockButton.style.color = "#3da861";
    attackButton.disabled = false;
    attackButton.style.color = "#3da861";
    potionButton.disabled = false;
    potionButton.style.color = "#3da861";
    if (game.room.includes(' You come acoss a large stone locked door. You try the lock with the key in your inventory. The door snaps open revealing a large throne room. On the throne sits the skeletol remains of the king. You watch as they slowly twitch and come to life. You must now fight the dungeons boss!')) {
        createBossHealth();
        outputText.innerHTML = `<p class="paragraph-text fade-in">${game.room}</p>`;
    } else {
        outputText.innerHTML = `
            <p class="paragraph-text fade-in"> ${game.room} ${game.monster} ${game.items}</p> `;
    }
});
/**-This function is used whenever the user presses the drink potion button
 * it first checks to see if a potion is in the inventory. If it and the users health is less than 5 
 * hearts in the health array then it adds hearts to the array up to a maxium of 5 using iteration and
 * prints new hearts using the appendchild technique as children of the element with the id of hp-remaining
 */
document.getElementById("drink-potion").addEventListener("click", function drinkPotion() {
    if (game.inventory.includes("potion")) {
        while (game.health.length < 5) {
            let hp = document.getElementById('hp-remaining');
            let heart = document.createElement('i');
            heart.className = "fa-solid fa-heart";
            hp.appendChild(heart);
            game.health.push("Heart");
        }
        removePotion();
    } else {
        alert("You don't have a potion");
        mobileFeedbackDisplay.innerHTML = `<p class="paragraph-text fade-in">You don't have a potion</p>`;
    }
});
/**-Block and attack functions
 * activate when the block button/attack button is clicked
 * call the fight fuctions to generate the attack array
 * then uses an if statement to determine which action to take next based on 
 * the text in the array. 
 * If the user is damaged, it calls the damage function
 */
document.getElementById("block").addEventListener("click", function block() {
    fight();
    if (game.attack.includes("Monster Blocks")) {
        alert("You both block");
    } else if (game.attack.includes("Monster Attacks")) {
        alert("You block the monster");
    } else if (game.attack.includes("Monster Hits")) {
        alert("You try and block the monster but they're too fast");
        damage();
    }
});
document.getElementById("attack").addEventListener("click", function attack() {
    fight();
    if (game.attack.includes("Monster Blocks")) {
        alert("The monster blocks your hit");
        mobileFeedbackDisplay.innerHTML = `<p class="paragraph-text fade-in">The monster blocks your hit</p>`;
    } else if (game.attack.includes("Monster Attacks")) {
        alert("The monster attacks but they're too slow");
        mobileFeedbackDisplay.innerHTML = `<p class="paragraph-text fade-in">The monster attacks but they're too slow</p>`;
        monsterdamaged();
    } else if (game.attack.includes("Monster Hits")) {
        alert("You try and hit the monster but they're too fast");
        mobileFeedbackDisplay.innerHTML = `<p class="paragraph-text fade-in">You try and hit the monster but they're too fast</p>`;
        damage();
    }
});
/**
 * -----------------------------------------------------------------------------------Generator Functions
 */

/** generate room function
 * This function generates a randomRoom and then pushes the room to the room array in game,
 * At the start of the fuction the room array in the game is cleared so that a new value can be stored.
 * used dictionaires to map the images descriptions to the generated numbers which are then displayed to the user
 * when the inventory contains a key and the room = room 8, an alternative room description and image is displayed.
 *  
 */
function generateRoom() {
    game.room = [];
    let randomRoom = Math.floor(Math.random() * 9) + 1;
    let imageInfo = roomIdToImageObjectMapper[randomRoom];
    let turnText;
    if (randomRoom === 8) {
        if (game.inventory.includes("key")) {
            turnText = imageInfo.sentence1;
            outputImage.innerHTML = `<img class ="game-image fade-in" src="${imageInfo.imageName2}" alt="${imageInfo.imageAlt2}">`;
        } else {
            turnText = imageInfo.sentence2;
            outputImage.innerHTML = `<img class ="game-image fade-in" src="${imageInfo.imageName1}" alt="${imageInfo.imageAlt1}">`;
        }
    } else {
        turnText = imageInfo.sentence1;
        outputImage.innerHTML = `<img class ="game-image fade-in" src="${imageInfo.imageName}" alt="${imageInfo.imageAlt}">`;
    }
    game.room.push(turnText);
    return game.room;
}
/** generate item function 
 * This function generates a number and then maps that number to an item using dictionaries and the inventoryIdMapper 
 * the item is then pushed to the items array in the game object.
 */
function generateItem() {
    game.items = [];
    let randomItem = Math.floor(Math.random() * 10) + 1;
    game.items.push(inventoryIdMapper[randomItem]);
    return game.items;
}
/**generate monster function
 * works in exactly the same way as the generate item funtion
 */
function generateMonster() {
    game.monster = [];
    let randomMonster = Math.floor(Math.random() * 10) + 1;
    game.monster.push(generateMonsterToMapper[randomMonster]);
    return game.monster;
}
/** add to inventory function
 * This function adds the item found to the inventory and then manipulates the DOM using the append child method
 * to display what the user has in their inventory to them on the webpage.
 * if the item is a potion, creates an id for the item that then works with the potion function when 
 * a potion is removed. gets the item from the game item array with the index of 0 and splices it into the 
 * inventory array.
 */
function addToInventory() {
    let itemFound = game.items[0];
    game.inventory.splice(0, 0, itemFound);
    let inventory = document.getElementById("inventory");
    let itemsInInventory = document.createElement("li");
    if (itemFound == "potion") {
        itemsInInventory.innerHTML = `${game.inventory[0]}`;
        itemsInInventory.className = "potionInInventory";
        inventory.appendChild(itemsInInventory);
    } else {
        itemsInInventory.innerHTML = `${game.inventory[0]}`;
        inventory.appendChild(itemsInInventory);
    }
}
/**create monster health function
 * this function creates the monsters health by passing hearts to the monster health array
 * when the array length is less than 3    
 * adds hearts to the monster health area in the html using the append child method
 */
function createMonsterHealth() {
    while (game.monsterHealth.length < 3) {
        let monsterHp = document.getElementById("monster-hp");
        let monsterHeart = document.createElement(`i`);
        monsterHeart.className = "fa-solid fa-heart monster-heart";
        monsterHp.appendChild(monsterHeart);
        game.monsterHealth.push("Heart");
    }
}
/**create player health function
 * this function creates the player health by passing hearts to the health array
 * when the array length is less than 5    
 * adds hearts to the health area in the html using the append child method
 */
function createHealth() {
    while (game.health.length < 5) {
        let hp = document.getElementById("hp-remaining");
        let heart = document.createElement(`i`);
        heart.className = "fa-solid fa-heart";
        hp.appendChild(heart);
        game.health.push("Heart");
    }
}
/**create boss health function
 * this function creates the boss health by passing hearts to the monster health array
 * when the array length is less than 10    
 * adds hearts to the monster health area in the html using the append child method
 */
function createBossHealth() {
    while (game.monsterHealth.length < 10) {
        let monsterHp = document.getElementById("monster-hp");
        let monsterHeart = document.createElement(`i`);
        monsterHeart.className = "fa-solid fa-heart monster-heart";
        monsterHp.appendChild(monsterHeart);
        game.monsterHealth.push("Heart");
        game.monster = [];
        game.monster.push("boss");
    }
}
/**calculate score function
 * sets total score to equal score 
 * iterates through the items in the inventory and adds them to total score based on their value in
 * gameInventoryScoreMapper
 * sets score to equal total score after totalscore has been calculated
 * calls the calculate rank function now that the score has been updated
 */
function calculateScore() {
    let totalScore = score;
    for (let items in game.inventory) {
      if(totalScore == 0){
        totalScore += gameInventoryScoreMapper[game.inventory[items]];
      }
    }
    score = totalScore;
    storeScore();
    calculateRank();
}
/**calculate rank function
 * rounds the score value to the nearest 100 by using math.ceil method
 * if score to rank is greater than or equal to 1000 sets the rank to dungeon master
 * else assign it a value in the rank mapper by passing it the key of the scoreToRank value
 */
function calculateRank() {
    let scoreToRank = Math.ceil(score / 100) * 100;
    if (scoreToRank >= 1000) {
        rank = "Dungeon Master";
    } else {
        rank = rankMapper[scoreToRank];
    }
    storeRank();
}
/**-Storage functions these functions store the users score and rank */
function storeScore() {
    let highScore = score;
    window.localStorage.setItem("highScore", JSON.stringify(highScore));
}
function storeRank() {
    let ranking = rank;
    window.localStorage.setItem("rank", JSON.stringify(ranking));
}
/**dead function
 * turns off all the buttons
 * calls the caluclate score function
 * sets the output image to the death image
 * sets the generated output text to the death screen text passing it the values for score and rank in template literals
 */
function dead() {
    nextRoomButton.disabled = true;
    nextRoomButton.style.color = "#812b09";
    attackButton.disabled = true;
    attackButton.style.color = "#812b09";
    blockButton.disabled = true;
    blockButton.style.color = "#812b09";
    potionButton.disabled = true;
    potionButton.style.color = "#812b09";
    calculateScore();
    outputImage.innerHTML = `<img class ="game-image fade-in" src="img/death-screen.jpg" alt="the dugeon maze death image">`;
    outputText.innerHTML = `
        <p class="paragraph-text fade-in"> The dungeon claims another victim. Better luck next time! Score: ${score} Rank: ${rank}</p>`;
}
/**damage functions
 * get the elements with the ids of hp-remaing and monster-hp 
 * if the health values are less than or equal to 2 
 * remove a heart from the health array
 * remove the last child of the element of either hp-remaining or monster-hp
 * if the health arrays are less than 2 then either display an alert saying the monster died or that the 
 * player died.
 * if the player died call the death function
 * if the monster died disable the attack buttons and enable the next room button
 * call the add to inventory function 
 * if the boss was killed call the win game function and alert the user that the boss has been killed  */
function damage() {
    let recievedDamage = document.getElementById('hp-remaining');
    if (game.health.length >= 2) {
        game.health.pop();
        recievedDamage.removeChild(recievedDamage.lastElementChild);
    } else {
        game.health.pop();
        recievedDamage.removeChild(recievedDamage.lastElementChild);
        alert("you died");
        mobileFeedbackDisplay.innerHTML = `<p class="paragraph-text fade-in">you died</p>`;
        dead();
    }
}

function monsterdamaged() {
    let deltDamage = document.getElementById("monster-hp");
    if (game.monsterHealth.length >= 2) {
        game.monsterHealth.pop();
        deltDamage.removeChild(deltDamage.lastElementChild);
    } else {
        if (game.monster.includes("boss")) {
            alert("boss slain");
            mobileFeedbackDisplay.innerHTML = `<p class="paragraph-text fade-in">boss slain</p>`;
            winGame();
        } else {
            alert("monster slain");
            game.monsterHealth.pop();
            deltDamage.removeChild(deltDamage.lastElementChild);
            addToInventory();
            mobileFeedbackDisplay.innerHTML = `<p class="paragraph-text fade-in">Monster slain</p>`;
            nextRoomButton.disabled = false;
            nextRoomButton.style.color = "#3da861";
            blockButton.disabled = true;
            blockButton.style.color = "#812b09";
            attackButton.disabled = true;
            attackButton.style.color = "#812b09";
        }
    }
}
/**Remove Potion Function
 * gets the inventory id and the id of an element with potion from the inventory
 * removes the potion from the inventory array
 * removes the potion from the inventory html
 */
function removePotion(){
    let inventory = document.getElementById("inventory");
    let potionRemovefromHtml = document.getElementsByClassName("potionInInventory");
    let removePotionfromArray = game.inventory.indexOf("potion");
    inventory.removeChild(potionRemovefromHtml[0]);
    game.inventory.splice(removePotionfromArray, 1);
}
/**Fight Function 
 * resets the game attack array to empty
 * creates a random number between 1 and 3
 * takes the number and uses it as a key to read the dictonary attack to message mapper
 * pushes the result to the attack array
 * returns the attack array
 */
function fight() {
    game.attack = [];
    let monsterAttack = Math.floor(Math.random() * 3) + 1;
    game.attack.push(attackToMessageMapper[monsterAttack]);
    return game.attack;
}
/**resetGameAreas funcition
 * resets the html in the elements of hp-remaining, monster-hp and inventory 
 */
function resetGameAreas() {
    let hp = document.getElementById("hp-remaining");
    let monsterHp = document.getElementById("monster-hp");
    let inventory = document.getElementById("inventory");
    hp.innerHTML = "";
    monsterHp.innerHTML = "";
    inventory.innerHTML = "";
    mobileFeedbackDisplay.innerHTML = "";
}
/**Win game function
 * sets all the buttons to their disabled state
 * calls the calculate score function
 * changes the html image to be the win images 
 * changes the output text to the win game text which also show the user their score and rank using template literals
 */
function winGame() {
    nextRoomButton.disabled = true;
    nextRoomButton.style.color = "#812b09";
    attackButton.disabled = true;
    attackButton.style.color = "#812b09";
    blockButton.disabled = true;
    blockButton.style.color = "#812b09";
    potionButton.disabled = true;
    potionButton.style.color = "#812b09";
    calculateScore();
    outputImage.innerHTML = `<img class ="game-image fade-in" src="img/endgame.jpg" alt="the dugeon maze title image">`;
    outputText.innerHTML = `
        <p class="paragraph-text fade-in"> The dungeon bosses lifeless corpse falls to the ground. You search around the room and discover a hidden door behind the throne. The door opens into a passage leading to the dungeons exit. Congradulations you beat the dungeon Score: ${score} Rank: ${rank}</p>`;
}