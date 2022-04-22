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

// open only after login and signup


// trying to change orphoange name to right info
// var x= "XYZ";
// console.log(x);

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
    if (localStorage.getItem(b.value) != null) {
        alert("Email address already exists");
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
    // x=a.value;
    // document.getElementById("nage").innerHTML = x;
    window.localStorage.setItem(b.value, JSON.stringify(person));
    // openchart();
    alert("Account created successfully.Now go to login");
}
function openchart() {
    window.close();
    window.open("https://debugit-2022-three.vercel.app/chart.html");
    // window.location.replace("https://debugit-2022-three.vercel.app/chart.html");
}
function login(){
    let b = document.getElementById('email');
    let e = document.getElementById('password');
    let z= JSON.parse(window.localStorage.getItem(b.value)).Password;
    if(e.value==z){
        // setTimeout(openchart, 1000);
        openchart();
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
    var AddRown = document.getElementById('appost');
    var NewRow = AddRown.insertRow(number);

    lis1[x] = document.getElementById("date").value;
    lis2[x] = document.getElementById("name").value;
    lis3[x] = "Rama Kumar"
    if(lis1[x]=="2022-05-01"){
        lis3[x]="Sandhaya Shah";
    }
    if(lis1[x]=="2022-05-07"){
        lis3[x]="Roshni Singhania";
    }
    lis4[x] = document.getElementById("reason").value;
   

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);

    
    cel1.innerHTML = lis1[x];
    cel2.innerHTML = lis2[x];
    cel3.innerHTML = lis3[x];
    cel4.innerHTML = lis4[x];
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

// Validation of the data entered and checking with local base data and
// then setting new password
function ValidReset(){
    let b = document.getElementById('emailf');
    let c = document.getElementById('numberf');
    let e = document.getElementById('passwordf');
    let f = document.getElementById('re-passwordf');
    let num = /^[0-9]+$/;
    let mail = /^[a-zA-Z0-9]+@(gmail|yahoo)\.com$/;
    let pass = /^[A-Za-z0-9]\w{6,14}$/;
   
    if (!mail.test(b.value)) {
        alert("Enter valid Emailid");
        return false;
    }
    if (localStorage.getItem(b.value) == null) {
        console.log("No account with this emaild exist");
    }
    if (!num.test(c.value)) {
        alert("Enter valid Mobile No");
        return false;
    }
    let z= JSON.parse(window.localStorage.getItem(b.value)).Mobile;
    if (c.value != z) {
        alert("Incorrect Phone Number");
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
    // change password
    let x= JSON.parse(window.localStorage.getItem(b.value)).Name;
    let y= JSON.parse(window.localStorage.getItem(b.value)).Address;
    const person = {
        Name: x,
        Mobile: c.value,
        Address: y,
        Password: e.value,
    }
    window.localStorage.setItem(b.value, JSON.stringify(person));
    alert("Password has been reset.Go to login!")
} 

// trying different method gotta find bugs
// var _PDF_DOC;
// var _CANVAS = document.querySelector('#pdf-preview');
// var _OBJECT_URL;
// function showPDF(pdf_url) {
//     PDFJS.getDocument({ url: pdf_url }).then(function(pdf_doc) {
//         _PDF_DOC = pdf_doc;
//         showPage(1);
//         URL.revokeObjectURL(_OBJECT_URL);
//     }).catch(function(error) {
//         // if error why
//         alert(error.message);
//     });;
// }
// // show page of PDF
// function showPage(page_no) {
//     _PDF_DOC.getPage(page_no).then(function(page) {
//         // setting widthviewport
//         var scale_required = _CANVAS.width / page.getViewport(1).width;

//         //viewport required scale
//         var viewport = page.getViewport(scale_required);

//         // set canvas height
//         _CANVAS.height = viewport.height;

//         var renderContext = {
//             canvasContext: _CANVAS.getContext('2d'),
//             viewport: viewport
//         };       
//         // render the page contents in the canvas
//         page.render(renderContext).then(function() {
//             document.querySelector("#pdf-preview").style.display = 'inline-block';
//             document.querySelector("#pdf-loader").style.display = 'none';
//         });
//     });
// }
// document.querySelector("#upload-dialog").addEventListener('click', function() {
//     document.querySelector("#pdf-file").click();
// });
// document.querySelector("#pdf-file").addEventListener('change', function() {
//     // user selected PDF
//     var file = this.files[0];
//     // allowed MIME types
//     var mime_types = [ 'application/pdf' ];   
//     // validate whether PDF
//     if(mime_types.indexOf(file.type) == -1) {
//         alert('Error : Incorrect file type');
//         return;
//     }
//     // validate file size
//     if(file.size > 10*1024*1024) {
//         alert('Error : Exceeded size 10MB');
//         return;
//     }
//     // validation successful
//     // hide upload dialog
//     document.querySelector("#upload-dialog").style.display = 'none';   
//     // show PDF preview loader
//     document.querySelector("#pdf-loader").style.display = 'inline-block';
//     // object url of PDF 
//     _OBJECT_URL = URL.createObjectURL(file)
//     // send the object url of the pdf to the PDF preview function
//     showPDF(_OBJECT_URL);
// });


//PDF viewer after upload of file
document.querySelector("#pdf-upload").addEventListener("change", function(e){
	
	var file = e.target.files[0];
	if(file.type != "application/pdf"){
		alert("Please choose another file of application or pdf format.");
		return false;
	}
	
	var fileReader = new FileReader();  

	fileReader.onload = function() {
		var typedarray = new Uint8Array(this.result);

		PDFJS.getDocument(typedarray).then(function(pdf) {
			console.log("the pdf has ",pdf.numPages, "page(s).")
			pdf.getPage(pdf.numPages).then(function(page) {
				
				var viewport = page.getViewport(2.0);
				var canvas = document.querySelector("canvas")
				canvas.height = viewport.height;
				canvas.width = viewport.width;

				page.render({
					canvasContext: canvas.getContext('2d'),
					viewport: viewport
				});
			});

		});
	};

	fileReader.readAsArrayBuffer(file);
})
// const i={};
// var arr=[1,2];
// console.log(i);
// function id(){
//    var arr[1] = "1";
// }
