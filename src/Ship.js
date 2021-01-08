export class Ship{

    constructor() {
        this.SHIP_STATUS_PLACED = "PLACED"
    }

    setShipElements(shipElements){
        this.shipElements = shipElements;
        this.shipLength = shipElements.length;
        shipElements = shipElements.forEach(cell=>{
            cell.setCellStatus(this.SHIP_STATUS_PLACED);
        });
    }

}