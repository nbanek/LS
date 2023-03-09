//push number to seen array, if seen push to duplicate
function extractDup(array) {
  let seen = [];
  let duplicates = [];

  array.forEach(number => {
    if (!seen.includes(number)) {
      seen.push(number);
    } else {
      duplicates.push(number);
    }
  });
  return duplicates;

}

console.log(extractDup([1,2,3,4,1,2])); //[1,2];
