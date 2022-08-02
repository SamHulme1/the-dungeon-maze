/**
 * @jest-environment jsdom
 */

const { game, generateItem, generateRoom, addToInventory, drinkPotion } = require("../game");

 beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe('game has the correct keys', () => {
    test('inventory key exists', () => {
      expect('inventory' in game).toBe(true);
    });
    test('items key exists', () => {
        expect('items' in game).toBe(true);
    });
    test('room key exists', () => {
        expect('room' in game).toBe(true);
    });
    test('health key exists', () => {
        expect('health' in game).toBe(true);
    });
  });

describe('item generators works correctly', () => {
    beforeAll(() => {
        game.items = [];
        game.room = [];
    });

    test('an item appears in the items array', () => {
        generateItem();
        expect(game.items.length).toBe(1);
    });

    test('a room is generated and appears in the rooms array', () => {
        generateRoom();
        expect(game.room.length).toBe(1);
    });
});

describe('checks if items that are generated are stored in the inventory after the function checkItemFound is called', () => {
    beforeAll(() => {
        game.items = [];
        game.inventory = [];
    });
    test('items is added to inventory array', () => {
        generateItem();
        addToInventory();
    });
    test('multiple items can be added to the inventory',() => {
        generateItem();
        addToInventory();
        generateItem();
        addToInventory();
        console.log(game.items);
        expect(game.inventory.length).toBe(3);
        console.log(game.inventory);
    });
});

describe('checks if the potion adds health points to the health bar', () => {
    beforeAll(() => {
        game.health = ['heart'];
        console.log(game.health);
    });
    test('potion adds points to health', () => {
        drinkPotion();
        expect(game.health.length).toBe(5);
        console.log(game.health);
    });
});
