document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);
}) 

//Creating board with square divs
function createBoard(size){
  let board = document.querySelector(".board");

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
  createBoard(this.value);
}

//Erasing board with Reset Button
let resetBtn = document.querySelector("#rBtn");
resetBtn.addEventListener("click", () => {
    window.location.reload();
    return false
})