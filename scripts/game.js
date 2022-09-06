window.onload = (event) => {
    /**-----------------------------------------------------------------------------------game buttons functions */
    initiateGame();

    document.getElementById("reset-game-btn").addEventListener("click", function resetGame(){
        game.health = [];
        game.inventory = [];
        game.items = [];
        game.room = [];
        game.monster = [];
        game.attack = [];
        game.monsterHealth = [];
        game.score = 0;
        resetGameAreas();
        createHealth();
        blockButton.disabled = true;
        attackButton.disabled = true;
        potionButton.disabled = true;
        nextRoomButton.disabled = false;
        roomImage = document.getElementById("output-image");
        roomImage.innerHTML = ` <img class="hero-image center" src="img/tavern.jpg" alt="the dugeon maze title image">`;
        let generatedOutput = document.getElementById("output-text");
        generatedOutput.innerHTML = `<p class="paragraph-text">
        The dungeon of the once great king ... is renowned for it's many treasures but also it's deadly inhabitents. You've come across hard times in resent months, the harvests have been poor, and you have been forced to find other means of accumulating income. So you ended up here. In this inn on the otherside of the world. Many others like you have come to seek their fortune but many will fail. You decide to have one last ale before calling it a day. You'll enter the maze at first light. 
        press continue to start your adventure. 
    </p> `
    })

    function initiateGame() {
        createHealth();
        blockButton.disabled = true;
        attackButton.disabled = true;
        potionButton.disabled = true;
    }

    document.getElementById("next-room").addEventListener("click", function newTurn(){
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
    })
    
    document.getElementById("drink-potion").addEventListener("click", function drinkPotion(){
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
    })

    document.getElementById("block").addEventListener("click", function block(){
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
    })

    document.getElementById("attack").addEventListener("click", function attack(){
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
    })

    /**
     * -----------------------------------------------------------------------------------Generator Functions
     */

    /**
     * This function generates a randomRoom and then pushes the room to the room array in game, the room generated contains a text description which is then read later on in the code. At the start of the fuction the room array in the game is cleared so that a new value can be stored. 
     */
    function generateRoom() {
        game.room = [];
        let randomRoom = Math.floor(Math.random()*10) +1;
        let roomImage = document.getElementById("output-image");
        imageInfo = roomIdToImageObjectMapper[randomRoom] // Image Object
        if (randomRoom === 8) {
            if(game.inventory.includes("key")){
                turnText = imageInfo.sentence1
            } else {
                turnText = imageInfo.sentence2
            };
        } else {
            turnText = imageInfo.sentence1
        }
        game.room.push(turnText)
        roomImage.innerHTML = `<img class ="hero-image center" src="${imageInfo.imageName}" alt="${imageInfo.imageAlt}">`   
        return game.room;
    }

    /**
     * This function generates a randomItem and then pushes the item to the items array in game it then calls the function addToInventory which passes the generated value to the inventory array in the game object.
     */
    function generateItem() {
        game.items = [];
        let randomItem = Math.floor(Math.random()*10) +1;
        game.items.push(inventoryIdMapper[randomItem]);
        return game.items;
    }

    function generateMonster() {
        game.monster = [];
        createMonsterHealth ();
        let randomMonster = Math.floor(Math.random()*10) +1;
        game.monster.push(generateMonsterToMapper[randomMonster]);
        return game.monster;
    }

    /**Gameplay mechanics */

    /**
     * This function adds the item found to the inventory and then manipulates the DOM to display what the user has in their inventory to them on the webpage.
     */
    function addToInventory(){
    let itemFound = game.items[0];
    game.inventory.splice(0,0,itemFound);
    let inventory = document.getElementById("inventory");
    let itemsInInventory = document.createElement("li");
    itemsInInventory.innerHTML = `${game.inventory[0]}`;
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
            game.monster = [];
            game.monster.push("boss");
        
        };
    }

    function calculateScore () {
        let totalScore = game.score;
        for (items in game.inventory){
            totalScore += gameInventoryScoreMapper[game.inventory[items]];
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
        <p class="paragraph-text"> The dungeon claims another victim. Better luck next time! Score: ${game.score}</p>`;
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
            if(game.monster.includes("boss")){
                alert("boss slain");
                winGame();
            } else {
            alert("monster slain");
            game.monsterHealth.pop();
            deltDamage.removeChild(deltDamage.lastElementChild);
            addToInventory();
            stackItems();
            console.log(game.monsterHealth);
            nextRoomButton.disabled = false;
            blockButton.disabled = true;
            attackButton.disabled = true;
            };
        };
    }

    function fight (){
        game.attack = [];
        let monsterAttack = Math.floor(Math.random()*3)+1;
        game.attack.push(attackToMessageMapper[monsterAttack]);
        return game.attack;
}

    function resetGameAreas(){
        let hp = document.getElementById("hp-remaining");
        let monsterHp = document.getElementById("monster-hp");
        let inventory = document.getElementById("inventory");
        hp.innerHTML = "";
        monsterHp.innerHTML = "";
        inventory.innerHTML = "";
    }

    function winGame(){
        nextRoomButton.disabled = true;
        attackButton.disabled = true;
        blockButton.disabled = true;
        potionButton.disabled = true;
        calculateScore();
        let winScreen = document.getElementById("output-image");
        winScreen.innerHTML = `<img class ="hero-image center" src="img/endgame.jpg" alt="the dugeon maze title image">`;
        let generatedOutput = document.getElementById("output-text");
        generatedOutput.innerHTML = `
        <p class="paragraph-text"> The dungeon bosses lifeless corpse falls to the ground. You search around the room and discover a hidden door behind the throne. The door opens into a passage leading to the dungeons exit. Congradulations you beat the dungeon Score: ${game.score}</p>`;
    }


    // module.exports = { game, generateItem, generateRoom, addToInventory, drinkPotion, startNewGame, startNewTurn };
};