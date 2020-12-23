function lengthOfLongestSubstring (inputStr) {
  // Initialize start point, hash set and longest
  let start = 0;
  const setHash = new Set();
  let longest = 0;
  // aba
  // Iterate finding the end of each valid subset
  for (let end = 0; end < inputStr.length; end++) {
    // Validate if current value is already in the HashSet
    if (setHash.has(inputStr[end])) {
      // Move our pointer start to the next start of subset
      while (inputStr[start] !== inputStr[end]) {
        // Delete the first values of setHash
        setHash.delete(inputStr[start]);
        start++;
      }
      // Delete the first value if not enter in while loop
      setHash.delete(inputStr[start]);
      start++;
    }
    // If value doesn't exists, added to hash set
    setHash.add(inputStr[end]);
    // Get the longest value comparing with the hash size
    longest = Math.max(longest, setHash.size);
  }
  return longest;
}

// Test cases
console.log(lengthOfLongestSubstring('abcabcbb') === 3);
console.log(lengthOfLongestSubstring('bbbbbb') === 1);
console.log(lengthOfLongestSubstring('pwwkew') === 3);
console.log(lengthOfLongestSubstring('aba') === 2);
