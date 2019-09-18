// Dependencies
const eqArrays =  function(listA, listB){
  if(listA.length !== listB.length) return false;
  for(let i = 0; i < listA.length; i++){
    if(listA[i] !== listB[i]){
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`💎️ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`💥️ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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

// Test Function
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3, 4]
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);