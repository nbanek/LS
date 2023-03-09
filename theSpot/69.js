function findPairs(string) {
  let sum = 0;
  string.split('').forEach(char => {
    if (char === '(') {
      sum += 1;
    } else if (char === ')') {
      sum -= 1;
    }
  });
  return !sum;
}

console.log(findPairs('abcd(abcd ) dbb ) ddss ('), //true
findPairs('ab))) ccc ((('), //true
findPairs('(fff))))(('), //false
findPairs('(((((('), //false
findPairs('()()())()()(')); //true
