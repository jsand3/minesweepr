const printBoard = board => {
  console.log("Current Board:");
  //console.log(board[0][0]);
};
let board = [
  ['','',''],
  ['','',''],
  ['','','']
];

printBoard(board);
console.log(board[0].join(' | ')); // row 1
console.log(board[1].join(' | ')); // row 2
console.log(board[2].join(' | ')); // row 3
board[0][1] = 1;
board[2][2] = "B";
printBoard(board);
console.log(board[0].join(' | ')); // row 1
console.log(board[1].join(' | ')); // row 2
console.log(board[2].join(' | ')); // row 3
