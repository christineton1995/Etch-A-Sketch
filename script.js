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
    setSize.addEventListener("click", () => {
        div.style.backgroundColor = "white";
    })
  }
  
}

//Changing size upon input
function changeSize(input) {
    createBoard(input);
}

//Erasing board with Reset Button
let resetBtn = document.querySelector("#rBtn");
resetBtn.addEventListener("click", () => {
    window.location.reload();
    return false;
})