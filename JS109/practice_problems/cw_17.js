/* eslint-disable nonblock-statement-body-position */
/* eslint-disable max-len */
/*
Memoization;

Algorithm
Create empty object
Iterate through array
  If index isn't stored as key in object
    Create key set value to true;
  If Sum - iteration is equal to value stored in object
    return [Sum - iteration, Iteration];
*/


function sumPairs(a, s) {
  let mem = {};
  debugger;
  for (let x of a)
    if (mem[s - x])
      return [s - x, x];
    else
      mem[x] = true;
}

console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));