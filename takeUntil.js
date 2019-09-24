// Dependencies
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  results = [];
  for(let item of array){
    if(callback(item)) {
      return results;
    }else{
      results.push(item);
    }
  }
}
module.exports = takeUntil;
// Test Code
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// assertArraysEqual(takeUntil(data2, x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);

