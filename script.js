let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function ValidReg() {
    let a = document.getElementById('name');
    let b = document.getElementById('email');
    let c = document.getElementById('mobile');
    let d = document.getElementById('address');
    let e = document.getElementById('password');
    let f = document.getElementById('re-password');

    let nameregex = /^[a-zA-Z]+$/;
    let num = /^[0-9]+$/;
    let mail = /^[a-zA-Z0-9]+@(gmail|yahoo)\.com$/;
    let pass = /^[A-Za-z0-9]\w{6,14}$/;

    if (!nameregex.test(a.value)) {
        alert("Enter valid Name");
        return false;
    }
    if (!mail.test(b.value)) {
        alert("Enter valid Emailid");
        return false;
    }
    if (!num.test(c.value)) {
        alert("Enter valid Mobile No");
        return false;
    }
    if (d.value == "") {
        alert("Address must be filled out");
        return false;
    }
    if (!pass.test(e.value)) {
        alert("Password must be more than 6 char");
        return false;
    }
    if (e.value != f.value) {
        alert("Password is not same in both columns");
        return false;
    }
}
function ValidLog() {

    let b = document.getElementById('email');
    let e = document.getElementById('password');

    let mail = /^[a-zA-Z0-9]+@(gmail|yahoo)\.com$/;
    let pass = /^[A-Za-z0-9]\w{6,14}$/;

    if (!mail.test(b.value)) {
        alert("Enter valid Emailid");
        return false;
    }

    if (!pass.test(e.value)) {
        alert("Password incorrect as it has to be more than 6 char");
        return false;
    }
}
