function extractStr(string, subStr) {
  let subStrings = [];
  let regex = new RegExp(subStr, 'i');
  for (let idx = 0; idx < string.length - 2; idx += 1) {
    if (regex.test(string.slice(idx, idx + subStr.length))) {
      subStrings.push(string.slice(idx, idx + subStr.length));
    }
  }
  return subStrings;
}

console.log(extractStr('ababadefabcdefabcdef abcdefg', 'aba')); //['abc', 'abc', 'abc', 'abc'];
