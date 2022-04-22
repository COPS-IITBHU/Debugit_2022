let playagain = document.getElementById('playagain');
let result = document.getElementById('result');
let buttons=document.getElementsByClassName('buttons');
let hard=document.getElementById("radios1");
let easy=document.getElementById("radios2");
let x;





playagain.addEventListener("click",function(){
    result.textContent="Go For It You can DO THIS";
    result.style.color="yellow";
    
    if(hard.checked){
        x=5;
        
    }
    else{
        x=2;
        buttons[3].style.opacity='0';
        buttons[4].style.opacity='0';
        buttons[5].style.opacity='0';
    }
    
    
    let a= Math.round(255*(Math.random()));
    let b= Math.round(255*(Math.random()));
    let c= Math.round(255*(Math.random()));
    let value=document.getElementById('value');
    value.textContent ="("+a+","+b+","+c+")";
    window.d= Math.round(x*(Math.random()));
    let e= Math.round(255*(Math.random()));  
    buttons[0].style.backgroundColor="rgb("+b+","+c+","+a+")";
    buttons[1].style.backgroundColor="rgb("+c+","+b+","+a+")";
    buttons[2].style.backgroundColor="rgb("+b+","+a+","+c+")";
    buttons[3].style.backgroundColor="rgb("+a+","+b+","+e+")";
    buttons[4].style.backgroundColor="rgb("+a+","+e+","+c+")";
    buttons[5].style.backgroundColor="rgb("+e+","+b+","+c+")";
    buttons[d].style.backgroundColor="rgb("+a+","+b+","+c+")";
    


})
let bottomsection=document.getElementById('bottomsection');
let topsection=document.getElementById('topsection');

bottomsection.addEventListener("click",function(e){
    let k;
   if(e.target==buttons[window.d])
   {
       result.textContent="Friday Ae Penchoo";
       result.style.color="LightGreen";
       for(k=0;k<6;k++)
       {
           buttons[k].style.opacity="100";
          buttons[k].style.backgroundColor=e.target.style.backgroundColor;
          topsection.style.backgroundColor=e.target.style.backgroundColor;
       }

   }
   
   else
   {
       result.textContent="Choti Bacchi ho Kya";
       e.target.style.opacity="0";
       result.style.color="Red";
   }
    

})