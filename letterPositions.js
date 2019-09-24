const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = letterPositions;
// Test Code
// results1 = letterPositions('lighthouse in the world');
// console.log(results1);

// assertArraysEqual(letterPositions('hello').l, [2,3]);
// assertArraysEqual(letterPositions('lighthouse in the world').l, [0,21]);

