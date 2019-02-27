

// Функция вычитания списков
// __________________________________________________________

  function Intersec(arr1,arr2){
      arr3 = arr1.filter(word => !(arr2.includes(word)))
      return arr3;
      };
// __________________________________________________________

// Рекурсия
// _____________________________________________________________
function solveHelper(puzzle) {
  var minPossibleValueCountCell = undefined;
  while (true) {
    minPossibleValueCountCell = undefined;
      
    for (var rowIndex=0; rowIndex < 9; rowIndex++){
        for (var columnIndex=0; columnIndex < 9; columnIndex++) {
            if (puzzle[rowIndex][columnIndex] != 0) { continue };
            var possibleValues = findPossibleValues( rowIndex, columnIndex, puzzle);
            var possibleValueCount = possibleValues.length;
            if (possibleValueCount == 0) { return false };
            if (possibleValueCount == 1) { puzzle[rowIndex][columnIndex] = possibleValues.pop()};
                  
            if (minPossibleValueCountCell == undefined) {
                minPossibleValueCountCell = [[rowIndex, columnIndex], possibleValues];
              } 
            if (possibleValueCount < minPossibleValueCountCell[1].length) {
                minPossibleValueCountCell = [[rowIndex, columnIndex], possibleValues];
              }
                                                                };
                   
                                                    }; // end of for

                                                    
    if (minPossibleValueCountCell == undefined) {return true}
    else if (1 < minPossibleValueCountCell[1].length) { break };
                      }  //end of while
  var r = minPossibleValueCountCell[0][0];
  var c = minPossibleValueCountCell[0][1];
  for (var v in minPossibleValueCountCell[1]) {
      var puzzleCopy = Array.from(Object.create(puzzle));
      puzzleCopy[r][c] = v;
      if (solveHelper(puzzleCopy)) {
          for (var r=0; r<9; r++) {
              for (var c=0; c<9; c++) {
                  puzzle[r][c] = puzzleCopy[r][c]; };
                          };
                          return true;
                      };
                  };
                  return false;
                                          };  // end of solveHelper
// _________________________________________________________________
// Получение возможных значений
// _________________________________________________________________
function findPossibleValues(rowIndex, columnIndex, puzzle) {              
  var values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  values = Intersec(values, getRowValues(rowIndex, puzzle));
  values = Intersec(values, getColumnValues(columnIndex, puzzle));
  values = Intersec(values, getBlockValues(rowIndex, columnIndex, puzzle));    
  return values;
};
// _________________________________________________________________ 

// Получение значений строки
// _________________________________________________________________
function getRowValues(rowIndex, puzzle) {
  return (puzzle[rowIndex])
};
// __________________________________________________________________

// Получение значений столбца
// __________________________________________________________________
function getColumnValues(columnIndex, puzzle) {
  var returned = [];
  for (var r=0; r<9; r++) {
      returned[r] = puzzle[r][columnIndex]
  };
  return returned
};
// __________________________________________________________________

// Получение значений ячейки 
// __________________________________________________________________
function getBlockValues(rowIndex, columnIndex, puzzle) {
  var returned = [];
  var blockRowStart = 3 * (Math.floor(rowIndex/3));
  var blockColumnStart = 3 * (Math.floor(columnIndex/3));
      var count = 0;
      for (var r=0; r<3; r++) {
          for (var c=0; c<3; c++) {
              returned[count] = puzzle[blockRowStart + r][blockColumnStart + c];
              count += 1;    
          };
          count += 1;
      };
      return returned
};
// __________________________________________________________________

// Основная функция
function solve(puzzle) {
  if (solveHelper(puzzle)) {
      return puzzle;
  }
  return NaN
};
// ___________________________________________________________________
module.exports = function solveSudoku(matrix) {
     return setTimeout(solve(matrix), 0);
  };


 
 


