export class Cell{
    //TODO Remove Cell, Adjust event.target object
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.status = "empty";
    }
    setCellStatus(status){
        this.status = status;
    }
}