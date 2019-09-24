// Function Implementation
const assertEqual = require('./assertEqual').default;

const head = function(array) {
  if (array.length) {
    return array[0];
  } else {
    return undefined;
  }
};

module.exports = head;
// Test Code
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// console.log(head([]));
