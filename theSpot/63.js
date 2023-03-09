/*
Algorithm:
let missing = false;
Iterate the array from array[0] to array[array.length - 1]
...if idx isn't array[0]
*/

function findMissing(array) {
  for (let idx = array[0]; idx < array[array.length - 1]; idx += 1) {
    if (idx !== array[idx - array[0]]) {
      return idx;
    }
  }
  return false;
}

console.log(findMissing([0,1,2,3,5,6,7])); //4
console.log(findMissing([100, 101, 102, 103, 104, 106, 107])); //105
console.log(findMissing([34, 35, 36, 37, 38, 39])); //false
