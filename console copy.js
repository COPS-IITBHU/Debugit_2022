// darkmode
var darkmode = document.getElementById("darkmode-icon");

darkmode.onclick = function () {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode"))
        darkmode.src = "moon.png"
    else
        darkmode.src = "sun.png"
}




// // typewriter effect
// var content=document.getElementById("message").innerText;
// var messageArray=[content];
// var textPosition=0;
// var speed=10;

// typewriter= function(){
//     document.querySelector("#message").innerHTML=messageArray[0].substring(0,textPosition)+ "<span>\u25ae</span>";

//     if(textPosition++ != messageArray[0].length)
//         setTimeout(typewriter,speed);
// }

// window.addEventListener("load",typewriter);



//add text to poll
var x = 0;
var z = 0;

var addpoll = document.getElementById("addpoll");

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('select-poll').addEventListener('input', handleSelect);
})

function handleSelect(ev) {
    let select = ev.target;
    console.log(select.value);
    var y = select.value;
    if (y == 1) {
        visible = document.getElementById("single");
        visible.classList.remove("invisible");
        visible.classList.add("poll");

        visible = document.getElementById("multiple");
        visible.classList.add("invisible");
        visible.classList.remove("poll");
    }
    if (y == 2) {
        visible = document.getElementById("single");
        visible.classList.add("invisible");
        visible.classList.remove("poll");

        visible = document.getElementById("multiple");
        visible.classList.remove("invisible");
        visible.classList.add("poll");
    }
}









addpoll.onclick = function () {

    var polltext = document.getElementById("polltext").value;

    var block = document.createElement("div");
    block.classList.add("form-check");

    var block2 = document.createElement("div");
    block2.classList.add("form-check");
    //for multiple correct
    z = z + 1;
    var multipoll = document.getElementById("multiple");

    var item2 = document.createElement("input");
    item2.setAttribute("type", "checkbox");
    item2.setAttribute("id", `q${z}`);

    var label2 = document.createElement("label");
    label2.classList.add("form-check-label");
    label2.setAttribute("id", "id" + z);
    label2.innerHTML = polltext;
    label2.setAttribute("for", "q" + z);

    multipoll.appendChild(block2);
    block2.appendChild(item2);
    block2.appendChild(label2);






    //for single correct
    x = x + 1;


    var singlepoll = document.getElementById("single");

    var item = document.createElement("input");
    item.setAttribute("type", "radio");
    item.setAttribute("name", "lexRadioDefault");
    item.setAttribute("id", `p${x}`);
    item.classList.add("flexRadioDefault");

    var label = document.createElement("label");
    label.classList.add("form-check-label");
    label.setAttribute("id", "id" + x);
    label.innerHTML = polltext;
    label.setAttribute("for", "p" + x);

    singlepoll.appendChild(block);
    block.appendChild(item);
    block.appendChild(label);



}
