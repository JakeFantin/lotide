const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let keepers = [];
  for (let i = 0; i < source.length; i++) {
    let toRemove = 0;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        toRemove = 1;
      }
    }
    if (toRemove === 0) {
      keepers.push(source[i]);
    }
  }
  return keepers;
}

module.exports = without;
// const words = ["hello", "world", "lighthouse"];
// assertArraysEqual(without(['hello', 'world', 'lighthouse'], ['lighthouse']), ['hello', 'world']);
// assertArraysEqual(words,['hello','world','lighthouse']);
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without([1, 2, 3], [1,3]), [2]);
// assertArraysEqual(without([], []), []);
