// $.getJSON("https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple", function(data){
//   console.log(data.results[0]);
// })

var data = window.location.search.split("&")
var topic = data[0].split("=")[1];
var amount = data[1].split("=")[1];
var difficulty = data[2].split("=")[1];

console.log(topic, amount, difficulty);

var url = `https://opentdb.com/api.php?amount=${amount}&category=${topic}&difficulty=${difficulty}&type=multiple`
console.log(url);
var questions = {};
var i=0;
var time;
var score=0;
$.getJSON(url, function(data){
  questions = data.results ;
  console.log(questions);
  if (questions.length===0){
    document.getElementById("question").innerHTML = "Sorry, Not Enough Questions Available. <br> Please Change the Options and Try again." ;
  }
  else{
    nextQues();
  }

})

var myTimer;

function timer(){
  document.querySelector(".timer").innerHTML = `<h4>TIMER: ${time}</h4>`;
  if (time===0){
    clearInterval(myTimer);
    nextQues();
  }
  else{
    time--;
  }
}

function end(){
  document.getElementById("question").innerHTML = `QUIZ COMPLETED<br> YOUR FINAL SCORE IS ${score}`;
  document.querySelector(".next").innerHTML = "GO TO HOME";
  document.querySelector(".next").onclick = goToHome;
  for (var i=0; i<4; i++){
    document.querySelectorAll(".options")[i].style.display = "none";
  }
}

function goToHome(){
  document.querySelector(".next").onclick = window.location.href='./index.html'; ;
}

function nextQues(){
    if (difficulty==="easy"){
      time = 10;
    }
    else if (difficulty==="medium"){
      time = 20;
    }
    else{
      time = 30;
    }
    document.querySelector(".next").disabled = true;
    for (var k=0; k<4; k++){
      document.querySelectorAll(".options")[k].disabled = false;
      document.querySelectorAll(".options")[k].style.backgroundColor = "#ffffff";
    }
    // console.log("HI");
    // console.log(questions[i]);
    console.log(questions);
    document.getElementById("question").innerHTML = questions[i].question ;
    var correctOption = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(correctOption);
    var element = document.getElementById("option"+correctOption) ;
    element.innerHTML = questions[i].correct_answer ;
    element.classList.add("correct-answer");
    console.log(document.getElementById("option"+correctOption));
    // console.log(document.querySelector(".correct-answer"));

    var index=0;
    for (var j=1; j<=4; j++){
      if (j!=correctOption){
        document.getElementById("option"+j).innerHTML = questions[i].incorrect_answers[index] ;
        index++;
      }
    }
    i++;
    myTimer = setInterval(timer, 1000);
}

function option1(){
  clearInterval(myTimer);
  document.querySelector(".next").disabled = false;
  var classes = document.getElementById("option1").classList ;
  // console.log(classes);
  if (classes.contains("correct-answer")){
    score++;
    console.log(score);
    document.querySelector(".score").innerHTML = `<h4>SCORE: ${score}</h4>`;
  }
  else{
    document.getElementById("option1").style.backgroundColor = "#f44336";
  }
  document.querySelector(".correct-answer").style.backgroundColor = "#04AA6D";
  document.querySelector(".correct-answer").classList.remove("correct-answer");

  for (var k=0; k<4; k++){
    document.querySelectorAll(".options")[k].disabled = true;
  }
  if (i==questions.length){
    document.querySelector(".next").onclick = end;
  }
}

function option2(){
  clearInterval(myTimer);
  document.querySelector(".next").disabled = false;
  var classes = document.getElementById("option2").classList ;
  // console.log(classes);
  if (classes.contains("correct-answer")){
    score++;
    console.log(score);
    document.querySelector(".score").innerHTML = `<h4>SCORE: ${score}</h4>`;
  }
  else{
    document.getElementById("option2").style.backgroundColor = "#f44336";
  }
  document.querySelector(".correct-answer").style.backgroundColor = "#04AA6D";
  document.querySelector(".correct-answer").classList.remove("correct-answer");
  for (var k=0; k<4; k++){
    document.querySelectorAll(".options")[k].disabled = true;
  }
  if (i==questions.length){
    document.querySelector(".next").onclick = end;
  }
}

function option3(){
  clearInterval(myTimer);
  document.querySelector(".next").disabled = false;
  var classes = document.getElementById("option3").classList ;
  // console.log(classes);
  if (classes.contains("correct-answer")){
    score++;
    console.log(score);
    document.querySelector(".score").innerHTML = `<h4>SCORE: ${score}</h4>`;
  }
  else{
    document.getElementById("option3").style.backgroundColor = "#f44336";
  }
  document.querySelector(".correct-answer").style.backgroundColor = "#04AA6D";
  document.querySelector(".correct-answer").classList.remove("correct-answer");
  for (var k=0; k<4; k++){
    document.querySelectorAll(".options")[k].disabled = true;
  }
  if (i==questions.length){
    document.querySelector(".next").onclick = end;
  }
}

function option4(){
  clearInterval(myTimer);
  document.querySelector(".next").disabled = false;
  var classes = document.getElementById("option4").classList ;
  // console.log(classes);
  if (classes.contains("correct-answer")){
    score++;
    console.log(score);
    document.querySelector(".score").innerHTML = `<h4>SCORE: ${score}</h4>`;
  }
  else{
    document.getElementById("option4").style.backgroundColor = "#f44336";
  }
  document.querySelector(".correct-answer").style.backgroundColor = "#04AA6D";
  document.querySelector(".correct-answer").classList.remove("correct-answer");
  for (var k=0; k<4; k++){
    document.querySelectorAll(".options")[k].disabled = true;
  }
  if (i==questions.length){
    document.querySelector(".next").onclick = end;
  }
}
