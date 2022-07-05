const Recovered = 456062339;

function stats() {
    fetch('https://api.covid19api.com/summary').then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('one').innerHTML = `<h3>Cases Today</h3>${data.Global.NewConfirmed}`
            document.getElementById('two').innerHTML = `<h3>Deaths Today</h3> ${data.Global.NewDeaths}`
            document.getElementById('four').innerHTML = `<h3>Total Cases</h3> ${data.Global.TotalConfirmed}`
            document.getElementById('five').innerHTML = `<h3>Total Deaths</h3>${data.Global.TotalDeaths}`
            document.getElementById('six').innerHTML = `<h3>Total Recoveries</h3> ${Recovered}`

        })
}
stats();
/*
function stats2() {
    fetch('https://api.covid19api.com/summary').then(response => response.json())
        .then(data => {
            //console.log(data.Countries[77]);
            document.getElementById('two').innerHTML = `<h3>Deaths Today</h3> ${data.Global.NewDeaths}`

        })
}
stats2();

function stats3() {
    fetch('https://api.covid19api.com/summary').then(response => response.json())
        .then(data => {
            console.log(data.Countries[77]);
            document.getElementById('three').innerHTML = `<h3>Recoveries Today</h3> ${data.Global.NewRecovered}`

        })
}
stats3();

function stats4() {
    fetch('https://api.covid19api.com/summary').then(response => response.json())
        .then(data => {
            //console.log(data.Countries[77]);
            document.getElementById('four').innerHTML = `<h3>Total Cases</h3> ${data.Global.TotalConfirmed}`

        })
}
stats4();

function stats5() {
    fetch('https://api.covid19api.com/summary').then(response => response.json())
        .then(data => {
            //console.log(data.Countries[77]);
            document.getElementById('five').innerHTML = `<h3>Total Deaths</h3>${data.Global.TotalDeaths}`

        })
}
stats5();
const Recovered = 456062339;

function stats6() {
    fetch('https://api.covid19api.com/summary').then(response => response.json())
        .then(data => {
            //console.log(data.Countries[77]);
            document.getElementById('six').innerHTML = `<h3>Total Recoveries</h3> ${Recovered}`

        })
}
stats6();*/