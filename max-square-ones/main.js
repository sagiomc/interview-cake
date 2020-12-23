/** Casey has a square image made up of black and white pixels
 * represented as 0 and 1 respectively. As part of an image analysis
 * process, Casey needs to determine the size of the largest square area
 * of white pixels. Given a 2-dimensional square matrix that represents
 * the image, write a function to determine the length of a side of the
 * largest square area made up of white pixels.
 * For example, the n x n = 5 x 5 matrix of pixels is represented as
 * arr =[[1,1,1,1,1], [1,1,1,0,0], [1,1,1,0,0], [1,1,1,0,0], [1,1,1,1,1].
 * A diagram of the matrix is
 * 1 1 1 1 1
 * 1 1 1 0 0
 * 1 1 1 0 0
 * 1 1 1 0 0
 * 1 1 1 1 1
 * The largest square sub-matrix is 3 x 3 in size starting at position
 * (0,0), (1,0) or (2,0). The expected return value is 3.
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
