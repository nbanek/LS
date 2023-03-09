/*
Problem: Write a function that returns the greatest product
of five consecutive digits in a given string

Input: String of numbers
Output: Number

Requirements: String will always have more than 5 digits
  convert string to number

Examples:
  greatestProduct("123834539327238239583") // should return 3240

Data Structure:

Algorithm:
  Create a variable call maxProduct
  Iterate through the string
    Get product for next 5 indices
    If product is greater than maxProduct
    maxProduct = product
  Return maxProduct

Code:
*/

function greatestProduct(string) {
  let maxProduct = 0;

  for (let idx = 0; idx < string.length - 4; idx += 1) {
    let product = string.slice(idx, idx + 5)
      .split('')
      .reduce((a, b) => a * b);
    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
}


console.log(greatestProduct("92494737828244222221111111532909999"));