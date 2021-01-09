export class Ship{
    
    constructor() {
        this.shipElements = []
    }

    addShipElement(element){
        //TODO CHECK IF LENGTH IS VALID
        this.shipElements.push(element);
        element.classList.add("placed_ship")
    }

    setShipElements(shipElements){
        this.shipElements = shipElements;
        this.shipLength = shipElements.length;
    }

}