/**
 * @jest-environment jsdom
 */

const { game } = require("../game");

 beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe('game has the correct keys', () => {
    test('inventory key exits', () => {
      expect('inventory' in game).toBe(true);
    });
    test('items key exits', () => {
        expect('items' in game).toBe(true);
    });
    test('room key exits', () => {
        expect('room' in game).toBe(true);
    });
  });