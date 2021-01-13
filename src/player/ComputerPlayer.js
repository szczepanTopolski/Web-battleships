import Player from './Player'
import { placeRandomlyShips, tryShootRandomly } from '../ship/ShipsCoordinator'

export class ComputerPlayer extends Player {
    constructor(shipModel) {
        super(shipModel);
    }

    setUpShips() {
        return new Promise(resolve => placeRandomlyShips(resolve));
    }

    tryShoot() {
        tryShootRandomly();
    }

}