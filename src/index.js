import { initializeBoard } from './BoardInitializer'
import { ComputerPlayer } from './player/ComputerPlayer';
import { HumanPlayer } from './player/HumanPlayer';
import { humanPlayerShipModels, computerPlayerShipModels } from './ship/ShipsModels'

function newGame() {
    const humanPlayer = new HumanPlayer(humanPlayerShipModels);
    const computerPlayer = new ComputerPlayer(computerPlayerShipModels);
    setUpBoards();
    setUpShips(humanPlayer, computerPlayer);
    //TODO SYNCHRONIZE ROUNDS
}

function playRound(player) {
    player.tryShoot();
}

function checkWin(player) {
    return player.areAllShipsDestroyed();
}

function setUpBoards() {
    initializeBoard(document.querySelector(".playerA .map-player"));
    initializeBoard(document.querySelector(".playerA .map-opponent"));
    initializeBoard(document.querySelector(".playerB .map-player"));
    initializeBoard(document.querySelector(".playerB .map-opponent"));
}

function setUpShips(humanPlayer, computerPlayer) {
    humanPlayer.setUpShips();
    computerPlayer.setUpShips();
}

newGame();