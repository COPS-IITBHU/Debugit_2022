const Recovered = 42510773;

function stat() {
    fetch('https://api.covid19api.com/summary').then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('one').innerHTML = `<h3>Cases Today</h3>${data.Countries[77].NewConfirmed}`
            document.getElementById('two').innerHTML = `<h3>Deaths Today</h3> ${data.Countries[77].NewDeaths}`
            document.getElementById('four').innerHTML = `<h3>Total Cases</h3> ${data.Countries[77].TotalConfirmed}`
            document.getElementById('five').innerHTML = `<h3>Total Deaths</h3>${data.Countries[77].TotalDeaths}`
            document.getElementById('six').innerHTML = `<h3>Total Recoveries</h3> ${Recovered}`
        })
}
stat();
/*
function stat2() {
    fetch('https://api.covid19api.com/summary').then(response => response.json())
        .then(data => {
            console.log(data.Countries[77]);
            document.getElementById('two').innerHTML = `<h3>Deaths Today</h3> ${data.Countries[77].NewDeaths}`

        })
}
stat2();


function stat3() {
    fetch('https://api.covid19api.com/summary').then(response => response.json())
        .then(data => {
            console.log(data.Countries[77]);
            document.getElementById('three').innerHTML = `<h3>Recoveries Today</h3> ${data.Countries[77].NewRecovered}`

        })
}
stat3();


function stat4() {
    fetch('https://api.covid19api.com/summary').then(response => response.json())
        .then(data => {
            console.log(data.Countries[77]);
            document.getElementById('four').innerHTML = `<h3>Total Cases</h3> ${data.Countries[77].TotalConfirmed}`

        })
}
stat4();

function stat5() {
    fetch('https://api.covid19api.com/summary').then(response => response.json())
        .then(data => {
            console.log(data.Countries[77]);
            document.getElementById('five').innerHTML = `<h3>Total Deaths</h3>${data.Countries[77].TotalDeaths}`

        })
}
stat5();
const Recovered = 42510773;

function stat6() {
    fetch('https://api.covid19api.com/summary').then(response => response.json())
        .then(data => {
            console.log(data.Countries[77]);
            document.getElementById('six').innerHTML = `<h3>Total Recoveries</h3> ${Recovered}`

        })
}
stat6();
*/