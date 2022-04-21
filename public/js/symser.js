document.getElementById('one').addEventListener('click', show1)
document.getElementById('three').addEventListener('click', show1)
document.getElementById('four').addEventListener('click', show0)
document.getElementById('five').addEventListener('click', show1)
document.getElementById('seven').addEventListener('click', show1)
document.getElementById('nine').addEventListener('click', show1)
document.getElementById('two').addEventListener('click', show2)
document.getElementById('six').addEventListener('click', show2)
document.getElementById('eight').addEventListener('click', show2)
document.getElementById('jj').addEventListener('click', show2)
document.getElementById('kk').addEventListener('click', show2)
document.getElementById('ll').addEventListener('click', show2)
document.getElementById('mm').addEventListener('click', show2)
document.getElementById('nn').addEventListener('click', show2)
document.getElementById('oo').addEventListener('click', show2)
document.getElementById('pp').addEventListener('click', show2)
let m = "You are at high risk!Contact doctor and hospital immediately"
let n = "You are at low risk"
let p = "You are at medium risk.Stay with touch in Doctor"

function show0() {
    document.getElementById('drake').innerHTML = n;
    document.getElementById('drake').style.backgroundColor = "lightgreen"

}

function show1() {
    document.getElementById('drake').innerHTML = p;
    document.getElementById('drake').style.backgroundColor = "yellow"
}

function show2() {
    document.getElementById('drake').innerHTML = m;
    document.getElementById('drake').style.backgroundColor = "red"
}