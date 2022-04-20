function randomNumber(start, end) {
    return Math.floor((Math.random() * end) + start);
}

function getRandomCellInGrid() {
    while (true) {
        var xo = randomNumber(0, 19);
        var yo = randomNumber(0, 19);
        // console.log(xo);
        // console.log(yo);
        if (boardLayout[yo][xo] == 1) {
            return { x: xo + 1, y: yo + 1 };
        }
    }
}