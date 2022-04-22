let computer=document.getElementById("computer");
let play=document.getElementById('play');
let numbers=document.getElementsByClassName('numbers');
let score=document.getElementById('score');
let options=document.getElementById('options')
window.b=0;
play.addEventListener("click",function(){
    window.a= Math.round(5*(Math.random()));
    computer.textContent="Go On choose your number"
    
    
})
options.addEventListener("click",function(e){
    
    if(e.target==numbers[window.a])
    {
        
        window.b=0;
        score.textContent="OUT!!!";
        score.style.color="Red";
        play.textContent="PlayAgain";
    }
    else
    {
        play.textContent="NextBall";
        let d;
        score.style.color="LightGreen";
        for(let i=0;i<6;i++)
        {
            if(numbers[i]==e.target)
            {
                d=i;
            }
        }
        window.b=window.b + d+1;
        score.textContent=window.b;
    }
    computer.textContent=window.a+1;
})

