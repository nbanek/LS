function isTautonym(string) {
  let words = string.split(/\W/);
  return words[0] === words[1];
}

console.log(isTautonym("Pago Pago")); //true
console.log(isTautonym('abcd')); //false
