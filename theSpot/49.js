
// add number to seen array, if seen then skip number

function removeDuplicate(array) {
  let seen = [];
  array.forEach(number => {
    if (!seen.includes(number)) {
      seen.push(number);
    }
  });
  return seen;
}

console.log(removeDuplicate([1, 2, 3, 5, 2, 1, 5, 2 ])); //=> [1, 2, 3, 5];
