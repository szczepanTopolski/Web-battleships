export default class Player{

    constructor(shipModel){
        if(new.target === Player){
            throw new TypeError("Cannot construct abstract class instance!")
        }
        this.shipModel = shipModel;
    }

    setUpShips(){}
    tryShoot(){}
    areAllShipsDestroyed() {
        console.log(this.shipModel);
        return this.shipModel.ships
            .filter(ship => ship.isDestroyed())
            .length == this.shipModel.SHIP_LIMIT;
    }
}