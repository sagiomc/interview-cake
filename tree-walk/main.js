/**
 * const input = {
  a: 'b',
  c: 'd',
  e: {   --- e -> iteration f
    f: 'g'
  },
  h: { ---> h ----> iteration i --> iteration --> j, l (false)
    i: {
      j: 'k',
      l: 'm'
    }
  }
};
 const expected =
 `a
 c
 e -> f
 h -> i -> j
 h -> i -> l`

 INPUT
 |
 a    c      e    h
 |    |
 f    i
 /  \
 j    l
 */
function tree (treeObj, cacheBranch = [], cacheAnswers = []) {
  const SYMBOL = ' -> ';
  for (const key in treeObj) {
    if (treeObj.hasOwnProperty(key) && typeof treeObj[key] === 'object') {
      cacheBranch.push(key + SYMBOL);
      tree(treeObj[key], cacheBranch, cacheAnswers);
      cacheBranch = [];
    } else {
      cacheBranch.push(key);
      cacheAnswers.push([...cacheBranch]);
      cacheBranch.pop();
    }
  }
  return cacheAnswers.map(value => value.join('')).join('');
}
const testObj = {
  a: 'b',
  c: 'd',
  e: {
    f: 'g'
  },
  h: {
    i: {
      j: 'k',
      l: 'm'
    }
  }
};

console.log(tree(testObj));
