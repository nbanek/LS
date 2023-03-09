function swappIt(string) {
  let strArr = string.split('');
  [strArr[0], strArr[strArr.length - 1]] = [strArr[strArr.length - 1], strArr[0]];
  return strArr.join('');
}

console.log(swappIt('abcdef')); //'fbcdea'
