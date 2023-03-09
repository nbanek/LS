

let a = [1, 2, 3, 4, 2, 3, 5];

a = a.filter((num, idx) => {
  return [].concat(a.slice(0, idx), a.slice(idx + 1)).includes(num);
});

console.log(a);