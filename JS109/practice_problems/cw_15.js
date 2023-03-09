function findUniq(arr) {
  arr.sort((a, b) => a - b);
  if (arr[0] === arr[Math.floor(arr.length  / 2)]) return arr[arr.length - 1];
  return arr[0];
}


console.log(findUniq([ 1, 0, 0 ]));
console.log(findUniq([ 0, 1, 0 ]));
console.log(findUniq([ 0, 0, 1 ]));
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 3, 10, 3, 3, 3 ]));