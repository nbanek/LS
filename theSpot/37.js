function hasOnlyVowels(string) {
  return string.replace(/[aeiou]/gi, '').length === 0;
}

console.log(hasOnlyVowels('aaeuiooae')); //true
console.log(hasOnlyVowels('tgbhrrf_00&')); //false
