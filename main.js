var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var colors = document.querySelector("#colors");
var rgbDisplay = document.querySelector("#rgbDisplay");

function randRgb() {
  return (
    "rgb(" +
    Math.floor(Math.random() * 256) +
    ", " +
    Math.floor(Math.random() * 256) +
    ", " +
    Math.floor(Math.random() * 256) +
    ")"
  );
}

document.body.style.background = randRgb();

if (easy.classList.contains("active")) {
  console.log("easy active");

  //create random color squares
  for (i = 0; i < 3; i++) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("square");
    newDiv.style.background = randRgb();
    colors.appendChild(newDiv);
  }
  //select one to be the target
  var targetIndex = Math.floor(Math.random() * 3);
  var targetSquare = colors.childNodes[targetIndex];
  var targetRgb = targetSquare.style.background;

  //set target rgb to header
  rgbDisplay.textContent = targetRgb;
}
