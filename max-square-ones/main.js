/*
Given a [n x m] matrix with 0's and 1's, find the largest square matrix
area of 1's
Example: Given this matrix:
 1 1 0 1 0
 0 1 1 1 0
 1 1 1 1 0
 0 1 1 1 1

The result given the matrix above should be 3, because 3^2 = 9

 1  1 0 1  0
 0 [1 1 1] 0
 1 [1 1 1] 0
 0 [1 1 1] 1

 */
function largestSquare(matrix) {
  const cacheMatrix = [...matrix];
  let maxSize = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (row !== 0 && col !== 0) {
        if (matrix[row][col] > 0) {
          cacheMatrix[row][col] = 1 + Math.min(matrix[row][col-1], matrix[row-1][col], matrix[row-1][col-1]);
        }
      }
      maxSize = Math.max(maxSize, cacheMatrix[row][col]);
    }
  }
  return maxSize;
}

const matrixTest1 = [
  [1,1,0,1,0],
  [0,1,1,1,0],
  [1,1,1,1,0],
  [0,1,1,1,1]
];

const matrixTest2 = [
  [1,1,0,1,0],
  [0,1,1,1,0],
  [1,1,1,1,0],
  [0,1,0,1,1]
];

const matrixTest3 = [
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1]
];

const matrixTest4 = [
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1]
];

const matrixTest5 = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0]
];

console.log(largestSquare(matrixTest1) === 3);
console.log(largestSquare(matrixTest2) === 2);
console.log(largestSquare(matrixTest3) === 4);
console.log(largestSquare(matrixTest4) === 5);
console.log(largestSquare(matrixTest5) === 0);
