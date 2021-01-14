import { initializeBoard } from './BoardInitializer'
import { ComputerPlayer } from './player/ComputerPlayer';
import { HumanPlayer } from './player/HumanPlayer';
import { humanPlayerShipModels, computerPlayerShipModels } from './ship/ShipsModels'


const humanPlayer = new HumanPlayer(humanPlayerShipModels);
const computerPlayer = new ComputerPlayer(computerPlayerShipModels);

function newGame() {
    cleanUp();
    setUpBoards();
    setUpShips()
        .then(playRound);
}

function playRound() {
        console.log("asd")
        humanPlayer.tryShoot()
            .then(isHumanPlayerWinner)
            .then(() => {
                alert("Player A WON!");
                newGame();
            }, computerPlayer.tryShoot)
            .then(isComputerPlayerWinner)
            .then(() => {
                alert("Player B WON!");
                newGame();
                
            },playRound );
        }
    


function isHumanPlayerWinner() {
    return computerPlayer.areAllShipsDestroyed();
}

function isComputerPlayerWinner() {
    return humanPlayer.areAllShipsDestroyed();
}

function setUpBoards() {
    initializeBoard(document.querySelector(".playerA .map-player"));
    initializeBoard(document.querySelector(".playerA .map-opponent"));
    initializeBoard(document.querySelector(".playerB .map-player"));
    initializeBoard(document.querySelector(".playerB .map-opponent"));
}

function setUpShips() {
    return new Promise(resolve => {
        humanPlayer.setUpShips()
            .then(computerPlayer.setUpShips)
            .then(() => resolve(true));
    });
}

function cleanUp(){
    document.querySelector(".playerA .map-player").innerHTML = "";
    document.querySelector(".playerA .map-opponent").innerHTML = "";
    document.querySelector(".playerB .map-player").innerHTML = "";
    document.querySelector(".playerB .map-opponent").innerHTML = "";
    humanPlayerShipModels.ships = [];
    computerPlayerShipModels.ships = [];
}

newGame();