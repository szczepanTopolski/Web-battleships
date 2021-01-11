import { getX, getY } from '../Utils'

export function checkSurroundingFieldsAvailability(fields, selectedX, selectedY) {
    return fields.filter(field => isAdjacentField(field, selectedX, selectedY))
        .filter(containsShip)
        .length === 0;
}

export function checkMaxShipLength(field) {
    return true;
}

function containsShip(field) {
    return field.classList.contains("placed_ship");
}

function isAdjacentField(field, fieldX, fieldY) {
    return (getX(field) == fieldX - 1 && getY(field) == fieldY + 1) ||
        (getX(field) == fieldX && getY(field) == fieldY + 1) ||
        (getX(field) == fieldX + 1 && getY(field) == fieldY + 1) ||
        (getX(field) == fieldX - 1 && getY(field) == fieldY) ||
        (getX(field) == fieldX + 1 && getY(field) == fieldY) ||
        (getX(field) == fieldX - 1 && getY(field) == fieldY - 1) ||
        (getX(field) == fieldX && getY(field) == fieldY - 1) ||
        (getX(field) == fieldX + 1 && getY(field) == fieldY - 1)
}