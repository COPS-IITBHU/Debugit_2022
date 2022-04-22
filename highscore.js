const displayscore = document.querySelector('#displayscore');
const wowscore = localStorage.getItem('score');
displayscore.innerText = wowscore;


const name= document.querySelector('#name');
const save = document.querySelector('#save');
name.addEventListener('keyup', store)
function store(){
    save.disabled = !name.value;
}

const scorearray = JSON.parse(localStorage.getItem('highScores')) || [];

function savescore(e) {
    e.preventDefault();
    const score = {
        score: wowscore,
        name: name.value,
    };
    scorearray.push(score);
    scorearray.sort(function(a,b){
        return b.score-a.score
    })
    scorearray.splice(10);

    localStorage.setItem('highScores', JSON.stringify(scorearray));
    
    dude()
    }
    
   function dude(){
        save.style.display = 'none'
   }

