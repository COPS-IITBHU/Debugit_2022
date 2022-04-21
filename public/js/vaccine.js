let w = document.getElementById('yes')
let q = document.getElementById('no')
let e = document.getElementById('cf')
w.addEventListener('click', func1)
q.addEventListener('click', func2)

function func1() {
    e.innerHTML = "YES you are eligible for vaccination!"
}

function func2() {
    e.innerHTML = "NO you are not eligible for vaccination!"
}