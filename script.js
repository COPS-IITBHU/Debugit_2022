// Navbar show js
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

// Chart opens when logged in
// why not working
var x=0;
// function chartshow(){
//     if(x==0){
//        alert("You must be logged in to use this");
//        return false;
//     }
//     if(x==1){
//        return true;
//     }
// }

// stop chart from opening
document.getElementById("dont").addEventListener("click", function(event){
    event.preventDefault()
    alert("You need to login to access this page");
  });

// Valid Registeration and Login
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
    // create account
    const person = {
        Name: a.value,
        Mobile: c.value,
        Address: d.value,
        Password: e.value,
    }
    
    window.localStorage.setItem(b.value, JSON.stringify(person));
    alert("Account created successfully");
}
// open only after login
function openchart() {
    location.replace("https://debugit-2022-three.vercel.app/chart.html");
  }
function login(){
    let b = document.getElementById('email');
    let e = document.getElementById('password');
    let z= JSON.parse(window.localStorage.getItem(b.value)).Password;
    if(e.value==z){
        setTimeout(openchart, 1000);
        alert("Successfully logged in");
        // // x=1;
        // // console.log(x);
        // // return false;
        // window.location.replace("http://127.0.0.1:5500/chart.html/");
        // window.location.href="./chart.html";
        // window.location.assign("http://127.0.0.1:5500/chart.html/");
        // location.href="http://127.0.0.1:5500/chart.html";
        
    }
    else{
        alert("Your credintials are wrong");
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
    // check if details available or not
    login();
}

// Add row of Children when adding details
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];

var n = 1;
var x = 0;

function AddRow() {

    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);

    list1[x] = document.getElementById("fname").value;
    list2[x] = document.getElementById("lname").value;
    list3[x] = document.getElementById("age").value;
    list4[x] = document.getElementById("gender").value;
    list5[x] = document.getElementById("health").value;
    list6[x] = "Details";

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);
    var cel6 = NewRow.insertCell(5);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];
    cel6.innerHTML = list6[x];
    n++;
    x++;
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
}

// Validation of Add row and then add
function Validation() {
    let a = document.getElementById('fname');
    let b = document.getElementById('lname');
    let c = document.getElementById('age');
    let d = document.getElementById('gender');
    let e = document.getElementById('health');

    let nameregex = /^[a-zA-Z]+$/;
    let num = /^[0-9]+$/;

    if (!nameregex.test(a.value)) {
        alert("Enter valid Firstname");
        return false;
    }
    if (!nameregex.test(b.value)) {
        alert("Enter valid Lastname");
        return false;
    }
    if (!num.test(c.value)) {
        alert("Enter valid Age");
        return false;
    }
    if (d.value == "") {
        alert("Gender must be filled out");
        return false;
    }
    if (e.value == "") {
        alert("Health issues must be filled out.Fill None if NA");
        return false;
    }
    AddRow();
}

// Book Appointment 
var lis1 = [];
var lis2 = [];
var lis3 = [];
var lis4 = [];

var number = 1;
var t = 0;

function BookApo() {
    var AddRown = document.getElementById('appos');
    var NewRow = AddRown.insertRow(number);

    lis1[x] = document.getElementById("name").value;
    lis2[x] = document.getElementById("num").value;
    lis3[x] = document.getElementById("reason").value;
    lis4[x] = document.getElementById("date").value;


    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);


    cel1.innerHTML = lis4[x];
    cel2.innerHTML = "Ram Sharma";
    cel3.innerHTML = list3[x];
    cel4.innerHTML = "Upcoming";
    number++;
    t++;
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
}

//Validation of Book Appo then add
function Valid() {
	let a = document.getElementById('name');
	let e = document.getElementById('reason');
	let nameregex = /^[a-zA-Z]+$/;
	if (!nameregex.test(a.value)) {
		alert("Enter valid Name");
		return false;
	}
	if (e.value == "") {
		alert("Reason for Appointment must be filled out.");
		return false;
	}
	BookApo();
}