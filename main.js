var header = document.querySelector("#header");
var rgbDisplay = document.querySelector("#rgbDisplay");
var newColors = document.querySelector("#newColors");
var message = document.querySelector("#message");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var colors = document.querySelector("#colors");

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

function reset() {
  //won function placed here so that it can be bound to each square
  function won() {
    header.style.backgroundColor = targetRgb;
    for (i = 0; i < colors.childElementCount; i++) {
      colors.childNodes[i].style.backgroundColor = targetRgb;
    }
    message.textContent = "You won!";
    newColors.textContent = "PLAY AGAIN?";
  }

  //reset header color
  header.style.backgroundColor = "#5183B4";

  //reset newColor sbutton text
  newColors.textContent = "NEW COLORS";

  //reset message text
  message.textContent = "";

  //destroy old squares
  while (colors.childElementCount > 0) {
    colors.removeChild(colors.childNodes[0]);
  }

  //easy / hard mode
  if (easy.classList.contains("active")) {
    var squareCount = 3;
  } else {
    var squareCount = 6;
  }

  //create random color squares
  for (i = 0; i < squareCount; i++) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("square");
    newDiv.style.backgroundColor = randRgb();
    // newDiv.textContent = newDiv.style.backgroundColor; // to display rgb values on the squares
    newDiv.addEventListener("click", function() {
      if (this == targetSquare) {
        won();
      } else {
        this.style.backgroundColor = "#232223";
        message.textContent = "Try again!";
      }
    });
    colors.appendChild(newDiv);
  }

  //select one square / color to be the target
  var targetIndex = Math.floor(Math.random() * squareCount);
  var targetSquare = colors.childNodes[targetIndex];
  var targetRgb = targetSquare.style.backgroundColor;

  //set target rgb value to header rgb display
  rgbDisplay.textContent = targetRgb;
}

function init() {
  newColors.addEventListener("click", reset);

  easy.addEventListener("click", function() {
    this.classList.add("active");
    hard.classList.remove("active");
    reset();
  });

  hard.addEventListener("click", function() {
    this.classList.add("active");
    easy.classList.remove("active");
    reset();
  });
}

init();
reset();
