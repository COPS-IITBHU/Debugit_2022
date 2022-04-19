function handleInput(key){
    {

        if (playGameMusic){
            musicSound.play();
            moveSound.play();
        }
        
        var moveDirCopy = {...moveDirection}

        switch(key.key){
            
            case "ArrowUp":
                // console.log("Up");
                moveDirection.x = 0;
                moveDirection.y = -1;
                break;
            
            case "ArrowDown":
                // console.log("Down");       
                moveDirection.x = 0;
                moveDirection.y = 1;
                break;
        
            case "ArrowLeft":
                // console.log("Left");
                moveDirection.x = -1;
                moveDirection.y = 0;
                break;
            
            case "ArrowRight":
                // console.log("Right");
                moveDirection.x = 1;
                moveDirection.y = 0;
                break;
            
            default:
                break
        }
    
    }
}