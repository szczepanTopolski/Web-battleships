import { Ship } from './Ship';
import { getX, getY, randomNumberFromZeroToNintenyNine } from '../Utils'
import { humanPlayerShipModels, computerPlayerShipModels } from './ShipsModels'
import { checkSurroundingFieldsAvailability, checkMaxShipLength } from './ShipsValidator'


function placeShip(event) {
    const targetField = event.target;
    const fields = Array.from(document.querySelectorAll(".playerA .map-player .field"));
    if (checkSurroundingFieldsAvailability(fields, parseInt(getX(targetField)), parseInt(getY(targetField))) &&
        //TODO ADD INCREASING SHIP LENGTH POSSIBILITY
        checkMaxShipLength(targetField) &&
        humanPlayerShipModels.accurateShipNumber()) {
        removeOnClickPlaceShipListener(targetField);
        humanPlayerShipModels.ships.push(new Ship(targetField));
        console.log(humanPlayerShipModels.ships);
    }
}

export function addOnClickPlaceShipListeners(fields) {
    fields.forEach(field => field.addEventListener("click", placeShip));
}

function removeOnClickPlaceShipListener(targetField) {
    targetField.removeEventListener("click", placeShip);
}

export function periodicalyCheckWhetherShipsArePlaced(fields) {

    const interval = setInterval(() => {
        if (!humanPlayerShipModels.accurateShipNumber()) {
            fields.forEach(removeOnClickPlaceShipListener);
            toggleSetShipHover(fields);
            clearInterval(interval);
        }
    });
}


export function toggleSetShipHover(fields) {
    fields.forEach(element => element.classList.toggle("setShip"));
}

export function toggleShootHover(fields) {
    fields.forEach(field => {
        if (!field.classList.contains("missed") &&
            !field.classList.contains("destroyed")) {
            field.classList.toggle("shoot");
        };
    });
}

export function placeRandomlyShips() {
    const fields = document.querySelectorAll(".playerB .map-player .field");

    while (computerPlayerShipModels.accurateShipNumber()) {
        const target = fields[randomNumberFromZeroToNintenyNine()];

        if (checkSurroundingFieldsAvailability(Array.from(fields), parseInt(getX(target)), parseInt(getY(target))) &&
            //TODO ADD INCREASING SHIP LENGTH POSSIBILITY
            checkMaxShipLength(target)) {
            computerPlayerShipModels.ships.push(new Ship(target));
            console.log(computerPlayerShipModels.ships);
            console.log(getX(target) + "  ------- " + getY(target));
        }
    }
}

export function addOnClickShootListeners(fields) {
    fields.forEach(field => {
        if (!field.classList.contains("missed") &&
            !field.classList.contains("destroyed")) {
            field.addEventListener("click", shootCallback)
        }
    });
}

function shootCallback(event) {
    const targetEvent = event.target;
    const playerOpponentFields = document.querySelectorAll(".playerA .map-opponent .field");
    const enemyFields = document.querySelectorAll(".playerB .map-player .field");
    tryShoot(targetEvent, Array.from(enemyFields));
    removeOnClickShootListeners(playerOpponentFields);
    toggleShootHover(playerOpponentFields);
    removeOnClickShootListener(targetEvent);
}

export function removeOnClickShootListeners(fields) {
    fields.forEach(field => removeOnClickShootListener(field));
}

function removeOnClickShootListener(field) {
    return field.removeEventListener("click", shootCallback);
}


export function tryShootRandomly() {
    const computerOpponentFields = document.querySelectorAll(".playerB .map-opponent .field");
    const enemyFields = document.querySelectorAll(".playerA .map-player .field");
    tryShoot(enemyFields[randomNumberFromZeroToNintenyNine()], Array.from(computerOpponentFields));
}

function tryShoot(target, fields) {
    const enemyField = fields.filter(field => getX(field) == getX(target) &&
        getY(field) == getY(target))[0];
    if (enemyField.classList.contains("placed_ship")) {
        enemyField.classList.remove("placed_ship");
        target.classList.add("destroyed");
        enemyField.classList.add("destroyed");
        target.classList.remove("shoot");
    }
    else {
        target.classList.add("missed");
        enemyField.classList.add("missed");
        target.classList.remove("shoot");
    }
}




