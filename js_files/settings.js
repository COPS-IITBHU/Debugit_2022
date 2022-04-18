function changeDifficulty(){
    console.log("Changing Difficulty");
    var eles=document.getElementsByName("gameDifficulty");
    for (var i=0; i<eles.length; i++){
        if (eles[i].checked){
            if (i==0){
                renderSpeedIntial = 5;
                renderSpeedIncrement = 0.1;
            }
            
            else if (i==1){
                renderSpeedIntial = 7.5;
                renderSpeedIncrement = 0.1;
            }
            else if (i==2){
                renderSpeedIntial = 7.5;
                renderSpeedIncrement = 0.5;
            }
            else if (i==3){
                renderSpeedIntial = 10;
                renderSpeedIncrement = 0.5;
            }
        }
    }
}

function changeMusicSettings(){
    console.log("Changing Music Settings");
    var eles=document.getElementsByName("gameMusic");
    for (var i=0; i<eles.length; i++){
        if (eles[i].checked){
            if (i==0){
                playGameMusic=true;
            }
            
            else if (i==1){
                playGameMusic=false;
                musicSound.pause();
            }
        }
    }
}

function changeLoopSettings(){
    console.log("Changing Looping Settings");
    var eles=document.getElementsByName("gameLoopWalls");
    for (var i=0; i<eles.length; i++){
        if (eles[i].checked){
            if (i==0){
                allowLoop=true;
            }
            else if (i==1){
                allowLoop=false;
            }
        }
    }
}