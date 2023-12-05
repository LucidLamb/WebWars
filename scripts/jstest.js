/* -------------------------------- Variables ------------------------------- */

var currentScript = "--- " + document.scripts[document.scripts.length-1].src + " ---";
var message = "myscript.js is running";

/* -------------------------------- Functions ------------------------------- */

function myFunction(thisMessage = "Hello World!") {
    console.log(thisMessage);
}

function topNav() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

/* --------------------------------- Calling -------------------------------- */

console.log(currentScript);
myFunction();
myFunction(message);