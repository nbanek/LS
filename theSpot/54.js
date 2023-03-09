function removeIt(array, char) {
  return array.filter(elem => elem !== char);
}

console.log(removeIt(['a', 0, undefined, 'aa', 'a', 'A', []], 'a'));//[ 0, undefined, 'aa', 'A', []]
