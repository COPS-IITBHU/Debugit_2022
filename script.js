var rows = 5;
var columns = 5;

var currTile;
var otherTile;

var turns = 0;

window.onload = function() {
    
    
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.src = "./images/blank.jpg";
            
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); 
            tile.addEventListener("dragover", dragOver);  
            tile.addEventListener("dragenter", dragEnter); 
            tile.addEventListener("dragleave", dragLeave); 
            tile.addEventListener("drop", dragDrop);       
            tile.addEventListener("dragend", dragEnd);     
            
            document.getElementById("brd").append(tile);
        }
    }
    
    let pieces = [];
    for (let i=1; i <= rows*columns; i++) {
        pieces.push(i.toString()); 
    }
    pieces.reverse();
    for (let i =0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);
        
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }
    
    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./images/" + pieces[i] + ".jpeg";
        
        tile.addEventListener("dragstart", dragStart); 
        tile.addEventListener("dragover", dragOver);  
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("dragleave", dragLeave); 
        tile.addEventListener("drop", dragDrop);     
        tile.addEventListener("dragend", dragEnd);     
        
        document.getElementById("pieces").append(tile);
    }
}

function dragStart() {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this;
}


function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;
    
    turns += 1;
    document.getElementById("turns").innerText = turns;

    if(inEnd(-1)===1){
    document.getElementById("mcid").style.opacity=1;

    }
    
    
}

var a=1;
var q=0;
var t=1;
function inEnd(l) {
    var q=0;
    var t=1;
     for(let i=1;i<=rows*columns;i++)
     {
         if(document.getElementById("brd").children[i-1].src.match("./images/"+(i)+".jpeg")){
            q++;
            console.log(q);
        }
     }
     if(q===25)
     t=1;
     else
     t=0;
     return t;

}


