
//Setting default drawing color
let color = 'black';
let click = false;

document.addEventListener("DOMContentLoaded", function () {
  createBoard(50);

//Click to draw, and unclick to stop drawing
document.querySelector(".board").addEventListener("click", (e) => {
  click = !click;
})
}) 

let board = document.querySelector(".board");

//Creating board with square divs
function createBoard(size){
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let numDivs = size * size;

//Drawing on board
  for(i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    let setSize = document.querySelector("#sizeBtn");
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend",div);
  }
  
}

//Adding functionality to Black, and Random buttons
function colorDiv(){
  if (click){
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
  }else {
    this.style.backgroundColor = color;
  }
 }
}

function setColor(colorChoice){
   color = colorChoice; 
}

//Changing input from default value
let slider = document.querySelector("#size");
slider.oninput = function() {
  eraseBoard();
  createBoard(this.value);
}

//Erasing board with Clear Button
let clearBtn = document.querySelector("#cBtn");
clearBtn.addEventListener("click", eraseBoard);
function eraseBoard() {
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }
    createBoard(`${slider.value}`);
}

