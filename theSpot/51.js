//reduce string to object with counts, filter keys array by value of 2
function extractChar(string, num) {
  let counts = string.split('').reduce((acc, cv) => {
    if (!acc[cv]) {
      acc[cv] = 1;
    } else {
      acc[cv] += 1;
    }
    return acc;
  }, {});
  let repeats = [];
  Object.keys(counts).filter(key => counts[key] === num).forEach(char => {
    repeats = repeats.concat(Array(num).fill(char));
  });
  return repeats;
}

console.log(extractChar('abcabcdefra', 2)); // ['b', 'b', 'c', 'c'];
