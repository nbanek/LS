function findOdd(arr) {
  let value = arr.reduce((acc, cv) => {
    if (!acc[cv]) acc[cv] = 1;
    else acc[cv] += 1;
    return acc;
  }, {});
  return Object.keys(value).filter(num => value[num] % 2 !== 0)[0];
}


console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));