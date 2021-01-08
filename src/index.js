import {initializeBoard} from './BoardInitializer'
import {shipModels} from './ShipModels'
import {Cell} from './Cell';

function newGame(){
  setUpBoards();
  setUpShips();
}

function setUpShips(){
    toggleSetShipHover();
    const fields = document.querySelectorAll(".playerA .map-player .field");
    fields.forEach(field =>field.addEventListener("click", placeShip));
    periodicalyCheckWhetherShipsArePlaced(fields);
    
}

function placeShip(event){
    const field = event.target;
    const x = field.getAttribute("x");
    const y = field.getAttribute("y");
    //TODO CHECK AVAILABILITY AND LENGTH
    field.classList.add("placed_ship")
    //TODO Move css adjustments to ship constructor
    shipModels[0].ship.setShipElements([new Cell(x,y)]);
    shipModels[0].placed = true;
    console.log(shipModels[0]);
}

function periodicalyCheckWhetherShipsArePlaced(fields) {
    const interval = setInterval( ()=> {
        if (shipModels.filter(shipModel => !shipModel.placed).length === 0) {
            fields.forEach(field => field.removeEventListener("click", placeShip));
            toggleSetShipHover();
            clearInterval(interval);
        }
    });
}


function toggleSetShipHover() {
    document
        .querySelectorAll(".field")
        .forEach(element => element.classList.toggle("setShip"));
}

function setUpBoards() {
    const playerAContainer = document.querySelector(".playerA");
    initializeBoard(playerAContainer.querySelector(".map-player"));
    initializeBoard(playerAContainer.querySelector(".map-opponent"));
    const playerBContainer = document.querySelector(".playerB");
    initializeBoard(playerBContainer.querySelector(".map-player"));
    initializeBoard(playerBContainer.querySelector(".map-opponent"));
}


newGame();