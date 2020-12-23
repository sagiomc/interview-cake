function groupAnagrams (wordsArr) {
  let cache = {};
  // We find a number that doesn't repeat, prime numbers are a good option here
  // We can do a multiplication with that number in each letter of abecedary
  // So these are the first 26 prime numbers
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];

  for(const word of wordsArr) {
    // create the key with the unique identifier (prime number for each letter)
    // apply a reduce for get the atomic value of a character in a word and generate the unique key
    // we apply -97, because the ascii code for letter 'a' is '097'
    let key = word.split('')
      .reduce((total, currChar) => total*primes[currChar.charCodeAt() - 97], 1);
    if (!cache[key]) {
      cache[key] = [word];
    } else {
      cache[key].push(word);
    }
  }

  console.log({cache});
  return Object.values(cache);
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
