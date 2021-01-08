import { Ship } from "./Ship";

export var shipModels = [
    {
        ship: new Ship(),
        expectedLength: 1,
        placed: false
    },
    {
        ship: new Ship(),
        expectedLength: 1,
        placed: true
    },
    {
        ship: new Ship(),
        expectedLength: 2,
        placed: true
    }];