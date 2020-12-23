function twoSum (nums, target) {
  const cacheObj = {};
  for (let index = 0; index < nums.length; index++) {
    const pairNumber = target - nums[index];
    if (cacheObj[pairNumber] !== undefined && pairNumber !== nums[index] ) {
      return [cacheObj[pairNumber], index];
    } else {
      cacheObj[nums[index]] = index;
    }
  }
}

console.log(twoSum([2,7,11,15], 9)); // output [ 0, 1 ]
console.log(twoSum([2,7,11,15], 26)); // output [ 2, 3 ]
console.log(twoSum([2,7,11,15], 22)); // output [ 1, 3 ]
