const score = JSON.parse(localStorage.getItem('highScores')) || [];
const list = document.querySelector('#list');

list.innerHTML= score.map(function (array) {
  return `<li>${array.name} - ${array.score}</li>`;
}).join('');

function wwe() {
  localStorage.clear()
  return window.location.assign('index.html');
}
