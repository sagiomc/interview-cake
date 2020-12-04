const TOKENS = { '(': ')', '[': ']', '{': '}' };

function isCloseToken (char) {
  for(const key in TOKENS) {
    if (TOKENS[key] === char) return true;
  }
  return false;
}
function balancedString (str) {
  const stack = [];

  for(const char of str) {
    if(TOKENS[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0 || (isCloseToken(char) && TOKENS[stack.pop()] !== char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(balancedString('(){[]}[{}]')); // true
console.log(balancedString('([{}])')); // true
console.log(balancedString('({[]){}')); // false
console.log(balancedString('(5){[a]}[{f}](f){[]}[{}]')); // true
console.log(balancedString('([a{}a])')); // true
console.log(balancedString(']](]')); // false

