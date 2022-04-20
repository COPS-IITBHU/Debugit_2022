function getIndexFromId(id) {

    var subString1 = str.substring(
        str.indexOf("R") + 1,
        str.lastIndexOf("C")
    );
    var i = parseInt(subString1) - 1;

    var subString2 = str.substring(
        str.indexOf("C") + 1,
        str.lastIndexOf("E")
    );
    var j = parseInt(subString2) - 1;

    return [i, j];

}

function getIdFromIndex(i, j) {
    var elementId = "R" + (j + 1) + "C" + (i + 1) + "E";
    return elementId;
}

function parseBoard() {

    var boardLayout = getBoard();
    var boardName = document.getElementById("layoutName").value;
    var boardDesc = document.getElementById("layoutDesc").value;
    var boardImg = document.getElementById("layoutImage").value;

    var boardId = gameBoardsList.length;
    var boardStatus = 0;

    var board = {
        id: boardId,
        name: boardName,
        status: boardStatus,
        imgName: boardImg,
        desc: boardDesc,
        board: boardLayout
    }
    
    gameBoardsList.push(board);
    console.log(gameBoardsList);
    alert("Thhe Board is added successfully!");
    
    console.log("Wait Ended");
}

function syncDelay(milliseconds) {
    var start = new Date().getTime();
    var end = 0;
    while ((end - start) < milliseconds) {
        end = new Date().getTime();
    }
}


function triggerAlert() {

    var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    function alert(message, type) {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        alertPlaceholder.append(wrapper);
    }

    alert('Your board has been added successfully.', 'success');
}

function getBoard() {

    var board = [];
    for (var i = 0; i < 20; i++) {
        var tempRow = [];
        for (var j = 0; j < 20; j++) {
            var state;

            var ele = document.getElementById(getIdFromIndex(i, j));
            if (ele.classList.contains("btn-success")) state = 1;
            else state = 0;

            tempRow.push(state);
        }
        board.push(tempRow);
    }

    return board;
}