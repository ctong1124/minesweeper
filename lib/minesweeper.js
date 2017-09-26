'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberofColumns) {
  var board = [];
  for (var i = 0; i < numberOfRows.length; i++) {
    var row = [];
    for (var j = 0; j < numberofColumns; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

var printBoard = function printBoard(board) {
  console.log("Current board:");
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

printBoard(generatePlayerBoard(3, 2));