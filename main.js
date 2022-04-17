// Game Variables
let moveDirection = {x:0, y:0};
let renderSpeed = 2;
let snake = [
    {x:13, y:15}
]
let food = {x:1, y:18};

// Sound Objects
let foodSound = new Audio('./assets/music/food.mp3');
let gameOverSound = new Audio('./assets/music/gameover.mp3');
let moveSound = new Audio('./assets/music/move.mp3');
let musicSound = new Audio('./assets/music/music.mp3');

// Internal Variables
let lastPaintTime = 0
var gameBoard = document.getElementById('gameBoard');

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
    
    updateGameVariables();
    displaySnake();
    displayFood();

}

function updateGameVariables(){}

function displaySnake(){
    
    gameBoard.innerHTML = "";
    snake.forEach((ele, index)=>{

        var snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = ele.y;
        snakeElement.style.gridColumnStart = ele.x;
        
        if (index===0){
            snakeElement.classList.add('snakeHead');
        }
        else{
            snakeElement.classList.add('snakeBody');
        }
        
        gameBoard.appendChild(snakeElement);

    })

}

function displayFood(){
    
    var foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);

}






// Main Logic
window.requestAnimationFrame(main);
window.addEventListener('keydown', key=>{

    moveSound.play();
    switch(key.key){
        
        case "ArrowUp":
            console.log("Up");
            moveDirection.x = 0;
            moveDirection.y = -1;
            break;
        
        case "ArrowDown":
            console.log("Down");       
            moveDirection.x = 0;
            moveDirection.y = 1;
            break;
    
        case "ArrowLeft":
            console.log("Left");
            moveDirection.x = -1;
            moveDirection.y = 0;
            break;
        
        case "ArrowRight":
            console.log("Right");
            moveDirection.x = 1;
            moveDirection.y = 0;
            break;
    
    }


})