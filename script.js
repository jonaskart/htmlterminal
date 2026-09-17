//blinking thing
var blink_speed = 500; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var ele = document.getElementById('blinking');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);

/*

const command = "cat cv.txt";

let command = "cat cv.txt";
let advanced = 0;

document.addEventListener('keydown', (event) => {
  advanced = advanced + 1;
  advance();
});


function advance() {
  if (advanced >= command.length) {
    console.log("nuh uh");
  }
}

*/
