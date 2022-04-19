function getElementToAdd(index){
    var template = `
    <div class="card text-center" style="width: 18rem; padding:2%; margin:2%;">
        <img src="./assets/images/replaceIMAGENAME" class="card-img-top" alt="replaceBOARDNAME">
        <div class="card-body">
            <h4 class="card-title">replaceBOARDNAME</h5>
            <p class="card-text">replaceBOARDDESC</p>
            <a href="#" class="btn btn-primary replaceDISABLED" id="replaceID" onclick = "changeBoard(this.id);">replaceBOARDSTATUS</a>
        </div>
    </div>
    
    `;

    var board = gameBoardsList[index];
    let r1 = template.replace("replaceBOARDNAME", board.name);
    let r2 = r1.replace("replaceBOARDNAME", board.name);
    let r3 = r2.replace("replaceBOARDDESC", board.desc);
    let r4 = r3.replace("replaceID", "layoutOption" + board.id);

    let rd =  "";
    let rbs = "";

    if (board.status==0){
        rd = "";
        rbs = "Play Here!";
    }
    else{
        rd = "disabled";
        rbs = "Already Here!";
    }

    let r5 = r4.replace("replaceBOARDSTATUS", rbs);
    let r6 = r5.replace("replaceDISABLED", rd);
    let r7 = r6.replace("replaceIMAGENAME", board.imgName);

    return r7;
}


function setLayoutOptions(){
    var ele = document.getElementById("gameLayoutOptions");
    var innerHTML = "";

    for (var i=0; i<gameBoardsList.length; i++){
        innerHTML = innerHTML + getElementToAdd(i);
    }

    ele.innerHTML = innerHTML;
}

function changeBoard(id){
    console.log("Function Called");
    console.log(id);

    var index = id.slice(-1);
    var gameBoardIndex = index;
    gameBoardName = gameBoardsList[gameBoardIndex].name;
    boardLayout = gameBoardsList[gameBoardIndex].board;

    for (var i=0; i<gameBoardsList.length; i++){
        if (i==index) gameBoardsList[i].status = 1;
        else gameBoardsList[i].status = 0;
    }
    
    setLayoutOptions();
    main();
}