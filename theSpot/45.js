function haveSameChar(string) {
  let sameChar = [string[0]];
  for (let idx = 0; idx < string.length; idx += 1) {
    if (!sameChar.includes(string[idx])) {
      return false;
    }
  }
  return true;
}


console.log(haveSameChar('aaaaaa'), //true
haveSameChar('cccb9')); //false
