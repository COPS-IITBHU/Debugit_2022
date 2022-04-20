function changeSnakeHeadColor(){

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

}

function changeSnakeBodyColor(){
    
    var snakeBodyCol = document.getElementById("snakeBodyColorPicker");

    let col = snakeBodyCol.value;

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
}

function changeFoodColor(){
    
    var foodCol = document.getElementById("foodColorPicker");
    col = foodCol.value;

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

}