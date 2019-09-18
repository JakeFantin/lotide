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

const letterPositions = function(source){
  const results = {};
  for(let i = 0; i < source.length; i++){
    if(source[i] !== ' '){
      if(results[source[i]]){
        results[source[i]].push(i);
      }else{
          results[source[i]] = [i];
      }
    }
  }
  return results;
}
results1 = letterPositions('lighthouse in the world');
console.log(results1);

assertArraysEqual(letterPositions('hello').l, [2,3]);
assertArraysEqual(letterPositions('lighthouse in the world').l, [0,21]);

