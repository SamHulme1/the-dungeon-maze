/**-----------------------------------------------------------------------------------game object */ 
const game = {
    inventory: [],
    items: [],
    room: [], 
    monster: [],
    attack: [],
    health : [],
    monsterHealth : [],
};

/**-----------------------------------------------------------------------------------game buttons */ 
const nextRoomButton = document.getElementById("next-room");
const attackButton = document.getElementById("attack");
const blockButton = document.getElementById("block");
const potionButton = document.getElementById("drink-potion");

const attackToMessageMapper = {
    1 : "Monster Blocks",
    2 : "Monster Attacks",
    3 : "Monster Hits",
}

const gameInventoryScoreMapper = {
    "diamond ring": 200,
    "bag of gold coins": 150,
    "bag of silver coins": 50,
    "bronse statue": 20,
    "bag of jemstones": 500,
    "crystal dagger": 30,
    "old pair of socks": 0,
    "potion": 0,
    "ruby": 700,
    "key": 0

};

const inventoryIdMapper = {
    1: "potion",
    2: "diamond ring",
    3: "bag of gold coins",
    4: "key",
    5: "bag of silver coins",
    6: "bronse statue",
    7: "bag of jemstones",
    8: "crystal dagger",
    9: "old pair of socks",
    10: "ruby"

}

const generateMonsterToMapper = {
    1 : "old goblin guarding a ",
    2 : "giant rat guarding a ",
    3 : "mad old man, looks like hes been down here a while. He guards a ",
    4 : "zombie who has a ",
    5 : "fearsome orc, he fights fearsly over a ",
    6 : "red dragon smiling at you. How dare you try and steal his most treasured item a ",
    7 : "ogre scratching its head and looking at you, 'hey dont you touch my '",
    8 : "crawling out of a small hole emerges a warewolf he carrys a ",
    9 : "spectral Karen hovering towards you, she's enraged that you wont let her return a ",
}

const roomIdToImageObjectMapper = {
    1: {
        "imageName": "img/corridoor.jpg",
        "imageAlt": "Image of a corridoor in a pixelated art style",
        "sentence1": "You follow a long corridoor. On the walls hang metal lanterns the corridoor is make from rock, rock and somemore rock. Whilst you walk down the corridoor you find a ",
    },
    2: {
        "imageName": "img/well.jpg",
        "imageAlt": "Image of a well in a pixelated art style",
        "sentence1": "'well, well what do we have here' you say as you approach a large stone well. The well well has long since emptied but the pully system still works. Just about, you pull the bucket out and inside find a ",
    },
    3: {
        "imageName": "img/bedroom.jpg",
        "imageAlt": "Image of a bedroom in a pixelated art style",
        "sentence1": "You enter a medium sized room, inside the room are several small sized beds. At the bottom of each bed sits a small wooden trunk. The walls are decorated with colourful dyed fabrics. Mainly green though. Afterall, it is a goblins favorite colour. There are several small hanging lanterns making sure that the room is well lit. You look through the trunks and discover a ",
    },
    4: {
        "imageName": "img/small-room-2.jpg",
        "imageAlt": "Image of a bedroom in a pixelated art style",
        "sentence1": "At the end of the path you see a small closed door, you knock a few times and to your suprise ... nobody answers. 'well at least I tried' you think to yourself as you try the handle. The door falls open and inside you can see large crates, barrels and other storage containers you decide to open them. Inside you find a ",
    },
    5: {
        "imageName": "img/small-room-1.jpg",
        "imageAlt": "Image of a small room in a pixelated art style",
        "sentence1": "After following a long corridoor for sometime, you come across a small dimply lit room. Inside the room is a small round table with cards layed out ontop of it. Further back in the room are two small size jail cells with the remains of somesort of humanoid creatures inside. It looks like whoever locked these poor souls inside didnt like loosing after inspecting the room further you find a ",
    },
    6: {
        "imageName": "img/large-room-2.jpg",
        "imageAlt": "Image of a large room in a pixelated art style",
        "sentence1": "The passageway suddenly opens up into a large carved out room. Inside the room you can see an alter and what look like small wooden benches. 'Maybe this used to be some kind of worshiping area' you think to yourself as you move further into the room. On the walls hang several small daggers and a number of simialrly sized painting depicting some sort of goblin god. There is a large pipe organ. several disguarded sheets with what looks like music written on them line the floor 'or tourture chamber you laugh to yourself as you imagine goblins singing' After looking around some more you find a ",
    },
    7: {
        "imageName": "img/largeroom-1.jpg",
        "imageAlt": "Image of a large room in a pixelated art style",
        "sentence1": "You approach two large ajar doors, which guard a large room. Inside the room sits a large retangular table infront of a roaring fireplace. On the table rest a number of plates a goblets with what smell like some sort of ale inside. Opposite the fire there is a larger throne sized chair made of old weponry. The room also features several small paintings and a cupboard containing strange victuals 'guess ill skip lunch then' you think to yourself after smelling some of the food. After searching the room you find a ",
    }, 
    8: {
        "imageName1": "img/locked-door.jpg",
        "imageAlt": "Image of a locked door in a pixelated art style",
        "imageName2": "img/boss-room.jpg",
        "imageAlt2": "Image of a boss area in a pixelated art style",
        "sentence1": " You come acoss a large stone locked door. You try the lock with the key in your inventory. The door snaps open revealing a large throne room. On the throne sits the skeletol remains of the king. You watch as they slowly twitch and come to life. You must now fight the dungeons boss!",
        "sentence2": " You come acoss a large stone locked door. You try everything but the door wont move without its proper key. Youre forced to turn back. On the plus side you find a "
    },
    9: {
        "imageName": "img/cave-in.jpg",
        "imageAlt": "Image of a cavein in a pixelated art style",
        "sentence1": "You come accross a partial cave-in, after moving some of the rubble, you discover a small passageway 'I shouldnt have had that extra large breakfast' you think to yourself as you just about squeeze through. After following the passage for several minutes you feel the walls begin to move back and open up into a small chamber inside you find a ",
    },
}

const rankMapper = {
    0 : "Cannon fodder",
    100 : "Still poor go back in again", 
    200 : "Rat slayer", 
    300 : "Dungeon explorer", 
    400 : "Goblin slayer", 
    500 : "Dungeon veteran",
    600 : "Orc slayer", 
    700 : "War hero", 
    800 : "Ogre slayer", 
    900 : "Dragon Slayer"
}

