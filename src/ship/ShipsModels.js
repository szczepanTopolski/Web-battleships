export const humanPlayerShipModels = {
    SHIP_LIMIT:4,
    ships:[],
    accurateShipNumber(){
        return this.ships.length < this.SHIP_LIMIT;
    },
    areModelFullFilled(){
        return this.ships.length == this.SHIP_LIMIT;
    }
};
export const computerPlayerShipModels = {
    SHIP_LIMIT:4,
    ships:[],
    accurateShipNumber(){
        return this.ships.length < this.SHIP_LIMIT;
    },
    areModelFullFilled(){
        return this.ships.length == this.SHIP_LIMIT;
    }
};