function hasOnlyNumbers(string) {
 return string.replace(/\d/g, '').length === 0;
}

console.log(hasOnlyNumbers('12311')); //true
console.log(hasOnlyNumbers('Pdd00_4a11')); //false
