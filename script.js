document.addEventListener("DOMContentLoaded", function () {
  createBoard(50);
}) 

let board = document.querySelector(".board");

//Creating board with square divs
function createBoard(size){
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let numDivs = size * size;

  for(i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    let setSize = document.querySelector("#sizeBtn");
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    })
    board.insertAdjacentElement("beforeend",div);
  }
  
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


