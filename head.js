// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💎️ Assertion Passed: " ${actual} === ${expected}`);
  } else {
    console.log(`💥️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  if (array.length) {
    return array[0];
  } else {
    return undefined;
  }
};

// Test Code
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([]));
