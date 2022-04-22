let origBoard;
let huPlayer = "X";
let aiPlayer = "O";

// storing all the possible winning scenarios
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
const cells = document.querySelectorAll(".cell");

startGame();

function startGame() {
  //hide the pop up box
  document.querySelector(".endgame").style.display = "none";
  document.querySelector(".winner").style.display = "none";
  origBoard = Array.from(Array(9).keys());

  // remove all the X and O from the table, reset the game
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = " ";
    //removing the winning colour that could have occurred
    cells[i].style.removeProperty("background-color");
    cells[i].addEventListener("click", turnClick, false);
  }
}

function turnClick(square) {
  //to ensure only one click on a given square
  if (typeof origBoard[square.target.id] == "number") {
    //passing id of the square and the token taken by the player
    turn(square.target.id, huPlayer);
    //if there is no tie the aiPlayer would take its turn
    if (!checkWin(origBoard, huPlayer) && !checkTie())
      turn(bestSpot(), aiPlayer);
  }
}

function turn(squareId, player) {
  //initialising the selected square with the given token
  origBoard[squareId] = player;
  //updating the display
  document.getElementById(squareId).innerText = player;
  //after each turn checking the win-win scenario
  let gameWon = checkWin(origBoard, player);
  //if the game is won, game over
  if (gameWon) gameOver(gameWon);
}

//parameters being the current board and the token of the player
function checkWin(board, player) {
  //here it iterates through the board, if the particular index has the player's token then the index is concateneted to the accumulator
  let plays = board.reduce(
    (accumulator, element, index) =>
      element === player ? accumulator.concat(index) : accumulator,
    []
  );
  //checking for the win-win scenario
  let gameWon = null;
  //iterating through all the winning combinations
  for (let i = 0; i < winCombos.length; i++) {
    let count = 0;
    //checking if any entry by the player falls in the winning scenario
    for (let j = 0; j < plays.length; j++) {
      if (plays[j] === winCombos[i][0]) count++;
      if (plays[j] === winCombos[i][1]) count++;
      if (plays[j] === winCombos[i][2]) count++;
    }
    if (count === 3) {
      //storing the winning trio index and the player who won
      gameWon = { index: i, player: player };
      break;
    }
  }
  return gameWon;
}

// two tasks -->
// highlight the squares which are a part of the winning combination
// disable the squares

function gameOver(gameWon) {
  //setting the background colour of the squares
  for (let index of winCombos[gameWon.index]) {
    document.getElementById(index).style.backgroundColor =
      gameWon.player == huPlayer ? "#f342f3" : "#716dee";
  }
  //disabling the squares
  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener("click", turnClick, false);
  }
  declareWinner(gameWon.player == huPlayer ? "You Won!🎉" : "Try Again!");
}

function declareWinner(who) {
  if (who === "You Won!🎉") {
    document.querySelector(".winner").style.display = "block";
  }
  document.querySelector(".endgame").style.display = "block";
  document.querySelector(".endgame .text").innerText = who;
}

function emptySquares() {
  return origBoard.filter((s) => typeof s == "number");
}

//bestspot for ai
function bestSpot() {
  return minimax(origBoard, aiPlayer).index;
}

function checkTie() {
  // if there is no empty square and no one has won yet implies a tie
  if (emptySquares().length === 0) {
    //checkWin(origBoard, player);
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = "violet";
      cells[i].removeEventListener("click", turnClick, false);
    }
    declareWinner("Tie Game!");
    return true;
  }
  return false;
}

//minimax function
//1) return a value if a terminal state is found (+10,0,-10)
//2) Go through the available spots on the board
//3) call the minimax function on each available spot (recursion)
//4) evaluate returning values from function calls
//5) and return the best value

//implementation of minimax algorithm
function minimax(newBoard, player) {
  let availSpots = emptySquares();

  //if the player wins
  if (checkWin(newBoard, player)) {
    return { score: -10 };
  }
  // if the ai wins
  else if (checkWin(newBoard, aiPlayer)) {
    return { score: 10 };
  }
  //if there is a tie
  else if (availSpots.length === 0) {
    return { score: 0 };
  }
  // collecting scores from each of the empty spot
  let moves = [];
  for (let i = 0; i < availSpots.length; i++) {
    let move = {};
    move.index = newBoard[availSpots[i]];
    newBoard[availSpots[i]] = player;

    if (player == aiPlayer) {
      let result = minimax(newBoard, huPlayer);
      move.score = result.score;
    } else {
      let result = minimax(newBoard, aiPlayer);
      move.score = result.score;
    }
    newBoard[availSpots[i]] = move.index;
    moves.push(move);
  }

  let bestMove;
  if (player === aiPlayer) {
    //play the move with the highest score
    let bestScore = -10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }
  //if human player, play the move with the lowest score
  else {
    let bestScore = 10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }
  return moves[bestMove];
}
