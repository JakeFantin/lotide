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

const flatten = function(source){
  let flat = [];
  for(let i = 0; i < source.length; i++){
    if(Array.isArray(source[i])){
      flat = flat.concat(flatten(source[i]));
    }
    else{
      flat.push(source[i]);
    }
  }
  return flat;
};

assertArraysEqual(flatten([1,2,[1,1],4]), [1,2,1,1,4]);
assertArraysEqual(flatten([1,3,[1,2],4,[6]]),[1,3,1,2,4,6]);