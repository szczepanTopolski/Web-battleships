import { initializeBoard } from './BoardInitializer'
import { ComputerPlayer } from './player/ComputerPlayer';
import { HumanPlayer } from './player/HumanPlayer';
import { humanPlayerShipModels, computerPlayerShipModels } from './ship/ShipsModels'


const humanPlayer = new HumanPlayer(humanPlayerShipModels);
const computerPlayer = new ComputerPlayer(computerPlayerShipModels);

function newGame() {
    setUpBoards();
    setUpShips()
    //.then(letsTheBattleBegin)
    //ex. while(true?) 
    //player.shoot()
    //.then(player2.areAllShipsDestroyed)
    //.then(player2.shoot)
    .then(playRound);
}

function playRound() {
    humanPlayer.tryShoot()
    .then(computerPlayer.tryShoot);
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

function setUpShips() {
    return new Promise(resolve=>{humanPlayer.setUpShips()
    .then(computerPlayer.setUpShips)
    .then(()=>resolve(true));
    });
}

newGame();