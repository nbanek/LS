function extractEl(array, num) {
  let counts = array.reduce((acc, cv) => {
    if (!acc[cv]) {
      acc[cv] = 1;
    } else {
      acc[cv] += 1;
    }
    return acc;
  }, {});
  let extracted = [];
  Object.keys(counts).filter(key => counts[key] === num).forEach(elem => {
    extracted = extracted.concat(Array(num).fill(elem));
  });
  return extracted;
}

console.log(extractEl(['a', 1, 'A', 'a', 'a', '111', 1, 1], 3)); //['a', 'a', 'a', 1, 1, 1];
