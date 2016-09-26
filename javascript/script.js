document.addEventListener('DOMContentLoaded', init);

 function init() {

  var currentPlayer = 1;

  var ticTacToeBoxes = document.querySelectorAll('.box');

  var gameBoard = ['', '', '', '', '', '', '', '', ''];

  console.log(ticTacToeBoxes);

  for (var i = 0; i < ticTacToeBoxes.length; i++) {
    ticTacToeBoxes[i].addEventListener('click', boxClick)
  }
function boxClick() {
//Example:
// alert('box ' + this.id + ' is clicked');
var gameBoardIndex = this.id[3]
console.log(gameBoardIndex)
if( currentPlayer === 1) {
  this.classList.add('clickx');
} else {
  this.classList.add('clicko');
}

function switchPlayer() {
  if( currentPlayer === 1) {
    currentPlayer = 2
  } else {
    currentPlayer = 1
  }
}
  var wincombos = [
  // horizontal
  [0,1,2], [3,4,5], [6,7,8],
  // vertical
  [0,3,6], [1,4,7], [2,5,8],
  // diagonal
  [2,4,6], [0,4,8]
];
console.log(wincombos);

// function updateBoard() {
//     for (var = i = 0; i < 3; i++) {
//       var gameBoard = document.querySelector('#box' )
//     }
}


}
