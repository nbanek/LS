function segregate(string) {
  let obj = {lettersUpper : '' , lettersLower : '', numbers : '', other : ''};

  return string.split('').reduce((acc, cv) => {
    if (/[A-Z]/.test(cv)) {
      acc['lettersUpper'] += cv;
    }
    if (/[a-z]/.test(cv)) {
      acc['lettersLower'] += cv;
    }
    if (/\d/.test(cv)) {
      acc['numbers'] += cv;
    }
    if (/\W/.test(cv)) {
      acc['other'] += cv;
    }
    return acc;
  }, {lettersUpper : '' , lettersLower : '', numbers : '', other : ''});

}
console.log(segregate('aad559 $%,'), //{lettersUpper: '', lettersLower: 'aad', numbers: '559', other characters: '$%,' }
segregate('11AB')); //{lettersUpper: 'AB', lettersLower: '', numbers: '', other characters: '' }
