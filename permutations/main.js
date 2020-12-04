/**
 *         [1,2,3] [1,2,3]
 *         [1,3,2]
 * [1,2,3] [2,1,3]
 *         [2,3,1]
 *         [3,1,2]
 *         [3,2,1]
 *
 *                   [1]             [1,2]         [1,2,3] when functions return pop cache arr
 * [1,2,3] -> i=0 -> [2,3] -> i=0 -> [3] -> i=0 -> [] isEmpty -> add cached arr to answers
 *                   [1]             [1,3]         [1,3,2]
 *                   [2,3] -> i=1 -> [2] -> i=0 -> []
 *         -> i=1 -> [2]..
 *
 */

function permute (numsArr, cacheArr = [], answers = []) {
  if (numsArr.length === 0) answers.push([...cacheArr]);

  for(let i = 0; i < numsArr.length; i++) {
    cacheArr.push(numsArr[i]);
    const newNumArr = numsArr.filter((value, index) => index !== i);
    permute(newNumArr, cacheArr, answers);
    cacheArr.pop();
  }
  return answers;
}

console.log(permute([1,2,3]));