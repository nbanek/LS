/*
do
fib = first + second
first = second
second = fib
while(fib < end)


*/



function generateFibs(first, second, end) {
  let fib;
  let fibs = [first, second];
  do {
    fib = first + second;
    first = second;
    second = fib;
    fibs.push(fib);
  } while (fib < end);
  return fibs;
}

function findMissingFibo(array) {
  let fibs = generateFibs(array[0], array[1], array[array.length - 1]);
  let difference = fibs.filter(number => !array.includes(number));
  return difference[0] || false;

}

console.log(findMissingFibo([1, 1, 2, 3, 8, 13, 21, 34, 55]));//5
console.log(findMissingFibo([ 8, 13, 21, 34, 55])); //false
