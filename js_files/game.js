function gameEngine() {

    displayGameBoard();
    updateGameVariables();
    displaySnake();
    displayFood();

}

function displayGameBoard() {

    gameBoard.innerHTML = "";
    activeColor = document.getElementById("activeBoardCellPicker").value;
    inactiveColor = document.getElementById("inactiveBoardCellPicker").value;

    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            var boardElement = document.createElement('div');
            boardElement.style.gridRowStart = j + 1;
            boardElement.style.gridColumnStart = i + 1;
            var elementId = "R" + (j + 1) + "C" + (i + 1);
            boardElement.setAttribute('id', elementId);
            if (boardLayout[j][i] == 1) {
                boardElement.classList.add('activeBoardCell');
                boardElement.style.background = activeColor;
            }
            else {
                boardElement.classList.add('inactiveBoardCell');
                boardElement.style.background = inactiveColor;
            }
            gameBoard.appendChild(boardElement);
        }
    }

}

function updateGameVariables() {

    if (isCollide()) gameOver();

    // Check for Snake eating the food
    if (snake[0].x === food.x && snake[0].y === food.y) growSnake();

    moveSnake();
}

function gameOver() {
    if (playGameMusic) {
        gameOverSound.play();
        musicSound.pause();
    }

    moveDirection = { x: 0, y: 0 };

    // TODO : Implement a better game over scenario 
    alert("Game Over.")

    renderSpeed = renderSpeedIntial;
    score = 0;
    var points = document.getElementById("points");
    points.innerHTML = 0;
    snake = [{ ...getRandomCellInGrid() }];
    if (playGameMusic) {
        musicSound.play();
    }

}

function growSnake() {
    if (playGameMusic) foodSound.play();
    snake.unshift({
        x: snake[0].x + moveDirection.x,
        y: snake[0].y + moveDirection.y
    });

    checkSnakeHead();

    incrementScore(pointsIncrement);
    pointsIncrement += 10;
    food = { ...getRandomCellInGrid() };
    renderSpeed = renderSpeed + renderSpeedIncrement;

}

function checkSnakeHead() {
    if (allowLoop) {
        var count = 0;
        while (boardLayout[snake[0].y - 1][snake[0].x - 1] == 0) {
            snake[0].x += moveDirection.x;
            snake[0].y += moveDirection.y;

            if (snake[0].x > 20) snake[0].x -= 20;
            if (snake[0].x < 1) snake[0].x += 20;
            if (snake[0].y > 20) snake[0].y -= 20;
            if (snake[0].y < 1) snake[0].y += 20;

            if (count > 20) gameOver();
            count += 1;
        }

    }
}

function moveSnake() {

    for (let i = snake.length - 2; i >= 0; i--) {
        snake[i + 1] = { ...snake[i] };
    }

    snake[0].x += moveDirection.x;
    snake[0].y += moveDirection.y;

    checkSnakeHead();

}

function isCollide() {

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) return true;
    }

    if (!allowLoop) {
        if (boardLayout[snake[0].y - 1][snake[0].x - 1] == 0) {
            return true;
        }
    }
    return false;
}

function displaySnake() {

    snake.forEach((ele, index) => {

        var elementId = "R" + ele.y + "C" + ele.x;
        var snakeElement = document.getElementById(elementId);
        snakeElement.removeAttribute('class');

        if (index === 0) {
            snakeElement.classList.add('snakeHead');
        }
        else {
            snakeElement.classList.add('snakeBody');
        }
    })

    var snakeHeadCol = document.getElementById("snakeHeadColorPicker");

    let col = snakeHeadCol.value;

    var ele = document.getElementsByClassName("snakeHead");

    var radial = "radial-gradient(col2, col1)";
    var r1 = radial.replace("col1", col);
    var r2 = r1.replace("col2", DarkenColor(col, 15));

    var bord = "2px solid color";
    var r3 = bord.replace("color", DarkenColor(col, -60));

    for (var i = 0; i < ele.length; i++) {
        ele[i].style.background = r2;
        ele[i].style.border = r3;
    }

    var snakeBodyCol = document.getElementById("snakeBodyColorPicker");

    col = snakeBodyCol.value;

    var ele = document.getElementsByClassName("snakeBody");

    var radial = "radial-gradient(col2, col1)";
    var r1 = radial.replace("col1", col);
    var r2 = r1.replace("col2", DarkenColor(col, 15));

    var bord = "2px solid color";
    var r3 = bord.replace("color", DarkenColor(col, -60));

    for (var i = 0; i < ele.length; i++) {
        ele[i].style.background = r2;
        ele[i].style.border = r3;
    }
    // changeSnakeHeadColor();
    // changeSnakeBodyColor();
}

function displayFood() {

    var elementId = "R" + food.y + "C" + food.x;
    var foodElement = document.getElementById(elementId);
    foodElement.removeAttribute('class');
    foodElement.classList.add('food');

    // changeFoodColor();
    var foodCol = document.getElementById("foodColorPicker");
    col = foodCol.value;

    var ele = document.getElementsByClassName("food");

    var radial = "radial-gradient(col2, col1)";
    var r1 = radial.replace("col1", col);
    var r2 = r1.replace("col2", DarkenColor(col, 15));

    var bord = "2px solid color";
    var r3 = bord.replace("color", DarkenColor(col, -60));

    for (var i = 0; i < ele.length; i++) {
        ele[i].style.background = r2;
        ele[i].style.border = r3;
    }

}

function incrementScore(toAdd) {

    ele = document.getElementById("points");
    endNum = score + toAdd;

    animateRec(score, ele, endNum - 1);
    score += toAdd;
    console.log("Score " + score);

}

function animateRec(i, ele, endNum) {

    if (Number(ele.innerHTML) <= endNum) {
        ele.innerHTML = i;
        console.log("i " + i);
        setTimeout(function () {
            animateRec(i + 1, ele, endNum);
        }, pointsSpeed);
    }
}
