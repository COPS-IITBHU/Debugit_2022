let lsg = document.getElementById('pre')
let gt = document.getElementById('nex')
var kkr = 0;
var dc = 0
console.log(kkr)

/*async function amy() {
    await fetch('https://api.covid19api.com/summary').then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('f').innerHTML = `<h3>Country Name</h3>${data.Countries[kkr].Country}`
        })
}
amy();*/

async function amy2() {
    await fetch('https://api.covid19api.com/summary').then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('f').innerHTML = `<h3>Country Name</h3>${data.Countries[kkr].Country}`
            document.getElementById('g').innerHTML = `<h3>New Cases</h3>${data.Countries[kkr].NewConfirmed}`
            dc = data.Countries[kkr].NewConfirmed;
            document.getElementById('h').innerHTML = `<h3>New Deaths</h3>${data.Countries[kkr].NewDeaths}`


            if (dc < 2000) {
                document.getElementById('ri').style.backgroundColor = "lightgreen"
                document.getElementById('ri').innerHTML = `<h3>This country has low covid risk</h3>`
            } else if (dc >= 2000 && dc < 10000) {
                document.getElementById('ri').style.backgroundColor = "yellow"
                document.getElementById('ri').innerHTML = `<h3>This country has moderate covid risk</h3>`
            } else {
                document.getElementById('ri').style.backgroundColor = "red"
                document.getElementById('ri').innerHTML = `<h3>This country has high covid risk</h3>`
            }
        })
}
amy2();
/*
async function amy3() {
    await fetch('https://api.covid19api.com/summary').then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('h').innerHTML = `<h3>New Deaths</h3>${data.Countries[kkr].NewDeaths}`
        })
}
amy3();*/
lsg.addEventListener('click', change1)
gt.addEventListener('click', change2)

function change1() {
    if (kkr > 0) {
        kkr = kkr - 1;
    }
    amy2()
}

function change2() {
    if (kkr < 193) {
        kkr = kkr + 1;
    }
    amy2()
}