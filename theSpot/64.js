function generatePrimes(start, end) {
  let primes = [];
  for (let idx = start; idx <= end; idx += 1) {
    let prime = true;
    for (let jdx = 2; jdx < idx; jdx += 1) {
      if (idx % jdx === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      primes.push(idx);
    }
  }
  return primes;
}

function findMissingPrime(array) {
  let primes = generatePrimes(array[0], array[array.length - 1]);
  let missing = primes.filter(number => !array.includes(number));
  return missing[0] || false;
}

console.log(findMissingPrime([2, 3, 5, 11, 13, 17, 19, 23]),  //7
findMissingPrime([23, 29, 31, 41, 43, 47, 53, 59, 61]), //37
findMissingPrime([53, 59, 61, 67, 71, 73, 79, 83])) //false

/*
Iterate from 2 to highest number desired
...Iterate from 2 to highest number desired
......if first iterator divides evenlly into second
.........not prime


*/