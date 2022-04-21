// Game Variables
let moveDirection = { x: 0, y: 0 };
let renderSpeedIntial = 5;
let renderSpeedIncrement = 0.1;
var playGameMusic = true;
var score = 0;
var allowLoop = true;

// Sound Objects
let foodSound = new Audio('./assets/music/food.mp3');
let gameOverSound = new Audio('./assets/music/gameover.mp3');
let moveSound = new Audio('./assets/music/move.mp3');
let musicSound = new Audio('./assets/music/music.mp3');

// Internal Variables
let lastPaintTime = 0
var gameBoard = document.getElementById('gameBoard');
var gameBoardIndex = 0;
var gameBoardsList = [];
var pointsSpeed = 10;
var pointsIncrement = 50;

var boardsString = localStorage.getItem("gameBoardsList")
if (boardsString) {
    gameBoardsList = JSON.parse(boardsString);
}
else {
    localStorage.setItem("gameBoardsList", JSON.stringify(gameList));
    gameBoardsList = gameList;
}

console.log(gameBoardsList);

while (gameBoardsList[gameBoardIndex].status != 1) gameBoardIndex++;
var gameBoardName = gameBoardsList[gameBoardIndex].name;
var boardLayout = gameBoardsList[gameBoardIndex].board;
var renderSpeed = renderSpeedIntial;


setLayoutOptions();

let snake = [{ ...getRandomCellInGrid() }]
let food = { ...getRandomCellInGrid() };

// Game Functions
function main(ctime) {

    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / renderSpeed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();

}


// Main Logic for the Program
window.requestAnimationFrame(main);
window.addEventListener('keydown', handleInput, false);

var gameOverModal = document.getElementById("myModal");
var gameOverSpan = document.getElementsByClassName("modalClose")[0];

gameOverSpan.onclick = function () {
    gameOverModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == gameOverModal) {
        gameOverModal.style.display = "none";
    }
}

// For testing purposes
// displayGameOverModal();