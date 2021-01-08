export class Ship{
    //TODO change Cells to event.target objects
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