/*
Problem:
Creat a function that takes a 2D array and returns an
array sorted in descending order according to length of the
inner array.

Examples:
sortArrLength([[1,2,undefined], [null, 0, 'hello wolrd', 11], [{1:1}]]); //[[null, 0, 'hello wolrd', 11], [1,2,undefined], [{1:1}] ];
sortArrLength(['a'], ['ab', 'a', null], [101, 1]); //[['ab', 'a', null], [101, 1], ['a']]

Code:
*/

function sortArrLength(array) {
  return array.sort((a, b) => {
    return b.length - a.length;
  });
}

console.log(sortArrLength([[1,2,undefined], [null, 0, 'hello wolrd', 11], [{1:1}]])); //[[null, 0, 'hello wolrd', 11], [1,2,undefined], [{1:1}] ];
sortArrLength(['a'], ['ab', 'a', null], [101, 1]); //[['ab', 'a', null], [101, 1], ['a']]
