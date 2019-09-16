// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💎️ Assertion Passed: " ${actual} === ${expected}`);
  } else {
    console.log(`💥️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

// Test Code
console.log(tail(["Hello", "Lighthouse", "Labs"]));
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
console.log(tail(["head"]));
console.log(tail([]));
