export class Ship{
    
    constructor(element) {
        this.shipElement = element;
        element.classList.add("placed_ship")
    }
    
    isDestroyed(){
        return this.shipElement.classList.contains("destroyed");
    }

}