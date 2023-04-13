const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((arrRow, itemRow) => {
    return arrRow.map((cell, itemCell) => {
      let result = 0;
      if (arrRow[itemCell - 1] === true) result++;
      if (arrRow[itemCell + 1] === true) result++;
      if (itemRow > 0){
          if (matrix[itemRow - 1][itemCell - 1] === true) result++;
          if (matrix[itemRow - 1][itemCell] === true) result++;
          if (matrix[itemRow - 1][itemCell + 1] === true) result++;
      }
      if (itemRow < matrix.length - 1){
          if (matrix[itemRow + 1][itemCell - 1] ===true) result++;
          if (matrix[itemRow + 1][itemCell] === true) result++;
          if (matrix[itemRow + 1][itemCell + 1] === true) result++;
      }
      return result;
    })
  })
}

module.exports = {
  minesweeper
};
