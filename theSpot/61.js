function findMe(array, elem) {
  if (array.includes(elem)) {
    return array.indexOf(elem);
  } else return false;
}

console.log(findMe([5, null, undefined, 0, '11', 11, {'11':11}, [11, '11']], 11));// 5
console.log(findMe([5, null, undefined, 0, '11', {'11':11}, [11, '11']], 11)) //false
