addBoard = document.getElementById("addGameBoard");

function getButtonElement(i, j) {

    ele = `
    <button type="button" class="btn replaceSTATUS" id="replaceID" onClick = "changeButtonState(this.id)"> </button>
    `;

    var elementId = "R" + (j + 1) + "C" + (i + 1) + "E";

    let r1;
    if (!(i == 0 || i == 19 || j == 0 || j == 19)) r1 = ele.replace("replaceSTATUS", "btn-success");
    else r1 = ele.replace("replaceSTATUS", "btn-secondary");

    let r2 = r1.replace("replaceID", elementId);

    return r2;
}


function addHTML() {
    addBoard.innerHTML = "";
    html = ""

    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            var ele = getButtonElement(i, j);
            html = html + getButtonElement(i, j);
        }
    }

    addBoard.innerHTML = html;
}


function moveElements() {

    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {

            var elementId = "R" + (j + 1) + "C" + (i + 1) + "E";
            boardElement = document.getElementById(elementId);
            boardElement.style.gridRowStart = j + 1;
            boardElement.style.gridColumnStart = i + 1;

        }
    }
}

function displayGameBoard() {

    addHTML();
    moveElements();

}

function changeButtonState(id) {

    ele = document.getElementById(id);
    if (ele.classList.contains("btn-success")) {
        ele.classList.remove("btn-success");
        ele.classList.add("btn-secondary");
    }
    else {
        ele.classList.add("btn-success");
        ele.classList.remove("btn-secondary");
    }

}

displayGameBoard();


(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()