/**
 * Q1 Given a list of integers L, find the maximum length of a sequence
 * of consecutive numbers that can be formed using elements from L.
 *
 * For example:
 * [5, 2, 99, 3, 4, 1, 100] -> max(|{99,100}|, |{1...5}|) = 5
 *  //loop (index)
 *  // 5
 *  // if not exists 4
 *  // while(if exists 6)
 *  //  currentInLoopStroke += 1
 *      index += 1
 *     maxStroke = max(maxStroke, currentInLoopStroke)
 */
function maxSequenceIntegers (arrayOfIntegers) {
  // Initialize the maximum stroke
  let maxStroke = 0
  for (let index = 0; index < arrayOfIntegers.length; index++) {
    // Check if exists a value from right of the current
    if (!arrayOfIntegers.includes(arrayOfIntegers[index]-1)) {
      // Initialize our counter stroke
      let currentInLoopStroke = 1
      while (arrayOfIntegers.includes(arrayOfIntegers[index]+1)) {
        // Increment our counter and current index
        currentInLoopStroke++
        index++
      }
      // Update our maximum stroke with counter stroke
      maxStroke = Math.max(currentInLoopStroke, maxStroke)
    }
  }
  return maxStroke
}

console.log(maxSequenceIntegers([5, 2, 99, 3, 4, 1, 100]));
