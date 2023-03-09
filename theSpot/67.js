
function findDuplicates(array) {
  let duplicates = [];
  for (let idx = 0; idx < array.length - 1; idx += 1) {
    for (let jdx = idx + 1; jdx < array.length; jdx += 1) {
      if (array[idx] === array[jdx] && !duplicates.includes[array[idx]]) {
        duplicates.push(array[idx]);
      } else {
        break;
      }
    }
  }
  return duplicates.length ? duplicates : false;
}

console.log(findDuplicates([1, 1, [], [], {1:1}, {1:1}, 'hello', undefined])); //[1]
console.log(findDuplicates([1, 2, 3, [], [], null])); //false
