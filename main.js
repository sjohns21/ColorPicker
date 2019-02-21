var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var colors = document.querySelector("#colors");
var rgbDisplay = document.querySelector("#rgbDisplay");
var message = document.querySelector("#message");
var header = document.querySelector("#header");
var newColors = document.querySelector("#newColors");

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

function init() {
  //reset header color
  header.style.background = "#5183B4";

  //reset newColor sbutton text
  newColors.textContent = "NEW COLORS";

  message.textContent = "";

  //destroy squares
  while (colors.childElementCount > 0) {
    colors.removeChild(colors.childNodes[0]);
  }

  var squareCount;

  if (easy.classList.contains("active")) {
    squareCount = 3;
  } else {
    squareCount = 6;
  }

  //create random color squares
  for (i = 0; i < squareCount; i++) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("square");
    newDiv.style.background = randRgb();
    // newDiv.textContent = newDiv.style.background;
    newDiv.addEventListener("click", function() {
      selectedSquare = this;
      if (selectedSquare == targetSquare) {
        won();
      } else {
        this.style.visibility = "hidden";
        message.textContent = "Try again!";
      }
    });

    colors.appendChild(newDiv);
  }

  //select one to be the target
  var targetIndex = Math.floor(Math.random() * squareCount);
  var targetSquare = colors.childNodes[targetIndex];
  var targetRgb = targetSquare.style.background;

  //set target rgb text to header
  rgbDisplay.textContent = targetRgb;

  function won() {
    header.style.background = targetRgb;
    for (i = 0; i < colors.childElementCount; i++) {
      colors.childNodes[i].style.background = targetRgb;
    }
    message.textContent = "You won!";
    newColors.textContent = "PLAY AGAIN?";
  }
}

newColors.addEventListener("click", init);

easy.addEventListener("click", function() {
  this.classList.add("active");
  hard.classList.remove("active");
  init();
});

hard.addEventListener("click", function() {
  this.classList.add("active");
  easy.classList.remove("active");
  init();
});

var selectedSquare;

init();
