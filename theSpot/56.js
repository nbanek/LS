function replaceIt(array, string1, string2) {
  return array.map(elem => {
    if (elem === string1) {
      return string2;
    }
    return elem;
  });
}

console.log(replaceIt(['a', 'b', NaN, [], 'A', 'aa', 'a'], 'a', '00')); //['00', 'b', NaN, [], 'A', 'aa', '00']
