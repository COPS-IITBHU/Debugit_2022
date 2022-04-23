var MainImg = document.getElementById("img/pet.jpg");
var smallimg= document.getElementsByClassName("small-img");
smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}