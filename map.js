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

// Functional Code
const map = function(array, callback){
  const results = [];
  for(let item of array){
    results.push(callback(item));
  }
  return results;
};

//Test Code
assertArraysEqual(map([5,6,7], num => num*3), [15,18,21]);
assertArraysEqual(map(['pow','cow','mow'], word => word+='ard'), ['poward','coward','moward']);
assertArraysEqual(map(['aquiesce','concur','agree'], word => word[0]+word[4]), ['ae','cu','ae']);