/**game object */ 
const game = {
    inventory: [],
    items: [],
    room: [], 
    monster: [],
    attack: [],
    health : [],
    monsterHealth : [],
};
/**game buttons */ 
const nextRoomButton = document.getElementById("next-room");
const attackButton = document.getElementById("attack");
const blockButton = document.getElementById("block");
const potionButton = document.getElementById("drink-potion");
/**attack to message mapper */ 
const attackToMessageMapper = {
    1 : "Monster Blocks",
    2 : "Monster Attacks",
    3 : "Monster Hits",
};
/**inventory score mapper */ 
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
/**inventory id mapper */ 
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
};
/**generate monster mapper */ 
const generateMonsterToMapper = {
    1 : "old goblin guarding a ",
    2 : "giant rat guarding a ",
    3 : "mad old man, looks like hes been down here a while. He guards a ",
    4 : "zombie who has a ",
    5 : "fearsome orc, he fights fearsly over a ",
    6 : "red dragon smiling at you. How dare you try and steal his most treasured item a ",
    7 : "ogre scratching its head and looking at you, hey dont you touch my ",
    8 : "a scary looking warewolf, he carrys a ",
    9 : "spectral Karen hovering towards you, she's enraged that you wont let her return a ",
};
/**room Id to image object mapper */ 
const roomIdToImageObjectMapper = {
    1: {
        "imageName": "img/corridoor.jpg",
        "imageAlt": "Image of a coridoor in a pixelated art style",
        "sentence1": "You follow a long corridor. On the walls hang metal lanterns the corridor is made from rock, rock and some more rock. Whilst you walk down the corridor you find a ",
    },
    2: {
        "imageName": "img/well.jpg",
        "imageAlt": "Image of a well in a pixelated art style",
        "sentence1": "'well, well what do we have here' you say as you approach a large stone well. The well well has long since emptied but the pully system still works. Just about, you pull the bucket out and inside find a ",
    },
    3: {
        "imageName": "img/bedroom.jpg",
        "imageAlt": "Image of a bedroom in a pixelated art style",
        "sentence1": "You enter a medium-sized room, inside the room are several small-sized beds. At the bottom of each bed sits a small wooden trunk. The walls are decorated with colourfully dyed fabrics. Mainly green though. After all, it is a goblin's favourite colour. There are several small hanging lanterns making sure that the room is well lit. You look through the trunks and discover a ",
    },
    4: {
        "imageName": "img/small-room-2.jpg",
        "imageAlt": "Image of a bedroom in a pixelated art style",
        "sentence1": "At the end of the path you see a small closed door, you knock a few times and to your surprise ... nobody answers. 'well at least I tried' you think to yourself as you try the handle. The door falls open and inside you can see large crates, barrels and other storage containers you decide to open them. Inside you find a ",
    },
    5: {
        "imageName": "img/small-room-1.jpg",
        "imageAlt": "Image of a small room in a pixelated art style",
        "sentence1": "After following a long corridor for some time, you come across a small dimly lit room. Inside the room is a small round table with cards laid out on top of it. Further back in the room are two small size jail cells with the remains of some sort of humanoid creatures inside. It looks like whoever locked these poor souls inside didn't like losing after inspecting the room further you find a ",
    },
    6: {
        "imageName": "img/large-room-2.jpg",
        "imageAlt": "Image of a large room in a pixelated art style",
        "sentence1": "The passageway suddenly opens up into a large carved-out room. Inside the room, you can see an altar and what looks like small wooden benches. 'Maybe this used to be some kind of worshipping area' you think to yourself as you move further into the room. On the walls hang several small daggers and several similarly sized paintings depicting some sort of goblin god. There is a large pipe organ. several discarded sheets with what looks like music written on them line the floor 'or torture chamber you laugh to yourself as you imagine goblins singing' After looking around some more you find a ",
    },
    7: {
        "imageName": "img/largeroom-1.jpg",
        "imageAlt": "Image of a large room in a pixelated art style",
        "sentence1": "You approach two large ajar doors, which guard a large room. Inside the room sits a large rectangular table in front of a roaring fireplace. On the table rests several plates and goblets with what smells like some sort of ale inside. Opposite the fire, there is a larger throne-sized chair made of old weaponry. The room also features several small paintings and a cupboard containing strange victuals 'guess ill skip lunch then' you think to yourself after smelling some of the food. After searching the room you find a ",
    }, 
    8: {
        "imageName1": "img/locked-door.jpg",
        "imageAlt": "Image of a locked door in a pixelated art style",
        "imageName2": "img/boss-room.jpg",
        "imageAlt2": "Image of a boss area in a pixelated art style",
        "sentence1": "You come across a large stone-locked door. You try the lock with the key in your inventory. The door snaps open revealing a large throne room. On the throne sits the skeletal remains of the king. You watch as they slowly twitch and come to life. You must now fight the dungeons boss!",
        "sentence2": "You come across a large stone-locked door. You try everything but the door won't move without its proper key. You're forced to turn back.  you notice a "
    },
    9: {
        "imageName": "img/cave-in.jpg",
        "imageAlt": "Image of a cavein in a pixelated art style",
        "sentence1": "You come across a partial cave-in, and after moving some of the rubble, you discover a small passageway 'I shouldn't have had that extra large breakfast' you think to yourself as you just about squeeze through. After following the passage for several minutes you feel the walls begin to move back and open up into a small chamber inside you find a ",
    },
};
/**rank mapper */ 
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
};