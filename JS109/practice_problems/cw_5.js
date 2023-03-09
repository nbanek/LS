function solve(str) {

  let len = str.length;
  let count = 0;

  for (let idx = 0; idx < len; idx++) {
    let temp = str[idx];

    // If current digit is even,
    // add count of substrings
    // ending with it. The count
    // is (i+1)
    if (temp % 2 !== 0) {
      count += (idx + 1);
    }
  }
  return count;
}

console.log(solve("1341"));