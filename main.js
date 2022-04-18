// Game Variables
let moveDirection = {x:0, y:0};
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
while (gameBoardsList[gameBoardIndex].status!=1) gameBoardIndex++;
var gameBoardName = gameBoardsList[gameBoardIndex].name;
var boardLayout = gameBoardsList[gameBoardIndex].board;
var renderSpeed = renderSpeedIntial;

// Game Functions
function main(ctime){
    
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime)/1000 < 1/renderSpeed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
    
}


function gameEngine(){

    displayGameBoard();
    updateGameVariables();
    displaySnake();
    displayFood();

}

function displayGameBoard(){

    gameBoard.innerHTML = "";

    for (var i=0; i<20; i++){
        for (var j=0; j<20; j++){
            var boardElement = document.createElement('div');
            boardElement.style.gridRowStart = j+1;
            boardElement.style.gridColumnStar = i+1;
            var elementId = "R" + (j+1) + "C" + (i+1);
            boardElement.setAttribute('id', elementId);
            if (boardLayout[j][i]==1){
                boardElement.classList.add('activeBoardCell');
            }
            else{
                boardElement.classList.add('inactiveBoardCell');
            }
            gameBoard.appendChild(boardElement);
        }
    }

}

function updateGameVariables(){

    if (isCollide()) gameOver();        

    // Check for Snake eating the food
    if (snake[0].x===food.x && snake[0].y === food.y) growSnake();
    
    moveSnake();
}

function gameOver(){
    if (playGameMusic){
        gameOverSound.play();
        musicSound.pause();
    }
    
    moveDirection = {x:0, y:0};
    
    // TODO : Implement a better game over scenario 
    alert("Game Over.")
    
    renderSpeed = renderSpeedIntial;
    score = 0;
    snake = [{...getRandomCellInGrid()}];
    if (playGameMusic){
        musicSound.play();
    }
    
}

function growSnake(){
    if (playGameMusic) foodSound.play();
    snake.unshift({
        x:snake[0].x + moveDirection.x,
        y:snake[0].y + moveDirection.y
    });

    checkSnakeHead();
    
    score+=1;
    food = {...getRandomCellInGrid()};
    renderSpeed = renderSpeed + renderSpeedIncrement;

}

function checkSnakeHead(){
    if (allowLoop){
        var count = 0;
        while (boardLayout[snake[0].y-1][snake[0].x-1]==0){
            snake[0].x += moveDirection.x;
            snake[0].y += moveDirection.y;
                
            if (snake[0].x>20) snake[0].x-=20;
            if (snake[0].x<1) snake[0].x+=20;
            if (snake[0].y>20) snake[0].y-=20;
            if (snake[0].y<1) snake[0].y+=20;
                
            if (count>20) gameOver();
            count+=1;
        }
    
    }
}

function moveSnake(){

    for(let i=snake.length - 2; i>=0; i--){
        snake[i+1] = {...snake[i]};
    }

    snake[0].x += moveDirection.x;
    snake[0].y += moveDirection.y;
    
    checkSnakeHead();

}

function isCollide(){

    for (let i=1; i<snake.length; i++){
        if (snake[i].x==snake[0].x && snake[i].y ==snake[0].y) return true;
    }

    if (!allowLoop){
        if (boardLayout[snake[0].y-1][snake[0].x-1]==0){
            return true;
        }
    }
    return false;
}

function displaySnake(){
    
    snake.forEach((ele, index)=>{

        var elementId = "R" + ele.y + "C" + ele.x;
        var snakeElement = document.getElementById(elementId);
        snakeElement.removeAttribute('class');

        if (index===0){
            snakeElement.classList.add('snakeHead');
        }
        else{
            snakeElement.classList.add('snakeBody');
        }
    })

}

function displayFood(){
    
    var elementId = "R" + food.y + "C" + food.x;
    var foodElement = document.getElementById(elementId);
    foodElement.removeAttribute('class');
    foodElement.classList.add('food');

}

// Main Logic for the Program
window.requestAnimationFrame(main);
window.addEventListener('keydown', key=>{

    if (playGameMusic){
        musicSound.play();
        moveSound.play();
    }
    
    switch(key.key){
        
        case "ArrowUp":
            // console.log("Up");
            moveDirection.x = 0;
            moveDirection.y = -1;
            break;
        
        case "ArrowDown":
            // console.log("Down");       
            moveDirection.x = 0;
            moveDirection.y = 1;
            break;
    
        case "ArrowLeft":
            // console.log("Left");
            moveDirection.x = -1;
            moveDirection.y = 0;
            break;
        
        case "ArrowRight":
            // console.log("Right");
            moveDirection.x = 1;
            moveDirection.y = 0;
            break;
        
        default:
            break
    }


})

function getRandomCellInGrid(){
    while (true){
        var xo = randomNumber(0,19);
        var yo = randomNumber(0,19);
        // console.log(xo);
        // console.log(yo);
        if (boardLayout[yo][xo]==1){
            return {x:xo+1, y:yo+1};
        }
    }
}

let snake = [{...getRandomCellInGrid()}]
let food = {...getRandomCellInGrid()};