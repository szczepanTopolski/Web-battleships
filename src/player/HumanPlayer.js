import Player from './Player'
import { toggleSetShipHover, toggleShootHover, addOnClickShootListeners, addOnClickPlaceShipListeners, periodicalyCheckWhetherShipsArePlaced } from '../ship/ShipsCoordinator'

export class HumanPlayer extends Player {
    constructor(shipModel) {
        super(shipModel);
    }

    setUpShips() {
        const fields = document.querySelectorAll(".playerA .map-player .field");
        toggleSetShipHover(fields);
        addOnClickPlaceShipListeners(fields);
        periodicalyCheckWhetherShipsArePlaced(fields);
    }

    tryShoot() {
        const fields = document.querySelectorAll(".playerA .map-opponent .field");
        toggleShootHover(fields);
        addOnClickShootListeners(fields);
    }


}