import { initializeBoard } from './BoardInitializer'
import { ComputerPlayer } from './player/ComputerPlayer';
import { HumanPlayer } from './player/HumanPlayer';
import { humanPlayerShipModels, computerPlayerShipModels } from './ship/ShipsModels'


const humanPlayer = new HumanPlayer(humanPlayerShipModels);
const computerPlayer = new ComputerPlayer(computerPlayerShipModels);
let isWon = false;

function newGame() {
    setUpBoards();
    setUpShips()
        .then(playRound);
}

function playRound() {
    if (!isWon) {
        humanPlayer.tryShoot()
            .then(isHumanPlayerWinner)
            .then(() => {
                alert("Player A WON!");
                isWon = true;
            }, computerPlayer.tryShoot)
            .then(isComputerPlayerWinner)
            .then(() => {
                alert("Player B WON!");
                isWon=true;
            }, playRound);
    }
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

newGame();