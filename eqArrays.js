// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💎️ Assertion Passed: " ${actual} === ${expected}`);
  } else {
    console.log(`💥️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays =  function(listA, listB){
  if(listA.length !== listB.length) return false;
  for(let i = 0; i < listA.length; i++){
    if(listA[i] !== listB[i]){
      return false;
    }
  }
  return true;
}