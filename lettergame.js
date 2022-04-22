let response=document.getElementById("response");
let letter=document.getElementById("letter");
let answers=document.getElementsByClassName("answers");
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let playagain=document.getElementById('playagain');
playagain.addEventListener("click",function(){
    response.textContent="Go Little Rockstar"
    response.style.color="yellow";
    letter.style.color="pink";
    for(let k=0;k<4;k++)
    {
        answers[k].style.opacity="100";

    }
let a= [(Math.random() * possible.length-1),(Math.random() * possible.length-1),(Math.random() * possible.length-1),(Math.random() * possible.length-1)];
playagain.innerHTML="PlayAgain";
answers[0].innerHTML=possible.charAt(Math.floor(a[0]));
answers[1].innerHTML=possible.charAt(Math.floor(a[1]));
answers[2].innerHTML=possible.charAt(Math.floor(a[2]));
answers[3].innerHTML=possible.charAt(Math.floor(a[3]));
window.i= Math.round(4*(Math.random()));
letter.style.fontSize="50px";
letter.innerHTML=possible.charAt(Math.floor(a[window.i]-1));
let options=document.getElementById('options');
options.addEventListener("click",function(e){
    let k;
   if(e.target==answers[window.i])
   {
       response.textContent="CORRECT!!";
       response.style.color="LightGreen";
       
       

   }
   
   else
   {
       response.textContent="Try Again";
       e.target.style.opacity="0";
       response.style.color="Red";
       
       
   }
   
})
})

