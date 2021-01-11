export function randomNumberFromOneToTen() {
    return Math.floor(Math.random() * 11) + 1;
}

export function randomNumberFromZeroToNintenyNine() {
    return Math.floor(Math.random() * 100);
}

export function getY(field) {
    return field.getAttribute("y");
}

export function getX(field) {
    return field.getAttribute("x");
}