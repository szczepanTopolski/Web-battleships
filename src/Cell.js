export class Cell{

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.status = "empty";
    }
    setCellStatus(status){
        this.status = status;
    }
}