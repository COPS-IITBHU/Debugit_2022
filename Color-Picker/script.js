let correctAnswer, random_r, random_g, random_b, value;
let color1 = document.getElementById("c1");
let color2 = document.getElementById("c2");
let color3 = document.getElementById("c3");
let color4 = document.getElementById("c4");
let color5 = document.getElementById("c5");
let color6 = document.getElementById("c6");
disableAllColouredButtons();
// easy button
function easy() {
  enableAllColouredButtons();
  color4.style.visibility = "hidden";
  color5.style.visibility = "hidden";
  color6.style.visibility = "hidden";
  correctAnswer = Math.floor(Math.random() * 3 + 1);
  document.getElementById("yellow").style.background = "rgb(231, 198, 9)";
  document.getElementById("tryagain").style.visibility = "hidden";
  random_r = Math.floor(Math.random() * 256);
  random_g = Math.floor(Math.random() * 256);
  random_b = Math.floor(Math.random() * 256);
  document.getElementById("r").innerHTML = random_r;
  document.getElementById("g").innerHTML = random_g;
  document.getElementById("b").innerHTML = random_b;
  assignColors();
}
// hard button
function hard() {
  enableAllColouredButtons();
  correctAnswer = Math.floor(Math.random() * 6 + 1);
  document.getElementById("yellow").style.background = "rgb(231, 198, 9)";
  document.getElementById("tryagain").style.visibility = "hidden";
  random_r = Math.floor(Math.random() * 256);
  random_g = Math.floor(Math.random() * 256);
  random_b = Math.floor(Math.random() * 256);
  document.getElementById("r").innerHTML = random_r;
  document.getElementById("g").innerHTML = random_g;
  document.getElementById("b").innerHTML = random_b;
  assignColors();
}
// set new colors
function rgb() {
  enableAllColouredButtons();
  document.getElementById("yellow").style.background = "rgb(231, 198, 9)";
  document.getElementById("tryagain").style.visibility = "hidden";
  random_r = Math.floor(Math.random() * 256);
  random_g = Math.floor(Math.random() * 256);
  random_b = Math.floor(Math.random() * 256);
  document.getElementById("r").innerHTML = random_r;
  document.getElementById("g").innerHTML = random_g;
  document.getElementById("b").innerHTML = random_b;
  if (color5.style.visibility == "hidden") value = 3;
  else value = 6;
  correctAnswer = Math.floor(Math.random() * value + 1);
  assignColors();
}
// button-handelling
function colorChoice1() {
  if (correctAnswer == 1) {
    winningScenario();
  } else {
    color1.style.visibility = "hidden";
    losingScenario();
  }
}
function colorChoice2() {
  if (correctAnswer == 2) {
    winningScenario();
  } else {
    color2.style.visibility = "hidden";
    losingScenario();
  }
}
function colorChoice3() {
  if (correctAnswer == 3) {
    winningScenario();
  } else {
    color3.style.visibility = "hidden";
    losingScenario();
  }
}
function colorChoice4() {
  if (correctAnswer == 4) {
    winningScenario();
  } else {
    color4.style.visibility = "hidden";
    losingScenario();
  }
}
function colorChoice5() {
  if (correctAnswer == 5) {
    winningScenario();
  } else {
    color5.style.visibility = "hidden";
    losingScenario();
  }
}
function colorChoice6() {
  if (correctAnswer == 6) {
    winningScenario();
  } else {
    color6.style.visibility = "hidden";
    losingScenario();
  }
}
function enableAllColouredButtons() {
  const colors = [color1, color2, color3, color4, color5, color6];
  for (let i = 1; i <= 6; i++) {
    colors[i - 1].disabled = false;
    colors[i - 1].style.visibility = "visible";
  }
}
function disableAllColouredButtons() {
  const colors = [color1, color2, color3, color4, color5, color6];
  for (let i = 1; i <= 6; i++) {
    colors[i - 1].disabled = true;
  }
}
function winningScenario() {
  const colors = [color1, color2, color3, color4, color5, color6];
  for (let i = 1; i <= 6; i++) {
    colors[i - 1].style.background =
      "rgb(" + random_r + "," + random_g + "," + random_b + ")";
    colors[i - 1].style.visibility = "visible";
  }
  document.getElementById("yellow").style.background =
    "rgb(" + random_r + "," + random_g + "," + random_b + ")";
  document.getElementById("tryagain").style.visibility = "visible";
  document.getElementById("tryagain").innerHTML = "Correct!!";
  document.getElementById("newcolor").innerHTML = "PLAY AGAIN";
  disableAllColouredButtons();
}
function losingScenario() {
  document.getElementById("tryagain").style.visibility = "visible";
  document.getElementById("tryagain").innerHTML = "Try again";
}
// generate random colors
function generateRandomColor() {
  let colors = [];
  for (let i = 1; i <= 3; i++) {
    colors.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
}
function assignColors() {
  const colors = [color1, color2, color3, color4, color5, color6];
  for (let i = 1; i <= 6; i++) {
    if (correctAnswer == i) {
      colors[i - 1].style.background =
        "rgb(" + random_r + "," + random_g + "," + random_b + ")";
    } else {
      colors[i - 1].style.background = generateRandomColor();
    }
  }
}
