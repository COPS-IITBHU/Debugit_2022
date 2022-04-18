// darkmode
var darkmode = document.getElementById("darkmode-icon");

darkmode.onclick = function(){
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode"))
        darkmode.src= "moon.png"
    else
        darkmode.src= "sun.png"
}




// typewriter effect
var content=document.getElementById("message").innerText;
var messageArray=[content];
var textPosition=0;
var speed=5;

typewriter= function(){
    document.querySelector("#message").innerHTML=messageArray[0].substring(0,textPosition)+ "<span>\u25ae</span>";

    if(textPosition++ != messageArray[0].length)
        setTimeout(typewriter,speed);
}

window.addEventListener("load",typewriter);