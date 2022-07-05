// let lsg = document.getElementById('pre')
// let gt = document.getElementById('nex')
// var kkr = 0;
// var dc = 0
// console.log(kkr)

// /*async function amy() {
//     await fetch('https://api.covid19api.com/summary').then(response => response.json())
//         .then(data => {
//             console.log(data);
//             document.getElementById('f').innerHTML = `<h3>Country Name</h3>${data.Countries[kkr].Country}`
//         })
// }
// amy();*/

// async function amy2() {
//     await fetch('https://api.covid19api.com/summary').then(response => response.json())
//         .then(data => {
//             console.log(data);
//             document.getElementById('f').innerHTML = `<h3>Country Name</h3>${data.Countries[kkr].Country}`
//             document.getElementById('g').innerHTML = `<h3>New Cases</h3>${data.Countries[kkr].NewConfirmed}`
//             dc = data.Countries[kkr].NewConfirmed;
//             document.getElementById('h').innerHTML = `<h3>New Deaths</h3>${data.Countries[kkr].NewDeaths}`


//             if (dc < 2000) {
//                 document.getElementById('ri').style.backgroundColor = "lightgreen"
//                 document.getElementById('ri').innerHTML = `<h3>This country has low covid risk</h3>`
//             } else if (dc >= 2000 && dc < 10000) {
//                 document.getElementById('ri').style.backgroundColor = "yellow"
//                 document.getElementById('ri').innerHTML = `<h3>This country has moderate covid risk</h3>`
//             } else {
//                 document.getElementById('ri').style.backgroundColor = "red"
//                 document.getElementById('ri').innerHTML = `<h3>This country has high covid risk</h3>`
//             }
//         })

// }
// amy2();
// /*
// async function amy3() {
//     await fetch('https://api.covid19api.com/summary').then(response => response.json())
//         .then(data => {
//             console.log(data);
//             document.getElementById('h').innerHTML = `<h3>New Deaths</h3>${data.Countries[kkr].NewDeaths}`
//         })
// }
// amy3();*/
// lsg.addEventListener('click', change1)
// gt.addEventListener('click', change2)

// function change1() {
//     if (kkr > 0) {
//         kkr = kkr - 1;
//     }
//     amy2()
// }

// function change2() {
//     if (kkr < 193) {
//         kkr = kkr + 1;
//     }
//     amy2()
// }
var x=document.getElementById('search')
var y=document.getElementById('yeah')
var z=document.getElementById('oh')
var container= document.getElementById('box')
function start(){
    fetch('https://api.covid19api.com/summary')
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        x.addEventListener('keypress',(e)=>{
            if(e.keyCode===13){
                start()
                var v=e.target.value.toLowerCase()
                  console.log(container.firstChild);
                while (container.firstChild) {
                        container.removeChild(container.firstChild);
                      }
                  
           console.log(v)
           var wow=0;
           if(v.textContent==''){
               document.getElementById('box').innerHTML=""
            }

        for(var i=0;i<data.Countries.length;i++){
            if(data.Countries[i].Country.substr(0,v.trim().length).toLowerCase().includes(v,0)){
                wow=1;
                document.getElementById('box').insertAdjacentHTML('beforeend',`<div id="name[${i}]" class="res "><h1 class="name[${i}]">${data.Countries[i].Country}<br>New Confirmed:${data.Countries[i].NewConfirmed}<br>New Deaths:${data.Countries[i].NewDeaths}</h1>
                <a type="button" class="btn btn-primary" id="b[${i}]" onclick='document.getElementById("name[${i}]").remove()' >Remove</a><hr></div>`)
        
            }
        } 
        if(wow===0){
            container.innerHTML="<h1>Not Found!</h1>"
        }
        
    }
})
z.addEventListener('click',function call(){
               document.getElementById('box').innerHTML=""
               document.getElementById('search').value=""
            })
        })
    }
    
    
    start()