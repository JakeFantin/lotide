// Function Implementation
const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected){
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`💎️ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`💥️ Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
}
module.exports = assertObjectsEqual;
//Testing code

// const df = {
//   i: 3,
//   j: [4, 5]
// };
// const fd = {
//   j: [4, 5],
//   i: 3
// };

// const cs = {
//   i: 3,
//   j: [4, 5, fd]
// };
// const cf = {
//   i: 3,
//   j: [4, 5, df]
// };

// const cdd = { c: "1", d: ["2", ['245', 3]] };
// const dcc = { d: ["2", ['245', 3]], c: "1" };
// assertObjectsEqual(cdd, dcc); // => true

// const cdb = { c: 1, d: [cs, 3] };
// const dcb = { d: [cf, 3], c: 1 };
// assertObjectsEqual(cdb, dcb); // => true