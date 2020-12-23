/*
* First let think how many rows and cols can be visited. We can't go
* further than outside square with a top-right corner in (999, 999)
* and bottom-left corner in (-999, -999) because one of coordinates
* on the square side will be +999, but 9+9+9 > 23.
 */
type Coordinate = {
  col: number
  row: number
};

function largestArea (): void {
  const AXIS_LENGTH = 1000;
  const visitedMatrix = multidimensionalArray(AXIS_LENGTH * 2, AXIS_LENGTH * 2);
  // keep track of the last coordinates that the character visited
  const locations = Array<Coordinate>();
  const moves = [
    {col: -1, row: 0},
    {col: 1, row: 0},
    {col: 0, row: -1},
    {col: 0, row: 1}
  ];

  let area = 1;

  // Initialize starting point (0,0) and the actual coordinate of the origin
  locations.push({ col: 0, row: 0 });
  visitedMatrix[AXIS_LENGTH][AXIS_LENGTH] = true;

  while (locations.length !== 0) {

    const lastLocation = locations.pop() as Coordinate;

    for (const move of moves) {
      const nextCol = lastLocation.col + move.col;
      const nextRow = lastLocation.row + move.row;
      const axisCol = nextCol + AXIS_LENGTH;
      const axisRow = nextRow + AXIS_LENGTH;

      if (isSafe(nextCol, nextRow) && visitedMatrix[axisCol] && !visitedMatrix[axisCol][axisRow]) {
        // mark as visited and increment the area
        visitedMatrix[axisCol][axisRow] = true;
        area += 1;
        locations.push({col: nextCol, row: nextRow});
      }
    }
  }

  console.log(`The largest area in a ${AXIS_LENGTH} x ${AXIS_LENGTH} is: ${area}`);
}

function isSafe (col: number, row: number): boolean {
  const THRESHOLD = 23;
  const sumCol = sumAbs(col);
  const sumRow = sumAbs(row);

  return (sumCol + sumRow) <= THRESHOLD;
}

function sumAbs (num: number): number {
  if (num < 10) {
    return num;
  } else {
    const numbers = num.toString().split('');
    const sum = numbers.reduce((accumulator, current) => {
      const sumNum = parseInt(accumulator) + parseInt(current);
      return sumNum.toString();
    });
    return parseInt(sum);
  }
}

function multidimensionalArray<T>(n: number, m: number): Array<Array<T>> {
  let sub = new Array(n);
  for (let i = 0; i < sub.length; i++) {
    sub[i] = new Array(m);
  }
  return sub;
}

largestArea();


/*
console.log(sumAbs(1212));
console.log(sumAbs(9));
console.log(sumAbs(5));
console.log(sumAbs(1));
console.log(sumAbs(19));
console.log(sumAbs(10));
*/
