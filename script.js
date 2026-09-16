//blinking thing
const command = "cat cv.txt"

var blink_speed = 500; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var ele = document.getElementById('blinking');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);

document.getElementById("console").onkeydown = function() {myFunction()};

function myFunction() {
  document.getElementById('hiddencommand').innerHTML = command;
}