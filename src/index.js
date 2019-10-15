function deepCopy(arr) {
  const arr2 = []
  arr.forEach(el => {
    arr2.push([...el])
  })
  return arr2
}

function solver(_matrix) {
    var cellInfo = NaN;
    while (true) {
        var cellInfo = NaN;
  
        for (let rowIndex=0; rowIndex < 9; rowIndex++){
            for (let columnIndex=0; columnIndex < 9; columnIndex++) {
                if (_matrix[rowIndex][columnIndex] != 0) continue
                const _values = getValues( rowIndex, columnIndex, _matrix)
                const valuesCount = _values.length
                if (valuesCount == 0) return false
                if (valuesCount == 1) _matrix[rowIndex][columnIndex] = Number(_values.pop())
                if (!cellInfo) cellInfo = [[rowIndex, columnIndex], _values]
                if ( valuesCount < cellInfo[1].length) cellInfo = [[rowIndex, columnIndex], _values]   
                }
            }

                                     
        if (!cellInfo) return true
        else if (1 < cellInfo[1].length) break 
        }

    const r = cellInfo[0][0];
    const c = cellInfo[0][1];

    for (let v in cellInfo[1]) {

        const puzzleCopy = deepCopy(_matrix);
  
        puzzleCopy[r][c] = cellInfo[1][v];
        if (solver(puzzleCopy)) {    
            for (let d=0; d<9; d++) {
                for (let e=0; e<9; e++) {
                    _matrix[d][e] = Number(puzzleCopy[d][e]); 
                    }
                }
            return true;
            }
        }

        return false;
        }

const getValues = (rowInd, colInd, puzzle) => {
    const _Allvalues = [1,2,3,4,5,6,7,8,9];
    const _numbers = [];
    const blockRowStart = 3 * (Math.floor(rowInd/3));
    const blockColumnStart = 3 * (Math.floor(colInd/3));
                                      
    puzzle[rowInd].forEach(el => {
        _numbers.push(Number(el))
        })
    puzzle.forEach(el => {
        _numbers.indexOf(Number(el[colInd])) < 0 ? _numbers.push(Number(el[colInd])) : NaN 
        })
                                      
    for (let i=0; i<3; i++) {
        for (let k=0; k<3; k++) {
            const val = Number(puzzle[blockRowStart + i][blockColumnStart + k]);
            _numbers.indexOf(val) < 0 ? _numbers.push(val) : NaN
            }
        }
    return _Allvalues.filter(el => !(_numbers.includes(el)))
    }

const solve = (puzzle) => solver(Array.from(Object.create(puzzle))) ? Array.from(Object.create(puzzle)) : NaN

module.exports = function solveSudoku(matrix) {
  return solve(matrix);
};


 
 


