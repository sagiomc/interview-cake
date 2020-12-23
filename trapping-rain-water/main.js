function trap (height) {
  const leftArr = [0];
  let right = 0;
  let total = 0;

  for(let i = 1; i < height.length; i++) {
    leftArr.push(Math.max(leftArr[i - 1], height[i - 1]));
  }

  for (let j = height.length - 2; j >= 0; j--) {
    right = Math.max(right, height[j + 1]);
    let sum = Math.min(right, leftArr[j]) - height[j];
    if (sum > 0) {
      total += sum;
    }
  }

  return total;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]) === 6);