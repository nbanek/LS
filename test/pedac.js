function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function palindromes(number1, number2) {
  if ([...arguments].some(num => num < 0) ||
      [...arguments].some(num => typeof (num) !== 'number')) {
    return 'Invalid Input';
  }

  let palindromes = [];
  let counter = number1;
  if (counter < 10) counter = 11;

  while (palindromes.length < number2) {
    if (isPalindrome(String(counter))) {
      palindromes.push(counter);
    }
    counter += 1;
  }

  return palindromes;
}

console.log(palindromes(15, 3),
palindromes(1000, -7),
palindromes(15, '4'))