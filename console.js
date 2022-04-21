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
var speed=10;

typewriter= function(){
    document.querySelector("#message").innerHTML=messageArray[0].substring(0,textPosition)+ "<span>\u25ae</span>";

    if(textPosition++ != messageArray[0].length)
        setTimeout(typewriter,speed);
}

window.addEventListener("load",typewriter);



//add text to poll
var polltext = document.getElementById("polltext").innerText;
var addpoll = document.getElementById("addpoll").value;

addpoll.onclick = function(){
    var singlepoll = document.getElementById("single");

    var item = document.createElement("input");
    item.setAttribute("type","radio");
    item.setAttribute("name","lexRadioDefault");
    item.classList.add("flexRadioDefault");

    var label = document.createElementById("label");
    label.classList.add("form-check-label");
    label.innerText = polltext;

    singlepoll.appendChild(item);
    item.appendChild(label);

}
