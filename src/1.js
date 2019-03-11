

// Функция вычитания списков
// __________________________________________________________

function Intersec(arr1,arr2){
    arr3 = arr1.filter(word => !(arr2.includes(word)))
    return arr3;
    };
// __________________________________________________________

// Рекурсия
// _____________________________________________________________
function solveHelper(solution) {
var minPossibleValueCountCell = NaN;
while (true) {
  var minPossibleValueCountCell = NaN;
    
  for (var rowIndex=0; rowIndex < 9; rowIndex++){
      for (var columnIndex=0; columnIndex < 9; columnIndex++) {
          if (solution[rowIndex][columnIndex] != 0) { continue };
          var possibleValues = findPossibleValues( rowIndex, columnIndex, solution);
        //  console.log(possibleValues);
          var possibleValueCount = possibleValues.length;
          if (possibleValueCount == 0) { return false };
          if (possibleValueCount == 1) { solution[rowIndex][columnIndex] = Number(possibleValues.pop())};
                
          if (!minPossibleValueCountCell)
          { minPossibleValueCountCell = [[rowIndex, columnIndex], possibleValues]; };
           if ( possibleValueCount < minPossibleValueCountCell[1].length) {
            { minPossibleValueCountCell = [[rowIndex, columnIndex], possibleValues]; }   
            } ;
                                                               };
                 
                                                  }; // end of for

                                       
  if (!minPossibleValueCountCell) { return true}
  else if (1 < minPossibleValueCountCell[1].length) { break };
  console.log("minvaluecell : " + minPossibleValueCountCell);
                    }  //end of while
var r = minPossibleValueCountCell[0][0];
var c = minPossibleValueCountCell[0][1];

for (var v in minPossibleValueCountCell[1]) {
    var puzzleCopy = Array.from(Object.create(solution));
    
    puzzleCopy[r][c] = minPossibleValueCountCell[1][v];
    console.log(puzzleCopy);
    if (solveHelper(puzzleCopy)) {    
        for (var d=0; d<9; d++) {
            for (var e=0; e<9; e++) {
                solution[d][e] = Number(puzzleCopy[d][e]); };
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
console.log(values + " rowindex = " + rowIndex + " columnindex = "+ columnIndex);
return values;
};
// _________________________________________________________________ 

// Получение значений строки
// _________________________________________________________________
function getRowValues(rowIndex, puzzle) {
    var returned = []
    for (var i=0; i<puzzle[rowIndex].length; i++) {
        returned.push(Number(puzzle[rowIndex][i]));
    }
return (returned);
};
// __________________________________________________________________

// Получение значений столбца
// __________________________________________________________________
function getColumnValues(columnIndex, puzzle) {
var returned = [];
for (var r=0; r<9; r++) {
    returned[r] = Number(puzzle[r][columnIndex])
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
    for (var r=0; r<3; r++) {
        for (var c=0; c<3; c++) {
            returned.push(Number(puzzle[blockRowStart + r][blockColumnStart + c]));
        };
    };
    return returned
};
// __________________________________________________________________

// Основная функция
function solve(puzzle) {
var answer = Array.from(Object.create(puzzle));
if (solveHelper(answer)) {
    return answer;
}
console.log(answer);
return NaN
};
// ___________________________________________________________________
matrix = [
    [6, 5, 0, 7, 3, 0, 0, 8, 0],
    [0, 0, 0, 4, 8, 0, 5, 3, 0],
    [8, 4, 0, 9, 2, 5, 0, 0, 0],
    [0, 9, 0, 8, 0, 0, 0, 0, 0],
    [5, 3, 0, 2, 0, 9, 6, 0, 0],
    [0, 0, 6, 0, 0, 0, 8, 0, 0],
    [0, 0, 9, 0, 0, 0, 0, 0, 6],
    [0, 0, 7, 0, 0, 0, 0, 5, 0],
    [1, 6, 5, 3, 9, 0, 4, 7, 0]
  ];
console.log(solve(matrix));









