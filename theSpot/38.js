function hasOnlyConsonants(string) {
  return string.replace(/[bcdfghjklmnpqrstvwxyz]/gi, '').length === 0;
}


console.log(hasOnlyConsonants('typRRWQQL')); //true
console.log(hasOnlyConsonants('AccdE4$$ __ ')); //fa;se
