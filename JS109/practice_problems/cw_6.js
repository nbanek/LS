/* eslint-disable max-len */
/*
Problem:

Examples:

Data Structure:

Algorithm:

Code:
*/

function smallest(str) {
  let subStrs = [];
  for (let idx = 0; idx < str.length; idx++) {
    subStrs.push(str.slice(0, idx + 1));
  }

  let repeat =  subStrs.map(elem => {
    return elem.repeat(subStrs.length / elem.length);
  });
  debugger;
  if (repeat.includes(str)) {
    return [subStrs[repeat.indexOf(str)], (str.length / (repeat.indexOf(str) + 1))];
  }
}


console.log(smallest("ababab"));