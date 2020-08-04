// ------------- Variable Declerations
var purpleBtn = document.getElementById('purple-btn');
var redBtn = document.getElementById('red-btn');
var orangeBtn = document.getElementById('orange-btn');
var yellowBtn = document.getElementById('yellow-btn');
var greenBtn = document.getElementById('green-btn');
var blueBtn = document.getElementById('blue-btn');
var blackBtn = document.getElementById('black-btn');

// ------------- EventListeners
// purpleBtn.addEventListener('click', showPurple);
// redBtn.addEventListener('click', showRed);
// orangeBtn.addEventListener('click', showOrange);
// yellowBtn.addEventListener('click', showYellow);
// greenBtn.addEventListener('click', showGreen);
// blueBtn.addEventListener('click', showBlue);
// blackBtn.addEventListener('click', showBlack);

// ------------- Function Declerations
function showPurple() {
  var purpleBox = document.querySelector('.purple');
  purpleBox.style.backgroundColor = 'rebeccapurple';
}
function showRed() {
  var redBox = document.querySelector('.red');
  redBox.style.backgroundColor = 'firebrick';
}
function showOrange() {
  var orangeBox = document.querySelector('.orange');
  orangeBox.style.backgroundColor = 'orange';
}
function showYellow() {
  var yellowBox = document.querySelector('.yellow');
  yellowBox.style.backgroundColor = 'gold';
}
function showGreen() {
  var greenBox = document.querySelector('.green');
  greenBox.style.backgroundColor = 'forestgreen';
}
function showBlue() {
  var blueBox = document.querySelector('.blue');
  blueBox.style.backgroundColor = 'royalblue';
}
function showBlack() {
  var blackBox = document.querySelector('.black');
  blackBox.style.backgroundColor = 'black';
  blackBox.style.color = 'white';
}
