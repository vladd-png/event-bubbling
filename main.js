// ------------- Variable Declerations
var purpleBtn = document.getElementById('purple-btn');
var redBtn = document.getElementById('red-btn');
var orangeBtn = document.getElementById('orange-btn');
var yellowBtn = document.getElementById('yellow-btn');
var greenBtn = document.getElementById('green-btn');
var blueBtn = document.getElementById('blue-btn');
var blackBtn = document.getElementById('black-btn');

// ------------- EventListeners
purpleBtn.addEventListener('click', showPurple);
redBtn.addEventListener('click', showRed);
orangeBtn.addEventListener('click', showOrange);
yellowBtn.addEventListener('click', showYellow);
greenBtn.addEventListener('click', showGreen);
blueBtn.addEventListener('click', showBlue);
blackBtn.addEventListener('click', showBlack);

// ------------- Function Declerations
function showPurple() {
  console.log('purple button clicked');
}
function showRed() {
  console.log('red button clicked');
}
function showOrange() {
  console.log('orange button clicked');
}
function showYellow() {
  console.log('yellow button clicked');
}
function showGreen() {
  console.log('green button clicked');
}
function showBlue() {
  console.log('blue button clicked');
}
function showBlack() {
  console.log('black button clicked');
}
