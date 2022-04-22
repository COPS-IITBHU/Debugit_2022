var x=0
function useApiData(data){
    var c=0
    answer[0].style.backgroundColor = 'violet';
    answer[1].style.backgroundColor = 'violet';
    answer[2].style.backgroundColor = 'violet';
    answer[3].style.backgroundColor = 'violet';
    var k = Math.floor(Math.random()*4)
    x=k;
    console.log(k);
    document.getElementById('question').innerHTML = data.results[0].question
    answer[k].innerHTML= data.results[0].correct_answer
    for (let i = 0; i < 4; i++) {
        if (i==k) 
            continue
       answer[i].innerHTML= data.results[0].incorrect_answers[c]
       c++
       
    }
    console.log(x)

}



window.onload =sendApiRequest
let answer = Array.from(document.querySelectorAll('.ans'))
async function sendApiRequest(){
    d=0
    console.log(d)
    let response = await fetch`https://opentdb.com/api.php?amount=10&type=multiple`
    let data = await response.json()
    useApiData(data)
}


let a=0;
//a stores current score
let b=1;
//b gives current question
console.log(x);
let d=0
answer.forEach(function(option) {
    
    option.addEventListener('click', lesgo)
    function lesgo() {

        if(d==0){
            console.log(d)
            if (event.target.innerHTML.toLowerCase() == answer[x].innerHTML.toLowerCase()) {
                a=a+1;
                document.getElementById('score').innerHTML= a;
                answer[x].style.backgroundColor = 'green';
                var i= document.getElementById('positive')
                window.setTimeout(correct,0001)
                function correct() {
                    i.play()
                }
            } 
            else{
                event.target.style.backgroundColor = 'red';
                answer[x].style.backgroundColor = 'green';
                var j= document.getElementById('negative')
                window.setTimeout(wrong,0001)
                function wrong() {
                    j.play()
                }
            }
            d=1
            console.log(d)
            window.setTimeout(timeout,3000)
            function timeout(){
                b=b+1;
                document.getElementById('question-number').innerHTML= b;
                // d=0
                // console.log(d)
                sendApiRequest();
            }
            
        }
        
    }
})


document.getElementById('quit').addEventListener('click', save)
function save(q) {

    localStorage.setItem('score',a)
    console.log(a);
    return window.location.assign('highscore.html');
    // document.getElementById('displayhighscore').innerHTML=localStorage.getItem('highscore')
    // // console.log(document.getElementById('score').innerText)
}
let p =0
document.getElementById('lifeline').addEventListener('click', help)
function help() {
    
if(p<3){
    if(x==0 || x==2){
        answer[1].innerHTML=''
        answer[3].innerHTML=''
    }
    if(x==1 || x==3){
        answer[0].innerHTML=''
        answer[2].innerHTML=''
    }
}
 p=p+1      

}