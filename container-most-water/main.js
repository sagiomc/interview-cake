function maximumArea (arr) {
  let start = 0;
  let end = arr.length - 1;
  let maxArea = 0;

  while (start - end) {
    const width = end - start;
    const height = Math.min(arr[start], arr[end]);
    maxArea = Math.max(maxArea, width * height);
    arr[start] < arr[end] ? start++ : end--;
  }

  return maxArea;
}

console.log(maximumArea([1,8,6,2,5,4,8,3,7]) === 49);
