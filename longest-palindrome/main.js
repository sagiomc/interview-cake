function longestPalindrome (stringToEvaluate) {
  if(stringToEvaluate.length < 1) return "";

  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < stringToEvaluate.length; i++) {
    const firstLen = lengthFromMiddle(stringToEvaluate, i, i); // racecar - 6 / 2 = 3
    const secLen = lengthFromMiddle(stringToEvaluate, i, i + 1); // aabbaa - 5 / 2  = 2.5 = 2
    const finalLen = Math.max(firstLen, secLen);
    // check if len is grater than boundries
    if (finalLen > (endIndex - startIndex)) {
      // readjust the boundries
      startIndex = i - Math.floor(((finalLen - 1) / 2)); // racecar - 6 / 2 = 3
      endIndex = i + Math.floor(finalLen / 2); // aabbaa - 5 / 2  = 2.5 = 2
    }
  }
  return stringToEvaluate.substring(startIndex, endIndex + 1);
}

function lengthFromMiddle (s, leftIndex, rightIndex) {
  if (leftIndex > rightIndex ) return 0;

  while (leftIndex >= 0 && rightIndex < s.length && s[leftIndex] === s[rightIndex]) {
    leftIndex--;
    rightIndex++;
  }

  return rightIndex - leftIndex - 1;
}


// Tests cases
console.log(longestPalindrome("babad") === 'bab' || longestPalindrome("babad") === 'aba');
console.log(longestPalindrome('cbbd') === 'bb');
console.log(longestPalindrome('racecar') === 'racecar');
