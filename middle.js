// Dependencies


const assertArraysEqual = require('./assertArraysEqual');
// Actual Function
const middle = function(list){
  middleBit = [];
  if(list.length < 3) return middleBit;
  if(list.length % 2 === 0){
    middleBit.push(list[(list.length/2) - 1]);
    middleBit.push(list[list.length/2]);
  }else{
    middleBit.push(list[Math.floor(list.length/2)]);
  }
  return middleBit;
}
 module.exports = middle;
// Test Function
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3, 4]
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([]), []);
// assertArraysEqual(middle([1]), []);