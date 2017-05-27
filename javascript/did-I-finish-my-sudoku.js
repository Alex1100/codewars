//Prompt
// Write a function done_or_not passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

// Sudoku rules:
// Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

// There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.

// In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.

// There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.

// In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.

// A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.

// Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.

// In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.

// For those who don't know the game, here are some information about rules and how to play Sudoku: http://en.wikipedia.org/wiki/Sudoku and http://www.sudokuessentials.com/






//Solution
function doneOrNot(boardStr){
  boardStr = [].concat.apply([], boardStr).toString()
  var rows = [];
  var rowIndex = 0;
  var rowLength = 9;
  var arrOfNumStrings = boardStr.split(',').join('').split('');

  //checks for all rows
  while(rowIndex < rowLength && rowLength <= arrOfNumStrings.length){
    rows.push(arrOfNumStrings.slice(rowIndex, rowLength));
    rowLength += 9;
    rowIndex += 9;
  }

  rows.map((row) => !row.filter((el, i, arr) => arr.indexOf(el) === i).length === 9).length === 9;
  var rowsValidChecker = !rows.map((row) => row.filter((el, i, arr) => arr.indexOf(el) === i).length).some((i) => i !== 9);

  //checks for all columns
  var columns = [];
  var columnIndex = 0;
  var columnLength = 9;

  while(columns.length < 9){
    for(var i = 0; i < 9; i++){
      columns.push([]);
      for(var z = 0; z < columnLength; z++){
        columns[i].push(arrOfNumStrings[columnIndex]);
        columnIndex += 9;
      }
      columnIndex = i + 1;
    }
  }

  columns.map((column) => column.filter((el, i, arr) => arr.indexOf(el) === i).length === 9).length === 9;
  var columnValidChecker = !columns.map((column) => column.filter((el, i, arr) => arr.indexOf(el) === i).length).some((i) => i !== 9);


  //checks for all sub-regions
  var subRegions = [];
  var counter = 0;
  var subRegionsIndex = 0;
  var rowIdx = 0;
  var rowLimit = 3;

  while(subRegions.length < 9){
    subRegions.push([rows[counter].slice(rowIdx, rowLimit), rows[counter + 1].slice(rowIdx, rowLimit), rows[counter + 2].slice(rowIdx, rowLimit)]);
    subRegions.push([rows[counter].slice(rowIdx + 3, rowLimit + 3), rows[counter + 1].slice(rowIdx + 3, rowLimit + 3), rows[counter + 2].slice(rowIdx + 3, rowLimit + 3)]);
    subRegions.push([rows[counter].slice(rowIdx + 6, rowLimit + 6), rows[counter + 1].slice(rowIdx + 6, rowLimit + 6), rows[counter + 2].slice(rowIdx + 6, rowLimit + 6)]);
    counter += 3;
  }

  subRegions = subRegions.map((region) => [].concat.apply([], region));

  var subRegionsValidChecker = !subRegions.map((region) => region.filter((el, i, arr) => arr.indexOf(el) === i).length).some((i) => i !== 9);



  if(rowsValidChecker && columnValidChecker && subRegionsValidChecker){
    return 'Finished!';
  } else {
    return 'Try again!';
  }
}





//Tests
Test.assertEquals(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                         [6, 7, 2, 1, 9, 5, 3, 4, 8],
                         [1, 9, 8, 3, 4, 2, 5, 6, 7],
                         [8, 5, 9, 7, 6, 1, 4, 2, 3],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 6, 1, 5, 3, 7, 2, 8, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 4, 5, 2, 8, 6, 1, 7, 9]]), "Finished!");

Test.assertEquals(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                         [6, 7, 2, 1, 9, 0, 3, 4, 9],
                         [1, 0, 0, 3, 4, 2, 5, 6, 0],
                         [8, 5, 9, 7, 6, 1, 0, 2, 0],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 0, 1, 5, 3, 7, 2, 1, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 0, 0, 4, 8, 1, 1, 7, 9]]), "Try again!");

Test.assertEquals(doneOrNot([[1, 3, 2, 5, 7, 9, 4, 6, 8],
                        [4, 9, 8, 2, 6, 1, 3, 7, 5],
                        [7, 5, 6, 3, 8, 4, 2, 1, 9],
                        [6, 4, 3, 1, 5, 8, 7, 9, 2],
                        [5, 2, 1, 7, 9, 3, 8, 4, 6],
                        [9, 8, 7, 4, 2, 6, 5, 3, 1],
                        [2, 1, 4, 9, 3, 5, 6, 8, 7],
                        [3, 6, 5, 8, 1, 7, 9, 2, 4],
                        [8, 7, 9, 6, 4, 2, 1, 5, 3]]), "Finished!");

Test.assertEquals(doneOrNot([[1, 3, 2, 5, 7, 9, 4, 6, 8],
                        [4, 9, 8, 2, 6, 1, 3, 7, 5],
                        [7, 5, 6, 3, 8, 4, 2, 1, 9],
                        [6, 4, 3, 1, 5, 8, 7, 9, 2],
                        [5, 2, 1, 7, 9, 3, 8, 4, 6],
                        [9, 8, 7, 4, 2, 6, 5, 3, 1],
                        [2, 1, 4, 9, 3, 5, 6, 8, 7],
                        [3, 6, 5, 8, 1, 7, 9, 2, 4],
                        [8, 7, 9, 6, 4, 2, 1, 3, 5]]), "Try again!");

Test.assertEquals(doneOrNot([[1, 3, 2, 5, 7, 9, 4, 6, 8],
                        [4, 9, 8, 2, 6, 0, 3, 7, 5],
                        [7, 0, 6, 3, 8, 0, 2, 1, 9],
                        [6, 4, 3, 1, 5, 0, 7, 9, 2],
                        [5, 2, 1, 7, 9, 0, 8, 4, 6],
                        [9, 8, 0, 4, 2, 6, 5, 3, 1],
                        [2, 1, 4, 9, 3, 5, 6, 8, 7],
                        [3, 6, 0, 8, 1, 7, 9, 2, 4],
                        [8, 7, 0, 6, 4, 2, 1, 3, 5]]), "Try again!");

Test.assertEquals(doneOrNot([[1, 2, 3, 4, 5, 6, 7, 8, 9],
                         [2, 3, 4, 5, 6, 7, 8, 9, 1],
                         [3, 4, 5, 6, 7, 8, 9, 1, 2],
                         [4, 5, 6, 7, 8, 9, 1, 2, 3],
                         [5, 6, 7, 8, 9, 1, 2, 3, 4],
                         [6, 7, 8, 9, 1, 2, 3, 4, 5],
                         [7, 8, 9, 1, 2, 3, 4, 5, 6],
                         [8, 9, 1, 2, 3, 4, 5, 6, 7],
                         [9, 1, 2, 3, 4, 5, 6, 7, 8]]), "Try again!");
