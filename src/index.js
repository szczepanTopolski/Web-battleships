import {initializeBoard} from './BoardInitializer'
import {shipModels} from './ShipModels'
import {Cell} from './Cell';

function newGame(){
  setUpBoards();
  setUpShips();
}

function setUpShips(){
    const fields = document.querySelectorAll(".playerA .map-player .field");
    toggleSetShipHover(fields);
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
            toggleSetShipHover(fields);
            clearInterval(interval);
        }
    });
}


function toggleSetShipHover(fields) {
    fields.forEach(element => element.classList.toggle("setShip"));
}

function setUpBoards() {
    initializeBoard(document.querySelector(".playerA .map-player"));
    initializeBoard(document.querySelector(".playerA .map-opponent"));
    initializeBoard(document.querySelector(".playerB .map-player"));
    initializeBoard(document.querySelector(".playerB .map-opponent"));
}


newGame();