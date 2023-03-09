function findDuplicates(string) {
  let seen = string.split('').reduce((acc, cv) => {
    if (!acc[cv]) {
      acc[cv] = 1;
    } else {
      acc[cv] += 1;
    }
    return acc;
  }, {});
  return Object.keys(seen).filter(key => seen[key] > 1);
}

console.log(findDuplicates('kabcdeffghhijk')); //['k', 'f', 'h']
