/*


Algorithm:
  Sum all the numbers
    Iterate from Sum to infinity
      If sum + iterated number is prime
        return sum + iterate

*/

function isPrime(number) {
  if (number < 2) {
    return number;
  } else {
    for (let idx = 2; idx < number; idx += 1) {
      if (number % idx === 0) {
        return false;
      }
    }
  }
  return true;
}


function minimumNumber(array) {
  let sum = array.reduce((acc, cv) => acc + cv);
  for (let idx = sum; ;idx += 1) {
    if (isPrime(idx)) {
      return idx - sum;
    }
  }
}

console.log(minimumNumber([2,12,8,4,6]));